const fs = require('fs');
const path = require('path');

const targetDir = path.resolve(__dirname, '..', 'Iptv The smarters Pro');

const gaSnippet = `
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XFWZSDKJ29"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XFWZSDKJ29');
    </script>
`;

let count = 0;

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (!content.includes('G-XFWZSDKJ29')) {
        if (content.includes('<head>')) {
          content = content.replace('<head>', '<head>' + gaSnippet);
          fs.writeFileSync(fullPath, content, 'utf8');
          count++;
        } else if (/<head[^>]*>/i.test(content)) {
          content = content.replace(/<head[^>]*>/i, (m) => m + gaSnippet);
          fs.writeFileSync(fullPath, content, 'utf8');
          count++;
        }
      }
    }
  }
}

walk(targetDir);
console.log(`Successfully injected GA4 into ${count} HTML files in Iptv The smarters Pro`);
