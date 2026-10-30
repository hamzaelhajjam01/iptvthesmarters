const fs = require('fs');
const path = require('path');

const headerPath = path.join(__dirname, '..', 'components', 'Header.tsx');
let content = fs.readFileSync(headerPath, 'utf8');

content = content.replace(
  '<nav className="site-nav-desktop hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-medium">',
  `<nav className="site-nav-desktop hidden lg:flex items-center text-sm font-medium" style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>`
);

content = content.replace(
  /className={`nav-link px-1\.5 py-1 whitespace-nowrap transition-colors \${/g,
  `style={{ display: 'inline-flex', alignItems: 'center', padding: '4px 6px' }} className={\`nav-link whitespace-nowrap transition-colors \${`
);

fs.writeFileSync(headerPath, content, 'utf8');
console.log('Successfully updated components/Header.tsx with inline styles.');
