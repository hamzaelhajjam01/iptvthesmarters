/**
 * fix-all-wa-and-nav.cjs
 * 1. Fix desktop nav gap (inline style)
 * 2. Fix footer WhatsApp social icon → official WA SVG + green
 * 3. Fix footer WhatsApp CTA button → green + official WA SVG
 * 4. Fix mobile menu WhatsApp link → green + official WA SVG
 * 5. Update Header.tsx nav + mobile WA
 */

const fs = require('fs');
const path = require('path');

const WA_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.53c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.71 4.3 3.8 2.53 1.09 2.53.73 2.98.69.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.3"/></svg>`;

// Small WA SVG (w-4 h-4 for footer social icon)
const WA_SVG_SM = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.53c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.71 4.3 3.8 2.53 1.09 2.53.73 2.98.69.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.3"/></svg>`;

// Medium WA SVG (w-5 h-5 for buttons)
const WA_SVG_MD = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 flex-shrink-0" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.53c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.71 4.3 3.8 2.53 1.09 2.53.73 2.98.69.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.3"/></svg>`;

// ─────────────────────────────────────────────
// 1. Patch universal-components.cjs
// ─────────────────────────────────────────────
const uniPath = path.join(__dirname, 'universal-components.cjs');
let uni = fs.readFileSync(uniPath, 'utf8');
let uniChanged = 0;

// 1a. Desktop nav gap — add inline style
const navBefore = `class="site-nav-desktop hidden lg:flex items-center text-sm font-medium">`;
const navAfter  = `class="site-nav-desktop hidden lg:flex items-center text-sm font-medium" style="gap:28px;">`;
if (uni.includes(navBefore)) {
  uni = uni.replace(navBefore, navAfter);
  console.log('✅ Nav gap added');
  uniChanged++;
} else if (uni.includes(navAfter)) {
  console.log('ℹ️  Nav gap already present');
} else {
  console.warn('⚠️  Nav tag not found with expected class string');
}

// 1b. Footer social WA icon (small icon-only link)
// Pattern: href="https://wa.me/18042804332" ... class="footer-social-btn">...message-circle...</a>
const footerSocialWaBefore = /<a\s+href="https:\/\/wa\.me\/18042804332"[^>]*class="footer-social-btn"[^>]*>[\s\S]*?<\/a>/;
const footerSocialWaAfter = `<a href="https://wa.me/18042804332" target="_blank" rel="noopener noreferrer" aria-label="Message us on WhatsApp" class="footer-social-btn" style="color:#25D366!important;">${WA_SVG_SM}</a>`;
if (footerSocialWaBefore.test(uni)) {
  uni = uni.replace(footerSocialWaBefore, footerSocialWaAfter);
  console.log('✅ Footer social WA icon updated');
  uniChanged++;
} else {
  console.warn('⚠️  Footer social WA icon pattern not matched');
}

// 1c. Footer CTA WA button (the "Message Us" button in Contact column)
// Pattern: class="tappable inline-flex ... bg-gradient-to-r from-blue-600 to-purple-600 ... items-center gap-2">...message-circle...</a>
const footerCtaBefore = /<a\s+href="https:\/\/wa\.me\/18042804332"[^>]*class="tappable inline-flex[^"]*"[^>]*>[\s\S]*?<\/a>/;
const footerCtaAfter = `<a href="https://wa.me/18042804332" target="_blank" rel="noopener noreferrer" class="tappable inline-flex px-5 py-2.5 rounded-full text-sm font-bold text-white items-center gap-2 transition-all shadow-md" style="background-color:#25D366!important;color:#fff!important;box-shadow:0 4px 15px rgba(37,211,102,0.3)!important;">${WA_SVG_SM}<span>Message Us</span></a>`;
if (footerCtaBefore.test(uni)) {
  uni = uni.replace(footerCtaBefore, footerCtaAfter);
  console.log('✅ Footer CTA WA button updated to green');
  uniChanged++;
} else {
  console.warn('⚠️  Footer CTA WA button pattern not matched');
}

// 1d. Mobile menu WA link
// Pattern: href="https://wa.me/18042804332" ... "Message us on WhatsApp"
const mobileWaBefore = /<a\s+href="https:\/\/wa\.me\/18042804332"[^>]*class="[^"]*(?:flex|btn)[^"]*"[^>]*>[\s\S]*?Message(?:\s+us)?\s+on\s+WhatsApp[\s\S]*?<\/a>/i;
const mobileWaAfter = `<a href="https://wa.me/18042804332" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 mt-4 py-3.5 px-6 rounded-full text-sm font-bold text-white transition-all shadow-lg" style="background-color:#25D366!important;color:#fff!important;box-shadow:0 6px 20px rgba(37,211,102,0.35)!important;">${WA_SVG_MD}<span>Message us on WhatsApp</span></a>`;
if (mobileWaBefore.test(uni)) {
  uni = uni.replace(mobileWaBefore, mobileWaAfter);
  console.log('✅ Mobile menu WA button updated to green');
  uniChanged++;
} else {
  console.warn('⚠️  Mobile menu WA button pattern not matched — trying fallback');
  // Fallback: look for btn-whatsapp-green pattern already or zinc pattern
  const mobileWaFallback = /<a\s+href="https:\/\/wa\.me\/18042804332"[^>]*mt-4[^>]*>[\s\S]*?<\/a>/;
  if (mobileWaFallback.test(uni)) {
    uni = uni.replace(mobileWaFallback, mobileWaAfter);
    console.log('✅ Mobile menu WA button updated (fallback match)');
    uniChanged++;
  } else {
    console.warn('⚠️  Mobile menu WA button NOT found — manual check needed');
  }
}

if (uniChanged > 0) {
  fs.writeFileSync(uniPath, uni, 'utf8');
  console.log(`\n✅ universal-components.cjs saved (${uniChanged} changes)`);
} else {
  console.log('\n⚠️  No changes made to universal-components.cjs');
}

// ─────────────────────────────────────────────
// 2. Patch components/Header.tsx (Next.js)
// ─────────────────────────────────────────────
const headerPath = path.join(__dirname, '..', 'components', 'Header.tsx');
if (fs.existsSync(headerPath)) {
  let hdr = fs.readFileSync(headerPath, 'utf8');
  let hdrChanged = 0;

  // 2a. Desktop nav gap
  const hdrNavBefore = /className="site-nav-desktop hidden lg:flex items-center text-sm font-medium"(\s+style=\{[^}]+\})?/;
  const hdrNavAfter = `className="site-nav-desktop hidden lg:flex items-center text-sm font-medium" style={{ gap: '28px' }}`;
  if (hdrNavBefore.test(hdr)) {
    hdr = hdr.replace(hdrNavBefore, hdrNavAfter);
    console.log('\n✅ Header.tsx nav gap style set');
    hdrChanged++;
  } else {
    console.warn('\n⚠️  Header.tsx nav className pattern not matched');
  }

  // 2b. Mobile WA link in Header.tsx — update to green style
  // The mobile menu has a wa.me link — update its className/style
  const hdrMobileWaBefore = /(<a\s+href="https:\/\/wa\.me\/18042804332"[^>]*className=")[^"]*(")/;
  const newMobileClass = `flex items-center justify-center gap-2 mt-4 py-3.5 px-6 rounded-full text-sm font-bold text-white transition-all shadow-lg`;
  if (hdrMobileWaBefore.test(hdr)) {
    hdr = hdr.replace(hdrMobileWaBefore, `$1${newMobileClass}$2`);
    // Also add/update style prop
    hdr = hdr.replace(
      /(<a\s+href="https:\/\/wa\.me\/18042804332"[^>]*className="[^"]*")\s*(style=\{[^}]+\})?/,
      `$1 style={{ backgroundColor: '#25D366', color: '#fff', boxShadow: '0 6px 20px rgba(37,211,102,0.35)' }}`
    );
    console.log('✅ Header.tsx mobile WA link styled green');
    hdrChanged++;
  } else {
    console.warn('⚠️  Header.tsx mobile WA link pattern not matched');
  }

  if (hdrChanged > 0) {
    fs.writeFileSync(headerPath, hdr, 'utf8');
    console.log(`✅ Header.tsx saved (${hdrChanged} changes)`);
  }
} else {
  console.warn('⚠️  components/Header.tsx not found');
}

console.log('\n🎉 Done! Now run: node scripts/upgrade-all-pages-heroui.cjs');
