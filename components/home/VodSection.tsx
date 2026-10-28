'use client';

import React, { useRef } from 'react';
import vodData from './vodData.json';

export default function VodSection() {
  const movieTrackRef = useRef<HTMLDivElement>(null);
  const seriesTrackRef = useRef<HTMLDivElement>(null);

  const scrollTrack = (ref: React.RefObject<HTMLDivElement>, offset: number) => {
    if (ref.current) {
      ref.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="vod-entertainment-hub" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="eyebrow mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-purple-400">
              <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            IMDb Top-Rated VOD Catalog
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Stream Blockbuster Movies &amp; Binge-Worthy Series in 4K
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
            Access over 60,000+ on-demand movies, complete series, and documentaries updated weekly with multi-language audio and subtitles.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">
            Updated Daily
          </span>
        </div>
      </div>

      {/* Carousel 1: Top Rated Movies */}
      <div className="mb-14">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#7828C8]"></span>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Latest &amp; Highest-Rated Blockbuster Movies
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous Movies"
              className="carousel-btn"
              onClick={() => scrollTrack(movieTrackRef, -480)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next Movies"
              className="carousel-btn"
              onClick={() => scrollTrack(movieTrackRef, 480)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="carousel-container">
          <div id="movie-track" ref={movieTrackRef} className="carousel-track">
            {vodData.movies.map((movie, idx) => (
              <div key={idx} className="media-card">
                <div className="media-poster-wrap">
                  {movie.rating && (
                    <span className="imdb-chip">
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      {movie.rating}
                    </span>
                  )}
                  {movie.quality && <span className="quality-chip">{movie.quality}</span>}
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="media-poster"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="media-body">
                  <div className="media-genre-row">
                    <span className="media-genre">{movie.genre}</span>
                    <span className="media-year">{movie.year}</span>
                  </div>
                  <h4 className="media-title">{movie.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel 2: TV Series & Documentaries */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#06B6D4]"></span>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Binge-Worthy TV Shows &amp; Documentaries
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous Series"
              className="carousel-btn"
              onClick={() => scrollTrack(seriesTrackRef, -480)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next Series"
              className="carousel-btn"
              onClick={() => scrollTrack(seriesTrackRef, 480)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="carousel-container">
          <div id="series-track" ref={seriesTrackRef} className="carousel-track">
            {vodData.series.map((item, idx) => (
              <div key={idx} className="media-card">
                <div className="media-poster-wrap">
                  {item.rating && (
                    <span className="imdb-chip">
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      {item.rating}
                    </span>
                  )}
                  {item.quality && <span className="quality-chip">{item.quality}</span>}
                  <img
                    src={item.poster}
                    alt={item.title}
                    className="media-poster"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="media-body">
                  <div className="media-genre-row">
                    <span className="media-genre">{item.genre}</span>
                    <span className="media-year">{item.year}</span>
                  </div>
                  <h4 className="media-title">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
