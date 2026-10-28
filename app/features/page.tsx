import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getOriginalMain } from '@/lib/getPageContent';

export const metadata: Metadata = {
  title: 'IPTV Smarters Pro Features — Anti-Freeze, 4K Streaming & Multi-Screen',
  description: 'Explore IPTV Smarters Pro features: Anti-Freeze technology, 4K HDR live streams, 7-day EPG guide, Catch-up TV, multi-screen player, and fast Xtream Codes login.',
  alternates: {
    canonical: 'https://thesmartersiptv.com/features/',
  },
};

export default function EnglishFeaturesPage() {
  const mainHtml = getOriginalMain('features/index.html');
  return (
    <>
      <Header currentLang="en" />
      <main className="flex-1" dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <Footer currentLang="en" />
    </>
  );
}
