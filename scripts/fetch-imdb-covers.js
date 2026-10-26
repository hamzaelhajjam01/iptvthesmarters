import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const indexPath = path.join(__dirname, '..', 'Iptv The smarters Pro', 'index.html');

const movieIds = [
  'tt0111161', // The Shawshank Redemption
  'tt0068646', // The Godfather
  'tt0468569', // The Dark Knight
  'tt0816692', // Interstellar
  'tt1375666', // Inception
  'tt0110912', // Pulp Fiction
  'tt0133093'  // The Matrix
];

const seriesIds = [
  'tt0903747', // Breaking Bad
  'tt0185906', // Band of Brothers
  'tt0795176', // Planet Earth
  'tt0306414', // The Wire
  'tt0944947', // Game of Thrones
  'tt3032476', // Better Call Saul
  'tt4574334'  // Stranger Things
];

async function fetchDetails(id) {
  const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=trilogy`);
  return await res.json();
}

function renderCard(item, isSeries) {
  const quality = isSeries ? '4K Complete' : '4K UHD';
  const genreFirst = (item.Genre || 'Drama').split(',')[0].trim();
  const yearText = item.Year || '';

  return `
                <div class="media-card">
                  <div class="media-poster-wrap">
                    <span class="imdb-chip">
                      <svg viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      ${item.imdbRating || '9.0'}
                    </span>
                    <span class="quality-chip">${quality}</span>
                    <img src="${item.Poster}" alt="${item.Title}" class="media-poster" loading="lazy" referrerpolicy="no-referrer">
                  </div>
                  <div class="media-body">
                    <div class="media-genre-row">
                      <span class="media-genre">${genreFirst}</span>
                      <span class="media-year">${yearText}</span>
                    </div>
                    <h4 class="media-title">${item.Title}</h4>
                  </div>
                </div>`;
}

async function run() {
  console.log('Fetching official IMDb movie data...');
  const movies = await Promise.all(movieIds.map(fetchDetails));
  console.log('Fetching official IMDb series data...');
  const series = await Promise.all(seriesIds.map(fetchDetails));

  let html = fs.readFileSync(indexPath, 'utf8');

  // Build the complete VOD section
  const newVodSection = `<!-- HeroUI VOD Entertainment Hub (IMDb Top Rated Movies & Series Carousels) -->
        <section id="vod-entertainment-hub" class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <!-- Section Heading -->
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span class="eyebrow mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" class="text-purple-400"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                IMDb Top-Rated VOD Catalog
              </span>
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">Stream Blockbuster Movies &amp; Binge-Worthy Series in 4K</h2>
              <p class="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">Access over 60,000+ on-demand movies, complete series, and documentaries updated weekly with multi-language audio and subtitles.</p>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-semibold text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">Updated Daily</span>
            </div>
          </div>

          <!-- Carousel 1: Top Rated Movies -->
          <div class="mb-14">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#7828C8]"></span>
                <h3 class="text-lg sm:text-xl font-bold text-white tracking-tight">Highest-Rated IMDb Movies</h3>
              </div>
              <div class="flex items-center gap-2">
                <button type="button" aria-label="Previous Movies" class="carousel-btn" onclick="document.getElementById('movie-track').scrollBy({left: -480, behavior: 'smooth'})">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button type="button" aria-label="Next Movies" class="carousel-btn" onclick="document.getElementById('movie-track').scrollBy({left: 480, behavior: 'smooth'})">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>

            <div class="carousel-container">
              <div id="movie-track" class="carousel-track">
${movies.map(m => renderCard(m, false)).join('\n')}
              </div>
            </div>
          </div>

          <!-- Carousel 2: Top Rated Series -->
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></span>
                <h3 class="text-lg sm:text-xl font-bold text-white tracking-tight">Top-Rated IMDb TV Series &amp; Shows</h3>
              </div>
              <div class="flex items-center gap-2">
                <button type="button" aria-label="Previous Series" class="carousel-btn" onclick="document.getElementById('series-track').scrollBy({left: -480, behavior: 'smooth'})">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button type="button" aria-label="Next Series" class="carousel-btn" onclick="document.getElementById('series-track').scrollBy({left: 480, behavior: 'smooth'})">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>

            <div class="carousel-container">
              <div id="series-track" class="carousel-track">
${series.map(s => renderCard(s, true)).join('\n')}
              </div>
            </div>
          </div>
        </section>`;

  // Replace existing section
  const regex = /<!-- HeroUI VOD Entertainment Hub[\s\S]*?<\/section>/;
  if (regex.test(html)) {
    html = html.replace(regex, newVodSection);
    fs.writeFileSync(indexPath, html, 'utf8');
    console.log('Successfully updated index.html with official IMDb posters & metadata!');
  } else {
    console.error('Could not find existing VOD Entertainment Hub section in index.html');
  }
}

run().catch(console.error);
