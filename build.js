import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, 'Iptv The smarters Pro');
const distDir = path.join(__dirname, 'dist');

console.log(`Building static site from "${sourceDir}" to "${distDir}"...`);

// Clean dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

const fetchPatch = '<script id="ais-fetch-compat">(function(){try{var _r=window.fetch;var _b=_r?_r.bind(window):_r;var _f=_b;Object.defineProperty(window,"fetch",{get:function(){return _f;},set:function(v){_f=v;},configurable:true,enumerable:true});}catch(e){try{if(typeof Window!=="undefined"&&Window.prototype){var _pr=Window.prototype.fetch;var _pb=_pr?_pr.bind(window):_pr;var _pf=_pb;Object.defineProperty(Window.prototype,"fetch",{get:function(){return _pf;},set:function(v){_pf=v;},configurable:true,enumerable:true});}}catch(e2){}}})();</script>';

// Copy all files from "Iptv The smarters Pro" to "dist"
function copyRecursive(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyRecursive(srcPath, destPath);
    } else {
      if (entry.name.endsWith('.html') && !entry.name.startsWith('google')) {
        let content = fs.readFileSync(srcPath, 'utf8');
        if (!content.includes('ais-fetch-compat')) {
          if (content.includes('<head>')) {
            content = content.replace('<head>', '<head>' + fetchPatch);
          } else if (content.includes('<head ')) {
            content = content.replace(/(<head[^>]*>)/i, '$1' + fetchPatch);
          } else {
            content = fetchPatch + content;
          }
        }
        fs.writeFileSync(destPath, content, 'utf8');
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}

if (fs.existsSync(sourceDir)) {
  copyRecursive(sourceDir, distDir);
  console.log('Build completed successfully: All static assets copied to dist/');
} else {
  console.error(`Source directory "${sourceDir}" not found!`);
  process.exit(1);
}
