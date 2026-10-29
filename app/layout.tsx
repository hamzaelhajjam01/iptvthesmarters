import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://thesmartersiptv.com'),
  title: 'The Smarters IPTV — Best IPTV Smarters Pro 4K Subscription (2026)',
  description: 'Official setup guides and top-rated IPTV Smarters Pro 4K subscription. Stream 25,000+ live channels, 100,000+ VOD movies with anti-freeze and instant Xtream Codes activation.',
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    'indexnow-key': 'b1af89195e4349aea74d90da1500b68e',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thesmartersiptv.com/',
    siteName: 'IPTV Smarters Pro',
    title: 'The Smarters IPTV — Best IPTV Smarters Pro 4K Subscription (2026)',
    description: 'Official setup guides and top-rated IPTV Smarters Pro 4K subscription. Stream 25,000+ live channels, 100,000+ VOD movies with anti-freeze and instant Xtream Codes activation.',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Smarters IPTV — Best IPTV Smarters Pro 4K Subscription (2026)',
    description: 'Official setup guides and top-rated IPTV Smarters Pro 4K subscription.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/brand-fonts.css" />
        <link rel="stylesheet" href="/assets/css/inter.css" />
        <link rel="stylesheet" href="/assets/css/arabic-font.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/modern-ui.css" />
        <link rel="stylesheet" href="/assets/css/heroui.css" />
        <link rel="stylesheet" href="/assets/css/runtime.css" />
        <link rel="stylesheet" href="/assets/css/theme.css" />
        <link rel="stylesheet" href="/assets/css/setup-modal.css" />
        <link rel="stylesheet" href="/assets/css/product-pages.css" />
        <link rel="stylesheet" href="/assets/css/page-custom.css" />
      </head>
      <body className="bg-black text-white selection:bg-cyan-500/30 selection:text-white">
        <div className="grain-overlay" />
        <div className="min-h-screen flex flex-col font-sans antialiased bg-black text-white transition-colors">
          {children}
        </div>
        <Script src="/assets/js/site-interactions.js" strategy="afterInteractive" />
        <Script src="/assets/js/support-chat.js" strategy="lazyOnload" />
        <Script src="/assets/js/free-trial-modal.js" strategy="lazyOnload" />
        <Script src="/assets/js/order-modal.js" strategy="lazyOnload" />
        <Script src="/assets/js/setup-modal.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
