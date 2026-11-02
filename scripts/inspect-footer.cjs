const fs = require('fs');
const html = fs.readFileSync('Iptv The smarters Pro/index.html', 'utf8');
const footerStart = html.indexOf('<footer');
const footer = html.slice(footerStart);
const re = /href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
let m;
while ((m = re.exec(footer)) !== null) {
  const text = m[2].replace(/<[^>]+>/g, '').trim();
  if (text.toLowerCase().includes('firestick') || m[1].toLowerCase().includes('firestick')) {
    console.log('Found Firestick link in footer:', m[1], '-->', text);
  }
}
