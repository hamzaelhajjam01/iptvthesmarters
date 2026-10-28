import fs from 'node:fs';
import path from 'node:path';

export function getOriginalMain(relPath: string): string {
  const filePath = path.join(process.cwd(), 'Iptv The smarters Pro', relPath);
  if (!fs.existsSync(filePath)) {
    return '';
  }
  const rawHtml = fs.readFileSync(filePath, 'utf8');
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
