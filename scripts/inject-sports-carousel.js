import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const indexPath = path.join(__dirname, '..', 'Iptv The smarters Pro', 'index.html');

const sportsLeagues = [
  {
    name: "UEFA Champions League",
    category: "European Football",
    quality: "4K 60FPS",
    badge: "https://r2.thesportsdb.com/images/media/league/badge/facv1u1742998896.png",
    poster: "https://r2.thesportsdb.com/images/media/league/poster/yfor1r1718864480.jpg",
    channel: "TNT / Canal+ / Sky"
  },
  {
    name: "Premier League",
    category: "English Football",
    quality: "4K HDR",
    badge: "https://r2.thesportsdb.com/images/media/league/badge/gasy9d1737743125.png",
    poster: "https://r2.thesportsdb.com/images/media/league/poster/67al0l1719007596.jpg",
    channel: "Sky Sports / TNT"
  },
  {
    name: "Spanish La Liga",
    category: "Spanish Football",
    quality: "4K UHD",
    badge: "https://r2.thesportsdb.com/images/media/league/badge/ja4it51687628717.png",
    poster: "https://r2.thesportsdb.com/images/media/league/poster/3j1vo11636804719.jpg",
    channel: "DAZN / Movistar"
  },
  {
    name: "UFC / MMA",
    category: "Combat Sports & PPV",
    quality: "Live PPV 4K",
    badge: "https://r2.thesportsdb.com/images/media/league/badge/bewnz31717531281.png",
    poster: "https://r2.thesportsdb.com/images/media/league/poster/l2k1ka1636383209.jpg",
    channel: "ESPN+ / TNT Box Office"
  },
  {
    name: "NBA Basketball",
    category: "US Basketball",
    quality: "4K 60FPS",
    badge: "https://r2.thesportsdb.com/images/media/league/badge/frdjqy1536585083.png",
    poster: "https://r2.thesportsdb.com/images/media/league/poster/vtqtss1447330781.jpg",
    channel: "NBA TV / ESPN"
  },
  {
    name: "Formula 1 Grand Prix",
    category: "Motorsport",
    quality: "4K Ultra HD",
    badge: "https://r2.thesportsdb.com/images/media/league/badge/g8cofl1513623681.png",
    poster: "https://r2.thesportsdb.com/images/media/league/poster/4e1svi1605133041.jpg",
    channel: "Sky Sports F1"
  },
  {
    name: "Italian Serie A",
    category: "Italian Football",
    quality: "4K UHD",
    badge: "https://r2.thesportsdb.com/images/media/league/badge/67q3q21679951383.png",
    poster: "https://r2.thesportsdb.com/images/media/league/poster/6agbm61636804706.jpg",
    channel: "DAZN / Paramount+"
  },
  {
    name: "German Bundesliga",
    category: "German Football",
    quality: "4K HDR",
    badge: "https://r2.thesportsdb.com/images/media/league/badge/teqh1b1679952008.png",
    poster: "https://r2.thesportsdb.com/images/media/league/poster/942uzh1636804690.jpg",
    channel: "Sky Sport / beIN"
  }
];

function renderLeagueCard(l) {
  return `
                <div class="media-card">
                  <div class="media-poster-wrap">
                    <span class="imdb-chip" style="border-color: rgba(34, 197, 94, 0.4); color: #4ade80;">
                      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      LIVE
                    </span>
                    <span class="quality-chip" style="background: rgba(37, 99, 235, 0.85); box-shadow: 0 2px 8px rgba(37, 99, 235, 0.5);">${l.quality}</span>
                    <img src="${l.poster}" alt="${l.name}" class="media-poster" loading="lazy" referrerpolicy="no-referrer">
                  </div>
                  <div class="media-body">
                    <div class="media-genre-row">
                      <span class="media-genre" style="color: #60a5fa;">${l.category}</span>
                      <span class="media-year">${l.channel}</span>
                    </div>
                    <h4 class="media-title">${l.name}</h4>
                  </div>
                </div>`;
}

const sportsCarouselHtml = `
          <!-- Carousel 3: Live Sports & Major Leagues -->
          <div class="mt-14">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"></span>
                <h3 class="text-lg sm:text-xl font-bold text-white tracking-tight">Live Sports, Major Leagues &amp; PPV in 60FPS</h3>
              </div>
              <div class="flex items-center gap-2">
                <button type="button" aria-label="Previous Leagues" class="carousel-btn" onclick="document.getElementById('sports-track').scrollBy({left: -480, behavior: 'smooth'})">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button type="button" aria-label="Next Leagues" class="carousel-btn" onclick="document.getElementById('sports-track').scrollBy({left: 480, behavior: 'smooth'})">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>

            <div class="carousel-container">
              <div id="sports-track" class="carousel-track">
${sportsLeagues.map(renderLeagueCard).join('\n')}
              </div>
            </div>
          </div>
        </section>`;

let html = fs.readFileSync(indexPath, 'utf8');

const targetAnchor = /<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<section[^>]*id="pricing"/;

// Let's replace the closing of vod-entertainment-hub with the new sports carousel included
if (html.includes('id="vod-entertainment-hub"')) {
  const vodCloseTag = /<\/div>\s*<\/div>\s*<\/section>\s*(?=<section[^>]*id="pricing")/;
  if (vodCloseTag.test(html)) {
    html = html.replace(vodCloseTag, `</div>\n            </div>\n          </div>\n${sportsCarouselHtml}\n        `);
    fs.writeFileSync(indexPath, html, 'utf8');
    console.log('Successfully injected Live Sports Carousel into index.html!');
  } else {
    console.error('Could not find close tag match');
  }
}
