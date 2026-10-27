import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const sourceDir = path.join(projectRoot, 'Iptv The smarters Pro');

/**
 * Replace base domain across all files
 * @param {string} newOrigin e.g. "https://thesmartersiptv.com" or "https://iptvthesmarters.com"
 */
export function updateProductionOrigin(newOrigin) {
  const cleanOrigin = newOrigin.replace(/\/+$/, '');
  const oldOrigins = [
    'https://thesmartersiptv.com',
    'https://thesmartersiptv.com'
  ];

  console.log(`Updating site base origin to: ${cleanOrigin}`);

  function scanAndReplace(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scanAndReplace(fullPath);
      } else if (entry.name.endsWith('.html') || entry.name.endsWith('.xml') || entry.name.endsWith('.txt') || entry.name.endsWith('.json')) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;

        for (const old of oldOrigins) {
          if (content.includes(old)) {
            content = content.replaceAll(old, cleanOrigin);
            modified = true;
          }
        }

        if (modified) {
          fs.writeFileSync(fullPath, content, 'utf8');
        }
      }
    }
  }

  scanAndReplace(sourceDir);
  console.log('Successfully updated canonical origin, sitemaps, robots.txt, and schemas!');
}

// CLI runner if invoked directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const target = process.argv[2] || 'https://thesmartersiptv.com';
  updateProductionOrigin(target);
}
