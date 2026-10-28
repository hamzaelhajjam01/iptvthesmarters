import fs from 'node:fs';
import path from 'node:path';

const langs = ['fr', 'de', 'es', 'ar', 'it', 'nl', 'pt', 'pt-br', 'pl', 'ko'];
const issues = [];

for (const lang of langs) {
  const dir = path.join('Iptv The smarters Pro', lang);
  if (!fs.existsSync(dir)) continue;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'guides') continue; // Guides are handled by the suite builder
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const idx = path.join(full, 'index.html');
      if (fs.existsSync(idx)) checkFile(idx, lang);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      checkFile(full, lang);
    }
  }
}

function checkFile(filePath, lang) {
  const content = fs.readFileSync(filePath, 'utf8');
  const footerIdx = content.indexOf('<footer');
  if (footerIdx === -1) return;
  const footerHtml = content.substring(footerIdx);

  if (footerHtml.includes('href="/guides/"') || footerHtml.includes("href='/guides/'")) {
    issues.push(`${filePath}: has /guides/ in footer`);
  }
  if (footerHtml.includes('href="/guides/how-to-activate-iptv-smarters-pro/"')) {
    issues.push(`${filePath}: has English setup guide in footer`);
  }
  if (footerHtml.includes('href="/privacy/"')) {
    issues.push(`${filePath}: has /privacy/ in footer`);
  }
}

console.log('Issues in non-guide pages:', issues.length);
console.log(issues.join('\n'));
