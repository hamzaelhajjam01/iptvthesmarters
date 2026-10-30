const fs = require('fs');

// Official WhatsApp SVG icon (matching user's uploaded icon)
const waSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 flex-shrink-0"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.53c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.71 4.3 3.8 2.53 1.09 2.53.73 2.98.69.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.3"/></svg>`;

// Update universal-components.cjs
let uni = fs.readFileSync('scripts/universal-components.cjs', 'utf8');

// 1. Update desktop header links to have explicit spacing: margin: 0 14px; padding: 6px 12px;
uni = uni.replace(
  /<nav class="site-nav-desktop hidden lg:flex items-center text-sm font-medium">[\s\S]*?<\/nav>/,
  `<nav class="site-nav-desktop hidden lg:flex items-center text-sm font-medium" style="gap: 28px;">
          <a href="\${prefix || ''}/features/" class="nav-link whitespace-nowrap transition-colors \${activeClass('/features/')}" style="margin: 0 4px; padding: 6px 10px;">Features</a>
          <a href="\${prefix || ''}/channels/" class="nav-link whitespace-nowrap transition-colors \${activeClass('/channels/')}" style="margin: 0 4px; padding: 6px 10px;">Channels</a>
          <a href="\${prefix || ''}/pricing/" class="nav-link whitespace-nowrap transition-colors \${activeClass('/pricing/')}" style="margin: 0 4px; padding: 6px 10px;">Pricing</a>
          <a href="\${prefix || ''}/reseller/" class="nav-link whitespace-nowrap transition-colors \${activeClass('/reseller/')} text-purple-400 hover:text-purple-300 font-semibold" style="margin: 0 4px; padding: 6px 10px;">Reseller</a>
          <a href="\${prefix || ''}/guides/" class="nav-link whitespace-nowrap transition-colors \${activeClass('/guides/')}" style="margin: 0 4px; padding: 6px 10px;">Guides</a>
        </nav>`
);

// 2. Update WhatsApp link in mobile menu to official green button with icon
const mobileWaRegex = /<a href="https:\/\/wa\.me\/18042804332"[^>]*class="[^"]*"[^>]*>[\s\S]*?Message us on WhatsApp<\/a>/;
const newMobileWa = `<a href="https://wa.me/18042804332" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-green flex items-center justify-center gap-2 mt-4 py-3.5 px-4 rounded-full text-sm font-bold text-white transition-all shadow-lg" style="background-color: #25D366 !important; color: #ffffff !important; box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35) !important;">${waSvg}<span>Message us on WhatsApp</span></a>`;

uni = uni.replace(mobileWaRegex, newMobileWa);

// 3. Update footer WhatsApp links to green
const footerWaRegex = /<a href="https:\/\/wa\.me\/18042804332"[^>]*class="[^"]*tappable[^"]*"[^>]*>[\s\S]*?<\/a>/;
const newFooterWa = `<a href="https://wa.me/18042804332" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-green tappable inline-flex px-5 py-2.5 rounded-full text-sm font-bold text-white items-center gap-2 transition-all shadow-md" style="background-color: #25D366 !important; color: #ffffff !important; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3) !important;">${waSvg}<span>Message Us</span></a>`;

uni = uni.replace(footerWaRegex, newFooterWa);

fs.writeFileSync('scripts/universal-components.cjs', uni, 'utf8');
console.log('Successfully updated universal-components.cjs with green WhatsApp button and menu link spacing');
