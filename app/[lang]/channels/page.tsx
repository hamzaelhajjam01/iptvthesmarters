import React from 'react';
import { Metadata } from 'next';
import { LOCALES } from '@/data/locales';
import ChannelsView from '@/components/ChannelsView';

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
    title: `IPTV Smarters Pro Channels List (${currentLocale.name}) — 25,000+ Channels`,
    description: 'Explore our complete IPTV Smarters Pro 4K channels lineup: Sports, Cinema, USA, UK, Canada, France, Spain, Germany, Arabic, Latino, and 100,000+ VOD movies.',
    alternates: {
      canonical: `https://thesmartersiptv.com/${params.lang}/channels/`,
    },
  };
}

export default function LocalizedChannelsPage({ params }: PageProps) {
  return <ChannelsView lang={params.lang} />;
}
