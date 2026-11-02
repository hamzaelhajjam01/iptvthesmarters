const fs = require('fs');
const content = fs.readFileSync('Iptv The smarters Pro/assets/js/free-trial-modal.js', 'utf8');
const overlayIdx = content.indexOf('Activate Your Free Trial');
console.log(content.slice(overlayIdx - 100, overlayIdx + 400));
