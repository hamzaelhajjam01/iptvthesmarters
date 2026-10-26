import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

// Load environment variables from .env.local if present
function loadEnv() {
  const envPath = path.join(projectRoot, '.env.local');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const idx = trimmed.indexOf('=');
      if (idx !== -1) {
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim();
        process.env[key] = val;
      }
    }
  }
}
loadEnv();

const DATAFORSEO_API_KEY = process.env.DATAFORSEO_API_KEY;
if (!DATAFORSEO_API_KEY) {
  console.error('Missing DATAFORSEO_API_KEY in .env.local');
  process.exit(1);
}

/**
 * Generic caller for DataForSEO v3 API
 */
export async function callDataForSEO(endpoint, payload) {
  const url = `https://api.dataforseo.com${endpoint}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${DATAFORSEO_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  if (data.status_code !== 20000) {
    throw new Error(`DataForSEO API Error [${data.status_code}]: ${data.status_message}`);
  }
  return data;
}

/**
 * Fetch keyword ideas, search volumes, KD, and CPC for seed keywords
 */
export async function getKeywordIdeas(seedKeywords, locationCode = 2840, languageCode = 'en', limit = 10) {
  const payload = [{
    keywords: seedKeywords,
    location_code: locationCode,
    language_code: languageCode,
    limit: limit,
    order_by: ['keyword_info.search_volume,desc']
  }];

  const data = await callDataForSEO('/v3/dataforseo_labs/google/keyword_ideas/live', payload);
  return data.tasks?.[0]?.result?.[0]?.items || [];
}

/**
 * Fetch live SERP data for a keyword (top 10 competitors, titles, snippets, PAA)
 */
export async function getSerpResults(keyword, locationCode = 2840, languageCode = 'en') {
  const payload = [{
    keyword: keyword,
    location_code: locationCode,
    language_code: languageCode,
    device: 'desktop',
    os: 'windows',
    depth: 10
  }];

  const data = await callDataForSEO('/v3/serp/google/organic/live/regular', payload);
  return data.tasks?.[0]?.result?.[0] || null;
}

// Quick CLI runner if called directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log('Testing DataForSEO Client...');
  getKeywordIdeas(['iptv smarters download', 'firestick iptv setup'], 2840, 'en', 5)
    .then(items => {
      console.log(`Successfully fetched ${items.length} keyword suggestions:`);
      for (const item of items) {
        console.log(`- ${item.keyword} | Vol: ${item.keyword_info?.search_volume} | KD: ${item.keyword_properties?.keyword_difficulty} | CPC: $${item.keyword_info?.cpc || 0}`);
      }
    })
    .catch(console.error);
}
