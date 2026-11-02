const fs = require('fs');
const path = require('path');

const b1 = require('./i18n-ar-guides/batch1.cjs');
const b2 = require('./i18n-ar-guides/batch2.cjs');
const b3 = require('./i18n-ar-guides/batch3.cjs');
const b4 = require('./i18n-ar-guides/batch4.cjs');
const allData = { ...b1, ...b2, ...b3, ...b4 };

let matchFailures = 0;
for (const slug of Object.keys(allData)) {
  const filePath = path.join(__dirname, '..', 'Iptv The smarters Pro', 'ar', 'guides', slug, 'index.html');
  if (!fs.existsSync(filePath)) {
    console.error('Missing file:', filePath);
    matchFailures++;
    continue;
  }
  const html = fs.readFileSync(filePath, 'utf8');
  const desktopToc = /<ul class="space-y-3 text-sm" id="toc-list">[\s\S]*?<\/ul>/i.test(html);
  const mobileToc = /<details class="lg:hidden[\s\S]*?<\/details>/i.test(html);
  const prose = /<div class="prose">([\s\S]*?)<\/div>\s*<div id="faq"/i.test(html);
  const faq = /<div id="faq"[\s\S]*?<div class="space-y-6">([\s\S]*?)<\/div>\s*<\/div>/i.test(html);

  if (!desktopToc || !mobileToc || !prose || !faq) {
    console.warn(`Mismatch in ${slug}: dt=${desktopToc}, mt=${mobileToc}, p=${prose}, f=${faq}`);
    matchFailures++;
  }
}

console.log(`Inspection complete. Failures: ${matchFailures}/35`);
