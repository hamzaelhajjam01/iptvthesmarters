import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LOCALES } from '@/data/locales';
import { GUIDES } from '@/data/guides';
import { getOriginalMain } from '@/lib/getPageContent';

interface PageProps {
  params: {
    lang: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const params: Array<{ lang: string; slug: string }> = [];
  const nonEnglishLangs = Object.keys(LOCALES).filter(l => l !== 'en');

  for (const lang of nonEnglishLangs) {
    for (const guide of GUIDES) {
      params.push({ lang, slug: guide.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const currentLocale = LOCALES[params.lang] || LOCALES.en;
  const canonicalUrl = `https://thesmartersiptv.com/${params.lang}/guides/${params.slug}/`;

  return {
    title: `Guide (${currentLocale.name}) | IPTV Smarters Pro`,
    description: 'Complete tutorial and setup instructions for IPTV Smarters Pro.',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `Guide (${currentLocale.name}) | IPTV Smarters Pro`,
      description: 'Complete tutorial and setup instructions for IPTV Smarters Pro.',
      url: canonicalUrl,
      type: 'article',
      images: ['/og-image.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Guide (${currentLocale.name}) | IPTV Smarters Pro`,
      description: 'Complete tutorial and setup instructions for IPTV Smarters Pro.',
      images: ['/og-image.jpg'],
    },
  };
}

export default function LocalizedGuidePage({ params }: PageProps) {
  const mainHtml = getOriginalMain(`${params.lang}/guides/${params.slug}/index.html`);
  return (
    <>
      <Header currentLang={params.lang} guideSlug={params.slug} />
      <main className="flex-1" dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <Footer currentLang={params.lang} />
    </>
  );
}
