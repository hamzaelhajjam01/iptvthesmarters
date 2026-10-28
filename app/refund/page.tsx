import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalView from '@/components/LegalView';

export const metadata = {
  title: 'Refund Policy | IPTV Smarters Pro',
  description: 'Learn about our 7-day satisfaction money-back guarantee and refund policy for IPTV Smarters Pro subscriptions.',
};

export default function EnglishRefundPage() {
  return (
    <>
      <Header currentLang="en" />
      <main className="flex-1">
        <LegalView lang="en" type="refund" />
      </main>
      <Footer currentLang="en" />
    </>
  );
}
