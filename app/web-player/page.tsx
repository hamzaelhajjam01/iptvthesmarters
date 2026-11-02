import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChromeIcon from '@/components/icons/ChromeIcon';
import FirefoxIcon from '@/components/icons/FirefoxIcon';

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/smarters-iptv-web-player/abgjeecgdimjgimljendbajiepppdjlk';
const FIREFOX_STORE_URL =
  'https://addons.mozilla.org/addon/smarters-iptv-web-player/';

export const metadata: Metadata = {
  title: 'Smarters IPTV Web Player — Chrome & Firefox IPTV Extension',
  description:
    'Free Smarters IPTV web player extension for Google Chrome & Mozilla Firefox. Stream live TV, HLS .m3u8 playlists, and Xtream Codes API on Windows, Mac, Linux & Chromebook with anti-freeze 4K playback and zero CORS errors.',
  alternates: {
    canonical: 'https://thesmartersiptv.com/web-player/',
  },
  openGraph: {
    title: 'Smarters IPTV Web Player — Official Chrome & Firefox Extension',
    description:
      'Fast, free web player for HLS (.m3u8) streams, IPTV M3U playlists, and Xtream Codes API. Watch IPTV directly in Chrome & Firefox on PC, Mac & Linux.',
    url: 'https://thesmartersiptv.com/web-player/',
    siteName: 'IPTV Smarters Pro',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smarters IPTV Web Player — Official Chrome & Firefox Extension',
    description:
      'Watch IPTV online in your browser. Free HLS, M3U & Xtream Codes web player extension for Chrome & Firefox.',
  },
};

const FEATURE_CARDS = [
  {
    title: 'IPTV Player for Windows, Mac & Linux',
    desc: 'Watch IPTV online without installing Bluestacks or heavy virtual machines. Runs natively inside Google Chrome, Mozilla Firefox, Brave, and Edge on any desktop or laptop operating system.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-laptop w-6 h-6 text-cyan-400">
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
      </svg>
    ),
  },
  {
    title: 'Universal HLS & M3U8 Player',
    desc: 'Seamlessly renders HLS .m3u8 live feeds and on-demand video files. Supports multi-bitrate adaptive streaming, alternate audio tracks, and embedded subtitle tracks.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tv w-6 h-6 text-cyan-400">
        <rect width="20" height="15" x="2" y="7" rx="2" ry="2"></rect>
        <polyline points="17 2 12 7 7 2"></polyline>
      </svg>
    ),
  },
  {
    title: 'Xtream Codes Web Player API',
    desc: 'Enter your Server URL, Username, and Password to pull your provider bouquets automatically. Categorized by Live TV, Movies, Series, and Catch-up.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-6 h-6 text-cyan-400">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
  },
  {
    title: 'CORS & User-Agent Bypass',
    desc: 'Automatic declarative net request rules strip blocking CORS headers and set authentic Smarters user-agent strings so your streams never get blocked by browser security.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check w-6 h-6 text-cyan-400">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
  },
  {
    title: 'Real-Time Stream Diagnostics',
    desc: 'Built-in diagnostic overlay reveals stream resolution, framerate, buffer duration, and network throughput so you can pinpoint any freezing or provider bottlenecks.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity w-6 h-6 text-cyan-400">
        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.48 12H2"></path>
      </svg>
    ),
  },
  {
    title: 'Lightweight & Battery Friendly',
    desc: 'Consumes less than 50MB of RAM compared to 2GB+ required by emulators. Hardware-accelerated GPU decoding ensures your laptop battery lasts while streaming live sports.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu w-6 h-6 text-cyan-400">
        <rect width="16" height="16" x="4" y="4" rx="2"></rect>
        <rect width="6" height="6" x="9" y="9" rx="1"></rect>
        <path d="M15 2v2"></path>
        <path d="M15 20v2"></path>
        <path d="M2 15h2"></path>
        <path d="M2 9h2"></path>
        <path d="M20 15h2"></path>
        <path d="M20 9h2"></path>
        <path d="M9 2v2"></path>
        <path d="M9 20v2"></path>
      </svg>
    ),
  },
];

const FAQS = [
  {
    num: '01',
    q: 'Can I watch IPTV on Chrome and Firefox without installing software?',
    a: 'Yes! Our Smarters IPTV Web Player extension is officially available on both the Google Chrome Web Store and Mozilla Firefox Add-ons. It allows you to stream live TV channels, M3U playlists, and Xtream Codes API streams directly in your browser on Windows, macOS, Linux, and Chromebooks—with zero need for heavy Android emulators.',
    isOpen: true,
  },
  {
    num: '02',
    q: 'Is the extension officially approved on Mozilla Add-ons and Chrome Web Store?',
    a: 'Yes. The extension is verified, screened, and published on both the Google Chrome Web Store and Mozilla Add-ons (AMO), guaranteeing compliant Manifest V3 architecture, zero malware, and complete security.',
    isOpen: false,
  },
  {
    num: '03',
    q: 'Does this web player support Xtream Codes API and M3U playlists?',
    a: 'Absolutely. You can log in using your standard Xtream Codes credentials (Server URL, Username, and Password) or paste any direct M3U / M3U8 playlist URL to instantly load your channel bouquets, EPG, and VOD content.',
    isOpen: false,
  },
  {
    num: '04',
    q: 'Why does the browser ask for website permissions when installing?',
    a: 'IPTV video streams and playlist files are hosted on thousands of custom third-party streaming domains. The extension requires network access solely to fetch .m3u8 video chunks and bypass CORS headers directly from your chosen IPTV provider. We never track, inspect, or store your personal browsing data.',
    isOpen: false,
  },
  {
    num: '05',
    q: 'How does the extension solve CORS errors when streaming IPTV?',
    a: 'Standard browsers block web video players from fetching stream segments from third-party IPTV servers due to CORS (Cross-Origin Resource Sharing) policies. Our extension uses secure declarative network rules to adjust request headers and user-agent tags in real time, enabling seamless, uninterrupted video playback.',
    isOpen: false,
  },
  {
    num: '06',
    q: 'Where do I get high-speed 4K IPTV streams for the web player?',
    a: 'You can pair the web player with our premium IPTV Smarters Pro subscription, giving you access to 25,000+ live channels, 100,000+ VOD movies, 99.9% anti-freeze uptime, and instant Xtream Codes activation.',
    isOpen: false,
  },
];

export default function WebPlayerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://thesmartersiptv.com/web-player/#webpage',
        url: 'https://thesmartersiptv.com/web-player/',
        name: 'Smarters IPTV Web Player — Chrome & Firefox Extension',
        description:
          'Free Smarters IPTV web player extension for Google Chrome & Mozilla Firefox. Stream live TV, HLS .m3u8 playlists, and Xtream Codes API on Windows, Mac, Linux & Chromebook with anti-freeze 4K playback and zero CORS errors.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://thesmartersiptv.com/#website',
          name: 'The Smarters IPTV',
          url: 'https://thesmartersiptv.com/',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://thesmartersiptv.com/web-player/#breadcrumb',
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
            name: 'Web Player',
            item: 'https://thesmartersiptv.com/web-player/',
          },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Smarters IPTV Web Player — HLS, M3U & Xtream',
        operatingSystem: 'Windows, macOS, Linux, ChromeOS',
        applicationCategory: 'MultimediaApplication',
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'USD',
        },
        downloadUrl: [CHROME_STORE_URL, FIREFOX_STORE_URL],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '15',
          bestRating: '5',
          worstRating: '1',
        },
        author: {
          '@type': 'Organization',
          name: 'IPTV Smarters Pro Team',
          url: 'https://thesmartersiptv.com/',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://thesmartersiptv.com/web-player/#faq',
        mainEntity: FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header currentLang="en" />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex flex-col items-center justify-center gap-4 mb-4">
              <div className="w-0.5 h-6 bg-cyan-500"></div>
              <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                Official Chrome Extension &amp; Firefox Add-on
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Smarters IPTV <span className="text-gradient">Web Player.</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
              Stream live TV channels, HLS (.m3u8) video playlists, and Xtream Codes API directly in{' '}
              <strong>Google Chrome</strong> &amp; <strong>Mozilla Firefox</strong>.
              Enjoy lag-free, anti-freeze streaming on <strong>Windows</strong>, <strong>macOS</strong>, and{' '}
              <strong>Linux</strong> with zero emulator setup.
            </p>

            {/* CTAs with Dual Browser Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                marginBottom: '2.5rem',
              }}
            >
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-white font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] text-sm sm:text-base shadow-[0_8px_30px_rgba(37,99,235,0.35)]"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '14px 26px',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%)',
                  border: '1px solid rgba(147, 197, 253, 0.4)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: 700,
                  boxShadow: '0 8px 30px rgba(37, 99, 235, 0.35)',
                  margin: '4px',
                }}
              >
                <ChromeIcon className="w-6 h-6 shrink-0" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
                <span className="tracking-tight">Add to Chrome</span>
                <span
                  style={{
                    fontSize: '11px',
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    background: 'rgba(255, 255, 255, 0.22)',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    fontWeight: 800,
                  }}
                >
                  Free
                </span>
              </a>

              <a
                href={FIREFOX_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-white font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] text-sm sm:text-base shadow-[0_8px_30px_rgba(234,88,12,0.35)]"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '14px 26px',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #c2410c 0%, #ea580c 50%, #f97316 100%)',
                  border: '1px solid rgba(253, 186, 116, 0.4)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: 700,
                  boxShadow: '0 8px 30px rgba(234, 88, 12, 0.35)',
                  margin: '4px',
                }}
              >
                <FirefoxIcon className="w-6 h-6 shrink-0" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
                <span className="tracking-tight">Add to Firefox</span>
                <span
                  style={{
                    fontSize: '11px',
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    background: 'rgba(255, 255, 255, 0.22)',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    fontWeight: 800,
                  }}
                >
                  Free
                </span>
              </a>

              <Link
                href="/pricing/"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-zinc-200 hover:text-white font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] text-sm sm:text-base"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px 24px',
                  borderRadius: '9999px',
                  background: 'rgba(24, 24, 27, 0.85)',
                  border: '1px solid rgba(63, 63, 70, 0.8)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: 700,
                  backdropFilter: 'blur(10px)',
                  margin: '4px',
                }}
              >
                <span>View 4K Plans</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            {/* Trust highlights */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <span className="text-yellow-400">★★★★★</span> 5.0 Chrome Web Store
              </span>
              <span className="text-zinc-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-orange-400">🦊</span> Approved on Mozilla Add-ons
              </span>
              <span className="text-zinc-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-green-400">✓</span> Zero CORS Buffering
              </span>
              <span className="text-zinc-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-purple-400">⚡</span> Xtream Codes &amp; M3U
              </span>
              <span className="text-zinc-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-cyan-400">✓</span> 100% Free Forever
              </span>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-12 reveal-on-scroll relative is-visible border-t border-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex flex-col items-center justify-center gap-4 mb-4">
                <div className="w-0.5 h-6 bg-cyan-500"></div>
                <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Engineered For Browsers</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                High-Performance Web Streaming
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                The fastest, most reliable way to stream IPTV on Windows, Mac, and Linux without heavy software.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURE_CARDS.map((card, idx) => (
                <div
                  key={idx}
                  className="reveal-on-scroll group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 hover:bg-zinc-900/50 hover:border-zinc-700/60 transition-all duration-300 flex flex-col items-start text-left overflow-hidden h-full is-visible"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  <div className="relative z-10 flex flex-col h-full w-full">
                    <div className="flex justify-between items-start w-full mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300 shadow-lg shadow-black/20">
                        {card.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-50 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed flex-grow">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Setup in Three Steps Section */}
        <section className="py-16 bg-zinc-950/80 border-y border-zinc-900/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex flex-col items-center justify-center gap-4 mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-transparent rounded-full"></div>
                <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">Quick Start</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Setup in three steps
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                Get up and streaming in under 60 seconds with Chrome or Firefox.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent -z-10"></div>
              
              <div className="bg-black/50 backdrop-blur-sm border border-zinc-800/60 p-10 rounded-3xl text-center relative group hover:border-zinc-700 transition-colors flex flex-col justify-between">
                <div>
                  <div className="w-20 h-20 mx-auto bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex items-center justify-center mb-8 group-hover:border-blue-500 transition-colors shadow-lg shadow-black/50">
                    <span className="text-2xl font-black text-blue-400">01</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Install Extension</h3>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    Add Smarters IPTV Web Player in one click from the Chrome Web Store or Mozilla Add-ons.
                  </p>
                </div>
                <div className="flex items-center justify-center gap-4" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    href={CHROME_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold text-xs transition-colors"
                  >
                    <ChromeIcon className="w-4 h-4 shrink-0" style={{ width: '16px', height: '16px', flexShrink: 0 }} />
                    <span>Chrome Store</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                  <span className="text-zinc-600">•</span>
                  <a
                    href={FIREFOX_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 font-semibold text-xs transition-colors"
                  >
                    <FirefoxIcon className="w-4 h-4 shrink-0" style={{ width: '16px', height: '16px', flexShrink: 0 }} />
                    <span>Firefox Add-on</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              <div className="bg-black/50 backdrop-blur-sm border border-zinc-800/60 p-10 rounded-3xl text-center relative group hover:border-zinc-700 transition-colors flex flex-col justify-between">
                <div>
                  <div className="w-20 h-20 mx-auto bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex items-center justify-center mb-8 group-hover:border-cyan-400 transition-colors shadow-lg shadow-black/50">
                    <span className="text-2xl font-black text-cyan-400">02</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Enter Credentials</h3>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    Open the extension and choose Xtream Codes API login or paste any direct M3U / M3U8 playlist URL.
                  </p>
                </div>
                <div>
                  <Link
                    href="/pricing/"
                    className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors"
                  >
                    <span>Need a Playlist? View Plans</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              <div className="bg-black/50 backdrop-blur-sm border border-zinc-800/60 p-10 rounded-3xl text-center relative group hover:border-zinc-700 transition-colors flex flex-col justify-between">
                <div>
                  <div className="w-20 h-20 mx-auto bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex items-center justify-center mb-8 group-hover:border-purple-400 transition-colors shadow-lg shadow-black/50">
                    <span className="text-2xl font-black text-purple-400">03</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Start Streaming</h3>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    Select any live TV channel or VOD title. Enjoy smooth 4K playback with automated anti-buffer stream handling.
                  </p>
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 text-green-400 text-sm font-semibold">
                    <span>✓</span> Instant 4K Playback
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex flex-col items-center justify-center gap-4 mb-4">
              <div className="w-0.5 h-6 bg-purple-500"></div>
              <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Performance &amp; Efficiency</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Web Player vs Traditional Software
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Why browser streaming on Windows, Mac &amp; Linux outperforms heavy emulators and desktop players.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-sm shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-950/60">
                    <th className="py-5 px-6 text-sm font-bold text-white">Feature</th>
                    <th className="py-5 px-6 text-sm font-bold text-cyan-400 bg-cyan-500/5">Smarters Web Player</th>
                    <th className="py-5 px-6 text-sm font-bold text-zinc-400">Android Emulators (Bluestacks)</th>
                    <th className="py-5 px-6 text-sm font-bold text-zinc-400">Desktop VLC Player</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60 text-sm">
                  <tr className="hover:bg-zinc-800/20 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">Browser Support</td>
                    <td className="py-4 px-6 text-green-400 font-bold bg-cyan-500/5">Chrome &amp; Firefox Native</td>
                    <td className="py-4 px-6 text-zinc-400">N/A (Virtual Machine)</td>
                    <td className="py-4 px-6 text-zinc-400">No Web Integration</td>
                  </tr>
                  <tr className="hover:bg-zinc-800/20 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">Setup Time</td>
                    <td className="py-4 px-6 text-green-400 font-bold bg-cyan-500/5">&lt; 15 seconds</td>
                    <td className="py-4 px-6 text-rose-400">15–20 minutes</td>
                    <td className="py-4 px-6 text-yellow-400">5 minutes</td>
                  </tr>
                  <tr className="hover:bg-zinc-800/20 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">Memory (RAM) Usage</td>
                    <td className="py-4 px-6 text-green-400 font-bold bg-cyan-500/5">~45 MB</td>
                    <td className="py-4 px-6 text-rose-400">2,000 MB+ (2 GB)</td>
                    <td className="py-4 px-6 text-yellow-400">250 MB</td>
                  </tr>
                  <tr className="hover:bg-zinc-800/20 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">Browser CORS Handling</td>
                    <td className="py-4 px-6 text-green-400 font-bold bg-cyan-500/5">Automatic Header Bypass</td>
                    <td className="py-4 px-6 text-zinc-500">N/A (Virtual Machine)</td>
                    <td className="py-4 px-6 text-zinc-500">No Web Integration</td>
                  </tr>
                  <tr className="hover:bg-zinc-800/20 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">Xtream Codes API Login</td>
                    <td className="py-4 px-6 text-green-400 font-bold bg-cyan-500/5">Native 1-Click Login</td>
                    <td className="py-4 px-6 text-yellow-400">Requires APK Install</td>
                    <td className="py-4 px-6 text-rose-400">Manual M3U Only</td>
                  </tr>
                  <tr className="hover:bg-zinc-800/20 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">License &amp; Cost</td>
                    <td className="py-4 px-6 text-green-400 font-bold bg-cyan-500/5">100% Free Forever</td>
                    <td className="py-4 px-6 text-zinc-400">Free (Ad-Supported)</td>
                    <td className="py-4 px-6 text-zinc-400">Free</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Feature & Setup FAQs */}
        <section className="py-16 bg-zinc-950/30 border-t border-zinc-900/50" id="faq">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex flex-col items-center justify-center gap-4 mb-4">
                <div className="w-0.5 h-6 bg-cyan-500"></div>
                <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto text-lg">
                Everything you need to know about streaming IPTV in Chrome &amp; Firefox, speed requirements, and permissions.
              </p>
            </div>

            <div className="faq-list w-full max-w-3xl mx-auto">
              {FAQS.map((faq) => (
                <details
                  key={faq.num}
                  className="faq-item"
                  name="webplayer-faq"
                  open={faq.isOpen ? true : undefined}
                >
                  <summary className="faq-summary">
                    <span className="faq-num" aria-hidden="true">{faq.num}</span>
                    <span className="faq-q">{faq.q}</span>
                    <span className="faq-chevron" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Conversion CTA */}
        <section className="py-16 text-center border-t border-zinc-900/50 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Ready to stream in your browser?
            </h2>
            <p className="text-zinc-400 mb-10 text-lg leading-relaxed">
              Install the official Smarters IPTV Web Player extension for free on Chrome or Firefox and unlock seamless 4K HLS, M3U8, and Xtream Codes streaming.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex px-7 py-3.5 rounded-full bg-gradient-primary text-white font-bold items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(123,63,228,0.3)] text-base"
              >
                <span>Add to Chrome</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              <a
                href={FIREFOX_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex px-7 py-3.5 rounded-full bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 hover:from-orange-500 hover:to-amber-500 text-white font-bold items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.35)] text-base border border-orange-400/30"
              >
                <span>Add to Firefox</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              <Link
                href="/pricing/"
                className="inline-flex px-7 py-3.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white font-bold border border-zinc-700/60 transition-all duration-300 hover:scale-[1.02] text-base"
              >
                <span>View IPTV Plans</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer currentLang="en" />
    </>
  );
}
