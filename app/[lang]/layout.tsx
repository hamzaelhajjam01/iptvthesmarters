import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LOCALES } from '@/data/locales';

export async function generateStaticParams() {
  return Object.keys(LOCALES)
    .filter(lang => lang !== 'en')
    .map(lang => ({ lang }));
}

interface LocalizedLayoutProps {
  children: React.ReactNode;
  params: { lang: string };
}

export default function LocalizedLayout({ children, params }: LocalizedLayoutProps) {
  const currentLocale = LOCALES[params.lang] || LOCALES.en;
  const isRtl = currentLocale.dir === 'rtl';

  return (
    <div lang={params.lang} dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen flex flex-col">
      <Header currentLang={params.lang} />
      <main className="flex-1">{children}</main>
      <Footer currentLang={params.lang} />
    </div>
  );
}
