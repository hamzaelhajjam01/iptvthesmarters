import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const sourceDir = path.join(projectRoot, 'Iptv The smarters Pro');

const BASE_URL = 'https://iptv-the-smarters-pro.ai.studio';
const TODAY = '2026-10-19';

// 1. Core pages
const coreUrls = [
  { path: '/', priority: '1.0', changefreq: 'daily', lastmod: TODAY },
  { path: '/channels/', priority: '0.9', changefreq: 'daily', lastmod: TODAY },
  { path: '/pricing/', priority: '0.9', changefreq: 'daily', lastmod: TODAY },
  { path: '/features/', priority: '0.8', changefreq: 'weekly', lastmod: TODAY },
  { path: '/contact/', priority: '0.8', changefreq: 'weekly', lastmod: TODAY },
  { path: '/privacy/', priority: '0.5', changefreq: 'monthly', lastmod: '2026-09-17' },
  { path: '/terms/', priority: '0.5', changefreq: 'monthly', lastmod: '2026-09-17' },
  { path: '/refund/', priority: '0.5', changefreq: 'monthly', lastmod: '2026-09-17' }
];

// 2. Language homepages
const langDirs = ['ar', 'de', 'es', 'fr', 'it', 'ko', 'nl', 'pl', 'pt', 'pt-br'];
const langUrls = langDirs.map(l => ({
  path: `/${l}/`,
  priority: '0.8',
  changefreq: 'weekly',
  lastmod: TODAY
}));

// 3. IPTV Services
const serviceDirs = ['', 'sports-iptv-providers', 'smart-tv-providers', 'xtream-codes-providers', '4k-streaming-providers', 'live-tv-vod-providers'];
const serviceUrls = serviceDirs.map(s => ({
  path: s ? `/iptv-services/${s}/` : `/iptv-services/`,
  priority: s ? '0.8' : '0.9',
  changefreq: s ? 'weekly' : 'daily',
  lastmod: TODAY
}));

// 4. Guides
const guideSubdirs = fs.readdirSync(path.join(sourceDir, 'guides')).filter(f => {
  return fs.statSync(path.join(sourceDir, 'guides', f)).isDirectory();
}).sort();

const guideUrls = [
  { path: '/guides/', priority: '0.9', changefreq: 'daily', lastmod: TODAY },
  ...guideSubdirs.map(g => ({
    path: `/guides/${g}/`,
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: TODAY
  }))
];

// 5. Products: Directory + 117 Retained Enriched Product Pages
const km = JSON.parse(fs.readFileSync(path.join(sourceDir, 'keyword-map.json'), 'utf8'));

// Consolidation map
const consolidations = {
  // Encoder hardware (26)
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
  // Troubleshooting (1)
  "/products/failed-to-authorize-iptv-smarters/": "/products/iptv-smarters-failed-to-authorize/",
  // Playlist and login (3)
  "/products/free-popular-iptv-playlist/": "/products/public-iptv-playlist/",
  "/products/https-iptv-org-github-io-iptv-index-m3u/": "/products/public-iptv-playlist/",
  "/products/m3u/": "/products/m3u-iptv/",
  // IPTV Education & Brand variations (21)
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
  "/products/internet-protocol-tv/": "/products/internet-protocol-television/",
  "/products/ip-television/": "/products/internet-protocol-television/",
  "/products/xtreme-iptv/": "/products/xtremehd-iptv/",
  "/products/xtremhd-iptv/": "/products/xtremehd-iptv/",
  "/products/iptv-github/": "/products/github-iptv/",
  "/products/reddit-iptv/": "/products/iptv-reddit/",
  "/products/ip-televizia/": "/products/ip-televizija/",
  "/products/ptv-stream-player/": "/products/iptv-stream-player/",
  "/products/iptv-abonnement/": "/products/abonnement-iptv/",
  "/products/watch-nbc-live-iptv/": "/products/nbc-tv-show-live-stream-free-iptv/",
  // Plans and Providers (15)
  "/products/iptv-services/": "/iptv-services/",
  "/products/iptv-service/": "/iptv-services/",
  "/products/iptv-provider/": "/products/iptv-providers/",
  "/products/iptv-service-providers/": "/products/iptv-providers/",
  "/products/iptv-service-provider/": "/products/iptv-providers/",
  "/products/ip-tv-provider/": "/products/iptv-providers/",
  "/products/best-iptv-services/": "/products/best-iptv/",
  "/products/best-iptv-providers/": "/products/best-iptv/",
  "/products/best-iptv-provider/": "/products/best-iptv/",
  "/products/best-iptv-service/": "/products/best-iptv/",
  "/products/best-iptv-service-reddit/": "/products/best-iptv-reddit/",
  "/products/reddit-best-iptv/": "/products/best-iptv-reddit/",
  "/products/best-iptv-2025/": "/products/best-iptv-service-2026/",
  "/products/iptv-streaming-services/": "/products/iptv-streaming-service/",
  "/products/ip-tv-box/": "/products/iptv-box/"
};

const retainedKm = km.filter(k => !consolidations[k.path]);

const productUrls = [
  { path: '/products/', priority: '0.9', changefreq: 'daily', lastmod: TODAY },
  ...retainedKm.map(k => ({
    path: k.path,
    priority: '0.7',
    changefreq: 'weekly',
    lastmod: TODAY
  }))
];

// Combine all valid indexable URLs
const allEntries = [
  ...coreUrls,
  ...langUrls,
  ...serviceUrls,
  ...guideUrls,
  ...productUrls
];

console.log(`Generating sitemap with ${allEntries.length} verified, indexable URLs...`);

const xmlLines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
];

for (const entry of allEntries) {
  xmlLines.push('  <url>');
  xmlLines.push(`    <loc>${BASE_URL}${entry.path}</loc>`);
  xmlLines.push(`    <lastmod>${entry.lastmod}</lastmod>`);
  xmlLines.push(`    <changefreq>${entry.changefreq}</changefreq>`);
  xmlLines.push(`    <priority>${entry.priority}</priority>`);
  xmlLines.push('  </url>');
}

xmlLines.push('</urlset>');
xmlLines.push('');

const sitemapOutput = xmlLines.join('\n');
fs.writeFileSync(path.join(sourceDir, 'sitemap.xml'), sitemapOutput, 'utf8');

console.log(`Successfully generated sitemap.xml with ${allEntries.length} URLs!`);
console.log(`Breakdown:`);
console.log(`- Core Pages: ${coreUrls.length}`);
console.log(`- Translations: ${langUrls.length}`);
console.log(`- IPTV Services: ${serviceUrls.length}`);
console.log(`- Guides: ${guideUrls.length}`);
console.log(`- Products: ${productUrls.length} (1 directory + ${retainedKm.length} retained pages)`);
console.log(`- Consolidated URLs excluded: ${Object.keys(consolidations).length}`);
process.exit(0);
