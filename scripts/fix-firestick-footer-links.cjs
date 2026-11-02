const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (f === 'node_modules' || f === '.git' || f === '.next') continue;
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      replaceInDir(full);
    } else if (f.endsWith('.html') || f.endsWith('.js') || f.endsWith('.cjs') || f.endsWith('.tsx')) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes('how-to-setup-iptv-smarters-pro-on-firestick')) {
        const updated = content.replaceAll(
          'how-to-setup-iptv-smarters-pro-on-firestick',
          'install-iptv-smarters-pro-on-firestick'
        );
        fs.writeFileSync(full, updated, 'utf8');
        console.log('Updated:', full);
      }
    }
  }
}

replaceInDir(path.join(__dirname, '..', 'Iptv The smarters Pro'));
