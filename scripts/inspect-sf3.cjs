const fs = require('fs');

const js = fs.readFileSync('Iptv The smarters Pro/assets/js/support-chat.js', 'utf8');
const pIdx = js.indexOf("const P=");
console.log('Line 1-2:', js.substring(0, 300));

const openIdx = js.indexOf('sf3-open');
console.log('Around sf3-open:', js.substring(openIdx - 100, openIdx + 400));
