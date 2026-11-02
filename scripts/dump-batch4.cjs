const fs = require('fs');
const data = JSON.parse(fs.readFileSync('scripts/extracted-all-35-raw-content.json', 'utf8'));

const batch4Slugs = [
  'how-to-use-multiple-playlists-iptv-smarters-pro',
  'best-iptv-subscriptions-for-smarters-pro',
  'how-to-spot-fake-iptv-smarters-pro-apps',
  'iptv-smarters-pro-download-official-sources',
  'iptv-smarters-pro-apk-safe-to-download',
  'iptv-smarters-pro-update-latest-version',
  'iptv-smarters-pro-for-pc-mac-setup',
  'how-to-tell-if-iptv-provider-is-legitimate'
];

let out = '';
batch4Slugs.forEach(slug => {
  out += `\n================== ${slug} ==================\n`;
  out += 'TOC: ' + JSON.stringify(data[slug].toc, null, 2) + '\n';
  out += 'FAQS: ' + JSON.stringify(data[slug].faqs, null, 2) + '\n';
  out += 'PROSE:\n' + data[slug].prose + '\n';
});

fs.writeFileSync('scripts/batch4-dump.txt', out, 'utf8');
console.log('Saved utf-8 batch 4 dump');
