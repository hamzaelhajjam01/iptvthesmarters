// Smarters IPTV Web Player - Popup Controller
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('videoPlayer');
  const placeholder = document.getElementById('playerPlaceholder');
  let currentHls = null;

  // Tabs management
  const navTabs = document.querySelectorAll('.nav-tab');
  const tabContents = document.querySelectorAll('.tab-content');

  navTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      navTabs.forEach((t) => t.classList.remove('active'));
      tabContents.forEach((c) => c.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.dataset.tab;
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.classList.add('active');
    });
  });

  // Open Full Screen Web Player Tab
  const btnOpenFullTab = document.getElementById('btnOpenFullTab');
  if (btnOpenFullTab) {
    btnOpenFullTab.addEventListener('click', () => {
      const currentUrl = document.getElementById('streamUrl').value.trim();
      const playerUrl = chrome.runtime.getURL('player.html') + (currentUrl ? `?stream=${encodeURIComponent(currentUrl)}` : '');
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

    if (window.Hls && Hls.isSupported() && (url.includes('.m3u8') || !url.endsWith('.mp4'))) {
      currentHls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 30,
      });

      currentHls.loadSource(url);
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
      // Native Safari / HLS
      video.src = url;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
        updateDiagnosticsOnPlay();
      });
    } else {
      // Direct MP4 or standard video
      video.src = url;
      video.play().catch(() => {});
    }

    // Save last played URL in storage
    if (chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ lastStreamUrl: url });
    }
  }

  // --- Tab 1: Single Stream Tester ---
  const streamUrlInput = document.getElementById('streamUrl');
  const btnPlayStream = document.getElementById('btnPlayStream');
  const btnClearUrl = document.getElementById('btnClearUrl');
  const btnCheckHealth = document.getElementById('btnCheckHealth');
  const healthPanel = document.getElementById('healthPanel');

  btnPlayStream.addEventListener('click', () => {
    const url = streamUrlInput.value.trim();
    if (!url) {
      alert('Please enter a valid .m3u8 or video stream link');
      return;
    }
    playStreamUrl(url);
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

  btnConnectXtream.addEventListener('click', async () => {
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
      // 1. Verify authentication
      const authUrl = `${host}/player_api.php?username=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}`;
      const authRes = await fetch(authUrl);
      const authData = await authRes.json();

      if (!authData.user_info || authData.user_info.auth === 0) {
        alert('Authentication failed: Invalid credentials or expired subscription.');
        xtreamLoading.classList.add('hidden');
        return;
      }

      // 2. Fetch categories & live streams
      const catUrl = `${authUrl}&action=get_live_categories`;
      const streamUrl = `${authUrl}&action=get_live_streams`;

      const [catRes, streamRes] = await Promise.all([fetch(catUrl), fetch(streamUrl)]);
      const categories = await catRes.json();
      xtreamStreams = await streamRes.json();

      // Populate Categories
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
    } catch (err) {
      console.error(err);
      xtreamLoading.classList.add('hidden');
      alert(`Could not connect to server: ${err.message}. Please verify the host URL.`);
    }
  });

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

    filtered.slice(0, 80).forEach((ch) => {
      const item = document.createElement('div');
      item.className = 'channel-item';
      item.innerHTML = `<span>${ch.name}</span><small style="color:#A78BFA">#${ch.num || ch.stream_id}</small>`;
      item.addEventListener('click', () => {
        document.querySelectorAll('.channel-item').forEach((i) => i.classList.remove('active'));
        item.classList.add('active');
        const playUrl = `${host}/live/${user}/${pass}/${ch.stream_id}.m3u8`;
        streamUrlInput.value = playUrl;
        playStreamUrl(playUrl);
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

  btnLoadM3u.addEventListener('click', async () => {
    const url = m3uUrl.value.trim();
    if (!url && (!m3uFileInput.files || !m3uFileInput.files[0])) {
      alert('Please enter an M3U URL or select a local .m3u file');
      return;
    }

    let m3uText = '';
    if (m3uFileInput.files && m3uFileInput.files[0]) {
      m3uText = await m3uFileInput.files[0].text();
    } else if (url) {
      try {
        const res = await fetch(url);
        m3uText = await res.text();
      } catch (err) {
        alert('Could not fetch M3U playlist. Check URL or CORS settings.');
        return;
      }
    }

    parsedM3uChannels = parseM3U(m3uText);
    if (!parsedM3uChannels.length) {
      alert('No valid streams found in this M3U file.');
      return;
    }

    // Populate category dropdown
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
  });

  function parseM3U(content) {
    const lines = content.split('\n');
    const channels = [];
    let currentChannel = null;

    for (let i = 0; i < lines.length; i++) {
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

    filtered.slice(0, 80).forEach((ch) => {
      const item = document.createElement('div');
      item.className = 'channel-item';
      item.innerHTML = `<span>${ch.name}</span><small style="color:#A78BFA">${ch.group}</small>`;
      item.addEventListener('click', () => {
        document.querySelectorAll('.channel-item').forEach((i) => i.classList.remove('active'));
        item.classList.add('active');
        streamUrlInput.value = ch.url;
        playStreamUrl(ch.url);
      });
      m3uChannelList.appendChild(item);
    });
  }

  m3uCategorySelect.addEventListener('change', renderM3uChannels);
  m3uChannelSearch.addEventListener('input', renderM3uChannels);
});
