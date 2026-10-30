const fs = require('fs');
const pricing = fs.readFileSync('Iptv The smarters Pro/pricing/index.html', 'utf8');

const s1 = pricing.split('<section')[1];
console.log('Length of s1:', s1.length);
// Print where plans are
const idx = s1.indexOf('$');
if (idx !== -1) {
  console.log(s1.substring(idx - 200, idx + 800));
} else {
  console.log(s1.substring(0, 1500));
}
