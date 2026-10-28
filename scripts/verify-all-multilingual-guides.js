import http from 'node:http';

const testUrls = [
  // Hubs
  '/guides/',
  '/fr/guides/',
  '/de/guides/',
  '/es/guides/',
  '/ar/guides/',
  '/it/guides/',
  '/nl/guides/',
  '/pt/guides/',
  '/pt-br/guides/',
  '/pl/guides/',
  '/ko/guides/',

  // English sample guides
  '/guides/install-iptv-smarters-pro-on-firestick/',
  '/guides/how-to-set-up-xtream-codes-iptv-smarters-pro/',
  '/guides/iptv-smarters-pro-failed-to-authorize-fix/',

  // Localized sample guides
  '/fr/guides/install-iptv-smarters-pro-on-firestick/',
  '/de/guides/iptv-smarters-pro-keeps-buffering-fixes/',
  '/es/guides/how-to-set-up-xtream-codes-iptv-smarters-pro/',
  '/ar/guides/install-iptv-smarters-pro-on-firestick/',
  '/it/guides/iptv-smarters-pro-on-samsung-lg-smart-tvs/',
  '/nl/guides/how-to-activate-iptv-smarters-pro/',
  '/pt/guides/how-to-add-m3u-playlist-iptv-smarters-pro/',
  '/pt-br/guides/is-iptv-smarters-pro-free/',
  '/pl/guides/best-iptv-subscriptions-for-smarters-pro/',
  '/ko/guides/iptv-smarters-pro-failed-to-authorize-fix/',

  // Sitemaps & Robots
  '/sitemap.xml',
  '/sitemap-guides.xml',
  '/sitemap-pages.xml',
  '/sitemap-products.xml',
  '/sitemap-legal.xml',
  '/sitemap.xsl',
  '/robots.txt'
];

function fetchStatus(path) {
  return new Promise((resolve) => {
    http.get(`http://127.0.0.1:3000${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          path,
          statusCode: res.statusCode,
          contentType: res.headers['content-type'] || '',
          contentLength: data.length,
          hasHerouiCallout: data.includes('heroui-callout'),
          hasHreflang: data.includes('hreflang="fr"'),
          hasJsonLd: data.includes('application/ld+json'),
          hasRtl: data.includes('dir="rtl"')
        });
      });
    }).on('error', (err) => {
      resolve({ path, statusCode: 500, error: err.message });
    });
  });
}

async function run() {
  console.log(`Starting Verification across ${testUrls.length} critical endpoints on local server...`);
  let errors = 0;

  for (const url of testUrls) {
    const res = await fetchStatus(url);
    if (res.statusCode === 200) {
      const details = [];
      if (res.hasHerouiCallout) details.push('HeroUI Callout');
      if (res.hasHreflang) details.push('11 Hreflangs');
      if (res.hasJsonLd) details.push('JSON-LD Schema');
      if (res.hasRtl) details.push('RTL Mode');
      console.log(`✅ [200 OK] ${url.padEnd(55)} (${res.contentLength} bytes) ${details.length ? `[${details.join(', ')}]` : ''}`);
    } else {
      errors++;
      console.error(`❌ [${res.statusCode}] ${url} - Error or missing!`);
    }
  }

  if (errors === 0) {
    console.log(`\n🎉 ALL ${testUrls.length} ENDPOINTS RETURNED 200 OK! Zero broken paths.`);
  } else {
    console.error(`\n⚠️ Encountered ${errors} errors.`);
    process.exit(1);
  }
}

run();
