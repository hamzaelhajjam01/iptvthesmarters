/**
 * IndexNow Batch Submitter for The Smarters IPTV
 * Submits all sitemap URLs to Bing IndexNow API & IndexNow.org
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const HOST = 'thesmartersiptv.com';
const API_KEY = '1b78916c08b6be747b3fa246ca892395';
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;

// Sitemaps to extract URLs from
const SITEMAP_FILES = [
  path.join(__dirname, '../public/sitemap-pages.xml'),
  path.join(__dirname, '../public/sitemap-products.xml'),
  path.join(__dirname, '../public/sitemap-guides.xml'),
  path.join(__dirname, '../public/sitemap-legal.xml'),
  path.join(__dirname, '../Iptv The smarters Pro/sitemap-pages.xml'),
  path.join(__dirname, '../Iptv The smarters Pro/sitemap-products.xml'),
  path.join(__dirname, '../Iptv The smarters Pro/sitemap-guides.xml'),
  path.join(__dirname, '../Iptv The smarters Pro/sitemap-legal.xml')
];

// Core URLs that must always be included
const CORE_URLS = [
  `https://${HOST}/`,
  `https://${HOST}/pricing/`,
  `https://${HOST}/features/`,
  `https://${HOST}/channels/`,
  `https://${HOST}/iptv-services/`,
  `https://${HOST}/guides/`,
  `https://${HOST}/contact/`,
  `https://${HOST}/privacy/`,
  `https://${HOST}/terms/`,
  `https://${HOST}/refund/`
];

function extractUrlsFromXml(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = [...content.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)];
  return matches.map((m) => m[1].trim());
}

async function sendIndexNowRequest(endpointUrl, payload) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(endpointUrl);
    const dataString = JSON.stringify(payload);

    const options = {
      hostname: urlObj.hostname,
      port: 443,
      path: urlObj.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(dataString),
        'User-Agent': 'TheSmartersIPTV-IndexNow/1.0'
      },
      timeout: 20000
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        resolve({
          endpoint: endpointUrl,
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
          body: body || null
        });
      });
    });

    req.on('error', (err) => {
      reject({
        endpoint: endpointUrl,
        error: err.message
      });
    });

    req.on('timeout', () => {
      req.destroy();
      reject({
        endpoint: endpointUrl,
        error: 'Request timed out after 20s'
      });
    });

    req.write(dataString);
    req.end();
  });
}

async function main() {
  console.log('='.repeat(65));
  console.log('⚡ INDEXNOW PUSH — MICROSOFT BING & INDEXNOW.ORG');
  console.log('='.repeat(65));
  console.log(`Host:         ${HOST}`);
  console.log(`API Key:      ${API_KEY}`);
  console.log(`Key Location: ${KEY_LOCATION}`);
  console.log('-'.repeat(65));

  // 1. Gather all URLs
  const urlSet = new Set(CORE_URLS);
  for (const file of SITEMAP_FILES) {
    const found = extractUrlsFromXml(file);
    found.forEach((u) => {
      if (u.startsWith(`https://${HOST}`)) {
        urlSet.add(u);
      }
    });
  }

  const urlList = Array.from(urlSet).sort();
  console.log(`Found ${urlList.length} unique URLs to index across all sitemaps.`);

  // 2. Prepare Payload
  const payload = {
    host: HOST,
    key: API_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList
  };

  // 3. Endpoints to notify (Bing + Central IndexNow Gateway)
  const endpoints = [
    'https://www.bing.com/indexnow',
    'https://api.indexnow.org/indexnow'
  ];

  const results = [];

  for (const endpoint of endpoints) {
    console.log(`\nSubmitting ${urlList.length} URLs to: ${endpoint} ...`);
    try {
      const response = await sendIndexNowRequest(endpoint, payload);
      console.log(`➜ Status: [${response.statusCode}] ${response.statusMessage || ''}`);
      if (response.body) {
        console.log(`➜ Response Body: ${response.body}`);
      }

      if (response.statusCode === 200) {
        console.log('✅ URLs submitted successfully (HTTP 200 OK)');
      } else if (response.statusCode === 202) {
        console.log('✅ Key is valid, URLs accepted and queued for indexing (HTTP 202 Accepted)');
      } else if (response.statusCode === 400) {
        console.log('⚠️ HTTP 400: Invalid format');
      } else if (response.statusCode === 403) {
        console.log('⚠️ HTTP 403: Key not valid or key file not found at keyLocation yet');
      } else if (response.statusCode === 422) {
        console.log('⚠️ HTTP 422: URLs do not belong to host');
      }

      results.push(response);
    } catch (err) {
      console.error(`❌ Error submitting to ${endpoint}:`, err);
      results.push(err);
    }
  }

  // 4. Save report
  const report = {
    timestamp: new Date().toISOString(),
    host: HOST,
    apiKey: API_KEY,
    keyLocation: KEY_LOCATION,
    totalUrls: urlList.length,
    results: results,
    sampleUrls: urlList.slice(0, 15)
  };

  const reportPath = path.join(__dirname, '../indexnow-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
  console.log(`\n📄 Detailed submission report saved to: indexnow-report.json`);
  console.log('='.repeat(65));
}

main().catch(console.error);
