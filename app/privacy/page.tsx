import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getOriginalMain } from '@/lib/getPageContent';

export const metadata = {
  title: 'Privacy Policy | IPTV Smarters Pro',
  description: 'Learn about how IPTV Smarters Pro handles privacy, data protection, and our zero-logging policy.',
};

export default function EnglishPrivacyPage() {
  const mainHtml = getOriginalMain('privacy/index.html');
  return (
    <>
      <Header currentLang="en" />
      <main className="flex-1" dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <Footer currentLang="en" />
    </>
  );
}
