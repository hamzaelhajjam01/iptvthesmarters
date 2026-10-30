const fs = require('fs');

// 1. Update Header.tsx
let headerTsx = fs.readFileSync('components/Header.tsx', 'utf8');
const navRegex = /<nav className="site-nav-desktop[\s\S]*?<\/nav>/;
const replacement = `<nav className="site-nav-desktop hidden lg:flex items-center text-sm font-medium" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            <Link
              href={\`\${prefix}features/\`}
              style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 10px' }}
              className={\`nav-link whitespace-nowrap transition-colors \${
                isFeatures ? 'text-white nav-link-active font-semibold' : 'text-zinc-400 hover:text-white'
              }\`}
            >
              {nav.features}
            </Link>
            <Link
              href={\`\${prefix}channels/\`}
              style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 10px' }}
              className={\`nav-link whitespace-nowrap transition-colors \${
                isChannels ? 'text-white nav-link-active font-semibold' : 'text-zinc-400 hover:text-white'
              }\`}
            >
              {nav.channels}
            </Link>
            <Link
              href={\`\${prefix}pricing/\`}
              style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 10px' }}
              className={\`nav-link whitespace-nowrap transition-colors \${
                isPricing ? 'text-white nav-link-active font-semibold' : 'text-zinc-400 hover:text-white'
              }\`}
            >
              {nav.pricing}
            </Link>
            <Link
              href={\`\${prefix}reseller/\`}
              style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 10px' }}
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
              style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 10px' }}
              className={\`nav-link whitespace-nowrap transition-colors \${
                isGuides ? 'text-white nav-link-active font-semibold' : 'text-zinc-400 hover:text-white'
              }\`}
            >
              {nav.guides}
            </Link>
          </nav>`;

if (navRegex.test(headerTsx)) {
  headerTsx = headerTsx.replace(navRegex, replacement);
  fs.writeFileSync('components/Header.tsx', headerTsx, 'utf8');
  console.log('Successfully updated components/Header.tsx');
} else {
  console.error('navRegex failed to match in components/Header.tsx');
}
