const fs = require('fs');
const data = JSON.parse(fs.readFileSync('scripts/extracted-all-35-raw-content.json', 'utf8'));

const batch2Slugs = [
  'iptv-smarters-pro-no-sound-fix',
  'iptv-smarters-pro-wont-update-fix',
  'how-to-clear-cache-iptv-smarters-pro',
  'iptv-smarters-pro-complete-guide',
  'is-iptv-smarters-pro-free',
  'iptv-smarters-pro-failed-to-authorize-fix',
  'iptv-smarters-pro-keeps-buffering-fixes',
  'iptv-smarters-pro-vs-tivimate',
  'iptv-smarters-pro-vs-ibo-player'
];

let out = '';
batch2Slugs.forEach(slug => {
  out += `\n================== ${slug} ==================\n`;
  out += 'TOC: ' + JSON.stringify(data[slug].toc, null, 2) + '\n';
  out += 'FAQS: ' + JSON.stringify(data[slug].faqs, null, 2) + '\n';
  out += 'PROSE:\n' + data[slug].prose + '\n';
});

fs.writeFileSync('scripts/batch2-dump.txt', out, 'utf8');
console.log('Saved utf-8 batch 2 dump');
