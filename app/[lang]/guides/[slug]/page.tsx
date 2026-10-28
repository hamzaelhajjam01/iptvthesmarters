import React from 'react';
import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LOCALES } from '@/data/locales';
import { getGuideBySlug, GUIDES } from '@/data/guides';
import { getOriginalMain } from '@/lib/getPageContent';

export const viewport: Viewport = {
  themeColor: '#0a0a0c',
};

interface PageProps {
  params: {
    lang: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const params: Array<{ lang: string; slug: string }> = [];
  const nonEnglishLangs = Object.keys(LOCALES).filter((l) => l !== 'en');

  for (const lang of nonEnglishLangs) {
    for (const guide of GUIDES) {
      params.push({ lang, slug: guide.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug);
  const localizedTitle =
    guide?.translations?.[params.lang]?.title || guide?.title || 'Guide';
  const localizedDesc =
    guide?.translations?.[params.lang]?.desc ||
    guide?.desc ||
    'Complete tutorial and setup instructions for IPTV Smarters Pro.';
  const title = `${localizedTitle} | IPTV Smarters Pro`;
  const canonicalUrl = `https://thesmartersiptv.com/${params.lang}/guides/${params.slug}/`;

  return {
    title,
    description: localizedDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description: localizedDesc,
      url: canonicalUrl,
      type: 'article',
      images: ['/og-image.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: localizedDesc,
      images: ['/og-image.jpg'],
    },
  };
}

export default function LocalizedGuidePage({ params }: PageProps) {
  const guide = getGuideBySlug(params.slug);
  const localizedTitle =
    guide?.translations?.[params.lang]?.title || guide?.title || params.slug;
  const localizedDesc =
    guide?.translations?.[params.lang]?.desc || guide?.desc || '';
  const mainHtml = getOriginalMain(`${params.lang}/guides/${params.slug}/index.html`);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `https://thesmartersiptv.com/${params.lang}/guides/${params.slug}/#article`,
        headline: localizedTitle,
        description: localizedDesc,
        url: `https://thesmartersiptv.com/${params.lang}/guides/${params.slug}/`,
        image: 'https://thesmartersiptv.com/og-image.jpg',
        inLanguage: params.lang,
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
        '@id': `https://thesmartersiptv.com/${params.lang}/guides/${params.slug}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `https://thesmartersiptv.com/${params.lang}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Guides',
            item: `https://thesmartersiptv.com/${params.lang}/guides/`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: localizedTitle,
            item: `https://thesmartersiptv.com/${params.lang}/guides/${params.slug}/`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header currentLang={params.lang} guideSlug={params.slug} />
      <main className="flex-1" dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <Footer currentLang={params.lang} />
    </>
  );
}
