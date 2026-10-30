const fs = require('fs');

const pricing = fs.readFileSync('Iptv The smarters Pro/pricing/index.html', 'utf8');
const pGrid = pricing.indexOf('pricing-card');
console.log('PRICING CARD SAMPLE:');
console.log(pricing.substring(pGrid - 100, pGrid + 800));
