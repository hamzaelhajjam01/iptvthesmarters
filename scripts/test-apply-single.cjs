const fs = require('fs');
const path = require('path');

const b1 = require('./i18n-ar-guides/batch1.cjs');
const b2 = require('./i18n-ar-guides/batch2.cjs');
const b3 = require('./i18n-ar-guides/batch3.cjs');
const b4 = require('./i18n-ar-guides/batch4.cjs');
const allData = { ...b1, ...b2, ...b3, ...b4 };

console.log('Loaded allData keys:', Object.keys(allData).length);

const testSlug = 'what-is-iptv';
const testData = allData[testSlug];
const filePath = path.join(__dirname, '..', 'Iptv The smarters Pro', 'ar', 'guides', testSlug, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// Verify we can locate sections
const desktopTocMatch = html.match(/<ul class="space-y-3 text-sm" id="toc-list">[\s\S]*?<\/ul>/i);
console.log('Desktop TOC found:', !!desktopTocMatch);

const mobileTocMatch = html.match(/<details class="lg:hidden[\s\S]*?<\/details>/i);
console.log('Mobile TOC found:', !!mobileTocMatch);

const proseMatch = html.match(/<div class="prose">([\s\S]*?)<\/div>\s*<div id="faq"/i);
console.log('Prose found:', !!proseMatch);

const faqMatch = html.match(/<div id="faq"[\s\S]*?<div class="space-y-6">([\s\S]*?)<\/div>\s*<\/div>/i);
console.log('FAQ found:', !!faqMatch);
