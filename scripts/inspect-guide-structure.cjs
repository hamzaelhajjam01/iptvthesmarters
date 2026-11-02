const fs = require('fs');
const html = fs.readFileSync('Iptv The smarters Pro/ar/guides/what-is-iptv/index.html', 'utf8');

const bannerStart = html.indexOf('lg:hidden mt-12 bg-gradient-to-r');
console.log('--- Bottom Recommended Banner ---');
console.log(html.slice(bannerStart - 30, bannerStart + 600));
