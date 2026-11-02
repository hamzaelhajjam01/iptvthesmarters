const fs = require('fs');
const content = fs.readFileSync('scripts/build-multilingual-guides-suite.js', 'utf8');

const idx = content.indexOf('generateLocalizedGuidesHub');
if (idx !== -1) {
  console.log(content.slice(idx + 2400, idx + 5000));
}
