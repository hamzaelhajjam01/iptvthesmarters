const fs = require('fs');
const content = fs.readFileSync('app/terms/page.tsx', 'utf8');
const h2s = [...content.matchAll(/<h2>(.*?)<\/h2>/g)].map(m => m[1]);
console.log('Terms H2s:', h2s);
