import fs from 'node:fs';

const hub = fs.readFileSync('Iptv The smarters Pro/guides/index.html', 'utf8');
const cardRegex = /<a href="\/guides\/([^\/]+)\/"[^>]*data-category="([^"]+)"[\s\S]*?<h[23][^>]*>([\s\S]*?)<\/h[23]>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/g;
let m;
const list = [];
while ((m = cardRegex.exec(hub)) !== null) {
  list.push({
    slug: m[1],
    category: m[2],
    title: m[3].replace(/\s+/g, ' ').trim(),
    desc: m[4].replace(/\s+/g, ' ').trim()
  });
}
console.log('Cards extracted from hub:', list.length);
fs.writeFileSync('scripts/extracted-all-35-cards.json', JSON.stringify(list, null, 2));

