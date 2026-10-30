const fs = require('fs');

const reseller = fs.readFileSync('Iptv The smarters Pro/reseller/index.html', 'utf8');
console.log('Reseller head tags:');
console.log(reseller.substring(reseller.indexOf('<head>'), reseller.indexOf('</head>')));
