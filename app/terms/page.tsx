import React from 'react';
import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const viewport: Viewport = {
  themeColor: '#0a0a0c',
};

export const metadata: Metadata = {
  title: 'Terms of Service | IPTV Smarters Pro',
  description: 'Review the terms of service for IPTV Smarters Pro subscriptions, service delivery, acceptable use, and user agreements.',
  alternates: {
    canonical: 'https://thesmartersiptv.com/terms/',
  },
  openGraph: {
    title: 'Terms of Service | IPTV Smarters Pro',
    description: 'Review the terms of service for IPTV Smarters Pro subscriptions, service delivery, acceptable use, and user agreements.',
    url: 'https://thesmartersiptv.com/terms/',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | IPTV Smarters Pro',
    description: 'Review the terms of service for IPTV Smarters Pro subscriptions, service delivery, acceptable use, and user agreements.',
    images: ['/og-image.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://thesmartersiptv.com/terms/#webpage',
      url: 'https://thesmartersiptv.com/terms/',
      name: 'Terms of Service | IPTV Smarters Pro',
      description: 'Terms of service and subscription agreement for IPTV Smarters Pro services and support.',
      inLanguage: 'en',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://thesmartersiptv.com/terms/#breadcrumb',
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
          name: 'Terms of Service | IPTV Smarters Pro',
          item: 'https://thesmartersiptv.com/terms/',
        },
      ],
    },
  ],
};

export default function EnglishTermsPage() {
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
                Terms of <span className="text-gradient-blue-cyan">Service</span>
              </h1>
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                The rules and agreements that govern your use of IPTV Smarters Pro.
              </p>
              <p className="text-zinc-600 text-sm mt-4">Last updated: July 27, 2026</p>
            </div>
          </section>
          <section className="pb-24 px-4">
            <div className="max-w-3xl mx-auto">
              <div className="reveal-on-scroll bg-zinc-900/30 border border-zinc-800/60 rounded-3xl p-8 md:p-12 is-visible">
                <div className="prose prose-invert max-w-none prose-p:text-zinc-400 prose-p:leading-relaxed prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight prose-strong:text-white">
                  <p>By using the IPTV Smarters Pro service, you agree to the following terms and conditions.</p>
                  <h2>Personal Use Only</h2>
                  <p>
                    Our service is provided for your personal, non-commercial use only. You may not restream, broadcast,
                    or share your subscription publicly.
                  </p>
                  <h2>Compliance</h2>
                  <p>
                    You are solely responsible for ensuring that your use of our service complies with your local laws.
                    We do not host any media directly on our servers; we act as an indexing and routing service
                    connecting you to third-party streams.
                  </p>
                  <h2>Non-Transferable</h2>
                  <p>
                    Subscriptions are non-transferable and intended for a single household per account. Sharing your
                    account outside your household may result in suspension.
                  </p>
                  <h2>Account Suspension</h2>
                  <p>
                    Violation of these terms, including attempting to circumvent device limits or sharing credentials
                    publicly, will result in immediate suspension of your account without prior notice or refund.
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
