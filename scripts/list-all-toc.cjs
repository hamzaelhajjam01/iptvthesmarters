const fs = require('fs');
const data = JSON.parse(fs.readFileSync('scripts/extracted-all-35-raw-content.json', 'utf8'));

Object.keys(data).forEach((slug, i) => {
  const g = data[slug];
  console.log(`${i + 1}. [${slug}]`);
  console.log('   TOC:', g.toc.map(t => t.text).join(' | '));
});
