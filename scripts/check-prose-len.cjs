const fs = require('fs');
const data = JSON.parse(fs.readFileSync('scripts/extracted-all-35-raw-content.json', 'utf8'));

Object.keys(data).slice(0, 5).forEach(slug => {
  console.log(slug, 'prose length:', data[slug].prose.length);
});
