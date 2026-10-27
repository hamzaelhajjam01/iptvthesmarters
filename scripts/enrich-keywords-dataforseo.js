import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { callDataForSEO } from './dataforseo-client.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const sourceDir = path.join(projectRoot, 'Iptv The smarters Pro');

const csvPath = path.join(sourceDir, 'input-keywords.csv');
const enrichedJsonPath = path.join(sourceDir, 'dataforseo-keywords.json');

// Parse clean keywords from input-keywords.csv
function getKeywordsFromCsv() {
  const content = fs.readFileSync(csvPath, 'utf8');
  const lines = content.split('\n').filter(l => l.trim());
  const keywords = [];
  
  for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].split(',');
    const rawKw = (parts[1] || parts[0]).replace(/[\u200B-\u200D\uFEFF]/g, '').trim();
    if (rawKw && !keywords.includes(rawKw)) {
      keywords.push(rawKw);
    }
  }
  return keywords;
}

// Bulk fetch keyword metrics from DataForSEO in batches of 50
async function fetchAllKeywordMetrics(keywords) {
  console.log(`Starting DataForSEO bulk metrics fetch for ${keywords.length} keywords...`);
  const batchSize = 50;
  const resultsMap = {};

  for (let i = 0; i < keywords.length; i += batchSize) {
    const chunk = keywords.slice(i, i + batchSize);
    console.log(`Fetching batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(keywords.length / batchSize)} (${chunk.length} keywords)...`);

    try {
      const payload = [{
        keywords: chunk,
        location_code: 2840, // United States
        language_code: 'en'
      }];

      const res = await callDataForSEO('/v3/dataforseo_labs/google/historical_search_volume/live', payload);
      const items = res.tasks?.[0]?.result?.[0]?.items || [];

      for (const item of items) {
        if (!item || !item.keyword) continue;
        resultsMap[item.keyword.toLowerCase()] = {
          keyword: item.keyword,
          search_volume: item.keyword_info?.search_volume || 0,
          competition_level: item.keyword_info?.competition_level || 'LOW',
          cpc: item.keyword_info?.cpc || 0,
          keyword_difficulty: item.keyword_properties?.keyword_difficulty || 0,
          intent: item.search_intent_info?.main_intent || 'commercial'
        };
      }
    } catch (err) {
      console.error(`Error fetching batch starting at index ${i}:`, err.message);
    }

    // Brief delay between batches to respect rate limits
    await new Promise(r => setTimeout(r, 600));
  }

  return resultsMap;
}

// Query SERP / People Also Ask questions for top seed queries
async function fetchSerpPaaQuestions(seedKeywords) {
  console.log(`Fetching live SERP competitor questions & PAA for ${seedKeywords.length} top topics...`);
  const questionsMap = {};

  for (const seed of seedKeywords) {
    try {
      const payload = [{
        keyword: seed,
        location_code: 2840,
        language_code: 'en',
        depth: 10
      }];

      const res = await callDataForSEO('/v3/serp/google/organic/live/regular', payload);
      const items = res.tasks?.[0]?.result?.[0]?.items || [];
      const paa = items.filter(x => x.type === 'people_also_ask');

      const questions = [];
      if (paa[0]?.items) {
        for (const p of paa[0].items) {
          if (p.title && !questions.includes(p.title)) {
            questions.push({
              question: p.title,
              answer: p.description || null
            });
          }
        }
      }

      questionsMap[seed.toLowerCase()] = questions;
      console.log(`- Retrieved ${questions.length} live Google PAA questions for: "${seed}"`);
    } catch (err) {
      console.error(`Error querying SERP for "${seed}":`, err.message);
    }

    await new Promise(r => setTimeout(r, 600));
  }

  return questionsMap;
}

async function run() {
  const keywords = getKeywordsFromCsv();
  console.log(`Extracted ${keywords.length} keywords from input-keywords.csv`);

  // 1. Fetch live metrics
  const metrics = await fetchAllKeywordMetrics(keywords);

  // 2. Fetch SERP PAA for top target keywords
  const topSeeds = [
    'iptv smarters pro',
    'iptv smarters failed to authorize',
    'best iptv service',
    'iptv subscription',
    'install iptv smarters pro on firestick'
  ];
  const paaQuestions = await fetchSerpPaaQuestions(topSeeds);

  // 3. Save comprehensive JSON report
  const outputData = {
    updated_at: new Date().toISOString(),
    total_keywords: keywords.length,
    metrics: metrics,
    serp_questions: paaQuestions
  };

  fs.writeFileSync(enrichedJsonPath, JSON.stringify(outputData, null, 2), 'utf8');
  console.log(`\nSuccessfully saved enriched DataForSEO keyword dataset to ${enrichedJsonPath}`);

  // 4. Update input-keywords.csv with live volumes and KD
  console.log('Updating input-keywords.csv with verified live metrics...');
  const originalCsvLines = fs.readFileSync(csvPath, 'utf8').split('\n');
  const updatedLines = [];
  updatedLines.push(originalCsvLines[0]); // Header

  let updatedCount = 0;
  for (let i = 1; i < originalCsvLines.length; i++) {
    const line = originalCsvLines[i];
    if (!line.trim()) continue;

    const parts = line.split(',');
    const rawKw = (parts[1] || parts[0]).replace(/[\u200B-\u200D\uFEFF]/g, '').trim();
    const data = metrics[rawKw.toLowerCase()];

    if (data) {
      // Index 5: Volume, Index 9: KD %, Index 10: CPC (USD), Index 14: Updated
      parts[5] = `"${data.search_volume.toLocaleString()}"`;
      parts[9] = data.keyword_difficulty;
      if (data.cpc) parts[10] = data.cpc.toFixed(2);
      parts[14] = 'DataForSEO Live';
      updatedLines.push(parts.join(','));
      updatedCount++;
    } else {
      updatedLines.push(line);
    }
  }

  fs.writeFileSync(csvPath, updatedLines.join('\n'), 'utf8');
  console.log(`Updated ${updatedCount} rows in input-keywords.csv with verified live data!`);
}

run().catch(console.error);
