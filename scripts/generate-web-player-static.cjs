const fs = require('fs');
const path = require('path');

const featuresHtmlPath = path.join(__dirname, '..', 'Iptv The smarters Pro', 'features', 'index.html');
const targetHtmlPath = path.join(__dirname, '..', 'Iptv The smarters Pro', 'web-player', 'index.html');

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/smarters-iptv-web-player/abgjeecgdimjgimljendbajiepppdjlk';
const FIREFOX_STORE_URL = 'https://addons.mozilla.org/addon/smarters-iptv-web-player/';
const EDGE_STORE_URL = 'https://microsoftedge.microsoft.com/addons/detail/smarters-iptv-web-player-/cppncpjdopgkhnbdbccjipfmelaififg';

const edgeSvg = `<svg class="w-6 h-6 shrink-0" style="width:24px;height:24px;flex-shrink:0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><defs><radialGradient id="edge-hero-b" cx="161.8" cy="68.9" r="95.4" gradientTransform="matrix(1 0 0 -.95 0 248.8)" gradientUnits="userSpaceOnUse"><stop offset=".7" stop-opacity="0"/><stop offset=".9" stop-opacity=".5"/><stop offset="1"/></radialGradient><radialGradient id="edge-hero-d" cx="-340.3" cy="63" r="143.2" gradientTransform="matrix(.15 -.99 -.8 -.12 176.6 -125.4)" gradientUnits="userSpaceOnUse"><stop offset=".8" stop-opacity="0"/><stop offset=".9" stop-opacity=".5"/><stop offset="1"/></radialGradient><radialGradient id="edge-hero-e" cx="113.4" cy="570.2" r="202.4" gradientTransform="matrix(-.04 1 2.13 .08 -1179.5 -106.7)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#35c1f1"/><stop offset=".1" stop-color="#34c1ed"/><stop offset=".2" stop-color="#2fc2df"/><stop offset=".3" stop-color="#2bc3d2"/><stop offset=".7" stop-color="#36c752"/></radialGradient><radialGradient id="edge-hero-f" cx="376.5" cy="568" r="97.3" gradientTransform="matrix(.28 .96 .78 -.23 -303.8 -148.5)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#66eb6e"/><stop offset="1" stop-color="#66eb6e" stop-opacity="0"/></radialGradient><linearGradient id="edge-hero-a" x1="63.3" y1="84" x2="241.7" y2="84" gradientTransform="matrix(1 0 0 -1 0 266)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0c59a4"/><stop offset="1" stop-color="#114a8b"/></linearGradient><linearGradient id="edge-hero-c" x1="157.3" y1="161.4" x2="46" y2="40.1" gradientTransform="matrix(1 0 0 -1 0 266)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1b9de2"/><stop offset=".2" stop-color="#1595df"/><stop offset=".7" stop-color="#0680d7"/><stop offset="1" stop-color="#0078d4"/></linearGradient></defs><path d="M235.7 195.5a93.7 93.7 0 0 1-10.6 4.7 101.9 101.9 0 0 1-35.9 6.4c-47.3 0-88.5-32.5-88.5-74.3a31.5 31.5 0 0 1 16.4-27.3c-42.8 1.8-53.8 46.4-53.8 72.5 0 74 68.1 81.4 82.8 81.4 7.9 0 19.8-2.3 27-4.6l1.3-.4a128.3 128.3 0 0 0 66.6-52.8 4 4 0 0 0-5.3-5.6Z" transform="translate(-4.6 -5)" fill="url(#edge-hero-a)"/><path d="M235.7 195.5a93.7 93.7 0 0 1-10.6 4.7 101.9 101.9 0 0 1-35.9 6.4c-47.3 0-88.5-32.5-88.5-74.3a31.5 31.5 0 0 1 16.4-27.3c-42.8 1.8-53.8 46.4-53.8 72.5 0 74 68.1 81.4 82.8 81.4 7.9 0 19.8-2.3 27-4.6l1.3-.4a128.3 128.3 0 0 0 66.6-52.8 4 4 0 0 0-5.3-5.6Z" transform="translate(-4.6 -5)" style="isolation:isolate;opacity:.35;fill:url(#edge-hero-b)"/><path d="M110.3 246.3A79.2 79.2 0 0 1 87.6 225a80.7 80.7 0 0 1 29.5-120c3.2-1.5 8.5-4.1 15.6-4a32.4 32.4 0 0 1 25.7 13 31.9 31.9 0 0 1 6.3 18.7c0-.2 24.5-79.6-80-79.6-43.9 0-80 41.6-80 78.2a130.2 130.2 0 0 0 12.1 56 128 128 0 0 0 156.4 67 75.5 75.5 0 0 1-62.8-8Z" transform="translate(-4.6 -5)" fill="url(#edge-hero-c)"/><path d="M110.3 246.3A79.2 79.2 0 0 1 87.6 225a80.7 80.7 0 0 1 29.5-120c3.2-1.5 8.5-4.1 15.6-4a32.4 32.4 0 0 1 25.7 13 31.9 31.9 0 0 1 6.3 18.7c0-.2 24.5-79.6-80-79.6-43.9 0-80 41.6-80 78.2a130.2 130.2 0 0 0 12.1 56 128 128 0 0 0 156.4 67 75.5 75.5 0 0 1-62.8-8Z" transform="translate(-4.6 -5)" style="opacity:.41;fill:url(#edge-hero-d);isolation:isolate"/><path d="M157 153.8c-.9 1-3.4 2.5-3.4 5.6 0 2.6 1.7 5.2 4.8 7.3 14.3 10 41.4 8.6 41.5 8.6a59.6 59.6 0 0 0 30.3-8.3 61.4 61.4 0 0 0 30.4-52.9c.3-22.4-8-37.3-11.3-43.9C228 28.8 182.3 5 132.6 5a128 128 0 0 0-128 126.2c.5-36.5 36.8-66 80-66 3.5 0 23.5.3 42 10a72.6 72.6 0 0 1 30.9 29.3c6.1 10.6 7.2 24.1 7.2 29.5s-2.7 13.3-7.8 19.9Z" transform="translate(-4.6 -5)" fill="url(#edge-hero-e)"/><path d="M157 153.8c-.9 1-3.4 2.5-3.4 5.6 0 2.6 1.7 5.2 4.8 7.3 14.3 10 41.4 8.6 41.5 8.6a59.6 59.6 0 0 0 30.3-8.3 61.4 61.4 0 0 0 30.4-52.9c.3-22.4-8-37.3-11.3-43.9C228 28.8 182.3 5 132.6 5a128 128 0 0 0-128 126.2c.5-36.5 36.8-66 80-66 3.5 0 23.5.3 42 10a72.6 72.6 0 0 1 30.9 29.3c6.1 10.6 7.2 24.1 7.2 29.5s-2.7 13.3-7.8 19.9Z" transform="translate(-4.6 -5)" style="fill:url(#edge-hero-f)"/></svg>`;

// Read features/index.html to extract identical head, header, and footer structure
const featuresHtml = fs.readFileSync(featuresHtmlPath, 'utf8');

// Header extraction: from <astro-island uid=... Header ...> down to </header></astro-island>
const headerMatch = featuresHtml.match(/<astro-island[^>]+Header[\s\S]*?<\/header><\/astro-island>/);
if (!headerMatch) {
  console.error('Could not find header in features/index.html');
  process.exit(1);
}
let cleanHeader = headerMatch[0];
cleanHeader = cleanHeader.replace(/nav-link-active/g, '').replace(/text-white\s+nav-link-active\s+font-semibold/g, 'text-zinc-400 hover:text-white');

// Footer extraction
const footerMatch = featuresHtml.match(/<astro-island[^>]+Footer[\s\S]*?<\/footer><\/astro-island>/);
if (!footerMatch) {
  console.error('Could not find footer in features/index.html');
  process.exit(1);
}
let cleanFooter = footerMatch[0];

// Inject Firefox link in footer if not already there
if (!cleanFooter.includes(FIREFOX_STORE_URL)) {
  const oldFooterChrome = `<span>Web Player (Chrome)</span><span class="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Free</span></a></li>`;
  const newFooterBoth = `<span>Web Player (Chrome)</span><span class="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Free</span></a></li><li><a href="${FIREFOX_STORE_URL}" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors tappable flex items-center gap-1.5"><span>Web Player (Firefox)</span><span class="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">Free</span></a></li>`;
  cleanFooter = cleanFooter.replace(oldFooterChrome, newFooterBoth);
}
if (!cleanFooter.includes(EDGE_STORE_URL)) {
  const oldFooterFirefox = `<span>Web Player (Firefox)</span><span class="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">Free</span></a></li>`;
  const newFooterAllThree = `<span>Web Player (Firefox)</span><span class="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">Free</span></a></li><li><a href="${EDGE_STORE_URL}" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors tappable flex items-center gap-1.5"><span>Web Player (Edge)</span><span class="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">Free</span></a></li>`;
  cleanFooter = cleanFooter.replace(oldFooterFirefox, newFooterAllThree);
}

// Scripts after footer
const afterFooterMatch = featuresHtml.match(/<\/astro-island>\s*(<astro-island[^>]+AstroGlobalComponents[\s\S]*?<\/body><\/html>)/);
const afterFooter = afterFooterMatch ? afterFooterMatch[1] : '</div><script src="/assets/js/site-interactions.js" defer></script><script src="/assets/js/support-chat.js" defer></script></body></html>';

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://thesmartersiptv.com/web-player/#webpage",
      "url": "https://thesmartersiptv.com/web-player/",
      "name": "Smarters IPTV Web Player — Chrome & Firefox Extension",
      "description": "Free Smarters IPTV web player extension for Google Chrome & Mozilla Firefox. Stream live TV, HLS .m3u8 playlists, and Xtream Codes API on Windows, Mac, Linux & Chromebook with anti-freeze 4K playback and zero CORS errors.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://thesmartersiptv.com/#website",
        "name": "The Smarters IPTV",
        "url": "https://thesmartersiptv.com/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://thesmartersiptv.com/web-player/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmartersiptv.com/" },
        { "@type": "ListItem", "position": 2, "name": "Web Player", "item": "https://thesmartersiptv.com/web-player/" }
      ]
    },
    {
      "@type": "SoftwareApplication",
      "name": "Smarters IPTV Web Player — HLS, M3U & Xtream",
      "operatingSystem": "Windows, macOS, Linux, ChromeOS",
      "applicationCategory": "MultimediaApplication",
      "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
      "downloadUrl": [CHROME_STORE_URL, FIREFOX_STORE_URL],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "15",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Organization",
        "name": "IPTV Smarters Pro Team",
        "url": "https://thesmartersiptv.com/"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://thesmartersiptv.com/web-player/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I watch IPTV on Chrome and Firefox without installing software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Our Smarters IPTV Web Player extension is officially available on both the Google Chrome Web Store and Mozilla Firefox Add-ons. It allows you to stream live TV channels, M3U playlists, and Xtream Codes API streams directly in your browser on Windows, macOS, Linux, and Chromebooks."
          }
        },
        {
          "@type": "Question",
          "name": "Is the extension officially approved on Mozilla Add-ons and Chrome Web Store?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The extension is verified, screened, and published on both the Google Chrome Web Store and Mozilla Add-ons (AMO), guaranteeing compliant Manifest V3 architecture, zero malware, and complete security."
          }
        },
        {
          "@type": "Question",
          "name": "Does this web player support Xtream Codes API and M3U playlists?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. You can log in using your standard Xtream Codes credentials (Server URL, Username, and Password) or paste any direct M3U / M3U8 playlist URL to instantly load your channel bouquets, EPG, and VOD content."
          }
        },
        {
          "@type": "Question",
          "name": "Why does the browser ask for website permissions when installing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IPTV video streams and playlist files are hosted on thousands of custom third-party streaming domains. The extension requires network access solely to fetch .m3u8 video chunks and bypass CORS headers directly from your chosen IPTV provider. We never track, inspect, or store your personal browsing data."
          }
        },
        {
          "@type": "Question",
          "name": "How does the extension solve CORS errors when streaming IPTV?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard browsers block web video players from fetching stream segments from third-party IPTV servers due to CORS policies. Our extension uses secure declarative network rules to adjust request headers and user-agent tags in real time, enabling seamless playback."
          }
        },
        {
          "@type": "Question",
          "name": "Where do I get high-speed 4K IPTV streams for the web player?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can pair the web player with our premium IPTV Smarters Pro subscription, giving you access to 25,000+ live channels, 100,000+ VOD movies, 99.9% anti-freeze uptime, and instant Xtream Codes activation."
          }
        }
      ]
    }
  ]
};

const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Smarters IPTV Web Player — Chrome, Firefox &amp; Edge IPTV Extension</title>
  <meta name="description" content="Free Smarters IPTV web player extension for Google Chrome, Mozilla Firefox &amp; Microsoft Edge. Stream live TV, HLS .m3u8 playlists, and Xtream Codes API on Windows, Mac, Linux &amp; Chromebook with anti-freeze 4K playback and zero CORS errors.">
  <link rel="canonical" href="https://thesmartersiptv.com/web-player/">
  <meta property="og:title" content="Smarters IPTV Web Player — Official Chrome &amp; Firefox Extension">
  <meta property="og:description" content="Fast, free web player for HLS (.m3u8) streams, IPTV M3U playlists, and Xtream Codes API. Watch IPTV directly in Chrome &amp; Firefox on PC, Mac &amp; Linux.">
  <meta property="og:url" content="https://thesmartersiptv.com/web-player/">
  <meta property="og:site_name" content="IPTV Smarters Pro">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://thesmartersiptv.com/og-image.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Smarters IPTV Web Player — Official Chrome &amp; Firefox Extension">
  <meta name="twitter:description" content="Watch IPTV online in your browser. Free HLS, M3U &amp; Xtream Codes web player extension for Chrome &amp; Firefox.">
  <meta name="twitter:image" content="https://thesmartersiptv.com/og-image.jpg">
  <link rel="icon" href="/favicon.ico">
  <link rel="stylesheet" href="/assets/css/brand-fonts.css">
  <link rel="stylesheet" href="/assets/css/inter.css">
  <link rel="stylesheet" href="/assets/css/main.css">
  <link rel="stylesheet" href="/assets/css/modern-ui.css">
  <link rel="stylesheet" href="/assets/css/heroui.css">
  <link rel="stylesheet" href="/assets/css/runtime.css">
  <link rel="stylesheet" href="/assets/css/theme.css">
  <style>
    .reveal-on-scroll {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal-on-scroll.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
    .grain-overlay {
      position: fixed;
      inset: 0;
      z-index: 60;
      pointer-events: none;
      opacity: 0.035;
      mix-blend-mode: overlay;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      background-size: 180px 180px;
    }
  </style>
  <script type="application/ld+json">
  ${JSON.stringify(jsonLd, null, 2)}
  </script>
</head>
<body class="bg-black text-white selection:bg-cyan-500/30 selection:text-white">
  <div class="grain-overlay"></div>
  <div class="min-h-screen flex flex-col font-sans antialiased bg-black text-white transition-colors">
    <style>
      astro-island, astro-slot, astro-static-slot { display: contents; }
    </style>
    ${cleanHeader}

    <main class="flex-1">
      <!-- Hero Section -->
      <section class="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <div class="flex flex-col items-center justify-center gap-4 mb-4">
            <div class="w-0.5 h-6 bg-cyan-500"></div>
            <span class="text-xs font-bold tracking-widest text-zinc-500 uppercase">
              Official Chrome, Firefox &amp; Edge Extension
            </span>
          </div>
          <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Smarters IPTV <span class="text-gradient">Web Player.</span>
          </h1>
          <p class="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Stream live TV channels, HLS (.m3u8) video playlists, and Xtream Codes API directly in <strong>Google Chrome</strong>, <strong>Mozilla Firefox</strong> &amp; <strong>Microsoft Edge</strong>.
            Enjoy lag-free, anti-freeze streaming on <strong>Windows</strong>, <strong>macOS</strong>, and <strong>Linux</strong> with zero emulator setup.
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10" style="display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:16px;margin-bottom:2.5rem;">
            <a href="${CHROME_STORE_URL}" target="_blank" rel="noopener noreferrer" class="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-white font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] text-sm sm:text-base shadow-[0_8px_30px_rgba(37,99,235,0.35)]" style="display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:14px 26px;border-radius:9999px;background:linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%);border:1px solid rgba(147,197,253,0.4);color:#ffffff;text-decoration:none;font-weight:700;box-shadow:0 8px 30px rgba(37,99,235,0.35);margin:4px;">
              <svg class="w-6 h-6 shrink-0" style="width:24px;height:24px;flex-shrink:0;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><defs><linearGradient id="chrome-hero-a" x1="3.2173" y1="15" x2="44.7812" y2="15" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d93025"/><stop offset="1" stop-color="#ea4335"/></linearGradient><linearGradient id="chrome-hero-b" x1="20.7219" y1="47.6791" x2="41.5039" y2="11.6837" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fcc934"/><stop offset="1" stop-color="#fbbc04"/></linearGradient><linearGradient id="chrome-hero-c" x1="26.5981" y1="46.5015" x2="5.8161" y2="10.506" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1e8e3e"/><stop offset="1" stop-color="#34a853"/></linearGradient></defs><circle cx="24" cy="23.9947" r="12" style="fill:#fff"/><path d="M3.2154,36A24,24,0,1,0,12,3.2154,24,24,0,0,0,3.2154,36ZM34.3923,18A12,12,0,1,1,18,13.6077,12,12,0,0,1,34.3923,18Z" style="fill:none"/><path d="M24,12H44.7812a23.9939,23.9939,0,0,0-41.5639.0029L13.6079,30l.0093-.0024A11.9852,11.9852,0,0,1,24,12Z" style="fill:url(#chrome-hero-a)"/><circle cx="24" cy="24" r="9.5" style="fill:#1a73e8"/><path d="M34.3913,30.0029,24.0007,48A23.994,23.994,0,0,0,44.78,12.0031H23.9989l-.0025.0093A11.985,11.985,0,0,1,34.3913,30.0029Z" style="fill:url(#chrome-hero-b)"/><path d="M13.6086,30.0031,3.218,12.006A23.994,23.994,0,0,0,24.0025,48L34.3931,30.0029l-.0067-.0068a11.9852,11.9852,0,0,1-20.7778.007Z" style="fill:url(#chrome-hero-c)"/></svg>
              <span style="letter-spacing:-0.02em;">Add to Chrome</span>
              <span style="font-size:11px;padding:2px 8px;border-radius:9999px;background:rgba(255,255,255,0.22);border:1px solid rgba(255,255,255,0.35);letter-spacing:0.05em;text-transform:uppercase;font-weight:800;">Free</span>
            </a>

            <a href="${FIREFOX_STORE_URL}" target="_blank" rel="noopener noreferrer" class="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-white font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] text-sm sm:text-base shadow-[0_8px_30px_rgba(234,88,12,0.35)]" style="display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:14px 26px;border-radius:9999px;background:linear-gradient(135deg, #c2410c 0%, #ea580c 50%, #f97316 100%);border:1px solid rgba(253,186,116,0.4);color:#ffffff;text-decoration:none;font-weight:700;box-shadow:0 8px 30px rgba(234,88,12,0.35);margin:4px;">
              <svg class="w-6 h-6 shrink-0" style="width:24px;height:24px;flex-shrink:0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24"><defs><radialGradient id="ff-hero-g" cx="210%" cy="-100%" r="290%"><stop offset=".1" stop-color="#ffe226"/><stop offset=".79" stop-color="#ff7139"/></radialGradient><radialGradient id="ff-hero-c" cx="49%" cy="40%" r="128%" gradientTransform="matrix(.82 0 0 1 .088 0)"><stop offset=".3" stop-color="#960e18"/><stop offset=".35" stop-color="#b11927" stop-opacity=".74"/><stop offset=".43" stop-color="#db293d" stop-opacity=".34"/><stop offset=".5" stop-color="#f5334b" stop-opacity=".09"/><stop offset=".53" stop-color="#ff3750" stop-opacity="0"/></radialGradient><radialGradient id="ff-hero-d" cx="48%" cy="-12%" r="140%"><stop offset=".13" stop-color="#fff44f"/><stop offset=".53" stop-color="#ff980e"/></radialGradient><radialGradient id="ff-hero-e" cx="22.76%" cy="110.11%" r="100%"><stop offset=".35" stop-color="#3a8ee6"/><stop offset=".67" stop-color="#9059ff"/><stop offset="1" stop-color="#c139e6"/></radialGradient><radialGradient id="ff-hero-f" cx="52%" cy="33%" r="59%" gradientTransform="scale(.9 1)"><stop offset=".21" stop-color="#9059ff" stop-opacity="0"/><stop offset=".97" stop-color="#6e008b" stop-opacity=".6"/></radialGradient><radialGradient id="ff-hero-b" cx="87.4%" cy="-12.9%" r="128%" gradientTransform="matrix(.8 0 0 1 .178 .129)"><stop offset=".13" stop-color="#ffbd4f"/><stop offset=".28" stop-color="#ff980e"/><stop offset=".47" stop-color="#ff3750"/><stop offset=".78" stop-color="#eb0878"/><stop offset=".86" stop-color="#e50080"/></radialGradient><radialGradient id="ff-hero-h" cx="84%" cy="-41%" r="180%"><stop offset=".11" stop-color="#fff44f"/><stop offset=".46" stop-color="#ff980e"/><stop offset=".72" stop-color="#ff3647"/><stop offset=".9" stop-color="#e31587"/></radialGradient><radialGradient id="ff-hero-i" cx="16.1%" cy="-18.6%" r="348.8%" gradientTransform="scale(1 .47) rotate(84 .279 -.297)"><stop offset="0" stop-color="#fff44f"/><stop offset=".3" stop-color="#ff980e"/><stop offset=".57" stop-color="#ff3647"/><stop offset=".74" stop-color="#e31587"/></radialGradient><radialGradient id="ff-hero-j" cx="18.9%" cy="-42.5%" r="238.4%"><stop offset=".14" stop-color="#fff44f"/><stop offset=".48" stop-color="#ff980e"/><stop offset=".66" stop-color="#ff3647"/><stop offset=".9" stop-color="#e31587"/></radialGradient><radialGradient id="ff-hero-k" cx="159.3%" cy="-44.72%" r="313.1%"><stop offset=".09" stop-color="#fff44f"/><stop offset=".63" stop-color="#ff980e"/></radialGradient><linearGradient id="ff-hero-a" x1="87.25%" y1="15.5%" x2="9.4%" y2="93.1%"><stop offset=".05" stop-color="#fff44f"/><stop offset=".37" stop-color="#ff980e"/><stop offset=".53" stop-color="#ff3647"/><stop offset=".7" stop-color="#e31587"/></linearGradient><linearGradient id="ff-hero-l" x1="80%" y1="14%" x2="18%" y2="84%"><stop offset=".17" stop-color="#fff44f" stop-opacity=".8"/><stop offset=".6" stop-color="#fff44f" stop-opacity="0"/></linearGradient></defs><path d="M478.711 166.353c-10.445-25.124-31.6-52.248-48.212-60.821 13.52 26.505 21.345 53.093 24.335 72.936 0 .039.015.136.047.4C427.706 111.135 381.627 83.823 344 24.355c-1.9-3.007-3.805-6.022-5.661-9.2a73.716 73.716 0 01-2.646-4.972A43.7 43.7 0 01332.1.677a.626.626 0 00-.546-.644.818.818 0 00-.451 0c-.034.012-.084.051-.12.065-.053.021-.12.069-.176.1.027-.036.083-.117.1-.136-60.37 35.356-80.85 100.761-82.732 133.484a120.249 120.249 0 00-66.142 25.488 71.355 71.355 0 00-6.225-4.7 111.338 111.338 0 01-.674-58.732c-24.688 11.241-43.89 29.01-57.85 44.7h-.111c-9.527-12.067-8.855-51.873-8.312-60.184-.114-.515-7.107 3.63-8.023 4.255a175.073 175.073 0 00-23.486 20.12 210.478 210.478 0 00-22.442 26.913c0 .012-.007.026-.011.038 0-.013.007-.026.011-.038a202.838 202.838 0 00-32.247 72.805c-.115.521-.212 1.061-.324 1.586-.452 2.116-2.08 12.7-2.365 15-.022.177-.032.347-.053.524a229.066 229.066 0 00-3.9 33.157c0 .41-.025.816-.025 1.227C16 388.418 123.6 496 256.324 496c118.865 0 217.56-86.288 236.882-199.63.407-3.076.733-6.168 1.092-9.271 4.777-41.21-.53-84.525-15.587-120.746zM201.716 354.447c1.124.537 2.18 1.124 3.334 1.639.048.033.114.07.163.1a126.191 126.191 0 01-3.497-1.739zm55.053-144.93zm198.131-30.59l-.032-.233c.012.085.027.174.04.259z" fill="url(#ff-hero-a)"/><path d="M478.711 166.353c-10.445-25.124-31.6-52.248-48.212-60.821 13.52 26.505 21.345 53.093 24.335 72.936 0-.058.011.048.036.226.012.085.027.174.04.259 22.675 61.47 10.322 123.978-7.479 162.175-27.539 59.1-94.215 119.67-198.576 116.716C136.1 454.651 36.766 370.988 18.223 261.41c-3.379-17.28 0-26.054 1.7-40.084-2.071 10.816-2.86 13.94-3.9 33.157 0 .41-.025.816-.025 1.227C16 388.418 123.6 496 256.324 496c118.865 0 217.56-86.288 236.882-199.63.407-3.076.733-6.168 1.092-9.271 4.777-41.21-.53-84.525-15.587-120.746z" fill="url(#ff-hero-b)"/><path d="M478.711 166.353c-10.445-25.124-31.6-52.248-48.212-60.821 13.52 26.505 21.345 53.093 24.335 72.936 0-.058.011.048.036.226.012.085.027.174.04.259 22.675 61.47 10.322 123.978-7.479 162.175-27.539 59.1-94.215 119.67-198.576 116.716C136.1 454.651 36.766 370.988 18.223 261.41c-3.379-17.28 0-26.054 1.7-40.084-2.071 10.816-2.86 13.94-3.9 33.157 0 .41-.025.816-.025 1.227C16 388.418 123.6 496 256.324 496c118.865 0 217.56-86.288 236.882-199.63.407-3.076.733-6.168 1.092-9.271 4.777-41.21-.53-84.525-15.587-120.746z" fill="url(#ff-hero-c)"/><path d="M361.922 194.6c.524.368 1 .734 1.493 1.1a130.706 130.706 0 00-22.31-29.112C266.4 91.892 321.516 4.626 330.811.194c.027-.036.083-.117.1-.136-60.37 35.356-80.85 100.761-82.732 133.484 2.8-.194 5.592-.429 8.442-.429 45.051 0 84.289 24.77 105.301 61.487z" fill="url(#ff-hero-d)"/><path d="M256.772 209.514c-.393 5.978-21.514 26.593-28.9 26.593-68.339 0-79.432 41.335-79.432 41.335 3.027 34.81 27.261 63.475 56.611 78.643 1.339.692 2.694 1.317 4.05 1.935a132.768 132.768 0 007.059 2.886 106.743 106.743 0 0031.271 6.031c119.78 5.618 142.986-143.194 56.545-186.408 22.137-3.85 45.115 5.053 57.947 14.067-21.012-36.714-60.25-61.484-105.3-61.484-2.85 0-5.641.235-8.442.429a120.249 120.249 0 00-66.142 25.488c3.664 3.1 7.8 7.244 16.514 15.828 16.302 16.067 58.13 32.705 58.219 34.657z" fill="url(#ff-hero-e)"/><path d="M256.772 209.514c-.393 5.978-21.514 26.593-28.9 26.593-68.339 0-79.432 41.335-79.432 41.335 3.027 34.81 27.261 63.475 56.611 78.643 1.339.692 2.694 1.317 4.05 1.935a132.768 132.768 0 007.059 2.886 106.743 106.743 0 0031.271 6.031c119.78 5.618 142.986-143.194 56.545-186.408 22.137-3.85 45.115 5.053 57.947 14.067-21.012-36.714-60.25-61.484-105.3-61.484-2.85 0-5.641.235-8.442.429a120.249 120.249 0 00-66.142 25.488c3.664 3.1 7.8 7.244 16.514 15.828 16.302 16.067 58.13 32.705 58.219 34.657z" fill="url(#ff-hero-f)"/><path d="M170.829 151.036a244.042 244.042 0 014.981 3.3 111.338 111.338 0 01-.674-58.732c-24.688 11.241-43.89 29.01-57.85 44.7 1.155-.033 36.014-.66 53.543 10.732z" fill="url(#ff-hero-g)"/><path d="M18.223 261.41C36.766 370.988 136.1 454.651 248.855 457.844c104.361 2.954 171.037-57.62 198.576-116.716 17.8-38.2 30.154-100.7 7.479-162.175l-.008-.026-.032-.233c-.025-.178-.04-.284-.036-.226 0 .039.015.136.047.4 8.524 55.661-19.79 109.584-64.051 146.044l-.133.313c-86.245 70.223-168.774 42.368-185.484 30.966a144.108 144.108 0 01-3.5-1.743c-50.282-24.029-71.054-69.838-66.6-109.124-42.457 0-56.934-35.809-56.934-35.809s38.119-27.179 88.358-3.541c46.53 21.893 90.228 3.543 90.233 3.541-.089-1.952-41.917-18.59-58.223-34.656-8.713-8.584-12.85-12.723-16.514-15.828a71.355 71.355 0 00-6.225-4.7 282.929 282.929 0 00-4.981-3.3c-17.528-11.392-52.388-10.765-53.543-10.735h-.111c-9.527-12.067-8.855-51.873-8.312-60.184-.114-.515-7.107 3.63-8.023 4.255a175.073 175.073 0 00-23.486 20.12 210.478 210.478 0 00-22.442 26.919c0 .012-.007.026-.011.038 0-.013.007-.026.011-.038a202.838 202.838 0 00-32.247 72.805c-.115.521-8.65 37.842-4.44 57.199z" fill="url(#ff-hero-h)"/><path d="M341.105 166.587a130.706 130.706 0 0122.31 29.112c1.323.994 2.559 1.985 3.608 2.952 54.482 50.2 25.936 121.2 23.807 126.26 44.261-36.46 72.575-90.383 64.051-146.044C427.706 111.135 381.627 83.823 344 24.355c-1.9-3.007-3.805-6.022-5.661-9.2a73.716 73.716 0 01-2.646-4.972A43.7 43.7 0 01332.1.677a.626.626 0 00-.546-.644.818.818 0 00-.451 0c-.034.012-.084.051-.12.065-.053.021-.12.069-.176.1-9.291 4.428-64.407 91.694 10.298 166.389z" fill="url(#ff-hero-i)"/><path d="M367.023 198.651c-1.049-.967-2.285-1.958-3.608-2.952-.489-.368-.969-.734-1.493-1.1-12.832-9.014-35.81-17.917-57.947-14.067 86.441 43.214 63.235 192.026-56.545 186.408a106.743 106.743 0 01-31.271-6.031 134.51 134.51 0 01-7.059-2.886c-1.356-.618-2.711-1.243-4.05-1.935.048.033.114.07.163.1 16.71 11.4 99.239 39.257 185.484-30.966l.133-.313c2.129-5.054 30.675-76.057-23.807-126.258z" fill="url(#ff-hero-j)"/><path d="M148.439 277.443s11.093-41.335 79.432-41.335c7.388 0 28.509-20.615 28.9-26.593s-43.7 18.352-90.233-3.541c-50.239-23.638-88.358 3.541-88.358 3.541s14.477 35.809 56.934 35.809c-4.453 39.286 16.319 85.1 66.6 109.124 1.124.537 2.18 1.124 3.334 1.639-29.348-15.169-53.582-43.834-56.609-78.644z" fill="url(#ff-hero-k)"/><path d="M478.711 166.353c-10.445-25.124-31.6-52.248-48.212-60.821 13.52 26.505 21.345 53.093 24.335 72.936 0 .039.015.136.047.4C427.706 111.135 381.627 83.823 344 24.355c-1.9-3.007-3.805-6.022-5.661-9.2a73.716 73.716 0 01-2.646-4.972A43.7 43.7 0 01332.1.677a.626.626 0 00-.546-.644.818.818 0 00-.451 0c-.034.012-.084.051-.12.065-.053.021-.12.069-.176.1.027-.036.083-.117.1-.136-60.37 35.356-80.85 100.761-82.732 133.484 2.8-.194 5.592-.429 8.442-.429 45.053 0 84.291 24.77 105.3 61.484-12.832-9.014-35.81-17.917-57.947-14.067 86.441 43.214 63.235 192.026-56.545 186.408a106.743 106.743 0 01-31.271-6.031 134.51 134.51 0 01-7.059-2.886c-1.356-.618-2.711-1.243-4.05-1.935.048.033.114.07.163.1a144.108 144.108 0 01-3.5-1.743c1.124.537 2.18 1.124 3.334 1.639-29.35-15.168-53.584-43.833-56.611-78.643 0 0 11.093-41.335 79.432-41.335 7.388 0 28.509-20.615 28.9-26.593-.089-1.952-41.917-18.59-58.223-34.656-8.713-8.584-12.85-12.723-16.514-15.828a71.355 71.355 0 00-6.225-4.7 111.338 111.338 0 01-.674-58.732c-24.688 11.241-43.89 29.01-57.85 44.7h-.111c-9.527-12.067-8.855-51.873-8.312-60.184-.114-.515-7.107 3.63-8.023 4.255a175.073 175.073 0 00-23.486 20.12 210.478 210.478 0 00-22.435 26.916c0 .012-.007.026-.011.038 0-.013.007-.026.011-.038a202.838 202.838 0 00-32.247 72.805c-.115.521-.212 1.061-.324 1.586-.452 2.116-2.486 12.853-2.77 15.156-.022.177.021-.176 0 0a279.565 279.565 0 00-3.544 33.53c0 .41-.025.816-.025 1.227C16 388.418 123.6 496 256.324 496c118.865 0 217.56-86.288 236.882-199.63.407-3.076.733-6.168 1.092-9.271 4.777-41.21-.53-84.525-15.587-120.746zm-23.841 12.341c.012.085.027.174.04.259l-.008-.026-.032-.233z" fill="url(#ff-hero-l)"/></svg>
              <span style="letter-spacing:-0.02em;">Add to Firefox</span>
              <span style="font-size:11px;padding:2px 8px;border-radius:9999px;background:rgba(255,255,255,0.22);border:1px solid rgba(255,255,255,0.35);letter-spacing:0.05em;text-transform:uppercase;font-weight:800;">Free</span>
            </a>

            <a href="${EDGE_STORE_URL}" target="_blank" rel="noopener noreferrer" class="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-white font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] text-sm sm:text-base shadow-[0_8px_30px_rgba(2,132,199,0.35)]" style="display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:14px 26px;border-radius:9999px;background:linear-gradient(135deg, #0369a1 0%, #0284c7 50%, #06b6d4 100%);border:1px solid rgba(125,211,252,0.4);color:#ffffff;text-decoration:none;font-weight:700;box-shadow:0 8px 30px rgba(2,132,199,0.35);margin:4px;">
              ${edgeSvg}
              <span style="letter-spacing:-0.02em;">Add to Edge</span>
              <span style="font-size:11px;padding:2px 8px;border-radius:9999px;background:rgba(255,255,255,0.22);border:1px solid rgba(255,255,255,0.35);letter-spacing:0.05em;text-transform:uppercase;font-weight:800;">Free</span>
            </a>

            <a href="/pricing/" class="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-zinc-200 hover:text-white font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] text-sm sm:text-base" style="display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:14px 24px;border-radius:9999px;background:rgba(24,24,27,0.85);border:1px solid rgba(63,63,70,0.8);color:#ffffff;text-decoration:none;font-weight:700;backdrop-filter:blur(10px);margin:4px;">
              <span>View 4K Plans</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right transition-transform group-hover:translate-x-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>

          <!-- Trust highlights -->
          <div class="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <span class="flex items-center gap-1.5"><span class="text-yellow-400">★★★★★</span> 5.0 Chrome Web Store</span>
            <span class="text-zinc-700">•</span>
            <span class="flex items-center gap-1.5"><span class="text-orange-400">🦊</span> Approved on Mozilla Add-ons</span>
            <span class="text-zinc-700">•</span>
            <span class="flex items-center gap-1.5"><span class="text-green-400">✓</span> Zero CORS Buffering</span>
            <span class="text-zinc-700">•</span>
            <span class="flex items-center gap-1.5"><span class="text-purple-400">⚡</span> Xtream Codes &amp; M3U</span>
            <span class="text-zinc-700">•</span>
            <span class="flex items-center gap-1.5"><span class="text-cyan-400">✓</span> 100% Free Forever</span>
          </div>
        </div>
      </section>

      <!-- Feature Grid -->
      <section class="py-12 reveal-on-scroll is-visible relative border-t border-zinc-900/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="flex flex-col items-center justify-center gap-4 mb-4">
              <div class="w-0.5 h-6 bg-cyan-500"></div>
              <span class="text-xs font-bold tracking-widest text-zinc-500 uppercase">Engineered For Browsers</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              High-Performance Web Streaming
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              The fastest, most reliable way to stream IPTV on Windows, Mac, and Linux without heavy software.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Card 1 -->
            <div class="reveal-on-scroll is-visible group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 hover:bg-zinc-900/50 hover:border-zinc-700/60 transition-all duration-300 flex flex-col items-start text-left overflow-hidden h-full">
              <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div class="relative z-10 flex flex-col h-full w-full">
                <div class="flex justify-between items-start w-full mb-8">
                  <div class="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300 shadow-lg shadow-black/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-cyan-400"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path></svg>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-50 transition-colors">IPTV Player for Windows, Mac &amp; Linux</h3>
                <p class="text-zinc-400 text-sm leading-relaxed flex-grow">Watch IPTV online without installing Bluestacks or heavy virtual machines. Runs natively inside Google Chrome, Mozilla Firefox, Brave, and Edge on any desktop or laptop operating system.</p>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="reveal-on-scroll is-visible group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 hover:bg-zinc-900/50 hover:border-zinc-700/60 transition-all duration-300 flex flex-col items-start text-left overflow-hidden h-full">
              <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div class="relative z-10 flex flex-col h-full w-full">
                <div class="flex justify-between items-start w-full mb-8">
                  <div class="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300 shadow-lg shadow-black/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-cyan-400"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-50 transition-colors">Universal HLS &amp; M3U8 Player</h3>
                <p class="text-zinc-400 text-sm leading-relaxed flex-grow">Seamlessly renders HLS .m3u8 live feeds and on-demand video files. Supports multi-bitrate adaptive streaming, alternate audio tracks, and embedded subtitle tracks.</p>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="reveal-on-scroll is-visible group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 hover:bg-zinc-900/50 hover:border-zinc-700/60 transition-all duration-300 flex flex-col items-start text-left overflow-hidden h-full">
              <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div class="relative z-10 flex flex-col h-full w-full">
                <div class="flex justify-between items-start w-full mb-8">
                  <div class="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300 shadow-lg shadow-black/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-cyan-400"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-50 transition-colors">Xtream Codes Web Player API</h3>
                <p class="text-zinc-400 text-sm leading-relaxed flex-grow">Enter your Server URL, Username, and Password to pull your provider bouquets automatically. Categorized by Live TV, Movies, Series, and Catch-up.</p>
              </div>
            </div>

            <!-- Card 4 -->
            <div class="reveal-on-scroll is-visible group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 hover:bg-zinc-900/50 hover:border-zinc-700/60 transition-all duration-300 flex flex-col items-start text-left overflow-hidden h-full">
              <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div class="relative z-10 flex flex-col h-full w-full">
                <div class="flex justify-between items-start w-full mb-8">
                  <div class="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300 shadow-lg shadow-black/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-cyan-400"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-50 transition-colors">CORS &amp; User-Agent Bypass</h3>
                <p class="text-zinc-400 text-sm leading-relaxed flex-grow">Automatic declarative net request rules strip blocking CORS headers and set authentic Smarters user-agent strings so your streams never get blocked by browser security.</p>
              </div>
            </div>

            <!-- Card 5 -->
            <div class="reveal-on-scroll is-visible group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 hover:bg-zinc-900/50 hover:border-zinc-700/60 transition-all duration-300 flex flex-col items-start text-left overflow-hidden h-full">
              <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div class="relative z-10 flex flex-col h-full w-full">
                <div class="flex justify-between items-start w-full mb-8">
                  <div class="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300 shadow-lg shadow-black/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-cyan-400"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.48 12H2"></path></svg>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-50 transition-colors">Real-Time Stream Diagnostics</h3>
                <p class="text-zinc-400 text-sm leading-relaxed flex-grow">Built-in diagnostic overlay reveals stream resolution, framerate, buffer duration, and network throughput so you can pinpoint any freezing or provider bottlenecks.</p>
              </div>
            </div>

            <!-- Card 6 -->
            <div class="reveal-on-scroll is-visible group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 hover:bg-zinc-900/50 hover:border-zinc-700/60 transition-all duration-300 flex flex-col items-start text-left overflow-hidden h-full">
              <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div class="relative z-10 flex flex-col h-full w-full">
                <div class="flex justify-between items-start w-full mb-8">
                  <div class="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300 shadow-lg shadow-black/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-cyan-400"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-50 transition-colors">Lightweight &amp; Battery Friendly</h3>
                <p class="text-zinc-400 text-sm leading-relaxed flex-grow">Consumes less than 50MB of RAM compared to 2GB+ required by emulators. Hardware-accelerated GPU decoding ensures your laptop battery lasts while streaming live sports.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Setup in Three Steps -->
      <section class="py-16 bg-zinc-950/80 border-y border-zinc-900/50 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="flex flex-col items-center justify-center gap-4 mb-6">
              <div class="w-1 h-6 bg-gradient-to-b from-cyan-500 to-transparent rounded-full"></div>
              <span class="text-xs font-bold tracking-widest text-cyan-400 uppercase">Quick Start</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Setup in three steps</h2>
            <p class="text-zinc-400 max-w-2xl mx-auto text-lg">Get up and streaming in under 60 seconds with Chrome or Firefox.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div class="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent -z-10"></div>
            
            <div class="bg-black/50 backdrop-blur-sm border border-zinc-800/60 p-10 rounded-3xl text-center relative group hover:border-zinc-700 transition-colors flex flex-col justify-between">
              <div>
                <div class="w-20 h-20 mx-auto bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex items-center justify-center mb-8 group-hover:border-blue-500 transition-colors shadow-lg shadow-black/50">
                  <span class="text-2xl font-black text-blue-400">01</span>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Install Extension</h3>
                <p class="text-zinc-400 leading-relaxed mb-6">Add Smarters IPTV Web Player in one click from the Chrome Web Store or Mozilla Add-ons.</p>
              </div>
              <div class="flex items-center justify-center gap-3">
                <a href="${CHROME_STORE_URL}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold text-xs transition-colors">
                  <span>Chrome Store</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <span class="text-zinc-600">•</span>
                <a href="${FIREFOX_STORE_URL}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 font-semibold text-xs transition-colors">
                  <span>Firefox Add-on</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <span class="text-zinc-600">•</span>
                <a href="${EDGE_STORE_URL}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold text-xs transition-colors">
                  <span>Edge Add-on</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div class="bg-black/50 backdrop-blur-sm border border-zinc-800/60 p-10 rounded-3xl text-center relative group hover:border-zinc-700 transition-colors flex flex-col justify-between">
              <div>
                <div class="w-20 h-20 mx-auto bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex items-center justify-center mb-8 group-hover:border-cyan-400 transition-colors shadow-lg shadow-black/50">
                  <span class="text-2xl font-black text-cyan-400">02</span>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Enter Credentials</h3>
                <p class="text-zinc-400 leading-relaxed mb-6">Open the extension and choose Xtream Codes API login or paste any direct M3U / M3U8 playlist URL.</p>
              </div>
              <div>
                <a href="/pricing/" class="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors">
                  <span>Need a Playlist? View Plans</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div class="bg-black/50 backdrop-blur-sm border border-zinc-800/60 p-10 rounded-3xl text-center relative group hover:border-zinc-700 transition-colors flex flex-col justify-between">
              <div>
                <div class="w-20 h-20 mx-auto bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex items-center justify-center mb-8 group-hover:border-purple-400 transition-colors shadow-lg shadow-black/50">
                  <span class="text-2xl font-black text-purple-400">03</span>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Start Streaming</h3>
                <p class="text-zinc-400 leading-relaxed mb-6">Select any live TV channel or VOD title. Enjoy smooth 4K playback with automated anti-buffer stream handling.</p>
              </div>
              <div>
                <span class="inline-flex items-center gap-1.5 text-green-400 text-sm font-semibold">
                  <span>✓</span> Instant 4K Playback
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Comparison Table -->
      <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <div class="flex flex-col items-center justify-center gap-4 mb-4">
            <div class="w-0.5 h-6 bg-purple-500"></div>
            <span class="text-xs font-bold tracking-widest text-zinc-500 uppercase">Performance &amp; Efficiency</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Web Player vs Traditional Software</h2>
          <p class="text-zinc-400 max-w-2xl mx-auto text-lg">Why browser streaming on Windows, Mac &amp; Linux outperforms heavy emulators and desktop players.</p>
        </div>

        <div class="overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-sm shadow-2xl">
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-zinc-800 bg-zinc-950/60">
                  <th class="py-5 px-6 text-sm font-bold text-white">Feature</th>
                  <th class="py-5 px-6 text-sm font-bold text-cyan-400 bg-cyan-500/5">Smarters Web Player</th>
                  <th class="py-5 px-6 text-sm font-bold text-zinc-400">Android Emulators (Bluestacks)</th>
                  <th class="py-5 px-6 text-sm font-bold text-zinc-400">Desktop VLC Player</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-800/60 text-sm">
                <tr class="hover:bg-zinc-800/20 transition-colors">
                  <td class="py-4 px-6 font-semibold text-white">Browser Support</td>
                  <td class="py-4 px-6 text-green-400 font-bold bg-cyan-500/5">Chrome &amp; Firefox Native</td>
                  <td class="py-4 px-6 text-zinc-400">N/A (Virtual Machine)</td>
                  <td class="py-4 px-6 text-zinc-400">No Web Integration</td>
                </tr>
                <tr class="hover:bg-zinc-800/20 transition-colors">
                  <td class="py-4 px-6 font-semibold text-white">Setup Time</td>
                  <td class="py-4 px-6 text-green-400 font-bold bg-cyan-500/5">&lt; 15 seconds</td>
                  <td class="py-4 px-6 text-rose-400">15–20 minutes</td>
                  <td class="py-4 px-6 text-yellow-400">5 minutes</td>
                </tr>
                <tr class="hover:bg-zinc-800/20 transition-colors">
                  <td class="py-4 px-6 font-semibold text-white">Memory (RAM) Usage</td>
                  <td class="py-4 px-6 text-green-400 font-bold bg-cyan-500/5">~45 MB</td>
                  <td class="py-4 px-6 text-rose-400">2,000 MB+ (2 GB)</td>
                  <td class="py-4 px-6 text-yellow-400">250 MB</td>
                </tr>
                <tr class="hover:bg-zinc-800/20 transition-colors">
                  <td class="py-4 px-6 font-semibold text-white">Browser CORS Handling</td>
                  <td class="py-4 px-6 text-green-400 font-bold bg-cyan-500/5">Automatic Header Bypass</td>
                  <td class="py-4 px-6 text-zinc-500">N/A (Virtual Machine)</td>
                  <td class="py-4 px-6 text-zinc-500">No Web Integration</td>
                </tr>
                <tr class="hover:bg-zinc-800/20 transition-colors">
                  <td class="py-4 px-6 font-semibold text-white">Xtream Codes API Login</td>
                  <td class="py-4 px-6 text-green-400 font-bold bg-cyan-500/5">Native 1-Click Login</td>
                  <td class="py-4 px-6 text-yellow-400">Requires APK Install</td>
                  <td class="py-4 px-6 text-rose-400">Manual M3U Only</td>
                </tr>
                <tr class="hover:bg-zinc-800/20 transition-colors">
                  <td class="py-4 px-6 font-semibold text-white">License &amp; Cost</td>
                  <td class="py-4 px-6 text-green-400 font-bold bg-cyan-500/5">100% Free Forever</td>
                  <td class="py-4 px-6 text-zinc-400">Free (Ad-Supported)</td>
                  <td class="py-4 px-6 text-zinc-400">Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="py-16 bg-zinc-950/30 border-t border-zinc-900/50" id="faq">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="flex flex-col items-center justify-center gap-4 mb-4">
              <div class="w-0.5 h-6 bg-cyan-500"></div>
              <span class="text-xs font-bold tracking-widest text-zinc-500 uppercase">Common Questions</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p class="text-zinc-400 max-w-xl mx-auto text-lg">Everything you need to know about streaming IPTV in Chrome &amp; Firefox, speed requirements, and permissions.</p>
          </div>

          <div class="faq-list w-full max-w-3xl mx-auto">
            <details class="faq-item" name="webplayer-faq" open>
              <summary class="faq-summary">
                <span class="faq-num" aria-hidden="true">01</span>
                <span class="faq-q">Can I watch IPTV on Chrome and Firefox without installing software?</span>
                <span class="faq-chevron" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Yes! Our Smarters IPTV Web Player extension is officially available on both the Google Chrome Web Store and Mozilla Firefox Add-ons. It allows you to stream live TV channels, M3U playlists, and Xtream Codes API streams directly in your browser on Windows, macOS, Linux, and Chromebooks.</p>
              </div>
            </details>

            <details class="faq-item" name="webplayer-faq">
              <summary class="faq-summary">
                <span class="faq-num" aria-hidden="true">02</span>
                <span class="faq-q">Is the extension officially approved on Mozilla Add-ons and Chrome Web Store?</span>
                <span class="faq-chevron" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Yes. The extension is verified, screened, and published on both the Google Chrome Web Store and Mozilla Add-ons (AMO), guaranteeing compliant Manifest V3 architecture, zero malware, and complete security.</p>
              </div>
            </details>

            <details class="faq-item" name="webplayer-faq">
              <summary class="faq-summary">
                <span class="faq-num" aria-hidden="true">03</span>
                <span class="faq-q">Does this web player support Xtream Codes API and M3U playlists?</span>
                <span class="faq-chevron" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Absolutely. You can log in using your standard Xtream Codes credentials (Server URL, Username, and Password) or paste any direct M3U / M3U8 playlist URL to instantly load your channel bouquets, EPG, and VOD content.</p>
              </div>
            </details>

            <details class="faq-item" name="webplayer-faq">
              <summary class="faq-summary">
                <span class="faq-num" aria-hidden="true">04</span>
                <span class="faq-q">Why does the browser ask for website permissions when installing?</span>
                <span class="faq-chevron" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>IPTV video streams and playlist files are hosted on thousands of custom third-party streaming domains. The extension requires network access solely to fetch .m3u8 video chunks and bypass CORS headers directly from your chosen IPTV provider. We never track, inspect, or store your personal browsing data.</p>
              </div>
            </details>

            <details class="faq-item" name="webplayer-faq">
              <summary class="faq-summary">
                <span class="faq-num" aria-hidden="true">05</span>
                <span class="faq-q">How does the extension solve CORS errors when streaming IPTV?</span>
                <span class="faq-chevron" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Standard browsers block web video players from fetching stream segments from third-party IPTV servers due to CORS policies. Our extension uses secure declarative network rules to adjust request headers and user-agent tags in real time, enabling seamless playback.</p>
              </div>
            </details>

            <details class="faq-item" name="webplayer-faq">
              <summary class="faq-summary">
                <span class="faq-num" aria-hidden="true">06</span>
                <span class="faq-q">Where do I get high-speed 4K IPTV streams for the web player?</span>
                <span class="faq-chevron" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>You can pair the web player with our premium IPTV Smarters Pro subscription, giving you access to 25,000+ live channels, 100,000+ VOD movies, 99.9% anti-freeze uptime, and instant Xtream Codes activation.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <!-- Bottom Conversion CTA -->
      <section class="py-16 text-center border-t border-zinc-900/50 relative overflow-hidden">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready to stream in your browser?</h2>
          <p class="text-zinc-400 mb-10 text-lg leading-relaxed">Install the official Smarters IPTV Web Player extension for free on Chrome, Firefox, or Edge and unlock seamless 4K HLS, M3U8, and Xtream Codes streaming.</p>
          <div class="flex flex-wrap items-center justify-center gap-4" style="display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:14px;margin:0 auto;">
            <a href="${CHROME_STORE_URL}" target="_blank" rel="noopener noreferrer" class="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-white font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] text-sm sm:text-base shadow-[0_8px_30px_rgba(37,99,235,0.35)]" style="display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:12px 24px;border-radius:9999px;background:linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%);border:1px solid rgba(147,197,253,0.4);color:#ffffff;text-decoration:none;font-weight:700;box-shadow:0 8px 30px rgba(37,99,235,0.35);margin:6px;">
              <svg class="w-5 h-5 shrink-0" style="width:20px;height:20px;flex-shrink:0;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><defs><linearGradient id="chrome-bot-a" x1="3.2173" y1="15" x2="44.7812" y2="15" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d93025"/><stop offset="1" stop-color="#ea4335"/></linearGradient><linearGradient id="chrome-bot-b" x1="20.7219" y1="47.6791" x2="41.5039" y2="11.6837" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fcc934"/><stop offset="1" stop-color="#fbbc04"/></linearGradient><linearGradient id="chrome-bot-c" x1="26.5981" y1="46.5015" x2="5.8161" y2="10.506" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1e8e3e"/><stop offset="1" stop-color="#34a853"/></linearGradient></defs><circle cx="24" cy="23.9947" r="12" style="fill:#fff"/><path d="M3.2154,36A24,24,0,1,0,12,3.2154,24,24,0,0,0,3.2154,36ZM34.3923,18A12,12,0,1,1,18,13.6077,12,12,0,0,1,34.3923,18Z" style="fill:none"/><path d="M24,12H44.7812a23.9939,23.9939,0,0,0-41.5639.0029L13.6079,30l.0093-.0024A11.9852,11.9852,0,0,1,24,12Z" style="fill:url(#chrome-bot-a)"/><circle cx="24" cy="24" r="9.5" style="fill:#1a73e8"/><path d="M34.3913,30.0029,24.0007,48A23.994,23.994,0,0,0,44.78,12.0031H23.9989l-.0025.0093A11.985,11.985,0,0,1,34.3913,30.0029Z" style="fill:url(#chrome-bot-b)"/><path d="M13.6086,30.0031,3.218,12.006A23.994,23.994,0,0,0,24.0025,48L34.3931,30.0029l-.0067-.0068a11.9852,11.9852,0,0,1-20.7778.007Z" style="fill:url(#chrome-bot-c)"/></svg>
              <span>Add to Chrome</span>
            </a>
            <a href="${FIREFOX_STORE_URL}" target="_blank" rel="noopener noreferrer" class="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-white font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] text-sm sm:text-base shadow-[0_8px_30px_rgba(234,88,12,0.35)]" style="display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:12px 24px;border-radius:9999px;background:linear-gradient(135deg, #c2410c 0%, #ea580c 50%, #f97316 100%);border:1px solid rgba(253,186,116,0.4);color:#ffffff;text-decoration:none;font-weight:700;box-shadow:0 8px 30px rgba(234,88,12,0.35);margin:6px;">
              <svg class="w-5 h-5 shrink-0" style="width:20px;height:20px;flex-shrink:0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20"><defs><radialGradient id="ff-bot-g" cx="210%" cy="-100%" r="290%"><stop offset=".1" stop-color="#ffe226"/><stop offset=".79" stop-color="#ff7139"/></radialGradient><radialGradient id="ff-bot-c" cx="49%" cy="40%" r="128%" gradientTransform="matrix(.82 0 0 1 .088 0)"><stop offset=".3" stop-color="#960e18"/><stop offset=".35" stop-color="#b11927" stop-opacity=".74"/><stop offset=".43" stop-color="#db293d" stop-opacity=".34"/><stop offset=".5" stop-color="#f5334b" stop-opacity=".09"/><stop offset=".53" stop-color="#ff3750" stop-opacity="0"/></radialGradient><radialGradient id="ff-bot-d" cx="48%" cy="-12%" r="140%"><stop offset=".13" stop-color="#fff44f"/><stop offset=".53" stop-color="#ff980e"/></radialGradient><radialGradient id="ff-bot-e" cx="22.76%" cy="110.11%" r="100%"><stop offset=".35" stop-color="#3a8ee6"/><stop offset=".67" stop-color="#9059ff"/><stop offset="1" stop-color="#c139e6"/></radialGradient><radialGradient id="ff-bot-f" cx="52%" cy="33%" r="59%" gradientTransform="scale(.9 1)"><stop offset=".21" stop-color="#9059ff" stop-opacity="0"/><stop offset=".97" stop-color="#6e008b" stop-opacity=".6"/></radialGradient><radialGradient id="ff-bot-b" cx="87.4%" cy="-12.9%" r="128%" gradientTransform="matrix(.8 0 0 1 .178 .129)"><stop offset=".13" stop-color="#ffbd4f"/><stop offset=".28" stop-color="#ff980e"/><stop offset=".47" stop-color="#ff3750"/><stop offset=".78" stop-color="#eb0878"/><stop offset=".86" stop-color="#e50080"/></radialGradient><radialGradient id="ff-bot-h" cx="84%" cy="-41%" r="180%"><stop offset=".11" stop-color="#fff44f"/><stop offset=".46" stop-color="#ff980e"/><stop offset=".72" stop-color="#ff3647"/><stop offset=".9" stop-color="#e31587"/></radialGradient><radialGradient id="ff-bot-i" cx="16.1%" cy="-18.6%" r="348.8%" gradientTransform="scale(1 .47) rotate(84 .279 -.297)"><stop offset="0" stop-color="#fff44f"/><stop offset=".3" stop-color="#ff980e"/><stop offset=".57" stop-color="#ff3647"/><stop offset=".74" stop-color="#e31587"/></radialGradient><radialGradient id="ff-bot-j" cx="18.9%" cy="-42.5%" r="238.4%"><stop offset=".14" stop-color="#fff44f"/><stop offset=".48" stop-color="#ff980e"/><stop offset=".66" stop-color="#ff3647"/><stop offset=".9" stop-color="#e31587"/></radialGradient><radialGradient id="ff-bot-k" cx="159.3%" cy="-44.72%" r="313.1%"><stop offset=".09" stop-color="#fff44f"/><stop offset=".63" stop-color="#ff980e"/></radialGradient><linearGradient id="ff-bot-a" x1="87.25%" y1="15.5%" x2="9.4%" y2="93.1%"><stop offset=".05" stop-color="#fff44f"/><stop offset=".37" stop-color="#ff980e"/><stop offset=".53" stop-color="#ff3647"/><stop offset=".7" stop-color="#e31587"/></linearGradient><linearGradient id="ff-bot-l" x1="80%" y1="14%" x2="18%" y2="84%"><stop offset=".17" stop-color="#fff44f" stop-opacity=".8"/><stop offset=".6" stop-color="#fff44f" stop-opacity="0"/></linearGradient></defs><path d="M478.711 166.353c-10.445-25.124-31.6-52.248-48.212-60.821 13.52 26.505 21.345 53.093 24.335 72.936 0 .039.015.136.047.4C427.706 111.135 381.627 83.823 344 24.355c-1.9-3.007-3.805-6.022-5.661-9.2a73.716 73.716 0 01-2.646-4.972A43.7 43.7 0 01332.1.677a.626.626 0 00-.546-.644.818.818 0 00-.451 0c-.034.012-.084.051-.12.065-.053.021-.12.069-.176.1.027-.036.083-.117.1-.136-60.37 35.356-80.85 100.761-82.732 133.484a120.249 120.249 0 00-66.142 25.488 71.355 71.355 0 00-6.225-4.7 111.338 111.338 0 01-.674-58.732c-24.688 11.241-43.89 29.01-57.85 44.7h-.111c-9.527-12.067-8.855-51.873-8.312-60.184-.114-.515-7.107 3.63-8.023 4.255a175.073 175.073 0 00-23.486 20.12 210.478 210.478 0 00-22.442 26.913c0 .012-.007.026-.011.038 0-.013.007-.026.011-.038a202.838 202.838 0 00-32.247 72.805c-.115.521-.212 1.061-.324 1.586-.452 2.116-2.08 12.7-2.365 15-.022.177-.032.347-.053.524a229.066 229.066 0 00-3.9 33.157c0 .41-.025.816-.025 1.227C16 388.418 123.6 496 256.324 496c118.865 0 217.56-86.288 236.882-199.63.407-3.076.733-6.168 1.092-9.271 4.777-41.21-.53-84.525-15.587-120.746zM201.716 354.447c1.124.537 2.18 1.124 3.334 1.639.048.033.114.07.163.1a126.191 126.191 0 01-3.497-1.739zm55.053-144.93zm198.131-30.59l-.032-.233c.012.085.027.174.04.259z" fill="url(#ff-bot-a)"/><path d="M478.711 166.353c-10.445-25.124-31.6-52.248-48.212-60.821 13.52 26.505 21.345 53.093 24.335 72.936 0-.058.011.048.036.226.012.085.027.174.04.259 22.675 61.47 10.322 123.978-7.479 162.175-27.539 59.1-94.215 119.67-198.576 116.716C136.1 454.651 36.766 370.988 18.223 261.41c-3.379-17.28 0-26.054 1.7-40.084-2.071 10.816-2.86 13.94-3.9 33.157 0 .41-.025.816-.025 1.227C16 388.418 123.6 496 256.324 496c118.865 0 217.56-86.288 236.882-199.63.407-3.076.733-6.168 1.092-9.271 4.777-41.21-.53-84.525-15.587-120.746z" fill="url(#ff-bot-b)"/><path d="M478.711 166.353c-10.445-25.124-31.6-52.248-48.212-60.821 13.52 26.505 21.345 53.093 24.335 72.936 0-.058.011.048.036.226.012.085.027.174.04.259 22.675 61.47 10.322 123.978-7.479 162.175-27.539 59.1-94.215 119.67-198.576 116.716C136.1 454.651 36.766 370.988 18.223 261.41c-3.379-17.28 0-26.054 1.7-40.084-2.071 10.816-2.86 13.94-3.9 33.157 0 .41-.025.816-.025 1.227C16 388.418 123.6 496 256.324 496c118.865 0 217.56-86.288 236.882-199.63.407-3.076.733-6.168 1.092-9.271 4.777-41.21-.53-84.525-15.587-120.746z" fill="url(#ff-bot-c)"/><path d="M361.922 194.6c.524.368 1 .734 1.493 1.1a130.706 130.706 0 00-22.31-29.112C266.4 91.892 321.516 4.626 330.811.194c.027-.036.083-.117.1-.136-60.37 35.356-80.85 100.761-82.732 133.484 2.8-.194 5.592-.429 8.442-.429 45.051 0 84.289 24.77 105.301 61.487z" fill="url(#ff-bot-d)"/><path d="M256.772 209.514c-.393 5.978-21.514 26.593-28.9 26.593-68.339 0-79.432 41.335-79.432 41.335 3.027 34.81 27.261 63.475 56.611 78.643 1.339.692 2.694 1.317 4.05 1.935a132.768 132.768 0 007.059 2.886 106.743 106.743 0 0031.271 6.031c119.78 5.618 142.986-143.194 56.545-186.408 22.137-3.85 45.115 5.053 57.947 14.067-21.012-36.714-60.25-61.484-105.3-61.484-2.85 0-5.641.235-8.442.429a120.249 120.249 0 00-66.142 25.488c3.664 3.1 7.8 7.244 16.514 15.828 16.302 16.067 58.13 32.705 58.219 34.657z" fill="url(#ff-bot-e)"/><path d="M256.772 209.514c-.393 5.978-21.514 26.593-28.9 26.593-68.339 0-79.432 41.335-79.432 41.335 3.027 34.81 27.261 63.475 56.611 78.643 1.339.692 2.694 1.317 4.05 1.935a132.768 132.768 0 007.059 2.886 106.743 106.743 0 0031.271 6.031c119.78 5.618 142.986-143.194 56.545-186.408 22.137-3.85 45.115 5.053 57.947 14.067-21.012-36.714-60.25-61.484-105.3-61.484-2.85 0-5.641.235-8.442.429a120.249 120.249 0 00-66.142 25.488c3.664 3.1 7.8 7.244 16.514 15.828 16.302 16.067 58.13 32.705 58.219 34.657z" fill="url(#ff-bot-f)"/><path d="M170.829 151.036a244.042 244.042 0 014.981 3.3 111.338 111.338 0 01-.674-58.732c-24.688 11.241-43.89 29.01-57.85 44.7 1.155-.033 36.014-.66 53.543 10.732z" fill="url(#ff-bot-g)"/><path d="M18.223 261.41C36.766 370.988 136.1 454.651 248.855 457.844c104.361 2.954 171.037-57.62 198.576-116.716 17.8-38.2 30.154-100.7 7.479-162.175l-.008-.026-.032-.233c-.025-.178-.04-.284-.036-.226 0 .039.015.136.047.4 8.524 55.661-19.79 109.584-64.051 146.044l-.133.313c-86.245 70.223-168.774 42.368-185.484 30.966a144.108 144.108 0 01-3.5-1.743c-50.282-24.029-71.054-69.838-66.6-109.124-42.457 0-56.934-35.809-56.934-35.809s38.119-27.179 88.358-3.541c46.53 21.893 90.228 3.543 90.233 3.541-.089-1.952-41.917-18.59-58.223-34.656-8.713-8.584-12.85-12.723-16.514-15.828a71.355 71.355 0 00-6.225-4.7 282.929 282.929 0 00-4.981-3.3c-17.528-11.392-52.388-10.765-53.543-10.735h-.111c-9.527-12.067-8.855-51.873-8.312-60.184-.114-.515-7.107 3.63-8.023 4.255a175.073 175.073 0 00-23.486 20.12 210.478 210.478 0 00-22.442 26.919c0 .012-.007.026-.011.038 0-.013.007-.026.011-.038a202.838 202.838 0 00-32.247 72.805c-.115.521-8.65 37.842-4.44 57.199z" fill="url(#ff-bot-h)"/><path d="M341.105 166.587a130.706 130.706 0 0122.31 29.112c1.323.994 2.559 1.985 3.608 2.952 54.482 50.2 25.936 121.2 23.807 126.26 44.261-36.46 72.575-90.383 64.051-146.044C427.706 111.135 381.627 83.823 344 24.355c-1.9-3.007-3.805-6.022-5.661-9.2a73.716 73.716 0 01-2.646-4.972A43.7 43.7 0 01332.1.677a.626.626 0 00-.546-.644.818.818 0 00-.451 0c-.034.012-.084.051-.12.065-.053.021-.12.069-.176.1-9.291 4.428-64.407 91.694 10.298 166.389z" fill="url(#ff-bot-i)"/><path d="M367.023 198.651c-1.049-.967-2.285-1.958-3.608-2.952-.489-.368-.969-.734-1.493-1.1-12.832-9.014-35.81-17.917-57.947-14.067 86.441 43.214 63.235 192.026-56.545 186.408a106.743 106.743 0 01-31.271-6.031 134.51 134.51 0 01-7.059-2.886c-1.356-.618-2.711-1.243-4.05-1.935.048.033.114.07.163.1 16.71 11.4 99.239 39.257 185.484-30.966l.133-.313c2.129-5.054 30.675-76.057-23.807-126.258z" fill="url(#ff-bot-j)"/><path d="M148.439 277.443s11.093-41.335 79.432-41.335c7.388 0 28.509-20.615 28.9-26.593s-43.7 18.352-90.233-3.541c-50.239-23.638-88.358 3.541-88.358 3.541s14.477 35.809 56.934 35.809c-4.453 39.286 16.319 85.1 66.6 109.124 1.124.537 2.18 1.124 3.334 1.639-29.348-15.169-53.582-43.834-56.609-78.644z" fill="url(#ff-bot-k)"/><path d="M478.711 166.353c-10.445-25.124-31.6-52.248-48.212-60.821 13.52 26.505 21.345 53.093 24.335 72.936 0 .039.015.136.047.4C427.706 111.135 381.627 83.823 344 24.355c-1.9-3.007-3.805-6.022-5.661-9.2a73.716 73.716 0 01-2.646-4.972A43.7 43.7 0 01332.1.677a.626.626 0 00-.546-.644.818.818 0 00-.451 0c-.034.012-.084.051-.12.065-.053.021-.12.069-.176.1.027-.036.083-.117.1-.136-60.37 35.356-80.85 100.761-82.732 133.484 2.8-.194 5.592-.429 8.442-.429 45.053 0 84.291 24.77 105.3 61.484-12.832-9.014-35.81-17.917-57.947-14.067 86.441 43.214 63.235 192.026-56.545 186.408a106.743 106.743 0 01-31.271-6.031 134.51 134.51 0 01-7.059-2.886c-1.356-.618-2.711-1.243-4.05-1.935.048.033.114.07.163.1a144.108 144.108 0 01-3.5-1.743c1.124.537 2.18 1.124 3.334 1.639-29.35-15.168-53.584-43.833-56.611-78.643 0 0 11.093-41.335 79.432-41.335 7.388 0 28.509-20.615 28.9-26.593-.089-1.952-41.917-18.59-58.223-34.656-8.713-8.584-12.85-12.723-16.514-15.828a71.355 71.355 0 00-6.225-4.7 111.338 111.338 0 01-.674-58.732c-24.688 11.241-43.89 29.01-57.85 44.7h-.111c-9.527-12.067-8.855-51.873-8.312-60.184-.114-.515-7.107 3.63-8.023 4.255a175.073 175.073 0 00-23.486 20.12 210.478 210.478 0 00-22.435 26.916c0 .012-.007.026-.011.038 0-.013.007-.026.011-.038a202.838 202.838 0 00-32.247 72.805c-.115.521-.212 1.061-.324 1.586-.452 2.116-2.486 12.853-2.77 15.156-.022.177.021-.176 0 0a279.565 279.565 0 00-3.544 33.53c0 .41-.025.816-.025 1.227C16 388.418 123.6 496 256.324 496c118.865 0 217.56-86.288 236.882-199.63.407-3.076.733-6.168 1.092-9.271 4.777-41.21-.53-84.525-15.587-120.746zm-23.841 12.341c.012.085.027.174.04.259l-.008-.026-.032-.233z" fill="url(#ff-bot-l)"/></svg>
              <span>Add to Firefox</span>
            </a>
            <a href="${EDGE_STORE_URL}" target="_blank" rel="noopener noreferrer" class="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-white font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] text-sm sm:text-base shadow-[0_8px_30px_rgba(2,132,199,0.35)]" style="display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:12px 24px;border-radius:9999px;background:linear-gradient(135deg, #0369a1 0%, #0284c7 50%, #06b6d4 100%);border:1px solid rgba(125,211,252,0.4);color:#ffffff;text-decoration:none;font-weight:700;box-shadow:0 8px 30px rgba(2,132,199,0.35);margin:6px;">
              <svg class="w-5 h-5 shrink-0" style="width:20px;height:20px;flex-shrink:0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><defs><radialGradient id="edge-bot-b" cx="161.8" cy="68.9" r="95.4" gradientTransform="matrix(1 0 0 -.95 0 248.8)" gradientUnits="userSpaceOnUse"><stop offset=".7" stop-opacity="0"/><stop offset=".9" stop-opacity=".5"/><stop offset="1"/></radialGradient><radialGradient id="edge-bot-d" cx="-340.3" cy="63" r="143.2" gradientTransform="matrix(.15 -.99 -.8 -.12 176.6 -125.4)" gradientUnits="userSpaceOnUse"><stop offset=".8" stop-opacity="0"/><stop offset=".9" stop-opacity=".5"/><stop offset="1"/></radialGradient><radialGradient id="edge-bot-e" cx="113.4" cy="570.2" r="202.4" gradientTransform="matrix(-.04 1 2.13 .08 -1179.5 -106.7)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#35c1f1"/><stop offset=".1" stop-color="#34c1ed"/><stop offset=".2" stop-color="#2fc2df"/><stop offset=".3" stop-color="#2bc3d2"/><stop offset=".7" stop-color="#36c752"/></radialGradient><radialGradient id="edge-bot-f" cx="376.5" cy="568" r="97.3" gradientTransform="matrix(.28 .96 .78 -.23 -303.8 -148.5)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#66eb6e"/><stop offset="1" stop-color="#66eb6e" stop-opacity="0"/></radialGradient><linearGradient id="edge-bot-a" x1="63.3" y1="84" x2="241.7" y2="84" gradientTransform="matrix(1 0 0 -1 0 266)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0c59a4"/><stop offset="1" stop-color="#114a8b"/></linearGradient><linearGradient id="edge-bot-c" x1="157.3" y1="161.4" x2="46" y2="40.1" gradientTransform="matrix(1 0 0 -1 0 266)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1b9de2"/><stop offset=".2" stop-color="#1595df"/><stop offset=".7" stop-color="#0680d7"/><stop offset="1" stop-color="#0078d4"/></linearGradient></defs><path d="M235.7 195.5a93.7 93.7 0 0 1-10.6 4.7 101.9 101.9 0 0 1-35.9 6.4c-47.3 0-88.5-32.5-88.5-74.3a31.5 31.5 0 0 1 16.4-27.3c-42.8 1.8-53.8 46.4-53.8 72.5 0 74 68.1 81.4 82.8 81.4 7.9 0 19.8-2.3 27-4.6l1.3-.4a128.3 128.3 0 0 0 66.6-52.8 4 4 0 0 0-5.3-5.6Z" transform="translate(-4.6 -5)" fill="url(#edge-bot-a)"/><path d="M235.7 195.5a93.7 93.7 0 0 1-10.6 4.7 101.9 101.9 0 0 1-35.9 6.4c-47.3 0-88.5-32.5-88.5-74.3a31.5 31.5 0 0 1 16.4-27.3c-42.8 1.8-53.8 46.4-53.8 72.5 0 74 68.1 81.4 82.8 81.4 7.9 0 19.8-2.3 27-4.6l1.3-.4a128.3 128.3 0 0 0 66.6-52.8 4 4 0 0 0-5.3-5.6Z" transform="translate(-4.6 -5)" style="isolation:isolate;opacity:.35;fill:url(#edge-bot-b)"/><path d="M110.3 246.3A79.2 79.2 0 0 1 87.6 225a80.7 80.7 0 0 1 29.5-120c3.2-1.5 8.5-4.1 15.6-4a32.4 32.4 0 0 1 25.7 13 31.9 31.9 0 0 1 6.3 18.7c0-.2 24.5-79.6-80-79.6-43.9 0-80 41.6-80 78.2a130.2 130.2 0 0 0 12.1 56 128 128 0 0 0 156.4 67 75.5 75.5 0 0 1-62.8-8Z" transform="translate(-4.6 -5)" fill="url(#edge-bot-c)"/><path d="M110.3 246.3A79.2 79.2 0 0 1 87.6 225a80.7 80.7 0 0 1 29.5-120c3.2-1.5 8.5-4.1 15.6-4a32.4 32.4 0 0 1 25.7 13 31.9 31.9 0 0 1 6.3 18.7c0-.2 24.5-79.6-80-79.6-43.9 0-80 41.6-80 78.2a130.2 130.2 0 0 0 12.1 56 128 128 0 0 0 156.4 67 75.5 75.5 0 0 1-62.8-8Z" transform="translate(-4.6 -5)" style="opacity:.41;fill:url(#edge-bot-d);isolation:isolate"/><path d="M157 153.8c-.9 1-3.4 2.5-3.4 5.6 0 2.6 1.7 5.2 4.8 7.3 14.3 10 41.4 8.6 41.5 8.6a59.6 59.6 0 0 0 30.3-8.3 61.4 61.4 0 0 0 30.4-52.9c.3-22.4-8-37.3-11.3-43.9C228 28.8 182.3 5 132.6 5a128 128 0 0 0-128 126.2c.5-36.5 36.8-66 80-66 3.5 0 23.5.3 42 10a72.6 72.6 0 0 1 30.9 29.3c6.1 10.6 7.2 24.1 7.2 29.5s-2.7 13.3-7.8 19.9Z" transform="translate(-4.6 -5)" fill="url(#edge-bot-e)"/><path d="M157 153.8c-.9 1-3.4 2.5-3.4 5.6 0 2.6 1.7 5.2 4.8 7.3 14.3 10 41.4 8.6 41.5 8.6a59.6 59.6 0 0 0 30.3-8.3 61.4 61.4 0 0 0 30.4-52.9c.3-22.4-8-37.3-11.3-43.9C228 28.8 182.3 5 132.6 5a128 128 0 0 0-128 126.2c.5-36.5 36.8-66 80-66 3.5 0 23.5.3 42 10a72.6 72.6 0 0 1 30.9 29.3c6.1 10.6 7.2 24.1 7.2 29.5s-2.7 13.3-7.8 19.9Z" transform="translate(-4.6 -5)" style="fill:url(#edge-bot-f)"/></svg>
              <span>Add to Edge</span>
            </a>
            <a href="/pricing/" class="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-zinc-200 hover:text-white font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] text-sm sm:text-base" style="display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 22px;border-radius:9999px;background:rgba(24,24,27,0.85);border:1px solid rgba(63,63,70,0.8);color:#ffffff;text-decoration:none;font-weight:700;backdrop-filter:blur(10px);margin:6px;">
              <span>View IPTV Plans</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right transition-transform group-hover:translate-x-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      </section>
    </main>
    ${cleanFooter}
  </div>
  ${afterFooter}
`;

fs.writeFileSync(targetHtmlPath, fullHtml, 'utf8');
console.log('Successfully generated static web-player HTML with Chrome + Firefox integration!');
