import fs from 'node:fs';

const content = fs.readFileSync('Iptv The smarters Pro/assets/js/site-interactions.js', 'utf8');

function showFunc(name) {
  const idx = content.indexOf(`function ${name}`);
  if (idx !== -1) {
    console.log(`=== FUNCTION ${name} ===`);
    console.log(content.substring(idx, idx + 1200));
  } else {
    console.log(`function ${name} not found`);
  }
}

showFunc('getTargetUrlForLang');
showFunc('selectLanguageItem');
showFunc('applyLanguage');
