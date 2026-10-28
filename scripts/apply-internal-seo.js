import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const sourceDir = path.join(projectRoot, 'Iptv The smarters Pro');

console.log('=== APPLYING INTERNAL SEO ENHANCEMENTS (LOCAL ONLY) ===\n');

// -------------------------------------------------------------
// 1. OPTIMIZE ROOT HOMEPAGE (index.html)
// -------------------------------------------------------------
const homePath = path.join(sourceDir, 'index.html');
if (fs.existsSync(homePath)) {
  let homeHtml = fs.readFileSync(homePath, 'utf8');

  const newHomeTitle = 'The Smarters IPTV — Best IPTV Smarters Pro 4K Subscription (2026)';
  const newHomeDesc = 'Official setup guides and top-rated IPTV Smarters Pro 4K subscription. Stream 25,000+ live channels, 100,000+ VOD movies with anti-freeze and instant Xtream Codes activation.';

  homeHtml = homeHtml.replace(/<title>[\s\S]*?<\/title>/i, `<title>${newHomeTitle}</title>`);
  homeHtml = homeHtml.replace(/<meta\s+name=["']title["']\s+content=["'][\s\S]*?["']/i, `<meta name="title" content="${newHomeTitle}">`);
  homeHtml = homeHtml.replace(/<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']/i, `<meta property="og:title" content="${newHomeTitle}">`);
  homeHtml = homeHtml.replace(/<meta\s+property=["']twitter:title["']\s+content=["'][\s\S]*?["']/i, `<meta property="twitter:title" content="${newHomeTitle}">`);

  homeHtml = homeHtml.replace(/<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']/i, `<meta name="description" content="${newHomeDesc}">`);
  homeHtml = homeHtml.replace(/<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']/i, `<meta property="og:description" content="${newHomeDesc}">`);
  homeHtml = homeHtml.replace(/<meta\s+property=["']twitter:description["']\s+content=["'][\s\S]*?["']/i, `<meta property="twitter:description" content="${newHomeDesc}">`);

  fs.writeFileSync(homePath, homeHtml, 'utf8');
  console.log('✅ 1. Homepage SEO metadata optimized with DataForSEO KD 3 keywords.');
}

// -------------------------------------------------------------
// 2. OPTIMIZE ROOT PRICING PAGE (pricing/index.html)
// -------------------------------------------------------------
const pricingPath = path.join(sourceDir, 'pricing', 'index.html');
if (fs.existsSync(pricingPath)) {
  let pricingHtml = fs.readFileSync(pricingPath, 'utf8');

  const newPricingTitle = 'Buy IPTV Smarters Pro 4K Subscription — Best Pricing Plans 2026';
  const newPricingDesc = 'Choose from top-rated IPTV Smarters Pro 4K subscription plans starting from $14.95. Over 25,000 live channels, 100,000+ VOD movies, anti-freeze & instant Xtream Codes activation.';

  pricingHtml = pricingHtml.replace(/<title>[\s\S]*?<\/title>/i, `<title>${newPricingTitle}</title>`);
  pricingHtml = pricingHtml.replace(/<meta\s+name=["']title["']\s+content=["'][\s\S]*?["']/i, `<meta name="title" content="${newPricingTitle}">`);
  pricingHtml = pricingHtml.replace(/<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']/i, `<meta property="og:title" content="${newPricingTitle}">`);
  pricingHtml = pricingHtml.replace(/<meta\s+property=["']twitter:title["']\s+content=["'][\s\S]*?["']/i, `<meta property="twitter:title" content="${newPricingTitle}">`);

  pricingHtml = pricingHtml.replace(/<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']/i, `<meta name="description" content="${newPricingDesc}">`);
  pricingHtml = pricingHtml.replace(/<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']/i, `<meta property="og:description" content="${newPricingDesc}">`);
  pricingHtml = pricingHtml.replace(/<meta\s+property=["']twitter:description["']\s+content=["'][\s\S]*?["']/i, `<meta property="twitter:description" content="${newPricingDesc}">`);

  // Upgrade H1
  pricingHtml = pricingHtml.replace(
    /<h1[^>]*>[\s\S]*?<\/h1>/i,
    `<h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Top-Rated IPTV Smarters Pro <br class="hidden md:block"><span class="text-gradient">Plans &amp; Pricing</span></h1>`
  );

  // Add keyword badges if not present
  if (!pricingHtml.includes('Best IPTV 2026')) {
    const badgesHtml = `
          <!-- DataForSEO High-Intent Keyword Badges -->
          <div class="flex flex-wrap items-center justify-center gap-2 mt-6 max-w-3xl mx-auto">
            <span class="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-purple-950/70 text-purple-200 border border-purple-800/40 shadow-sm">Best IPTV 2026</span>
            <span class="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-blue-950/70 text-blue-200 border border-blue-800/40 shadow-sm">Top Rated IPTV</span>
            <span class="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-emerald-950/70 text-emerald-200 border border-emerald-800/40 shadow-sm">Instant Xtream Codes</span>
            <span class="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-cyan-950/70 text-cyan-200 border border-cyan-800/40 shadow-sm">Anti-Freeze 4K Server</span>
          </div>`;
    pricingHtml = pricingHtml.replace(/(<p class="text-zinc-400 max-w-2xl mx-auto text-lg">[\s\S]*?<\/p>)/i, `$1${badgesHtml}`);
  }

  fs.writeFileSync(pricingPath, pricingHtml, 'utf8');
  console.log('✅ 2. Pricing page SEO metadata and H1 upgraded with high-intent buyer keywords.');
}

// -------------------------------------------------------------
// 3. OPTIMIZE GUIDES HUB (guides/index.html)
// -------------------------------------------------------------
const guidesHubPath = path.join(sourceDir, 'guides', 'index.html');
if (fs.existsSync(guidesHubPath)) {
  let hubHtml = fs.readFileSync(guidesHubPath, 'utf8');

  const newHubTitle = 'IPTV Smarters Pro Setup Guides & Tutorials (2026 Edition)';
  const newHubDesc = 'Comprehensive walkthroughs, device installation tutorials, and error fixes for IPTV Smarters Pro. Firestick, Smart TV, Xtream Codes setup & 4K streaming guides.';

  hubHtml = hubHtml.replace(/<title>[\s\S]*?<\/title>/i, `<title>${newHubTitle}</title>`);
  hubHtml = hubHtml.replace(/<meta\s+name=["']title["']\s+content=["'][\s\S]*?["']/i, `<meta name="title" content="${newHubTitle}">`);
  hubHtml = hubHtml.replace(/<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']/i, `<meta name="description" content="${newHubDesc}">`);

  fs.writeFileSync(guidesHubPath, hubHtml, 'utf8');
  console.log('✅ 3. Guides Hub SEO metadata updated.');
}

// -------------------------------------------------------------
// 4. INJECT IN-CONTENT CONTEXTUAL SILO WIDGETS ACROSS ALL 35 GUIDES
// -------------------------------------------------------------
const IN_CONTENT_CALLOUT = `
                <!-- Contextual Internal Linking Silo (DataForSEO High-Intent Target) -->
                <div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-zinc-900/60 to-blue-950/40 border border-purple-500/30 shadow-lg shadow-purple-950/20 not-prose">
                  <div class="flex flex-col sm:flex-row items-start gap-4">
                    <div class="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center shrink-0 text-purple-300 font-bold text-lg">
                      ⚡
                    </div>
                    <div class="flex-1">
                      <h4 class="text-white font-bold text-base mb-1">Looking for a Stable, High-Speed IPTV Server?</h4>
                      <p class="text-zinc-300 text-sm leading-relaxed mb-3">
                        Avoid buffer freezes, authentication failures, and ISP throttling. Pair your IPTV Smarters Pro app with our <a href="/pricing/" class="text-purple-400 hover:text-purple-300 font-bold underline decoration-purple-500/50 underline-offset-2">top-rated IPTV Smarters Pro 4K subscription</a> featuring 25,000+ live TV channels, anti-freeze streaming, and instant Xtream Codes activation.
                      </p>
                      <a href="/pricing/" class="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-md shadow-purple-600/25">
                        <span>View 4K Subscription Plans</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>`;

const guidesDir = path.join(sourceDir, 'guides');
const guideFolders = fs.readdirSync(guidesDir, { withFileTypes: true });

let updatedGuidesCount = 0;

for (const folder of guideFolders) {
  if (folder.isDirectory()) {
    const guideHtmlPath = path.join(guidesDir, folder.name, 'index.html');
    if (fs.existsSync(guideHtmlPath)) {
      let gHtml = fs.readFileSync(guideHtmlPath, 'utf8');

      // 1. Upgrade Sidebar CTA button and text
      gHtml = gHtml.replace(
        /<h3 class="text-white font-bold text-lg mb-3 mt-4">Tired of Buffering\?<\/h3>[\s\S]*?<a href="\/pricing\/" class="[^"]*">View Pricing<\/a>/i,
        `<h3 class="text-white font-bold text-lg mb-3 mt-4">Top-Rated 4K IPTV</h3>
                <p class="text-zinc-400 text-sm mb-6 leading-relaxed">
                  Switch to the best IPTV Smarters Pro 4K subscription with 25,000+ live channels and zero freezing.
                </p>
                <ul class="space-y-2 mb-6">
                  <li class="flex items-center gap-2 text-xs font-medium text-zinc-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>Instant Xtream Codes Delivery</li>
                  <li class="flex items-center gap-2 text-xs font-medium text-zinc-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>99.9% Uptime Guarantee</li>
                  <li class="flex items-center gap-2 text-xs font-medium text-zinc-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>25,000+ Channels &amp; 100k VOD</li>
                </ul>
                <a href="/pricing/" class="block w-full py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold rounded-xl text-center transition-all shadow-lg shadow-purple-600/25">Get Best IPTV 4K Plan →</a>`
      );

      // 2. Upgrade Bottom Mobile CTA button and text
      gHtml = gHtml.replace(
        /<h4 class="text-white font-bold text-lg mb-2 mt-1">Tired of Buffering\?<\/h4>[\s\S]*?<a href="\/pricing\/" class="[^"]*">View Pricing<\/a>/i,
        `<h4 class="text-white font-bold text-lg mb-2 mt-1">Top-Rated 4K IPTV Subscription</h4>
                    <p class="text-zinc-400 text-sm mb-4">
                      Get top-rated IPTV Smarters Pro Xtream Codes login with instant setup, anti-freeze servers, and 99.9% uptime.
                    </p>
                    <a href="/pricing/" class="inline-block px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold rounded-lg transition-all shadow-md shadow-purple-600/25">Explore 4K Pricing Plans →</a>`
      );

      // 3. Inject In-Content Callout Widget inside <div class="prose"> if not already present
      if (!gHtml.includes('Contextual Internal Linking Silo')) {
        // Find the first </p> after <div class="prose">
        const proseIdx = gHtml.indexOf('<div class="prose">');
        if (proseIdx !== -1) {
          const firstPIdx = gHtml.indexOf('</p>', proseIdx);
          if (firstPIdx !== -1) {
            const insertPos = firstPIdx + 4;
            gHtml = gHtml.slice(0, insertPos) + '\n' + IN_CONTENT_CALLOUT + gHtml.slice(insertPos);
            updatedGuidesCount++;
          }
        }
      }

      fs.writeFileSync(guideHtmlPath, gHtml, 'utf8');
    }
  }
}

console.log(`✅ 4. Injected In-Content Keyword Silo & Upgraded CTAs across ${updatedGuidesCount} Guides.`);
console.log('\n🎉 ALL INTERNAL SEO ENHANCEMENTS APPLIED LOCALLY (NOT PUSHED)!');
