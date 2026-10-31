import React from 'react';
import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getOriginalMain, getOriginalJsonLd } from '@/lib/getPageContent';

export const viewport: Viewport = {
  themeColor: '#7B3FE4',
};

export const metadata: Metadata = {
  title: 'IPTV Reseller Panel — Start Your IPTV Business | IPTV Smarters Pro',
  description:
    'Start your profitable IPTV business with our IPTV reseller panel. Wholesale credits from $1.49/credit, instant line activation, 99.9% anti-freeze uptime, and 24/7 WhatsApp support.',
  keywords:
    'iptv reseller, iptv reseller panel, buy iptv credits, start iptv business, iptv smarters reseller, xtream codes reseller',
  alternates: {
    canonical: 'https://thesmartersiptv.com/reseller/',
    languages: {
      en: 'https://thesmartersiptv.com/reseller/',
      fr: 'https://thesmartersiptv.com/fr/reseller/',
      de: 'https://thesmartersiptv.com/de/reseller/',
      it: 'https://thesmartersiptv.com/it/reseller/',
      es: 'https://thesmartersiptv.com/es/reseller/',
      pt: 'https://thesmartersiptv.com/pt/reseller/',
      'pt-BR': 'https://thesmartersiptv.com/pt-br/reseller/',
      nl: 'https://thesmartersiptv.com/nl/reseller/',
      pl: 'https://thesmartersiptv.com/pl/reseller/',
      ar: 'https://thesmartersiptv.com/ar/reseller/',
      ko: 'https://thesmartersiptv.com/ko/reseller/',
      'x-default': 'https://thesmartersiptv.com/reseller/',
    },
  },
  openGraph: {
    title: 'IPTV Reseller Panel — Start Your IPTV Business | IPTV Smarters Pro',
    description:
      'Launch your own IPTV brand. Buy wholesale credits, activate lines instantly, keep 60-70% profit. Xtream Codes compatible.',
    url: 'https://thesmartersiptv.com/reseller/',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV Reseller Panel — Start Your IPTV Business',
    description:
      'Wholesale IPTV credits, sub-reseller management, instant activation, 24/7 WhatsApp onboarding.',
    images: ['/og-image.jpg'],
  },
};

export default function ResellerPage() {
  const mainHtml = getOriginalMain('reseller/index.html');
  const jsonLd = getOriginalJsonLd('reseller/index.html');
  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Header currentLang="en" />
      <main className="flex-1" dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <Footer currentLang="en" />
    </>
  );
}
