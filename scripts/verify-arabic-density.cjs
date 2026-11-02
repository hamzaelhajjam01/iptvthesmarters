const fs = require('fs');
const path = require('path');

const slugs = [
  'what-is-iptv',
  'iptv-vs-cable-tv',
  'iptv-smarters-pro-black-screen-fix',
  'iptv-smarters-pro-on-iphone-ios',
  'iptv-smarters-pro-on-samsung-lg-smart-tvs',
  'how-to-tell-if-iptv-provider-is-legitimate'
];

for (const slug of slugs) {
  const filePath = path.join(__dirname, '..', 'Iptv The smarters Pro', 'ar', 'guides', slug, 'index.html');
  const html = fs.readFileSync(filePath, 'utf8');
  const proseMatch = html.match(/<div class="prose">([\s\S]*?)<\/div>\s*<div id="faq"/i);
  if (!proseMatch) {
    console.error(`Prose not found for ${slug}`);
    continue;
  }
  const prose = proseMatch[1];
  const arabicChars = (prose.match(/[\u0600-\u06FF]/g) || []).length;
  const englishWords = (prose.match(/\b(the|and|is|with|your|this|that|streaming|channels)\b/gi) || []).length;
  console.log(`${slug}: Arabic chars = ${arabicChars}, English indicator words = ${englishWords}`);
}
