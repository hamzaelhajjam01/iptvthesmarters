import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { BASE_URL, LANGUAGES } from './multilingual-data.js';
import { GUIDES_TRANSLATIONS } from './all-35-guides-translations.js';
import {
  GUIDE_CATEGORIES,
  HEROUI_CALLOUT_STRINGS,
  SIDEBAR_CTA_STRINGS,
  RESELLER_CTA_STRINGS,
  HUB_HERO_STRINGS,
  FOOTER_I18N
} from './multilingual-guides-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const sourceDir = path.join(projectRoot, 'Iptv The smarters Pro');

function safeWriteFileSync(filePath, data, encoding = 'utf8') {
  let attempts = 0;
  while (attempts < 6) {
    try {
      fs.writeFileSync(filePath, data, encoding);
      return;
    } catch (err) {
      attempts++;
      if (attempts >= 6) throw err;
      const waitMs = attempts * 150;
      const end = Date.now() + waitMs;
      while (Date.now() < end) {}
    }
  }
}

const BRAND_SVG = `<svg class="w-10 h-10 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/20 rounded-xl ring-1 ring-white/10" viewbox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="url(#brand_gradient)"></rect><path d="M12 16C12 13.7909 13.7909 12 16 12H24C26.2091 12 28 13.7909 28 16V24C28 26.2091 26.2091 28 24 28H16C13.7909 28 12 26.2091 12 24V16Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 16.5L23.5 20L18 23.5V16.5Z" fill="white" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path><path d="M15 8L18 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25 8L22 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><defs><lineargradient id="brand_gradient" x1="0" y1="0" x2="40" y2="40" gradientunits="userSpaceOnUse"><stop stop-color="#7B3FE4"></stop><stop offset="1" stop-color="#5F15CD"></stop></lineargradient></defs></svg>`;

const BRAND_SVG_FOOTER = `<svg class="w-10 h-10 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/20 rounded-xl ring-1 ring-white/10" viewbox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="url(#brand_gradient_footer)"></rect><path d="M12 16C12 13.7909 13.7909 12 16 12H24C26.2091 12 28 13.7909 28 16V24C28 26.2091 26.2091 28 24 28H16C13.7909 28 12 26.2091 12 24V16Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 16.5L23.5 20L18 23.5V16.5Z" fill="white" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path><path d="M15 8L18 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25 8L22 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><defs><lineargradient id="brand_gradient_footer" x1="0" y1="0" x2="40" y2="40" gradientunits="userSpaceOnUse"><stop stop-color="#7B3FE4"></stop><stop offset="1" stop-color="#5F15CD"></stop></lineargradient></defs></svg>`;

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

const EN_LOCALE = {
  code: 'en',
  name: 'English',
  flag: '🇬🇧',
  dir: 'ltr',
  nav: {
    home: 'Home',
    services: 'IPTV Services',
    features: 'Features',
    channels: 'Channels',
    pricing: 'Pricing',
    guides: 'Guides',
    contact: 'Contact',
    cta: 'Get Started',
    support: 'Support'
  },
  carousel: {
    subtitle: 'Premium IPTV streaming with a vast live TV lineup and extensive on-demand library in 4K.'
  },
  contact: {
    subtitle: 'Need help setting up your device? Reach out to our 24/7 technical team.'
  },
  whatsappText: encodeURIComponent('Hello, I need help with IPTV Smarters Pro setup.')
};

// Load metadata extracted from English hub
const allCardsMetadata = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'extracted-all-35-cards.json'), 'utf8')
);

// Map slug to category and English meta
const SLUG_TO_META = {};
for (const card of allCardsMetadata) {
  SLUG_TO_META[card.slug] = card;
}

function buildGuideHeader(lang, currentGuideSlug = '') {
  const prefix = lang.code === 'en' ? '/' : `/${lang.code}/`;
  const nav = lang.nav || EN_LOCALE.nav;

  const langListHtml = ALL_HEADER_LANGUAGES.map(l => {
    const isActive = l.code === lang.code;
    let targetUrl;
    if (currentGuideSlug) {
      targetUrl = l.code === 'en' ? `/guides/${currentGuideSlug}/` : `/${l.code}/guides/${currentGuideSlug}/`;
    } else {
      targetUrl = l.code === 'en' ? '/guides/' : `/${l.code}/guides/`;
    }
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
        <nav class="hidden lg:flex items-center gap-8">
          <a href="${prefix}" class="nav-link text-sm font-medium transition-colors text-zinc-400 hover:text-white">${nav.home}</a>
          <a href="${prefix}features/" class="nav-link text-sm font-medium transition-colors text-zinc-400 hover:text-white">${nav.features}</a>
          <a href="${prefix}channels/" class="nav-link text-sm font-medium transition-colors text-zinc-400 hover:text-white">${nav.channels}</a>
          <a href="${prefix}pricing/" class="nav-link text-sm font-medium transition-colors text-zinc-400 hover:text-white">${nav.pricing}</a>
          <a href="${prefix}guides/" class="nav-link text-sm font-medium transition-colors text-white nav-link-active">${nav.guides}</a>
          <a href="${prefix}contact/" class="nav-link text-sm font-medium transition-colors text-zinc-400 hover:text-white">${nav.contact}</a>
        </nav>
        <div class="flex items-center gap-4">
          <a href="${prefix}pricing/" class="btn-buy-now btn-nav-cta hidden md:flex px-6 py-2.5 font-bold text-sm rounded-full items-center gap-2 transition-all">
            <span>${nav.cta}</span>
            <span class="btn-buy-now-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </span>
          </a>
          <details class="lang-switch">
            <summary id="langToggle" class="lang-trigger" aria-haspopup="true" aria-expanded="false" aria-controls="langMenu" aria-label="Change language">
              <span class="lang-flag" aria-hidden="true">${lang.flag}</span>
              <span class="lang-name">${lang.name}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lang-chevron"><path d="m6 9 6 6 6-6"/></svg>
            </summary>
            <div id="langMenu" class="lang-menu" role="menu">
              ${langListHtml}
            </div>
          </details>
          <button type="button" id="menuToggle" class="menu-toggle" aria-expanded="false" aria-controls="mobileNav" aria-label="Open menu">
            <span class="menu-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>
    <nav id="mobileNav" class="mobile-nav" aria-hidden="true" aria-label="Mobile">
      <div class="flex flex-col">
        <a href="${prefix}" class="mobile-nav-row text-lg font-semibold py-4 px-2 text-zinc-400"><span>${nav.home}</span></a>
        <a href="${prefix}features/" class="mobile-nav-row text-lg font-semibold py-4 px-2 text-zinc-400"><span>${nav.features}</span></a>
        <a href="${prefix}channels/" class="mobile-nav-row text-lg font-semibold py-4 px-2 text-zinc-400"><span>${nav.channels}</span></a>
        <a href="${prefix}pricing/" class="mobile-nav-row text-lg font-semibold py-4 px-2 text-zinc-400"><span>${nav.pricing}</span></a>
        <a href="${prefix}guides/" class="mobile-nav-row text-lg font-semibold py-4 px-2 mobile-nav-row-active"><span>${nav.guides}</span></a>
        <a href="${prefix}contact/" class="mobile-nav-row text-lg font-semibold py-4 px-2 text-zinc-400"><span>${nav.contact}</span></a>
      </div>
      <a href="${prefix}pricing/" class="btn-buy-now btn-nav-cta w-full mt-6 py-3.5 font-bold text-sm rounded-full flex items-center justify-center gap-2 transition-all">
        <span>${nav.cta}</span>
      </a>
    </nav>
    <div id="navOverlay" class="nav-overlay"></div>
  </header>`;
}

function buildGuideFooter(lang) {
  const prefix = lang.code === 'en' ? '/' : `/${lang.code}/`;
  const f = FOOTER_I18N[lang.code] || FOOTER_I18N['en'];
  const carousel = lang.carousel || EN_LOCALE.carousel;
  const whatsappText = lang.whatsappText || EN_LOCALE.whatsappText;

  return `
  <footer class="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-12 transition-colors text-xs">
    <div class="footer-top-glow" aria-hidden="true"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="footer-grid mb-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            ${BRAND_SVG_FOOTER}
            <span class="font-extrabold text-lg text-white tracking-tight">IPTV Smarters Pro</span>
          </div>
          <p class="text-zinc-400 leading-relaxed text-xs">
            <strong class="text-white">IPTV Smarters Pro 4K</strong> — ${carousel.subtitle}
          </p>
          <div class="flex items-center gap-3 pt-1">
            <a href="https://wa.me/18042804332?text=${whatsappText}" target="_blank" rel="noopener noreferrer" aria-label="${f.whatsappBtn}" class="footer-social-btn text-emerald-400 hover:text-emerald-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h2 class="font-bold text-white uppercase tracking-wider text-[11px] mb-4">${f.channelsFeaturesTitle}</h2>
          <ul class="space-y-2.5 text-xs text-zinc-400">
            <li><a href="${prefix}channels/" class="hover:text-white transition-colors">${f.channels}</a></li>
            <li><a href="${prefix}features/" class="hover:text-white transition-colors">${f.features}</a></li>
            <li><a href="${prefix}pricing/" class="hover:text-white transition-colors">${f.pricing}</a></li>
            <li><a href="${prefix}guides/" class="hover:text-white transition-colors font-semibold text-white">${f.guides}</a></li>
            <li><a href="${prefix}guides/how-to-activate-iptv-smarters-pro/" class="hover:text-white transition-colors">${f.setupGuide}</a></li>
          </ul>
        </div>

        <div>
          <h2 class="font-bold text-white uppercase tracking-wider text-[11px] mb-4">${f.companyLegalTitle}</h2>
          <ul class="space-y-2.5 text-xs text-zinc-400">
            <li><a href="${prefix}contact/" class="hover:text-white transition-colors">${f.contact}</a></li>
            <li><a href="${prefix}guides/" class="hover:text-white transition-colors">${f.guides}</a></li>
            <li><a href="${prefix}privacy/" class="hover:text-white transition-colors">${f.privacy}</a></li>
            <li><a href="${prefix}terms/" class="hover:text-white transition-colors">${f.terms}</a></li>
            <li><a href="${prefix}refund/" class="hover:text-white transition-colors">${f.refund}</a></li>
          </ul>
        </div>

        <div>
          <h2 class="font-bold text-white uppercase tracking-wider text-[11px] mb-4">${f.supportTitle}</h2>
          <p class="text-zinc-400 mb-3">${f.supportSubtitle}</p>
          <a href="https://wa.me/18042804332?text=${whatsappText}" target="_blank" rel="noopener noreferrer" class="inline-flex px-4 py-2 bg-gradient-primary hover:opacity-90 text-white font-bold rounded-lg transition-colors items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            ${f.whatsappBtn}
          </a>
        </div>
      </div>

      <div class="pt-6 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between text-xs text-[#64748b] gap-4">
        <p>${f.copyright}</p>
        <div class="flex items-center gap-6">
          <span class="footer-trust-pill">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            ${f.secureCheckout}
          </span>
          <button type="button" aria-label="Back to top" class="footer-back-to-top" onclick="window.scrollTo({top:0,behavior:'smooth'})">
            ${f.backToTop}
          </button>
        </div>
      </div>
    </div>
  </footer>`;
}

function buildHeroUICallout(langCode) {
  const c = HEROUI_CALLOUT_STRINGS[langCode] || HEROUI_CALLOUT_STRINGS['en'] || HEROUI_CALLOUT_STRINGS['fr'];
  const pricingHref = langCode === 'en' ? '/pricing/' : `/${langCode}/pricing/`;
  return `
  <!-- HeroUI Design System: In-Content Keyword Silo Callout -->
  <div class="heroui-callout not-prose" role="region" aria-label="IPTV Smarters Pro Recommendation">
    <div class="heroui-callout-inner">
      <div class="heroui-callout-header">
        <div class="heroui-callout-icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <div class="heroui-callout-header-text">
          <span class="heroui-callout-chip">
            <span class="heroui-callout-chip-pulse" aria-hidden="true"></span>
            ${c.badge}
          </span>
          <h3 class="heroui-callout-title">${c.title}</h3>
        </div>
      </div>
      <p class="heroui-callout-desc">
        ${c.desc} <a href="${pricingHref}">${c.linkText}</a> ${c.descEnd}
      </p>
      <div class="heroui-callout-actions">
        <a href="${pricingHref}" class="heroui-callout-btn">
          <span>${c.btn}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </a>
        <span class="heroui-callout-meta">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
          ${c.meta}
        </span>
      </div>
    </div>
  </div>`;
}

function buildSidebarCTA(langCode) {
  const s = SIDEBAR_CTA_STRINGS[langCode] || SIDEBAR_CTA_STRINGS['en'] || SIDEBAR_CTA_STRINGS['fr'];
  const r = RESELLER_CTA_STRINGS[langCode] || RESELLER_CTA_STRINGS['en'];
  const pricingHref = langCode === 'en' ? '/pricing/' : `/${langCode}/pricing/`;
  const resellerHref = langCode === 'en' ? '/reseller/' : `/${langCode}/reseller/`;
  const bullets = s.bullets
    .map(
      b =>
        `<li class="flex items-center gap-2 text-xs font-medium text-zinc-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>${b}</li>`
    )
    .join('\n');

  return `
  <div class="reveal-on-scroll bg-gradient-to-b from-blue-500/10 to-zinc-900/40 border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden">
    <div class="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-bl-xl">
      ${s.badge}
    </div>
    <h3 class="text-white font-bold text-lg mb-3 mt-4">${s.title}</h3>
    <p class="text-zinc-400 text-sm mb-6 leading-relaxed">
      ${s.desc}
    </p>
    <ul class="space-y-2 mb-6">
      ${bullets}
    </ul>
    <a href="${pricingHref}" class="block w-full py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold rounded-xl text-center transition-all shadow-lg shadow-purple-600/25">${s.btn}</a>
    <div class="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
      <span class="text-zinc-400 font-medium">${r.title}</span>
      <a href="${resellerHref}" class="text-purple-400 hover:text-purple-300 font-bold transition-colors inline-flex items-center gap-1">${r.btn}</a>
    </div>
  </div>`;
}

function buildMobileCTA(langCode) {
  const s = SIDEBAR_CTA_STRINGS[langCode] || SIDEBAR_CTA_STRINGS['en'] || SIDEBAR_CTA_STRINGS['fr'];
  const r = RESELLER_CTA_STRINGS[langCode] || RESELLER_CTA_STRINGS['en'];
  const pricingHref = langCode === 'en' ? '/pricing/' : `/${langCode}/pricing/`;
  const resellerHref = langCode === 'en' ? '/reseller/' : `/${langCode}/reseller/`;

  return `
  <div class="reveal-on-scroll lg:hidden mt-12 bg-gradient-to-r from-blue-500/10 to-zinc-900/40 border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden">
    <div class="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-bl-xl">
      ${s.badge}
    </div>
    <div class="flex items-start gap-4">
      <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
      </div>
      <div class="flex-1">
        <h4 class="text-white font-bold text-lg mb-2 mt-1">${s.title}</h4>
        <p class="text-zinc-400 text-sm mb-4 leading-relaxed">${s.desc}</p>
        <a href="${pricingHref}" class="inline-block px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold rounded-lg transition-all shadow-md shadow-purple-600/25">${s.btn}</a>
        <div class="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
          <span class="text-zinc-400 font-medium">${r.title}</span>
          <a href="${resellerHref}" class="text-purple-400 hover:text-purple-300 font-bold transition-colors inline-flex items-center gap-1">${r.btn}</a>
        </div>
      </div>
    </div>
  </div>`;
}

function buildHreflangBlock(slug = '') {
  const pathSuffix = slug ? `guides/${slug}/` : 'guides/';
  const lines = [
    `<link rel="alternate" hreflang="x-default" href="${BASE_URL}/${pathSuffix}">`,
    `<link rel="alternate" hreflang="en" href="${BASE_URL}/${pathSuffix}">`
  ];
  for (const l of LANGUAGES) {
    lines.push(`<link rel="alternate" hreflang="${l.code}" href="${BASE_URL}/${l.code}/${pathSuffix}">`);
  }
  return lines.join('\n    ');
}

function buildGuideSchemas(slug, langCode, title, desc) {
  const pageUrl = langCode === 'en' ? `${BASE_URL}/guides/${slug}/` : `${BASE_URL}/${langCode}/guides/${slug}/`;
  const hubUrl = langCode === 'en' ? `${BASE_URL}/guides/` : `${BASE_URL}/${langCode}/guides/`;
  const homeUrl = langCode === 'en' ? `${BASE_URL}/` : `${BASE_URL}/${langCode}/`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: homeUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Guides',
        item: hubUrl
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: pageUrl
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: desc,
    image: `${BASE_URL}/assets/images/guides/${slug}.svg`,
    author: {
      '@type': 'Organization',
      name: 'IPTV Smarters Pro Team',
      url: `${BASE_URL}/`
    },
    publisher: {
      '@type': 'Organization',
      name: 'IPTV Smarters Pro',
      url: `${BASE_URL}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/assets/images/brand/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl
    },
    datePublished: '2026-07-23T08:00:00+00:00',
    dateModified: '2026-10-27T12:00:00+00:00',
    inLanguage: langCode
  };

  return `
    <script type="application/ld+json">
${JSON.stringify(breadcrumbSchema, null, 2)}
    </script>
    <script type="application/ld+json">
${JSON.stringify(articleSchema, null, 2)}
    </script>`;
}

// -------------------------------------------------------------
// Core Generator Function: Localized Guide Detail Page
// -------------------------------------------------------------
function generateLocalizedGuide(slug, lang) {
  const enTemplatePath = path.join(sourceDir, 'guides', slug, 'index.html');
  if (!fs.existsSync(enTemplatePath)) {
    console.warn(`Template not found for slug: ${slug}`);
    return;
  }

  let html = fs.readFileSync(enTemplatePath, 'utf8');

  const langCode = lang.code;
  const isRtl = lang.dir === 'rtl';
  const i18n = GUIDES_TRANSLATIONS[slug]?.[langCode] || {
    title: SLUG_TO_META[slug]?.title || slug,
    desc: SLUG_TO_META[slug]?.desc || ''
  };
  const ui = GUIDE_CATEGORIES[langCode] || GUIDE_CATEGORIES['en'] || GUIDE_CATEGORIES['fr'];
  const originalMeta = SLUG_TO_META[slug] || {};
  const categoryRaw = originalMeta.category || 'iptv services';
  const categoryTranslated = ui[categoryRaw] || categoryRaw;

  // 1. HTML tag
  html = html.replace(/<html lang="[^"]*"([^>]*)>/, `<html lang="${langCode}" ${isRtl ? 'dir="rtl"' : 'dir="ltr"'}>`);

  // 2. Title & Descriptions
  const pageTitle = `${i18n.title} | IPTV Smarters Pro`;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${pageTitle}</title>`);
  html = html.replace(/<meta name="title" content="[^"]*">>*/, `<meta name="title" content="${i18n.title}">`);
  html = html.replace(/<meta name="description" content="[^"]*">>*/, `<meta name="description" content="${i18n.desc}">`);

  // Open Graph & Twitter
  const targetCanonical = `${BASE_URL}/${langCode}/guides/${slug}/`;
  html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${targetCanonical}">`);
  html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${targetCanonical}">`);
  html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${i18n.title}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${i18n.desc}">`);
  html = html.replace(/<meta name="twitter:url" content="[^"]*">/, `<meta name="twitter:url" content="${targetCanonical}">`);
  html = html.replace(/<meta property="twitter:title" content="[^"]*">/, `<meta property="twitter:title" content="${i18n.title}">`);
  html = html.replace(/<meta property="twitter:description" content="[^"]*">/, `<meta property="twitter:description" content="${i18n.desc}">`);

  // 3. Inject full Hreflang block & JSON-LD Schemas right before </head>
  const hreflangBlock = buildHreflangBlock(slug);
  const schemaBlock = buildGuideSchemas(slug, langCode, i18n.title, i18n.desc);
  html = html.replace('</head>', `    ${hreflangBlock}\n${schemaBlock}\n  </head>`);

  // 4. Header Replacement
  const headerRegex = /<astro-island[^>]*component-export="Header"[\s\S]*?<\/header><\/astro-island>/;
  const newHeader = buildGuideHeader(lang, slug);
  if (headerRegex.test(html)) {
    html = html.replace(headerRegex, newHeader);
  } else {
    // Fallback: replace any header tag
    html = html.replace(/<header[\s\S]*?<\/header>/, newHeader);
  }

  // 5. Back Link & Category Badge & Reading Time
  html = html.replace(/<a href="\/guides\/"([^>]*)>[\s\S]*?Back to Knowledge Base<\/a>/, `<a href="/${langCode}/guides/"$1><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>${ui.backToGuides}</a>`);
  html = html.replace(/<span class="inline-flex px-3 py-1 bg-blue-500\/10[^"]*">[^<]*<\/span>/, `<span class="inline-flex px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest rounded-full">${categoryTranslated}</span>`);
  html = html.replace(/<span>(\d+)\s+min read<\/span>/, `<span>$1 ${ui.minRead}</span>`);

  // 6. Main H1 and Lead Paragraph
  html = html.replace(/<h1[^>]*>[\s\S]*?<\/h1>/, `<h1 class="reveal-on-scroll text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-8 tracking-tight max-w-4xl is-visible">${i18n.title}</h1>`);
  html = html.replace(/<p class="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mb-8">[\s\S]*?<\/p>/, `<p class="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mb-8">${i18n.desc}</p>`);

  // Fact check verification line
  html = html.replace(/Fact-checked and verified/, ui.factChecked);

  // 7. Table of Contents header
  html = html.replace(/Contents<\/h2>/, `${ui.tableOfContents}</h2>`);
  html = html.replace(/Contents<\/div>/, `${ui.tableOfContents}</div>`);

  // 8. In-Content HeroUI Callout Replacement
  const calloutRegex = /<!-- HeroUI Design System: In-Content Keyword Silo Callout -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
  const localizedCallout = buildHeroUICallout(langCode);
  if (calloutRegex.test(html)) {
    html = html.replace(calloutRegex, localizedCallout);
  }

  // 9. Sidebar CTA Card Replacement
  const sidebarCtaRegex = /<div class="reveal-on-scroll bg-gradient-to-b from-blue-500\/10 to-zinc-900\/40 border border-blue-500\/20 rounded-2xl p-6 relative overflow-hidden">[\s\S]*?<\/div>/;
  const localizedSidebarCTA = buildSidebarCTA(langCode);
  if (sidebarCtaRegex.test(html)) {
    html = html.replace(sidebarCtaRegex, localizedSidebarCTA);
  }

  // 10. Mobile Bottom CTA Card Replacement
  const mobileCtaRegex = /<div class="reveal-on-scroll lg:hidden mt-12 bg-gradient-to-r from-blue-500\/10 to-zinc-900\/40[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
  const localizedMobileCTA = buildMobileCTA(langCode);
  if (mobileCtaRegex.test(html)) {
    html = html.replace(mobileCtaRegex, localizedMobileCTA);
  }

  // 11. FAQ Section Title
  html = html.replace(/<h2[^>]*id="section-[0-9]+" class="text-3xl font-bold text-white mb-8 tracking-tight">Frequently Asked Questions<\/h2>/, `<h2 class="text-3xl font-bold text-white mb-8 tracking-tight">${ui.faqTitle}</h2>`);
  html = html.replace(/<h2[^>]*>Frequently Asked Questions<\/h2>/, `<h2 class="text-3xl font-bold text-white mb-8 tracking-tight">${ui.faqTitle}</h2>`);

  // 12. Related Guides Section
  html = html.replace(/<h2 class="text-3xl font-bold text-white">Related Guides<\/h2>/, `<h2 class="text-3xl font-bold text-white">${ui.related}</h2>`);
  html = html.replace(/View all guides/, ui.allGuides);
  html = html.replace(/href="\/guides\/"/g, `href="/${langCode}/guides/"`);

  // Replace links and titles for related guide cards
  for (const otherSlug of Object.keys(GUIDES_TRANSLATIONS)) {
    const regexLink = new RegExp(`href="/guides/${otherSlug}/"`, 'g');
    html = html.replace(regexLink, `href="/${langCode}/guides/${otherSlug}/"`);

    const otherI18n = GUIDES_TRANSLATIONS[otherSlug]?.[langCode];
    const otherEn = SLUG_TO_META[otherSlug];
    if (otherI18n && otherEn) {
      // Replace English title in card if matched
      html = html.replace(new RegExp(`<h3 class="text-2xl font-bold[^>]*>\\s*${otherEn.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*<\\/h3>`, 'g'), `<h3 class="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors leading-tight">${otherI18n.title}</h3>`);
    }
  }

  // Localize "Read article" button in cards
  html = html.replace(/Read article/g, ui.readMore);

  // 13. Footer Replacement
  const footerRegex = /<astro-island[^>]*component-export="Footer"[\s\S]*?<\/footer><\/astro-island>/;
  const newFooter = buildGuideFooter(lang);
  if (footerRegex.test(html)) {
    html = html.replace(footerRegex, newFooter);
  } else {
    html = html.replace(/<footer[\s\S]*?<\/footer>/, newFooter);
  }

  // 14. Target Directory and Write
  const targetDir = path.join(sourceDir, langCode, 'guides', slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  safeWriteFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
}

// -------------------------------------------------------------
// Core Generator Function: Localized Guides Hub Page
// -------------------------------------------------------------
function generateLocalizedGuidesHub(lang) {
  const enHubPath = path.join(sourceDir, 'guides', 'index.html');
  if (!fs.existsSync(enHubPath)) {
    console.error('English guides hub template not found!');
    return;
  }

  let html = fs.readFileSync(enHubPath, 'utf8');
  const langCode = lang.code;
  const isRtl = lang.dir === 'rtl';
  const hero = HUB_HERO_STRINGS[langCode] || HUB_HERO_STRINGS['en'] || HUB_HERO_STRINGS['fr'];
  const ui = GUIDE_CATEGORIES[langCode] || GUIDE_CATEGORIES['en'] || GUIDE_CATEGORIES['fr'];

  // 1. HTML tag
  html = html.replace(/<html lang="[^"]*"([^>]*)>/, `<html lang="${langCode}" ${isRtl ? 'dir="rtl"' : 'dir="ltr"'}>`);

  // 2. Title & Descriptions
  const pageTitle = `${hero.badge} | IPTV Smarters Pro`;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${pageTitle}</title>`);
  html = html.replace(/<meta name="title" content="[^"]*">>*/, `<meta name="title" content="${pageTitle}">`);
  html = html.replace(/<meta name="description" content="[^"]*">>*/, `<meta name="description" content="${hero.subtitle}">`);

  const hubCanonical = `${BASE_URL}/${langCode}/guides/`;
  html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${hubCanonical}">`);
  html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${hubCanonical}">`);
  html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${pageTitle}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${hero.subtitle}">`);
  html = html.replace(/<meta name="twitter:url" content="[^"]*">/, `<meta name="twitter:url" content="${hubCanonical}">`);
  html = html.replace(/<meta property="twitter:title" content="[^"]*">/, `<meta property="twitter:title" content="${pageTitle}">`);
  html = html.replace(/<meta property="twitter:description" content="[^"]*">/, `<meta property="twitter:description" content="${hero.subtitle}">`);

  // 3. Inject Hreflang block before </head>
  const hreflangBlock = buildHreflangBlock();
  html = html.replace('</head>', `    ${hreflangBlock}\n  </head>`);

  // 4. Header Replacement
  const headerRegex = /<astro-island[^>]*component-export="Header"[\s\S]*?<\/header><\/astro-island>/;
  const newHeader = buildGuideHeader(lang);
  if (headerRegex.test(html)) {
    html = html.replace(headerRegex, newHeader);
  } else {
    html = html.replace(/<header[\s\S]*?<\/header>/, newHeader);
  }

  // 5. Hero Section
  html = html.replace(/<span class="text-xs font-bold tracking-widest text-blue-400 uppercase">Knowledge Base<\/span>/, `<span class="text-xs font-bold tracking-widest text-blue-400 uppercase">${hero.badge}</span>`);
  html = html.replace(/<h1[^>]*>[\s\S]*?<\/h1>/, `<h1 class="reveal-on-scroll text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight is-visible">${hero.title} <span class="text-gradient">${hero.titleHighlight}</span></h1>`);
  html = html.replace(/<p class="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-10">[\s\S]*?<\/p>/, `<p class="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-10">${hero.subtitle}</p>`);
  html = html.replace(/placeholder="Search guides, tutorials, and fixes\.\.\."/, `placeholder="${hero.searchPlaceholder}"`);

  // Category Buttons in Hero
  html = html.replace(/>\s*All\s*<\/button>/, `>${ui.all}</button>`);
  html = html.replace(/>\s*IPTV Services\s*<\/button>/, `>${ui['iptv services']}</button>`);
  html = html.replace(/>\s*Setup\s*<\/button>/, `>${ui.setup}</button>`);
  html = html.replace(/>\s*Troubleshooting\s*<\/button>/, `>${ui.troubleshooting}</button>`);
  html = html.replace(/>\s*Comparisons\s*<\/button>/, `>${ui.comparisons}</button>`);
  html = html.replace(/>\s*Devices\s*<\/button>/, `>${ui.devices}</button>`);
  html = html.replace(/>\s*Safety\s*<\/button>/, `>${ui.safety}</button>`);

  // 6. Localize every guide card in the hub grid
  for (const card of allCardsMetadata) {
    const slug = card.slug;
    const i18n = GUIDES_TRANSLATIONS[slug]?.[langCode];
    if (!i18n) continue;

    // Replace link href from /guides/slug/ to /[lang]/guides/slug/
    const linkRegex = new RegExp(`href="/guides/${slug}/"`, 'g');
    html = html.replace(linkRegex, `href="/${langCode}/guides/${slug}/"`);

    // Replace English Title in the card
    const titleRegex = new RegExp(`(<h[23][^>]*>)\\s*${card.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*(<\\/h[23]>)`, 'g');
    html = html.replace(titleRegex, `$1${i18n.title}$2`);

    // Replace English Description in the card
    const descRegex = new RegExp(`(<p class="text-zinc-400 text-sm leading-relaxed mb-8 flex-1">)\\s*${card.desc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*(<\\/p>)`, 'g');
    html = html.replace(descRegex, `$1${i18n.desc}$2`);
  }

  // Localize "Read article" & "min" across cards
  html = html.replace(/Read article/g, ui.readMore);
  html = html.replace(/>\s*(\d+)\s+min\s*<\/div>/g, `>$1 ${ui.minRead}</div>`);

  // 7. Footer Replacement
  const footerRegex = /<astro-island[^>]*component-export="Footer"[\s\S]*?<\/footer><\/astro-island>/;
  const newFooter = buildGuideFooter(lang);
  if (footerRegex.test(html)) {
    html = html.replace(footerRegex, newFooter);
  } else {
    html = html.replace(/<footer[\s\S]*?<\/footer>/, newFooter);
  }

  // 8. Write to target hub directory
  const targetHubDir = path.join(sourceDir, langCode, 'guides');
  if (!fs.existsSync(targetHubDir)) {
    fs.mkdirSync(targetHubDir, { recursive: true });
  }
  safeWriteFileSync(path.join(targetHubDir, 'index.html'), html, 'utf8');
}

// -------------------------------------------------------------
// Synchronize English Guides (Add 11 Hreflangs & Smart Switcher)
// -------------------------------------------------------------
function syncEnglishGuides() {
  console.log('Synchronizing English guides with full 11-language hreflang and schemas...');

  // 1. Sync English Hub
  const enHubPath = path.join(sourceDir, 'guides', 'index.html');
  if (fs.existsSync(enHubPath)) {
    let hubHtml = fs.readFileSync(enHubPath, 'utf8');
    // Remove existing hreflang tags if any to prevent duplicates
    hubHtml = hubHtml.replace(/<link rel="alternate" hreflang="[^"]*" href="[^"]*">\s*/g, '');
    const hreflangBlock = buildHreflangBlock();
    hubHtml = hubHtml.replace('</head>', `    ${hreflangBlock}\n  </head>`);
    const newHeader = buildGuideHeader(EN_LOCALE);
    const astroHeaderRegex = /<astro-island[^>]*component-export="Header"[\s\S]*?<\/header><\/astro-island>/;
    const standardHeaderRegex = /<header class="site-header[\s\S]*?<\/header>/;
    if (astroHeaderRegex.test(hubHtml)) {
      hubHtml = hubHtml.replace(astroHeaderRegex, newHeader);
    } else if (standardHeaderRegex.test(hubHtml)) {
      hubHtml = hubHtml.replace(standardHeaderRegex, newHeader);
    }
    safeWriteFileSync(enHubPath, hubHtml, 'utf8');
  }

  // 2. Sync all 35 English guide detail pages
  for (const card of allCardsMetadata) {
    const slug = card.slug;
    const guidePath = path.join(sourceDir, 'guides', slug, 'index.html');
    if (!fs.existsSync(guidePath)) continue;

    let guideHtml = fs.readFileSync(guidePath, 'utf8');
    // Clean old hreflangs and inject full 11-language hreflangs + JSON-LD
    guideHtml = guideHtml.replace(/<link rel="alternate" hreflang="[^"]*" href="[^"]*">\s*/g, '');
    const hreflangs = buildHreflangBlock(slug);
    const schemas = buildGuideSchemas(slug, 'en', card.title, card.desc);

    // Remove any previous schema if it matches
    guideHtml = guideHtml.replace('</head>', `    ${hreflangs}\n${schemas}\n  </head>`);

    // Update Header with direct language switcher to the exact slug
    const newHeader = buildGuideHeader(EN_LOCALE, slug);
    const astroHeaderRegex = /<astro-island[^>]*component-export="Header"[\s\S]*?<\/header><\/astro-island>/;
    const standardHeaderRegex = /<header class="site-header[\s\S]*?<\/header>/;
    if (astroHeaderRegex.test(guideHtml)) {
      guideHtml = guideHtml.replace(astroHeaderRegex, newHeader);
    } else if (standardHeaderRegex.test(guideHtml)) {
      guideHtml = guideHtml.replace(standardHeaderRegex, newHeader);
    }

    // Inject reseller internal link into sidebar and bottom callout if not present
    if (!guideHtml.includes('/reseller/')) {
      const sidebarPricingTarget = '<a href="/pricing/" class="block w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-center rounded-xl transition-all shadow-lg shadow-purple-600/25">Get Best IPTV 4K Plan →</a>';
      const sidebarReplacement = `${sidebarPricingTarget}\n                <div class="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">\n                  <span class="text-zinc-400 font-medium">Start an IPTV Business</span>\n                  <a href="/reseller/" class="text-purple-400 hover:text-purple-300 font-bold transition-colors inline-flex items-center gap-1">Reseller Panel →</a>\n                </div>`;
      guideHtml = guideHtml.replace(sidebarPricingTarget, sidebarReplacement);

      const bottomPricingTarget = '<a href="/pricing/" class="inline-block px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold rounded-lg transition-all shadow-md shadow-purple-600/25">Explore 4K Pricing Plans →</a>';
      const bottomReplacement = `${bottomPricingTarget}\n                    <div class="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs">\n                      <span class="text-zinc-400 font-medium">Start an IPTV Business</span>\n                      <a href="/reseller/" class="text-purple-400 hover:text-purple-300 font-bold transition-colors inline-flex items-center gap-1">Reseller Panel →</a>\n                    </div>`;
      guideHtml = guideHtml.replace(bottomPricingTarget, bottomReplacement);
    }

    safeWriteFileSync(guidePath, guideHtml, 'utf8');
  }
}

// -------------------------------------------------------------
// Master Execution
// -------------------------------------------------------------
async function run() {
  console.log(`Starting Local Generation of 350 Multilingual Guides + 10 Hubs across ${LANGUAGES.length} Languages...`);

  let countGuides = 0;
  let countHubs = 0;

  for (const lang of LANGUAGES) {
    console.log(`Generating Guides Suite for [${lang.code.toUpperCase()}] ${lang.name}...`);

    // Generate Hub
    generateLocalizedGuidesHub(lang);
    countHubs++;

    // Generate all 35 Guides
    for (const card of allCardsMetadata) {
      generateLocalizedGuide(card.slug, lang);
      countGuides++;
    }
  }

  // Sync English Guides
  syncEnglishGuides();

  console.log(`\n🎉 SUCCESS! Generated:`);
  console.log(`- ${countGuides} localized guide detail pages (35 guides × 10 languages)`);
  console.log(`- ${countHubs} localized guide hub pages (10 languages)`);
  console.log(`- Synchronized 35 English guides and 1 English hub with 11-language hreflang alternates and JSON-LD schemas.`);
}

run().catch(err => {
  console.error('Fatal error in guide generation:', err);
  process.exit(1);
});
