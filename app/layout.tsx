import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://thesmartersiptv.com'),
  title: 'The Smarters IPTV — Best IPTV Smarters Pro 4K Subscription (2026)',
  description: 'Official setup guides and top-rated IPTV Smarters Pro 4K subscription. Stream 25,000+ live channels, 100,000+ VOD movies with anti-freeze and instant Xtream Codes activation.',
  icons: {
    icon: '/favicon.ico',
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
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
