import fs from 'node:fs';
import path from 'node:path';
import { LANGUAGES } from './multilingual-data.js';

const base = 'Iptv The smarters Pro';

console.log('--- Checking Keyword Integration ---');
for (const lang of LANGUAGES) {
  const pricingFile = path.join(base, lang.code, 'pricing', 'index.html');
  const channelsFile = path.join(base, lang.code, 'channels', 'index.html');
  const featuresFile = path.join(base, lang.code, 'features', 'index.html');
  
  const content = fs.readFileSync(pricingFile, 'utf8') + fs.readFileSync(channelsFile, 'utf8') + fs.readFileSync(featuresFile, 'utf8');
  
  const matched = lang.keywords.filter(k => content.toLowerCase().includes(k.toLowerCase()));
  console.log(`[${lang.code.toUpperCase()}] Target keywords matched: ${matched.length}/${lang.keywords.length}`);
  matched.forEach(k => console.log(`    ✓ ${k}`));
}
