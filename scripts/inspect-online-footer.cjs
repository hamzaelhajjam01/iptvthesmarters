const fs = require('fs');

async function main() {
  const res = await fetch('https://thesmartersiptv.com/products/');
  const html = await res.text();
  const start = html.indexOf('<footer');
  const end = html.indexOf('</footer>') + 9;
  const footer = html.slice(start, end);
  console.log('Footer length:', footer.length);
  
  // Let's print the entire footer structure
  fs.writeFileSync('scripts/online-footer.html', footer, 'utf8');
  console.log('Saved to scripts/online-footer.html');
}

main().catch(console.error);
