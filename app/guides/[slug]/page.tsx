import React from 'react';
import { Metadata } from 'next';
import { getGuideBySlug, GUIDES } from '@/data/guides';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getOriginalMain } from '@/lib/getPageContent';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return GUIDES.map(guide => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug);
  if (!guide) {
    return { title: 'Guide Not Found | IPTV Smarters Pro' };
  }

  const title = `${guide.title} | IPTV Smarters Pro`;
  const description = guide.desc;
  const canonicalUrl = `https://thesmartersiptv.com/guides/${params.slug}/`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'article',
      images: ['/og-image.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
  };
}

export default function EnglishGuidePage({ params }: PageProps) {
  const mainHtml = getOriginalMain(`guides/${params.slug}/index.html`);
  return (
    <>
      <Header currentLang="en" guideSlug={params.slug} />
      <main className="flex-1" dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <Footer currentLang="en" />
    </>
  );
}
