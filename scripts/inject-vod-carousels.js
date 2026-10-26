import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const indexPath = path.join(__dirname, '..', 'Iptv The smarters Pro', 'index.html');

let html = fs.readFileSync(indexPath, 'utf8');

const anchor = 'Windows, macOS, Web Browser</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section>';
const anchorLF = 'Windows, macOS, Web Browser</p>\n              </div>\n            </div>\n          </div>\n        </section>';

const vodSection = `

        <!-- HeroUI VOD Entertainment Hub (IMDb Top Rated Movies & Series Carousels) -->
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
                <!-- Movie 1 -->
                <div class="media-card">
                  <div class="media-poster-wrap">
                    <span class="imdb-chip">
                      <svg viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      9.3
                    </span>
                    <span class="quality-chip">4K HDR</span>
                    <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80" alt="The Shawshank Redemption" class="media-poster" loading="lazy">
                  </div>
                  <div class="media-body">
                    <div class="media-genre-row">
                      <span class="media-genre">Drama</span>
                      <span class="media-year">1994</span>
                    </div>
                    <h4 class="media-title">The Shawshank Redemption</h4>
                  </div>
                </div>

                <!-- Movie 2 -->
                <div class="media-card">
                  <div class="media-poster-wrap">
                    <span class="imdb-chip">
                      <svg viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      9.2
                    </span>
                    <span class="quality-chip">4K UHD</span>
                    <img src="https://images.unsplash.com/photo-1509281373149-e957c6296406?w=500&auto=format&fit=crop&q=80" alt="The Godfather" class="media-poster" loading="lazy">
                  </div>
                  <div class="media-body">
                    <div class="media-genre-row">
                      <span class="media-genre">Crime / Drama</span>
                      <span class="media-year">1972</span>
                    </div>
                    <h4 class="media-title">The Godfather</h4>
                  </div>
                </div>

                <!-- Movie 3 -->
                <div class="media-card">
                  <div class="media-poster-wrap">
                    <span class="imdb-chip">
                      <svg viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      9.0
                    </span>
                    <span class="quality-chip">4K IMAX</span>
                    <img src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80" alt="The Dark Knight" class="media-poster" loading="lazy">
                  </div>
                  <div class="media-body">
                    <div class="media-genre-row">
                      <span class="media-genre">Action / Sci-Fi</span>
                      <span class="media-year">2008</span>
                    </div>
                    <h4 class="media-title">The Dark Knight</h4>
                  </div>
                </div>

                <!-- Movie 4 -->
                <div class="media-card">
                  <div class="media-poster-wrap">
                    <span class="imdb-chip">
                      <svg viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      8.9
                    </span>
                    <span class="quality-chip">4K HDR</span>
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80" alt="Interstellar" class="media-poster" loading="lazy">
                  </div>
                  <div class="media-body">
                    <div class="media-genre-row">
                      <span class="media-genre">Sci-Fi / Adventure</span>
                      <span class="media-year">2014</span>
                    </div>
                    <h4 class="media-title">Interstellar</h4>
                  </div>
                </div>

                <!-- Movie 5 -->
                <div class="media-card">
                  <div class="media-poster-wrap">
                    <span class="imdb-chip">
                      <svg viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      8.8
                    </span>
                    <span class="quality-chip">4K UHD</span>
                    <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80" alt="Inception" class="media-poster" loading="lazy">
                  </div>
                  <div class="media-body">
                    <div class="media-genre-row">
                      <span class="media-genre">Action / Sci-Fi</span>
                      <span class="media-year">2010</span>
                    </div>
                    <h4 class="media-title">Inception</h4>
                  </div>
                </div>

                <!-- Movie 6 -->
                <div class="media-card">
                  <div class="media-poster-wrap">
                    <span class="imdb-chip">
                      <svg viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      8.9
                    </span>
                    <span class="quality-chip">4K HDR</span>
                    <img src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=80" alt="Pulp Fiction" class="media-poster" loading="lazy">
                  </div>
                  <div class="media-body">
                    <div class="media-genre-row">
                      <span class="media-genre">Crime / Drama</span>
                      <span class="media-year">1994</span>
                    </div>
                    <h4 class="media-title">Pulp Fiction</h4>
                  </div>
                </div>

                <!-- Movie 7 -->
                <div class="media-card">
                  <div class="media-poster-wrap">
                    <span class="imdb-chip">
                      <svg viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      8.7
                    </span>
                    <span class="quality-chip">4K IMAX</span>
                    <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&auto=format&fit=crop&q=80" alt="The Matrix" class="media-poster" loading="lazy">
                  </div>
                  <div class="media-body">
                    <div class="media-genre-row">
                      <span class="media-genre">Sci-Fi / Action</span>
                      <span class="media-year">1999</span>
                    </div>
                    <h4 class="media-title">The Matrix</h4>
                  </div>
                </div>
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
                <!-- Series 1 -->
                <div class="media-card">
                  <div class="media-poster-wrap">
                    <span class="imdb-chip">
                      <svg viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      9.5
                    </span>
                    <span class="quality-chip">4K Complete</span>
                    <img src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500&auto=format&fit=crop&q=80" alt="Breaking Bad" class="media-poster" loading="lazy">
                  </div>
                  <div class="media-body">
                    <div class="media-genre-row">
                      <span class="media-genre">Crime / Thriller</span>
                      <span class="media-year">5 Seasons</span>
                    </div>
                    <h4 class="media-title">Breaking Bad</h4>
                  </div>
                </div>

                <!-- Series 2 -->
                <div class="media-card">
                  <div class="media-poster-wrap">
                    <span class="imdb-chip">
                      <svg viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      9.4
                    </span>
                    <span class="quality-chip">4K UHD</span>
                    <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80" alt="Chernobyl" class="media-poster" loading="lazy">
                  </div>
                  <div class="media-body">
                    <div class="media-genre-row">
                      <span class="media-genre">Historical / Drama</span>
                      <span class="media-year">Miniseries</span>
                    </div>
                    <h4 class="media-title">Chernobyl</h4>
                  </div>
                </div>

                <!-- Series 3 -->
                <div class="media-card">
                  <div class="media-poster-wrap">
                    <span class="imdb-chip">
                      <svg viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      9.3
                    </span>
                    <span class="quality-chip">4K Complete</span>
                    <img src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=500&auto=format&fit=crop&q=80" alt="The Wire" class="media-poster" loading="lazy">
                  </div>
                  <div class="media-body">
                    <div class="media-genre-row">
                      <span class="media-genre">Crime / Drama</span>
                      <span class="media-year">5 Seasons</span>
                    </div>
                    <h4 class="media-title">The Wire</h4>
                  </div>
                </div>

                <!-- Series 4 -->
                <div class="media-card">
                  <div class="media-poster-wrap">
                    <span class="imdb-chip">
                      <svg viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      9.2
                    </span>
                    <span class="quality-chip">4K HDR</span>
                    <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=80" alt="The Sopranos" class="media-poster" loading="lazy">
                  </div>
                  <div class="media-body">
                    <div class="media-genre-row">
                      <span class="media-genre">Drama / Crime</span>
                      <span class="media-year">6 Seasons</span>
                    </div>
                    <h4 class="media-title">The Sopranos</h4>
                  </div>
                </div>

                <!-- Series 5 -->
                <div class="media-card">
                  <div class="media-poster-wrap">
                    <span class="imdb-chip">
                      <svg viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      9.2
                    </span>
                    <span class="quality-chip">4K UHD</span>
                    <img src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80" alt="Game of Thrones" class="media-poster" loading="lazy">
                  </div>
                  <div class="media-body">
                    <div class="media-genre-row">
                      <span class="media-genre">Fantasy / Drama</span>
                      <span class="media-year">8 Seasons</span>
                    </div>
                    <h4 class="media-title">Game of Thrones</h4>
                  </div>
                </div>

                <!-- Series 6 -->
                <div class="media-card">
                  <div class="media-poster-wrap">
                    <span class="imdb-chip">
                      <svg viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      9.0
                    </span>
                    <span class="quality-chip">4K HDR</span>
                    <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80" alt="Better Call Saul" class="media-poster" loading="lazy">
                  </div>
                  <div class="media-body">
                    <div class="media-genre-row">
                      <span class="media-genre">Crime / Drama</span>
                      <span class="media-year">6 Seasons</span>
                    </div>
                    <h4 class="media-title">Better Call Saul</h4>
                  </div>
                </div>

                <!-- Series 7 -->
                <div class="media-card">
                  <div class="media-poster-wrap">
                    <span class="imdb-chip">
                      <svg viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      8.9
                    </span>
                    <span class="quality-chip">4K UHD</span>
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80" alt="Stranger Things" class="media-poster" loading="lazy">
                  </div>
                  <div class="media-body">
                    <div class="media-genre-row">
                      <span class="media-genre">Sci-Fi / Horror</span>
                      <span class="media-year">4 Seasons</span>
                    </div>
                    <h4 class="media-title">Stranger Things</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>`;

if (html.includes(anchor)) {
  html = html.replace(anchor, anchor + vodSection);
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('Successfully injected VOD carousels (CRLF format)!');
} else if (html.includes(anchorLF)) {
  html = html.replace(anchorLF, anchorLF + vodSection);
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('Successfully injected VOD carousels (LF format)!');
} else {
  console.error('Could not find anchor in index.html');
}
