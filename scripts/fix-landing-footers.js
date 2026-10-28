import fs from 'node:fs';
import path from 'node:path';

const langs = ['fr', 'de', 'es', 'ar', 'it', 'nl', 'pt', 'pt-br', 'pl', 'ko'];

for (const lang of langs) {
  const filePath = path.join('Iptv The smarters Pro', lang, 'index.html');
  if (!fs.existsSync(filePath)) continue;

  let html = fs.readFileSync(filePath, 'utf8');

  // Replace English guides link in footer with localized guides hub
  html = html.replace(/href="\/guides\/"/g, `href="/${lang}/guides/"`);

  // Replace English setup guide link in footer with localized setup guide
  html = html.replace(/href="\/guides\/how-to-activate-iptv-smarters-pro\/"/g, `href="/${lang}/guides/how-to-activate-iptv-smarters-pro/"`);

  // Replace any unlocalized legal links in footer
  html = html.replace(/href="\/privacy\/"/g, `href="/${lang}/privacy/"`);
  html = html.replace(/href="\/terms\/"/g, `href="/${lang}/terms/"`);
  html = html.replace(/href="\/refund\/"/g, `href="/${lang}/refund/"`);

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Updated footer links in ${filePath}`);
}
