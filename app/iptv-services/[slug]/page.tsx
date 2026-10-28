import React from 'react';
import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getOriginalMain } from '@/lib/getPageContent';

export const viewport: Viewport = {
  themeColor: '#0a0a0c',
};

const SUBPAGES = [
  '4k-streaming-providers',
  'live-tv-vod-providers',
  'smart-tv-providers',
  'sports-iptv-providers',
  'xtream-codes-providers',
];

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SUBPAGES.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const formattedTitle = params.slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  const title = `${formattedTitle} | IPTV Smarters Pro`;
  const canonicalUrl = `https://thesmartersiptv.com/iptv-services/${params.slug}/`;

  return {
    title,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      url: canonicalUrl,
      images: ['/og-image.jpg'],
    },
  };
}

export default function IptvServicesSubpage({ params }: PageProps) {
  const mainHtml = getOriginalMain(`iptv-services/${params.slug}/index.html`);
  return (
    <>
      <Header currentLang="en" />
      <main className="flex-1" dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <Footer currentLang="en" />
    </>
  );
}
