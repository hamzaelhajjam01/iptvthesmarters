const fs = require('fs');
const path = require('path');

let updated = 0;
function updateDir(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (['node_modules', '.git', '.next'].includes(f)) continue;
    if (fs.statSync(full).isDirectory()) {
      updateDir(full);
    } else if (f.endsWith('.html') && full.includes('products')) {
      let html = fs.readFileSync(full, 'utf8');
      let changed = false;
      if (html.includes('product-pages.css')) {
        html = html.replace(/product-pages\.css(\?v=[^"']*)?/g, 'product-pages.css?v=20261031-footer-v2');
        changed = true;
      }
      if (html.includes('theme.css')) {
        html = html.replace(/theme\.css(\?v=[^"']*)?/g, 'theme.css?v=20261031-footer-v2');
        changed = true;
      }
      if (changed) {
        fs.writeFileSync(full, html, 'utf8');
        updated++;
      }
    }
  }
}

updateDir('Iptv The smarters Pro/products');
console.log(`Updated cache busters in ${updated} product HTML files.`);
