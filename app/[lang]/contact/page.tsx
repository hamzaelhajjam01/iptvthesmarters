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
    title: `Contact IPTV Smarters Pro Support (${currentLocale.name}) — 24/7 WhatsApp & Email`,
    description: 'Get in touch with IPTV Smarters Pro customer service. 24/7 technical assistance for Xtream Codes activation, M3U playlist setup, and subscription inquiries.',
    alternates: {
      canonical: `https://thesmartersiptv.com/${params.lang}/contact/`,
    },
  };
}

export default function LocalizedContactPage({ params }: PageProps) {
  const mainHtml = getOriginalMain(`${params.lang}/contact/index.html`);
  return (
    <>
      <Header currentLang={params.lang} />
      <main className="flex-1" dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <Footer currentLang={params.lang} />
    </>
  );
}
