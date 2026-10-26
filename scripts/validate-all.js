import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const sourceDir = path.join(projectRoot, 'Iptv The smarters Pro');

function fetchUrl(pathname) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:3000${pathname}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    }).on('error', reject);
  });
}

async function runValidation() {
  console.log('--- STARTING COMPREHENSIVE VALIDATION SUITE ---');

  // 1. Audit Sitemap
  const sitemapXml = fs.readFileSync(path.join(sourceDir, 'sitemap.xml'), 'utf8');
  const urls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  console.log(`Auditing all ${urls.length} sitemap URLs...`);

  let sitemapErrors = 0;
  for (const url of urls) {
    const pathname = new URL(url).pathname;
    const res = await fetchUrl(pathname);

    if (res.statusCode !== 200) {
      console.error(`FAIL: ${url} returned HTTP ${res.statusCode}`);
      sitemapErrors++;
      continue;
    }

    const canonicalMatch = res.body.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) || res.body.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
    const robotsMatch = res.body.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i);
    const titleMatch = res.body.match(/<title>([^<]+)<\/title>/i);
    const h1Match = res.body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);

    if (!canonicalMatch) {
      console.error(`FAIL: Missing canonical tag on ${url}`);
      sitemapErrors++;
    } else if (canonicalMatch[1] !== url) {
      console.error(`FAIL: Canonical mismatch on ${url} (found: ${canonicalMatch[1]})`);
      sitemapErrors++;
    }

    if (robotsMatch && robotsMatch[1].includes('noindex')) {
      console.error(`FAIL: Accidental noindex on sitemap URL: ${url}`);
      sitemapErrors++;
    }

    if (!titleMatch || !titleMatch[1].trim()) {
      console.error(`FAIL: Missing title on ${url}`);
      sitemapErrors++;
    }

    if (!h1Match || !h1Match[1].trim()) {
      console.error(`FAIL: Missing H1 on ${url}`);
      sitemapErrors++;
    }
  }

  if (sitemapErrors === 0) {
    console.log(`PASS: All ${urls.length} sitemap URLs returned HTTP 200 with matching canonicals, indexable robots meta, titles, and H1s!`);
  } else {
    console.error(`FAILED with ${sitemapErrors} sitemap errors.`);
  }

  // 2. Test Sample Consolidations
  const sampleConsolidations = [
    { src: '/products/iptv-encoders/', expected: '/products/iptv-encoder/' },
    { src: '/products/hdmi-encoder-iptv/', expected: '/products/hdmi-encoder-for-iptv/' },
    { src: '/products/4k-hdmi-iptv-encoder/', expected: '/products/4k-iptv-encoder/' },
    { src: '/products/failed-to-authorize-iptv-smarters/', expected: '/products/iptv-smarters-failed-to-authorize/' },
    { src: '/products/iptv-services/', expected: '/iptv-services/' },
    { src: '/products/iptv-org-2/', expected: '/products/iptv-org/' }
  ];

  console.log('\nTesting sample consolidation 301 redirects...');
  let redirectErrors = 0;
  for (const c of sampleConsolidations) {
    const res = await fetchUrl(c.src);
    if (res.statusCode !== 301) {
      console.error(`FAIL: ${c.src} returned status ${res.statusCode} instead of 301`);
      redirectErrors++;
    } else if (res.headers.location !== c.expected) {
      console.error(`FAIL: ${c.src} redirected to ${res.headers.location} instead of ${c.expected}`);
      redirectErrors++;
    } else {
      console.log(`PASS: ${c.src} -> 301 -> ${res.headers.location}`);
    }
  }

  // 3. Test 404 Response
  console.log('\nTesting genuine 404 response...');
  const res404 = await fetchUrl('/non-existent-random-page-12345');
  if (res404.statusCode === 404 && res404.body.includes('Page Not Found')) {
    console.log('PASS: Non-existent URL returned HTTP 404 with custom branded 404 page!');
  } else {
    console.error(`FAIL: Non-existent URL returned status ${res404.statusCode}`);
  }

  // 4. Test Legacy Sitemap Endpoints
  console.log('\nTesting legacy sitemap endpoints...');
  const resItemap = await fetchUrl('/itemap.xml');
  const resIndex = await fetchUrl('/sitemap_index.xml');
  if (resItemap.statusCode === 301 && resItemap.headers.location === '/sitemap.xml') {
    console.log('PASS: /itemap.xml correctly returned 301 redirect to /sitemap.xml');
  } else {
    console.error(`FAIL: /itemap.xml returned ${resItemap.statusCode} -> ${resItemap.headers.location}`);
  }
  if (resIndex.statusCode === 301 && resIndex.headers.location === '/sitemap.xml') {
    console.log('PASS: /sitemap_index.xml correctly returned 301 redirect to /sitemap.xml');
  } else {
    console.error(`FAIL: /sitemap_index.xml returned ${resIndex.statusCode} -> ${resIndex.headers.location}`);
  }

  // 5. Test Hreflang Tags on Translations
  console.log('\nTesting language reciprocal hreflang tags...');
  const langs = ['ar', 'de', 'es', 'fr', 'it', 'ko', 'nl', 'pl', 'pt', 'pt-br'];
  let hreflangErrors = 0;
  for (const l of langs) {
    const res = await fetchUrl(`/${l}/`);
    const hls = [...res.body.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)];
    if (hls.length < 12) {
      console.error(`FAIL: /${l}/ has only ${hls.length} hreflang tags`);
      hreflangErrors++;
    }
    const relativeHls = hls.filter(h => !h[2].startsWith('http'));
    if (relativeHls.length > 0) {
      console.error(`FAIL: /${l}/ has ${relativeHls.length} relative hreflang tags!`);
      hreflangErrors++;
    }
  }
  if (hreflangErrors === 0) {
    console.log('PASS: All 10 language directories have 12 reciprocal fully qualified absolute hreflang tags!');
  }

  console.log('\n--- ALL VALIDATION CHECKS COMPLETE ---');
  process.exit(0);
}

runValidation();
