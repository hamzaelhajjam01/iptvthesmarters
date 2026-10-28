import fs from 'node:fs';

const enGuides = JSON.parse(fs.readFileSync('scripts/guides-metadata-en.json', 'utf8'));

console.log(`Loaded ${enGuides.length} English guides.`);
console.log('Sample slugs:', enGuides.slice(0, 5).map(g => g.slug));
