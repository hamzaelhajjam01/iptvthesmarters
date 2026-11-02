const fs = require('fs');
const path = require('path');

const p = path.join('Iptv The smarters Pro', 'ar', 'guides', 'what-is-iptv', 'index.html');
const html = fs.readFileSync(p, 'utf8');

// Find the boundaries
const startArticle = html.indexOf('<article class="flex-1 w-full max-w-[720px] mx-auto lg:mx-0">');
const endArticle = html.indexOf('</article>');
console.log('Start article:', startArticle);
console.log('End article:', endArticle);

// Find TOC in aside
const startToc = html.indexOf('<ul class="space-y-3 text-sm" id="toc-list">');
const endToc = html.indexOf('</ul>', startToc);
console.log('TOC snippet:\n', html.slice(startToc, endToc + 5));
