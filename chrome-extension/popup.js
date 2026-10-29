// Smarters IPTV Web Player - Popup Controller
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('videoPlayer');
  const placeholder = document.getElementById('playerPlaceholder');
  const smartNotice = document.getElementById('smartNotice');
  const noticeText = document.getElementById('noticeText');
  let currentHls = null;

  // Tabs management
  const navTabs = document.querySelectorAll('.nav-tab');
  const tabContents = document.querySelectorAll('.tab-content');

  function switchToTab(tabId) {
    navTabs.forEach((t) => {
      if (t.dataset.tab === tabId) t.classList.add('active');
      else t.classList.remove('active');
    });
    tabContents.forEach((c) => {
      if (c.id === tabId) c.classList.add('active');
      else c.classList.remove('active');
    });
  }

  navTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      switchToTab(tab.dataset.tab);
    });
  });

  function showNotification(msg, durationMs = 5000) {
    if (!smartNotice || !noticeText) return;
    noticeText.innerHTML = msg;
    smartNotice.classList.remove('hidden');
    if (durationMs > 0) {
      setTimeout(() => {
        smartNotice.classList.add('hidden');
      }, durationMs);
    }
  }

  // Open Full Screen Web Player Tab
  const btnOpenFullTab = document.getElementById('btnOpenFullTab');
  if (btnOpenFullTab) {
    btnOpenFullTab.addEventListener('click', () => {
      const currentUrl = document.getElementById('streamUrl').value.trim();
      const playerUrl = chrome.runtime.getURL('player.html') + (currentUrl ? '?stream=' + encodeURIComponent(currentUrl) : '');
      chrome.tabs.create({ url: playerUrl });
    });
  }

  // --- Core HLS / Video Player Engine ---
  function playStreamUrl(url) {
    if (!url) return;
    placeholder.classList.add('hidden');

    if (currentHls) {
      currentHls.destroy();
      currentHls = null;
    }

    // Convert raw Xtream .ts or extensionless stream to .m3u8 for native browser HLS playback
    let targetUrl = url;
    if (targetUrl.includes('/live/') && targetUrl.endsWith('.ts')) {
      targetUrl = targetUrl.replace(/\.ts$/, '.m3u8');
    } else if (targetUrl.includes('/live/') && !targetUrl.includes('.m3u8')) {
      targetUrl = targetUrl + '.m3u8';
    }

    if (window.Hls && Hls.isSupported() && (targetUrl.includes('.m3u8') || !targetUrl.endsWith('.mp4'))) {
      currentHls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 30,
      });

      currentHls.loadSource(targetUrl);
      currentHls.attachMedia(video);

      currentHls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
        updateDiagnosticsOnPlay();
      });

      currentHls.on(Hls.Events.ERROR, (event, data) => {
        console.warn('HLS Error:', data);
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              showDiagnosticsError('Network error / Stream offline');
              currentHls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              showDiagnosticsError('Media decode error');
              currentHls.recoverMediaError();
              break;
            default:
              showDiagnosticsError('Fatal playback error');
              currentHls.destroy();
              break;
          }
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = targetUrl;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
        updateDiagnosticsOnPlay();
      });
    } else {
      video.src = targetUrl;
      video.play().catch(() => {});
    }

    if (chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ lastStreamUrl: url });
    }
  }

  // --- Smart URL Handler: Distinguishes between M3U Playlists and Single Streams ---
  function handleStreamInput(url) {
    if (!url) {
      alert('Please enter a valid stream link or playlist URL');
      return;
    }

    // 1. Check if user pasted an entire Xtream Codes get.php playlist URL:
    // e.g.: http://imciq.zibak.ru/get.php?username=54U5LEX&password=KVXKPLA&type=m3u_plus&output=mpegts
    if (url.includes('get.php') && url.includes('username=') && url.includes('password=')) {
      try {
        const u = new URL(url);
        const host = `${u.protocol}//${u.host}`;
        const user = u.searchParams.get('username');
        const pass = u.searchParams.get('password');

        if (host && user && pass) {
          switchToTab('tab-xtream');
          xtreamHost.value = host;
          xtreamUser.value = user;
          xtreamPass.value = pass;

          showNotification(
            `<strong>Full M3U Playlist Detected!</strong><br>Connecting to <code>${u.host}</code> (User: ${user}) and loading channels...`,
            8000
          );

          connectXtream(true); // true = autoPlayFirst
          return;
        }
      } catch (e) {
        console.warn('Error parsing Xtream URL:', e);
      }
    }

    // 2. Check if generic remote M3U playlist file:
    if (url.includes('.m3u') || url.includes('type=m3u')) {
      switchToTab('tab-m3u');
      m3uUrl.value = url;
      showNotification(`<strong>M3U Playlist File Detected!</strong><br>Loading channels...`, 6000);
      loadRemoteM3u(url, true);
      return;
    }

    // 3. Single video stream URL (e.g. .m3u8, .ts, or direct stream):
    playStreamUrl(url);
  }

  // --- Tab 1: Single Stream Tester ---
  const streamUrlInput = document.getElementById('streamUrl');
  const btnPlayStream = document.getElementById('btnPlayStream');
  const btnClearUrl = document.getElementById('btnClearUrl');
  const btnCheckHealth = document.getElementById('btnCheckHealth');
  const healthPanel = document.getElementById('healthPanel');

  btnPlayStream.addEventListener('click', () => {
    handleStreamInput(streamUrlInput.value.trim());
  });

  streamUrlInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleStreamInput(streamUrlInput.value.trim());
    }
  });

  // Auto-detect when pasted
  streamUrlInput.addEventListener('paste', () => {
    setTimeout(() => {
      const val = streamUrlInput.value.trim();
      if (val.includes('get.php') || val.includes('.m3u') || val.includes('type=m3u')) {
        handleStreamInput(val);
      }
    }, 50);
  });

  btnClearUrl.addEventListener('click', () => {
    streamUrlInput.value = '';
    streamUrlInput.focus();
  });

  // Quick sample links
  document.querySelectorAll('.chip-sample').forEach((chip) => {
    chip.addEventListener('click', () => {
      const url = chip.dataset.url;
      streamUrlInput.value = url;
      playStreamUrl(url);
    });
  });

  // Stream Health Tester
  btnCheckHealth.addEventListener('click', async () => {
    const url = streamUrlInput.value.trim();
    if (!url) {
      alert('Enter a stream URL to test diagnostics');
      return;
    }

    healthPanel.classList.remove('hidden');
    const badge = document.getElementById('healthBadge');
    badge.className = 'health-badge';
    badge.textContent = 'Testing...';

    const diagStatus = document.getElementById('diagStatus');
    const diagLatency = document.getElementById('diagLatency');
    const diagResolution = document.getElementById('diagResolution');
    const diagProtocol = document.getElementById('diagProtocol');

    diagStatus.textContent = 'Probing...';
    diagLatency.textContent = 'Measuring...';
    diagResolution.textContent = video.videoWidth ? `${video.videoWidth}x${video.videoHeight}` : 'Unknown';
    diagProtocol.textContent = url.startsWith('https') ? 'HTTPS (Secure)' : 'HTTP (Insecure)';

    const startTime = performance.now();
    try {
      const response = await fetch(url, { method: 'GET', headers: { Range: 'bytes=0-100' } });
      const duration = Math.round(performance.now() - startTime);

      diagLatency.textContent = `${duration} ms`;
      diagStatus.textContent = `${response.status} ${response.statusText || 'OK'}`;

      if (response.ok) {
        badge.className = 'health-badge success';
        badge.textContent = 'LIVE & STABLE';
      } else {
        badge.className = 'health-badge error';
        badge.textContent = `HTTP ${response.status}`;
      }
    } catch (err) {
      const duration = Math.round(performance.now() - startTime);
      diagLatency.textContent = `${duration} ms`;
      diagStatus.textContent = 'Connection Failed / Blocked';
      badge.className = 'health-badge error';
      badge.textContent = 'OFFLINE / BLOCKED';
    }
  });

  function updateDiagnosticsOnPlay() {
    video.addEventListener('loadedmetadata', () => {
      const diagRes = document.getElementById('diagResolution');
      if (diagRes && video.videoWidth) {
        diagRes.textContent = `${video.videoWidth}x${video.videoHeight}`;
      }
    }, { once: true });
  }

  function showDiagnosticsError(message) {
    healthPanel.classList.remove('hidden');
    const badge = document.getElementById('healthBadge');
    if (badge) {
      badge.className = 'health-badge error';
      badge.textContent = 'STREAM ERROR';
    }
    const diagStatus = document.getElementById('diagStatus');
    if (diagStatus) diagStatus.textContent = message;
  }

  // --- Tab 2: Xtream Codes API ---
  const xtreamHost = document.getElementById('xtreamHost');
  const xtreamUser = document.getElementById('xtreamUser');
  const xtreamPass = document.getElementById('xtreamPass');
  const btnConnectXtream = document.getElementById('btnConnectXtream');
  const xtreamLoading = document.getElementById('xtreamLoading');
  const xtreamChannelsSection = document.getElementById('xtreamChannelsSection');
  const xtreamCategorySelect = document.getElementById('xtreamCategorySelect');
  const xtreamChannelSearch = document.getElementById('xtreamChannelSearch');
  const xtreamChannelList = document.getElementById('xtreamChannelList');

  let xtreamStreams = [];

  // Restore saved Xtream credentials
  if (chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(['xtreamHost', 'xtreamUser', 'xtreamPass', 'lastStreamUrl'], (res) => {
      if (res.xtreamHost) xtreamHost.value = res.xtreamHost;
      if (res.xtreamUser) xtreamUser.value = res.xtreamUser;
      if (res.xtreamPass) xtreamPass.value = res.xtreamPass;
      if (res.lastStreamUrl && !streamUrlInput.value) {
        streamUrlInput.value = res.lastStreamUrl;
      }
    });
  }

  async function connectXtream(autoPlayFirst = false) {
    let host = xtreamHost.value.trim().replace(/\/+$/, '');
    const user = xtreamUser.value.trim();
    const pass = xtreamPass.value.trim();

    if (!host || !user || !pass) {
      alert('Please enter Host, Username, and Password');
      return;
    }

    if (!host.startsWith('http://') && !host.startsWith('https://')) {
      host = 'http://' + host;
      xtreamHost.value = host;
    }

    if (chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ xtreamHost: host, xtreamUser: user, xtreamPass: pass });
    }

    xtreamLoading.classList.remove('hidden');
    xtreamChannelsSection.classList.add('hidden');

    try {
      const authUrl = `${host}/player_api.php?username=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}`;
      const authRes = await fetch(authUrl);
      const authData = await authRes.json();

      if (!authData.user_info || authData.user_info.auth === 0) {
        alert('Authentication failed: Invalid credentials or expired subscription.');
        xtreamLoading.classList.add('hidden');
        return;
      }

      const catUrl = `${authUrl}&action=get_live_categories`;
      const streamUrl = `${authUrl}&action=get_live_streams`;

      const [catRes, streamRes] = await Promise.all([fetch(catUrl), fetch(streamUrl)]);
      const categories = await catRes.json();
      xtreamStreams = await streamRes.json();

      xtreamCategorySelect.innerHTML = '<option value="">All Categories</option>';
      if (Array.isArray(categories)) {
        categories.forEach((cat) => {
          const opt = document.createElement('option');
          opt.value = cat.category_id;
          opt.textContent = cat.category_name;
          xtreamCategorySelect.appendChild(opt);
        });
      }

      renderXtreamChannels(xtreamStreams, host, user, pass);
      xtreamLoading.classList.add('hidden');
      xtreamChannelsSection.classList.remove('hidden');

      if (autoPlayFirst && Array.isArray(xtreamStreams) && xtreamStreams.length > 0) {
        // Find first real stream (skipping spacers that start with ###)
        const realStream = xtreamStreams.find((s) => s.name && !s.name.includes('###') && !s.name.includes('NO EVENT')) || xtreamStreams[0];
        if (realStream) {
          const playUrl = `${host}/live/${user}/${pass}/${realStream.stream_id}.m3u8`;
          streamUrlInput.value = playUrl;
          playStreamUrl(playUrl);
          showNotification(`<strong>Now Playing:</strong> ${realStream.name}`, 5000);
        }
      }
    } catch (err) {
      console.error(err);
      xtreamLoading.classList.add('hidden');
      alert(`Could not connect to server: ${err.message}. Please verify the host URL.`);
    }
  }

  btnConnectXtream.addEventListener('click', () => connectXtream(false));

  function renderXtreamChannels(streams, host, user, pass) {
    xtreamChannelList.innerHTML = '';
    const selectedCat = xtreamCategorySelect.value;
    const searchFilter = xtreamChannelSearch.value.toLowerCase().trim();

    const filtered = streams.filter((ch) => {
      const matchCat = !selectedCat || String(ch.category_id) === String(selectedCat);
      const matchSearch = !searchFilter || (ch.name && ch.name.toLowerCase().includes(searchFilter));
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      xtreamChannelList.innerHTML = '<div style="padding:10px;text-align:center;color:#71717A;">No channels found</div>';
      return;
    }

    filtered.slice(0, 100).forEach((ch) => {
      const item = document.createElement('div');
      item.className = 'channel-item';
      item.innerHTML = `<span>${ch.name}</span><small style="color:#A78BFA">#${ch.num || ch.stream_id}</small>`;
      item.addEventListener('click', () => {
        document.querySelectorAll('.channel-item').forEach((i) => i.classList.remove('active'));
        item.classList.add('active');
        const playUrl = `${host}/live/${user}/${pass}/${ch.stream_id}.m3u8`;
        streamUrlInput.value = playUrl;
        playStreamUrl(playUrl);
        showNotification(`<strong>Playing:</strong> ${ch.name}`, 4000);
      });
      xtreamChannelList.appendChild(item);
    });
  }

  xtreamCategorySelect.addEventListener('change', () => {
    const host = xtreamHost.value.trim().replace(/\/+$/, '');
    const user = xtreamUser.value.trim();
    const pass = xtreamPass.value.trim();
    renderXtreamChannels(xtreamStreams, host, user, pass);
  });

  xtreamChannelSearch.addEventListener('input', () => {
    const host = xtreamHost.value.trim().replace(/\/+$/, '');
    const user = xtreamUser.value.trim();
    const pass = xtreamPass.value.trim();
    renderXtreamChannels(xtreamStreams, host, user, pass);
  });

  // --- Tab 3: M3U Playlist Parser ---
  const m3uUrl = document.getElementById('m3uUrl');
  const m3uFileInput = document.getElementById('m3uFileInput');
  const btnLoadM3u = document.getElementById('btnLoadM3u');
  const m3uChannelsSection = document.getElementById('m3uChannelsSection');
  const m3uCategorySelect = document.getElementById('m3uCategorySelect');
  const m3uChannelSearch = document.getElementById('m3uChannelSearch');
  const m3uChannelList = document.getElementById('m3uChannelList');

  let parsedM3uChannels = [];

  async function loadRemoteM3u(url, autoPlayFirst = false) {
    try {
      const res = await fetch(url);
      const m3uText = await res.text();
      processM3uText(m3uText, autoPlayFirst);
    } catch (err) {
      alert('Could not fetch M3U playlist. Check URL or CORS settings.');
    }
  }

  btnLoadM3u.addEventListener('click', async () => {
    const url = m3uUrl.value.trim();
    if (!url && (!m3uFileInput.files || !m3uFileInput.files[0])) {
      alert('Please enter an M3U URL or select a local .m3u file');
      return;
    }

    if (m3uFileInput.files && m3uFileInput.files[0]) {
      const m3uText = await m3uFileInput.files[0].text();
      processM3uText(m3uText, false);
    } else if (url) {
      loadRemoteM3u(url, false);
    }
  });

  function processM3uText(content, autoPlayFirst = false) {
    parsedM3uChannels = parseM3U(content);
    if (!parsedM3uChannels.length) {
      alert('No valid streams found in this M3U file.');
      return;
    }

    const categories = [...new Set(parsedM3uChannels.map((c) => c.group || 'General'))].filter(Boolean);
    m3uCategorySelect.innerHTML = '<option value="">All Categories</option>';
    categories.forEach((cat) => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = cat;
      m3uCategorySelect.appendChild(opt);
    });

    renderM3uChannels();
    m3uChannelsSection.classList.remove('hidden');

    if (autoPlayFirst && parsedM3uChannels.length > 0) {
      const first = parsedM3uChannels[0];
      let pUrl = first.url;
      if (pUrl.includes('/live/') && pUrl.endsWith('.ts')) {
        pUrl = pUrl.replace(/\.ts$/, '.m3u8');
      }
      streamUrlInput.value = pUrl;
      playStreamUrl(pUrl);
      showNotification(`<strong>Now Playing:</strong> ${first.name}`, 4000);
    }
  }

  function parseM3U(content) {
    const lines = content.split('\n');
    const channels = [];
    let currentChannel = null;

    // Limit parsing to first 50,000 lines to prevent browser memory freeze on 100MB files
    const maxLines = Math.min(lines.length, 50000);
    for (let i = 0; i < maxLines; i++) {
      const line = lines[i].trim();
      if (line.startsWith('#EXTINF:')) {
        const nameMatch = line.match(/,(.+)$/);
        const groupMatch = line.match(/group-title="([^"]+)"/i);
        const name = nameMatch ? nameMatch[1].trim() : 'Channel';
        const group = groupMatch ? groupMatch[1].trim() : 'General';
        currentChannel = { name, group };
      } else if (line && !line.startsWith('#')) {
        if (currentChannel) {
          currentChannel.url = line;
          channels.push(currentChannel);
          currentChannel = null;
        }
      }
    }
    return channels;
  }

  function renderM3uChannels() {
    m3uChannelList.innerHTML = '';
    const selectedGroup = m3uCategorySelect.value;
    const filter = m3uChannelSearch.value.toLowerCase().trim();

    const filtered = parsedM3uChannels.filter((c) => {
      const matchGroup = !selectedGroup || c.group === selectedGroup;
      const matchSearch = !filter || c.name.toLowerCase().includes(filter);
      return matchGroup && matchSearch;
    });

    if (!filtered.length) {
      m3uChannelList.innerHTML = '<div style="padding:10px;text-align:center;color:#71717A;">No channels found</div>';
      return;
    }

    filtered.slice(0, 100).forEach((ch) => {
      const item = document.createElement('div');
      item.className = 'channel-item';
      item.innerHTML = `<span>${ch.name}</span><small style="color:#A78BFA">${ch.group}</small>`;
      item.addEventListener('click', () => {
        document.querySelectorAll('.channel-item').forEach((i) => i.classList.remove('active'));
        item.classList.add('active');
        let playUrl = ch.url;
        if (playUrl.includes('/live/') && playUrl.endsWith('.ts')) {
          playUrl = playUrl.replace(/\.ts$/, '.m3u8');
        }
        streamUrlInput.value = playUrl;
        playStreamUrl(playUrl);
        showNotification(`<strong>Playing:</strong> ${ch.name}`, 4000);
      });
      m3uChannelList.appendChild(item);
    });
  }

  m3uCategorySelect.addEventListener('change', renderM3uChannels);
  m3uChannelSearch.addEventListener('input', renderM3uChannels);
});
