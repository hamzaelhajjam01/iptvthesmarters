const fs = require('fs');
const path = require('path');

const slugs = JSON.parse(fs.readFileSync('scripts/extracted-all-35-cards.json', 'utf8')).map(c => c.slug);

let totalWords = 0;
const guideStats = [];

slugs.forEach(slug => {
  const p = path.join('Iptv The smarters Pro', 'guides', slug, 'index.html');
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf8');
    const prose = html.match(/<div class="prose">([\s\S]*?)<\/div>/i);
    const faq = html.match(/<div id="faq"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i);
    const proseText = prose ? prose[1].replace(/<[^>]+>/g, ' ') : '';
    const faqText = faq ? faq[0].replace(/<[^>]+>/g, ' ') : '';
    const words = (proseText + ' ' + faqText).trim().split(/\s+/).length;
    totalWords += words;
    guideStats.push({ slug, words });
  }
});

console.log('Total guides:', guideStats.length);
console.log('Total words across 35 guides:', totalWords);
console.log('Average words per guide:', Math.round(totalWords / guideStats.length));
console.log('Sample guides:', guideStats.slice(0, 10));
