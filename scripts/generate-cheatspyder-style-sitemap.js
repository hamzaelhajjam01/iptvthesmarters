import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const sourceDir = path.join(projectRoot, 'Iptv The smarters Pro');

const BASE_URL = 'https://thesmartersiptv.com';
const TODAY = new Date().toISOString().split('T')[0];

// Read existing URLs from previous sitemap to maintain all paths
const oldSitemap = fs.readFileSync(path.join(sourceDir, 'sitemap.xml'), 'utf8');
const locMatches = (oldSitemap.match(/<loc>([\s\S]*?)<\/loc>/g) || []).map(l => l.replace(/<\/?loc>/g, '').trim());

// Unique clean list
const allUrls = Array.from(new Set(locMatches)).sort();

const pages = [];
const guides = [];
const products = [];
const legal = [];

for (const url of allUrls) {
  if (url.includes('/privacy/') || url.includes('/terms/') || url.includes('/refund/')) {
    legal.push(url);
  } else if (url.includes('/guides/')) {
    guides.push(url);
  } else if (url.includes('/products/')) {
    products.push(url);
  } else {
    pages.push(url);
  }
}

function getPriority(url) {
  if (url === `${BASE_URL}/`) return { prio: '1.0', freq: 'daily' };
  if (url.endsWith('/pricing/')) return { prio: '0.9', freq: 'daily' };
  if (/^https:\/\/thesmartersiptv\.com\/[a-z-]+\/$/.test(url)) return { prio: '0.9', freq: 'daily' };
  if (url.includes('/channels/') || url.includes('/features/')) return { prio: '0.8', freq: 'weekly' };
  if (url.includes('/guides/')) return { prio: '0.85', freq: 'weekly' };
  if (url.includes('/products/')) return { prio: '0.7', freq: 'weekly' };
  if (url.includes('/privacy/') || url.includes('/terms/') || url.includes('/refund/')) return { prio: '0.4', freq: 'monthly' };
  return { prio: '0.7', freq: 'weekly' };
}

function buildSubSitemapXml(urls) {
  const urlEntries = urls.map(u => {
    const { prio, freq } = getPriority(u);
    return `  <url>
    <loc>${u}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${prio}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`;
}

// 1. Write sub-sitemaps
fs.writeFileSync(path.join(sourceDir, 'sitemap-pages.xml'), buildSubSitemapXml(pages), 'utf8');
console.log(`✅ Generated sitemap-pages.xml (${pages.length} URLs)`);

fs.writeFileSync(path.join(sourceDir, 'sitemap-guides.xml'), buildSubSitemapXml(guides), 'utf8');
console.log(`✅ Generated sitemap-guides.xml (${guides.length} URLs)`);

fs.writeFileSync(path.join(sourceDir, 'sitemap-products.xml'), buildSubSitemapXml(products), 'utf8');
console.log(`✅ Generated sitemap-products.xml (${products.length} URLs)`);

fs.writeFileSync(path.join(sourceDir, 'sitemap-legal.xml'), buildSubSitemapXml(legal), 'utf8');
console.log(`✅ Generated sitemap-legal.xml (${legal.length} URLs)`);

// 2. Write Master Sitemap Index
const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap-pages.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-guides.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-products.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-legal.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
</sitemapindex>`;

fs.writeFileSync(path.join(sourceDir, 'sitemap.xml'), indexXml, 'utf8');
console.log(`✅ Generated master sitemap.xml (Sitemap Index referencing 4 modular sub-sitemaps)`);

// 3. Update robots.txt
const robotsTxt = `User-agent: *
Allow: /

User-agent: GPTBot
User-agent: ClaudeBot
User-agent: PerplexityBot
User-agent: Google-Extended
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
Sitemap: ${BASE_URL}/sitemap-pages.xml
Sitemap: ${BASE_URL}/sitemap-guides.xml
Sitemap: ${BASE_URL}/sitemap-products.xml
Sitemap: ${BASE_URL}/sitemap-legal.xml
`;

fs.writeFileSync(path.join(sourceDir, 'robots.txt'), robotsTxt, 'utf8');
console.log(`✅ Updated robots.txt with all sitemap references and AI crawler rules`);
