import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const indexPath = path.join(__dirname, '..', 'Iptv The smarters Pro', 'index.html');

// Modern high-rated Blockbuster Movies (2022-2024+)
const latestMovies = [
  {
    title: "Dune: Part Two",
    year: "2024",
    rating: "8.4",
    poster: "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: "Sci-Fi / Adventure",
    quality: "4K IMAX UHD"
  },
  {
    title: "Oppenheimer",
    year: "2023",
    rating: "8.2",
    poster: "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: "Drama / History",
    quality: "4K HDR"
  },
  {
    title: "Spider-Man: Across the Spider-Verse",
    year: "2023",
    rating: "8.5",
    poster: "https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    genre: "Animation / Action",
    quality: "4K UHD"
  },
  {
    title: "Top Gun: Maverick",
    year: "2022",
    rating: "8.2",
    poster: "https://m.media-amazon.com/images/M/MV5BMDBkZDNjMWEtOTdmMi00NmExLTg5MmMtNTFlYTJlNWY5YTdmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: "Action / Thriller",
    quality: "4K HDR 60FPS"
  },
  {
    title: "The Batman",
    year: "2022",
    rating: "7.8",
    poster: "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: "Crime / Mystery",
    quality: "4K UHD"
  },
  {
    title: "Guardians of the Galaxy Vol. 3",
    year: "2023",
    rating: "7.9",
    poster: "https://m.media-amazon.com/images/M/MV5BOTJhOTMxMmItZmE0Ny00MDc3LWEzOGEtOGFkMzY4MWYyZDQ0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: "Action / Sci-Fi",
    quality: "4K IMAX"
  },
  {
    title: "Deadpool & Wolverine",
    year: "2024",
    rating: "7.5",
    poster: "https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: "Action / Comedy",
    quality: "4K UHD"
  },
  {
    title: "Godzilla Minus One",
    year: "2023",
    rating: "7.6",
    poster: "https://m.media-amazon.com/images/M/MV5BMjc5MjllMGUtMDIwMS00ZDVkLWEzODQtM2NlMTMwMTZhNThmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: "Action / Sci-Fi",
    quality: "4K HDR"
  }
];

// Modern high-rated TV Series & Shows (2022-2024+)
const latestSeries = [
  {
    title: "Shogun",
    year: "2024",
    rating: "8.6",
    poster: "https://m.media-amazon.com/images/M/MV5BZmJkMDRjYzEtMWI3Ny00OWE3LWJlNTItMGQ1MTQzMzc3NDY5XkEyXkFqcGc@._V1_QL75_UY562_CR35,0,380,562_.jpg",
    genre: "Historical / Drama",
    quality: "4K HDR"
  },
  {
    title: "The Penguin",
    year: "2024",
    rating: "8.6",
    poster: "https://m.media-amazon.com/images/M/MV5BYmU3MzYzOWEtOTdkZi00YzA1LTliMzQtNDdiZDBjY2FiNmFlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: "Crime / Drama",
    quality: "4K UHD"
  },
  {
    title: "Severance",
    year: "2022–",
    rating: "8.6",
    poster: "https://m.media-amazon.com/images/M/MV5BZDI5YzJhODQtMzQyNy00YWNmLWIxMjUtNDBjNjA5YWRjMzExXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    genre: "Mystery / Sci-Fi",
    quality: "4K HDR"
  },
  {
    title: "The Bear",
    year: "2022–",
    rating: "8.5",
    poster: "https://m.media-amazon.com/images/M/MV5BMjk2NWI5OTctODcwYy00NGRmLWFmN2YtOTZiNzFiYjVlODBkXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    genre: "Comedy / Drama",
    quality: "4K UHD"
  },
  {
    title: "Fallout",
    year: "2024–",
    rating: "8.3",
    poster: "https://m.media-amazon.com/images/M/MV5BYzE1MTZmY2ItMTgxNi00OGU5LTk4NTItMmY2ODFhYzhjZjRkXkEyXkFqcGc@._V1_QL75_UX380_CR0,57,380,562_.jpg",
    genre: "Sci-Fi / Action",
    quality: "4K UHD"
  },
  {
    title: "The Last of Us",
    year: "2023–",
    rating: "8.4",
    poster: "https://m.media-amazon.com/images/M/MV5BYWI3ODJlMzktY2U5NC00ZjdlLWE1MGItNWQxZDk3NWNjN2RhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: "Action / Drama",
    quality: "4K HDR"
  },
  {
    title: "House of the Dragon",
    year: "2022–",
    rating: "8.2",
    poster: "https://m.media-amazon.com/images/M/MV5BOWU2ZDA0M2EtNWEyYy00MWUwLWI4NjAtYzkxMDFjYzZkNGFiXkEyXkFqcGc@._V1_QL75_UY562_CR35,0,380,562_.jpg",
    genre: "Fantasy / Drama",
    quality: "4K Complete"
  },
  {
    title: "The Boys",
    year: "2019–",
    rating: "8.5",
    poster: "https://m.media-amazon.com/images/M/MV5BZjU4OWNiYzQtMzc1NS00NjZlLTgyYTctZWY4ZmEzMTkxYjA4XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    genre: "Action / Sci-Fi",
    quality: "4K UHD"
  }
];

function renderCard(item) {
  return `
                <div class="media-card">
                  <div class="media-poster-wrap">
                    <span class="imdb-chip">
                      <svg viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      ${item.rating}
                    </span>
                    <span class="quality-chip">${item.quality}</span>
                    <img src="${item.poster}" alt="${item.title}" class="media-poster" loading="lazy" referrerpolicy="no-referrer">
                  </div>
                  <div class="media-body">
                    <div class="media-genre-row">
                      <span class="media-genre">${item.genre}</span>
                      <span class="media-year">${item.year}</span>
                    </div>
                    <h4 class="media-title">${item.title}</h4>
                  </div>
                </div>`;
}

let html = fs.readFileSync(indexPath, 'utf8');

// Replace movie track
const movieTrackRegex = /<div id="movie-track" class="carousel-track">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<!-- Carousel 2/;
const newMovieTrack = `<div id="movie-track" class="carousel-track">
${latestMovies.map(renderCard).join('\n')}
              </div>
            </div>
          </div>

          <!-- Carousel 2`;

if (movieTrackRegex.test(html)) {
  html = html.replace(movieTrackRegex, newMovieTrack);
  console.log('Successfully updated movies track with latest 2023-2024 blockbusters!');
} else {
  console.error('Could not match movie-track regex');
}

// Replace series track
const seriesTrackRegex = /<div id="series-track" class="carousel-track">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<!-- Carousel 3/;
const newSeriesTrack = `<div id="series-track" class="carousel-track">
${latestSeries.map(renderCard).join('\n')}
              </div>
            </div>
          </div>

          <!-- Carousel 3`;

if (seriesTrackRegex.test(html)) {
  html = html.replace(seriesTrackRegex, newSeriesTrack);
  console.log('Successfully updated series track with latest 2023-2024 trending shows!');
} else {
  console.error('Could not match series-track regex');
}

// Also update the section title to reflect latest releases
html = html.replace(
  'Highest-Rated IMDb Movies',
  'Latest & Highest-Rated Blockbuster Movies'
);
html = html.replace(
  'Top-Rated IMDb TV Series &amp; Shows',
  'Latest & Trending TV Series (2024)'
);

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Finished updating index.html with fresh movies & shows!');
