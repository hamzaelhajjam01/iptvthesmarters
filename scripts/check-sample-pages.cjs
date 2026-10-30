const fs = require('fs');
const files = [
  'c:/Users/hp/OneDrive - Université Privée de Marrakech/Desktop/iptvthesmarters/Iptv The smarters Pro/index.html',
  'c:/Users/hp/OneDrive - Université Privée de Marrakech/Desktop/iptvthesmarters/Iptv The smarters Pro/products/index.html',
  'c:/Users/hp/OneDrive - Université Privée de Marrakech/Desktop/iptvthesmarters/Iptv The smarters Pro/products/4k-iptv-encoder/index.html',
  'c:/Users/hp/OneDrive - Université Privée de Marrakech/Desktop/iptvthesmarters/Iptv The smarters Pro/reseller/index.html',
  'c:/Users/hp/OneDrive - Université Privée de Marrakech/Desktop/iptvthesmarters/Iptv The smarters Pro/fr/reseller/index.html',
  'c:/Users/hp/OneDrive - Université Privée de Marrakech/Desktop/iptvthesmarters/Iptv The smarters Pro/iptv-services/index.html'
];

for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  const short = f.split('/').slice(-2).join('/');
  console.log('--- ' + short + ' ---');
  console.log('  has langToggle:           ', c.includes('id="langToggle"'));
  console.log('  has /reseller/ in header: ', c.includes('href="/reseller/"'));
  console.log('  has /iptv-services/:      ', c.includes('href="/iptv-services/"'));
  console.log('  has Get Started button:   ', c.includes('Get Started'));
  console.log('  has Reseller in footer:   ', c.includes('Reseller Program'));
  console.log('  has heroui.css:           ', c.includes('/assets/css/heroui.css'));
}
