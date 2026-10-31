const fs = require('fs');

const html = fs.readFileSync('Iptv The smarters Pro/products/index.html', 'utf8');
const beforeFooter = html.slice(0, html.indexOf('<footer'));

const lines = beforeFooter.split('\n');
let stack = [];

for (let lineNum = 0; lineNum < lines.length; lineNum++) {
  const line = lines[lineNum];
  const re = /<\/?([a-zA-Z0-9]+)(\s[^>]*)?>/g;
  let m;
  while ((m = re.exec(line)) !== null) {
    const fullTag = m[0];
    const tagName = m[1].toLowerCase();
    
    // Ignore self-closing or void tags
    if (['meta', 'link', 'br', 'hr', 'img', 'input', 'path', 'rect', 'line', 'polygon', 'circle', 'stop', 'defs', 'lineargradient'].includes(tagName)) {
      continue;
    }
    if (fullTag.endsWith('/>')) continue;

    if (fullTag.startsWith('</')) {
      // closing tag
      if (stack.length === 0) {
        console.log(`Extra closing tag </${tagName}> at line ${lineNum + 1}`);
      } else {
        const top = stack[stack.length - 1];
        if (top.tag === tagName) {
          stack.pop();
        } else {
          // Look down stack
          let foundIdx = -1;
          for (let k = stack.length - 1; k >= 0; k--) {
            if (stack[k].tag === tagName) {
              foundIdx = k;
              break;
            }
          }
          if (foundIdx !== -1) {
            // Unclosed tags between
            for (let k = stack.length - 1; k > foundIdx; k--) {
              console.log(`Unclosed <${stack[k].tag}> opened at line ${stack[k].line}: ${stack[k].snippet}`);
            }
            stack.splice(foundIdx);
          } else {
            console.log(`Unexpected closing </${tagName}> at line ${lineNum + 1}`);
          }
        }
      }
    } else {
      // opening tag
      stack.push({
        tag: tagName,
        line: lineNum + 1,
        snippet: line.trim().slice(0, 80)
      });
    }
  }
}

console.log('Unclosed tags remaining before footer:');
stack.forEach(s => console.log(`Line ${s.line} <${s.tag}>: ${s.snippet}`));
