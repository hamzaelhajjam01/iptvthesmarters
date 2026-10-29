const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const extDir = path.join(rootDir, 'chrome-extension');
const stageDir = path.join(rootDir, 'temp_stage_firefox');
const zipFile = path.join(rootDir, 'smarters-iptv-firefox-v1.0.0.zip');

if (fs.existsSync(stageDir)) {
  fs.rmSync(stageDir, { recursive: true, force: true });
}
if (fs.existsSync(zipFile)) {
  fs.rmSync(zipFile, { force: true });
}

fs.mkdirSync(stageDir, { recursive: true });

// Production files to copy
const filesToCopy = [
  'manifest.json',
  'popup.html',
  'popup.css',
  'popup.js',
  'player.html',
  'player.css',
  'player.js',
  'rules.json'
];

filesToCopy.forEach(f => {
  fs.copyFileSync(path.join(extDir, f), path.join(stageDir, f));
});

// Copy directories
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDir(path.join(extDir, 'icons'), path.join(stageDir, 'icons'));
copyDir(path.join(extDir, 'lib'), path.join(stageDir, 'lib'));

// Use bsdtar (tar.exe) to create POSIX forward-slash ZIP archive compatible with Mozilla AMO
execSync(`tar.exe -a -c -f "${zipFile}" -C "${stageDir}" *`, { stdio: 'inherit' });

// Cleanup staging
fs.rmSync(stageDir, { recursive: true, force: true });

const stats = fs.statSync(zipFile);
console.log(`Success! Firefox package created: ${zipFile} (${(stats.size / 1024).toFixed(1)} KB)`);
