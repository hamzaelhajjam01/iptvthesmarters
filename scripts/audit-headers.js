import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..', 'Iptv The smarters Pro');

const sampleFiles = [
  'index.html',
  'pricing/index.html',
  'guides/index.html',
  'guides/iptv-smarters-pro-apk-safe-to-download/index.html',
  'fr/index.html',
  'fr/pricing/index.html',
  'fr/guides/index.html',
  'fr/guides/iptv-smarters-pro-apk-safe-to-download/index.html',
  'de/index.html',
  'de/guides/index.html',
  'es/index.html',
  'es/guides/index.html',
  'ar/index.html',
  'ar/guides/index.html',
  'ko/index.html',
  'ko/guides/index.html'
];

for (const rel of sampleFiles) {
  const full = path.join(rootDir, rel);
  if (!fs.existsSync(full)) {
    console.log(`\n=== ${rel} (NOT FOUND) ===`);
    continue;
  }
  const html = fs.readFileSync(full, 'utf8');
  const desktopMatch = html.match(/<nav class="hidden lg:flex[^>]*>([\s\S]*?)<\/nav>/);
  const mobileMatch = html.match(/<nav id="mobileNav"[^>]*>([\s\S]*?)<\/nav>/);

  console.log(`\n=== ${rel} ===`);
  if (desktopMatch) {
    const dLinks = [...desktopMatch[1].matchAll(/<a href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g)].map(m => `${m[1]} -> ${m[2].trim()}`);
    console.log('Desktop: ' + dLinks.join(' | '));
  }
  if (mobileMatch) {
    const mLinks = [...mobileMatch[1].matchAll(/<a href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g)].map(m => `${m[1]} -> ${m[2].replace(/<[^>]+>/g, '').trim()}`);
    console.log('Mobile:  ' + mLinks.join(' | '));
  }
}
