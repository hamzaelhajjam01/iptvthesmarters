import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const sourceDir = path.join(projectRoot, 'Iptv The smarters Pro');

const BASE_URL = 'https://thesmartersiptv.com';
const TODAY = new Date().toISOString().split('T')[0];

// Import consolidated redirect mappings so 301s are NOT in sitemap
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
  "/products/ip-tv-provider/": "/iptv-services/",
  "/products/ip-tv-box/": "/products/iptv-box/",
  "/products/ip-televizia/": "/products/what-is-iptv/",
  "/products/iptv-service/": "/iptv-services/",
  "/products/iptv-services/": "/iptv-services/",
  "/products/iptv-provider/": "/iptv-services/",
  "/products/iptv-service-provider/": "/iptv-services/",
  "/products/iptv-service-providers/": "/iptv-services/",
  "/products/iptv-streaming-services/": "/iptv-services/",
  "/products/best-iptv-service/": "/iptv-services/",
  "/products/best-iptv-services/": "/iptv-services/",
  "/products/best-iptv-provider/": "/iptv-services/",
  "/products/best-iptv-providers/": "/iptv-services/",
  "/products/best-iptv-2025/": "/products/best-iptv/",
  "/products/best-iptv-service-reddit/": "/products/best-iptv/",
  "/products/reddit-iptv/": "/products/best-iptv/",
  "/products/reddit-best-iptv/": "/products/best-iptv/",
  "/products/ptv-stream-player/": "/products/iptv-stream-player/",
  "/products/iptv-github/": "/products/public-iptv-playlist/",
  "/products/watch-nbc-live-iptv/": "/products/watch-nbc-live/",
  "/products/iptv-abonnement/": "/products/abonnement-iptv/"
};

function getAllHtmlFiles(dir, relativeTo = dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(full, relativeTo));
    } else if (file.endsWith('.html')) {
      const rel = path.relative(relativeTo, full).replace(/\\/g, '/');
      results.push(rel);
    }
  }
  return results;
}

const allFiles = getAllHtmlFiles(sourceDir);

// Exclude non-page or verification files
const excluded = ['404.html', 'google676628b207295d06.html'];

const urlEntries = [];

for (const file of allFiles) {
  if (excluded.includes(file)) continue;

  let urlPath = '/' + file;
  if (urlPath.endsWith('/index.html')) {
    urlPath = urlPath.slice(0, -'index.html'.length);
  } else if (urlPath.endsWith('.html')) {
    urlPath = urlPath.slice(0, -'.html'.length) + '/';
  }

  // Skip if this path is a 301 redirect
  if (consolidations[urlPath]) {
    continue;
  }

  // Determine priority & changefreq based on route depth and importance
  let priority = '0.7';
  let changefreq = 'weekly';

  if (urlPath === '/') {
    priority = '1.0';
    changefreq = 'daily';
  } else if (['/channels/', '/pricing/', '/features/', '/contact/'].includes(urlPath)) {
    priority = '0.9';
    changefreq = 'daily';
  } else if (/^\/(fr|de|es|ar|it|nl|pt|pt-br|pl|ko)\/$/.test(urlPath)) {
    priority = '0.9';
    changefreq = 'daily';
  } else if (/^\/(fr|de|es|ar|it|nl|pt|pt-br|pl|ko)\/(pricing|channels|features|contact)\/$/.test(urlPath)) {
    priority = '0.85';
    changefreq = 'weekly';
  } else if (/^\/(fr|de|es|ar|it|nl|pt|pt-br|pl|ko)\/[^\/]+\/$/.test(urlPath)) {
    priority = '0.8';
    changefreq = 'weekly';
  } else if (urlPath.startsWith('/products/')) {
    priority = '0.75';
    changefreq = 'weekly';
  } else if (urlPath.startsWith('/guides/')) {
    priority = '0.8';
    changefreq = 'weekly';
  } else if (['/privacy/', '/terms/', '/refund/'].some(p => urlPath.includes(p))) {
    priority = '0.3';
    changefreq = 'monthly';
  }

  urlEntries.push({
    loc: `${BASE_URL}${urlPath}`,
    priority,
    changefreq,
    lastmod: TODAY
  });
}

// Sort alphabetically by loc
urlEntries.sort((a, b) => a.loc.localeCompare(b.loc));

console.log(`Generating sitemap with ${urlEntries.length} clean, 200 OK canonical URLs...`);

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.map(e => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(sourceDir, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`Successfully generated sitemap.xml with ${urlEntries.length} URLs!`);
