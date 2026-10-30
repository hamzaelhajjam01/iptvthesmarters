const fs = require('fs');

const genScript = fs.readFileSync('scripts/generate-localized-reseller.cjs', 'utf8');
console.log('Script length:', genScript.length);
console.log(genScript.substring(0, 1000));
