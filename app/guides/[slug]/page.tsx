import React from 'react';
import { Metadata } from 'next';
import { getGuideBySlug, GUIDES } from '@/data/guides';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getOriginalMain, getOriginalJsonLd } from '@/lib/getPageContent';

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
  const guide = getGuideBySlug(params.slug);
  const mainHtml = getOriginalMain(`guides/${params.slug}/index.html`);
  const originalJsonLd = getOriginalJsonLd(`guides/${params.slug}/index.html`);

  const fallbackJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `https://thesmartersiptv.com/guides/${params.slug}/#article`,
        headline: guide ? guide.title : params.slug,
        description: guide ? guide.desc : '',
        url: `https://thesmartersiptv.com/guides/${params.slug}/`,
        image: 'https://thesmartersiptv.com/og-image.jpg',
        inLanguage: 'en',
        publisher: {
          '@type': 'Organization',
          name: 'IPTV Smarters Pro',
          url: 'https://thesmartersiptv.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://thesmartersiptv.com/assets/images/brand/logo.png',
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://thesmartersiptv.com/guides/${params.slug}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://thesmartersiptv.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Guides',
            item: 'https://thesmartersiptv.com/guides/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide ? guide.title : params.slug,
            item: `https://thesmartersiptv.com/guides/${params.slug}/`,
          },
        ],
      },
    ],
  };

  const jsonLd = originalJsonLd || fallbackJsonLd;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header currentLang="en" guideSlug={params.slug} />
      <main className="flex-1" dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <Footer currentLang="en" />
    </>
  );
}
