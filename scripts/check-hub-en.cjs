const fs = require('fs');
const html = fs.readFileSync('Iptv The smarters Pro/ar/guides/index.html', 'utf8');

const englishSnippets = [];
if (html.includes('IPTV Basics')) englishSnippets.push('IPTV Basics');
if (html.includes('Troubleshooting')) englishSnippets.push('Troubleshooting');
if (html.includes('Setup')) englishSnippets.push('Setup');
if (html.includes('Devices')) englishSnippets.push('Devices');
if (html.includes('Comparisons')) englishSnippets.push('Comparisons');
if (html.includes('Safety &amp; Legal')) englishSnippets.push('Safety &amp; Legal');
if (html.includes('No guides found')) englishSnippets.push('No guides found');
if (html.includes('Search guides...')) englishSnippets.push('Search guides...');
if (html.includes('Ready to upgrade your experience?')) englishSnippets.push('Ready to upgrade your experience?');

console.log('English found in Arabic hub:', englishSnippets);
