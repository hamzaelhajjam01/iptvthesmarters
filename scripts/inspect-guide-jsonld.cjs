const fs = require('fs');
const html = fs.readFileSync('Iptv The smarters Pro/ar/guides/what-is-iptv/index.html', 'utf8');

const matches = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
const data = JSON.parse(matches[0][1]);
const faqNode = data['@graph'].find(g => g['@type'] === 'FAQPage');
console.log('FAQPage node in @graph:');
console.log(JSON.stringify(faqNode, null, 2));
