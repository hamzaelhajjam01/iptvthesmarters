const fs = require('fs');

const js = fs.readFileSync('Iptv The smarters Pro/assets/js/support-chat.js', 'utf8');
const btnMatches = js.match(/<button[\s\S]*?<\/button>/g);
console.log('Button tags found:', btnMatches ? btnMatches.length : 0);
if (btnMatches) {
  btnMatches.forEach((b, i) => console.log(i, b.substring(0, 150)));
}

const appendIdx = js.indexOf('document.body.appendChild');
console.log('Append child location:', appendIdx);
if (appendIdx !== -1) {
  console.log(js.substring(appendIdx - 200, appendIdx + 300));
}
