import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..', 'Iptv The smarters Pro');

let fixedCount = 0;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace any meta or link or other tag ending in >>
  // e.g. <meta name="..." content="...">> -> <meta name="..." content="...">
  content = content.replace(/(<(?:meta|link)[^>]*>)>+/gi, '$1');

  // Also check general >> in <head>
  const headMatch = content.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  if (headMatch) {
    let head = headMatch[1];
    if (head.includes('>>')) {
      const cleanedHead = head.replace(/>>+/g, '>');
      content = content.replace(head, cleanedHead);
    }
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixedCount++;
    console.log(`Fixed stray > in: ${path.relative(rootDir, filePath)}`);
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name !== 'node_modules' && e.name !== '.git' && e.name !== 'dist') walk(full);
    } else if (e.name.endsWith('.html')) {
      processFile(full);
    }
  }
}

walk(rootDir);
console.log(`Done. Fixed ${fixedCount} files.`);
