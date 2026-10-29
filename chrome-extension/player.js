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

  function handleFullStreamInput(url) {
    if (!url) return;
    if (url.includes('get.php') && url.includes('username=') && url.includes('password=')) {
      try {
        const u = new URL(url);
        const host = `${u.protocol}//${u.host}`;
        const user = u.searchParams.get('username');
        const pass = u.searchParams.get('password');
        if (host && user && pass) {
          chrome.storage.local.set({ xtreamHost: host, xtreamUser: user, xtreamPass: pass }, () => {
            document.querySelectorAll('.pl-tab').forEach((t) => t.classList.remove('active'));
            const xtTab = document.querySelector('.pl-tab[data-type="xtream"]');
            if (xtTab) xtTab.classList.add('active');
            activeTab = 'xtream';
            loadXtreamChannels(true);
          });
          return;
        }
      } catch (e) {
        console.warn(e);
      }
    }
    playStream(url, 'Custom Stream');
  }

  // Check URL query param ?stream=
  const urlParams = new URLSearchParams(window.location.search);
  const streamParam = urlParams.get('stream');
  if (streamParam) {
    streamInput.value = streamParam;
    handleFullStreamInput(streamParam);
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
      });

      currentHls.loadSource(targetUrl);
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
      video.src = targetUrl;
      video.play().catch(() => {});
      statStatus.textContent = 'Status: Direct Play';
    }

    video.addEventListener('loadedmetadata', () => {
      statResolution.textContent = `Res: ${video.videoWidth}x${video.videoHeight}`;
    }, { once: true });
  }

  btnPlay.addEventListener('click', () => {
    const url = streamInput.value.trim();
    if (url) handleFullStreamInput(url);
  });

  streamInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const url = streamInput.value.trim();
      if (url) handleFullStreamInput(url);
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
        loadXtreamChannels(false);
      } else if (activeTab === 'm3u') {
        loadM3uNotice();
      }
    });
  });

  function loadXtreamChannels(autoPlay = false) {
    channelList.innerHTML = '<div style="padding:16px;text-align:center;color:#A78BFA;">Connecting to Xtream server...</div>';
    if (chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(['xtreamHost', 'xtreamUser', 'xtreamPass'], async (res) => {
        if (!res.xtreamHost || !res.xtreamUser || !res.xtreamPass) {
          channelList.innerHTML = '<div style="padding:16px;text-align:center;color:#71717A;">No Xtream login saved. Paste your playlist URL in the top bar to connect.</div>';
          return;
        }

        try {
          const streamUrl = `${res.xtreamHost}/player_api.php?username=${encodeURIComponent(res.xtreamUser)}&password=${encodeURIComponent(res.xtreamPass)}&action=get_live_streams`;
          const fetchRes = await fetch(streamUrl);
          const streams = await fetchRes.json();

          if (Array.isArray(streams) && streams.length > 0) {
            const mapped = streams.map((s) => ({
              name: s.name,
              url: `${res.xtreamHost}/live/${res.xtreamUser}/${res.xtreamPass}/${s.stream_id}.m3u8`,
              group: `#${s.num || s.stream_id}`,
            }));
            renderChannels(mapped);

            if (autoPlay) {
              const realStream = mapped.find((s) => !s.name.includes('###') && !s.name.includes('NO EVENT')) || mapped[0];
              if (realStream) {
                streamInput.value = realStream.url;
                playStream(realStream.url, realStream.name);
              }
            }
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
