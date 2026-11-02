const fs = require('fs');
const data = JSON.parse(fs.readFileSync('scripts/extracted-all-35-raw-content.json', 'utf8'));

const batch1Slugs = [
  'what-is-iptv',
  'iptv-vs-cable-tv',
  'how-to-choose-an-iptv-service',
  'iptv-glossary-m3u-epg-vod-xtream-codes',
  'iptv-pricing-monthly-annual-lifetime-plans',
  'iptv-smarters-pro-on-android-box-nvidia-shield',
  'iptv-smarters-pro-on-iphone-ios',
  'how-many-devices-can-i-use-iptv-smarters-pro-on',
  'iptv-smarters-pro-black-screen-fix'
];

let out = '';
batch1Slugs.forEach(slug => {
  out += `\n================== ${slug} ==================\n`;
  out += 'TOC: ' + JSON.stringify(data[slug].toc, null, 2) + '\n';
  out += 'FAQS: ' + JSON.stringify(data[slug].faqs, null, 2) + '\n';
  out += 'PROSE:\n' + data[slug].prose + '\n';
});

fs.writeFileSync('scripts/batch1-dump.txt', out, 'utf8');
console.log('Saved utf-8 dump');
