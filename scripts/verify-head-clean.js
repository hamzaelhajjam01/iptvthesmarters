import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..', 'Iptv The smarters Pro');

let errorCount = 0;

function checkHeadClean(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const headMatch = content.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  if (!headMatch) return;
  let headContent = headMatch[1];

  headContent = headContent.replace(/<script[\s\S]*?<\/script>/gi, '');
  headContent = headContent.replace(/<style[\s\S]*?<\/style>/gi, '');
  headContent = headContent.replace(/<title[\s\S]*?<\/title>/gi, '');
  headContent = headContent.replace(/<!--[\s\S]*?-->/g, '');
  headContent = headContent.replace(/<[^>]+>/g, '');

  const remaining = headContent.trim();
  if (remaining.length > 0) {
    errorCount++;
    console.error(`ERROR: ${path.relative(rootDir, filePath)} has rogue text in <head>: [${remaining}]`);
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name !== 'node_modules' && e.name !== '.git' && e.name !== 'dist') walk(full);
    } else if (e.name.endsWith('.html')) {
      checkHeadClean(full);
    }
  }
}

walk(rootDir);
if (errorCount === 0) {
  console.log('SUCCESS: All HTML files have 100% clean <head> tags with ZERO rogue characters or stray arrows!');
} else {
  console.error(`FAILURE: Found ${errorCount} files with rogue characters in <head>.`);
  process.exit(1);
}
