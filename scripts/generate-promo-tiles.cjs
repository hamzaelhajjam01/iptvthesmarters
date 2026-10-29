const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

// -------------------------------------------------------------
// 1. SMALL PROMO TILE (440 x 280) HTML TEMPLATE
// -------------------------------------------------------------
const smallHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 440px;
      height: 280px;
      background: #09090c;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      -webkit-font-smoothing: antialiased;
    }

    /* Ambient Glows */
    .glow-purple {
      position: absolute;
      top: -60px;
      left: 50%;
      transform: translateX(-50%);
      width: 320px;
      height: 200px;
      background: radial-gradient(circle, rgba(120, 40, 200, 0.6) 0%, rgba(95, 21, 205, 0.2) 60%, transparent 80%);
      filter: blur(40px);
      pointer-events: none;
    }
    .glow-cyan {
      position: absolute;
      bottom: -40px;
      right: -40px;
      width: 180px;
      height: 140px;
      background: radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%);
      filter: blur(30px);
      pointer-events: none;
    }

    /* Grid overlay pattern */
    .grid-bg {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 20px 20px;
      pointer-events: none;
    }

    .card-content {
      position: relative;
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 24px;
    }

    /* Brand Logo Icon */
    .icon-box {
      width: 58px;
      height: 58px;
      border-radius: 16px;
      background: linear-gradient(135deg, #7828c8 0%, #4c1d95 100%);
      border: 1px solid rgba(255, 255, 255, 0.25);
      box-shadow: 0 8px 24px rgba(120, 40, 200, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 12px;
    }
    .icon-box svg {
      width: 34px;
      height: 34px;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 10px;
      font-weight: 800;
      color: #06b6d4;
      background: rgba(6, 182, 212, 0.12);
      border: 1px solid rgba(6, 182, 212, 0.3);
      padding: 3px 10px;
      border-radius: 9999px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 8px;
    }

    .badge-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #06b6d4;
      box-shadow: 0 0 6px #06b6d4;
    }

    .title {
      font-size: 24px;
      font-weight: 900;
      letter-spacing: -0.03em;
      line-height: 1.1;
      margin-bottom: 6px;
      background: linear-gradient(180deg, #ffffff 0%, #d8b4fe 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .subtitle {
      font-size: 11.5px;
      font-weight: 600;
      color: #a1a1aa;
      margin-bottom: 14px;
      letter-spacing: -0.01em;
    }

    .pills-row {
      display: flex;
      gap: 6px;
    }

    .pill {
      font-size: 10px;
      font-weight: 700;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #f4f4f5;
      padding: 4px 10px;
      border-radius: 8px;
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .pill.highlight {
      background: rgba(120, 40, 200, 0.25);
      border-color: rgba(120, 40, 200, 0.5);
      color: #c084fc;
    }
  </style>
</head>
<body>
  <div class="glow-purple"></div>
  <div class="glow-cyan"></div>
  <div class="grid-bg"></div>

  <div class="card-content">
    <div class="icon-box">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
        <polyline points="17 2 12 7 7 2"></polyline>
        <polygon points="10 11 15 14.5 10 18" fill="white" stroke="none"></polygon>
      </svg>
    </div>

    <div class="badge">
      <span class="badge-dot"></span>
      Web Player Edition
    </div>

    <h1 class="title">Smarters IPTV</h1>
    <p class="subtitle">Stream HLS, M3U &amp; Xtream Codes in Chrome</p>

    <div class="pills-row">
      <div class="pill highlight">⚡ 4K Player</div>
      <div class="pill">📂 M3U &amp; Xtream</div>
      <div class="pill">🚀 Anti-Freeze</div>
    </div>
  </div>
</body>
</html>`;

// -------------------------------------------------------------
// 2. MARQUEE PROMO TILE (1400 x 560) HTML TEMPLATE
// -------------------------------------------------------------
const marqueeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1400px;
      height: 560px;
      background: #08080b;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 70px;
      position: relative;
      overflow: hidden;
      -webkit-font-smoothing: antialiased;
    }

    /* Ambient Atmosphere */
    .glow-left {
      position: absolute;
      top: -100px;
      left: 100px;
      width: 550px;
      height: 550px;
      background: radial-gradient(circle, rgba(120, 40, 200, 0.45) 0%, rgba(95, 21, 205, 0.15) 50%, transparent 75%);
      filter: blur(80px);
      pointer-events: none;
    }
    .glow-right {
      position: absolute;
      top: 50px;
      right: 0px;
      width: 700px;
      height: 600px;
      background: radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, rgba(120, 40, 200, 0.3) 50%, transparent 80%);
      filter: blur(90px);
      pointer-events: none;
    }
    .glow-center {
      position: absolute;
      bottom: -150px;
      right: 350px;
      width: 500px;
      height: 400px;
      background: radial-gradient(circle, rgba(120, 40, 200, 0.35) 0%, transparent 70%);
      filter: blur(70px);
      pointer-events: none;
    }

    .grid-bg {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
      background-size: 32px 32px;
      pointer-events: none;
    }

    /* LEFT HERO SECTION */
    .left-col {
      position: relative;
      z-index: 10;
      max-width: 620px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .top-badge-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-mark {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: linear-gradient(135deg, #7828c8 0%, #4c1d95 100%);
      border: 1px solid rgba(255, 255, 255, 0.25);
      box-shadow: 0 4px 16px rgba(120, 40, 200, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .brand-mark svg {
      width: 24px;
      height: 24px;
    }

    .category-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      font-weight: 800;
      color: #06b6d4;
      background: rgba(6, 182, 212, 0.12);
      border: 1px solid rgba(6, 182, 212, 0.35);
      padding: 5px 14px;
      border-radius: 9999px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .cat-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #06b6d4;
      box-shadow: 0 0 8px #06b6d4;
    }

    .hero-title {
      font-size: 46px;
      font-weight: 900;
      line-height: 1.08;
      letter-spacing: -0.035em;
      background: linear-gradient(180deg, #ffffff 10%, #e9d5ff 70%, #c084fc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero-subtitle {
      font-size: 17px;
      font-weight: 600;
      color: #a1a1aa;
      line-height: 1.45;
      letter-spacing: -0.015em;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      margin-top: 6px;
    }

    .feat-card {
      background: rgba(24, 24, 27, 0.65);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 10px 14px;
      display: flex;
      align-items: center;
      gap: 10px;
      backdrop-filter: blur(10px);
    }

    .feat-icon {
      font-size: 16px;
      width: 30px;
      height: 30px;
      border-radius: 8px;
      background: rgba(120, 40, 200, 0.2);
      border: 1px solid rgba(120, 40, 200, 0.35);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .feat-text {
      display: flex;
      flex-direction: column;
    }
    .feat-text strong {
      font-size: 12.5px;
      font-weight: 700;
      color: #ffffff;
    }
    .feat-text span {
      font-size: 10.5px;
      color: #71717a;
      font-weight: 500;
    }

    /* RIGHT MOCKUP SHOWCASE */
    .right-col {
      position: relative;
      z-index: 10;
      width: 610px;
      height: 440px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Floating Player Mockup Window */
    .player-window {
      width: 580px;
      background: #111116;
      border: 1px solid rgba(120, 40, 200, 0.4);
      border-radius: 20px;
      box-shadow: 
        0 25px 60px -15px rgba(0, 0, 0, 0.9),
        0 0 40px rgba(120, 40, 200, 0.25);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .mockup-topbar {
      height: 36px;
      background: #18181f;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      align-items: center;
      padding: 0 14px;
      gap: 8px;
    }
    .dots { display: flex; gap: 5px; }
    .dot { width: 9px; height: 9px; border-radius: 50%; }
    .dot.r { background: #ef4444; }
    .dot.y { background: #eab308; }
    .dot.g { background: #22c55e; }
    .mockup-title {
      font-size: 11px;
      font-weight: 600;
      color: #a1a1aa;
      margin-left: 10px;
    }

    .mockup-body {
      height: 310px;
      display: flex;
      background: #09090d;
    }

    /* Mockup Sidebar */
    .mock-sidebar {
      width: 170px;
      background: #13131a;
      border-right: 1px solid rgba(255, 255, 255, 0.06);
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .mock-search {
      background: #1c1c24;
      border-radius: 6px;
      padding: 5px 8px;
      font-size: 9.5px;
      color: #71717a;
    }
    .mock-cat {
      font-size: 9px;
      font-weight: 800;
      color: #06b6d4;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 4px;
    }
    .mock-channel {
      background: rgba(255, 255, 255, 0.03);
      border-radius: 6px;
      padding: 6px 8px;
      font-size: 10px;
      font-weight: 600;
      color: #d4d4d8;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .mock-channel.active {
      background: linear-gradient(135deg, rgba(120, 40, 200, 0.4) 0%, rgba(95, 21, 205, 0.25) 100%);
      border: 1px solid rgba(120, 40, 200, 0.6);
      color: #ffffff;
      font-weight: 700;
    }
    .mock-channel .tag {
      font-size: 8px;
      background: rgba(120, 40, 200, 0.3);
      color: #c084fc;
      padding: 1px 4px;
      border-radius: 3px;
    }

    /* Mockup Video Area */
    .mock-video {
      flex: 1;
      position: relative;
      background: radial-gradient(circle at 60% 40%, #1e113a 0%, #0c0817 70%, #05030a 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .video-graphic {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .play-circle {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: rgba(120, 40, 200, 0.7);
      border: 2px solid rgba(255, 255, 255, 0.4);
      box-shadow: 0 0 30px rgba(120, 40, 200, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-size: 22px;
    }

    /* Live Badge Overlay */
    .live-chip {
      position: absolute;
      top: 12px;
      left: 12px;
      background: rgba(0, 0, 0, 0.65);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 9999px;
      padding: 3px 9px;
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 9.5px;
      font-weight: 800;
      color: #ffffff;
    }
    .live-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #ef4444;
      box-shadow: 0 0 6px #ef4444;
    }

    .resolution-chip {
      position: absolute;
      bottom: 12px;
      right: 12px;
      background: rgba(0, 0, 0, 0.65);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(6, 182, 212, 0.35);
      border-radius: 6px;
      padding: 2px 7px;
      font-size: 9px;
      font-weight: 800;
      color: #06b6d4;
      letter-spacing: 0.05em;
    }

    /* Mockup Bottom Stream Bar */
    .mockup-bottombar {
      height: 38px;
      background: #14141c;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 14px;
      font-size: 10px;
      color: #a1a1aa;
    }
    .mockup-bottombar strong {
      color: #ffffff;
      font-size: 11px;
    }
    .diag-pill {
      background: rgba(34, 197, 94, 0.15);
      border: 1px solid rgba(34, 197, 94, 0.35);
      color: #22c55e;
      font-size: 9px;
      font-weight: 700;
      padding: 2px 7px;
      border-radius: 9999px;
    }

    /* Floating Diagnostic Toast */
    .floating-toast {
      position: absolute;
      bottom: -10px;
      left: -20px;
      background: rgba(18, 18, 24, 0.85);
      border: 1px solid rgba(120, 40, 200, 0.5);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(12px);
      border-radius: 12px;
      padding: 8px 14px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 11px;
      font-weight: 700;
      color: #ffffff;
    }
    .toast-icon {
      font-size: 14px;
      color: #06b6d4;
    }
  </style>
</head>
<body>
  <div class="glow-left"></div>
  <div class="glow-right"></div>
  <div class="glow-center"></div>
  <div class="grid-bg"></div>

  <!-- LEFT HERO INFO -->
  <div class="left-col">
    <div class="top-badge-row">
      <div class="brand-mark">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
          <polyline points="17 2 12 7 7 2"></polyline>
          <polygon points="10 11 15 14.5 10 18" fill="white" stroke="none"></polygon>
        </svg>
      </div>
      <div class="category-badge">
        <span class="cat-dot"></span>
        Official Chrome Web Store Extension
      </div>
    </div>

    <h1 class="hero-title">Smarters IPTV<br>Web Player</h1>
    <p class="hero-subtitle">High-speed live HLS stream tester, M3U playlist client, and Xtream Codes API player with real-time stream diagnostics.</p>

    <div class="features-grid">
      <div class="feat-card">
        <div class="feat-icon">⚡</div>
        <div class="feat-text">
          <strong>Native HLS Playback</strong>
          <span>Adaptive bitrate, zero latency</span>
        </div>
      </div>
      <div class="feat-card">
        <div class="feat-icon">📂</div>
        <div class="feat-text">
          <strong>M3U &amp; Xtream Codes</strong>
          <span>Instant multi-category parsing</span>
        </div>
      </div>
      <div class="feat-card">
        <div class="feat-icon">📊</div>
        <div class="feat-text">
          <strong>Stream Health Test</strong>
          <span>Ping latency, HTTP 200, resolution</span>
        </div>
      </div>
      <div class="feat-card">
        <div class="feat-icon">⭐</div>
        <div class="feat-text">
          <strong>Favorites &amp; Search</strong>
          <span>Filter 25,000+ channels instantly</span>
        </div>
      </div>
    </div>
  </div>

  <!-- RIGHT MOCKUP SHOWCASE -->
  <div class="right-col">
    <div class="player-window">
      <div class="mockup-topbar">
        <div class="dots">
          <div class="dot r"></div>
          <div class="dot y"></div>
          <div class="dot g"></div>
        </div>
        <span class="mockup-title">Smarters IPTV — Theater Player</span>
      </div>

      <div class="mockup-body">
        <div class="mock-sidebar">
          <div class="mock-search">🔍 Filter channels...</div>
          <span class="mock-cat">Live Sports 4K</span>
          <div class="mock-channel active">
            <span>VIP BEIN 4K</span>
            <span class="tag">#1</span>
          </div>
          <div class="mock-channel">
            <span>VIP ESPN HD</span>
            <span class="tag">#2</span>
          </div>
          <div class="mock-channel">
            <span>VIP SKY MAIN</span>
            <span class="tag">#3</span>
          </div>
          <div class="mock-channel">
            <span>VIP TNT SPORTS</span>
            <span class="tag">#4</span>
          </div>
        </div>

        <div class="mock-video">
          <div class="live-chip">
            <span class="live-dot"></span>
            LIVE
          </div>
          <div class="play-circle">▶</div>
          <div class="resolution-chip">4K UHD • 60 FPS</div>
        </div>
      </div>

      <div class="mockup-bottombar">
        <div>Now Playing: <strong>VIP - UEFA CHAMPIONS LEAGUE 4K</strong></div>
        <div class="diag-pill">● LIVE &amp; STABLE (18ms)</div>
      </div>
    </div>

    <!-- Floating Badge -->
    <div class="floating-toast">
      <span class="toast-icon">⚡</span>
      <span>Xtream Codes API &bull; 25,000+ Channels</span>
    </div>
  </div>
</body>
</html>`;

// Write HTML templates
const smallHtmlPath = path.join(rootDir, 'promo-small-temp.html');
const marqueeHtmlPath = path.join(rootDir, 'promo-marquee-temp.html');

fs.writeFileSync(smallHtmlPath, smallHtml, 'utf8');
fs.writeFileSync(marqueeHtmlPath, marqueeHtml, 'utf8');

// Output PNG Paths
const smallPngPath = path.join(rootDir, 'promo-small-440x280.png');
const marqueePngPath = path.join(rootDir, 'promo-marquee-1400x560.png');

console.log('Generating Chrome Web Store Promotional Tiles via Headless Chrome...');

// 1. Render Small Promo Tile (440 x 280)
const smallUrl = 'file:///' + smallHtmlPath.replace(/\\/g, '/');
const cmdSmall = `"${chromePath}" --headless=new --hide-scrollbars --window-size=440,280 --screenshot="${smallPngPath}" "${smallUrl}"`;
execSync(cmdSmall, { stdio: 'inherit' });

// 2. Render Marquee Promo Tile (1400 x 560)
const marqueeUrl = 'file:///' + marqueeHtmlPath.replace(/\\/g, '/');
const cmdMarquee = `"${chromePath}" --headless=new --hide-scrollbars --window-size=1400,560 --screenshot="${marqueePngPath}" "${marqueeUrl}"`;
execSync(cmdMarquee, { stdio: 'inherit' });

// Cleanup temp HTMLs
fs.unlinkSync(smallHtmlPath);
fs.unlinkSync(marqueeHtmlPath);

// Verify PNG dimensions
function getPngDimensions(filePath) {
  const buf = fs.readFileSync(filePath);
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20), size: buf.length };
}

const smallDim = getPngDimensions(smallPngPath);
const marqueeDim = getPngDimensions(marqueePngPath);

console.log('========================================================');
console.log('🎉 PROMOTIONAL ASSETS GENERATED SUCCESSFULLY!');
console.log('========================================================');
console.log(`1. Small Promo Tile:   ${smallPngPath}`);
console.log(`   Dimensions:         ${smallDim.width} x ${smallDim.height} (Exact requirement: 440 x 280)`);
console.log(`   File Size:          ${(smallDim.size / 1024).toFixed(1)} KB`);
console.log('--------------------------------------------------------');
console.log(`2. Marquee Promo Tile: ${marqueePngPath}`);
console.log(`   Dimensions:         ${marqueeDim.width} x ${marqueeDim.height} (Exact requirement: 1400 x 560)`);
console.log(`   File Size:          ${(marqueeDim.size / 1024).toFixed(1)} KB`);
console.log('========================================================');
