const fs = require('fs');
const content = fs.readFileSync('scripts/build-multilingual-guides-suite.js', 'utf8');

// Find function generateLocalizedGuidesHub
const idx = content.indexOf('generateLocalizedGuidesHub');
if (idx !== -1) {
  console.log(content.slice(idx, idx + 2500));
} else {
  console.log('Not found');
}
