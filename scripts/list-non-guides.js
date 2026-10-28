import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..', 'Iptv The smarters Pro');

const nonGuideFiles = [];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'guides' || e.name === 'node_modules' || e.name === '.git' || e.name === 'dist') {
        continue;
      }
      walk(full);
    } else if (e.name.endsWith('.html')) {
      const rel = path.relative(rootDir, full).replace(/\\/g, '/');
      nonGuideFiles.push(rel);
    }
  }
}

walk(rootDir);
console.log(`Found ${nonGuideFiles.length} non-guide HTML files:`);
console.log(nonGuideFiles.join('\n'));
