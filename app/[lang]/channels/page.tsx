import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LOCALES } from '@/data/locales';
import { getOriginalMain } from '@/lib/getPageContent';

interface PageProps {
  params: {
    lang: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(LOCALES)
    .filter(lang => lang !== 'en')
    .map(lang => ({ lang }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const currentLocale = LOCALES[params.lang] || LOCALES.en;
  return {
    title: `IPTV Smarters Pro Channels (${currentLocale.name}) — 25,000+ Live Channels`,
    description: 'Full IPTV Smarters Pro channel lineup: 25,000+ live TV channels and 100,000+ movies & TV shows from US, UK, Canada, Europe, and worldwide in 4K and FHD.',
    alternates: {
      canonical: `https://thesmartersiptv.com/${params.lang}/channels/`,
    },
  };
}

export default function LocalizedChannelsPage({ params }: PageProps) {
  const mainHtml = getOriginalMain(`${params.lang}/channels/index.html`);
  return (
    <>
      <Header currentLang={params.lang} />
      <main className="flex-1" dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <Footer currentLang={params.lang} />
    </>
  );
}
