const fs = require('fs');
const path = require('path');

const WA_SVG_MD = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.53c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.71 4.3 3.8 2.53 1.09 2.53.73 2.98.69.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.3"/></svg>`;

const headerPath = path.join(__dirname, '..', 'components', 'Header.tsx');
let content = fs.readFileSync(headerPath, 'utf8');

// Replace the multi-line lucide SVG block with official WA SVG
const oldSvgPattern = /<svg[\s\S]*?className="lucide lucide-message-circle w-4 h-4"[\s\S]*?<\/svg>/;
if (oldSvgPattern.test(content)) {
  content = content.replace(oldSvgPattern, WA_SVG_MD);
  fs.writeFileSync(headerPath, content, 'utf8');
  console.log('✅ Header.tsx WA icon replaced with official SVG');
} else {
  console.warn('⚠️  Pattern not found — checking what SVG exists near wa.me...');
  const match = content.match(/href="https:\/\/wa\.me[\s\S]{0,600}/);
  if (match) console.log('Context:', match[0].slice(0, 300));
}
