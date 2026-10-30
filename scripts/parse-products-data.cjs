const fs = require('fs');
const html = fs.readFileSync('Iptv The smarters Pro/products/index.html', 'utf8');

// Parse sections
const sectionBlocks = html.split('<section');
console.log('Sections to parse:', sectionBlocks.length - 1);

const parsedSections = [];

for (let i = 1; i < sectionBlocks.length; i++) {
  const block = sectionBlocks[i];
  const badgeMatch = block.match(/class="topic-badge"[^>]*>([\s\S]*?)<\/div>/);
  const h2Match = block.match(/<h2>([\s\S]*?)<\/h2>/);
  const descMatch = block.match(/class="sec-desc"[^>]*>([\s\S]*?)<\/p>/);
  
  const cards = [];
  const cardRegex = /<a\s+href="([^"]+)"[^>]*class="topic-card"[^>]*>[\s\S]*?<strong>([\s\S]*?)<\/strong>[\s\S]*?<span>([\s\S]*?)<\/span>[\s\S]*?<\/a>/g;
  let match;
  while ((match = cardRegex.exec(block)) !== null) {
    cards.push({
      href: match[1].trim(),
      title: match[2].trim(),
      desc: match[3].trim()
    });
  }
  
  parsedSections.push({
    badge: badgeMatch ? badgeMatch[1].trim() : '',
    title: h2Match ? h2Match[1].trim() : '',
    desc: descMatch ? descMatch[1].trim() : '',
    cards
  });
}

console.log(JSON.stringify(parsedSections.map(s => ({
  badge: s.badge,
  title: s.title,
  cardCount: s.cards.length
})), null, 2));
