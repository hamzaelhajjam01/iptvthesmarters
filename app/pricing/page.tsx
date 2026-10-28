import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingView from '@/components/PricingView';

export const metadata: Metadata = {
  title: 'Buy IPTV Smarters Pro 4K Subscription — Best Pricing Plans 2026',
  description: 'Choose from top-rated IPTV Smarters Pro 4K subscription plans starting from $14.95. Over 25,000 live channels, 100,000+ VOD movies, anti-freeze & instant Xtream Codes activation.',
  alternates: {
    canonical: 'https://thesmartersiptv.com/pricing/',
  },
};

export default function EnglishPricingPage() {
  return (
    <>
      <Header currentLang="en" />
      <main className="flex-1">
        <PricingView lang="en" />
      </main>
      <Footer currentLang="en" />
    </>
  );
}
