import React from 'react';
import { Metadata } from 'next';
import { LOCALES } from '@/data/locales';
import ContactView from '@/components/ContactView';

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
    title: `Contact Us (${currentLocale.name}) — IPTV Smarters Pro Support`,
    description: 'Reach our 24/7 customer support for IPTV Smarters Pro setup, Xtream Codes activation, free trials, and troubleshooting via WhatsApp & email.',
    alternates: {
      canonical: `https://thesmartersiptv.com/${params.lang}/contact/`,
    },
  };
}

export default function LocalizedContactPage({ params }: PageProps) {
  return <ContactView lang={params.lang} />;
}
