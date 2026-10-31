const fs = require('fs');
const path = require('path');

console.log('=== FIXING WHATSAPP ICON CUT-OFF ISSUES ACROSS CODEBASE ===\n');

// 1. Copy the clean padded icon to both image locations
const cleanIconPath = 'scripts/icon_clean_padded.png';
if (fs.existsSync(cleanIconPath)) {
  fs.copyFileSync(cleanIconPath, 'Iptv The smarters Pro/assets/images/whatsapp.png');
  fs.copyFileSync(cleanIconPath, 'public/assets/images/whatsapp.png');
  if (fs.existsSync('dist/assets/images/whatsapp.png')) {
    fs.copyFileSync(cleanIconPath, 'dist/assets/images/whatsapp.png');
  }
  console.log('✓ Replaced whatsapp.png in static, public, and dist with clean 1:1 padded icon');
} else {
  console.error('Clean icon not found at scripts/icon_clean_padded.png');
}

// 2. Add WhatsApp Icon Rendering Rule to theme.css in all locations
const iconRule = `

/* ══════════════════════════════════════════════════════════════════
   WHATSAPP ICON TAIL PRESERVATION GUARANTEE
   Never clip the speech bubble pointer with border-radius
   ══════════════════════════════════════════════════════════════════ */
img[src*="whatsapp.png"],
.sf3-wa-img,
.sf3-wa-icon {
  border-radius: 0 !important;
  object-fit: contain !important;
  display: inline-block !important;
  vertical-align: middle !important;
  overflow: visible !important;
}
`;

['Iptv The smarters Pro/assets/css/theme.css', 'public/assets/css/theme.css', 'dist/assets/css/theme.css'].forEach(p => {
  if (!fs.existsSync(p)) return;
  let css = fs.readFileSync(p, 'utf8');
  if (!css.includes('WHATSAPP ICON TAIL PRESERVATION GUARANTEE')) {
    css += iconRule;
    fs.writeFileSync(p, css, 'utf8');
    console.log(`✓ Added WhatsApp icon CSS rule to: ${p}`);
  }
});

// 3. Remove border-radius: 50% from support-chat.js
['Iptv The smarters Pro/assets/js/support-chat.js', 'public/assets/js/support-chat.js'].forEach(p => {
  if (!fs.existsSync(p)) return;
  let js = fs.readFileSync(p, 'utf8');
  js = js.replace(/border-radius:50%;/g, '');
  js = js.replace(/border-radius:50%!important;/g, '');
  // Restore border-radius on the round button itself, but NOT the image
  js = js.replace(
    '#sf3-open{bottom:24px;width:60px;height:60px;',
    '#sf3-open{bottom:24px;width:60px;height:60px;border-radius:50%!important;'
  );
  js = js.replace(
    '#sf3-top{bottom:96px;width:48px;height:48px;',
    '#sf3-top{bottom:96px;width:48px;height:48px;border-radius:50%!important;'
  );
  fs.writeFileSync(p, js, 'utf8');
  console.log(`✓ Removed border-radius from WhatsApp icon in: ${p}`);
});

// 4. Update scripts/universal-components.cjs
if (fs.existsSync('scripts/universal-components.cjs')) {
  let uc = fs.readFileSync('scripts/universal-components.cjs', 'utf8');
  uc = uc.replace(/border-radius:50%;/g, '');
  fs.writeFileSync('scripts/universal-components.cjs', uc, 'utf8');
  console.log('✓ Cleaned universal-components.cjs');
}

// 5. Update components in Next.js (remove rounded-full from whatsapp.png)
const nextComponents = [
  'components/Header.tsx',
  'components/Footer.tsx',
  'components/HomeView.tsx',
  'components/ContactView.tsx',
  'components/ChannelsView.tsx',
  'components/GuideDetailView.tsx',
  'app/contact/page.tsx'
];

nextComponents.forEach(cp => {
  if (!fs.existsSync(cp)) return;
  let code = fs.readFileSync(cp, 'utf8');
  code = code.replace(/whatsapp\.png([^>]*)rounded-full/g, 'whatsapp.png$1object-contain');
  fs.writeFileSync(cp, code, 'utf8');
  console.log(`✓ Cleaned rounded-full from: ${cp}`);
});

// 6. Strip border-radius: 50% from all static HTML files referencing whatsapp.png
let htmlCount = 0;
function cleanHtmlDir(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (['node_modules', '.git', '.next'].includes(f)) continue;
    if (fs.statSync(full).isDirectory()) {
      cleanHtmlDir(full);
    } else if (f.endsWith('.html')) {
      let h = fs.readFileSync(full, 'utf8');
      if (h.includes('whatsapp.png') && h.includes('border-radius:50%')) {
        h = h.replace(/border-radius:50%;/g, '');
        fs.writeFileSync(full, h, 'utf8');
        htmlCount++;
      }
    }
  }
}

cleanHtmlDir('Iptv The smarters Pro');
console.log(`✓ Stripped border-radius from whatsapp.png in ${htmlCount} static HTML files`);

console.log('\n=== ALL FIXES APPLIED SUCCESSFULLY ===');
