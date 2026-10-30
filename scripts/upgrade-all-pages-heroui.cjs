const fs = require('fs');
const path = require('path');
const { generateUniversalHeader, generateUniversalFooter } = require('./universal-components.cjs');

const baseDir = path.join(__dirname, '..', 'Iptv The smarters Pro');

const consolidations = {
  "/products/iptv-encoders/": "/products/iptv-encoder/",
  "/products/iptv-encoder-encoders/": "/products/iptv-encoder/",
  "/products/iptv-hd-encoder/": "/products/iptv-encoder/",
  "/products/iptv-video-encoder/": "/products/iptv-encoder/",
  "/products/iptv-encoder-box/": "/products/iptv-encoder/",
  "/products/hardware-iptv-encoder/": "/products/iptv-encoder/",
  "/products/hdmi-encoder-iptv/": "/products/hdmi-encoder-for-iptv/",
  "/products/hdmi-iptv-encoder/": "/products/hdmi-encoder-for-iptv/",
  "/products/iptv-hdmi-encoder/": "/products/hdmi-encoder-for-iptv/",
  "/products/iptv-encoder-hdmi/": "/products/hdmi-encoder-for-iptv/",
  "/products/hdmi-to-iptv-encoder/": "/products/hdmi-encoder-for-iptv/",
  "/products/hdmi-iptv/": "/products/hdmi-encoder-for-iptv/",
  "/products/hdmi-to-iptv/": "/products/hdmi-encoder-for-iptv/",
  "/products/hdmi-to-iptv-converter/": "/products/hdmi-encoder-for-iptv/",
  "/products/4k-hdmi-iptv-encoder/": "/products/4k-iptv-encoder/",
  "/products/4k-hevc-iptv-encoder/": "/products/4k-iptv-encoder/",
  "/products/4k-streaming-iptv-encoder/": "/products/4k-iptv-encoder/",
  "/products/iptv-encoder-4k-hevc/": "/products/4k-iptv-encoder/",
  "/products/sdi-to-iptv-encoder/": "/products/sdi-iptv-encoder/",
  "/products/best-rack-mount-encoder-for-iptv/": "/products/rack-mount-iptv-encoder/",
  "/products/best-encoder-for-hotel-iptv/": "/products/iptv-encoder-for-hotel/",
  "/products/what-is-the-best-iptv-encoder/": "/products/best-encoder-for-iptv/",
  "/products/what-is-the-best-video-encoder-for-iptv/": "/products/best-encoder-for-iptv/",
  "/products/recommend-an-hdmi-encoder-for-iptv/": "/products/best-encoder-for-iptv/",
  "/products/suggest-a-budget-iptv-encoder/": "/products/best-encoder-for-iptv/",
  "/products/best-hdmi-to-iptv-encoder/": "/products/best-encoder-for-iptv/",
  "/products/failed-to-authorize-iptv-smarters/": "/products/iptv-smarters-failed-to-authorize/",
  "/products/free-popular-iptv-playlist/": "/products/public-iptv-playlist/",
  "/products/https-iptv-org-github-io-iptv-index-m3u/": "/products/public-iptv-playlist/",
  "/products/m3u/": "/products/m3u-iptv/",
  "/products/iptv-org-2/": "/products/iptv-org/",
  "/products/iptv-org-3/": "/products/iptv-org/",
  "/products/iptv-org-iptv/": "/products/iptv-org/",
  "/products/iptv-smarters/": "/products/iptv-smarters-pro/",
  "/products/iptv-smarters-player/": "/products/iptv-smarters-pro/",
  "/products/iptv-smarters-plus/": "/products/iptv-smarters-pro/",
  "/products/smarters-iptv/": "/products/iptv-smarters-pro/",
  "/products/smarters-iptv-pro/": "/products/iptv-smarters-pro/",
  "/products/iptv-smarter/": "/products/iptv-smarters-pro/",
  "/products/ip-tv/": "/products/what-is-iptv/",
  "/products/iptv-tv/": "/products/what-is-iptv/",
  "/products/iptv-what/": "/products/what-is-iptv/",
  "/products/ip-televizia/": "/products/what-is-iptv/",
  "/products/ip-television/": "/products/what-is-iptv/",
  "/products/internet-protocol-tv/": "/products/what-is-iptv/",
  "/products/iptv-abonnement/": "/products/abonnement-iptv/",
  "/products/best-iptv-provider/": "/products/best-iptv/",
  "/products/best-iptv-providers/": "/products/best-iptv/",
  "/products/best-iptv-service/": "/products/best-iptv/",
  "/products/best-iptv-services/": "/products/best-iptv/",
  "/products/best-iptv-service-reddit/": "/products/best-iptv-reddit/",
  "/products/reddit-best-iptv/": "/products/best-iptv-reddit/",
  "/products/best-iptv-2025/": "/products/best-iptv-service-2026/",
  "/products/iptv-streaming-services/": "/products/iptv-streaming-service/",
  "/products/ip-tv-box/": "/products/iptv-box/",
  "/products/ip-tv-provider/": "/products/best-iptv/"
};

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (file === 'index.html' || file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const allFiles = getAllHtmlFiles(baseDir);
console.log(`Found ${allFiles.length} HTML files.`);

let updatedCount = 0;
let redirectCount = 0;

for (const filePath of allFiles) {
  const relPath = path.relative(baseDir, filePath).replace(/\\/g, '/');
  
  // Skip non-page files
  if (relPath.startsWith('google') || relPath === '404.html') continue;

  let urlPath = '/' + relPath.replace(/index\.html$/, '');
  if (!urlPath.endsWith('/')) urlPath += '/';
  if (urlPath === '//') urlPath = '/';

  // Determine language
  const langMatch = urlPath.match(/^\/(fr|de|es|ar|it|nl|pt|pt-br|pl|ko)(\/|$)/);
  const lang = langMatch ? langMatch[1] : 'en';

  let html = fs.readFileSync(filePath, 'utf8');

  // Check if this is a consolidated page or contains Cookie check
  if (consolidations[urlPath] || html.includes('<title>Cookie check</title>')) {
    const target = consolidations[urlPath] || '/products/';
    const redirectHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <link rel="canonical" href="https://thesmartersiptv.com${target}">
  <meta http-equiv="refresh" content="0; url=${target}">
  <script>window.location.replace('${target}');</script>
</head>
<body style="background:#09090b;color:#a1a1aa;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
  <p>Redirecting to <a href="${target}" style="color:#a78bfa;">${target}</a>...</p>
</body>
</html>`;
    fs.writeFileSync(filePath, redirectHtml, 'utf8');
    redirectCount++;
    continue;
  }

  let modified = false;

  // 1. Ensure modern HeroUI stylesheets and lang toggle script in <head>
  if (!html.includes('/assets/css/heroui.css')) {
    html = html.replace('</head>', '  <link rel="stylesheet" href="/assets/css/heroui.css">\n</head>');
    modified = true;
  }
  if (!html.includes('ais-lang-toggle-init')) {
    const langScript = `<script id="ais-lang-toggle-init">window.__toggleLangMenu=function(e){var d=(e&&e.target&&e.target.closest&&e.target.closest("details.lang-switch"))||document.querySelector("details.lang-switch");if(d){if(e&&e.target&&(e.target.tagName==="SUMMARY"||e.target.closest("summary")))return;d.open=!d.open;}};</script>\n`;
    html = html.replace('</head>', `  ${langScript}</head>`);
    modified = true;
  }
  if (!html.includes('/assets/css/main.css') && !html.includes('/assets/css/runtime.css')) {
    html = html.replace('</head>', '  <link rel="stylesheet" href="/assets/css/main.css">\n</head>');
    modified = true;
  }
  if (urlPath.includes('/products/') && !html.includes('/assets/css/product-pages.css')) {
    html = html.replace('</head>', '  <link rel="stylesheet" href="/assets/css/product-pages.css">\n</head>');
    modified = true;
  }

  // 2. Upgrade Header with canonical HeroUI responsive header
  const universalHeader = generateUniversalHeader(urlPath, lang);
  
  if (html.includes('<header class="kw-header">')) {
    html = html.replace(/<header class="kw-header">[\s\S]*?<\/header>/, universalHeader);
    modified = true;
  } else if (html.includes('<header class="site-header')) {
    html = html.replace(/<header class="site-header[\s\S]*?<\/header>/, universalHeader);
    modified = true;
  }

  // 3. Upgrade Footer with canonical HeroUI responsive footer
  const universalFooter = generateUniversalFooter(lang);
  if (html.includes('<footer') && html.includes('</footer>')) {
    html = html.replace(/<footer[\s\S]*?<\/footer>/, universalFooter);
    modified = true;
  }

  // 4. Ensure site-interactions.js is present for header & mobile menu & details
  if (!html.includes('site-interactions.js')) {
    html = html.replace('</body>', '  <script src="/assets/js/site-interactions.js?v=20260909-lang4" defer></script>\n</body>');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, html, 'utf8');
    updatedCount++;
  }
}

console.log(`Upgraded ${updatedCount} pages with universal HeroUI Header & Footer.`);
console.log(`Created ${redirectCount} clean 301 redirects for consolidated/corrupted pages.`);
