import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'IPTV Smarters Pro Features — 4K Streaming, Anti-Buffer & EPG',
  description:
    'Explore IPTV Smarters Pro features: 20 Gbps high-speed edge network, 4K UHD streaming, multi-screen, 7-day EPG TV guide, catch-up TV, and 24/7 technical support.',
  keywords:
    'IPTV Smarters Pro features, 4k iptv streaming, anti freeze iptv, iptv smarters epg, catch up tv iptv, multi screen streaming',
  alternates: {
    canonical: 'https://thesmartersiptv.com/features/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thesmartersiptv.com/features/',
    siteName: 'IPTV Smarters Pro',
    title: 'IPTV Smarters Pro Features — 4K Streaming, Anti-Buffer & EPG',
    description:
      'Explore IPTV Smarters Pro features: 20 Gbps high-speed edge network, 4K UHD streaming, multi-screen, 7-day EPG TV guide, catch-up TV, and 24/7 technical support.',
    images: [
      {
        url: 'https://thesmartersiptv.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IPTV Smarters Pro Features',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV Smarters Pro Features — 4K Streaming, Anti-Buffer & EPG',
    description:
      'Explore IPTV Smarters Pro features: 20 Gbps high-speed edge network, 4K UHD streaming, multi-screen, 7-day EPG TV guide, catch-up TV, and 24/7 technical support.',
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

const FEATURE_CARDS = [
  {
    title: 'High-Speed Edge Network',
    desc: 'Powered by a 20 Gbps edge network. We use closest-node routing and redundant fallback streams to guarantee 99.9% uptime.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-network w-6 h-6 text-cyan-400">
        <rect x="16" y="16" width="6" height="6" rx="1"></rect>
        <rect x="2" y="16" width="6" height="6" rx="1"></rect>
        <rect x="9" y="2" width="6" height="6" rx="1"></rect>
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
        <path d="M12 12V8"></path>
      </svg>
    ),
  },
  {
    title: '4K Streaming',
    desc: 'Content delivered in its highest quality format, including 4K UHD depending on the source broadcast, with adaptive bitrate tech.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tv w-6 h-6 text-cyan-400">
        <rect width="20" height="15" x="2" y="7" rx="2" ry="2"></rect>
        <polyline points="17 2 12 7 7 2"></polyline>
      </svg>
    ),
  },
  {
    title: 'Full EPG Guide',
    desc: 'Our Electronic Program Guide updates every 24 hours. Features timezone detection and detailed past/current/upcoming listings.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-6 h-6 text-cyan-400">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
  },
  {
    title: 'Fast & Reliable Support',
    desc: 'Get help from real engineers via WhatsApp. We assist with setup, device configuration, channel requests, and billing.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-help w-6 h-6 text-cyan-400">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
        <path d="M12 17h.01"></path>
      </svg>
    ),
  },
  {
    title: 'Secure & Private',
    desc: 'Encrypted payment gateways. Zero personal data required to stream. We maintain no viewing logs or third-party tracking.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-6 h-6 text-cyan-400">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
      </svg>
    ),
  },
  {
    title: 'No Contracts',
    desc: 'Month-to-month flexibility or longer-duration savings. Cancel your subscription instantly via WhatsApp with no hidden fees.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock w-6 h-6 text-cyan-400">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
  },
  {
    title: 'Catch-Up TV',
    desc: 'Missed a show? Rewind and watch programs from the past 24–72 hours on all our supported Catch-Up channels.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-play w-6 h-6 text-cyan-400">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="10 8 16 12 10 16 10 8"></polygon>
      </svg>
    ),
  },
  {
    title: '120+ Countries',
    desc: 'Top live channels from around the world. USA, UK, Canada, France, Germany, Italy, Spain, Arabic, Turkish, Indian, LatAm, and more.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-6 h-6 text-cyan-400">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
        <path d="M2 12h20"></path>
      </svg>
    ),
  },
];

const COMPAT_DEVICES = [
  {
    title: 'Smart TV',
    desc: 'Samsung Tizen, LG webOS, Sony Bravia, Android TV',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor w-8 h-8 text-purple-400">
        <rect width="20" height="14" x="2" y="3" rx="2"></rect>
        <line x1="8" x2="16" y1="21" y2="21"></line>
        <line x1="12" x2="12" y1="17" y2="21"></line>
      </svg>
    ),
  },
  {
    title: 'Fire TV Stick',
    desc: 'TiviMate, Smarters, IBO Player sideloading',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tv w-8 h-8 text-purple-400">
        <rect width="20" height="15" x="2" y="7" rx="2" ry="2"></rect>
        <polyline points="17 2 12 7 7 2"></polyline>
      </svg>
    ),
  },
  {
    title: 'iOS & Android',
    desc: 'Native apps for iOS 14+ and Android 8+',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone w-8 h-8 text-purple-400">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
        <path d="M12 18h.01"></path>
      </svg>
    ),
  },
  {
    title: 'PC & Mac',
    desc: 'VLC, MyIPTV Player, Web browser viewing',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-laptop w-8 h-8 text-purple-400">
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
      </svg>
    ),
  },
  {
    title: 'MAG / Formuler',
    desc: 'Direct MAG portal URL & MAC address entry',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-8 h-8 text-purple-400">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
      </svg>
    ),
  },
];

const FAQS = [
  {
    q: 'How reliable is the streaming quality?',
    a: 'We run on a 20 Gbps backbone edge network with adaptive bitrate delivery. This means the stream automatically adjusts to your internet connection to prevent buffering.',
    isOpen: true,
  },
  {
    q: 'What internet speed do I need?',
    a: 'For smooth streaming, we recommend a minimum of 15 Mbps for Full HD (1080p) channels, and 25 Mbps for 4K Ultra HD streams.',
    isOpen: false,
  },
  {
    q: 'How detailed is the EPG?',
    a: 'Our EPG (Electronic Program Guide) updates daily, offering comprehensive current and upcoming listings, and automatically adjusts to your local timezone.',
    isOpen: false,
  },
  {
    q: 'What devices are compatible?',
    a: 'Almost everything with a screen. Smart TVs (Samsung, LG, Sony, Android TV), Amazon Fire TV Stick, Apple TV, iOS/Android smartphones and tablets, Windows/Mac PCs, and dedicated set-top boxes like MAG and Formuler.',
    isOpen: false,
  },
];

const featuresJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://thesmartersiptv.com/features/#webpage',
      url: 'https://thesmartersiptv.com/features/',
      name: 'IPTV Smarters Pro Features — 4K Streaming, Anti-Buffer & EPG',
      description:
        'Explore IPTV Smarters Pro features: 20 Gbps high-speed edge network, 4K UHD streaming, multi-screen, 7-day EPG TV guide, catch-up TV, and 24/7 technical support.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://thesmartersiptv.com/#website',
        name: 'The Smarters IPTV',
        url: 'https://thesmartersiptv.com/',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://thesmartersiptv.com/features/#breadcrumb',
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
          name: 'Features',
          item: 'https://thesmartersiptv.com/features/',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://thesmartersiptv.com/features/#faq',
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

export default function EnglishFeaturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(featuresJsonLd) }}
      />
      <Header currentLang="en" />
      <main className="flex-1">
        {/* Hero Section matching standard site hero */}
        <section className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex flex-col items-center justify-center gap-4 mb-4">
              <div className="w-0.5 h-6 bg-cyan-500"></div>
              <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Advanced Technology</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Advanced <span className="text-gradient">Streaming Features.</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              The technology and support behind your flawless IPTV Smarters Pro viewing experience.
            </p>
          </div>
        </section>

        <div>
          {/* Feature Grid */}
          <section className="py-8 reveal-on-scroll relative is-visible">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {FEATURE_CARDS.map((card, idx) => (
                  <div
                    key={idx}
                    className="reveal-on-scroll group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 hover:bg-zinc-900/50 hover:border-zinc-700/60 transition-all duration-300 flex flex-col items-start text-left overflow-hidden h-full is-visible"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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

          {/* Deep Device Compatibility */}
          <section className="py-8 px-4 bg-zinc-950/80 border-y border-zinc-900/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex flex-col items-center justify-center gap-4 mb-4">
                  <div className="w-0.5 h-6 bg-purple-500"></div>
                  <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Multi-Platform</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                  Deep Device Compatibility
                </h2>
                <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                  Native and sideloaded support across every major platform ecosystem.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {COMPAT_DEVICES.map((d, idx) => (
                  <div
                    key={idx}
                    className="reveal-on-scroll group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 text-center hover:bg-zinc-900/50 hover:border-zinc-700/60 transition-all duration-300 flex flex-col items-center overflow-hidden h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col items-center h-full">
                      <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all duration-300 shadow-lg shadow-black/20">
                        {d.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-purple-50 transition-colors">
                        {d.title}
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed flex-grow">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Setup in Three Steps */}
          <section className="py-8 reveal-on-scroll relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-6">
                <div className="flex flex-col items-center justify-center gap-4 mb-6">
                  <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-transparent rounded-full"></div>
                  <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">Quick Start</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Setup in three steps</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent -z-10"></div>
                <div className="bg-black/50 backdrop-blur-sm border border-zinc-800/60 p-10 rounded-3xl text-center relative group hover:border-zinc-700 transition-colors">
                  <div className="w-20 h-20 mx-auto bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex items-center justify-center mb-8 group-hover:border-blue-500 transition-colors shadow-lg shadow-black/50">
                    <span className="text-2xl font-black text-blue-400">01</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Choose plan</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Select your subscription duration with our 30-day money-back guarantee.
                  </p>
                </div>
                <div className="bg-black/50 backdrop-blur-sm border border-zinc-800/60 p-10 rounded-3xl text-center relative group hover:border-zinc-700 transition-colors">
                  <div className="w-20 h-20 mx-auto bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex items-center justify-center mb-8 group-hover:border-cyan-400 transition-colors shadow-lg shadow-black/50">
                    <span className="text-2xl font-black text-cyan-400">02</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Receive credentials</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Get your M3U playlist link and Xtream Codes login instantly via email.
                  </p>
                </div>
                <div className="bg-black/50 backdrop-blur-sm border border-zinc-800/60 p-10 rounded-3xl text-center relative group hover:border-zinc-700 transition-colors">
                  <div className="w-20 h-20 mx-auto bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex items-center justify-center mb-8 group-hover:border-purple-400 transition-colors shadow-lg shadow-black/50">
                    <span className="text-2xl font-black text-purple-400">03</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Start streaming</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Open IPTV Smarters Pro, TiviMate, or IBO Player, paste your credentials, and enjoy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Feature & Setup FAQs */}
          <section className="py-8 bg-zinc-950/30 border-t border-zinc-900/50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Feature &amp; Setup FAQs</h2>
              </div>
              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="faq-item group bg-zinc-900/30 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900/50"
                    open={faq.isOpen ? true : undefined}
                  >
                    <summary className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none cursor-pointer">
                      <span className="font-semibold pr-4 transition-colors text-white group-open:text-cyan-400">
                        {faq.q}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-5 h-5 transition-transform duration-300 group-open:rotate-180 text-zinc-500 group-open:text-cyan-400">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </summary>
                    <div className="px-6 pb-5 text-zinc-400 text-sm leading-relaxed">
                      <p>{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom Conversion CTA */}
          <section className="py-8 text-center border-t border-zinc-900/50 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Ready for the ultimate upgrade?
              </h2>
              <p className="text-zinc-400 mb-10 text-lg">
                Join thousands of viewers already streaming their favorite channels in 4K.
              </p>
              <Link
                href="/pricing/"
                className="group relative inline-flex px-8 py-4 rounded-full bg-gradient-primary text-white font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(123,63,228,0.3)] text-lg"
              >
                <span>View Plans</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer currentLang="en" />
    </>
  );
}
