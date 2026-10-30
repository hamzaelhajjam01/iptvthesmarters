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
    title: `IPTV Solutions & Knowledge Base (${currentLocale.name}) | IPTV Smarters Pro`,
    description: `Curated directory of IPTV topics, hardware video encoders, compatible player applications, and troubleshooting guides.`,
    alternates: {
      canonical: `https://thesmartersiptv.com/${params.lang}/products/`,
    },
  };
}

export default function LocalizedProductsPage({ params }: PageProps) {
  const mainHtml = getOriginalMain(`${params.lang}/products/index.html`);
  return (
    <>
      <Header currentLang={params.lang} />
      <main className="flex-1" dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <Footer currentLang={params.lang} />
    </>
  );
}
