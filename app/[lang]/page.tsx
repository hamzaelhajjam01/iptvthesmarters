import React from 'react';
import { Metadata } from 'next';
import { LOCALES } from '@/data/locales';
import HomeView from '@/components/HomeView';

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
    title: `The Smarters IPTV (${currentLocale.name}) — Best IPTV Smarters Pro 4K Subscription (2026)`,
    description: 'Official setup guides and top-rated IPTV Smarters Pro 4K subscription. Stream 25,000+ live channels, 100,000+ VOD movies with anti-freeze and instant Xtream Codes activation.',
    alternates: {
      canonical: `https://thesmartersiptv.com/${params.lang}/`,
    },
  };
}

export default function LocalizedHomePage({ params }: PageProps) {
  return <HomeView lang={params.lang} />;
}
