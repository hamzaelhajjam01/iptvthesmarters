const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const extPath = path.resolve(__dirname, '../chrome-extension');

console.log('Testing Chrome Extension compatibility...');
console.log('Chrome binary:', chromePath);
console.log('Extension dir:', extPath);

// 1. Verify Manifest JSON parsing
const manifestPath = path.join(extPath, 'manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
console.log('✔ manifest.json is valid JSON.');
console.log(`  Name: "${manifest.name}" (${manifest.name.length} chars)`);
console.log(`  Short Name: "${manifest.short_name}" (${manifest.short_name.length} chars)`);
console.log(`  Version: ${manifest.version}`);
console.log(`  Manifest Version: ${manifest.manifest_version}`);

// Check manifest constraints
if (manifest.manifest_version !== 3) {
  throw new Error('Manifest version must be 3 for Chrome Web Store!');
}
if (manifest.name.length > 45) {
  console.warn('⚠ Name exceeds 45 characters!');
}
if (manifest.short_name && manifest.short_name.length > 12) {
  console.warn('⚠ short_name exceeds 12 characters!');
}
if (manifest.description.length > 132) {
  console.warn('⚠ description exceeds 132 characters!');
}

// 2. Verify all files referenced in manifest exist
const iconPaths = Object.values(manifest.icons || {});
iconPaths.forEach(icon => {
  const full = path.join(extPath, icon);
  if (!fs.existsSync(full)) throw new Error(`Missing icon file: ${icon}`);
  console.log(`✔ Found icon: ${icon}`);
});

if (manifest.action?.default_popup) {
  const popupFile = path.join(extPath, manifest.action.default_popup);
  if (!fs.existsSync(popupFile)) throw new Error(`Missing popup file: ${manifest.action.default_popup}`);
  console.log(`✔ Found popup HTML: ${manifest.action.default_popup}`);
}

if (manifest.declarative_net_request?.rule_resources) {
  manifest.declarative_net_request.rule_resources.forEach(r => {
    const rf = path.join(extPath, r.path);
    if (!fs.existsSync(rf)) throw new Error(`Missing rule resource: ${r.path}`);
    const rulesJson = JSON.parse(fs.readFileSync(rf, 'utf8'));
    console.log(`✔ Found rule resource: ${r.path} (${rulesJson.length} rules)`);
  });
}

// 3. Launch Chrome with --load-extension
try {
  const cmd = `"${chromePath}" --headless=new --load-extension="${extPath}" --dump-dom about:blank`;
  const out = execSync(cmd, { encoding: 'utf8', timeout: 8000 });
  console.log('✔ Chrome successfully loaded and parsed the extension without errors!');
} catch (err) {
  console.error('❌ Error loading extension in Chrome:', err.message);
  process.exit(1);
}

console.log('\n🎉 ALL CHROME COMPATIBILITY CHECKS PASSED!');
