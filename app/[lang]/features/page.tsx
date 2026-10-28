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
    title: `IPTV Smarters Pro Features (${currentLocale.name}) — 4K & Anti-Freeze`,
    description: 'Explore IPTV Smarters Pro features: Anti-Freeze technology, 4K HDR live streams, 7-day EPG guide, Catch-up TV, multi-screen player, and fast Xtream Codes login.',
    alternates: {
      canonical: `https://thesmartersiptv.com/${params.lang}/features/`,
    },
  };
}

export default function LocalizedFeaturesPage({ params }: PageProps) {
  const mainHtml = getOriginalMain(`${params.lang}/features/index.html`);
  return (
    <>
      <Header currentLang={params.lang} />
      <main className="flex-1" dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <Footer currentLang={params.lang} />
    </>
  );
}
