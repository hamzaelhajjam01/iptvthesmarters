const fs = require('fs');

function inspectPricing(file) {
  console.log(`=== ${file} ===`);
  const html = fs.readFileSync(file, 'utf8');
  const matches = [...html.matchAll(/data-price3="([^"]+)"/g)];
  matches.forEach(m => console.log(m[0]));
  
  // Also check any hardcoded 159 or 249 or 149 or 299
  const re = /(149\.95|159\.95|249\.95|299\.95)/g;
  let match;
  while ((match = re.exec(html)) !== null) {
    const start = Math.max(0, match.index - 50);
    const end = Math.min(html.length, match.index + 50);
    console.log(`Match ${match[0]} at ${match.index}:`, html.slice(start, end).replace(/\n/g, ' '));
  }
}

inspectPricing('Iptv The smarters Pro/index.html');
inspectPricing('Iptv The smarters Pro/pricing/index.html');
