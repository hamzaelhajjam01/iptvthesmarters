import fs from 'node:fs';
import path from 'node:path';

const GHOST_BLOCK_REGEX = /\s*<h3 class="text-white font-bold text-lg mb-3 mt-4">Top-Rated 4K IPTV<\/h3>\s*<p class="text-zinc-400 text-sm mb-6 leading-relaxed">\s*Switch to the best IPTV Smarters Pro 4K subscription[\s\S]*?<a href="\/pricing\/" class="block w-full py-3 bg-purple-600[^"]*">Get Best IPTV 4K Plan →<\/a>\s*<\/div>/gi;

export function getOriginalMain(relPath: string): string {
  const filePath = path.join(process.cwd(), 'Iptv The smarters Pro', relPath);
  if (!fs.existsSync(filePath)) {
    return '';
  }
  let rawHtml = fs.readFileSync(filePath, 'utf8');
  // Strip any leftover dangling un-opened English sidebar promo blocks that break layout
  rawHtml = rawHtml.replace(GHOST_BLOCK_REGEX, '');
  const mainMatch = rawHtml.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  return mainMatch ? mainMatch[1] : '';
}

export function getOriginalFooter(lang: string = 'en'): string {
  const relPath = lang === 'en' ? 'index.html' : `${lang}/index.html`;
  const filePath = path.join(process.cwd(), 'Iptv The smarters Pro', relPath);
  if (!fs.existsSync(filePath)) {
    return '';
  }
  const rawHtml = fs.readFileSync(filePath, 'utf8');
  const footerMatch = rawHtml.match(/<footer[^>]*>([\s\S]*?)<\/footer>/i);
  return footerMatch ? footerMatch[0] : '';
}
