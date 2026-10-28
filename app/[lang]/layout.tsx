import React from 'react';
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
    <div lang={params.lang} dir={isRtl ? 'rtl' : 'ltr'} style={{ display: 'contents' }}>
      {children}
    </div>
  );
}
