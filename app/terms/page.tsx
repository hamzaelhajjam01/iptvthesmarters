import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getOriginalMain } from '@/lib/getPageContent';

export const metadata = {
  title: 'Terms of Service | IPTV Smarters Pro',
  description: 'Read the terms of service, acceptable use policy, and subscription guidelines for IPTV Smarters Pro.',
};

export default function EnglishTermsPage() {
  const mainHtml = getOriginalMain('terms/index.html');
  return (
    <>
      <Header currentLang="en" />
      <main className="flex-1" dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <Footer currentLang="en" />
    </>
  );
}
