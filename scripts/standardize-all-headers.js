import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..', 'Iptv The smarters Pro');

const GUIDES_LABEL_BY_LANG = {
  en: 'Guides',
  fr: 'Guides',
  de: 'Anleitungen',
  es: 'Guías',
  ar: 'دليل التثبيت',
  it: 'Guide',
  nl: 'Handleidingen',
  pt: 'Guias',
  'pt-br': 'Tutoriais',
  pl: 'Poradniki',
  ko: '가이드'
};

function getLangForFile(relPath) {
  const parts = relPath.replace(/\\/g, '/').split('/');
  const first = parts[0].toLowerCase();
  if (GUIDES_LABEL_BY_LANG[first]) {
    return first;
  }
  return 'en';
}

let modifiedFiles = 0;

function processHtmlFile(filePath) {
  const relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');

  // Skip guides directory since build-multilingual-guides-suite handles guides
  if (relPath.startsWith('guides/') || relPath.includes('/guides/')) {
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  const lang = getLangForFile(relPath);
  const guideLabel = GUIDES_LABEL_BY_LANG[lang] || 'Guides';
  const prefix = lang === 'en' ? '/' : `/${lang}/`;
  const guideHref = `${prefix}guides/`;

  // 1. Desktop Nav Update
  const desktopNavMatch = content.match(/<nav class="hidden lg:flex[^>]*>([\s\S]*?)<\/nav>/);
  if (desktopNavMatch && !desktopNavMatch[1].includes(guideHref)) {
    const navContent = desktopNavMatch[1];
    // Find pricing link
    const pricingRegex = new RegExp(`(<a href="${prefix}pricing\/"[^>]*>[\\s\\S]*?<\\/a>)`, 'i');
    if (pricingRegex.test(navContent)) {
      const guideLink = `\n            <a href="${guideHref}" class="nav-link text-sm font-medium transition-colors text-zinc-400 hover:text-white">${guideLabel}</a>`;
      const newNavContent = navContent.replace(pricingRegex, `$1${guideLink}`);
      content = content.replace(desktopNavMatch[0], desktopNavMatch[0].replace(navContent, newNavContent));
    }
  }

  // 2. Mobile Nav Update
  const mobileNavMatch = content.match(/<nav id="mobileNav"[^>]*>([\s\S]*?)<\/nav>/);
  if (mobileNavMatch && !mobileNavMatch[1].includes(guideHref)) {
    const mobileContent = mobileNavMatch[1];
    // Find pricing mobile link
    const pricingMobileRegex = new RegExp(`(<a href="${prefix}pricing\/"[^>]*>[\\s\\S]*?<\\/a>)`, 'i');
    if (pricingMobileRegex.test(mobileContent)) {
      // Check classes used in mobileNav links
      const sampleRowMatch = mobileContent.match(/class="([^"]*mobile-nav-row[^"]*)"/);
      const rowClass = sampleRowMatch ? sampleRowMatch[1].replace(/mobile-nav-row-active/g, '').replace(/text-white/g, 'text-zinc-400').trim() : 'mobile-nav-row text-lg font-semibold py-3 px-2 text-zinc-400';
      const guideMobileLink = `\n        <a href="${guideHref}" class="${rowClass}">${guideLabel}</a>`;
      const newMobileContent = mobileContent.replace(pricingMobileRegex, `$1${guideMobileLink}`);
      content = content.replace(mobileNavMatch[0], mobileNavMatch[0].replace(mobileContent, newMobileContent));
    }
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedFiles++;
    console.log(`Updated header nav in: ${relPath} (Lang: ${lang}, Label: ${guideLabel})`);
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name !== 'node_modules' && e.name !== '.git' && e.name !== 'dist') walk(full);
    } else if (e.name.endsWith('.html')) {
      processHtmlFile(full);
    }
  }
}

walk(rootDir);
console.log(`\nHeader nav standardization complete! Modified ${modifiedFiles} files.`);
