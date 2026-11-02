const fs = require('fs');
const data = JSON.parse(fs.readFileSync('scripts/extracted-all-35-raw-content.json', 'utf8'));

for (let i = 1; i <= 6; i++) {
  const slugs = Object.keys(data);
  const slug = slugs[i - 1];
  console.log(`\n=== Guide ${i}: ${slug} ===`);
  console.log('TOC:', data[slug].toc);
  console.log('FAQs count:', data[slug].faqs.length);
  console.log('Prose preview:', data[slug].prose.slice(0, 300));
}
