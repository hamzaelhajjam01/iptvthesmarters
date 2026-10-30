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
    title: `IPTV Reseller Panel (${currentLocale.name}) — IPTV Smarters Pro`,
    description: `Start your profitable IPTV business. Buy wholesale credits, activate lines instantly, keep 60-70% profit with our premium IPTV panel.`,
    alternates: {
      canonical: `https://thesmartersiptv.com/${params.lang}/reseller/`,
    },
  };
}

export default function LocalizedResellerPage({ params }: PageProps) {
  const mainHtml = getOriginalMain(`${params.lang}/reseller/index.html`);
  return (
    <>
      <Header currentLang={params.lang} />
      <main className="flex-1" dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <Footer currentLang={params.lang} />
    </>
  );
}
