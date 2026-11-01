import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/smarters-iptv-web-player/abgjeecgdimjgimljendbajiepppdjlk';

export const metadata: Metadata = {
  title: 'Smarters IPTV Web Player — Watch IPTV Online in Chrome, Windows & Mac',
  description:
    'Free Smarters IPTV web player & Chrome extension. Stream live TV, HLS .m3u8 playlists, and Xtream Codes API on Windows, Mac, or Chromebook with anti-freeze 4K playback and zero CORS errors.',
  alternates: {
    canonical: 'https://thesmartersiptv.com/web-player/',
  },
  openGraph: {
    title: 'Smarters IPTV Web Player — Official Chrome Extension',
    description:
      'Fast, free web player for HLS (.m3u8) streams, IPTV M3U playlists, and Xtream Codes API. Watch IPTV directly in your browser on PC & Mac.',
    url: 'https://thesmartersiptv.com/web-player/',
    siteName: 'IPTV Smarters Pro',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smarters IPTV Web Player — Official Chrome Extension',
    description:
      'Watch IPTV online in your browser. Free HLS, M3U & Xtream Codes web player extension for Chrome, Windows & Mac.',
  },
};

const FAQS = [
  {
    q: 'Can I watch IPTV on my PC or Mac browser without installing software?',
    a: 'Yes! Our Smarters IPTV Web Player Chrome extension allows you to stream live TV channels, M3U playlists, and Xtream Codes API streams directly inside Google Chrome on Windows, macOS, Linux, and Chromebooks—with zero need for heavy Android emulators like Bluestacks.',
  },
  {
    q: 'Does this web player support Xtream Codes API and M3U playlists?',
    a: 'Absolutely. You can log in using your standard Xtream Codes credentials (Server URL, Username, and Password) or paste any direct M3U / M3U8 playlist URL to instantly load your channel bouquets, EPG, and VOD content.',
  },
  {
    q: 'How does the extension solve CORS errors when streaming IPTV?',
    a: 'Standard browsers block web video players from fetching stream segments from third-party IPTV servers due to CORS (Cross-Origin Resource Sharing) policies. Our extension uses secure declarative network rules to adjust request headers and user-agent tags in real time, enabling seamless, uninterrupted video playback.',
  },
  {
    q: 'Is the Smarters IPTV Web Player extension free?',
    a: 'Yes, the extension is 100% free to download and install from the official Google Chrome Web Store. It contains no hidden fees or paywalls for core player functionality.',
  },
  {
    q: 'Where do I get high-speed 4K IPTV streams for the web player?',
    a: 'You can pair the web player with our premium IPTV Smarters Pro subscription, giving you access to 25,000+ live channels, 100,000+ VOD movies, 99.9% anti-freeze uptime, and instant Xtream Codes activation.',
  },
];

export default function WebPlayerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
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
        operatingSystem: 'ChromeOS, Windows, macOS, Linux',
        applicationCategory: 'MultimediaApplication',
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'USD',
        },
        downloadUrl: CHROME_STORE_URL,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '12',
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
      <Header />
      <main className="min-h-screen bg-black text-white pt-24 pb-20 selection:bg-purple-500/30 selection:text-white">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-purple-400 font-medium">Web Player</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 pb-20 border-b border-zinc-900/60 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(123,63,228,0.18),transparent)] pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Official Chrome Extension • Manifest V3 Compliant</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Smarters IPTV Web Player <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-400 bg-clip-text text-transparent">
                Watch IPTV Online in Your Browser
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Stream live TV channels, HLS (.m3u8) video playlists, and Xtream Codes API directly in Google Chrome.
              Enjoy lag-free, anti-freeze streaming on <strong>Windows</strong>, <strong>macOS</strong>, and{' '}
              <strong>Chromebook</strong> with zero emulator setup.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base text-white inline-flex items-center justify-center gap-3 transition-all shadow-xl hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #7B3FE4 0%, #5F15CD 100%)',
                  boxShadow: '0 10px 30px rgba(123, 63, 228, 0.45)',
                }}
              >
                <svg className="w-5 h-5 text-cyan-300 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                <span>Add to Chrome — It&apos;s Free</span>
              </a>

              <Link
                href="/pricing/"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 inline-flex items-center justify-center gap-2 transition-all"
              >
                <span>Buy 4K IPTV Subscription</span>
                <span className="text-purple-400">→</span>
              </Link>
            </div>

            {/* Trust highlights */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 pt-4">
              <span className="flex items-center gap-1.5">
                <span className="text-yellow-400">★★★★★</span> 5.0 Chrome Web Store
              </span>
              <span className="text-zinc-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-green-400">✓</span> Zero CORS Buffering
              </span>
              <span className="text-zinc-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-purple-400">⚡</span> Xtream Codes &amp; M3U Supported
              </span>
              <span className="text-zinc-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-cyan-400">✓</span> 100% Free Forever
              </span>
            </div>
          </div>
        </section>

        {/* High Volume Feature Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-900/60">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
              The Best IPTV Player for Windows, Mac &amp; Chrome
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg">
              Engineered specifically for web browsers. Say goodbye to heavy Android emulators, crashing desktop
              apps, and complex VLC configurations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-8 hover:border-purple-500/40 transition-all flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 font-bold text-xl">
                💻
              </div>
              <h3 className="text-xl font-bold text-white mb-3">IPTV Player for Windows &amp; Mac</h3>
              <p className="text-zinc-400 text-sm leading-relaxed flex-grow">
                Watch IPTV online without installing Bluestacks or heavy virtual machines. Runs natively inside
                Google Chrome, Brave, and Edge on any desktop or laptop operating system.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-8 hover:border-purple-500/40 transition-all flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 font-bold text-xl">
                📡
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Universal HLS &amp; M3U8 Player Online</h3>
              <p className="text-zinc-400 text-sm leading-relaxed flex-grow">
                Seamlessly renders HLS .m3u8 live feeds and on-demand video files. Supports multi-bitrate adaptive
                streaming, alternate audio tracks, and embedded subtitle tracks.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-8 hover:border-purple-500/40 transition-all flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-6 font-bold text-xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Xtream Codes Web Player API</h3>
              <p className="text-zinc-400 text-sm leading-relaxed flex-grow">
                Enter your Server URL, Username, and Password to pull your provider bouquets automatically. Categorized
                by Live TV, Movies, Series, and Catch-up.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-8 hover:border-purple-500/40 transition-all flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 mb-6 font-bold text-xl">
                🛡️
              </div>
              <h3 className="text-xl font-bold text-white mb-3">CORS &amp; User-Agent Bypass</h3>
              <p className="text-zinc-400 text-sm leading-relaxed flex-grow">
                Automatic declarative net request rules strip blocking CORS headers and set authentic Smarters
                user-agent strings so your streams never get blocked by browser security.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-8 hover:border-purple-500/40 transition-all flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-6 font-bold text-xl">
                📊
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Real-Time Stream Diagnostics</h3>
              <p className="text-zinc-400 text-sm leading-relaxed flex-grow">
                Built-in diagnostic overlay reveals stream resolution, framerate, buffer duration, and network
                throughput so you can pinpoint any freezing or provider bottlenecks.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-8 hover:border-purple-500/40 transition-all flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 font-bold text-xl">
                🪶
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lightweight &amp; Battery Friendly</h3>
              <p className="text-zinc-400 text-sm leading-relaxed flex-grow">
                Consumes less than 50MB of RAM compared to 2GB+ required by emulators. Hardware-accelerated GPU decoding
                ensures your laptop battery lasts while streaming live sports.
              </p>
            </div>
          </div>
        </section>

        {/* 3-Step Setup Guide */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-900/60">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Quick Start</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
              How to Watch IPTV Online in 3 Steps
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Get up and streaming in under 60 seconds with your Chrome browser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-8 text-center relative">
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center mx-auto mb-6 text-lg shadow-lg shadow-purple-600/30">
                1
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Install the Extension</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Click <strong>Add to Chrome</strong> on the official Chrome Web Store. The extension installs in seconds
                with zero configuration needed.
              </p>
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 text-xs font-semibold inline-flex items-center gap-1"
              >
                <span>Get Extension</span>
                <span>↗</span>
              </a>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-8 text-center relative">
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center mx-auto mb-6 text-lg shadow-lg shadow-purple-600/30">
                2
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Enter Stream Details</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Open the extension popup and choose <strong>Xtream Codes Login</strong> or{' '}
                <strong>M3U Playlist URL</strong>. Enter your subscription credentials.
              </p>
              <Link
                href="/pricing/"
                className="text-purple-400 hover:text-purple-300 text-xs font-semibold inline-flex items-center gap-1"
              >
                <span>Need a Playlist? View Plans</span>
                <span>→</span>
              </Link>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-8 text-center relative">
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center mx-auto mb-6 text-lg shadow-lg shadow-purple-600/30">
                3
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Start 4K Streaming</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Click Play on any channel. Enjoy seamless live sports, news, and movies with automatic anti-freeze buffer
                stabilization.
              </p>
              <span className="text-green-400 text-xs font-semibold">✓ Ready to Stream</span>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-zinc-900/60">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Web Player Extension vs. Traditional Software
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Why thousands of IPTV users switched to browser streaming on PC and Mac.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/30">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-900 text-zinc-300 border-b border-zinc-800 text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Feature</th>
                  <th className="p-4 text-purple-400 font-bold">Smarters Web Player</th>
                  <th className="p-4 text-zinc-400">Android Emulators (Bluestacks)</th>
                  <th className="p-4 text-zinc-400">Desktop VLC Player</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                <tr>
                  <td className="p-4 font-semibold text-white">Setup Time</td>
                  <td className="p-4 text-green-400 font-bold">&lt; 15 seconds</td>
                  <td className="p-4 text-red-400">15–20 minutes</td>
                  <td className="p-4 text-yellow-400">5 minutes</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Memory (RAM) Usage</td>
                  <td className="p-4 text-green-400 font-bold">~45 MB</td>
                  <td className="p-4 text-red-400">2,000 MB+ (2 GB)</td>
                  <td className="p-4 text-yellow-400">250 MB</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Browser CORS Handling</td>
                  <td className="p-4 text-green-400 font-bold">Automatic Bypass</td>
                  <td className="p-4 text-zinc-400">N/A (Virtual Machine)</td>
                  <td className="p-4 text-zinc-400">No Web Integration</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Xtream Codes API Login</td>
                  <td className="p-4 text-green-400 font-bold">Native 1-Click</td>
                  <td className="p-4 text-yellow-400">Requires APK Install</td>
                  <td className="p-4 text-red-400">Manual M3U Only</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Cost</td>
                  <td className="p-4 text-green-400 font-bold">100% Free</td>
                  <td className="p-4 text-zinc-400">Free (Ad-supported)</td>
                  <td className="p-4 text-zinc-400">Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Everything you need to know about our Chrome IPTV web player.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 transition-colors [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-bold text-white text-base">
                  <span>{faq.q}</span>
                  <span className="ml-4 text-purple-400 transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/40 via-violet-900/30 to-zinc-900 border border-purple-500/30 rounded-3xl p-10 sm:p-14 shadow-2xl relative overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Start Streaming IPTV in Your Browser Today
            </h2>
            <p className="text-zinc-400 text-base max-w-xl mx-auto mb-8">
              Install the free extension from the Chrome Web Store and experience the fastest web player for HLS &amp;
              Xtream Codes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm text-white inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-900/50"
              >
                <span>Add to Chrome Extension</span>
                <span>↗</span>
              </a>
              <Link
                href="/pricing/"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm text-white bg-zinc-800 hover:bg-zinc-700 transition-all"
              >
                <span>Get IPTV Subscription</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
