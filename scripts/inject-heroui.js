import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceDir = path.join(__dirname, '..', 'Iptv The smarters Pro');

const linkTag = '    <link rel="stylesheet" href="/assets/css/heroui.css">\n';

function injectHeroUI(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      injectHeroUI(fullPath);
    } else if (entry.name.endsWith('.html') && !entry.name.startsWith('google')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (!content.includes('heroui.css') && content.includes('</head>')) {
        content = content.replace('</head>', linkTag + '</head>');
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

injectHeroUI(sourceDir);
console.log('Successfully injected HeroUI design system across all site pages!');
