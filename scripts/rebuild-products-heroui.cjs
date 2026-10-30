const fs = require('fs');
const path = require('path');
const { generateUniversalHeader, generateUniversalFooter } = require('./universal-components.cjs');

const productsHtmlPath = path.join(__dirname, '..', 'Iptv The smarters Pro', 'products', 'index.html');
const rawHtml = fs.readFileSync(productsHtmlPath, 'utf8');

// Parse the 5 thematic sections and cards from rawHtml
const sectionsData = [];

// 1. Hardware & Broadcasting
sectionsData.push({
  id: 'hardware',
  badge: 'Hardware & Broadcasting',
  title: 'Hardware Video Encoders & Ingestion Systems',
  icon: `<svg class="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>`,
  desc: 'Hardware streaming encoders convert physical HDMI or SDI video feeds into digital IP streams for local LANs, hotels, campuses, or CDN distribution.',
  cards: [
    { href: '/products/iptv-encoder/', title: 'IPTV Video Encoder Guide', desc: 'Core principles of hardware video capture, compression, and IP streaming.' },
    { href: '/products/hdmi-encoder-for-iptv/', title: 'HDMI to IPTV Encoders', desc: 'Connecting HDMI video sources to local IP networks and digital signage.' },
    { href: '/products/4k-iptv-encoder/', title: '4K HEVC IPTV Encoders', desc: 'High-density 2160p encoding with H.265 compression and Gigabit Ethernet.' },
    { href: '/products/sdi-iptv-encoder/', title: 'SDI Broadcast Encoders', desc: 'Professional 3G/12G-SDI video capture for studios, OB vans, and event venues.' },
    { href: '/products/srt-iptv-encoder/', title: 'SRT Protocol Encoders', desc: 'Low-latency, packet-loss resilient streaming across public internet connections.' },
    { href: '/products/low-latency-iptv-encoder/', title: 'Low-Latency Encoders', desc: 'Sub-second glass-to-glass video latency for interactive live events and sports.' },
    { href: '/products/multicast-iptv-encoder/', title: 'Multicast LAN Encoders', desc: 'UDP/RTP IGMP multicast transmission for enterprise and corporate campuses.' },
    { href: '/products/best-4-channel-iptv-encoder/', title: '4-Channel Multi-Input Encoders', desc: 'High-density 1U encoding units for multiple concurrent HDMI or SDI feeds.' },
    { href: '/products/rack-mount-iptv-encoder/', title: 'Rackmount Encoder Systems', desc: '19-inch 1U/2U server rack hardware with redundant dual power supplies.' },
    { href: '/products/iptv-encoder-for-hotel/', title: 'Hospitality Hotel Encoders', desc: 'In-room TV distribution systems interfacing with hotel PMS middleware.' },
    { href: '/products/what-is-the-best-video-encoder-for-iptv/', title: 'Encoder Buyer\'s Guide', desc: 'Comparing standalone compact units with enterprise modular encoding systems.' },
    { href: '/products/compare-iptv-encoders-for-professional-use/', title: 'Professional Encoder Comparison', desc: 'Matrix evaluation of chipsets, latency, firmware stability, and protocols.' },
    { href: '/products/h-264-hdmi-iptv-encoder/', title: 'H.264 / AVC HDMI Encoders', desc: 'Universal client playback compatibility across legacy TVs and mobile apps.' },
    { href: '/products/hevc-hdmi-iptv-encoder/', title: 'HEVC / H.265 HDMI Encoders', desc: '50% bandwidth reduction for efficient high-definition network transmission.' },
    { href: '/products/broadcast-iptv-encoder/', title: 'Broadcast-Grade Encoders', desc: 'SMPTE compliance, genlock reference timing, and multi-track audio embedding.' },
    { href: '/products/hardware-iptv-encoder/', title: 'Commercial-Grade HDMI Encoders', desc: '24/7 continuous operation, fanless heat dissipation, and static IP management.' },
    { href: '/products/live-streaming-iptv-encoder/', title: 'Live Streaming Encoders', desc: 'Simultaneous multi-destination streaming to CDNs, YouTube, and local LANs.' },
    { href: '/products/pro-video-instruments-iptv/', title: 'Pro Video Instruments Review', desc: 'Commercial AV distribution equipment and VeCOAX RF/IP hardware review.' }
  ]
});

// 2. Software & Players
sectionsData.push({
  id: 'players',
  badge: 'Software & Players',
  title: 'Player Applications & Multi-Device Compatibility',
  icon: `<svg class="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`,
  desc: 'Player applications provide the user interface on your screen. Discover how to configure IPTV Smarters Pro credentials on top player software across Smart TVs, Firestick, Apple devices, and PCs.',
  cards: [
    { href: '/products/iptv-smarters-pro/', title: 'IPTV Smarters Pro Player', desc: 'The flagship media player with multi-screen, EPG, and parental control features.' },
    { href: '/products/tivimate-iptv-player/', title: 'TiviMate IPTV Player', desc: 'Modern Android TV guide layout with Xtream Codes integration and multi-view.' },
    { href: '/products/smart-iptv/', title: 'Smart IPTV (SIPTV)', desc: 'LG webOS and Samsung Tizen TV setup via MAC address playlist upload.' },
    { href: '/products/iplay/', title: 'iPlay for Apple TV & iOS', desc: 'iCloud playlist syncing, custom channel groups, and subtitle support.' },
    { href: '/products/iptvx/', title: 'IPTVX for Apple Ecosystem', desc: 'Netflix-style UI for Apple TV, iPhone, iPad, and Mac with Xtream Codes API.' },
    { href: '/products/iptv-player-for-windows/', title: 'IPTV for Windows Desktop', desc: 'Viewing solutions with GPU hardware decoding on Windows 10 & 11.' },
    { href: '/products/marinios-iptv/', title: 'Maritime & Offshore IPTV', desc: 'Buffer tuning and bandwidth optimization for Starlink and offshore yachts.' },
    { href: '/products/iptv-smart-player/', title: 'IPTV Smart Player', desc: 'Lightweight multi-platform streaming app with quick channel zapping.' },
    { href: '/products/ipexo-iptv-player-code/', title: 'IPEXO Player Setup', desc: 'Activation code pairing, playlist management, and connection setup.' },
    { href: '/products/best-iptv-player/', title: 'IPTV App Directory', desc: 'Comprehensive comparison of client playback applications by operating system.' },
    { href: '/products/iptv-playlist-editor/', title: 'IPTV Playlist Editor', desc: 'Reordering channel bouquets, hiding unwanted groups, and merging EPGs.' },
    { href: '/products/ptv-stream-player/', title: 'IPTV Stream Player', desc: 'Hardware decoding settings, aspect ratio adjustments, and stream cache tuning.' },
    { href: '/products/veplayer-iptv-decoder/', title: 'VEPlayer IPTV Decoder', desc: 'MPEG-TS stream parsing and video rendering optimization.' },
    { href: '/products/playtv/', title: 'PlayTV Streaming Guide', desc: 'Mobile and tablet touch controls with picture-in-picture mode.' },
    { href: '/products/smartiflix-iptv/', title: 'SmartFlix Application', desc: 'VOD catalog browsing, subtitle selection, and Xtream Codes login.' },
    { href: '/products/iptv-editor/', title: 'EPG & Schedule Management', desc: 'XMLTV guide synchronization, timezone offsets, and missing guide fixes.' }
  ]
});

// 3. Protocols & Formats
sectionsData.push({
  id: 'protocols',
  badge: 'Protocols & Formats',
  title: 'Streaming Protocols, Playlists & Diagnostics',
  icon: `<svg class="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>`,
  desc: 'Understand playlist syntaxes, API connections, network delivery mechanisms, and immediate error diagnosis.',
  cards: [
    { href: '/products/failed-to-authorize-iptv-smarters/', title: 'Failed to Authorize Diagnosis', desc: 'Troubleshooting syntax errors, trailing slashes, expired tokens, and ISP port blocks.' },
    { href: '/products/xcodes-iptv/', title: 'Xtream Codes API Architecture', desc: 'Structured Portal URL, Port, Username, and Password authentication benefits.' },
    { href: '/products/m3u-iptv/', title: 'M3U & M3U8 Playlist Formats', desc: 'Dissecting #EXTINF headers, stream directives, and tokenized URL parsing.' },
    { href: '/products/public-iptv-playlist/', title: 'Public vs. Private Playlists', desc: 'Why free public M3U links fail and how private credentials guarantee 60fps feeds.' },
    { href: '/products/home-telecom-m3u/', title: 'Telecom ISP IPTV Delivery', desc: 'Modem bridge configurations, VLAN tagging, and set-top box isolation.' },
    { href: '/products/m3u/', title: 'M3U Player Selection', desc: 'Fast playlist parsing and custom stream cache buffer configurations.' },
    { href: '/products/iptv-playlist/', title: 'Playlist Management Guide', desc: 'Organizing channel bouquets, categorizing VODs, and troubleshooting sync errors.' }
  ]
});

// 4. Architecture & Legal
sectionsData.push({
  id: 'architecture',
  badge: 'Architecture & Legal',
  title: 'Technology Standards, Architecture & Communities',
  icon: `<svg class="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>`,
  desc: 'Comprehensive insights into Internet Protocol Television history, infrastructure, legality, and open-source projects.',
  cards: [
    { href: '/products/what-is-iptv/', title: 'What is IPTV?', desc: 'Core technological principles: comparing IPTV with OTT and traditional broadcast.' },
    { href: '/products/iptv-headend/', title: 'IPTV Network Architecture', desc: 'Headends, middleware clusters, content delivery networks, and subscriber terminals.' },
    { href: '/products/is-iptv-legal/', title: 'IPTV Legality & Safety Guide', desc: 'Copyright compliance, licensed broadcasting frameworks, and consumer safety.' },
    { href: '/products/headend-iptv/', title: 'IPTV Headend Infrastructure', desc: 'Satellite reception, transcoding arrays, multiplexing, and IP stream gateways.' },
    { href: '/products/vecaster-hotel-iptv/', title: 'Local Headend Installation', desc: 'Signal aggregation and local IP distribution for private properties and campuses.' },
    { href: '/products/iptv-org/', title: 'IPTV-Org Open-Source Project', desc: 'Exploring the GitHub public domain channel directory and integration tips.' },
    { href: '/products/github-iptv/', title: 'GitHub IPTV Tools & Repositories', desc: 'Developer scripts, EPG grabbers, playlist parsers, and automation tools.' },
    { href: '/products/reddit-iptv/', title: 'Reddit Community Insights', desc: 'Navigating r/IPTV discussions, avoiding affiliate scams, and finding honest advice.' },
    { href: '/products/iptv-equipment/', title: 'Essential Hardware Checklist', desc: 'Gigabit streaming boxes, Wi-Fi 6 routers, shielded Cat6 cabling, and remotes.' }
  ]
});

// 5. Subscriptions & Regions
sectionsData.push({
  id: 'subscriptions',
  badge: 'Subscriptions & Regions',
  title: 'Verified Subscriptions & Regional Channel Solutions',
  icon: `<svg class="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  desc: 'High-performance subscription packages with anti-freeze server clusters, 99.9% uptime, and regional channel coverage.',
  cards: [
    { href: '/products/best-iptv-service/', title: 'Best IPTV Service 2026', desc: 'Comprehensive comparison of server uptime, sports bitrates, and customer support.' },
    { href: '/products/best-iptv-providers/', title: '2026 Quality Standards', desc: '60fps live sports feeds, 4K UHD movies, and 24/7 WhatsApp assistance.' },
    { href: '/products/best-iptv-provider/', title: 'Provider Selection Framework', desc: 'Evaluating server redundancy, multi-device concurrency, and refund policies.' },
    { href: '/products/reddit-best-iptv/', title: 'Reddit Community Favorites', desc: 'Key community criteria: trial availability, anti-freeze tech, and payment safety.' },
    { href: '/products/iptv-usa/', title: 'IPTV USA Channels', desc: 'Regional network affiliates (ABC, CBS, NBC, FOX) and US major sports pass.' },
    { href: '/products/iptv-uk/', title: 'IPTV UK Solutions', desc: 'UK Premier League, BBC/ITV channels, and UK ISP throttling workarounds.' },
    { href: '/products/iptv-france/', title: 'IPTV France & Ligue 1', desc: 'French national networks, Canal+, beIN Sports, and French VOD cinema.' },
    { href: '/products/indian-iptv/', title: 'Indian Regional Channels', desc: 'Hindi, Tamil, Telugu, and Punjabi channels with live international cricket.' },
    { href: '/products/iptv-italiane-4k/', title: 'Italian 4K Television', desc: 'RAI 4K, Sky Italia, Serie A football coverage, and Italian EPG guide data.' },
    { href: '/products/lista-iptv-de-pago-con-canales-en-vivo/', title: 'Spanish & Latin Channels', desc: 'La Liga Santander, Copa Libertadores, and Latin American regional bouquets.' },
    { href: '/products/ip-tv-sat-n-al/', title: 'Turkish IPTV Solutions', desc: 'Turkish Süper Lig, Digiturk, beIN Sports Turkey, and Turkish support.' },
    { href: '/products/ip-televizija/', title: 'Balkan IP Televizija', desc: 'Croatian, Serbian, and Bosnian national channels with Arena Sport coverage.' },
    { href: '/products/4k-iptv/', title: '4K Ultra HD Streaming', desc: 'High-bitrate 3840x2160 streams with HDR10 color and uncompressed audio.' },
    { href: '/products/4k-live-iptv/', title: '4K Live Sports Streaming', desc: 'Smooth 60fps live football, basketball, and racing broadcasts.' },
    { href: '/products/iptv-subscription/', title: 'Subscription Tier Guide', desc: 'Choosing device concurrency (1, 2, or 3 screens) and billing durations.' },
    { href: '/products/iptv-free-trial/', title: 'Free Trial Testing', desc: 'Testing server latency, channel zapping speed, and device compatibility.' }
  ]
});

// Build HeroUI Card HTML
function renderHeroUICard(card, categoryBadge) {
  return `
      <a href="${card.href}" class="heroui-card group" data-title="${card.title.toLowerCase()}" data-desc="${card.desc.toLowerCase()}">
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:border-purple-400/40 transition-colors">
            ${categoryBadge}
          </span>
          <svg class="w-4 h-4 text-zinc-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
        <h3 class="font-bold text-base text-zinc-100 group-hover:text-purple-300 transition-colors line-clamp-1 mb-2">
          ${card.title}
        </h3>
        <p class="text-zinc-400 text-xs leading-relaxed line-clamp-2">
          ${card.desc}
        </p>
      </a>`;
}

// Generate Sections HTML
let sectionsHtml = '';
sectionsData.forEach(sec => {
  const cardsHtml = sec.cards.map(c => renderHeroUICard(c, sec.badge)).join('\n');
  sectionsHtml += `
    <section id="${sec.id}" class="category-block mb-16 scroll-mt-24">
      <div class="flex items-center gap-3 mb-2">
        <div class="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
          ${sec.icon}
        </div>
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-purple-400">${sec.badge}</span>
          <h2 class="text-2xl font-extrabold text-white tracking-tight">${sec.title}</h2>
        </div>
      </div>
      <p class="text-zinc-400 text-sm max-w-3xl mb-6 ml-12 leading-relaxed">${sec.desc}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        ${cardsHtml}
      </div>
    </section>`;
});

// Inline HeroUI Styles
const inlineHeroUIStyles = `
  <style id="products-heroui-styles">
    /* HeroUI Directory Styles - Guaranteed Immediate Render */
    .products-container {
      width: min(1320px, calc(100% - 32px));
      margin: 0 auto;
      padding: 32px 0 80px;
    }
    .heroui-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1.25rem;
      background: rgba(18, 18, 24, 0.75);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 1rem;
      text-decoration: none;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
    }
    .heroui-card:hover {
      background: rgba(28, 28, 38, 0.95);
      border-color: rgba(167, 139, 250, 0.5);
      transform: translateY(-3px);
      box-shadow: 0 12px 30px -8px rgba(123, 63, 228, 0.25);
    }
    .quick-tab-btn {
      padding: 0.5rem 1rem;
      border-radius: 9999px;
      font-size: 0.8125rem;
      font-weight: 600;
      white-space: nowrap;
      transition: all 0.2s ease;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(24, 24, 27, 0.6);
      color: #a1a1aa;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .quick-tab-btn:hover, .quick-tab-btn.is-active {
      background: rgba(123, 63, 228, 0.2);
      border-color: rgba(167, 139, 250, 0.6);
      color: #fff;
    }
    .featured-hero-card {
      background: linear-gradient(135deg, rgba(123, 63, 228, 0.15), rgba(95, 21, 205, 0.05));
      border: 1px solid rgba(167, 139, 250, 0.3);
      border-radius: 1.25rem;
      padding: 1.5rem;
      transition: all 0.25s ease;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .featured-hero-card:hover {
      background: linear-gradient(135deg, rgba(123, 63, 228, 0.25), rgba(95, 21, 205, 0.15));
      border-color: rgba(167, 139, 250, 0.7);
      transform: translateY(-3px);
      box-shadow: 0 14px 35px -8px rgba(123, 63, 228, 0.35);
    }
  </style>
`;

const universalHeader = generateUniversalHeader('/products/', 'en');
const universalFooter = generateUniversalFooter('en');

const fullPageHtml = `<!doctype html>
<html lang="en">
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XFWZSDKJ29"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XFWZSDKJ29');
    </script>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>IPTV Solutions & Knowledge Base Directory | IPTV Smarters Pro</title>
  <meta name="description" content="Explore our curated directory of IPTV topics: hardware video encoders, compatible player applications, playlist protocols, troubleshooting diagnostics, and subscription guides.">
  <meta name="robots" content="index,follow">
  <link rel="canonical" href="https://thesmartersiptv.com/products/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="IPTV Solutions & Knowledge Base Directory | IPTV Smarters Pro">
  <meta property="og:description" content="Explore our curated directory of IPTV topics: hardware video encoders, compatible player applications, playlist protocols, troubleshooting diagnostics, and subscription guides.">
  <meta property="og:url" content="https://thesmartersiptv.com/products/">
  <meta property="og:image" content="https://thesmartersiptv.com/og-image.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="https://thesmartersiptv.com/og-image.jpg">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link rel="preload" as="style" href="/assets/css/inter.css">
  <link rel="stylesheet" href="/assets/css/inter.css" media="all" onload="this.media='all';this.onload=null">
  <noscript><link rel="stylesheet" href="/assets/css/inter.css"></noscript>
  <link rel="stylesheet" href="/assets/css/main.css">
  <link rel="stylesheet" href="/assets/css/theme.css?v=20261030-nav">
  <link rel="stylesheet" href="/assets/css/heroui.css?v=20261030-nav">
  ${inlineHeroUIStyles}
  <script id="ais-lang-toggle-init">window.__toggleLangMenu=function(e){var d=(e&&e.target&&e.target.closest&&e.target.closest("details.lang-switch"))||document.querySelector("details.lang-switch");if(d){if(e&&e.target&&(e.target.tagName==="SUMMARY"||e.target.closest("summary")))return;d.open=!d.open;}};</script>
</head>
<body class="bg-black text-white selection:bg-cyan-500/30 selection:text-white">
  <div class="grain-overlay"></div>
  <div class="min-h-screen flex flex-col font-sans antialiased bg-black text-white transition-colors">
  ${universalHeader}
  
  <main class="flex-1">
    <div class="products-container">
      
      <!-- Directory Hero Header -->
      <div class="text-center max-w-3xl mx-auto pt-10 pb-12">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-5">
          <span class="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
          Solutions Directory & Knowledge Base
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-tight">
          IPTV Solutions &amp; <span class="bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-400 bg-clip-text text-transparent">Knowledge Base.</span>
        </h1>
        <p class="text-zinc-400 text-base sm:text-lg leading-relaxed mb-8">
          Browse 80+ authoritative resources covering hardware video encoders, third-party player applications, streaming protocols, troubleshooting diagnostics, and verified subscription packages.
        </p>

        <!-- Live Instant Search Bar -->
        <div class="relative max-w-xl mx-auto mb-8">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            id="productSearchInput"
            placeholder="Search guides, hardware encoders, players, protocols..."
            class="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-zinc-900/80 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-sm"
          />
        </div>

        <!-- Quick Jump Filter Tabs -->
        <div class="flex items-center justify-center flex-wrap gap-2">
          <a href="#featured" class="quick-tab-btn is-active">⚡ Essential Guides</a>
          <a href="#hardware" class="quick-tab-btn">Hardware Encoders</a>
          <a href="#players" class="quick-tab-btn">Software & Players</a>
          <a href="#protocols" class="quick-tab-btn">Protocols & Playlists</a>
          <a href="#architecture" class="quick-tab-btn">Standards & Legal</a>
          <a href="#subscriptions" class="quick-tab-btn">Subscriptions & 4K</a>
        </div>
      </div>

      <!-- Essential Setup Guides Hub -->
      <section id="featured" class="mb-16 scroll-mt-24">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-2.5">
            <span class="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
            <h2 class="text-xl sm:text-2xl font-bold text-white tracking-tight">Recommended Setup Guides</h2>
          </div>
          <a href="/guides/" class="text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1">
            Browse all 35+ tutorials <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="/guides/how-to-activate-iptv-smarters-pro/" class="featured-hero-card group">
            <div>
              <div class="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-105 transition-transform">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>
              </div>
              <span class="text-[11px] font-bold text-purple-400 uppercase tracking-wider block mb-1">Quick Start</span>
              <h3 class="font-bold text-lg text-white group-hover:text-purple-200 transition-colors mb-2">Activation Guide</h3>
              <p class="text-zinc-400 text-xs leading-relaxed">Complete walkthrough for activating IPTV Smarters Pro with Xtream Codes or M3U.</p>
            </div>
            <span class="text-xs font-semibold text-purple-300 flex items-center gap-1 mt-4">Read walkthrough →</span>
          </a>

          <a href="/guides/install-iptv-smarters-pro-on-firestick/" class="featured-hero-card group">
            <div>
              <div class="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-105 transition-transform">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <span class="text-[11px] font-bold text-purple-400 uppercase tracking-wider block mb-1">Device Setup</span>
              <h3 class="font-bold text-lg text-white group-hover:text-purple-200 transition-colors mb-2">Firestick Installation</h3>
              <p class="text-zinc-400 text-xs leading-relaxed">Sideload and configure IPTV Smarters Pro on Amazon Fire TV Stick 4K & Max.</p>
            </div>
            <span class="text-xs font-semibold text-purple-300 flex items-center gap-1 mt-4">Read walkthrough →</span>
          </a>

          <a href="/guides/iptv-smarters-pro-failed-to-authorize-fix/" class="featured-hero-card group">
            <div>
              <div class="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-105 transition-transform">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              </div>
              <span class="text-[11px] font-bold text-purple-400 uppercase tracking-wider block mb-1">Error Fix</span>
              <h3 class="font-bold text-lg text-white group-hover:text-purple-200 transition-colors mb-2">Failed to Authorize Fix</h3>
              <p class="text-zinc-400 text-xs leading-relaxed">Diagnostic steps for resolving server authorization and portal rejection errors.</p>
            </div>
            <span class="text-xs font-semibold text-purple-300 flex items-center gap-1 mt-4">Read walkthrough →</span>
          </a>

          <a href="/guides/iptv-smarters-pro-keeps-buffering-fixes/" class="featured-hero-card group">
            <div>
              <div class="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-105 transition-transform">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <span class="text-[11px] font-bold text-purple-400 uppercase tracking-wider block mb-1">Performance</span>
              <h3 class="font-bold text-lg text-white group-hover:text-purple-200 transition-colors mb-2">Buffer Elimination Guide</h3>
              <p class="text-zinc-400 text-xs leading-relaxed">Buffer tuning, hardware acceleration, and ISP throttling workarounds.</p>
            </div>
            <span class="text-xs font-semibold text-purple-300 flex items-center gap-1 mt-4">Read walkthrough →</span>
          </a>
        </div>
      </section>

      <!-- The 5 Thematic HeroUI Sections -->
      ${sectionsHtml}

      <!-- Bottom Support & Conversion Banner -->
      <section class="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950/40 via-zinc-900 to-indigo-950/40 border border-purple-500/30 text-center relative overflow-hidden">
        <div class="relative z-10 max-w-2xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">Need Help Choosing or Setting Up?</h2>
          <p class="text-zinc-400 text-sm sm:text-base mb-6 leading-relaxed">
            Our engineers and support agents are available 24/7 on WhatsApp to provide free test accounts, instant credentials, and hardware compatibility checks.
          </p>
          <div class="flex items-center justify-center flex-wrap gap-4">
            <a href="https://wa.me/18042804332" target="_blank" rel="noopener noreferrer" class="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm inline-flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/20">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
              Message on WhatsApp
            </a>
            <a href="/pricing/" class="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm inline-flex items-center gap-2 transition-all shadow-lg shadow-purple-600/20">
              <span>View Subscriptions</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>
        </div>
      </section>

    </div>
  </main>

  ${universalFooter}
  </div>

  <!-- Search Filter Script -->
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const input = document.getElementById('productSearchInput');
      if (!input) return;
      const cards = document.querySelectorAll('.heroui-card');
      const sections = document.querySelectorAll('.category-block');

      input.addEventListener('input', function(e) {
        const val = e.target.value.toLowerCase().trim();
        cards.forEach(card => {
          const title = card.getAttribute('data-title') || '';
          const desc = card.getAttribute('data-desc') || '';
          if (!val || title.includes(val) || desc.includes(val)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });

        // Hide section headers if all cards inside are hidden
        sections.forEach(sec => {
          const visible = sec.querySelectorAll('.heroui-card[style*="display: flex"]').length;
          const total = sec.querySelectorAll('.heroui-card').length;
          if (val && visible === 0 && total > 0) {
            sec.style.display = 'none';
          } else {
            sec.style.display = 'block';
          }
        });
      });
    });
  </script>
  <script src="/assets/js/site-interactions.js?v=20261030-nav" defer></script>
  <script src="/assets/js/support-chat.js" defer></script>
</body>
</html>`;

fs.writeFileSync(productsHtmlPath, fullPageHtml, 'utf8');
console.log('Successfully regenerated Iptv The smarters Pro/products/index.html with HeroUI design system!');
