import fs from 'node:fs';
import path from 'node:path';

const guidesDir = 'Iptv The smarters Pro/guides';
const folders = fs.readdirSync(guidesDir, { withFileTypes: true });

const guides = [];
for (const f of folders) {
  if (f.isDirectory()) {
    const file = path.join(guidesDir, f.name, 'index.html');
    if (fs.existsSync(file)) {
      const html = fs.readFileSync(file, 'utf8');
      const title = (html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || '';
      const desc = (html.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i) || [])[1] || '';
      guides.push({ slug: f.name, title: title.replace(/&amp;/g, '&').trim(), desc: desc.trim() });
    }
  }
}

console.log('Total guides:', guides.length);
fs.writeFileSync('scripts/guides-metadata-en.json', JSON.stringify(guides, null, 2), 'utf8');
console.log('Saved to scripts/guides-metadata-en.json');
