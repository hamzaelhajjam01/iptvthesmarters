import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import guidesData from '@/components/guides/guidesData.json';

export const metadata: Metadata = {
  title: 'IPTV Smarters Pro Setup Guides & Tutorials (2026 Edition)',
  description:
    'Comprehensive walkthroughs, device installation tutorials, and error fixes for IPTV Smarters Pro. Firestick, Smart TV, Xtream Codes setup & 4K streaming guides.',
  keywords:
    'iptv smarters pro guides, iptv firestick tutorial, xtream codes setup, iptv smarters smart tv, fix iptv buffering',
  alternates: {
    canonical: 'https://thesmartersiptv.com/guides/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thesmartersiptv.com/guides/',
    siteName: 'IPTV Smarters Pro',
    title: 'IPTV Smarters Pro Guides — Setup & Troubleshooting',
    description:
      'Comprehensive guides, tutorials, and fixes for IPTV Smarters Pro. Learn device installation, Xtream Codes setup, and buffering fixes.',
    images: [
      {
        url: 'https://thesmartersiptv.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IPTV Smarters Pro Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV Smarters Pro Guides — Setup & Troubleshooting',
    description:
      'Comprehensive guides, tutorials, and fixes for IPTV Smarters Pro. Learn device installation, Xtream Codes setup, and buffering fixes.',
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
  { id: 'all', label: 'All', isActive: true },
  { id: 'iptv services', label: 'IPTV Services', isActive: false },
  { id: 'setup', label: 'Setup', isActive: false },
  { id: 'troubleshooting', label: 'Troubleshooting', isActive: false },
  { id: 'comparisons', label: 'Comparisons', isActive: false },
  { id: 'devices', label: 'Devices', isActive: false },
  { id: 'safety', label: 'Safety', isActive: false },
];

const guidesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://thesmartersiptv.com/guides/#webpage',
      url: 'https://thesmartersiptv.com/guides/',
      name: 'IPTV Smarters Pro Setup Guides & Tutorials',
      description:
        'Comprehensive walkthroughs, device installation tutorials, and error fixes for IPTV Smarters Pro.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://thesmartersiptv.com/#website',
        name: 'The Smarters IPTV',
        url: 'https://thesmartersiptv.com/',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://thesmartersiptv.com/guides/#breadcrumb',
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
          name: 'Guides',
          item: 'https://thesmartersiptv.com/guides/',
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://thesmartersiptv.com/guides/#itemlist',
      itemListElement: guidesData.slice(0, 15).map((g, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `https://thesmartersiptv.com${g.href}`,
        name: g.title,
      })),
    },
  ],
};

export default function EnglishGuidesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guidesJsonLd) }}
      />
      <Header currentLang="en" />
      <main className="flex-1">
        <div className="bg-zinc-950 min-h-screen">
          <div className="relative pt-32 pb-12 md:pt-40 md:pb-16 border-b border-zinc-900 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <div className="flex flex-col items-center justify-center gap-4 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-transparent rounded-full"></div>
                <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">Knowledge Base</span>
              </div>
              <h1 className="reveal-on-scroll text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight is-visible">
                Master your <span className="text-gradient">Streaming.</span>
              </h1>
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-10">
                The ultimate resource for IPTV tutorials, sports guides, device setup, and streaming optimization.
              </p>
              <div className="max-w-3xl mx-auto">
                <div className="relative mb-8">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="searchInput"
                    placeholder="Search guides, tutorials, and fixes..."
                    className="w-full bg-zinc-900/80 border border-zinc-800 rounded-full py-4 pl-12 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="flex flex-wrap justify-center gap-2" id="categoryTabs">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      data-category={cat.id}
                      className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 border ${
                        cat.isActive
                          ? 'bg-blue-500 text-white border-blue-500 shadow-[0_0_15px_rgba(123,63,228,0.3)]'
                          : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:bg-zinc-800 hover:text-white'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <section className="py-16 md:py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" id="blogGrid">
                {guidesData.map((guide, idx) => (
                  <div
                    key={idx}
                    className="blog-card-wrapper"
                    data-category={guide.category}
                    data-title={guide.searchTitle}
                  >
                    <Link
                      href={guide.href}
                      className="group flex flex-col h-full bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-3xl overflow-hidden hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300 relative z-10 shadow-xl shadow-black/20"
                      data-category={guide.category}
                      data-title={guide.searchTitle}
                    >
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950 border-b border-zinc-800/80">
                        <img
                          width={1200}
                          height={630}
                          src={guide.img}
                          alt={guide.alt}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                          loading="lazy"
                        />
                        {guide.badge && (
                          <div className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md border border-blue-400/30 shadow-lg">
                            {guide.badge}
                          </div>
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0"></div>
                      <div className="p-8 flex-1 flex flex-col relative z-10">
                        <div className="flex items-center justify-between mb-6">
                          <span className="inline-flex px-3 py-1 bg-zinc-800 text-zinc-300 text-[10px] font-bold uppercase tracking-widest rounded-full border border-zinc-700/50 group-hover:border-zinc-600 group-hover:text-white transition-colors">
                            {guide.tag}
                          </span>
                          <div className="flex flex-col items-end gap-1">
                            <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-3.5 h-3.5">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                              {guide.readingTime}
                            </div>
                            {guide.updatedDate && (
                              <div className="text-[10px] text-zinc-600 font-medium uppercase tracking-wider">
                                Updated: <time dateTime={guide.updatedDate}>{guide.updatedDate}</time>
                              </div>
                            )}
                          </div>
                        </div>
                        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                          {guide.title}
                        </h2>
                        <p className="text-sm text-zinc-400 line-clamp-3 mb-6 flex-1">
                          {guide.desc}
                        </p>
                        <div className="flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors mt-auto">
                          <span>Read full guide</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer currentLang="en" />
    </>
  );
}
