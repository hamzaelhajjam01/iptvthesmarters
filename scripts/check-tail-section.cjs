const fs = require('fs');
const html = fs.readFileSync('Iptv The smarters Pro/products/index.html', 'utf8');

const idx = html.indexOf('<section class="py-12');
if (idx !== -1) {
  console.log(html.substring(idx, idx + 1200));
} else {
  console.log('py-12 section not found');
}
