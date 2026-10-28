import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { BASE_URL, LANGUAGES } from './multilingual-data.js';
import { translateKoreanLandingPage } from './translate-korean-landing.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const sourceDir = path.join(projectRoot, 'Iptv The smarters Pro');

console.log('Starting Multilingual Ecosystem Builder...');

// Common SVG Brand Logo
const BRAND_SVG = `<svg class="w-10 h-10 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/20 rounded-xl ring-1 ring-white/10" viewbox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="url(#brand_gradient)"></rect><path d="M12 16C12 13.7909 13.7909 12 16 12H24C26.2091 12 28 13.7909 28 16V24C28 26.2091 26.2091 28 24 28H16C13.7909 28 12 26.2091 12 24V16Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 16.5L23.5 20L18 23.5V16.5Z" fill="white" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path><path d="M15 8L18 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25 8L22 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><defs><lineargradient id="brand_gradient" x1="0" y1="0" x2="40" y2="40" gradientunits="userSpaceOnUse"><stop stop-color="#7B3FE4"></stop><stop offset="1" stop-color="#5F15CD"></stop></lineargradient></defs></svg>`;

const ALL_HEADER_LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'pt-br', name: 'Português (BR)', flag: '🇧🇷' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' }
];

const UPDATED_DAILY = {
  fr: 'Mis à jour quotidiennement',
  de: 'Täglich aktualisiert',
  es: 'Actualizado a diario',
  ar: 'تحديث يومي',
  it: 'Aggiornato ogni giorno',
  nl: 'Dagelijks bijgewerkt',
  pt: 'Atualizado diariamente',
  'pt-br': 'Atualizado diariamente',
  pl: 'Aktualizowane codziennie',
  ko: '매일 업데이트'
};

const EN_LANG = {
  code: 'en',
  name: 'English',
  flag: '🇬🇧',
  dir: 'ltr',
  locale: 'en_US',
  whatsappText: encodeURIComponent('Hello, I would like to order IPTV Smarters Pro 4K subscription.'),
  nav: {
    home: 'Home',
    features: 'Features',
    channels: 'Channels',
    pricing: 'Pricing',
    contact: 'Contact',
    cta: 'Get Started',
    support: 'Support'
  }
};

const COMMON_SUBPAGES_SET = new Set(['', 'pricing', 'channels', 'features', 'contact', 'privacy', 'terms', 'refund']);

function getSubpageUrl(targetCode, activePage) {
  const isHome = !activePage || activePage === 'home';
  if (isHome) {
    return targetCode === 'en' ? '/' : `/${targetCode}/`;
  }
  const clean = activePage.replace(/^\/+|\/+$/g, '');
  if (targetCode === 'en') {
    return `/${clean}/`;
  }
  if (COMMON_SUBPAGES_SET.has(clean)) {
    return `/${targetCode}/${clean}/`;
  }
  return `/${targetCode}/`;
}

function buildHeader(lang, activePage = '') {
  const isAr = lang.dir === 'rtl';
  const prefix = lang.code === 'en' ? '/' : `/${lang.code}/`;
  const isHome = activePage === 'home';
  const isPricing = activePage === 'pricing';
  const isChannels = activePage === 'channels';
  const isFeatures = activePage === 'features';
  const isContact = activePage === 'contact';

  const langListHtml = ALL_HEADER_LANGUAGES.map(l => {
    const isActive = l.code === lang.code;
    const targetUrl = getSubpageUrl(l.code, activePage);
    return `
      <a href="${targetUrl}" class="lang-item ${isActive ? 'is-active' : ''}" role="menuitem" data-lang="${l.code}" ${isActive ? 'aria-current="true"' : ''}>
        <div class="lang-item-content"><span class="lang-flag" aria-hidden="true">${l.flag}</span><span>${l.name}</span></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lang-item-check"><path d="M20 6 9 17l-5-5"/></svg>
      </a>`;
  }).join('');

  return `
  <header class="site-header sticky top-0 transition-colors z-50">
    <div class="site-header-blur backdrop-blur-md border-b transition-colors bg-black/90 border-white/10 site-header-scrolled">
      <div class="site-header-bar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="${prefix}" class="flex items-center gap-3 group z-50">
          ${BRAND_SVG}
          <span class="font-extrabold text-lg text-white tracking-tight">IPTV Smarters Pro</span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8">
          <a href="${prefix}" class="nav-link text-sm font-medium transition-colors ${isHome ? 'text-white nav-link-active' : 'text-zinc-400 hover:text-white'}">${lang.nav.home}</a>
          <a href="${prefix}features/" class="nav-link text-sm font-medium transition-colors ${isFeatures ? 'text-white nav-link-active' : 'text-zinc-400 hover:text-white'}">${lang.nav.features}</a>
          <a href="${prefix}channels/" class="nav-link text-sm font-medium transition-colors ${isChannels ? 'text-white nav-link-active' : 'text-zinc-400 hover:text-white'}">${lang.nav.channels}</a>
          <a href="${prefix}pricing/" class="nav-link text-sm font-medium transition-colors ${isPricing ? 'text-white nav-link-active' : 'text-zinc-400 hover:text-white'}">${lang.nav.pricing}</a>
          <a href="${prefix}contact/" class="nav-link text-sm font-medium transition-colors ${isContact ? 'text-white nav-link-active' : 'text-zinc-400 hover:text-white'}">${lang.nav.contact}</a>
        </nav>

        <!-- Right Side: CTA & Lang Switcher -->
        <div class="flex items-center gap-4">
          <a href="${prefix}pricing/" class="btn-buy-now btn-nav-cta hidden md:flex px-6 py-2.5 font-bold text-sm rounded-full items-center gap-2 transition-all">
            <span>${lang.nav.cta}</span>
            <span class="btn-buy-now-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </span>
          </a>

          <!-- Language Selector -->
          <details class="lang-switch">
            <summary id="langToggle" class="lang-trigger" aria-haspopup="true" aria-expanded="false" aria-label="Change language">
              <span class="lang-flag" aria-hidden="true">${lang.flag}</span>
              <span class="lang-name">${lang.name}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lang-chevron"><path d="m6 9 6 6 6-6"/></svg>
            </summary>
            <div id="langMenu" class="lang-menu" role="menu">
              ${langListHtml}
            </div>
          </details>

          <!-- Mobile Hamburger Toggle -->
          <button type="button" id="menuToggle" class="menu-toggle lg:hidden p-2 text-zinc-400 hover:text-white" aria-expanded="false" aria-controls="mobileNav" aria-label="Open menu">
            <span class="menu-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer Navigation -->
    <nav id="mobileNav" class="mobile-nav" aria-hidden="true" aria-label="Mobile">
      <div class="flex flex-col p-4 space-y-2">
        <a href="${prefix}" class="mobile-nav-row text-lg font-semibold py-3 px-2 ${isHome ? 'mobile-nav-row-active text-white' : 'text-zinc-400'}">${lang.nav.home}</a>
        <a href="${prefix}features/" class="mobile-nav-row text-lg font-semibold py-3 px-2 ${isFeatures ? 'mobile-nav-row-active text-white' : 'text-zinc-400'}">${lang.nav.features}</a>
        <a href="${prefix}channels/" class="mobile-nav-row text-lg font-semibold py-3 px-2 ${isChannels ? 'mobile-nav-row-active text-white' : 'text-zinc-400'}">${lang.nav.channels}</a>
        <a href="${prefix}pricing/" class="mobile-nav-row text-lg font-semibold py-3 px-2 ${isPricing ? 'mobile-nav-row-active text-white' : 'text-zinc-400'}">${lang.nav.pricing}</a>
        <a href="${prefix}contact/" class="mobile-nav-row text-lg font-semibold py-3 px-2 ${isContact ? 'mobile-nav-row-active text-white' : 'text-zinc-400'}">${lang.nav.contact}</a>
        <div class="pt-4 border-t border-zinc-800">
          <a href="${prefix}pricing/" class="btn-buy-now btn-nav-cta w-full py-3.5 font-bold text-sm rounded-full flex items-center justify-center gap-2">
            <span>${lang.nav.cta}</span>
          </a>
        </div>
      </div>
    </nav>
    <div id="navOverlay" class="nav-overlay"></div>
  </header>`;
}


const LOCALIZED_FOOTER_EXTRA = {
  fr: '<li><a href="/fr/meilleur-iptv-france/" class="hover:text-white transition-colors">Meilleur IPTV France</a></li><li><a href="/fr/abonnement-iptv/" class="hover:text-white transition-colors">Abonnement IPTV 4K</a></li><li><a href="/fr/installer-iptv-smarters-sur-firestick/" class="hover:text-white transition-colors">Installer sur Firestick</a></li>',
  de: '<li><a href="/de/bester-iptv-anbieter/" class="hover:text-white transition-colors">Bester IPTV Anbieter</a></li><li><a href="/de/iptv-kaufen/" class="hover:text-white transition-colors">IPTV Kaufen 4K</a></li>',
  es: '<li><a href="/es/comprar-iptv-espana/" class="hover:text-white transition-colors">Comprar IPTV España</a></li><li><a href="/es/mejor-iptv-sin-cortes/" class="hover:text-white transition-colors">Mejor IPTV Sin Cortes</a></li>',
  it: '<li><a href="/it/abbonamento-iptv/" class="hover:text-white transition-colors">Abbonamento IPTV 4K</a></li>',
  nl: '<li><a href="/nl/iptv-kopen/" class="hover:text-white transition-colors">IPTV Kopen 4K</a></li>'
};

function buildFooter(lang) {
  const extraLinks = LOCALIZED_FOOTER_EXTRA[lang.code] || '';
  const prefix = `/${lang.code}/`;
  return `
  <footer class="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-12 transition-colors text-xs">
    <div class="footer-top-glow" aria-hidden="true"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="footer-grid mb-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            ${BRAND_SVG}
            <span class="font-extrabold text-lg text-white tracking-tight">IPTV Smarters Pro</span>
          </div>
          <p class="text-zinc-400 leading-relaxed text-xs">
            <strong class="text-white">IPTV Smarters Pro 4K</strong> — ${lang.carousel.subtitle}
          </p>
          <div class="flex items-center gap-3 pt-1">
            <a href="https://wa.me/18042804332?text=${lang.whatsappText}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Support" class="footer-social-btn text-emerald-400 hover:text-emerald-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h2 class="font-bold text-white uppercase tracking-wider text-[11px] mb-4">${lang.nav.channels} &amp; ${lang.nav.features}</h2>
          <ul class="space-y-2.5 text-xs text-zinc-400">
            <li><a href="${prefix}channels/" class="hover:text-white transition-colors">${lang.nav.channels}</a></li>
            <li><a href="${prefix}features/" class="hover:text-white transition-colors">${lang.nav.features}</a></li>
            <li><a href="${prefix}pricing/" class="hover:text-white transition-colors">${lang.nav.pricing}</a></li>
            ${extraLinks}
          </ul>
        </div>

        <div>
          <h2 class="font-bold text-white uppercase tracking-wider text-[11px] mb-4">Support &amp; Legal</h2>
          <ul class="space-y-2.5 text-xs text-zinc-400">
            <li><a href="${prefix}contact/" class="hover:text-white transition-colors">${lang.nav.contact}</a></li>
            <li><a href="${prefix}privacy/" class="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="${prefix}terms/" class="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="${prefix}refund/" class="hover:text-white transition-colors">Refund Policy</a></li>
          </ul>
        </div>

        <div>
          <h2 class="font-bold text-white uppercase tracking-wider text-[11px] mb-4">${lang.nav.support} 24/7</h2>
          <p class="text-zinc-400 mb-3">${lang.contact.subtitle}</p>
          <a href="https://wa.me/18042804332?text=${lang.whatsappText}" target="_blank" rel="noopener noreferrer" class="inline-flex px-4 py-2 bg-gradient-primary hover:opacity-90 text-white font-bold rounded-lg transition-colors items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            <span>WhatsApp 24/7</span>
          </a>
        </div>
      </div>

      <div class="pt-6 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between text-xs text-[#64748b] gap-4">
        <p>© 2026 IPTV Smarters Pro. All rights reserved.</p>
        <div class="flex items-center gap-6">
          <span class="footer-trust-pill flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>Secure SSL 256-bit</span>
          <button type="button" aria-label="Back to top" class="footer-back-to-top flex items-center gap-1" onclick="window.scrollTo({top:0,behavior:'smooth'})">Top ↑</button>
        </div>
      </div>
    </div>
  </footer>`;
}

function buildHeadTags(lang, title, desc, canonicalPath) {
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  return `
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/svg+xml" href="/assets/images/brand/favicon.svg">
  <link rel="apple-touch-icon" href="/assets/images/brand/logo.png">
  <title>${title}</title>
  <meta name="description" content="${desc}">
  <link rel="canonical" href="${canonicalUrl}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${desc}">
  <meta property="og:image" content="${BASE_URL}/og-image.jpg">
  <meta property="og:locale" content="${lang.locale}">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="${canonicalUrl}">
  <meta property="twitter:title" content="${title}">
  <meta property="twitter:description" content="${desc}">
  <meta property="twitter:image" content="${BASE_URL}/og-image.jpg">

  <!-- Stylesheets -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link rel="stylesheet" href="/assets/css/inter.css">
  <link rel="stylesheet" href="/assets/css/main.css">
  <link rel="stylesheet" href="/assets/css/theme.css?v=20260909-lang4">
  <link rel="stylesheet" href="/assets/css/heroui.css">
  <script id="ais-lang-toggle-init">window.__toggleLangMenu=function(e){var d=(e&&e.target&&e.target.closest&&e.target.closest("details.lang-switch"))||document.querySelector("details.lang-switch");if(d){if(e&&e.target&&(e.target.tagName==="SUMMARY"||e.target.closest("summary")))return;d.open=!d.open;}};</script>
  `;
}

// -------------------------------------------------------------
// 1. UPDATE LANDING PAGES (/[lang]/index.html)
// -------------------------------------------------------------
function updateLanguageLandingPage(lang) {
  const filePath = path.join(sourceDir, lang.code, 'index.html');
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  // A) Update carousel headings & badges in #vod-entertainment-hub
  const c = lang.carousel;
  const dailyText = UPDATED_DAILY[lang.code] || 'Updated Daily';

  html = html.replace('IMDb Top-Rated VOD Catalog', c.badge);
  html = html.replace(
    /<h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">[\s\S]*?<\/h2>/,
    `<h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">${c.title}</h2>`
  );
  html = html.replace(
    /<p class="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">[\s\S]*?<\/p>/,
    `<p class="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">${c.subtitle}</p>`
  );
  html = html.replace(
    /<span class="text-xs font-semibold text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">[\s\S]*?<\/span>/,
    `<span class="text-xs font-semibold text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">${dailyText}</span>`
  );

  // Carousel 1: Movies (purple dot)
  html = html.replace(
    /(bg-purple-500 shadow-\[0_0_10px_#7828C8\]"><\/span>\s*<h3 class="text-lg sm:text-xl font-bold text-white tracking-tight">)[^<]*(<\/h3>)/,
    `$1${c.moviesTitle}$2`
  );
  // Carousel 2: Series (cyan dot)
  html = html.replace(
    /(bg-cyan-400 shadow-\[0_0_10px_#22d3ee\]"><\/span>\s*<h3 class="text-lg sm:text-xl font-bold text-white tracking-tight">)[^<]*(<\/h3>)/,
    `$1${c.seriesTitle}$2`
  );
  // Carousel 3: Sports (emerald dot)
  html = html.replace(
    /(bg-emerald-400 shadow-\[0_0_10px_#34d399\]"><\/span>\s*<h3 class="text-lg sm:text-xl font-bold text-white tracking-tight">)[^<]*(<\/h3>)/,
    `$1${c.sportsTitle}$2`
  );

  // Fix typos
  if (lang.code === 'es' || lang.code === 'pt') {
    html = html.replace(/Contactoo/g, 'Contacto');
  } else if (lang.code === 'pt-br') {
    html = html.replace(/Contactoo/g, 'Contato');
  }

  // B) Fix navigation links to stay in language silo
  const p = `/${lang.code}/`;
  html = html.replace(/href="\/iptv-services\/"/g, `href="${p}features/"`);
  html = html.replace(/href="\/features\/"/g, `href="${p}features/"`);
  html = html.replace(/href="\/channels\/"/g, `href="${p}channels/"`);
  html = html.replace(/href="\/pricing\/"/g, `href="${p}pricing/"`);
  html = html.replace(/href="\/contact\/"/g, `href="${p}contact/"`);
  html = html.replace(/href="\/privacy\/"/g, `href="${p}privacy/"`);
  html = html.replace(/href="\/terms\/"/g, `href="${p}terms/"`);
  html = html.replace(/href="\/refund\/"/g, `href="${p}refund/"`);

  // Strip any rogue locale-banner
  html = html.replace(/<div class="locale-banner"[\s\S]*?<\/div>/g, '');
  // Update header with localized header & switcher
  html = html.replace(/<header class="site-header[\s\S]*?<\/header>/, buildHeader(lang, 'home'));
  // Update ais-lang-toggle-init in head
  html = html.replace(/<script id="ais-lang-toggle-init">[\s\S]*?<\/script>/, '<script id="ais-lang-toggle-init">window.__toggleLangMenu=function(e){var d=(e&&e.target&&e.target.closest&&e.target.closest("details.lang-switch"))||document.querySelector("details.lang-switch");if(d){if(e&&e.target&&(e.target.tagName==="SUMMARY"||e.target.closest("summary")))return;d.open=!d.open;}};</script>');

  fs.writeFileSync(filePath, html, 'utf8');

  // C) Full Korean translation
  if (lang.code === 'ko') {
    translateKoreanLandingPage(filePath);
  }

  console.log(`Updated /${lang.code}/index.html with localized header, carousels & silo links.`);
}

// -------------------------------------------------------------
// 2. GENERATE PRICING PAGE (/[lang]/pricing/index.html)
// -------------------------------------------------------------
function generatePricingPage(lang) {
  const p = lang.pricing;
  const prefix = `/${lang.code}/`;
  const canonicalPath = `${prefix}pricing/`;
  const dirPath = path.join(sourceDir, lang.code, 'pricing');
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

  const faqsHtml = p.faqs.map((f, i) => `
    <details class="faq-item" name="pricing-faq"${i === 0 ? ' open' : ''}>
      <summary class="faq-summary">
        <span class="faq-num" aria-hidden="true">0${i + 1}</span>
        <span class="faq-q">${f.q}</span>
        <span class="faq-chevron" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
      </summary>
      <div class="faq-answer"><p>${f.a}</p></div>
    </details>`).join('');

  const trustHtml = p.trustCards.map(t => `
    <div class="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 text-left flex flex-col items-start group hover:border-zinc-700/60 transition-all">
      <div class="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-purple-400"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
      </div>
      <h3 class="text-xl font-bold text-white mb-3">${t.title}</h3>
      <p class="text-zinc-400 text-sm leading-relaxed">${t.desc}</p>
    </div>`).join('');

  const featListHtml = p.features.map(f => `
    <li><span class="feat-check"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="color:#A78BFA"><path d="M20 6 9 17l-5-5"></path></svg></span><span>${f}</span></li>
  `).join('');

  const html = `<!doctype html>
<html lang="${lang.code}" dir="${lang.dir}">
<head>
  ${buildHeadTags(lang, p.metaTitle, p.metaDesc, canonicalPath)}
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": "${BASE_URL}${canonicalPath}#product",
        "name": "${p.metaTitle.split('—')[0].trim() || 'IPTV Smarters Pro Subscription'}",
        "description": "${p.metaDesc}",
        "image": "${BASE_URL}/assets/images/brand/logo.png",
        "brand": {
          "@type": "Brand",
          "name": "IPTV Smarters Pro"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "1640"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "${lang.code === 'ar' || lang.code === 'ko' || lang.code === 'pt-br' ? 'USD' : 'EUR'}",
          "lowPrice": "14.95",
          "highPrice": "99.95",
          "offerCount": "5",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "url": "${BASE_URL}${canonicalPath}"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "${BASE_URL}${canonicalPath}#faq",
        "mainEntity": [
          ${p.faqs.map(f => JSON.stringify({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.a
            }
          })).join(',\n          ')}
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "${BASE_URL}${canonicalPath}#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "${lang.nav.home}", "item": "${BASE_URL}${prefix}" },
          { "@type": "ListItem", "position": 2, "name": "${lang.nav.pricing}", "item": "${BASE_URL}${canonicalPath}" }
        ]
      }
    ]
  }
  </script>
</head>
<body class="bg-black text-white selection:bg-cyan-500/30 selection:text-white">
  <div class="grain-overlay"></div>
  <div class="min-h-screen flex flex-col font-sans antialiased bg-black text-white">
    ${buildHeader(lang, 'pricing')}

    <main class="flex-1">
      <section class="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="pricing">
        <div class="text-center mb-16">
          <div class="flex flex-col items-center justify-center gap-4 mb-4">
            <div class="w-0.5 h-6 bg-blue-500"></div>
            <span class="text-xs font-bold tracking-widest text-zinc-500 uppercase">${p.kicker}</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            ${p.h1}
          </h1>
          <p class="text-zinc-400 max-w-2xl mx-auto text-lg">
            ${p.subtitle}
          </p>
          <!-- SEO Keyword Badges -->
          <div class="flex flex-wrap items-center justify-center gap-2 mt-6 max-w-3xl mx-auto">
            ${lang.keywords.map((kw, i) => `<span class=\"heroui-chip ${i === 0 ? 'heroui-chip-primary' : 'heroui-chip-default'}\">${kw}</span>`).join('')}
          </div>
        </div>

        <!-- Device Selector Tabs -->
        <div class="relative z-20 w-full">
          <div class="w-full max-w-7xl mx-auto flex flex-col items-center">
            <div class="device-toggle" role="tablist" aria-label="Select devices" id="device-toggle">
              <button type="button" role="tab" aria-selected="true" data-devices="1" class="device-tab is-active"><span class="device-tab-bg" aria-hidden="true"></span>${p.deviceTabs[0]}</button>
              <button type="button" role="tab" aria-selected="false" data-devices="2" class="device-tab"><span class="device-tab-bg" aria-hidden="true"></span>${p.deviceTabs[1]}</button>
              <button type="button" role="tab" aria-selected="false" data-devices="3" class="device-tab"><span class="device-tab-bg" aria-hidden="true"></span>${p.deviceTabs[2]}</button>
            </div>

            <!-- Pricing Grid (1, 3, 6, 12 Months) -->
            <div class="pricing-grid w-full" id="plan-panels" aria-live="polite">
              <!-- 1 Month -->
              <div class="plan-card" data-months="1" data-price-1="${p.plans[0].rawPrice}" data-price-2="19.95" data-price-3="24.95">
                <span class="plan-kicker">${p.kicker}</span>
                <h2 class="plan-name">${p.plans[0].name}</h2>
                <div class="plan-price-row"><span class="plan-price-amount">${p.plans[0].price}</span></div>
                <span class="plan-discount-chip">${p.savePercent[0]}</span>
                <div class="plan-divider"></div>
                <ul class="plan-features">${featListHtml}</ul>
                <a href="https://wa.me/18042804332?text=${lang.whatsappText}%20Plan%3A%201%20Month" rel="sponsored noopener" class="buy-now-btn">
                  <span>${p.ctaButton}</span>
                  <span class="buy-now-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
                </a>
              </div>

              <!-- 3 Months -->
              <div class="plan-card" data-months="3" data-price-1="${p.plans[1].rawPrice}" data-price-2="39.95" data-price-3="49.95">
                <span class="plan-kicker">${p.kicker}</span>
                <h3 class="plan-name">${p.plans[1].name}</h3>
                <div class="plan-price-row"><span class="plan-price-amount">${p.plans[1].price}</span></div>
                <span class="plan-discount-chip">${p.savePercent[1]}</span>
                <div class="plan-divider"></div>
                <ul class="plan-features">${featListHtml}</ul>
                <a href="https://wa.me/18042804332?text=${lang.whatsappText}%20Plan%3A%203%20Months" rel="sponsored noopener" class="buy-now-btn">
                  <span>${p.ctaButton}</span>
                  <span class="buy-now-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
                </a>
              </div>

              <!-- 6 Months -->
              <div class="plan-card" data-months="6" data-price-1="${p.plans[2].rawPrice}" data-price-2="69.95" data-price-3="89.95">
                <span class="plan-kicker">${p.kicker}</span>
                <h3 class="plan-name">${p.plans[2].name}</h3>
                <div class="plan-price-row"><span class="plan-price-amount">${p.plans[2].price}</span></div>
                <span class="plan-discount-chip">${p.savePercent[2]}</span>
                <div class="plan-divider"></div>
                <ul class="plan-features">${featListHtml}</ul>
                <a href="https://wa.me/18042804332?text=${lang.whatsappText}%20Plan%3A%206%20Months" rel="sponsored noopener" class="buy-now-btn">
                  <span>${p.ctaButton}</span>
                  <span class="buy-now-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
                </a>
              </div>

              <!-- 12 Months (Popular) -->
              <div class="plan-card is-popular" data-months="12" data-price-1="${p.plans[3].rawPrice}" data-price-2="119.95" data-price-3="149.95">
                <span class="plan-pill is-popular-pill">${p.popularBadge}</span>
                <span class="plan-kicker">${p.kicker}</span>
                <h3 class="plan-name">${p.plans[3].name}</h3>
                <div class="plan-price-row"><span class="plan-price-amount">${p.plans[3].price}</span></div>
                <span class="plan-discount-chip">${p.savePercent[3]}</span>
                <div class="plan-divider"></div>
                <ul class="plan-features">${featListHtml}</ul>
                <a href="https://wa.me/18042804332?text=${lang.whatsappText}%20Plan%3A%2012%20Months" rel="sponsored noopener" class="buy-now-btn">
                  <span>${p.ctaButton}</span>
                  <span class="buy-now-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
                </a>
              </div>
            </div>

            <!-- 24 Months Diamond Banner -->
            <div class="w-full max-w-4xl mx-auto mt-8">
              <div class="diamond-border">
                <div class="diamond-panel is-locked" data-months="24" data-price-1="${p.plans[4].rawPrice}">
                  <span class="diamond-badge">${p.diamondBadge}</span>
                  <div class="diamond-left">
                    <span class="plan-kicker">${p.kicker}</span>
                    <h3 class="diamond-title">${p.plans[4].name}</h3>
                    <div class="diamond-price-row"><span class="diamond-price">${p.plans[4].price}</span></div>
                    <div class="diamond-rate">${p.diamondRate} <strong>4.16 / mo</strong></div>
                  </div>
                  <div class="diamond-divider" aria-hidden="true"></div>
                  <div class="diamond-right">
                    <ul class="diamond-features">
                      <li><span class="feat-check" style="background:rgba(168,85,247,.12)"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="color:#c4b5fd"><path d="M20 6 9 17l-5-5"></path></svg></span><span>${p.features[0]}</span></li>
                      <li><span class="feat-check" style="background:rgba(168,85,247,.12)"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="color:#c4b5fd"><path d="M20 6 9 17l-5-5"></path></svg></span><span>${p.features[1]}</span></li>
                      <li><span class="feat-check" style="background:rgba(168,85,247,.12)"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="color:#c4b5fd"><path d="M20 6 9 17l-5-5"></path></svg></span><span>${p.features[2]}</span></li>
                      <li class="diamond-more"><span>+ 4K UHD 60FPS &amp; 24/7 VIP Support</span></li>
                    </ul>
                    <a href="https://wa.me/18042804332?text=${lang.whatsappText}%20Plan%3A%2024%20Months%20Diamond" rel="sponsored noopener" class="buy-now-btn diamond-btn">
                      <span>${p.ctaButton}</span>
                      <span class="buy-now-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Trust Badges -->
      <section class="py-12 px-4 bg-zinc-950/50 border-t border-zinc-900">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${trustHtml}
          </div>
        </div>
      </section>

      <!-- FAQ Accordion -->
      <section class="py-16 px-4 sm:px-6 lg:px-8 xl:px-12 w-full max-w-4xl mx-auto" id="faq">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">FAQ — Questions &amp; Réponses</h2>
          <p class="text-zinc-400">Tout ce que vous devez savoir sur notre service et son activation.</p>
        </div>
        <div class="faq-list w-full space-y-4">
          ${faqsHtml}
        </div>
      </section>
    </main>

    ${buildFooter(lang)}
  </div>
  <script src="/assets/js/site-interactions.js?v=20260909-lang4" defer></script>
</body>
</html>`;

  fs.writeFileSync(path.join(dirPath, 'index.html'), html, 'utf8');
  console.log(`Generated /${lang.code}/pricing/index.html`);
}

// -------------------------------------------------------------
// 3. GENERATE CHANNELS PAGE (/[lang]/channels/index.html)
// -------------------------------------------------------------
function generateChannelsPage(lang) {
  const c = lang.channels;
  const prefix = `/${lang.code}/`;
  const canonicalPath = `${prefix}channels/`;
  const dirPath = path.join(sourceDir, lang.code, 'channels');
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

  const catButtonsHtml = c.categories.map((cat, i) => `
    <button type="button" role="tab" data-channel-tab="${cat.id}" aria-selected="${i === 0 ? 'true' : 'false'}" class="channel-tab-btn px-4 py-2 rounded-lg text-sm font-semibold transition-all ${i === 0 ? 'bg-[#6D28D9] text-white shadow-md shadow-purple-900/30 is-active' : 'bg-[#1e293b] text-[#94a3b8] hover:bg-[#334155] hover:text-white'}">${cat.name}</button>
  `).join('');

  const channelCardsHtml = c.sampleChannels.map(ch => `
    <div class="channel-card flex items-center justify-between p-4 bg-zinc-900/40 border border-zinc-800/80 rounded-xl hover:border-purple-500/50 hover:bg-zinc-900/80 transition-all group" data-category="${ch.cat}">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-zinc-800/80 flex items-center justify-center font-bold text-xs text-purple-300 ring-1 ring-white/10 group-hover:scale-105 transition-transform">
          TV
        </div>
        <div>
          <span class="block font-bold text-sm text-white group-hover:text-purple-300 transition-colors">${ch.name}</span>
          <span class="text-xs text-zinc-500 uppercase tracking-wider">${ch.cat}</span>
        </div>
      </div>
      <span class="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-purple-950/60 text-purple-300 border border-purple-800/40">${ch.quality}</span>
    </div>
  `).join('');

  const html = `<!doctype html>
<html lang="${lang.code}" dir="${lang.dir}">
<head>
  ${buildHeadTags(lang, c.metaTitle, c.metaDesc, canonicalPath)}
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "${BASE_URL}${canonicalPath}#webpage",
        "url": "${BASE_URL}${canonicalPath}",
        "name": ${JSON.stringify(c.metaTitle)},
        "description": ${JSON.stringify(c.metaDesc)},
        "inLanguage": "${lang.code}"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "${BASE_URL}${canonicalPath}#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "${lang.nav.home}", "item": "${BASE_URL}${prefix}" },
          { "@type": "ListItem", "position": 2, "name": "${lang.nav.channels}", "item": "${BASE_URL}${canonicalPath}" }
        ]
      }
    ]
  }
  </script>
</head>
<body class="bg-black text-white selection:bg-cyan-500/30 selection:text-white">
  <div class="grain-overlay"></div>
  <div class="min-h-screen flex flex-col font-sans antialiased bg-black text-white">
    ${buildHeader(lang, 'channels')}

    <main class="flex-1">
      <section class="pt-24 pb-12 px-4 max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <div class="flex flex-col items-center justify-center gap-4 mb-4">
            <div class="w-0.5 h-6 bg-purple-500"></div>
            <span class="text-xs font-bold tracking-widest text-zinc-500 uppercase">${c.kicker}</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            ${c.h1}
          </h1>
          <p class="text-zinc-400 max-w-2xl mx-auto text-lg">
            ${c.subtitle}
          </p>
          <!-- SEO Keyword Badges -->
          <div class="flex flex-wrap items-center justify-center gap-2 mt-6 max-w-3xl mx-auto">
            ${lang.keywords.map((kw, i) => `<span class=\"heroui-chip ${i === 0 ? 'heroui-chip-primary' : 'heroui-chip-default'}\">${kw}</span>`).join('')}
          </div>
        </div>

        <div class="bg-zinc-950/60 border border-zinc-900 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
          <!-- Categories Tab List -->
          <div role="tablist" class="flex flex-wrap gap-2 justify-center border-b border-zinc-800/80 pb-6 mb-8">
            ${catButtonsHtml}
          </div>

          <!-- Search Input -->
          <div class="max-w-md mx-auto relative mb-8">
            <div class="relative flex items-center">
              <input type="text" id="channel-search-input" placeholder="${c.searchPlaceholder}" class="w-full pl-4 pr-10 py-3 bg-[#0f172a] border border-[#334155]/60 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#7B3FE4] focus:ring-2 focus:ring-[#7B3FE4]/30 transition-all">
            </div>
          </div>

          <!-- Server Availability Badge -->
          <div class="text-center mb-8">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs text-purple-300">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>${c.badgeText} • 20 000+ Channels Live</span>
            </div>
          </div>

          <!-- Channels Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="channel-grid">
            ${channelCardsHtml}
          </div>

          <!-- CTA Banner -->
          <div class="mt-12 p-8 rounded-2xl bg-gradient-to-r from-purple-950/40 to-blue-950/40 border border-purple-800/30 text-center flex flex-col items-center">
            <h3 class="text-2xl font-bold text-white mb-2">${c.metaTitle}</h3>
            <p class="text-zinc-400 max-w-xl text-sm mb-6">${lang.pricing.subtitle}</p>
            <a href="${prefix}pricing/" class="btn-buy-now px-8 py-3.5 font-bold text-sm rounded-full inline-flex items-center gap-2">
              <span>${lang.nav.cta}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      </section>
    </main>

    ${buildFooter(lang)}
  </div>
  <script src="/assets/js/site-interactions.js?v=20260909-lang4" defer></script>
</body>
</html>`;

  fs.writeFileSync(path.join(dirPath, 'index.html'), html, 'utf8');
  console.log(`Generated /${lang.code}/channels/index.html`);
}

// -------------------------------------------------------------
// 4. GENERATE FEATURES PAGE (/[lang]/features/index.html)
// -------------------------------------------------------------
function generateFeaturesPage(lang) {
  const f = lang.features;
  const prefix = `/${lang.code}/`;
  const canonicalPath = `${prefix}features/`;
  const dirPath = path.join(sourceDir, lang.code, 'features');
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

  const featureCardsHtml = f.items.map((item, idx) => `
    <div class="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 hover:border-zinc-700/60 transition-all flex flex-col items-start group">
      <div class="w-12 h-12 rounded-xl bg-purple-950/50 border border-purple-800/50 flex items-center justify-center font-bold text-sm text-purple-300 mb-6 group-hover:scale-110 transition-transform">
        0${idx + 1}
      </div>
      <h3 class="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">${item.title}</h3>
      <p class="text-zinc-400 text-sm leading-relaxed">${item.desc}</p>
    </div>
  `).join('');

  const html = `<!doctype html>
<html lang="${lang.code}" dir="${lang.dir}">
<head>
  ${buildHeadTags(lang, f.metaTitle, f.metaDesc, canonicalPath)}
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "${BASE_URL}${canonicalPath}#webpage",
        "url": "${BASE_URL}${canonicalPath}",
        "name": ${JSON.stringify(f.metaTitle)},
        "description": ${JSON.stringify(f.metaDesc)},
        "inLanguage": "${lang.code}"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "${BASE_URL}${canonicalPath}#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "${lang.nav.home}", "item": "${BASE_URL}${prefix}" },
          { "@type": "ListItem", "position": 2, "name": "${lang.nav.features}", "item": "${BASE_URL}${canonicalPath}" }
        ]
      }
    ]
  }
  </script>
</head>
<body class="bg-black text-white selection:bg-cyan-500/30 selection:text-white">
  <div class="grain-overlay"></div>
  <div class="min-h-screen flex flex-col font-sans antialiased bg-black text-white">
    ${buildHeader(lang, 'features')}

    <main class="flex-1">
      <section class="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <div class="flex flex-col items-center justify-center gap-4 mb-4">
            <div class="w-0.5 h-6 bg-cyan-500"></div>
            <span class="text-xs font-bold tracking-widest text-zinc-500 uppercase">${f.kicker}</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            ${f.h1}
          </h1>
          <p class="text-zinc-400 max-w-2xl mx-auto text-lg">
            ${f.subtitle}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          ${featureCardsHtml}
        </div>

        <!-- Conversion CTA -->
        <div class="p-10 rounded-3xl bg-zinc-950 border border-zinc-800 text-center flex flex-col items-center max-w-4xl mx-auto">
          <h2 class="text-3xl font-extrabold text-white mb-4">${lang.pricing.h1}</h2>
          <p class="text-zinc-400 max-w-xl text-base mb-8">${lang.pricing.subtitle}</p>
          <div class="flex flex-wrap gap-4 justify-center">
            <a href="${prefix}pricing/" class="btn-buy-now px-8 py-3.5 font-bold text-sm rounded-full flex items-center gap-2">
              <span>${lang.nav.pricing}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
            <a href="https://wa.me/18042804332?text=${lang.whatsappText}" target="_blank" rel="noopener noreferrer" class="px-8 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm rounded-full border border-zinc-700 transition-colors flex items-center gap-2">
              <span>${lang.nav.support} WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </main>

    ${buildFooter(lang)}
  </div>
  <script src="/assets/js/site-interactions.js?v=20260909-lang4" defer></script>
</body>
</html>`;

  fs.writeFileSync(path.join(dirPath, 'index.html'), html, 'utf8');
  console.log(`Generated /${lang.code}/features/index.html`);
}

// -------------------------------------------------------------
// 5. GENERATE CONTACT PAGE (/[lang]/contact/index.html)
// -------------------------------------------------------------
function generateContactPage(lang) {
  const c = lang.contact;
  const prefix = `/${lang.code}/`;
  const canonicalPath = `${prefix}contact/`;
  const dirPath = path.join(sourceDir, lang.code, 'contact');
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

  const html = `<!doctype html>
<html lang="${lang.code}" dir="${lang.dir}">
<head>
  ${buildHeadTags(lang, c.metaTitle, c.metaDesc, canonicalPath)}
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "${BASE_URL}${canonicalPath}#webpage",
        "url": "${BASE_URL}${canonicalPath}",
        "name": ${JSON.stringify(c.metaTitle)},
        "description": ${JSON.stringify(c.metaDesc)},
        "inLanguage": "${lang.code}"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "${BASE_URL}${canonicalPath}#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "${lang.nav.home}", "item": "${BASE_URL}${prefix}" },
          { "@type": "ListItem", "position": 2, "name": "${lang.nav.contact}", "item": "${BASE_URL}${canonicalPath}" }
        ]
      }
    ]
  }
  </script>
</head>
<body class="bg-black text-white selection:bg-cyan-500/30 selection:text-white">
  <div class="grain-overlay"></div>
  <div class="min-h-screen flex flex-col font-sans antialiased bg-black text-white">
    ${buildHeader(lang, 'contact')}

    <main class="flex-1">
      <section class="pt-24 pb-16 px-4 max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <div class="flex flex-col items-center justify-center gap-4 mb-4">
            <div class="w-0.5 h-6 bg-cyan-500"></div>
            <span class="text-xs font-bold tracking-widest text-zinc-500 uppercase">${c.kicker}</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            ${c.h1}
          </h1>
          <p class="text-zinc-400 max-w-2xl mx-auto text-lg">
            ${c.subtitle}
          </p>
          <!-- SEO Keyword Badges -->
          <div class="flex flex-wrap items-center justify-center gap-2 mt-6 max-w-3xl mx-auto">
            ${lang.keywords.map((kw, i) => `<span class=\"heroui-chip ${i === 0 ? 'heroui-chip-primary' : 'heroui-chip-default'}\">${kw}</span>`).join('')}
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <!-- WhatsApp Support Card -->
          <div class="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:border-emerald-500/50 transition-all flex flex-col items-start">
            <div class="w-14 h-14 rounded-2xl bg-emerald-950/60 border border-emerald-700/50 flex items-center justify-center mb-6 text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            </div>
            <h2 class="text-2xl font-bold text-white mb-2">WhatsApp 24/7</h2>
            <p class="text-zinc-400 text-sm mb-6">Assistance directe et activation instantanée en quelques minutes.</p>
            <a href="https://wa.me/18042804332?text=${lang.whatsappText}" target="_blank" rel="noopener noreferrer" class="mt-auto px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm transition-colors flex items-center gap-2">
              <span>Ouvrir WhatsApp</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>

          <!-- Telegram Support Card -->
          <div class="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:border-blue-500/50 transition-all flex flex-col items-start">
            <div class="w-14 h-14 rounded-2xl bg-blue-950/60 border border-blue-700/50 flex items-center justify-center mb-6 text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </div>
            <h2 class="text-2xl font-bold text-white mb-2">Telegram Support</h2>
            <p class="text-zinc-400 text-sm mb-6">Canal officiel pour guides, dépannage et questions techniques.</p>
            <a href="https://t.me/host4k" target="_blank" rel="noopener noreferrer" class="mt-auto px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-400 text-black font-bold text-sm transition-colors flex items-center gap-2">
              <span>Rejoindre Telegram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      </section>
    </main>

    ${buildFooter(lang)}
  </div>
  <script src="/assets/js/site-interactions.js?v=20260909-lang4" defer></script>
</body>
</html>`;

  fs.writeFileSync(path.join(dirPath, 'index.html'), html, 'utf8');
  console.log(`Generated /${lang.code}/contact/index.html`);
}

// -------------------------------------------------------------
// 6. GENERATE LEGAL PAGES (privacy, terms, refund)
// -------------------------------------------------------------
function generateLegalPages(lang) {
  const prefix = `/${lang.code}/`;
  const legalPages = [
    {
      slug: 'privacy',
      title: 'Privacy Policy — IPTV Smarters Pro',
      desc: 'Information about data protection, encryption, and user privacy policies for IPTV Smarters Pro.'
    },
    {
      slug: 'terms',
      title: 'Terms of Service — IPTV Smarters Pro',
      desc: 'Terms and conditions governing the subscription and usage of IPTV Smarters Pro services.'
    },
    {
      slug: 'refund',
      title: 'Refund Policy — IPTV Smarters Pro',
      desc: 'Money-back guarantee and refund conditions for IPTV Smarters Pro subscriptions.'
    }
  ];

  for (const lp of legalPages) {
    const canonicalPath = `${prefix}${lp.slug}/`;
    const dirPath = path.join(sourceDir, lang.code, lp.slug);
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

    const html = `<!doctype html>
<html lang="${lang.code}" dir="${lang.dir}">
<head>
  ${buildHeadTags(lang, lp.title, lp.desc, canonicalPath)}
</head>
<body class="bg-black text-white selection:bg-cyan-500/30 selection:text-white">
  <div class="grain-overlay"></div>
  <div class="min-h-screen flex flex-col font-sans antialiased bg-black text-white">
    ${buildHeader(lang, lp.slug)}

    <main class="flex-1 py-20 px-4 max-w-4xl mx-auto">
      <h1 class="text-3xl md:text-5xl font-bold text-white mb-6">${lp.title}</h1>
      <p class="text-zinc-400 text-sm mb-8">Last updated: January 2026</p>
      <div class="prose prose-invert max-w-none text-zinc-300 space-y-6 text-sm leading-relaxed">
        <p>At IPTV Smarters Pro, we are dedicated to protecting your privacy and delivering a reliable streaming experience. This policy explains our operational terms, user obligations, and refund eligibility standards.</p>
        <h2 class="text-xl font-bold text-white mt-6 mb-2">1. Service Delivery &amp; Account Activation</h2>
        <p>Upon order confirmation, your unique Xtream Codes API credentials and server URL are dispatched immediately via email. We ensure continuous server uptime of 99.9% backed by load-balanced cluster nodes.</p>
        <h2 class="text-xl font-bold text-white mt-6 mb-2">2. Data Privacy &amp; Encryption</h2>
        <p>We do not log user browsing history, channel choices, or personal communications. Payment transactions are processed via 256-bit SSL encrypted gateways and we adhere to global security protocols.</p>
        <h2 class="text-xl font-bold text-white mt-6 mb-2">3. Support &amp; Guarantees</h2>
        <p>If you experience any difficulties setting up your playlist on IPTV Smarters Pro, our 24/7 technical team is available via WhatsApp and Telegram to assist you promptly.</p>
      </div>
      <div class="mt-12 pt-8 border-t border-zinc-800">
        <a href="${prefix}pricing/" class="btn-buy-now px-6 py-3 font-bold text-sm rounded-full inline-flex items-center gap-2">
          <span>${lang.nav.pricing}</span>
        </a>
      </div>
    </main>

    ${buildFooter(lang)}
  </div>
  <script src="/assets/js/site-interactions.js?v=20260909-lang4" defer></script>
</body>
</html>`;

    fs.writeFileSync(path.join(dirPath, 'index.html'), html, 'utf8');
  }
  console.log(`Generated legal pages (privacy, terms, refund) for /${lang.code}/`);
}

// -------------------------------------------------------------
// EXECUTE FOR ALL LANGUAGES & UNIFY ENGLISH
// -------------------------------------------------------------
function unifyEnglishPages() {
  const pages = [
    { file: 'index.html', active: 'home' },
    { file: 'pricing/index.html', active: 'pricing' },
    { file: 'channels/index.html', active: 'channels' },
    { file: 'features/index.html', active: 'features' },
    { file: 'contact/index.html', active: 'contact' }
  ];
  for (const p of pages) {
    const filePath = path.join(sourceDir, p.file);
    if (fs.existsSync(filePath)) {
      let html = fs.readFileSync(filePath, 'utf8');
      html = html.replace(/<header class="site-header[\s\S]*?<\/header>/, buildHeader(EN_LANG, p.active));
      fs.writeFileSync(filePath, html, 'utf8');
      console.log(`Updated English header in ${p.file}`);
    }
  }
}

console.log('\n=== Processing English Unified Headers ===');
unifyEnglishPages();

for (const lang of LANGUAGES) {
  console.log(`\n=== Processing Language: [${lang.code.toUpperCase()}] ${lang.name} ===`);
  updateLanguageLandingPage(lang);
  generatePricingPage(lang);
  generateChannelsPage(lang);
  generateFeaturesPage(lang);
  generateContactPage(lang);
  generateLegalPages(lang);
}

console.log('\nMultilingual Ecosystem successfully built across all 10 languages + English!');
