import React from 'react';
import { LOCALES } from '@/data/locales';
import LegalView from '@/components/LegalView';

export async function generateStaticParams() {
  return Object.keys(LOCALES)
    .filter(lang => lang !== 'en')
    .map(lang => ({ lang }));
}

export const metadata = {
  title: 'Refund Policy | IPTV Smarters Pro',
};

export default function LocalizedRefundPage({ params }: { params: { lang: string } }) {
  return <LegalView lang={params.lang} type="refund" />;
}
