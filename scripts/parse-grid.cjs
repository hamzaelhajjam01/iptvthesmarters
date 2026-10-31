const fs = require('fs');

const html = fs.readFileSync('scripts/online-footer.html', 'utf8');
const gridStartStr = '<div class="footer-grid mb-10">';
const gridStart = html.indexOf(gridStartStr);
const bottomBarStart = html.indexOf('<div class="pt-6 border-t border-zinc-900');
const gridHtml = html.slice(gridStart + gridStartStr.length, bottomBarStart);

// Let's parse divs by counting depth
let depth = 0;
let children = [];
let currentChildStart = -1;

const tokenRegex = /<\/?div[^>]*>/gi;
let match;
while ((match = tokenRegex.exec(gridHtml)) !== null) {
  const isClose = match[0].startsWith('</');
  if (depth === 0 && !isClose) {
    currentChildStart = match.index;
    depth = 1;
  } else if (isClose) {
    depth--;
    if (depth === 0) {
      children.push(gridHtml.slice(currentChildStart, tokenRegex.lastIndex));
      currentChildStart = -1;
    }
  } else {
    depth++;
  }
}

console.log('Total direct children of .footer-grid:', children.length);
children.forEach((c, idx) => {
  console.log(`\n--- Child ${idx + 1} (length ${c.length}) ---`);
  console.log(c.slice(0, 150));
});
