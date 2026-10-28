import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getOriginalMain } from '@/lib/getPageContent';

export const metadata = {
  title: 'Refund Policy | IPTV Smarters Pro',
  description: 'Learn about our 7-day satisfaction money-back guarantee and refund policy for IPTV Smarters Pro subscriptions.',
};

export default function EnglishRefundPage() {
  const mainHtml = getOriginalMain('refund/index.html');
  return (
    <>
      <Header currentLang="en" />
      <main className="flex-1" dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <Footer currentLang="en" />
    </>
  );
}
