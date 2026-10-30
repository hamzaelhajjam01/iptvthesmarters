const fs = require('fs');

const reseller = fs.readFileSync('Iptv The smarters Pro/reseller/index.html', 'utf8');
const calcIdx = reseller.indexOf('calcProfit');
if (calcIdx !== -1) {
  console.log('CALCULATOR SCRIPT:');
  console.log(reseller.substring(calcIdx - 100, calcIdx + 1200));
} else {
  const scriptIdx = reseller.lastIndexOf('<script');
  console.log('LAST SCRIPT:');
  console.log(reseller.substring(scriptIdx, scriptIdx + 1200));
}
