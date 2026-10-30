const fs = require('fs');

const pricing = fs.readFileSync('Iptv The smarters Pro/pricing/index.html', 'utf8');
const features = fs.readFileSync('Iptv The smarters Pro/features/index.html', 'utf8');
const reseller = fs.readFileSync('Iptv The smarters Pro/reseller/index.html', 'utf8');

console.log('=== PRICING STYLES ===');
console.log(pricing.match(/<link rel="stylesheet"[^>]+>/g));

console.log('=== RESELLER STYLES ===');
console.log(reseller.match(/<link rel="stylesheet"[^>]+>/g));

console.log('=== PRICING HERO SECTION ===');
const pricingMain = pricing.substring(pricing.indexOf('<main'), pricing.indexOf('<main') + 1200);
console.log(pricingMain);

console.log('=== RESELLER HERO SECTION ===');
const resellerMain = reseller.substring(reseller.indexOf('<main'), reseller.indexOf('<main') + 1200);
console.log(resellerMain);
