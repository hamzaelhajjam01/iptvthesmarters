const fs = require('fs');
const path = require('path');

console.log('=== FIXING FOOTER ACROSS PRODUCTS & UNIVERSAL CSS ===\n');

// 1. Clean product-pages.css in all locations
const productCssPaths = [
  'Iptv The smarters Pro/assets/css/product-pages.css',
  'public/assets/css/product-pages.css',
  'dist/assets/css/product-pages.css'
];

productCssPaths.forEach(p => {
  if (!fs.existsSync(p)) return;
  let css = fs.readFileSync(p, 'utf8');
  
  // Replace bare footer rules with scoped footer.kw-legacy-footer
  css = css.replace(/([^\w.-])footer\s*\{/g, '$1footer.kw-legacy-footer{');
  css = css.replace(/([^\w.-])footer\s+a\s*\{/g, '$1footer.kw-legacy-footer a{');
  css = css.replace(/([^\w.-])footer\s+a:hover\s*\{/g, '$1footer.kw-legacy-footer a:hover{');
  css = css.replace(/([^\w.-])footer\s+nav\s*\{/g, '$1footer.kw-legacy-footer nav{');
  
  // Also eliminate any residual display:grid on bare footer
  css = css.replace(/footer\{display:grid;grid-template-columns:[^}]*\}/g, '');
  
  fs.writeFileSync(p, css, 'utf8');
  console.log(`✓ Cleaned footer rules in: ${p}`);
});

// Also make sure public/assets/css/product-pages.css has full definitions from static if static is newer
if (fs.existsSync('Iptv The smarters Pro/assets/css/product-pages.css')) {
  const content = fs.readFileSync('Iptv The smarters Pro/assets/css/product-pages.css', 'utf8');
  fs.writeFileSync('public/assets/css/product-pages.css', content, 'utf8');
  if (fs.existsSync('dist/assets/css/product-pages.css')) {
    fs.writeFileSync('dist/assets/css/product-pages.css', content, 'utf8');
  }
  console.log('✓ Synchronized public and dist product-pages.css from static');
}

// 2. Add Universal Footer Enforcement to theme.css
const footerEnforcement = `

/* ══════════════════════════════════════════════════════════════════
   UNIVERSAL FOOTER BULLETPROOF LAYOUT (HEROUI SPEC)
   ══════════════════════════════════════════════════════════════════ */
footer,
footer.bg-zinc-950,
.site-footer {
  display: block !important;
  width: 100% !important;
  max-width: 100% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  position: relative !important;
  box-sizing: border-box !important;
  margin: 0 !important;
}

footer .max-w-7xl {
  width: 100% !important;
  max-width: 80rem !important;
  margin-left: auto !important;
  margin-right: auto !important;
  box-sizing: border-box !important;
}

footer .footer-grid {
  display: grid !important;
  width: 100% !important;
  grid-template-columns: 1fr !important;
  gap: 2.5rem !important;
  box-sizing: border-box !important;
}

@media (min-width: 768px) {
  footer .footer-grid {
    grid-template-columns: repeat(4, 1fr) !important;
  }
}

@media (min-width: 1024px) {
  footer .footer-grid {
    grid-template-columns: 1.4fr 1fr 1fr 1fr !important;
  }
}

footer .footer-grid .space-y-4 {
  min-width: 0 !important;
}

footer .footer-grid .space-y-4 span.font-display,
footer .footer-grid .space-y-4 span.font-extrabold {
  white-space: nowrap !important;
}

footer .btn-whatsapp-green {
  white-space: nowrap !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
}
`;

const themePaths = [
  'Iptv The smarters Pro/assets/css/theme.css',
  'public/assets/css/theme.css',
  'dist/assets/css/theme.css'
];

themePaths.forEach(p => {
  if (!fs.existsSync(p)) return;
  let css = fs.readFileSync(p, 'utf8');
  if (!css.includes('UNIVERSAL FOOTER BULLETPROOF LAYOUT')) {
    css += footerEnforcement;
    fs.writeFileSync(p, css, 'utf8');
    console.log(`✓ Added bulletproof footer enforcement to: ${p}`);
  } else {
    // Replace with latest
    const marker = '/* ══════════════════════════════════════════════════════════════════\n   UNIVERSAL FOOTER BULLETPROOF LAYOUT';
    const idx = css.indexOf(marker);
    if (idx !== -1) {
      css = css.slice(0, idx) + footerEnforcement.trimStart();
      fs.writeFileSync(p, css, 'utf8');
      console.log(`✓ Updated bulletproof footer enforcement in: ${p}`);
    }
  }
});

// 3. Update Iptv The smarters Pro/products/index.html
const productsIndexHtml = 'Iptv The smarters Pro/products/index.html';
if (fs.existsSync(productsIndexHtml)) {
  let html = fs.readFileSync(productsIndexHtml, 'utf8');
  
  // Replace dark WhatsApp CTA button inside Need Help Choosing
  const oldBtnRegex = /<a href="https:\/\/wa\.me\/18042804332"[^>]*class="[^"]*bg-emerald-500[^"]*"[^>]*>[\s\S]*?<\/a>/;
  const newBtn = `<a href="https://wa.me/18042804332" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-green px-6 py-3 rounded-full font-bold text-sm text-white inline-flex items-center gap-2 transition-all shadow-lg" style="background-color: #25D366 !important; color: #ffffff !important; box-shadow: 0 6px 20px rgba(37,211,102,0.4) !important;">
              <img src="/assets/images/whatsapp.png" width="20" height="20" alt="WhatsApp" style="width:20px;height:20px;border-radius:50%;flex-shrink:0;">
              <span>Message on WhatsApp</span>
            </a>`;
  
  if (oldBtnRegex.test(html)) {
    html = html.replace(oldBtnRegex, newBtn);
    console.log('✓ Replaced dark CTA button on products/index.html with vibrant WhatsApp green + official icon');
  } else {
    console.log('- Dark CTA button already replaced or pattern varied');
  }

  // Ensure span.font-display has whitespace-nowrap in footer
  html = html.replace(
    'class="font-display font-extrabold text-lg text-white tracking-tight"',
    'class="font-display font-extrabold text-lg text-white tracking-tight whitespace-nowrap"'
  );

  // Ensure Message Us button in footer has whitespace-nowrap
  html = html.replace(
    'class="btn-whatsapp-green tappable inline-flex px-5 py-2.5 rounded-full text-sm font-bold text-white items-center gap-2 transition-all shadow-md"',
    'class="btn-whatsapp-green tappable inline-flex px-5 py-2.5 rounded-full text-sm font-bold text-white items-center gap-2 transition-all shadow-md whitespace-nowrap"'
  );

  // Cache bust CSS links
  html = html.replace(/theme\.css(\?v=[^"]*)?/g, 'theme.css?v=20261031-footer-v2');
  html = html.replace(/heroui\.css(\?v=[^"]*)?/g, 'heroui.css?v=20261031-footer-v2');
  html = html.replace(/product-pages\.css(\?v=[^"]*)?/g, 'product-pages.css?v=20261031-footer-v2');
  
  fs.writeFileSync(productsIndexHtml, html, 'utf8');
  console.log('✓ Updated Iptv The smarters Pro/products/index.html with cache busters and whitespace-nowrap');
}

// 4. Update scripts/universal-components.cjs
const universalComponentsPath = 'scripts/universal-components.cjs';
if (fs.existsSync(universalComponentsPath)) {
  let comp = fs.readFileSync(universalComponentsPath, 'utf8');
  comp = comp.replace(
    'class="font-display font-extrabold text-lg text-white tracking-tight"',
    'class="font-display font-extrabold text-lg text-white tracking-tight whitespace-nowrap"'
  );
  comp = comp.replace(
    'class="btn-whatsapp-green tappable inline-flex px-5 py-2.5 rounded-full text-sm font-bold text-white items-center gap-2 transition-all shadow-md"',
    'class="btn-whatsapp-green tappable inline-flex px-5 py-2.5 rounded-full text-sm font-bold text-white items-center gap-2 transition-all shadow-md whitespace-nowrap"'
  );
  fs.writeFileSync(universalComponentsPath, comp, 'utf8');
  console.log('✓ Updated scripts/universal-components.cjs');
}

// 5. Update components/Footer.tsx for Next.js
const footerTsx = 'components/Footer.tsx';
if (fs.existsSync(footerTsx)) {
  let tsx = fs.readFileSync(footerTsx, 'utf8');
  tsx = tsx.replace(
    'font-display font-extrabold text-lg text-white tracking-tight',
    'font-display font-extrabold text-lg text-white tracking-tight whitespace-nowrap'
  );
  fs.writeFileSync(footerTsx, tsx, 'utf8');
  console.log('✓ Updated components/Footer.tsx');
}

console.log('\n=== FIX COMPLETE ===');
