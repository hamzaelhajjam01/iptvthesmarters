import React from 'react';
import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getOriginalMain } from '@/lib/getPageContent';

export const viewport: Viewport = {
  themeColor: '#7B3FE4',
};

export const metadata: Metadata = {
  title: 'IPTV Solutions & Knowledge Base Directory | IPTV Smarters Pro',
  description:
    'Explore our curated directory of IPTV topics: hardware video encoders, compatible player applications, playlist protocols, troubleshooting diagnostics, and subscription guides.',
  alternates: {
    canonical: 'https://thesmartersiptv.com/products/',
    languages: {
      en: 'https://thesmartersiptv.com/products/',
      fr: 'https://thesmartersiptv.com/fr/products/',
      de: 'https://thesmartersiptv.com/de/products/',
      it: 'https://thesmartersiptv.com/it/products/',
      es: 'https://thesmartersiptv.com/es/products/',
      pt: 'https://thesmartersiptv.com/pt/products/',
      'pt-BR': 'https://thesmartersiptv.com/pt-br/products/',
      nl: 'https://thesmartersiptv.com/nl/products/',
      pl: 'https://thesmartersiptv.com/pl/products/',
      ar: 'https://thesmartersiptv.com/ar/products/',
      ko: 'https://thesmartersiptv.com/ko/products/',
      'x-default': 'https://thesmartersiptv.com/products/',
    },
  },
  openGraph: {
    title: 'IPTV Solutions & Knowledge Base Directory | IPTV Smarters Pro',
    description:
      'Curated directory of IPTV hardware video encoders, compatible player apps, playlist protocols, and diagnostic guides.',
    url: 'https://thesmartersiptv.com/products/',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV Solutions & Knowledge Base Directory',
    description:
      'Curated directory of IPTV hardware video encoders, streaming protocols, and player apps.',
    images: ['/og-image.jpg'],
  },
};

export default function ProductsPage() {
  const mainHtml = getOriginalMain('products/index.html');
  return (
    <>
      <Header currentLang="en" />
      <main className="flex-1" dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <Footer currentLang="en" />
    </>
  );
}
