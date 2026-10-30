const fs = require('fs');

const strictNavCss = `
/* ══════════════════════════════════════════════════════════════════
   STRICT MOBILE / DESKTOP HEADER RESPONSIVENESS
   ══════════════════════════════════════════════════════════════════ */
html, body {
  overflow-x: hidden !important;
  max-width: 100vw !important;
}

@media (max-width: 1023.98px) {
  .site-nav-desktop,
  header nav.site-nav-desktop,
  .site-header-bar nav.site-nav-desktop,
  nav.site-nav-desktop {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    width: 0 !important;
    height: 0 !important;
    max-width: 0 !important;
    max-height: 0 !important;
    padding: 0 !important;
    margin: 0 !important;
    border: none !important;
    overflow: hidden !important;
    position: absolute !important;
    pointer-events: none !important;
  }
}

@media (min-width: 1024px) {
  .site-nav-desktop,
  header nav.site-nav-desktop,
  .site-header-bar nav.site-nav-desktop,
  nav.site-nav-desktop {
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
    width: auto !important;
    height: auto !important;
    position: static !important;
    pointer-events: auto !important;
    align-items: center !important;
    gap: 1.75rem !important; /* 28px */
  }
  .site-nav-desktop a,
  .site-header-bar nav.site-nav-desktop a {
    display: inline-flex !important;
    align-items: center !important;
    padding: 0.375rem 0.625rem !important;
    font-size: 0.875rem !important;
    line-height: 1.25rem !important;
    white-space: nowrap !important;
    text-decoration: none !important;
  }
}

@media (min-width: 1280px) {
  .site-nav-desktop,
  header nav.site-nav-desktop,
  .site-header-bar nav.site-nav-desktop,
  nav.site-nav-desktop {
    gap: 2rem !important; /* 32px */
  }
}
`;

['Iptv The smarters Pro/assets/css/theme.css', 'Iptv The smarters Pro/assets/css/heroui.css', 'app/globals.css'].forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  // Remove any conflicting end blocks
  content = content.replace(/\/\* Responsive Desktop Navbar rules[\s\S]*$/, '');
  content = content.replace(/\/\* ══════* STRICT MOBILE[\s\S]*$/, '');
  content += '\n' + strictNavCss;
  fs.writeFileSync(f, content, 'utf8');
  console.log('Updated strict responsive nav in', f);
});
