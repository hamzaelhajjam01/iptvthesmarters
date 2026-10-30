const fs = require('fs');
const pricing = fs.readFileSync('Iptv The smarters Pro/pricing/index.html', 'utf8');

// Find all sections in pricing
const sections = pricing.split('<section');
console.log('Total sections in pricing:', sections.length - 1);
sections.slice(1).forEach((s, i) => {
  const h2 = s.match(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/);
  console.log(`[Section ${i+1}]`, h2 ? h2[1].replace(/<[^>]+>/g, '').trim() : 'No heading');
});
