const fs = require('fs');
const data = JSON.parse(fs.readFileSync('scripts/extracted-all-35-raw-content.json', 'utf8'));

const batch3Slugs = [
  'iptv-smarters-vs-pro-vs-lite',
  'how-to-set-up-xtream-codes-iptv-smarters-pro',
  'how-to-add-m3u-playlist-iptv-smarters-pro',
  'is-iptv-smarters-pro-safe-and-legal',
  'how-to-activate-iptv-smarters-pro',
  'iptv-smarters-pro-login-not-working',
  'install-iptv-smarters-pro-on-firestick',
  'iptv-smarters-pro-on-samsung-lg-smart-tvs',
  'iptv-smarters-pro-epg-not-loading-fix'
];

let out = '';
batch3Slugs.forEach(slug => {
  out += `\n================== ${slug} ==================\n`;
  out += 'TOC: ' + JSON.stringify(data[slug].toc, null, 2) + '\n';
  out += 'FAQS: ' + JSON.stringify(data[slug].faqs, null, 2) + '\n';
  out += 'PROSE:\n' + data[slug].prose + '\n';
});

fs.writeFileSync('scripts/batch3-dump.txt', out, 'utf8');
console.log('Saved utf-8 batch 3 dump');
