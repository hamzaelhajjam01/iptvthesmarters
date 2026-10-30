const fs = require('fs');

const css = `
/* HeroUI Products & Directory Cards */
.products-container {
  width: min(1320px, calc(100% - 32px));
  margin: 0 auto;
  padding: 32px 0 80px;
}
.heroui-card {
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  padding: 1.25rem !important;
  background: rgba(18, 18, 24, 0.75) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  border-radius: 1rem !important;
  text-decoration: none !important;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
  position: relative !important;
}
.heroui-card:hover {
  background: rgba(28, 28, 38, 0.95) !important;
  border-color: rgba(167, 139, 250, 0.5) !important;
  transform: translateY(-3px) !important;
  box-shadow: 0 12px 30px -8px rgba(123, 63, 228, 0.25) !important;
}
.quick-tab-btn {
  padding: 0.5rem 1rem !important;
  border-radius: 9999px !important;
  font-size: 0.8125rem !important;
  font-weight: 600 !important;
  white-space: nowrap !important;
  transition: all 0.2s ease !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  background: rgba(24, 24, 27, 0.6) !important;
  color: #a1a1aa !important;
  text-decoration: none !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
}
.quick-tab-btn:hover, .quick-tab-btn.is-active {
  background: rgba(123, 63, 228, 0.2) !important;
  border-color: rgba(167, 139, 250, 0.6) !important;
  color: #fff !important;
}
.featured-hero-card {
  background: linear-gradient(135deg, rgba(123, 63, 228, 0.15), rgba(95, 21, 205, 0.05)) !important;
  border: 1px solid rgba(167, 139, 250, 0.3) !important;
  border-radius: 1.25rem !important;
  padding: 1.5rem !important;
  transition: all 0.25s ease !important;
  text-decoration: none !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
}
.featured-hero-card:hover {
  background: linear-gradient(135deg, rgba(123, 63, 228, 0.25), rgba(95, 21, 205, 0.15)) !important;
  border-color: rgba(167, 139, 250, 0.7) !important;
  transform: translateY(-3px) !important;
  box-shadow: 0 14px 35px -8px rgba(123, 63, 228, 0.35) !important;
}
`;

fs.appendFileSync('Iptv The smarters Pro/assets/css/heroui.css', '\n' + css, 'utf8');
fs.appendFileSync('Iptv The smarters Pro/assets/css/product-pages.css', '\n' + css, 'utf8');
fs.appendFileSync('app/globals.css', '\n' + css, 'utf8');
console.log('Appended HeroUI directory CSS to heroui.css, product-pages.css, and app/globals.css');
