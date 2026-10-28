import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalView from '@/components/LegalView';

export const metadata = {
  title: 'Terms of Service | IPTV Smarters Pro',
  description: 'Read the terms of service, acceptable use policy, and subscription guidelines for IPTV Smarters Pro.',
};

export default function EnglishTermsPage() {
  return (
    <>
      <Header currentLang="en" />
      <main className="flex-1">
        <LegalView lang="en" type="terms" />
      </main>
      <Footer currentLang="en" />
    </>
  );
}
