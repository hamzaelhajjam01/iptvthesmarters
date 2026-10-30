const fs = require('fs');

const reseller = fs.readFileSync('Iptv The smarters Pro/reseller/index.html', 'utf8');
const styleMatches = reseller.match(/<style[^>]*>[\s\S]*?<\/style>/g);
console.log('Style tags found:', styleMatches ? styleMatches.length : 0);
if (styleMatches) {
  console.log('First style tag sample:');
  console.log(styleMatches[0].substring(0, 500));
}
