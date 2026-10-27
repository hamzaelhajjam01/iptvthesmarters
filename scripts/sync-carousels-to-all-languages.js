import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const sourceDir = path.join(projectRoot, 'Iptv The smarters Pro');

// Extract the VOD & Sports Carousel section from the root index.html
const rootIndexPath = path.join(sourceDir, 'index.html');
const rootHtml = fs.readFileSync(rootIndexPath, 'utf8');

const startTag = '<!-- HeroUI VOD Entertainment Hub (IMDb Top Rated Movies & Series Carousels) -->';
const startIdx = rootHtml.indexOf(startTag);
const endIdx = rootHtml.indexOf('</section>', startIdx) + '</section>'.length;

if (startIdx === -1 || endIdx === -1) {
  console.error('Could not locate VOD Entertainment Hub in root index.html');
  process.exit(1);
}

const carouselSection = rootHtml.substring(startIdx, endIdx);
console.log(`Extracted carousel section (${carouselSection.length} bytes).`);

const languages = ['fr', 'de', 'es', 'ar', 'nl', 'it', 'pl', 'pt', 'pt-br', 'ko'];

for (const lang of languages) {
  const langIndexPath = path.join(sourceDir, lang, 'index.html');
  if (!fs.existsSync(langIndexPath)) {
    console.warn(`File not found: ${langIndexPath}`);
    continue;
  }

  let html = fs.readFileSync(langIndexPath, 'utf8');

  // If already contains the carousels, remove them first so we re-inject cleanly
  if (html.includes('id="vod-entertainment-hub"')) {
    const existingStart = html.indexOf(startTag);
    const existingEnd = html.indexOf('</section>', existingStart) + '</section>'.length;
    html = html.substring(0, existingStart) + html.substring(existingEnd);
  }

  // Find the end of <section class="hero-stage">...</section>
  const heroStageRegex = /(<section[^>]*class="[^"]*hero-stage[^"]*"[\s\S]*?<\/section>)/;
  if (heroStageRegex.test(html)) {
    html = html.replace(heroStageRegex, `$1\n\n        ${carouselSection}\n`);
    fs.writeFileSync(langIndexPath, html, 'utf8');
    console.log(`Successfully injected carousels under hero in /${lang}/index.html`);
  } else {
    console.error(`Could not find hero-stage section in /${lang}/index.html`);
  }
}

console.log('Finished synchronizing carousels across all language landing pages!');
