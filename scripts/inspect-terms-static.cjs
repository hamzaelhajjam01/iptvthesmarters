const fs = require('fs');
const html = fs.readFileSync('Iptv The smarters Pro/terms/index.html', 'utf8');
const pStart = html.indexOf('<div class="prose');
const mainEnd = html.indexOf('</main>', pStart);
const slice = html.slice(mainEnd - 200, mainEnd + 10);
console.log(JSON.stringify(slice));
