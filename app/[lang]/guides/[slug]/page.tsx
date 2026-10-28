import React from 'react';
import { Metadata } from 'next';
import { getGuideBySlug, GUIDES } from '@/data/guides';
import { LOCALES } from '@/data/locales';
import GuideDetailView from '@/components/GuideDetailView';

interface PageProps {
  params: {
    lang: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const paths: { lang: string; slug: string }[] = [];
  const langKeys = Object.keys(LOCALES).filter(l => l !== 'en');

  for (const lang of langKeys) {
    for (const guide of GUIDES) {
      paths.push({
        lang,
        slug: guide.slug,
      });
    }
  }

  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug);
  if (!guide) {
    return { title: 'Guide Not Found | IPTV Smarters Pro' };
  }

  const localized = guide.translations[params.lang] || {
    title: guide.title,
    desc: guide.desc
  };

  const title = `${localized.title || guide.title} | IPTV Smarters Pro`;
  const description = localized.desc || guide.desc;
  const canonicalUrl = `https://thesmartersiptv.com/${params.lang}/guides/${params.slug}/`;

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

export default function LocalizedGuidePage({ params }: PageProps) {
  return <GuideDetailView lang={params.lang} slug={params.slug} />;
}
