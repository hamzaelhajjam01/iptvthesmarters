import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, '..');
const source = path.join(root, 'Iptv The smarters Pro');
const destPublic = path.join(root, 'public');

if (!fs.existsSync(destPublic)) {
  fs.mkdirSync(destPublic, { recursive: true });
}

// Copy assets/images and assets/fonts
function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

copyRecursive(path.join(source, 'assets', 'images'), path.join(destPublic, 'assets', 'images'));
copyRecursive(path.join(source, 'assets', 'fonts'), path.join(destPublic, 'assets', 'fonts'));

// Copy static root files if present
const rootStaticFiles = [
  'og-image.jpg',
  'robots.txt',
  'sitemap.xml',
  'sitemap-guides.xml',
  'sitemap-products.xml',
  'google676628b207295d06.html',
  'favicon.ico',
  'favicon.svg'
];

for (const f of rootStaticFiles) {
  const s = path.join(source, f);
  if (fs.existsSync(s)) {
    fs.copyFileSync(s, path.join(destPublic, f));
    console.log(`Copied ${f} to public/`);
  }
}

console.log('Public assets setup complete.');
