import React from 'react';
import { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import VodSection from '@/components/home/VodSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import SetupWalkthrough from '@/components/home/SetupWalkthrough';
import DevicesSection from '@/components/home/DevicesSection';
import PricingSection from '@/components/home/PricingSection';
import TrustHighlights from '@/components/home/TrustHighlights';
import FaqSection from '@/components/home/FaqSection';
import KnowledgeHubSection from '@/components/home/KnowledgeHubSection';

export const viewport: Viewport = {
  themeColor: '#7B3FE4',
};

export const metadata: Metadata = {
  title: 'The Smarters IPTV — Best IPTV Smarters Pro 4K Subscription (2026)',
  description:
    'Official setup guides and top-rated IPTV Smarters Pro 4K subscription. Stream 25,000+ live channels, 100,000+ VOD movies with anti-freeze and instant Xtream Codes activation.',
  keywords:
    'IPTV Smarters Pro, IPTV Smarters Pro subscription, IPTV Smarters Pro setup guide, IPTV Smarters Pro Xtream Codes, IPTV Smarters Pro 4K streaming, IPTV Smarters Pro app download, IPTV Smarters Pro APK',
  authors: [{ name: 'IPTV Smarters Pro' }],
  alternates: {
    canonical: 'https://thesmartersiptv.com/',
    languages: {
      en: 'https://thesmartersiptv.com/',
      fr: 'https://thesmartersiptv.com/fr/',
      de: 'https://thesmartersiptv.com/de/',
      it: 'https://thesmartersiptv.com/it/',
      es: 'https://thesmartersiptv.com/es/',
      pt: 'https://thesmartersiptv.com/pt/',
      'pt-BR': 'https://thesmartersiptv.com/pt-br/',
      nl: 'https://thesmartersiptv.com/nl/',
      pl: 'https://thesmartersiptv.com/pl/',
      ar: 'https://thesmartersiptv.com/ar/',
      ko: 'https://thesmartersiptv.com/ko/',
      'x-default': 'https://thesmartersiptv.com/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thesmartersiptv.com/',
    siteName: 'IPTV Smarters Pro',
    title: 'The Smarters IPTV — Best IPTV Smarters Pro 4K Subscription (2026)',
    description:
      'Official setup guides and top-rated IPTV Smarters Pro 4K subscription. Stream 25,000+ live channels, 100,000+ VOD movies with anti-freeze and instant Xtream Codes activation.',
    images: [
      {
        url: 'https://thesmartersiptv.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Smarters IPTV',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Smarters IPTV — Best IPTV Smarters Pro 4K Subscription (2026)',
    description:
      'Official setup guides and top-rated IPTV Smarters Pro 4K subscription. Stream 25,000+ live channels, 100,000+ VOD movies with anti-freeze and instant Xtream Codes activation.',
    images: ['https://thesmartersiptv.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://thesmartersiptv.com/#website',
      url: 'https://thesmartersiptv.com/',
      name: 'The Smarters IPTV',
      description:
        'Official IPTV Smarters Pro 4K subscription with 25,000+ live TV channels, 100,000+ VOD movies & series, anti-freeze technology, and instant Xtream Codes activation.',
      inLanguage: 'en',
    },
    {
      '@type': 'Organization',
      '@id': 'https://thesmartersiptv.com/#organization',
      name: 'The Smarters IPTV',
      url: 'https://thesmartersiptv.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://thesmartersiptv.com/assets/images/brand/logo.png',
      },
    },
    {
      '@type': 'Product',
      '@id': 'https://thesmartersiptv.com/#product',
      name: 'IPTV Smarters Pro 4K Subscription',
      image: 'https://thesmartersiptv.com/assets/images/brand/logo.png',
      description:
        'Official IPTV Smarters Pro 4K subscription with 25,000+ live TV channels, 100,000+ VOD movies & series, anti-freeze technology, and instant Xtream Codes activation.',
      brand: {
        '@type': 'Brand',
        name: 'IPTV Smarters Pro',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '1640',
        reviewCount: '1640',
      },
      review: [
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1',
          },
          author: {
            '@type': 'Person',
            name: 'David Miller',
          },
          datePublished: '2026-01-15',
          reviewBody:
            'Flawless 4K streaming and instant Xtream Codes activation. Zero buffering during live sports and huge VOD collection.',
        },
      ],
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '14.95',
        highPrice: '99.95',
        offerCount: '5',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: 'https://thesmartersiptv.com/pricing/',
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://thesmartersiptv.com/#software',
      name: 'IPTV Smarters Pro',
      operatingSystem: 'Android, iOS, Windows, macOS, Amazon Fire TV Stick, Samsung Smart TV, LG Smart TV',
      applicationCategory: 'MultimediaApplication',
      description:
        'Premium 4K video player application supporting Xtream Codes API, M3U playlists, EPG, multi-screen, and catch-up TV.',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        ratingCount: '1640',
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '14.95',
        highPrice: '99.95',
        offerCount: '5',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://thesmartersiptv.com/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://thesmartersiptv.com/',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://thesmartersiptv.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the IPTV Smarters Pro app free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'The app itself is entirely free to download and install on most platforms. However, it does not come with any content. You must purchase a subscription from a service provider (like us) to actually watch live TV or movies. The app is essentially a blank media player until you add a playlist.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I log in using Xtream Codes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              "When you open the Smarters Pro player, select the 'Login with Xtream Codes API' option. You will need to enter four pieces of information: any name you want (like 'My TV'), the username we email you, your password, and our portal URL. This is the fastest and most reliable setup method.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can I install it on an Amazon Firestick?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes, but because it is not always available in the official Amazon App Store, you may need to sideload the Smarters Pro APK using the Downloader app. The process takes about two minutes, and it remains one of the top Firestick IPTV apps available.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is my EPG guide not loading?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              "This usually happens if your provider's server is struggling, or if you entered a long M3U playlist link instead of using the API login. Using our Xtream Codes setup ensures your TV guide populates automatically and stays synced.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does the app support multi-screen streaming?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes, it has a built-in multi-screen feature that allows you to watch up to four live channels simultaneously on the same display. Please note that your subscription must have multiple connections enabled (like our 2 or 3 device plans) to use this feature without freezing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is a VPN required to use this service?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'We do not mandate a VPN because our service uses secure, load-balanced servers. However, we are completely VPN-friendly. If you experience ISP throttling during major sporting events, connecting to a VPN can quickly resolve those speed issues.',
          },
        },
      ],
    },
  ],
};

export default function RootHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Header currentLang="en" />
      <main className="flex-1">
        <HeroSection />
        <VodSection />
        <FeaturesSection />
        <SetupWalkthrough />
        <DevicesSection />
        <PricingSection />
        <TrustHighlights />
        <FaqSection />
        <KnowledgeHubSection />
      </main>
      <Footer currentLang="en" />
    </>
  );
}
