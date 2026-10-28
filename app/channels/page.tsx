import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChannelsView from '@/components/ChannelsView';

export const metadata: Metadata = {
  title: 'IPTV Smarters Pro Channels List (2026) — 25,000+ 4K Live Channels',
  description: 'Explore our complete IPTV Smarters Pro 4K channels lineup: Sports, Cinema, USA, UK, Canada, France, Spain, Germany, Arabic, Latino, and 100,000+ VOD movies.',
  alternates: {
    canonical: 'https://thesmartersiptv.com/channels/',
  },
};

export default function EnglishChannelsPage() {
  return (
    <>
      <Header currentLang="en" />
      <main className="flex-1">
        <ChannelsView lang="en" />
      </main>
      <Footer currentLang="en" />
    </>
  );
}
