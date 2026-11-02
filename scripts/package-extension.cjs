const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const extDir = path.join(rootDir, 'chrome-extension');

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

function buildPackage(targetBrowser, zipName) {
  const tempDir = path.join(rootDir, `temp_pack_${targetBrowser}`);
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  fs.mkdirSync(tempDir, { recursive: true });

  for (const file of filesToCopy) {
    const src = path.join(extDir, file);
    const dst = path.join(tempDir, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dst);
    }
  }

  copyDir(path.join(extDir, 'icons'), path.join(tempDir, 'icons'));
  copyDir(path.join(extDir, 'lib'), path.join(tempDir, 'lib'));

  // Customize manifest for target browser
  const manifestPath = path.join(tempDir, 'manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  if (targetBrowser === 'chrome' || targetBrowser === 'edge') {
    manifest.background = {
      service_worker: 'background.js'
    };
  } else if (targetBrowser === 'firefox') {
    manifest.background = {
      scripts: ['background.js']
    };
  }

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');

  const zipPath = path.join(rootDir, zipName);
  if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);

  const psCommand = `powershell -Command "Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::CreateFromDirectory('${tempDir.replace(/\\/g, '/')}', '${zipPath.replace(/\\/g, '/')}');"`;
  cp.execSync(psCommand);

  console.log(`[${targetBrowser}] Created ${zipName} (${fs.statSync(zipPath).size} bytes)`);
  fs.rmSync(tempDir, { recursive: true, force: true });
}

buildPackage('chrome', 'smarters-iptv-web-player-v1.0.1.zip');
buildPackage('firefox', 'smarters-iptv-firefox-v1.0.1.zip');
buildPackage('edge', 'smarters-iptv-edge-v1.0.1.zip');
console.log('Packaging complete.');
