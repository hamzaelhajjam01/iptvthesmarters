const fs = require('fs');
const html = fs.readFileSync('Iptv The smarters Pro/products/index.html', 'utf8');

const sections = html.split('<section');
console.log('Total sections:', sections.length - 1);

sections.slice(1).forEach((s, idx) => {
  const h2Match = s.match(/<h2>(.*?)<\/h2>/);
  const badgeMatch = s.match(/class="topic-badge"[^>]*>(.*?)<\/div>/);
  const cardCount = (s.match(/class="topic-card"/g) || []).length;
  console.log(`[Section ${idx + 1}] ${badgeMatch ? badgeMatch[1] : 'No badge'} | ${h2Match ? h2Match[1] : 'No title'} | Cards: ${cardCount}`);
});
