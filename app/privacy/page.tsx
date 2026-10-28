import React from 'react';
import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const viewport: Viewport = {
  themeColor: '#0a0a0c',
};

export const metadata: Metadata = {
  title: 'Privacy Policy | IPTV Smarters Pro',
  description: 'Read the IPTV Smarters Pro privacy policy. We protect your personal data and maintain a strict zero-activity logging policy.',
  alternates: {
    canonical: 'https://thesmartersiptv.com/privacy/',
  },
  openGraph: {
    title: 'Privacy Policy | IPTV Smarters Pro',
    description: 'Read the IPTV Smarters Pro privacy policy. We protect your personal data and maintain a strict zero-activity logging policy.',
    url: 'https://thesmartersiptv.com/privacy/',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | IPTV Smarters Pro',
    description: 'Read the IPTV Smarters Pro privacy policy. We protect your personal data and maintain a strict zero-activity logging policy.',
    images: ['/og-image.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://thesmartersiptv.com/privacy/#webpage',
      url: 'https://thesmartersiptv.com/privacy/',
      name: 'Privacy Policy | IPTV Smarters Pro',
      description: 'Privacy policy explaining how IPTV Smarters Pro handles user data, security, and customer privacy.',
      inLanguage: 'en',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://thesmartersiptv.com/privacy/#breadcrumb',
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
          name: 'Privacy Policy | IPTV Smarters Pro',
          item: 'https://thesmartersiptv.com/privacy/',
        },
      ],
    },
  ],
};

export default function EnglishPrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header currentLang="en" />
      <main className="flex-1">
        <div className="bg-black min-h-screen">
          <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden px-4">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex flex-col items-center justify-center gap-4 mb-4">
                <div className="w-0.5 h-6 bg-cyan-500" />
                <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Legal</span>
              </div>
              <h1 className="reveal-on-scroll text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight is-visible">
                Privacy <span className="text-gradient-blue-cyan">Policy</span>
              </h1>
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                How we collect, protect, and use your information at IPTV Smarters Pro.
              </p>
              <p className="text-zinc-600 text-sm mt-4">Last updated: July 27, 2026</p>
            </div>
          </section>
          <section className="pb-24 px-4">
            <div className="max-w-3xl mx-auto">
              <div className="reveal-on-scroll bg-zinc-900/30 border border-zinc-800/60 rounded-3xl p-8 md:p-12 is-visible">
                <div className="prose prose-invert max-w-none prose-p:text-zinc-400 prose-p:leading-relaxed prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight prose-strong:text-white">
                  <p>
                    At IPTV Smarters Pro, we respect your privacy and are committed to protecting it. We collect only
                    the essential information needed to process your subscription (such as email and payment details).
                  </p>
                  <h2>Data Collection</h2>
                  <p>
                    We do not collect unnecessary personal data. Your email is used solely for sending credentials and
                    support communication.
                  </p>
                  <h2>No Logging Policy</h2>
                  <p>
                    We absolutely never log your viewing activity, IP addresses, or browsing history. What you stream is
                    entirely your business.
                  </p>
                  <h2>Data Sharing</h2>
                  <p>
                    We never sell your data to third parties. We use PCI-compliant payment gateways to ensure your
                    financial data is secure and never stored on our servers.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer currentLang="en" />
    </>
  );
}
