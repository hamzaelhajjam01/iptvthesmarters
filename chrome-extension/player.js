// Smarters IPTV Web Player - Full Tab Controller
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('fullVideoPlayer');
  const stageOverlay = document.getElementById('stageOverlay');
  const streamInput = document.getElementById('streamInput');
  const btnPlay = document.getElementById('btnPlay');
  const channelList = document.getElementById('channelList');
  const channelSearch = document.getElementById('channelSearch');
  const currentChannelName = document.getElementById('currentChannelName');
  const currentStreamUrl = document.getElementById('currentStreamUrl');
  const statResolution = document.getElementById('statResolution');
  const statStatus = document.getElementById('statStatus');

  let currentHls = null;
  let activeTab = 'quick';

  // Sample channels
  const SAMPLE_CHANNELS = [
    { name: 'Mux Big Buck Bunny (Multi-Bitrate)', url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8', group: 'Demo HLS' },
    { name: 'Akamai 1080p Stream Test', url: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8', group: 'Akamai CDN' },
    { name: 'Tears of Steel (4K UHD HLS)', url: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8', group: 'Ultra HD' },
    { name: 'Sintel Blender Animated Movie', url: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8', group: 'Movies' },
  ];

  // Check URL query param ?stream=
  const urlParams = new URLSearchParams(window.location.search);
  const streamParam = urlParams.get('stream');
  if (streamParam) {
    streamInput.value = streamParam;
    playStream(streamParam, 'Custom Stream');
  }

  function playStream(url, name = 'Live Stream') {
    if (!url) return;
    stageOverlay.classList.add('hidden');
    currentChannelName.textContent = name;
    currentStreamUrl.textContent = url;
    statStatus.textContent = 'Status: Connecting...';

    if (currentHls) {
      currentHls.destroy();
      currentHls = null;
    }

    if (window.Hls && Hls.isSupported() && (url.includes('.m3u8') || !url.endsWith('.mp4'))) {
      currentHls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      currentHls.loadSource(url);
      currentHls.attachMedia(video);

      currentHls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
        statStatus.textContent = 'Status: Live';
      });

      currentHls.on(Hls.Events.ERROR, (event, data) => {
        console.warn('HLS error:', data);
        if (data.fatal) {
          statStatus.textContent = 'Status: Offline / Error';
        }
      });
    } else {
      video.src = url;
      video.play().catch(() => {});
      statStatus.textContent = 'Status: Direct Play';
    }

    video.addEventListener('loadedmetadata', () => {
      statResolution.textContent = `Res: ${video.videoWidth}x${video.videoHeight}`;
    }, { once: true });
  }

  btnPlay.addEventListener('click', () => {
    const url = streamInput.value.trim();
    if (url) playStream(url, 'Custom Stream');
  });

  streamInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const url = streamInput.value.trim();
      if (url) playStream(url, 'Custom Stream');
    }
  });

  // Render Channel List
  function renderChannels(channels) {
    channelList.innerHTML = '';
    const filter = channelSearch.value.toLowerCase().trim();

    const filtered = channels.filter((c) => !filter || c.name.toLowerCase().includes(filter));

    if (!filtered.length) {
      channelList.innerHTML = '<div style="padding:16px;text-align:center;color:#71717A;">No channels found</div>';
      return;
    }

    filtered.forEach((ch) => {
      const item = document.createElement('div');
      item.className = 'pl-item';
      item.innerHTML = `<span>${ch.name}</span><small style="color:#A78BFA">${ch.group || ''}</small>`;
      item.addEventListener('click', () => {
        document.querySelectorAll('.pl-item').forEach((i) => i.classList.remove('active'));
        item.classList.add('active');
        streamInput.value = ch.url;
        playStream(ch.url, ch.name);
      });
      channelList.appendChild(item);
    });
  }

  // Sidebar playlist tabs
  document.querySelectorAll('.pl-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.pl-tab').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      activeTab = tab.dataset.type;

      if (activeTab === 'quick') {
        renderChannels(SAMPLE_CHANNELS);
      } else if (activeTab === 'xtream') {
        loadXtreamChannels();
      } else if (activeTab === 'm3u') {
        loadM3uNotice();
      }
    });
  });

  function loadXtreamChannels() {
    channelList.innerHTML = '<div style="padding:16px;text-align:center;color:#A78BFA;">Checking saved Xtream credentials...</div>';
    if (chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(['xtreamHost', 'xtreamUser', 'xtreamPass'], async (res) => {
        if (!res.xtreamHost || !res.xtreamUser || !res.xtreamPass) {
          channelList.innerHTML = '<div style="padding:16px;text-align:center;color:#71717A;">No Xtream login saved. Open the extension popup to enter your server credentials.</div>';
          return;
        }

        try {
          const streamUrl = `${res.xtreamHost}/player_api.php?username=${encodeURIComponent(res.xtreamUser)}&password=${encodeURIComponent(res.xtreamPass)}&action=get_live_streams`;
          const fetchRes = await fetch(streamUrl);
          const streams = await fetchRes.json();

          if (Array.isArray(streams)) {
            const mapped = streams.map((s) => ({
              name: s.name,
              url: `${res.xtreamHost}/live/${res.xtreamUser}/${res.xtreamPass}/${s.stream_id}.m3u8`,
              group: `#${s.num || s.stream_id}`,
            }));
            renderChannels(mapped);
          } else {
            channelList.innerHTML = '<div style="padding:16px;text-align:center;color:#f87171;">Could not parse Xtream channel list.</div>';
          }
        } catch (e) {
          channelList.innerHTML = '<div style="padding:16px;text-align:center;color:#f87171;">Failed to connect to Xtream server.</div>';
        }
      });
    }
  }

  function loadM3uNotice() {
    channelList.innerHTML = '<div style="padding:16px;text-align:center;color:#71717A;">To load a full .m3u file, click the extension icon in your Chrome toolbar and upload your playlist.</div>';
  }

  channelSearch.addEventListener('input', () => {
    if (activeTab === 'quick') renderChannels(SAMPLE_CHANNELS);
  });

  // Initial render
  renderChannels(SAMPLE_CHANNELS);
});
