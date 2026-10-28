import fs from 'node:fs';
import path from 'node:path';

const langs = ['fr', 'de', 'es', 'ar', 'it', 'nl', 'pt', 'pt-br', 'pl', 'ko'];
let issues = [];

langs.forEach(lang => {
  const langDir = path.join('Iptv The smarters Pro', lang);
  if (!fs.existsSync(langDir)) return;

  function scan(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scan(p);
      } else if (entry.isFile() && entry.name === 'index.html') {
        const html = fs.readFileSync(p, 'utf8');
        const footerIdx = html.indexOf('<footer');
        if (footerIdx !== -1) {
          const footerHtml = html.substring(footerIdx);
          if (footerHtml.includes('href="/guides/"')) {
            issues.push(`${p} has href="/guides/" in footer`);
          }
          if (footerHtml.includes('href="/guides/how-to-activate-iptv-smarters-pro/"')) {
            issues.push(`${p} has href="/guides/how-to-activate-iptv-smarters-pro/" in footer`);
          }
          if (footerHtml.includes('href="/privacy/"')) {
            issues.push(`${p} has href="/privacy/" in footer`);
          }
        }
      }
    });
  }
  scan(langDir);
});

console.log('Total issues found:', issues.length);
console.log(issues.slice(0, 30).join('\n'));
