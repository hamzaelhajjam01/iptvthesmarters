const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const extDir = path.join(rootDir, 'chrome-extension');
const tempDir = path.join(rootDir, 'temp_pack_v101');

// Ensure clean temp dir
if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true, force: true });
}
fs.mkdirSync(tempDir, { recursive: true });

// Files to copy
const filesToCopy = [
  'manifest.json',
  'background.js',
  'rules.json',
  'player.html',
  'player.css',
  'player.js',
  'popup.html',
  'popup.css',
  'popup.js'
];

for (const file of filesToCopy) {
  const src = path.join(extDir, file);
  const dst = path.join(tempDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dst);
  } else {
    console.error(`Missing file: ${src}`);
  }
}

// Copy dirs
function copyDir(srcDir, dstDir) {
  fs.mkdirSync(dstDir, { recursive: true });
  for (const item of fs.readdirSync(srcDir)) {
    const s = path.join(srcDir, item);
    const d = path.join(dstDir, item);
    if (fs.statSync(s).isDirectory()) {
      copyDir(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

copyDir(path.join(extDir, 'icons'), path.join(tempDir, 'icons'));
copyDir(path.join(extDir, 'lib'), path.join(tempDir, 'lib'));

console.log('Copied all extension files to temp dir.');

// Create zips using PowerShell's ZipFile
const zipChrome = path.join(rootDir, 'smarters-iptv-web-player-v1.0.1.zip');
const zipFirefox = path.join(rootDir, 'smarters-iptv-firefox-v1.0.1.zip');

if (fs.existsSync(zipChrome)) fs.unlinkSync(zipChrome);
if (fs.existsSync(zipFirefox)) fs.unlinkSync(zipFirefox);

const psCommand = `powershell -Command "Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::CreateFromDirectory('${tempDir.replace(/\\/g, '/')}', '${zipChrome.replace(/\\/g, '/')}'); [System.IO.Compression.ZipFile]::CreateFromDirectory('${tempDir.replace(/\\/g, '/')}', '${zipFirefox.replace(/\\/g, '/')}');"`;

cp.execSync(psCommand);
console.log('Zips created:');
console.log(' -', zipChrome, fs.statSync(zipChrome).size, 'bytes');
console.log(' -', zipFirefox, fs.statSync(zipFirefox).size, 'bytes');

// Clean temp
fs.rmSync(tempDir, { recursive: true, force: true });
console.log('Cleaned temp dir.');
