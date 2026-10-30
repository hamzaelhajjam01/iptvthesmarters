import React from 'react';
import { Metadata } from 'next';
import fs from 'node:fs';
import path from 'node:path';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getOriginalMain } from '@/lib/getPageContent';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const productsDir = path.join(process.cwd(), 'Iptv The smarters Pro', 'products');
  if (!fs.existsSync(productsDir)) return [];
  const entries = fs.readdirSync(productsDir, { withFileTypes: true });
  return entries
    .filter(e => e.isDirectory())
    .map(e => ({ slug: e.name }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const formattedTitle = params.slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title: `${formattedTitle} | IPTV Smarters Pro`,
    description: `Complete technical overview, hardware specifications, and setup instructions for ${formattedTitle}.`,
    alternates: {
      canonical: `https://thesmartersiptv.com/products/${params.slug}/`,
    },
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const mainHtml = getOriginalMain(`products/${params.slug}/index.html`);
  return (
    <>
      <Header currentLang="en" />
      <main className="flex-1" dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <Footer currentLang="en" />
    </>
  );
}
