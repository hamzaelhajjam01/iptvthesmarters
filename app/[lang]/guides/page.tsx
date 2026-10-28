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
    title: `IPTV Smarters Pro Setup Guides (${currentLocale.name}) — Firestick, Smart TV, Android & iOS`,
    description: 'Step-by-step installation guides for IPTV Smarters Pro on Amazon Firestick, Samsung & LG Smart TV, Android, Windows, Mac, iOS, and Apple TV.',
    alternates: {
      canonical: `https://thesmartersiptv.com/${params.lang}/guides/`,
    },
  };
}

export default function LocalizedGuidesPage({ params }: PageProps) {
  const mainHtml = getOriginalMain(`${params.lang}/guides/index.html`);
  return (
    <>
      <Header currentLang={params.lang} />
      <main className="flex-1" dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <Footer currentLang={params.lang} />
    </>
  );
}
