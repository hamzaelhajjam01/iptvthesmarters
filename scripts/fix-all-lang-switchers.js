import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceDir = path.join(__dirname, '..', 'Iptv The smarters Pro');

const ALL_LANGUAGES = [
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

const LANG_MAP = Object.fromEntries(ALL_LANGUAGES.map(l => [l.code, l]));

const COMMON_SUBPAGES = new Set(['', 'pricing', 'channels', 'features', 'contact', 'privacy', 'terms', 'refund']);

const GOOD_AIS_SCRIPT = '<script id="ais-lang-toggle-init">window.__toggleLangMenu=function(e){var d=(e&&e.target&&e.target.closest&&e.target.closest("details.lang-switch"))||document.querySelector("details.lang-switch");if(d){if(e&&e.target&&(e.target.tagName==="SUMMARY"||e.target.closest("summary")))return;d.open=!d.open;}};</script>';

function getSubpageUrl(targetCode, subpath) {
  const clean = (subpath || '').replace(/^\/+|\/+$/g, '');
  if (!clean) {
    return targetCode === 'en' ? '/' : `/${targetCode}/`;
  }
  if (targetCode === 'en') {
    return `/${clean}/`;
  }
  if (COMMON_SUBPAGES.has(clean)) {
    return `/${targetCode}/${clean}/`;
  }
  return `/${targetCode}/`;
}

function buildLangSwitchHtml(currentLangCode, subpath) {
  const currentLang = LANG_MAP[currentLangCode] || LANG_MAP.en;

  const itemsHtml = ALL_LANGUAGES.map(l => {
    const isActive = l.code === currentLangCode;
    const targetUrl = getSubpageUrl(l.code, subpath);
    return `            <a href="${targetUrl}" class="lang-item${isActive ? ' is-active' : ''}" role="menuitem" data-lang="${l.code}"${isActive ? ' aria-current="true"' : ''}>
              <div class="lang-item-content"><span class="lang-flag" aria-hidden="true">${l.flag}</span><span>${l.name}</span></div>
              ${isActive ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lang-item-check"><path d="M20 6 9 17l-5-5"/></svg>' : ''}
            </a>`;
  }).join('\n');

  return `<details class="lang-switch">
            <summary id="langToggle" class="lang-trigger" aria-haspopup="true" aria-expanded="false" aria-controls="langMenu" aria-label="Change language">
              <span class="lang-flag" aria-hidden="true">${currentLang.flag}</span>
              <span class="lang-name">${currentLang.name}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lang-chevron"><path d="m6 9 6 6 6-6"/></svg>
            </summary>
            <div id="langMenu" class="lang-menu" role="menu">
${itemsHtml}
            </div>
          </details>`;
}

function parseFileInfo(relPath) {
  const norm = relPath.replace(/\\/g, '/');
  const nonEnCodes = ['pt-br', 'fr', 'de', 'es', 'ar', 'it', 'nl', 'pt', 'pl', 'ko'];
  
  for (const code of nonEnCodes) {
    if (norm === `${code}/index.html` || norm === `${code}.html`) {
      return { lang: code, subpath: '' };
    }
    if (norm.startsWith(`${code}/`)) {
      const rest = norm.slice(code.length + 1).replace(/\/index\.html$/, '').replace(/\.html$/, '');
      return { lang: code, subpath: rest };
    }
  }

  if (norm === 'index.html') {
    return { lang: 'en', subpath: '' };
  }
  const rest = norm.replace(/\/index\.html$/, '').replace(/\.html$/, '');
  return { lang: 'en', subpath: rest };
}

let modifiedCount = 0;
let totalHtmlCount = 0;

const detailsRegex = /<details[^>]*class=["'][^"']*lang-switch[^"']*["'][\s\S]*?<\/details>/;
const divRegex = /<div[^>]*class=["'][^"']*lang-switch[^"']*["'][\s\S]*?<div[^>]*id=["']langMenu["'][\s\S]*?<\/div>\s*<\/div>/;

function processFile(filePath) {
  const relPath = path.relative(sourceDir, filePath);
  let html = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  const { lang, subpath } = parseFileInfo(relPath);

  // 1. Replace ais-lang-toggle-init if present
  if (html.includes('ais-lang-toggle-init')) {
    const scriptRegex = /<script id="ais-lang-toggle-init">[\s\S]*?<\/script>/;
    if (scriptRegex.test(html)) {
      const newHtml = html.replace(scriptRegex, GOOD_AIS_SCRIPT);
      if (newHtml !== html) {
        html = newHtml;
        changed = true;
      }
    }
  }

  // 2. Replace details.lang-switch OR div.lang-switch
  if (detailsRegex.test(html)) {
    const replacement = buildLangSwitchHtml(lang, subpath);
    html = html.replace(detailsRegex, replacement);
    changed = true;
  } else if (divRegex.test(html)) {
    const replacement = buildLangSwitchHtml(lang, subpath);
    html = html.replace(divRegex, replacement);
    changed = true;
  }

  // 3. Remove any remaining inline onclick="window.__toggleLangMenu..."
  const onclickSummaryRegex = /<summary([^>]*?)onclick="[^"]*toggleLangMenu[^"]*"([^>]*?)>/g;
  if (onclickSummaryRegex.test(html)) {
    html = html.replace(onclickSummaryRegex, '<summary$1$2>');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, html, 'utf8');
    modifiedCount++;
  }
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(full);
    } else if (entry.name.endsWith('.html')) {
      totalHtmlCount++;
      processFile(full);
    }
  }
}

console.log('Fixing language switchers across all HTML files in Iptv The smarters Pro...');
walkDir(sourceDir);
console.log(`Finished: ${modifiedCount} of ${totalHtmlCount} HTML files updated with normalized language switchers.`);
