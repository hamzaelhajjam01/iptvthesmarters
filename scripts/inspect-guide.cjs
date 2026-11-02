const fs = require('fs');
const path = require('path');

const guidePath = path.join('Iptv The smarters Pro', 'guides', 'what-is-iptv', 'index.html');
const html = fs.readFileSync(guidePath, 'utf8');

const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
if (mainMatch) {
  const main = mainMatch[1];
  const articleMatch = main.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  if (articleMatch) {
    console.log('Article length:', articleMatch[1].length);
    const headings = articleMatch[1].match(/<h[2-4][^>]*>[\s\S]*?<\/h[2-4]>/gi) || [];
    console.log('Headings:', headings);
  }
}
