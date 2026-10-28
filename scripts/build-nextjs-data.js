import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, '..');

// Import datasets
import { LANGUAGES } from './multilingual-data.js';
import { GUIDES_TRANSLATIONS } from './all-35-guides-translations.js';

// Load extracted cards metadata
const cardsMeta = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'extracted-all-35-cards.json'), 'utf8')
);

// 1. Build data/translations.ts
const translationsObj = {
  en: {
    code: 'en',
    dir: 'ltr',
    nav: {
      home: 'Home',
      features: 'Features',
      channels: 'Channels',
      pricing: 'Pricing',
      guides: 'Guides',
      contact: 'Contact',
      cta: 'Get Started'
    },
    hero: {
      badge: 'Official 4K IPTV Service (2026)',
      title: 'Stream 25,000+ Live Channels & 100,000+ Movies in 4K',
      subtitle: 'The ultimate entertainment experience with anti-freeze technology, 99.9% uptime, and instant Xtream Codes activation on all your devices.',
      cta: 'Get Your Subscription',
      trial: 'Try Free 24h Trial'
    },
    footer: {
      desc: 'Top-rated IPTV Smarters Pro subscription service with 25,000+ live channels, 100,000+ VOD movies & series, anti-freeze technology, and 24/7 technical support.',
      quickLinksTitle: 'Quick Links',
      guidesTitle: 'Popular Setup Guides',
      legalTitle: 'Legal & Compliance',
      rights: 'All rights reserved.',
      disclaimer: 'Disclaimer: IPTV Smarters Pro is a standalone media player and does not provide media content itself. Users are responsible for their own playlists and compliance with local copyright regulations.'
    }
  }
};

for (const lang of LANGUAGES) {
  translationsObj[lang.code] = {
    code: lang.code,
    dir: lang.dir || 'ltr',
    nav: {
      home: lang.nav.home,
      features: lang.nav.features,
      channels: lang.nav.channels,
      pricing: lang.nav.pricing,
      guides: lang.nav.guides,
      contact: lang.nav.contact,
      cta: lang.nav.cta
    },
    hero: {
      badge: lang.hero?.badge || 'IPTV Smarters Pro',
      title: lang.hero?.title || 'IPTV Smarters Pro 4K',
      subtitle: lang.hero?.subtitle || 'Stream 25,000+ Live Channels in 4K',
      cta: lang.hero?.cta || lang.nav.cta,
      trial: 'Essai Gratuit 24h'
    },
    footer: {
      desc: lang.footer?.desc || 'IPTV Smarters Pro 4K Subscription',
      quickLinksTitle: lang.footer?.quickLinksTitle || 'Quick Links',
      guidesTitle: lang.footer?.guidesTitle || 'Guides',
      legalTitle: lang.footer?.legalTitle || 'Legal',
      rights: 'All rights reserved.',
      disclaimer: lang.footer?.disclaimer || ''
    }
  };
}

const translationsTs = `// Auto-generated Translations Dictionary for all 11 languages
export interface NavTranslations {
  home: string;
  features: string;
  channels: string;
  pricing: string;
  guides: string;
  contact: string;
  cta: string;
}

export interface LanguageStrings {
  code: string;
  dir: 'ltr' | 'rtl';
  nav: NavTranslations;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    trial: string;
  };
  footer: {
    desc: string;
    quickLinksTitle: string;
    guidesTitle: string;
    legalTitle: string;
    rights: string;
    disclaimer: string;
  };
}

export const TRANSLATIONS: Record<string, LanguageStrings> = ${JSON.stringify(translationsObj, null, 2)};
`;

fs.writeFileSync(path.join(root, 'data', 'translations.ts'), translationsTs, 'utf8');
console.log('Generated data/translations.ts');

// 2. Build data/guides.ts
// For each guide, extract article inner HTML and metadata
const allGuides = [];

for (const card of cardsMeta) {
  const slug = card.slug;
  const enGuideHtmlPath = path.join(root, 'Iptv The smarters Pro', 'guides', slug, 'index.html');
  let contentHtml = '';
  let readTime = '5 min read';

  if (fs.existsSync(enGuideHtmlPath)) {
    const raw = fs.readFileSync(enGuideHtmlPath, 'utf8');
    const articleMatch = raw.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
    if (articleMatch) {
      contentHtml = articleMatch[1].trim();
    }
    const readMatch = raw.match(/(\d+\s*min read)/i);
    if (readMatch) {
      readTime = readMatch[1];
    }
  }

  const translations = {};
  for (const langCode of Object.keys(GUIDES_TRANSLATIONS[slug] || {})) {
    translations[langCode] = GUIDES_TRANSLATIONS[slug][langCode];
  }

  allGuides.push({
    slug,
    category: card.category || 'General',
    title: card.title,
    desc: card.desc,
    readTime,
    translations,
    contentHtml
  });
}

const guidesTs = `// Auto-generated Guide Metadata & Content for all 35 Guides
export interface GuideTranslation {
  title: string;
  desc: string;
}

export interface GuideItem {
  slug: string;
  category: string;
  title: string;
  desc: string;
  readTime: string;
  translations: Record<string, GuideTranslation>;
  contentHtml: string;
}

export const GUIDES: GuideItem[] = ${JSON.stringify(allGuides, null, 2)};

export function getGuideBySlug(slug: string): GuideItem | undefined {
  return GUIDES.find(g => g.slug === slug);
}
`;

fs.writeFileSync(path.join(root, 'data', 'guides.ts'), guidesTs, 'utf8');
console.log(`Generated data/guides.ts with ${allGuides.length} guides.`);
