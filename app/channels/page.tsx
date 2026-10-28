import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "IPTV Smarters Pro Channel List — What's Included (2026)",
  description: 'Browse the complete IPTV Smarters Pro live channel list. Access top US, UK, sports, news, entertainment, and international channels in 4K & Full HD.',
  keywords: 'IPTV Smarters Pro channels, live sports channels, movies cinema iptv, 4k iptv channels list, international iptv channels',
  alternates: {
    canonical: 'https://thesmartersiptv.com/channels/',
  },
  openGraph: {
    title: "IPTV Smarters Pro Channel List — What's Included",
    description: 'Browse the complete IPTV Smarters Pro live channel list. Access top US, UK, sports, news, entertainment, and international channels in 4K & Full HD.',
    url: 'https://thesmartersiptv.com/channels/',
    siteName: 'IPTV Smarters Pro',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://thesmartersiptv.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IPTV Smarters Pro Channel List',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "IPTV Smarters Pro Channel List — What's Included",
    description: 'Browse the complete IPTV Smarters Pro live channel list. Access top US, UK, sports, news, entertainment, and international channels in 4K & Full HD.',
    images: ['https://thesmartersiptv.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const CATEGORIES = [
  { id: 'all', label: 'All', isActive: false },
  { id: 'sports', label: 'Sports', isActive: true },
  { id: 'movies', label: 'Movies & Cinema', isActive: false },
  { id: 'entertainment', label: 'Entertainment', isActive: false },
  { id: 'news', label: 'News & Documentaries', isActive: false },
  { id: 'kids', label: 'Kids & Family', isActive: false },
  { id: 'international', label: 'International', isActive: false },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://thesmartersiptv.com/channels/#webpage',
      url: 'https://thesmartersiptv.com/channels/',
      name: "IPTV Smarters Pro Channel List — What's Included",
      description: 'Browse the complete IPTV Smarters Pro live channel list. Access top US, UK, sports, news, entertainment, and international channels in 4K & Full HD.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://thesmartersiptv.com/#website',
        name: 'The Smarters IPTV',
        url: 'https://thesmartersiptv.com/',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://thesmartersiptv.com/channels/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://thesmartersiptv.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Channels',
          item: 'https://thesmartersiptv.com/channels/',
        },
      ],
    },
  ],
};

export default function EnglishChannelsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header currentLang="en" />
      <main className="flex-1">
        <section className="pt-24 pb-8 md:pt-24 md:pb-8 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex flex-col items-center justify-center gap-4 mb-4">
              <div className="w-0.5 h-6 bg-purple-500"></div>
              <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Live Content</span>
            </div>
            <h1 className="reveal-on-scroll text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight is-visible">
              Premium <span className="text-gradient">Channels.</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              IPTV Smarters Pro streams local news and live sports to international entertainment and premium movie
              networks. Explore our comprehensive channel lineup below.
            </p>
            {/* HeroUI High-Intent SEO Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6 max-w-3xl mx-auto channels-seo-badges">
              <span className="heroui-chip heroui-chip-primary">25,000+ Live Channels</span>
              <span className="heroui-chip heroui-chip-default">4K UHD &amp; 60FPS</span>
              <span className="heroui-chip heroui-chip-default">Top Live Sports &amp; PPV</span>
              <span className="heroui-chip heroui-chip-default">EPG TV Guide Included</span>
              <span className="heroui-chip heroui-chip-default">Anti-Freeze Server</span>
              <span className="heroui-chip heroui-chip-default">Instant Xtream Codes</span>
            </div>
          </div>

          <div className="reveal-on-scroll bg-zinc-950/50 border border-zinc-900 rounded-2xl p-6 is-visible">
            <div className="space-y-8" id="channel-tabs-container">
              {/* Channel Category Tab List */}
              <div
                role="tablist"
                id="channel-categories-tablist"
                aria-label="Channel categories"
                className="flex flex-wrap gap-2 justify-center border-b border-[#334155]/30 pb-4"
              >
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    data-channel-tab={cat.id}
                    aria-selected={cat.isActive ? 'true' : 'false'}
                    className={`channel-tab-btn px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      cat.isActive
                        ? 'bg-[#6D28D9] text-white shadow-md shadow-purple-900/30 ring-1 ring-purple-400/40 is-active'
                        : 'bg-[#1e293b] text-[#94a3b8] hover:bg-[#334155] hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Bar & Count */}
              <div className="max-w-md mx-auto relative px-2">
                <div className="relative flex items-center">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="channel-search-input"
                    placeholder="Search channels (e.g. ESPN, Sky, HBO)..."
                    style={{ paddingLeft: '2.75rem', paddingRight: '2.5rem' }}
                    className="w-full pl-10 pr-10 py-2.5 bg-[#0f172a] border border-[#334155]/60 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#7B3FE4] focus:ring-2 focus:ring-[#7B3FE4]/30 transition-all"
                  />
                  <button
                    type="button"
                    id="channel-search-clear"
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-500 hover:text-white transition-colors hidden"
                    aria-label="Clear search"
                  >
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Header & Description with Counter */}
              <div className="text-center space-y-2 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span id="channel-count-badge" className="text-xs font-medium text-purple-300">20 channels</span>
                </div>
                <h3 id="channel-category-title" className="text-2xl font-bold text-white">Sports Channels</h3>
                <p id="channel-category-desc" className="text-[#94a3b8]">Every major sporting event, PPV, and network in native 4K and FHD.</p>
              </div>

              {/* Channels Grid */}
              <div id="channel-grid" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {/* Dynamically populated by site-interactions.js */}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-8 text-center border-t border-zinc-900/50 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Ready to watch every channel?
            </h2>
            <p className="text-zinc-400 mb-10 text-lg">
              Get instant access to our extensive live channel lineup and vast movie &amp; series library — activated instantly the moment your order is confirmed.
            </p>
            <Link
              href="/pricing/"
              className="group relative inline-flex px-8 py-4 rounded-full bg-gradient-primary text-white font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(123,63,228,0.3)] text-lg"
            >
              <span>View Plans &amp; Pricing</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          </div>
        </section>
      </main>
      <Footer currentLang="en" />
    </>
  );
}
