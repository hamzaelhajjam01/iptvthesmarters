const fs = require('fs');
const content = fs.readFileSync('Iptv The smarters Pro/refund/index.html', 'utf8');
const pStart = content.indexOf('class="prose');
console.log(content.slice(pStart, pStart + 1200));
