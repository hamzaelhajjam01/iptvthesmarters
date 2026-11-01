const fs = require('fs');
const path = require('path');

const featuresHtmlPath = path.join(__dirname, '..', 'Iptv The smarters Pro', 'features', 'index.html');
const targetHtmlPath = path.join(__dirname, '..', 'Iptv The smarters Pro', 'web-player', 'index.html');

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/smarters-iptv-web-player/abgjeecgdimjgimljendbajiepppdjlk';
const FIREFOX_STORE_URL = 'https://addons.mozilla.org/addon/smarters-iptv-web-player/';

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
  <title>Smarters IPTV Web Player — Chrome &amp; Firefox IPTV Extension</title>
  <meta name="description" content="Free Smarters IPTV web player extension for Google Chrome &amp; Mozilla Firefox. Stream live TV, HLS .m3u8 playlists, and Xtream Codes API on Windows, Mac, Linux &amp; Chromebook with anti-freeze 4K playback and zero CORS errors.">
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
              Official Chrome Extension &amp; Firefox Add-on
            </span>
          </div>
          <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Smarters IPTV <span class="text-gradient">Web Player.</span>
          </h1>
          <p class="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Stream live TV channels, HLS (.m3u8) video playlists, and Xtream Codes API directly in <strong>Google Chrome</strong> &amp; <strong>Mozilla Firefox</strong>.
            Enjoy lag-free, anti-freeze streaming on <strong>Windows</strong>, <strong>macOS</strong>, and <strong>Linux</strong> with zero emulator setup.
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <a href="${CHROME_STORE_URL}" target="_blank" rel="noopener noreferrer" class="group relative w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-primary text-white font-bold flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(123,63,228,0.3)] text-sm sm:text-base">
              <svg class="w-5 h-5 text-cyan-300 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              <span>Add to Chrome — Free</span>
              <div class="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <a href="${FIREFOX_STORE_URL}" target="_blank" rel="noopener noreferrer" class="group relative w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 hover:from-orange-500 hover:to-amber-500 text-white font-bold flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.35)] text-sm sm:text-base border border-orange-400/30">
              <svg class="w-5 h-5 text-amber-200 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm7.64 6.78a8.03 8.03 0 0 1-1.28 4.7 7.91 7.91 0 0 1-3.66 3.12 7.84 7.84 0 0 1-5.18.3 8.06 8.06 0 0 1-4.4-3.14 7.95 7.95 0 0 1-1.12-5 7.86 7.86 0 0 1 2.82-5.1 8 8 0 0 1 5.38-1.66c.2.58.26 1.2.18 1.82a4.4 4.4 0 0 1-1.22 2.38 4.3 4.3 0 0 1-2.42 1.2 4.14 4.14 0 0 1-2.5-.4c-.1.38-.14.78-.14 1.18a6 6 0 0 0 1.76 4.24 6.06 6.06 0 0 0 4.24 1.76 5.92 5.92 0 0 0 4.12-1.64 5.9 5.9 0 0 0 1.76-4.12 6.09 6.09 0 0 0-.28-1.84c.6.48 1.12 1.06 1.54 1.7z" />
              </svg>
              <span>Add to Firefox — Free</span>
              <div class="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <a href="/pricing/" class="group w-full sm:w-auto px-7 py-3.5 rounded-full border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm text-white font-bold hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
              <span>View 4K Plans</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
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
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready to stream in your browser?</h2>
          <p class="text-zinc-400 mb-10 text-lg leading-relaxed">Install the official Smarters IPTV Web Player extension for free on Chrome or Firefox and unlock seamless 4K HLS, M3U8, and Xtream Codes streaming.</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a href="${CHROME_STORE_URL}" target="_blank" rel="noopener noreferrer" class="group relative inline-flex px-7 py-3.5 rounded-full bg-gradient-primary text-white font-bold items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(123,63,228,0.3)] text-base">
              <span>Add to Chrome</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              <div class="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a href="${FIREFOX_STORE_URL}" target="_blank" rel="noopener noreferrer" class="group relative inline-flex px-7 py-3.5 rounded-full bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 hover:from-orange-500 hover:to-amber-500 text-white font-bold items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.35)] text-base border border-orange-400/30">
              <span>Add to Firefox</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              <div class="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a href="/pricing/" class="inline-flex px-7 py-3.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white font-bold border border-zinc-700/60 transition-all duration-300 hover:scale-[1.02] text-base">
              <span>View IPTV Plans</span>
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
