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
    title: `IPTV Smarters Pro Pricing (${currentLocale.name}) — 4K Subscription Plans`,
    description: 'Choose from top-rated IPTV Smarters Pro 4K subscription plans starting from $14.95. Over 25,000 live channels, 100,000+ VOD movies, anti-freeze & instant Xtream Codes activation.',
    alternates: {
      canonical: `https://thesmartersiptv.com/${params.lang}/pricing/`,
    },
  };
}

export default function LocalizedPricingPage({ params }: PageProps) {
  const mainHtml = getOriginalMain(`${params.lang}/pricing/index.html`);
  return (
    <>
      <Header currentLang={params.lang} />
      <main className="flex-1" dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <Footer currentLang={params.lang} />
    </>
  );
}
