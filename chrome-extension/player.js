// Smarters IPTV Web Player - HeroUI Full Tab Controller (Manifest V3)
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('fullVideoPlayer');
  const stageOverlay = document.getElementById('stageOverlay');
  const streamInput = document.getElementById('streamInput');
  const btnPlay = document.getElementById('btnPlay');
  const channelList = document.getElementById('channelList');
  const channelSearch = document.getElementById('channelSearch');
  const btnClearSearch = document.getElementById('btnClearSearch');
  const channelCountBadge = document.getElementById('channelCountBadge');
  const chkHideSpacers = document.getElementById('chkHideSpacers');
  const categorySelect = document.getElementById('categorySelect');
  const playlistSelect = document.getElementById('playlistSelect');
  const btnNewPlaylist = document.getElementById('btnNewPlaylist');
  const btnDeletePlaylist = document.getElementById('btnDeletePlaylist');
  const playlistModal = document.getElementById('playlistModal');
  const btnCloseModal = document.getElementById('btnCloseModal');
  const btnCancelModal = document.getElementById('btnCancelModal');
  const btnSavePlaylist = document.getElementById('btnSavePlaylist');
  const plTypeSelect = document.getElementById('plTypeSelect');
  const formXtreamFields = document.getElementById('formXtreamFields');
  const formM3uFields = document.getElementById('formM3uFields');

  const currentChannelName = document.getElementById('currentChannelName');
  const currentCategoryTag = document.getElementById('currentCategoryTag');
  const currentStreamUrl = document.getElementById('currentStreamUrl');
  const statResolution = document.getElementById('statResolution');
  const statStatus = document.getElementById('statStatus');
  const btnFavCurrent = document.getElementById('btnFavCurrent');
  const streamErrorOverlay = document.getElementById('streamErrorOverlay');
  const errorMsg = document.getElementById('errorMsg');
  const btnRetryStream = document.getElementById('btnRetryStream');

  let currentHls = null;
  let activeTab = 'xtream'; // 'xtream' | 'favorites'
  let currentPlayingChannel = null;

  // State
  let savedPlaylists = [];
  let activePlaylistId = null;
  let favorites = new Set();

  let categories = [];
  let categoryMap = {}; // id -> name
  let allChannels = []; // all parsed channels
  let filteredChannels = []; // filtered for display
  let renderedCount = 0;
  const CHUNK_SIZE = 80;

  // =========================================================
  // STORAGE INITIALIZATION & SYNC
  // =========================================================
  chrome.storage.local.get(['savedPlaylists', 'activePlaylistId', 'favorites', 'xtreamHost', 'xtreamUser', 'xtreamPass'], (data) => {
    savedPlaylists = Array.isArray(data.savedPlaylists) ? data.savedPlaylists : [];
    activePlaylistId = data.activePlaylistId || null;
    if (Array.isArray(data.favorites)) {
      favorites = new Set(data.favorites);
    }

    // Auto-migrate single legacy login if savedPlaylists is empty
    if (savedPlaylists.length === 0 && data.xtreamHost && data.xtreamUser && data.xtreamPass) {
      try {
        const defaultPl = {
          id: 'pl_' + Date.now(),
          name: `${new URL(data.xtreamHost).hostname} (${data.xtreamUser})`,
          type: 'xtream',
          host: data.xtreamHost,
          user: data.xtreamUser,
          pass: data.xtreamPass,
          addedAt: Date.now()
        };
        savedPlaylists.push(defaultPl);
        activePlaylistId = defaultPl.id;
        chrome.storage.local.set({ savedPlaylists, activePlaylistId });
      } catch (e) {}
    }

    renderPlaylistDropdown();

    // Check ?stream= parameter from popup "Open in Full Tab"
    const urlParams = new URLSearchParams(window.location.search);
    const streamParam = urlParams.get('stream');

    if (savedPlaylists.length > 0) {
      if (!activePlaylistId || !savedPlaylists.some(p => p.id === activePlaylistId)) {
        activePlaylistId = savedPlaylists[0].id;
        chrome.storage.local.set({ activePlaylistId });
      }

      // Always load the user's active playlist by default!
      loadActivePlaylist(!streamParam).then(() => {
        if (streamParam) {
          streamInput.value = streamParam;
          // Match streamParam with a channel in the playlist
          const matched = allChannels.find(c => c.url === streamParam || (c.stream_id && streamParam.includes(c.stream_id)));
          if (matched) {
            selectAndPlayChannel(matched);
          } else {
            handleStreamInput(streamParam);
          }
        }
      });
    } else if (streamParam) {
      streamInput.value = streamParam;
      handleStreamInput(streamParam);
    } else {
      showEmptyStateChannels();
    }
  });

  // Listen for storage changes from popup or other tabs
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
        renderPlaylistDropdown();
        if (activePlaylistId) {
          loadActivePlaylist(false);
        } else {
          showEmptyStateChannels();
        }
      }
    }
  });

  function showEmptyStateChannels() {
    channelCountBadge.textContent = '0 channels';
    channelList.innerHTML = `
      <div style="padding: 40px 20px; text-align: center; color: var(--heroui-foreground-muted);">
        <div style="font-size: 38px; margin-bottom: 12px;">📺</div>
        <h4 style="color: #ffffff; margin-bottom: 8px; font-size: 14px; font-weight: 700;">No Playlists Added</h4>
        <p style="font-size: 12px; margin-bottom: 18px; line-height: 1.45; color: var(--heroui-foreground-muted);">
          Add your Xtream Codes API or M3U playlist to begin watching live channels.
        </p>
        <button id="btnEmptyAdd" class="btn-play" style="margin: 0 auto; display: inline-flex;">＋ Add Playlist</button>
      </div>
    `;
    document.getElementById('btnEmptyAdd')?.addEventListener('click', () => {
      btnNewPlaylist.click();
    });
  }

  // --- Playlist Dropdown & Management ---
  function renderPlaylistDropdown() {
    playlistSelect.innerHTML = '';
    if (savedPlaylists.length === 0) {
      playlistSelect.innerHTML = '<option value="">(No saved playlists)</option>';
      return;
    }

    savedPlaylists.forEach((pl) => {
      const opt = document.createElement('option');
      opt.value = pl.id;
      const count = pl.channelCount ? ` (${pl.channelCount.toLocaleString()} ch)` : '';
      opt.textContent = `${pl.name}${count}`;
      if (pl.id === activePlaylistId) opt.selected = true;
      playlistSelect.appendChild(opt);
    });
  }

  playlistSelect.addEventListener('change', () => {
    activePlaylistId = playlistSelect.value;
    chrome.storage.local.set({ activePlaylistId });
    loadActivePlaylist(false);
  });

  // Delete Playlist
  btnDeletePlaylist.addEventListener('click', () => {
    if (!activePlaylistId) return;
    const pl = savedPlaylists.find(p => p.id === activePlaylistId);
    if (!pl) return;
    if (confirm(`Delete playlist "${pl.name}"?`)) {
      savedPlaylists = savedPlaylists.filter(p => p.id !== activePlaylistId);
      activePlaylistId = savedPlaylists.length > 0 ? savedPlaylists[0].id : null;
      chrome.storage.local.set({ savedPlaylists, activePlaylistId });
      renderPlaylistDropdown();
      if (activePlaylistId) {
        loadActivePlaylist(false);
      } else {
        allChannels = [];
        showEmptyStateChannels();
      }
    }
  });

  // Modal Controls
  btnNewPlaylist.addEventListener('click', () => {
    playlistModal.classList.remove('hidden');
    document.getElementById('plNameInput').focus();
  });

  function closeModal() {
    playlistModal.classList.add('hidden');
    document.getElementById('plNameInput').value = '';
    document.getElementById('plHostInput').value = '';
    document.getElementById('plUserInput').value = '';
    document.getElementById('plPassInput').value = '';
    document.getElementById('plUrlInput').value = '';
  }

  btnCloseModal.addEventListener('click', closeModal);
  btnCancelModal.addEventListener('click', closeModal);

  plTypeSelect.addEventListener('change', () => {
    if (plTypeSelect.value === 'xtream') {
      formXtreamFields.classList.remove('hidden');
      formM3uFields.classList.add('hidden');
    } else {
      formXtreamFields.classList.add('hidden');
      formM3uFields.classList.remove('hidden');
    }
  });

  // Smart auto-fill when pasting into plHostInput
  const plHostInput = document.getElementById('plHostInput');
  plHostInput?.addEventListener('input', () => {
    const val = plHostInput.value.trim();
    if (!val) return;

    // Check get.php
    if (val.includes('get.php') && val.includes('username=') && val.includes('password=')) {
      try {
        const u = new URL(val);
        plHostInput.value = `${u.protocol}//${u.host}`;
        document.getElementById('plUserInput').value = u.searchParams.get('username') || '';
        document.getElementById('plPassInput').value = u.searchParams.get('password') || '';
        if (!document.getElementById('plNameInput').value) {
          document.getElementById('plNameInput').value = `${u.hostname} (${u.searchParams.get('username')})`;
        }
      } catch (e) {}
    }

    // Check /live/USERNAME/PASSWORD/STREAM_ID
    const liveMatch = val.match(/^(https?:\/\/[^\/]+)\/live\/([^\/]+)\/([^\/]+)\/([^\/\.]+)(\.m3u8|\.ts)?/i);
    if (liveMatch) {
      plHostInput.value = liveMatch[1];
      document.getElementById('plUserInput').value = liveMatch[2];
      document.getElementById('plPassInput').value = liveMatch[3];
      if (!document.getElementById('plNameInput').value) {
        try {
          document.getElementById('plNameInput').value = `${new URL(liveMatch[1]).hostname} (${liveMatch[2]})`;
        } catch (e) {}
      }
    }
  });

  btnSavePlaylist.addEventListener('click', async () => {
    const name = document.getElementById('plNameInput').value.trim() || 'My IPTV Playlist';
    const type = plTypeSelect.value;

    let newPl = null;
    if (type === 'xtream') {
      let host = document.getElementById('plHostInput').value.trim().replace(/\/+$/, '');
      const user = document.getElementById('plUserInput').value.trim();
      const pass = document.getElementById('plPassInput').value.trim();
      if (!host || !user || !pass) {
        alert('Please fill out Host, Username, and Password.');
        return;
      }
      if (!host.startsWith('http://') && !host.startsWith('https://')) {
        host = 'http://' + host;
      }
      newPl = { id: 'pl_' + Date.now(), name, type: 'xtream', host, user, pass, addedAt: Date.now() };
    } else {
      const url = document.getElementById('plUrlInput').value.trim();
      if (!url) {
        alert('Please enter a valid M3U Playlist URL.');
        return;
      }
      newPl = { id: 'pl_' + Date.now(), name, type: 'm3u', url, addedAt: Date.now() };
    }

    savedPlaylists.push(newPl);
    activePlaylistId = newPl.id;
    chrome.storage.local.set({ savedPlaylists, activePlaylistId });
    renderPlaylistDropdown();
    closeModal();
    loadActivePlaylist(true);
  });

  // --- Load Active Playlist ---
  async function loadActivePlaylist(autoPlay = false) {
    const pl = savedPlaylists.find(p => p.id === activePlaylistId);
    if (!pl) return;

    channelCountBadge.textContent = 'Connecting...';
    channelList.innerHTML = '<div style="padding: 30px; text-align: center; color: #c084fc; font-weight: 600;">Connecting to server and loading channels...</div>';

    if (pl.type === 'xtream') {
      await fetchXtreamChannels(pl.host, pl.user, pl.pass, autoPlay);
    } else if (pl.type === 'm3u') {
      await fetchM3uChannels(pl.url, autoPlay);
    }
  }

  // --- Fetch Xtream Channels via API ---
  async function fetchXtreamChannels(host, user, pass, autoPlay = false) {
    try {
      const authUrl = `${host}/player_api.php?username=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}`;
      const catUrl = `${authUrl}&action=get_live_categories`;
      const streamUrl = `${authUrl}&action=get_live_streams`;

      const [catRes, streamRes] = await Promise.all([fetch(catUrl), fetch(streamUrl)]);
      const cats = await catRes.json();
      const streams = await streamRes.json();

      categories = Array.isArray(cats) ? cats : [];
      categoryMap = {};
      categories.forEach(c => { categoryMap[c.category_id] = c.category_name; });

      if (Array.isArray(streams)) {
        allChannels = streams.map(s => ({
          stream_id: String(s.stream_id),
          num: s.num || s.stream_id,
          name: s.name,
          category_id: String(s.category_id || ''),
          category_name: categoryMap[s.category_id] || 'General',
          url: `${host}/live/${user}/${pass}/${s.stream_id}.m3u8`
        }));
      } else {
        allChannels = [];
      }

      // Update channelCount in savedPlaylists
      const curPl = savedPlaylists.find(p => p.id === activePlaylistId);
      if (curPl && curPl.channelCount !== allChannels.length) {
        curPl.channelCount = allChannels.length;
        chrome.storage.local.set({ savedPlaylists });
        renderPlaylistDropdown();
      }

      populateCategoryDropdown();
      applyFilters();

      if (autoPlay && filteredChannels.length > 0) {
        const real = filteredChannels.find(c => !isSpacerChannel(c.name)) || filteredChannels[0];
        if (real) selectAndPlayChannel(real);
      }
    } catch (err) {
      console.error(err);
      channelList.innerHTML = `<div style="padding: 24px; text-align: center; color: #f31260;">Failed to connect to ${host}: ${err.message}</div>`;
      channelCountBadge.textContent = 'Error';
    }
  }

  // --- Fetch Generic M3U Channels ---
  async function fetchM3uChannels(url, autoPlay = false) {
    try {
      const res = await fetch(url);
      const m3uText = await res.text();
      const lines = m3uText.split('\n');
      allChannels = [];
      categories = [];
      categoryMap = {};

      const uniqueCats = new Set();
      let currentCh = null;

      const maxLines = Math.min(lines.length, 50000);
      for (let i = 0; i < maxLines; i++) {
        const line = lines[i].trim();
        if (line.startsWith('#EXTINF:')) {
          const nameMatch = line.match(/,(.+)$/);
          const groupMatch = line.match(/group-title="([^"]+)"/i);
          const name = nameMatch ? nameMatch[1].trim() : 'Channel ' + (allChannels.length + 1);
          const group = groupMatch ? groupMatch[1].trim() : 'General';
          uniqueCats.add(group);
          currentCh = { name, group, id: 'm3u_' + allChannels.length };
        } else if (line && !line.startsWith('#')) {
          if (currentCh) {
            let streamUrl = line;
            if (streamUrl.includes('/live/') && streamUrl.endsWith('.ts')) {
              streamUrl = streamUrl.replace(/\.ts$/, '.m3u8');
            }
            allChannels.push({
              stream_id: currentCh.id,
              num: allChannels.length + 1,
              name: currentCh.name,
              category_id: currentCh.group,
              category_name: currentCh.group,
              url: streamUrl
            });
            currentCh = null;
          }
        }
      }

      categories = Array.from(uniqueCats).map(name => ({ category_id: name, category_name: name }));
      categories.forEach(c => { categoryMap[c.category_id] = c.category_name; });

      populateCategoryDropdown();
      applyFilters();

      if (autoPlay && filteredChannels.length > 0) {
        selectAndPlayChannel(filteredChannels[0]);
      }
    } catch (err) {
      console.error(err);
      channelList.innerHTML = `<div style="padding: 24px; text-align: center; color: #f31260;">Failed to load M3U: ${err.message}</div>`;
      channelCountBadge.textContent = 'Error';
    }
  }

  // --- Populate Category Dropdown ---
  function populateCategoryDropdown() {
    categorySelect.innerHTML = '';

    const counts = {};
    allChannels.forEach(c => {
      counts[c.category_id] = (counts[c.category_id] || 0) + 1;
    });

    const optAll = document.createElement('option');
    optAll.value = 'all';
    optAll.textContent = `📂 All Categories (${allChannels.length})`;
    categorySelect.appendChild(optAll);

    const optFav = document.createElement('option');
    optFav.value = 'favorites';
    optFav.textContent = `⭐ Favorites (${favorites.size})`;
    categorySelect.appendChild(optFav);

    categories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat.category_id;
      const count = counts[cat.category_id] || 0;
      opt.textContent = `${cat.category_name} (${count})`;
      categorySelect.appendChild(opt);
    });
  }

  categorySelect.addEventListener('change', () => {
    applyFilters();
  });

  // --- Filtering & Searching Engine ---
  function isSpacerChannel(name) {
    if (!name) return false;
    const trimmed = name.trim();
    return trimmed.startsWith('###') || trimmed.includes('NO EVENT') || trimmed.includes('NO MATCH') || trimmed.startsWith('===');
  }

  function applyFilters() {
    const query = channelSearch.value.toLowerCase().trim();
    const cat = categorySelect.value;
    const hideSpacers = chkHideSpacers.checked;

    let source = allChannels;
    if (activeTab === 'favorites') {
      source = allChannels.filter(c => favorites.has(c.stream_id));
    }

    filteredChannels = source.filter(ch => {
      // 1. Spacer check
      if (hideSpacers && isSpacerChannel(ch.name)) {
        return false;
      }

      // 2. Category check
      if (activeTab !== 'favorites') {
        if (cat === 'favorites') {
          if (!favorites.has(ch.stream_id)) return false;
        } else if (cat !== 'all') {
          if (ch.category_id !== cat) return false;
        }
      }

      // 3. Search query across channel name AND category name
      if (query) {
        const nameMatch = ch.name && ch.name.toLowerCase().includes(query);
        const catMatch = ch.category_name && ch.category_name.toLowerCase().includes(query);
        if (!nameMatch && !catMatch) return false;
      }

      return true;
    });

    channelCountBadge.textContent = `${filteredChannels.length.toLocaleString()} channels`;
    btnClearSearch.classList.toggle('hidden', !query);

    renderedCount = 0;
    channelList.innerHTML = '';
    renderMoreChannels();
  }

  function renderMoreChannels() {
    if (filteredChannels.length === 0) {
      channelList.innerHTML = '<div style="padding: 30px; text-align: center; color: var(--heroui-foreground-subtle);">No channels found matching your criteria.</div>';
      return;
    }

    const nextBatch = filteredChannels.slice(renderedCount, renderedCount + CHUNK_SIZE);
    if (nextBatch.length === 0) return;

    const frag = document.createDocumentFragment();
    nextBatch.forEach(ch => {
      const card = document.createElement('div');
      card.className = 'channel-card' + (currentPlayingChannel && currentPlayingChannel.stream_id === ch.stream_id ? ' active' : '');

      const isFav = favorites.has(ch.stream_id);
      card.innerHTML = `
        <div class="ch-info">
          <span class="ch-name" title="${ch.name}">${ch.name}</span>
          <div class="ch-meta">
            <span class="ch-category-pill">${ch.category_name || 'General'}</span>
            <small>#${ch.num || ch.stream_id}</small>
          </div>
        </div>
        <div class="ch-actions">
          <button class="btn-star ${isFav ? 'favorited' : ''}" title="${isFav ? 'Remove Favorite' : 'Add to Favorites'}">${isFav ? '★' : '☆'}</button>
        </div>
      `;

      // Play on click
      card.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-star')) return;
        selectAndPlayChannel(ch);
      });

      // Toggle favorite
      const starBtn = card.querySelector('.btn-star');
      starBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(ch.stream_id, starBtn);
      });

      frag.appendChild(card);
    });

    channelList.appendChild(frag);
    renderedCount += nextBatch.length;
  }

  // Infinite Scroll in Channel List
  channelList.addEventListener('scroll', () => {
    if (channelList.scrollTop + channelList.clientHeight >= channelList.scrollHeight - 150) {
      if (renderedCount < filteredChannels.length) {
        renderMoreChannels();
      }
    }
  });

  channelSearch.addEventListener('input', applyFilters);
  btnClearSearch.addEventListener('click', () => {
    channelSearch.value = '';
    channelSearch.focus();
    applyFilters();
  });
  chkHideSpacers.addEventListener('change', applyFilters);

  // Mode Tabs (Live TV vs Favorites)
  document.querySelectorAll('.pl-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.pl-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeTab = tab.dataset.type;

      if (activeTab === 'favorites') {
        categorySelect.value = 'all';
      }
      applyFilters();
    });
  });

  // Toggle Favorite
  function toggleFavorite(id, btnElement) {
    if (favorites.has(id)) {
      favorites.delete(id);
      if (btnElement) {
        btnElement.classList.remove('favorited');
        btnElement.textContent = '☆';
      }
    } else {
      favorites.add(id);
      if (btnElement) {
        btnElement.classList.add('favorited');
        btnElement.textContent = '★';
      }
    }

    if (currentPlayingChannel && currentPlayingChannel.stream_id === id) {
      btnFavCurrent.classList.toggle('favorited', favorites.has(id));
      btnFavCurrent.textContent = favorites.has(id) ? '★' : '☆';
    }

    chrome.storage.local.set({ favorites: Array.from(favorites) });
    populateCategoryDropdown();
    if (activeTab === 'favorites' || categorySelect.value === 'favorites') {
      applyFilters();
    }
  }

  btnFavCurrent.addEventListener('click', () => {
    if (!currentPlayingChannel) return;
    toggleFavorite(currentPlayingChannel.stream_id);
    document.querySelectorAll('.channel-card').forEach(c => {
      applyFilters();
    });
  });

  // --- Video Playback Engine ---
  function selectAndPlayChannel(ch) {
    currentPlayingChannel = ch;
    document.querySelectorAll('.channel-card').forEach(c => c.classList.remove('active'));

    document.querySelectorAll('.channel-card').forEach(c => {
      const name = c.querySelector('.ch-name');
      if (name && name.textContent === ch.name) c.classList.add('active');
    });

    currentChannelName.textContent = ch.name;
    currentCategoryTag.textContent = ch.category_name || 'General';
    currentCategoryTag.classList.remove('hidden');
    currentStreamUrl.textContent = ch.url;

    btnFavCurrent.classList.toggle('favorited', favorites.has(ch.stream_id));
    btnFavCurrent.textContent = favorites.has(ch.stream_id) ? '★' : '☆';

    playStream(ch.url, ch.name);
  }

  function showStreamError(msg) {
    if (streamErrorOverlay && errorMsg) {
      errorMsg.textContent = msg;
      streamErrorOverlay.classList.remove('hidden');
    }
  }

  function hideStreamError() {
    if (streamErrorOverlay) {
      streamErrorOverlay.classList.add('hidden');
    }
  }

  if (btnRetryStream) {
    btnRetryStream.addEventListener('click', () => {
      hideStreamError();
      if (currentPlayingChannel) {
        playStream(currentPlayingChannel.url, currentPlayingChannel.name);
      }
    });
  }

  function playStream(url, name = 'Live Stream') {
    if (!url) return;
    stageOverlay.classList.add('hidden');
    hideStreamError();
    statStatus.textContent = 'Status: Connecting...';

    if (currentHls) {
      currentHls.destroy();
      currentHls = null;
    }

    let targetUrl = url;
    if (targetUrl.includes('/live/') && targetUrl.endsWith('.ts')) {
      targetUrl = targetUrl.replace(/\.ts$/, '.m3u8');
    } else if (targetUrl.includes('/live/') && !targetUrl.includes('.m3u8')) {
      targetUrl = targetUrl + '.m3u8';
    }

    if (window.Hls && Hls.isSupported() && (targetUrl.includes('.m3u8') || !targetUrl.endsWith('.mp4'))) {
      currentHls = new Hls({
        enableWorker: false, // CSP safe for Chrome extensions
        lowLatencyMode: true,
      });

      currentHls.loadSource(targetUrl);
      currentHls.attachMedia(video);

      currentHls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
        statStatus.textContent = 'Status: Live (HD)';
      });

      currentHls.on(Hls.Events.ERROR, (event, data) => {
        console.warn('HLS error:', data);
        if (data.fatal) {
          statStatus.textContent = 'Status: Offline / Error';
          if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
            showStreamError('Stream network error. This event or channel might currently be offline.');
          } else {
            showStreamError('Unable to decode video stream.');
          }
        }
      });
    } else {
      video.src = targetUrl;
      video.play().catch(() => {});
      statStatus.textContent = 'Status: Direct Play';
    }

    video.addEventListener('loadedmetadata', () => {
      statResolution.textContent = `Res: ${video.videoWidth}x${video.videoHeight}`;
    }, { once: true });
  }

  // --- Top Stream Input / Playlist Auto-Detect ---
  function handleStreamInput(url) {
    if (!url) return;

    // Check /live/USERNAME/PASSWORD/STREAM_ID
    const liveMatch = url.match(/^(https?:\/\/[^\/]+)\/live\/([^\/]+)\/([^\/]+)\/([^\/\.]+)(\.m3u8|\.ts)?/i);
    if (liveMatch) {
      const host = liveMatch[1];
      const user = liveMatch[2];
      const pass = liveMatch[3];
      let plName = '';
      try {
        plName = `${new URL(host).hostname} (${user})`;
      } catch (e) {
        plName = 'Xtream IPTV';
      }
      let existing = savedPlaylists.find(p => p.host === host && p.user === user);
      if (!existing) {
        existing = { id: 'pl_' + Date.now(), name: plName, type: 'xtream', host, user, pass, addedAt: Date.now() };
        savedPlaylists.push(existing);
      }
      activePlaylistId = existing.id;
      chrome.storage.local.set({ savedPlaylists, activePlaylistId });
      renderPlaylistDropdown();
      loadActivePlaylist(false);
      playStream(url, 'Live Channel');
      return;
    }

    // Check get.php
    if (url.includes('get.php') && url.includes('username=') && url.includes('password=')) {
      try {
        const u = new URL(url);
        const host = `${u.protocol}//${u.host}`;
        const user = u.searchParams.get('username');
        const pass = u.searchParams.get('password');
        if (host && user && pass) {
          const plName = `${u.hostname} (${user})`;
          let existing = savedPlaylists.find(p => p.host === host && p.user === user);
          if (!existing) {
            existing = { id: 'pl_' + Date.now(), name: plName, type: 'xtream', host, user, pass, addedAt: Date.now() };
            savedPlaylists.push(existing);
          }
          activePlaylistId = existing.id;
          chrome.storage.local.set({ savedPlaylists, activePlaylistId });
          renderPlaylistDropdown();
          loadActivePlaylist(true);
          return;
        }
      } catch (e) {
        console.warn('Error parsing Xtream get.php URL:', e);
      }
    }

    if (url.includes('.m3u') || url.includes('type=m3u')) {
      const plName = 'M3U Playlist (' + new URL(url).hostname + ')';
      let existing = savedPlaylists.find(p => p.url === url);
      if (!existing) {
        existing = { id: 'pl_' + Date.now(), name: plName, type: 'm3u', url, addedAt: Date.now() };
        savedPlaylists.push(existing);
      }
      activePlaylistId = existing.id;
      chrome.storage.local.set({ savedPlaylists, activePlaylistId });
      renderPlaylistDropdown();
      loadActivePlaylist(true);
      return;
    }

    playStream(url, 'Custom Stream');
  }

  btnPlay.addEventListener('click', () => {
    handleStreamInput(streamInput.value.trim());
  });

  streamInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleStreamInput(streamInput.value.trim());
    }
  });
});
