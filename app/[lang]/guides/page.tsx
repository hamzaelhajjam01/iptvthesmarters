import React from 'react';
import { Metadata } from 'next';
import { LOCALES } from '@/data/locales';
import GuidesHubView from '@/components/GuidesHubView';

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
  const title = `IPTV Smarters Pro Guides (${currentLocale.name}) | Setup & Tutorials`;
  const canonicalUrl = `https://thesmartersiptv.com/${params.lang}/guides/`;

  return {
    title,
    description: 'Comprehensive walkthroughs, device installation guides, troubleshooting, and Xtream Codes playlist tutorials for IPTV Smarters Pro.',
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function LocalizedGuidesHubPage({ params }: PageProps) {
  return <GuidesHubView lang={params.lang} />;
}
