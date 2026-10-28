import fs from 'node:fs';

const content = fs.readFileSync('Iptv The smarters Pro/assets/js/site-interactions.js', 'utf8');
const regex = /lang-item/g;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log('Match at index:', match.index);
  console.log(content.substring(Math.max(0, match.index - 200), match.index + 500));
  console.log('----------------------------------------------------');
}
