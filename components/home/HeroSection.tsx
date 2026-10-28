import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero-stage">
      <div className="hero-grid-bg" aria-hidden="true"></div>
      <div className="hero-beam hero-beam-1" aria-hidden="true"></div>
      <div className="hero-beam hero-beam-2" aria-hidden="true"></div>

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-kicker hero-fade-up" style={{ animationDelay: '0.05s' }}>
            <span className="hero-kicker-dot" aria-hidden="true"></span>
            <span>Live Now · Streaming Top Channels Worldwide</span>
          </div>

          <h1 className="hero-title hero-fade-up" style={{ animationDelay: '0.15s' }}>
            IPTV Smarters Pro
            <span className="hero-title-accent">Television, without limits.</span>
          </h1>

          <p className="hero-sub hero-fade-up" style={{ animationDelay: '0.25s' }}>
            A secure Xtream Codes connection paired with a load-balanced 20 Gbps network means every channel
            loads instantly and stays locked in crisp 4K — no freezing, no long waits.
          </p>

          <div className="hero-cta-row hero-fade-up" style={{ animationDelay: '0.35s' }}>
            <Link
              href="/pricing/"
              className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-primary text-white font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(123,63,228,0.3)]"
            >
              <span>View Plans &amp; Pricing</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            <Link
              href="/channels/"
              className="group w-full sm:w-auto px-8 py-4 rounded-full border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm text-white font-bold hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play">
                <polygon points="6 3 20 12 6 21 6 3"></polygon>
              </svg>
              Explore Channels
            </Link>
          </div>

          <div className="hero-trust hero-fade-up" style={{ animationDelay: '0.45s' }}>
            <span>Instant account activation</span>
            <span className="hero-trust-dot" aria-hidden="true"></span>
            <span>expert customer support</span>
            <span className="hero-trust-dot" aria-hidden="true"></span>
            <span>Setup in under 5 minutes</span>
          </div>
        </div>

        <div className="hero-visual hero-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="hero-panel">
            <div className="hero-panel-topbar">
              <span className="hero-live-badge"><span className="hero-live-dot" aria-hidden="true"></span>Live</span>
              <span className="hero-panel-label">On Air Now</span>
            </div>

            <div className="hero-channel-grid">
              <div className="hero-tile hero-tile-blue">
                <div className="hero-tile-eq" aria-hidden="true"><span></span><span></span><span></span></div>
                <span className="hero-tile-name">ESPN Multi-Feed</span>
              </div>
              <div className="hero-tile hero-tile-purple">
                <div className="hero-tile-eq" aria-hidden="true"><span></span><span></span><span></span></div>
                <span className="hero-tile-name">HBO 4K</span>
              </div>
              <div className="hero-tile hero-tile-cyan">
                <div className="hero-tile-eq" aria-hidden="true"><span></span><span></span><span></span></div>
                <span className="hero-tile-name">BBC News</span>
              </div>
              <div className="hero-tile hero-tile-emerald">
                <div className="hero-tile-eq" aria-hidden="true"><span></span><span></span><span></span></div>
                <span className="hero-tile-name">Discovery 4K</span>
              </div>
              <div className="hero-tile hero-tile-amber">
                <div className="hero-tile-eq" aria-hidden="true"><span></span><span></span><span></span></div>
                <span className="hero-tile-name">Disney Channel</span>
              </div>
              <div className="hero-tile hero-tile-rose">
                <div className="hero-tile-eq" aria-hidden="true"><span></span><span></span><span></span></div>
                <span className="hero-tile-name">UFC Fight Pass</span>
              </div>
            </div>

            <div className="hero-marquee" aria-hidden="true">
              <div className="hero-marquee-track">
                <span className="hero-marquee-pill">Anti-Buffer Tech</span>
                <span className="hero-marquee-pill">4K Ultra HD</span>
                <span className="hero-marquee-pill">Xtream Codes API</span>
                <span className="hero-marquee-pill">M3U Playlists</span>
                <span className="hero-marquee-pill">Multi-Screen Mode</span>
                <span className="hero-marquee-pill">VPN Friendly</span>
                <span className="hero-marquee-pill">Expert Support</span>
                <span className="hero-marquee-pill">EPG Guide</span>
                <span className="hero-marquee-pill">Anti-Buffer Tech</span>
                <span className="hero-marquee-pill">4K Ultra HD</span>
                <span className="hero-marquee-pill">Xtream Codes API</span>
                <span className="hero-marquee-pill">M3U Playlists</span>
                <span className="hero-marquee-pill">Multi-Screen Mode</span>
                <span className="hero-marquee-pill">VPN Friendly</span>
                <span className="hero-marquee-pill">Expert Support</span>
                <span className="hero-marquee-pill">EPG Guide</span>
              </div>
            </div>
          </div>

          <div className="hero-chip hero-chip-1" aria-hidden="true">
            <span className="hero-chip-icon" style={{ background: 'rgba(123, 63, 228, 0.15)', color: '#A78BFA' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="15" x="2" y="7" rx="2" ry="2"></rect>
                <polyline points="17 2 12 7 7 2"></polyline>
              </svg>
            </span>
            <span>
              <span className="hero-chip-num" style={{ display: 'block' }}>Top Tier</span>
              <span className="hero-chip-label">Live Channels</span>
            </span>
          </div>

          <div className="hero-chip hero-chip-2" aria-hidden="true">
            <span className="hero-chip-icon" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
            </span>
            <span>
              <span className="hero-chip-num" style={{ display: 'block' }}>Unlimited</span>
              <span className="hero-chip-label">Movies &amp; Series</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
