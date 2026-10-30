const fs = require('fs');

let content = fs.readFileSync('components/Header.tsx', 'utf8');
content = content.replace(
  /<nav className="site-nav-desktop[^>]*>[\s\S]*?<\/nav>/,
  `<nav className="site-nav-desktop hidden lg:flex items-center text-sm font-medium">
            <Link
              href={\`\${prefix}features/\`}
              className={\`nav-link whitespace-nowrap transition-colors \${
                isFeatures ? 'text-white nav-link-active font-semibold' : 'text-zinc-400 hover:text-white'
              }\`}
            >
              {nav.features}
            </Link>
            <Link
              href={\`\${prefix}channels/\`}
              className={\`nav-link whitespace-nowrap transition-colors \${
                isChannels ? 'text-white nav-link-active font-semibold' : 'text-zinc-400 hover:text-white'
              }\`}
            >
              {nav.channels}
            </Link>
            <Link
              href={\`\${prefix}pricing/\`}
              className={\`nav-link whitespace-nowrap transition-colors \${
                isPricing ? 'text-white nav-link-active font-semibold' : 'text-zinc-400 hover:text-white'
              }\`}
            >
              {nav.pricing}
            </Link>
            <Link
              href={\`\${prefix}reseller/\`}
              className={\`nav-link whitespace-nowrap transition-colors \${
                isReseller
                  ? 'text-purple-400 nav-link-active font-bold'
                  : 'text-purple-400/90 hover:text-purple-300 font-semibold'
              }\`}
            >
              {nav.reseller}
            </Link>
            <Link
              href={\`\${prefix}guides/\`}
              className={\`nav-link whitespace-nowrap transition-colors \${
                isGuides ? 'text-white nav-link-active font-semibold' : 'text-zinc-400 hover:text-white'
              }\`}
            >
              {nav.guides}
            </Link>
          </nav>`
);

fs.writeFileSync('components/Header.tsx', content, 'utf8');
console.log('Successfully updated Header.tsx without inline flex style');
