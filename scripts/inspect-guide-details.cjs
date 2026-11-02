const fs = require('fs');
const path = require('path');

const p = path.join('Iptv The smarters Pro', 'guides', 'what-is-iptv', 'index.html');
const html = fs.readFileSync(p, 'utf8');

const prose = html.match(/<div class="prose">([\s\S]*?)<\/div>/i);
const faq = html.match(/<div id="faq"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i);
const toc = html.match(/<ul class="space-y-3 text-sm" id="toc-list">([\s\S]*?)<\/ul>/i);

console.log('--- TOC ---');
console.log(toc ? toc[1] : 'No TOC');
console.log('--- PROSE ---');
console.log(prose ? prose[1] : 'No prose');
console.log('--- FAQ ---');
console.log(faq ? faq[0] : 'No FAQ');
