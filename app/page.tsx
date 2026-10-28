import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeView from '@/components/HomeView';

export default function RootHomePage() {
  return (
    <>
      <Header currentLang="en" />
      <main className="flex-1">
        <HomeView lang="en" />
      </main>
      <Footer currentLang="en" />
    </>
  );
}
