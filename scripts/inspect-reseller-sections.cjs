const fs = require('fs');
const reseller = fs.readFileSync('Iptv The smarters Pro/reseller/index.html', 'utf8');

const sections = reseller.split('<section');
console.log('Total sections in reseller:', sections.length - 1);
sections.slice(1).forEach((s, i) => {
  const h2 = s.match(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/);
  console.log(`[Reseller Section ${i+1}]`, h2 ? h2[1].replace(/<[^>]+>/g, '').trim() : 'No heading');
});
