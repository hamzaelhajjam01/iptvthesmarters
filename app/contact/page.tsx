import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact IPTV Smarters Pro Support — Always-On Assistance',
  description:
    'Get expert technical assistance and setup support for your IPTV Smarters Pro subscription via live WhatsApp chat.',
  keywords:
    'contact iptv smarters, iptv smarters support, iptv whatsapp support, iptv customer service, iptv smarters help',
  alternates: {
    canonical: 'https://thesmartersiptv.com/contact/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thesmartersiptv.com/contact/',
    siteName: 'IPTV Smarters Pro',
    title: 'Contact IPTV Smarters Pro Support — Always-On Assistance',
    description:
      'Get expert technical assistance and setup support for your IPTV Smarters Pro subscription via live WhatsApp chat.',
    images: [
      {
        url: 'https://thesmartersiptv.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact IPTV Smarters Pro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact IPTV Smarters Pro Support — Always-On Assistance',
    description:
      'Get expert technical assistance and setup support for your IPTV Smarters Pro subscription via live WhatsApp chat.',
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

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://thesmartersiptv.com/contact/#webpage',
      url: 'https://thesmartersiptv.com/contact/',
      name: 'Contact IPTV Smarters Pro Support',
      description:
        'Get expert technical assistance and setup support for your IPTV Smarters Pro subscription via live WhatsApp chat.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://thesmartersiptv.com/#website',
        name: 'The Smarters IPTV',
        url: 'https://thesmartersiptv.com/',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://thesmartersiptv.com/contact/#breadcrumb',
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
          name: 'Contact',
          item: 'https://thesmartersiptv.com/contact/',
        },
      ],
    },
  ],
};

export default function EnglishContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Header currentLang="en" />
      <main className="flex-1">
        <section className="pt-24 pb-8 md:pt-24 md:pb-8 px-4 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex flex-col items-center justify-center gap-4 mb-4">
              <div className="w-0.5 h-6 bg-cyan-500"></div>
              <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Support</span>
            </div>
            <h1 className="reveal-on-scroll text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight is-visible">
              How can we <span className="text-gradient">help?</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Whether you have a question about your IPTV Smarters Pro plan, need technical assistance, or want to
              report an issue, our dedicated support team is here around the clock.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-16">
            <a
              href="https://wa.me/18042804332?text=Hello%20IPTV%20Smarters%20Pro%20Support%2C%20I%20need%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-on-scroll bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl hover:border-emerald-500/40 p-10 flex flex-col items-center text-center hover:bg-zinc-900/60 transition-all group is-visible"
            >
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all"><img src="/assets/images/whatsapp.png" width={56} height={56} alt="WhatsApp" className="w-14 h-14 rounded-full" /></div>
              <h2 className="text-3xl font-bold text-white mb-4">Live Chat Support</h2>
              <p className="text-zinc-400 mb-8 text-lg flex-grow">
                Get the fastest response times by messaging our support agents directly on WhatsApp.
              </p>
              <span className="inline-flex items-center gap-2 text-emerald-400 font-semibold group-hover:text-emerald-300 text-lg">
                Chat on WhatsApp <span className="text-2xl">→</span>
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 border border-zinc-900 rounded-2xl bg-zinc-950/50">
            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <div>
                <h3 className="text-white font-semibold mb-1">Always Available</h3>
                <p className="text-sm text-zinc-400">
                  Our agents are online around the clock, 365 days a year to ensure your service is never interrupted.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <div>
                <h4 className="text-white font-semibold mb-1">Technical Experts</h4>
                <p className="text-sm text-zinc-400">
                  From Smart TV setup to advanced app configurations, our team knows exactly how to get you streaming.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer currentLang="en" />
    </>
  );
}
