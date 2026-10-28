import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GuidesHubView from '@/components/GuidesHubView';

export const metadata: Metadata = {
  title: 'IPTV Smarters Pro Setup Guides & Tutorials (2026 Edition)',
  description: 'Comprehensive walkthroughs, device installation guides, troubleshooting, and Xtream Codes playlist tutorials for IPTV Smarters Pro.',
  alternates: {
    canonical: 'https://thesmartersiptv.com/guides/',
  },
};

export default function EnglishGuidesHubPage() {
  return (
    <>
      <Header currentLang="en" />
      <main className="flex-1">
        <GuidesHubView lang="en" />
      </main>
      <Footer currentLang="en" />
    </>
  );
}
