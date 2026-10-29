// Smarters IPTV Web Player - Popup Controller (Manifest V3)
document.addEventListener('DOMContentLoaded', () => {
  // Elements - General
  const smartNotice = document.getElementById('smartNotice');
  const noticeText = document.getElementById('noticeText');
  const btnOpenFullTab = document.getElementById('btnOpenFullTab');
  const navPlaylistCount = document.getElementById('navPlaylistCount');

  // Video Players
  const videoPlayer = document.getElementById('videoPlayer');
  const playerPlaceholder = document.getElementById('playerPlaceholder');
  const placeholderText = document.getElementById('placeholderText');
  const quickVideoPlayer = document.getElementById('quickVideoPlayer');
  const quickPlaceholder = document.getElementById('quickPlaceholder');

  let channelHls = null;
  let quickHls = null;

  // Channels Tab Elements
  const activePlaylistBar = document.getElementById('activePlaylistBar');
  const activePlName = document.getElementById('activePlName');
  const activePlCount = document.getElementById('activePlCount');
  const btnSwitchPlaylist = document.getElementById('btnSwitchPlaylist');
  const channelControls = document.getElementById('channelControls');
  const channelCategorySelect = document.getElementById('channelCategorySelect');
  const channelSearch = document.getElementById('channelSearch');
  const btnClearSearch = document.getElementById('btnClearSearch');
  const channelList = document.getElementById('channelList');
  const channelsEmptyState = document.getElementById('channelsEmptyState');
  const btnGoToPlaylists = document.getElementById('btnGoToPlaylists');
  const channelsLoading = document.getElementById('channelsLoading');

  // Playlists Tab Elements
  const playlistsCount = document.getElementById('playlistsCount');
  const savedPlaylistsList = document.getElementById('savedPlaylistsList');
  const typePills = document.querySelectorAll('.type-pill');
  const formXtream = document.getElementById('formXtream');
  const formM3u = document.getElementById('formM3u');
  const plNameInput = document.getElementById('plName');
  const plHostInput = document.getElementById('plHost');
  const plUserInput = document.getElementById('plUser');
  const plPassInput = document.getElementById('plPass');
  const plM3uNameInput = document.getElementById('plM3uName');
  const plM3uUrlInput = document.getElementById('plM3uUrl');
  const m3uFileInput = document.getElementById('m3uFileInput');
  const btnSavePlaylist = document.getElementById('btnSavePlaylist');
  const plLoading = document.getElementById('plLoading');

  // Quick Stream Elements
  const streamUrlInput = document.getElementById('streamUrl');
  const btnClearUrl = document.getElementById('btnClearUrl');
  const btnPlayStream = document.getElementById('btnPlayStream');
  const btnCheckHealth = document.getElementById('btnCheckHealth');
  const healthPanel = document.getElementById('healthPanel');
  const healthBadge = document.getElementById('healthBadge');
  const diagStatus = document.getElementById('diagStatus');
  const diagLatency = document.getElementById('diagLatency');
  const diagResolution = document.getElementById('diagResolution');
  const diagProtocol = document.getElementById('diagProtocol');
  const chipSamples = document.querySelectorAll('.chip-sample');

  // Application State (Synced with chrome.storage.local and player.html)
  let savedPlaylists = [];
  let activePlaylistId = null;
  let activeChannels = [];
  let categoryMap = {};
  let currentlyPlayingChannelId = null;

  // =========================================================
  // TAB NAVIGATION
  // =========================================================
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

    // Pause player of inactive tab to save CPU / bandwidth
    if (tabId !== 'tab-channels' && videoPlayer && !videoPlayer.paused) {
      videoPlayer.pause();
    }
    if (tabId !== 'tab-stream' && quickVideoPlayer && !quickVideoPlayer.paused) {
      quickVideoPlayer.pause();
    }
  }

  navTabs.forEach((tab) => {
    tab.addEventListener('click', () => switchToTab(tab.dataset.tab));
  });

  if (btnSwitchPlaylist) {
    btnSwitchPlaylist.addEventListener('click', () => switchToTab('tab-playlists'));
  }
  if (btnGoToPlaylists) {
    btnGoToPlaylists.addEventListener('click', () => switchToTab('tab-playlists'));
  }

  function showNotification(msg, durationMs = 4500) {
    if (!smartNotice || !noticeText) return;
    noticeText.textContent = msg;
    smartNotice.classList.remove('hidden');
    if (durationMs > 0) {
      setTimeout(() => {
        smartNotice.classList.add('hidden');
      }, durationMs);
    }
  }

  // Open Full Tab Web Player
  if (btnOpenFullTab) {
    btnOpenFullTab.addEventListener('click', () => {
      let playerUrl = chrome.runtime.getURL('player.html');
      if (currentlyPlayingChannelId && videoPlayer && videoPlayer.src) {
        playerUrl += '?stream=' + encodeURIComponent(videoPlayer.src);
      }
      chrome.tabs.create({ url: playerUrl });
    });
  }

  // =========================================================
  // STORAGE INITIALIZATION & SYNC
  // =========================================================
  function initStorage() {
    chrome.storage.local.get(
      ['savedPlaylists', 'activePlaylistId', 'xtreamHost', 'xtreamUser', 'xtreamPass'],
      (data) => {
        savedPlaylists = Array.isArray(data.savedPlaylists) ? data.savedPlaylists : [];
        activePlaylistId = data.activePlaylistId || null;

        // Auto-migrate legacy flat Xtream credentials if savedPlaylists is empty
        if (savedPlaylists.length === 0 && data.xtreamHost && data.xtreamUser && data.xtreamPass) {
          try {
            const hostObj = new URL(data.xtreamHost);
            const defaultPl = {
              id: 'pl_' + Date.now(),
              name: `${hostObj.hostname} (${data.xtreamUser})`,
              type: 'xtream',
              host: data.xtreamHost,
              user: data.xtreamUser,
              pass: data.xtreamPass,
              addedAt: Date.now()
            };
            savedPlaylists.push(defaultPl);
            activePlaylistId = defaultPl.id;
            chrome.storage.local.set({ savedPlaylists, activePlaylistId });
          } catch (e) {
            console.warn('Could not parse legacy host URL', e);
          }
        }

        updatePlaylistCounts();
        renderSavedPlaylists();

        if (savedPlaylists.length > 0) {
          if (!activePlaylistId || !savedPlaylists.some((p) => p.id === activePlaylistId)) {
            activePlaylistId = savedPlaylists[0].id;
            chrome.storage.local.set({ activePlaylistId });
          }
          loadActivePlaylist(false);
        } else {
          showEmptyStateChannels();
        }
      }
    );
  }

  // Listen for storage changes made in other tabs (e.g. player.html)
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'local') {
      let needsRefresh = false;
      if (changes.savedPlaylists) {
        savedPlaylists = Array.isArray(changes.savedPlaylists.newValue) ? changes.savedPlaylists.newValue : [];
        needsRefresh = true;
      }
      if (changes.activePlaylistId) {
        activePlaylistId = changes.activePlaylistId.newValue;
        needsRefresh = true;
      }
      if (needsRefresh) {
        updatePlaylistCounts();
        renderSavedPlaylists();
        if (activePlaylistId) {
          loadActivePlaylist(false);
        } else {
          showEmptyStateChannels();
        }
      }
    }
  });

  function updatePlaylistCounts() {
    const count = savedPlaylists.length;
    if (navPlaylistCount) navPlaylistCount.textContent = count;
    if (playlistsCount) playlistsCount.textContent = `${count} saved`;
  }

  // =========================================================
  // SMART URL DETECTOR & PARSER
  // =========================================================
  function inspectUrl(rawUrl) {
    if (!rawUrl || typeof rawUrl !== 'string') return null;
    const url = rawUrl.trim();

    // 1. Check get.php?username=...&password=...
    if (url.includes('get.php') && url.includes('username=') && url.includes('password=')) {
      try {
        const u = new URL(url);
        const host = `${u.protocol}//${u.host}`;
        const user = u.searchParams.get('username') || '';
        const pass = u.searchParams.get('password') || '';
        return { type: 'xtream', host, user, pass, originalUrl: url };
      } catch (e) {}
    }

    // 2. Check live stream URL: /live/USERNAME/PASSWORD/STREAM_ID.m3u8
    const liveMatch = url.match(/^(https?:\/\/[^\/]+)\/live\/([^\/]+)\/([^\/]+)\/([^\/\.]+)(\.m3u8|\.ts)?/i);
    if (liveMatch) {
      return {
        type: 'xtream_stream',
        host: liveMatch[1],
        user: liveMatch[2],
        pass: liveMatch[3],
        streamId: liveMatch[4],
        originalUrl: url
      };
    }

    // 3. Check player_api.php
    if (url.includes('player_api.php') && url.includes('username=') && url.includes('password=')) {
      try {
        const u = new URL(url);
        const host = `${u.protocol}//${u.host}`;
        const user = u.searchParams.get('username') || '';
        const pass = u.searchParams.get('password') || '';
        return { type: 'xtream', host, user, pass, originalUrl: url };
      } catch (e) {}
    }

    // 4. Check regular M3U playlist (.m3u, .m3u8, get.php without standard params)
    if (url.includes('.m3u') || url.includes('.m3u8') || url.includes('playlist')) {
      return { type: 'm3u', url: url };
    }

    return null;
  }

  // Attach auto-detect listeners to Host and M3U URL inputs
  function handleUrlAutoDetect(inputElem) {
    inputElem.addEventListener('input', () => {
      const val = inputElem.value.trim();
      if (!val) return;
      const detected = inspectUrl(val);
      if (!detected) return;

      if (detected.type === 'xtream' || detected.type === 'xtream_stream') {
        // Switch to Xtream tab if currently on M3U
        switchAddType('xtream');
        plHostInput.value = detected.host;
        plUserInput.value = detected.user;
        plPassInput.value = detected.pass;
        if (!plNameInput.value) {
          try {
            plNameInput.value = `${new URL(detected.host).hostname} (${detected.user})`;
          } catch (e) {
            plNameInput.value = 'My IPTV Playlist';
          }
        }
        showNotification(
          `⚡ <strong>Xtream credentials auto-extracted!</strong> Server: ${detected.host}, User: ${detected.user}`,
          5000
        );
      } else if (detected.type === 'm3u' && inputElem !== plM3uUrlInput) {
        switchAddType('m3u');
        plM3uUrlInput.value = detected.url;
        showNotification('⚡ <strong>Detected M3U Playlist URL!</strong>', 4000);
      }
    });
  }

  if (plHostInput) handleUrlAutoDetect(plHostInput);
  if (plM3uUrlInput) handleUrlAutoDetect(plM3uUrlInput);

  // =========================================================
  // TAB 2: PLAYLIST MANAGER & RENDERING
  // =========================================================

  // Type Pills Switcher (Xtream vs M3U)
  let currentAddType = 'xtream';
  function switchAddType(type) {
    currentAddType = type;
    typePills.forEach((p) => {
      if (p.dataset.type === type) p.classList.add('active');
      else p.classList.remove('active');
    });
    if (type === 'xtream') {
      formXtream.classList.remove('hidden');
      formM3u.classList.add('hidden');
    } else {
      formXtream.classList.add('hidden');
      formM3u.classList.remove('hidden');
    }
  }

  typePills.forEach((pill) => {
    pill.addEventListener('click', () => switchAddType(pill.dataset.type));
  });

  // Render Saved Playlists Cards
  function renderSavedPlaylists() {
    if (!savedPlaylistsList) return;
    savedPlaylistsList.innerHTML = '';

    if (savedPlaylists.length === 0) {
      savedPlaylistsList.innerHTML = `
        <div class="empty-state-card" style="padding: 16px 12px;">
          <span style="font-size: 11.5px; color: #a1a1aa;">No playlists saved yet. Fill out the form below to connect your IPTV server.</span>
        </div>
      `;
      return;
    }

    savedPlaylists.forEach((pl) => {
      const isActive = pl.id === activePlaylistId;
      const card = document.createElement('div');
      card.className = `playlist-card ${isActive ? 'active' : ''}`;

      const hostText = pl.type === 'xtream' ? pl.host : (pl.url || 'Local File');
      let hostnameClean = '';
      try {
        hostnameClean = new URL(hostText).hostname;
      } catch (e) {
        hostnameClean = hostText;
      }

      const countText = pl.channelCount ? `${pl.channelCount.toLocaleString()} ch` : 'Live';

      const mainDiv = document.createElement('div');
      mainDiv.className = 'pl-card-main';

      const titleRow = document.createElement('div');
      titleRow.className = 'pl-card-title-row';

      const titleSpan = document.createElement('span');
      titleSpan.className = 'pl-card-title';
      titleSpan.title = pl.name;
      titleSpan.textContent = pl.name;
      titleRow.appendChild(titleSpan);

      if (isActive) {
        const activeBadge = document.createElement('span');
        activeBadge.className = 'badge-active';
        activeBadge.textContent = 'Active';
        titleRow.appendChild(activeBadge);
      }
      mainDiv.appendChild(titleRow);

      const metaDiv = document.createElement('div');
      metaDiv.className = 'pl-card-meta';

      const typePill = document.createElement('span');
      typePill.className = 'pl-type-pill';
      typePill.textContent = pl.type === 'xtream' ? 'XTREAM' : 'M3U';

      const hostSpan = document.createElement('span');
      hostSpan.title = hostText;
      hostSpan.textContent = hostnameClean;

      const dotSpan = document.createElement('span');
      dotSpan.textContent = '•';

      const cntSpan = document.createElement('span');
      cntSpan.textContent = countText;

      metaDiv.append(typePill, hostSpan, dotSpan, cntSpan);
      mainDiv.appendChild(metaDiv);

      const actionsDiv = document.createElement('div');
      actionsDiv.className = 'pl-card-actions';

      const btnWatch = document.createElement('button');
      btnWatch.className = 'btn-card-watch';
      btnWatch.setAttribute('data-id', pl.id);
      btnWatch.title = 'Watch channels from this playlist';
      btnWatch.innerHTML = '<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> ';
      btnWatch.appendChild(document.createTextNode(isActive ? 'Watching' : 'Watch'));

      const btnDel = document.createElement('button');
      btnDel.className = 'btn-card-delete';
      btnDel.setAttribute('data-id', pl.id);
      btnDel.title = 'Delete playlist';
      btnDel.textContent = '🗑';

      actionsDiv.append(btnWatch, btnDel);
      card.append(mainDiv, actionsDiv);

      // Click to watch / switch
      // reuse btnWatch
      btnWatch.addEventListener('click', () => {
        if (activePlaylistId !== pl.id) {
          activePlaylistId = pl.id;
          chrome.storage.local.set({ activePlaylistId });
          renderSavedPlaylists();
          loadActivePlaylist(true);
        }
        switchToTab('tab-channels');
      });

      // Click to delete
      // reuse btnDel
      btnDel.addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm(`Remove playlist "${pl.name}"?`)) {
          savedPlaylists = savedPlaylists.filter((p) => p.id !== pl.id);
          if (activePlaylistId === pl.id) {
            activePlaylistId = savedPlaylists.length > 0 ? savedPlaylists[0].id : null;
          }
          chrome.storage.local.set({ savedPlaylists, activePlaylistId });
          updatePlaylistCounts();
          renderSavedPlaylists();
          if (activePlaylistId) {
            loadActivePlaylist(false);
          } else {
            showEmptyStateChannels();
          }
        }
      });

      savedPlaylistsList.appendChild(card);
    });
  }

  // Handle Save New Playlist
  btnSavePlaylist.addEventListener('click', async () => {
    plLoading.classList.remove('hidden');

    try {
      if (currentAddType === 'xtream') {
        let host = plHostInput.value.trim().replace(/\/+$/, '');
        const user = plUserInput.value.trim();
        const pass = plPassInput.value.trim();
        let name = plNameInput.value.trim();

        if (!host || !user || !pass) {
          alert('Please enter Portal URL, Username, and Password.');
          plLoading.classList.add('hidden');
          return;
        }

        if (!host.startsWith('http://') && !host.startsWith('https://')) {
          host = 'http://' + host;
        }

        if (!name) {
          try {
            name = `${new URL(host).hostname} (${user})`;
          } catch (e) {
            name = 'Xtream IPTV';
          }
        }

        // Verify authentication & get channel count
        const authUrl = `${host}/player_api.php?username=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}`;
        const authRes = await fetch(authUrl);
        const authData = await authRes.json();

        if (!authData.user_info || authData.user_info.auth === 0) {
          alert('Authentication failed: Invalid credentials or expired account.');
          plLoading.classList.add('hidden');
          return;
        }

        // Fetch streams to count channels
        const streamsRes = await fetch(`${authUrl}&action=get_live_streams`);
        const streams = await streamsRes.json();
        const count = Array.isArray(streams) ? streams.length : 0;

        const newPl = {
          id: 'pl_' + Date.now(),
          name,
          type: 'xtream',
          host,
          user,
          pass,
          channelCount: count,
          addedAt: Date.now()
        };

        savedPlaylists.push(newPl);
        activePlaylistId = newPl.id;
        chrome.storage.local.set({ savedPlaylists, activePlaylistId });

        // Reset form inputs
        plHostInput.value = '';
        plUserInput.value = '';
        plPassInput.value = '';
        plNameInput.value = '';

        updatePlaylistCounts();
        renderSavedPlaylists();
        plLoading.classList.add('hidden');

        showNotification(`✅ <strong>Connected!</strong> Loaded ${count.toLocaleString()} channels.`, 4000);
        loadActivePlaylist(true);
        switchToTab('tab-channels');
      } else {
        // M3U Playlist Mode
        let name = plM3uNameInput.value.trim() || 'My M3U Playlist';
        const url = plM3uUrlInput.value.trim();

        if (!url && (!m3uFileInput.files || !m3uFileInput.files[0])) {
          alert('Please enter an M3U Playlist URL or select a local .m3u file.');
          plLoading.classList.add('hidden');
          return;
        }

        let m3uText = '';
        if (m3uFileInput.files && m3uFileInput.files[0]) {
          m3uText = await m3uFileInput.files[0].text();
        } else if (url) {
          const res = await fetch(url);
          m3uText = await res.text();
        }

        const parsed = parseM3U(m3uText);
        if (!parsed.length) {
          alert('No valid channels found in this M3U file.');
          plLoading.classList.add('hidden');
          return;
        }

        const newPl = {
          id: 'pl_' + Date.now(),
          name,
          type: 'm3u',
          url: url || 'local_file',
          channelCount: parsed.length,
          addedAt: Date.now()
        };

        savedPlaylists.push(newPl);
        activePlaylistId = newPl.id;
        chrome.storage.local.set({ savedPlaylists, activePlaylistId });

        plM3uNameInput.value = '';
        plM3uUrlInput.value = '';
        m3uFileInput.value = '';

        updatePlaylistCounts();
        renderSavedPlaylists();
        plLoading.classList.add('hidden');

        showNotification(`✅ <strong>M3U Loaded!</strong> Found ${parsed.length.toLocaleString()} channels.`, 4000);
        loadActivePlaylist(true);
        switchToTab('tab-channels');
      }
    } catch (err) {
      console.error(err);
      plLoading.classList.add('hidden');
      alert(`Could not connect: ${err.message}. Please check URL and credentials.`);
    }
  });

  // =========================================================
  // TAB 1: CHANNELS BROWSER & PLAYBACK
  // =========================================================
  function showEmptyStateChannels() {
    if (activePlaylistBar) activePlaylistBar.classList.add('hidden');
    if (channelControls) channelControls.classList.add('hidden');
    if (channelsLoading) channelsLoading.classList.add('hidden');
    if (channelsEmptyState) channelsEmptyState.classList.remove('hidden');
    if (playerPlaceholder) {
      playerPlaceholder.classList.remove('hidden');
      if (placeholderText) placeholderText.textContent = 'Add a playlist to start watching';
    }
  }

  async function loadActivePlaylist(autoPlayFirst = false) {
    const pl = savedPlaylists.find((p) => p.id === activePlaylistId);
    if (!pl) {
      showEmptyStateChannels();
      return;
    }

    if (channelsEmptyState) channelsEmptyState.classList.add('hidden');
    if (channelsLoading) channelsLoading.classList.remove('hidden');
    if (activePlaylistBar) activePlaylistBar.classList.remove('hidden');
    if (activePlName) activePlName.textContent = pl.name;

    try {
      if (pl.type === 'xtream') {
        const authUrl = `${pl.host}/player_api.php?username=${encodeURIComponent(pl.user)}&password=${encodeURIComponent(pl.pass)}`;
        const catUrl = `${authUrl}&action=get_live_categories`;
        const streamUrl = `${authUrl}&action=get_live_streams`;

        const [catRes, streamRes] = await Promise.all([fetch(catUrl), fetch(streamUrl)]);
        const categories = await catRes.json();
        const streams = await streamRes.json();

        categoryMap = {};
        channelCategorySelect.innerHTML = '<option value="">All Categories</option>';
        if (Array.isArray(categories)) {
          categories.forEach((cat) => {
            categoryMap[cat.category_id] = cat.category_name;
            const opt = document.createElement('option');
            opt.value = cat.category_id;
            opt.textContent = cat.category_name;
            channelCategorySelect.appendChild(opt);
          });
        }

        activeChannels = Array.isArray(streams) ? streams : [];
        if (activePlCount) activePlCount.textContent = `${activeChannels.length.toLocaleString()} ch`;

        renderChannelsList();
        channelsLoading.classList.add('hidden');
        channelControls.classList.remove('hidden');

        if (autoPlayFirst && activeChannels.length > 0) {
          const firstReal = activeChannels.find((s) => s.name && !s.name.includes('###') && !s.name.includes('NO EVENT')) || activeChannels[0];
          if (firstReal) {
            playXtreamChannel(firstReal, pl);
          }
        }
      } else {
        // M3U Playlist
        if (pl.url && pl.url !== 'local_file') {
          const res = await fetch(pl.url);
          const text = await res.text();
          activeChannels = parseM3U(text);
        }

        channelCategorySelect.innerHTML = '<option value="">All Categories</option>';
        const groups = [...new Set(activeChannels.map((c) => c.group || 'General'))].filter(Boolean);
        groups.forEach((g) => {
          const opt = document.createElement('option');
          opt.value = g;
          opt.textContent = g;
          channelCategorySelect.appendChild(opt);
        });

        if (activePlCount) activePlCount.textContent = `${activeChannels.length.toLocaleString()} ch`;

        renderChannelsList();
        channelsLoading.classList.add('hidden');
        channelControls.classList.remove('hidden');

        if (autoPlayFirst && activeChannels.length > 0) {
          playM3uChannel(activeChannels[0]);
        }
      }
    } catch (err) {
      console.error(err);
      channelsLoading.classList.add('hidden');
      channelList.innerHTML = '';
      const errEl = document.createElement('div');
      errEl.style.cssText = 'padding:15px;text-align:center;color:#f31260;';
      errEl.textContent = 'Could not load channels: ' + err.message;
      channelList.appendChild(errEl);
    }
  }

  function renderChannelsList() {
    if (!channelList) return;
    channelList.innerHTML = '';

    const selectedCat = channelCategorySelect.value;
    const filter = channelSearch.value.toLowerCase().trim();
    const pl = savedPlaylists.find((p) => p.id === activePlaylistId);

    const filtered = activeChannels.filter((ch) => {
      if (pl && pl.type === 'xtream') {
        const matchCat = !selectedCat || String(ch.category_id) === String(selectedCat);
        const catName = categoryMap[ch.category_id] || '';
        const matchSearch = !filter || (ch.name && ch.name.toLowerCase().includes(filter)) || catName.toLowerCase().includes(filter);
        return matchCat && matchSearch;
      } else {
        const matchCat = !selectedCat || ch.group === selectedCat;
        const matchSearch = !filter || (ch.name && ch.name.toLowerCase().includes(filter));
        return matchCat && matchSearch;
      }
    });

    if (filtered.length === 0) {
      channelList.innerHTML = '<div style="padding:14px;text-align:center;color:#71717a;font-size:12px;">No channels found</div>';
      return;
    }

    // Limit to first 120 rendered channels for silky 60fps performance
    filtered.slice(0, 120).forEach((ch) => {
      const item = document.createElement('div');
      const isPlaying = ch.stream_id ? ch.stream_id === currentlyPlayingChannelId : ch.name === currentlyPlayingChannelId;
      item.className = `channel-item ${isPlaying ? 'active' : ''}`;

      const numBadge = ch.num || ch.stream_id || '';
      const catBadge = pl && pl.type === 'xtream' ? (categoryMap[ch.category_id] || '') : (ch.group || '');

      const nameSpan = document.createElement('span');
      nameSpan.style.cssText = 'overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-right:6px;';
      nameSpan.textContent = ch.name;
      item.appendChild(nameSpan);

      const rightDiv = document.createElement('div');
      rightDiv.style.cssText = 'display:flex;align-items:center;gap:6px;flex-shrink:0;';
      if (catBadge) {
        const catSmall = document.createElement('small');
        catSmall.style.cssText = 'color:#71717a;font-size:10px;';
        catSmall.textContent = catBadge.slice(0, 12);
        rightDiv.appendChild(catSmall);
      }
      if (numBadge) {
        const numSmall = document.createElement('small');
        numSmall.style.cssText = 'color:#c084fc;font-weight:700;';
        numSmall.textContent = '#' + numBadge;
        rightDiv.appendChild(numSmall);
      }
      item.appendChild(rightDiv);

      item.addEventListener('click', () => {
        document.querySelectorAll('.channel-item').forEach((i) => i.classList.remove('active'));
        item.classList.add('active');

        if (pl && pl.type === 'xtream') {
          playXtreamChannel(ch, pl);
        } else {
          playM3uChannel(ch);
        }
      });

      channelList.appendChild(item);
    });
  }

  function playXtreamChannel(channel, pl) {
    currentlyPlayingChannelId = channel.stream_id;
    const playUrl = `${pl.host}/live/${pl.user}/${pl.pass}/${channel.stream_id}.m3u8`;
    playInVideoElement(videoPlayer, playerPlaceholder, playUrl, channel.name);
    showNotification(`<strong>Now Playing:</strong> ${channel.name}`, 3500);
  }

  function playM3uChannel(channel) {
    currentlyPlayingChannelId = channel.name;
    let playUrl = channel.url;
    if (playUrl.includes('/live/') && playUrl.endsWith('.ts')) {
      playUrl = playUrl.replace(/\.ts$/, '.m3u8');
    }
    playInVideoElement(videoPlayer, playerPlaceholder, playUrl, channel.name);
    showNotification(`<strong>Now Playing:</strong> ${channel.name}`, 3500);
  }

  channelCategorySelect.addEventListener('change', renderChannelsList);
  channelSearch.addEventListener('input', () => {
    if (channelSearch.value) btnClearSearch.classList.remove('hidden');
    else btnClearSearch.classList.add('hidden');
    renderChannelsList();
  });
  btnClearSearch.addEventListener('click', () => {
    channelSearch.value = '';
    btnClearSearch.classList.add('hidden');
    renderChannelsList();
  });

  // =========================================================
  // CORE HLS VIDEO ENGINE (Manifest V3 Safe, No Workers)
  // =========================================================
  function playInVideoElement(vidElem, placeholderElem, rawUrl, title = '') {
    if (!rawUrl || !vidElem) return;
    if (placeholderElem) placeholderElem.classList.add('hidden');

    let targetUrl = rawUrl;
    // Format Xtream .ts to .m3u8 for HLS.js
    if (targetUrl.includes('/live/') && targetUrl.endsWith('.ts')) {
      targetUrl = targetUrl.replace(/\.ts$/, '.m3u8');
    } else if (targetUrl.includes('/live/') && !targetUrl.includes('.m3u8')) {
      targetUrl = targetUrl + '.m3u8';
    }

    if (vidElem === videoPlayer) {
      if (channelHls) {
        channelHls.destroy();
        channelHls = null;
      }
    } else {
      if (quickHls) {
        quickHls.destroy();
        quickHls = null;
      }
    }

    if (window.Hls && Hls.isSupported() && (targetUrl.includes('.m3u8') || !targetUrl.endsWith('.mp4'))) {
      const hlsInstance = new Hls({
        enableWorker: false, // Required for Chrome extension CSP
        xhrSetup: function(xhr) { xhr.withCredentials = false; },
        lowLatencyMode: true,
        backBufferLength: 30,
      });

      if (vidElem === videoPlayer) channelHls = hlsInstance;
      else quickHls = hlsInstance;

      hlsInstance.loadSource(targetUrl);
      hlsInstance.attachMedia(vidElem);

      hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
        vidElem.play().catch(() => {});
        if (vidElem === quickVideoPlayer) updateDiagnosticsOnPlay();
      });

      hlsInstance.on(Hls.Events.ERROR, (event, data) => {
        console.warn('HLS Event Error:', data);
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hlsInstance.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hlsInstance.recoverMediaError();
              break;
            default:
              hlsInstance.destroy();
              break;
          }
        }
      });
    } else {
      vidElem.src = targetUrl;
      vidElem.play().catch(() => {});
    }
  }

  // =========================================================
  // TAB 3: QUICK STREAM TESTER
  // =========================================================
  if (btnClearUrl) {
    btnClearUrl.addEventListener('click', () => {
      streamUrlInput.value = '';
    });
  }

  if (btnPlayStream) {
    btnPlayStream.addEventListener('click', () => {
      const raw = streamUrlInput.value.trim();
      if (!raw) {
        alert('Please enter a stream link.');
        return;
      }

      // Check if user accidentally pasted a get.php playlist in Quick Stream
      const detected = inspectUrl(raw);
      if (detected && detected.type === 'xtream') {
        showNotification('⚡ <strong>Xtream server detected!</strong> Switching to Playlists to add your account...', 4000);
        switchAddType('xtream');
        plHostInput.value = detected.host;
        plUserInput.value = detected.user;
        plPassInput.value = detected.pass;
        switchToTab('tab-playlists');
        return;
      }

      playInVideoElement(quickVideoPlayer, quickPlaceholder, raw);
    });
  }

  chipSamples.forEach((btn) => {
    btn.addEventListener('click', () => {
      const url = btn.dataset.url;
      streamUrlInput.value = url;
      playInVideoElement(quickVideoPlayer, quickPlaceholder, url);
    });
  });

  // Diagnostics Health Check
  if (btnCheckHealth) {
    btnCheckHealth.addEventListener('click', async () => {
      const url = streamUrlInput.value.trim();
      if (!url) {
        alert('Please enter a stream URL to test.');
        return;
      }

      healthPanel.classList.remove('hidden');
      healthBadge.textContent = 'Testing...';
      healthBadge.className = 'health-badge';
      diagStatus.textContent = 'Probing...';
      diagLatency.textContent = 'Calculating...';
      diagProtocol.textContent = url.startsWith('https://') ? 'HTTPS (Secure)' : 'HTTP (Insecure)';

      const startTime = performance.now();
      try {
        const response = await fetch(url, { method: 'HEAD', cache: 'no-cache' });
        const latency = Math.round(performance.now() - startTime);

        diagStatus.textContent = `${response.status} ${response.statusText || 'OK'}`;
        diagLatency.textContent = `${latency} ms`;

        if (response.ok) {
          healthBadge.textContent = 'LIVE & STABLE';
          healthBadge.classList.add('live');
        } else {
          healthBadge.textContent = `CODE ${response.status}`;
          healthBadge.classList.add('error');
        }
      } catch (err) {
        diagStatus.textContent = 'Connection Error';
        diagLatency.textContent = 'Timeout / Failed';
        healthBadge.textContent = 'OFFLINE / BLOCKED';
        healthBadge.classList.add('error');
      }
    });
  }

  function updateDiagnosticsOnPlay() {
    if (healthPanel.classList.contains('hidden')) return;
    if (quickVideoPlayer && quickVideoPlayer.videoWidth) {
      diagResolution.textContent = `${quickVideoPlayer.videoWidth} x ${quickVideoPlayer.videoHeight}`;
    }
  }

  // =========================================================
  // M3U PARSER
  // =========================================================
  function parseM3U(content) {
    if (!content) return [];
    const lines = content.split('\n');
    const channels = [];
    let currentChannel = null;

    // Limit parsing to 40,000 lines to avoid high RAM consumption in popup
    const maxLines = Math.min(lines.length, 40000);
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

  // Initialize
  initStorage();
});
