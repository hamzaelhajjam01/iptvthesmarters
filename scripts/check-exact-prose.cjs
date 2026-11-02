const fs = require('fs');
const html = fs.readFileSync('Iptv The smarters Pro/guides/what-is-iptv/index.html', 'utf8');

const prose = html.match(/<div class="prose">([\s\S]*?)<\/div>\s*<div id="faq"/i);
if (prose) {
  console.log('Prose full length:', prose[1].length);
  console.log(prose[1].slice(0, 1500));
} else {
  console.log('Regex did not match');
}
