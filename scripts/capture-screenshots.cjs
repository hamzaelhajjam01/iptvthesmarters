const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const rootDir = path.resolve(__dirname, '..');
const playerPath = path.join(rootDir, 'chrome-extension/player.html');
const outScreenshot = path.join(rootDir, 'screenshot-1-player-1280x800.png');

const fileUrl = 'file:///' + playerPath.replace(/\\/g, '/');

console.log('Capturing screenshot of player.html...');
try {
  const cmd = `"${chromePath}" --headless=new --window-size=1280,800 --screenshot="${outScreenshot}" "${fileUrl}"`;
  execSync(cmd, { stdio: 'inherit' });
  if (fs.existsSync(outScreenshot)) {
    console.log('Successfully captured screenshot:', outScreenshot);
  }
} catch (e) {
  console.error('Failed to capture screenshot:', e.message);
}
