const fs = require('fs');
const path = require('path');

const hubHtml = fs.readFileSync(path.join('Iptv The smarters Pro', 'ar', 'guides', 'index.html'), 'utf8');

// Find English text outside scripts and styles
const cleanHtml = hubHtml
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<svg[\s\S]*?<\/svg>/gi, '');

const textNodes = cleanHtml.match(/>([^<]{4,})</g) || [];
const englishNodes = textNodes
  .map(t => t.replace(/[><]/g, '').trim())
  .filter(t => {
    if (!t) return false;
    const arabic = (t.match(/[\u0600-\u06FF]/g) || []).length;
    return arabic === 0 && /[a-zA-Z]/.test(t) && !t.startsWith('http') && !t.includes('{') && !t.includes('class');
  });

console.log('English text nodes on /ar/guides/ count:', englishNodes.length);
console.log('Sample english nodes:', Array.from(new Set(englishNodes)).slice(0, 30));
