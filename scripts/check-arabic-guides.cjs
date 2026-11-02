const fs = require('fs');
const path = require('path');

// 1. Check ar/guides/index.html
const hubHtml = fs.readFileSync(path.join('Iptv The smarters Pro', 'ar', 'guides', 'index.html'), 'utf8');
const cardTitles = hubHtml.match(/<h[23][^>]*>(.*?)<\/h[23]>/g) || [];
console.log('--- Hub /ar/guides/ card titles count:', cardTitles.length);

let englishTitles = 0;
cardTitles.forEach(t => {
  const text = t.replace(/<[^>]+>/g, '').trim();
  // Check if text is predominantly ascii
  const arabicChars = (text.match(/[\u0600-\u06FF]/g) || []).length;
  if (arabicChars < text.length * 0.3) {
    console.log('Non-Arabic card title on hub:', text);
    englishTitles++;
  }
});
console.log('Non-Arabic titles on hub:', englishTitles);

// 2. Check individual guides
const arGuidesDir = path.join('Iptv The smarters Pro', 'ar', 'guides');
const entries = fs.readdirSync(arGuidesDir, { withFileTypes: true });
const guideDirs = entries.filter(e => e.isDirectory()).map(e => e.name);

console.log('\n--- Checking 35 guide pages:');
let fullyEnglishProseCount = 0;
guideDirs.forEach(slug => {
  const filePath = path.join(arGuidesDir, slug, 'index.html');
  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, 'utf8');
    const proseMatch = html.match(/<div class="prose">([\s\S]*?)<\/div>/i);
    if (proseMatch) {
      const proseText = proseMatch[1].replace(/<[^>]+>/g, '');
      const arabicChars = (proseText.match(/[\u0600-\u06FF]/g) || []).length;
      const ratio = arabicChars / proseText.length;
      if (ratio < 0.2) {
        fullyEnglishProseCount++;
      }
    }
  }
});
console.log(`Guides with English prose: ${fullyEnglishProseCount} / ${guideDirs.length}`);
