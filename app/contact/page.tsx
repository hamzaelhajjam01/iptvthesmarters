import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactView from '@/components/ContactView';

export const metadata: Metadata = {
  title: 'Contact Us — 24/7 IPTV Smarters Pro Technical Support',
  description: 'Reach our 24/7 customer support for IPTV Smarters Pro setup, Xtream Codes activation, free trials, and troubleshooting via WhatsApp & email.',
  alternates: {
    canonical: 'https://thesmartersiptv.com/contact/',
  },
};

export default function EnglishContactPage() {
  return (
    <>
      <Header currentLang="en" />
      <main className="flex-1">
        <ContactView lang="en" />
      </main>
      <Footer currentLang="en" />
    </>
  );
}
