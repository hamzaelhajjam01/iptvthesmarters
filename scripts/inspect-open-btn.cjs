const fs = require('fs');

const js = fs.readFileSync('Iptv The smarters Pro/assets/js/support-chat.js', 'utf8');
const pIdx = js.indexOf('open.innerHTML=icons.chat');
console.log('Found open.innerHTML:', pIdx);
if (pIdx !== -1) {
  console.log(js.substring(pIdx - 100, pIdx + 200));
}
