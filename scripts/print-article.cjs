const fs = require('fs');
const path = require('path');

const p = path.join('Iptv The smarters Pro', 'ar', 'guides', 'what-is-iptv', 'index.html');
const html = fs.readFileSync(p, 'utf8');

const startArticle = html.indexOf('<article class="flex-1 w-full max-w-[720px] mx-auto lg:mx-0">');
const endArticle = html.indexOf('</article>', startArticle);
console.log(html.slice(startArticle, endArticle + 10));
