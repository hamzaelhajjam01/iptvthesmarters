const fs = require('fs');
const path = require('path');
const { generateUniversalHeader, generateUniversalFooter } = require('./universal-components.cjs');

const indexPath = path.join(__dirname, '..', 'Iptv The smarters Pro', 'products', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Ensure modern stylesheets in head
const modernStyles = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link rel="preload" as="style" href="/assets/css/inter.css">
  <link rel="stylesheet" href="/assets/css/inter.css" media="all" onload="this.media='all';this.onload=null">
  <noscript><link rel="stylesheet" href="/assets/css/inter.css"></noscript>
  <link rel="stylesheet" href="/assets/css/main.css">
  <link rel="stylesheet" href="/assets/css/theme.css?v=20260909-lang4">
  <link rel="stylesheet" href="/assets/css/heroui.css">
  <link rel="stylesheet" href="/assets/css/product-pages.css?v=2">
  <script id="ais-lang-toggle-init">window.__toggleLangMenu=function(e){var d=(e&&e.target&&e.target.closest&&e.target.closest("details.lang-switch"))||document.querySelector("details.lang-switch");if(d){if(e&&e.target&&(e.target.tagName==="SUMMARY"||e.target.closest("summary")))return;d.open=!d.open;}};</script>
`;

// Replace stylesheets in head
html = html.replace(/<link rel="stylesheet" href="\/assets\/css\/product-pages\.css\?v=1">[\s\S]*?<link rel="stylesheet" href="\/assets\/css\/heroui\.css">/, modernStyles);

// Modern HeroUI styles for products directory
const directoryStyle = `
  <style>
    .directory {
      width: min(1200px, calc(100% - 32px));
      margin: 0 auto;
      padding: 40px 0 100px;
    }
    .dir-header {
      text-align: center;
      max-width: 800px;
      margin: 0 auto 56px;
    }
    .featured-guides {
      background: linear-gradient(135deg, rgba(123, 63, 228, 0.12), rgba(95, 21, 205, 0.05));
      border: 1px solid rgba(123, 63, 228, 0.25);
      border-radius: 1.5rem;
      padding: 2rem;
      margin-bottom: 56px;
      box-shadow: 0 10px 30px rgba(123, 63, 228, 0.1);
    }
    .featured-guides h2 {
      font-size: 1.25rem;
      font-weight: 700;
      color: #f1f5f9;
      margin-bottom: 1.25rem;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .featured-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .featured-card {
      background: rgba(24, 24, 27, 0.8);
      border: 1px solid rgba(63, 63, 70, 0.6);
      border-radius: 1rem;
      padding: 1.25rem;
      color: #cbd5e1;
      text-decoration: none;
      transition: all 0.25s ease;
    }
    .featured-card:hover {
      border-color: rgba(123, 63, 228, 0.6);
      background: rgba(39, 39, 42, 0.9);
      color: #fff;
      transform: translateY(-3px);
      box-shadow: 0 12px 25px rgba(123, 63, 228, 0.15);
    }
    .featured-card strong {
      display: block;
      color: #f8fafc;
      font-size: 1rem;
      margin-bottom: 6px;
      font-weight: 700;
    }
    .featured-card span {
      font-size: 0.85rem;
      color: #a1a1aa;
      line-height: 1.5;
    }
    .dir-section {
      margin-bottom: 56px;
    }
    .dir-section h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #f8fafc;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .dir-section p.sec-desc {
      font-size: 0.95rem;
      color: #a1a1aa;
      margin-bottom: 24px;
      max-width: 800px;
      line-height: 1.6;
    }
    .topic-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      gap: 16px;
    }
    .topic-card {
      background: rgba(24, 24, 27, 0.8);
      border: 1px solid rgba(63, 63, 70, 0.6);
      border-radius: 1rem;
      padding: 1.25rem 1.5rem;
      color: #e2e8f0;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.25s ease;
    }
    .topic-card:hover {
      border-color: rgba(123, 63, 228, 0.6);
      background: rgba(39, 39, 42, 0.9);
      transform: translateY(-2px);
      box-shadow: 0 12px 25px rgba(123, 63, 228, 0.15);
    }
    .topic-card strong {
      font-size: 1rem;
      font-weight: 700;
      color: #c4b5fd;
      margin-bottom: 8px;
      line-height: 1.4;
    }
    .topic-card:hover strong {
      color: #fff;
    }
    .topic-card span {
      font-size: 0.85rem;
      color: #a1a1aa;
      line-height: 1.5;
    }
    .topic-badge {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #c084fc;
      margin-bottom: 8px;
    }
  </style>
`;

html = html.replace(/<style>[\s\S]*?<\/style>/, directoryStyle);

// 2. Replace body tag and add grain overlay
html = html.replace(/<body>/, `<body class="bg-black text-white selection:bg-cyan-500/30 selection:text-white">\n  <div class="grain-overlay"></div>\n  <div class="min-h-screen flex flex-col font-sans antialiased bg-black text-white transition-colors">`);

// 3. Replace header with universal header
const universalHeader = generateUniversalHeader('/products/', 'en');
html = html.replace(/<header class="kw-header">[\s\S]*?<\/header>/, universalHeader);

// 4. Modernize the dir-header inside main
const modernDirHeader = `
    <div class="dir-header pt-12 pb-6">
      <div class="flex flex-col items-center justify-center gap-3 mb-6">
        <div class="w-1 h-8 bg-gradient-to-b from-purple-400 to-blue-600 rounded-full"></div>
        <span class="text-xs font-bold tracking-widest text-purple-400 uppercase">Solutions Directory</span>
      </div>
      <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
        IPTV Solutions &amp; <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Knowledge Base.</span>
      </h1>
      <p class="text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">
        Browse authoritative resources covering hardware video encoders, third-party player applications, streaming protocols, troubleshooting walkthroughs, and verified subscription packages.
      </p>
    </div>
`;
html = html.replace(/<div class="dir-header">[\s\S]*?<\/div>/, modernDirHeader);

// 5. Replace footer with universal footer
const universalFooter = generateUniversalFooter();
html = html.replace(/<footer>[\s\S]*?<\/footer>/, universalFooter);

// 6. Close body wrapper and include scripts
const scripts = `
  </div>
  <script src="/assets/js/site-interactions.js?v=20260909-lang4" defer></script>
  <script src="/assets/js/support-chat.js" defer></script>
</body>
</html>`;

html = html.replace(/<\/body>\s*<\/html>/, scripts);

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully upgraded products/index.html to modern HeroUI design system!');
