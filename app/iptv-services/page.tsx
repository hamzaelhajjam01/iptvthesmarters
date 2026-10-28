import React from 'react';
import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getOriginalMain } from '@/lib/getPageContent';

export const viewport: Viewport = {
  themeColor: '#0a0a0c',
};

export const metadata: Metadata = {
  title: 'IPTV Services Directory — Top Compatible Providers | IPTV Smarters Pro',
  description: 'Directory of top IPTV services fully compatible with IPTV Smarters Pro, Xtream Codes API, and M3U playlists with fast setup guides.',
  alternates: {
    canonical: 'https://thesmartersiptv.com/iptv-services/',
  },
  openGraph: {
    title: 'IPTV Services Directory — Top Compatible Providers',
    description: 'Directory of top IPTV services fully compatible with IPTV Smarters Pro, Xtream Codes API, and M3U playlists with fast setup guides.',
    url: 'https://thesmartersiptv.com/iptv-services/',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV Services Directory — Top Compatible Providers',
    description: 'Directory of top IPTV services fully compatible with IPTV Smarters Pro, Xtream Codes API, and M3U playlists with fast setup guides.',
    images: ['/og-image.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://thesmartersiptv.com/iptv-services/#services',
      url: 'https://thesmartersiptv.com/iptv-services/',
      name: 'IPTV Services & Solutions | IPTV Smarters Pro',
      description: 'Explore premium IPTV services, supported connection protocols, server infrastructure, and compatible device walkthroughs.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://thesmartersiptv.com/iptv-services/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://thesmartersiptv.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'IPTV Services',
          item: 'https://thesmartersiptv.com/iptv-services/',
        },
      ],
    },
  ],
};

export default function IptvServicesPage() {
  const mainHtml = getOriginalMain('iptv-services/index.html');
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header currentLang="en" />
      <main className="flex-1" dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <Footer currentLang="en" />
    </>
  );
}
