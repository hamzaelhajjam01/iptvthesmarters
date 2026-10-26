import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const cssPath = path.join(__dirname, '..', 'Iptv The smarters Pro', 'assets', 'css', 'heroui.css');

let css = fs.readFileSync(cssPath, 'utf8');

const targetStr = `#vod-entertainment-hub {
  padding-top: 4.5rem;
  padding-bottom: 4.5rem;
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}`;

const replacementStr = `#vod-entertainment-hub {
  padding-top: 4.5rem;
  padding-bottom: 4.5rem;
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  max-width: 1200px !important;
  width: 100% !important;
  margin-left: auto !important;
  margin-right: auto !important;
  padding-left: clamp(1rem, 3vw, 2.5rem) !important;
  padding-right: clamp(1rem, 3vw, 2.5rem) !important;
  box-sizing: border-box !important;
}`;

if (css.includes(targetStr)) {
  css = css.replace(targetStr, replacementStr);
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Successfully updated #vod-entertainment-hub in heroui.css!');
} else {
  console.log('Target string not exact, checking LF/CRLF...');
  const targetStrLF = targetStr.replace(/\r\n/g, '\n');
  const replacementStrLF = replacementStr.replace(/\r\n/g, '\n');
  if (css.includes(targetStrLF)) {
    css = css.replace(targetStrLF, replacementStrLF);
    fs.writeFileSync(cssPath, css, 'utf8');
    console.log('Successfully updated #vod-entertainment-hub (LF format)!');
  } else {
    console.error('Target not found in heroui.css');
  }
}
