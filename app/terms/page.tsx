import React from 'react';
import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const viewport: Viewport = {
  themeColor: '#0a0a0c',
};

export const metadata: Metadata = {
  title: 'Terms of Service | IPTV Smarters Pro',
  description: 'Review the comprehensive terms of service for IPTV Smarters Pro: subscription terms, one-time billing policy, device allocations, upgrade terms, and acceptable use.',
  alternates: {
    canonical: 'https://thesmartersiptv.com/terms/',
  },
  openGraph: {
    title: 'Terms of Service | IPTV Smarters Pro',
    description: 'Review the comprehensive terms of service for IPTV Smarters Pro: subscription terms, one-time billing policy, device allocations, upgrade terms, and acceptable use.',
    url: 'https://thesmartersiptv.com/terms/',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | IPTV Smarters Pro',
    description: 'Review the comprehensive terms of service for IPTV Smarters Pro: subscription terms, one-time billing policy, device allocations, upgrade terms, and acceptable use.',
    images: ['/og-image.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://thesmartersiptv.com/terms/#webpage',
      url: 'https://thesmartersiptv.com/terms/',
      name: 'Terms of Service | IPTV Smarters Pro',
      description: 'Terms of service and subscription agreement governing the use of IPTV Smarters Pro services.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://thesmartersiptv.com/#website',
        name: 'IPTV Smarters Pro',
        url: 'https://thesmartersiptv.com/',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://thesmartersiptv.com/terms/#breadcrumb',
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
          name: 'Terms of Service',
          item: 'https://thesmartersiptv.com/terms/',
        },
      ],
    },
  ],
};

export default function EnglishTermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header currentLang="en" />
      <main className="flex-1">
        <div className="bg-black min-h-screen">
          <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden px-4">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex flex-col items-center justify-center gap-4 mb-4">
                <div className="w-0.5 h-6 bg-cyan-500" />
                <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Legal & Subscription Agreement</span>
              </div>
              <h1 className="reveal-on-scroll text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight is-visible">
                Terms of <span className="text-gradient-blue-cyan">Service</span>
              </h1>
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                Clear, transparent policies governing your subscription, billing, device limits, and service delivery.
              </p>
              <p className="text-zinc-600 text-sm mt-4">Last updated: November 2026</p>
            </div>
          </section>

          <section className="pb-24 px-4">
            <div className="max-w-3xl mx-auto">
              <div className="reveal-on-scroll bg-zinc-900/30 border border-zinc-800/60 rounded-3xl p-8 md:p-12 is-visible">
                <div className="prose prose-invert max-w-none prose-p:text-zinc-400 prose-p:leading-relaxed prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight prose-strong:text-white">
                  <p>
                    Welcome to IPTV Smarters Pro. By purchasing an activation, initiating a free trial, or accessing our high-speed streaming infrastructure, you acknowledge and agree to comply with the terms set forth below.
                  </p>

                  <h2>1. Personal Home Entertainment & Device Connections</h2>
                  <p>
                    Our service is provided strictly for your personal, residential entertainment use. You may install the IPTV Smarters Pro application on as many personal devices as you wish; however, the number of <strong>simultaneous active streams</strong> is governed by the connection plan you purchased (1, 2, or 3 simultaneous connections).
                  </p>
                  <p>
                    Attempting to stream simultaneously on more devices than your plan permits may result in temporary automated stream locking by our load balancers.
                  </p>

                  <h2>2. Billing, Pricing & No Automatic Renewals</h2>
                  <p>
                    All subscription plans (1 Month, 3 Months, 6 Months, 12 Months, and 24 Months) are billed as <strong>one-time upfront purchases</strong>.
                  </p>
                  <ul>
                    <li><strong>No recurring auto-debits:</strong> We do not store your full payment card details or enroll you in surprise recurring subscriptions.</li>
                    <li><strong>Manual renewal:</strong> When your subscription term approaches expiration, you will receive a friendly courtesy reminder via email or WhatsApp. Renewal is 100% voluntary.</li>
                    <li><strong>No hidden fees:</strong> The price displayed at checkout is the complete, final amount you pay.</li>
                  </ul>

                  <h2>3. Subscription Upgrades & Adding Devices</h2>
                  <p>
                    You can upgrade your subscription plan (e.g., from 1 Month to 12 Months) or increase your simultaneous device limit at any point during your active term. Simply contact our support desk via WhatsApp or our Contact Page; we will calculate any remaining prorated credit toward your upgrade so you never pay twice.
                  </p>

                  <h2>4. Cancellation Terms</h2>
                  <p>
                    Because our services do not utilize recurring subscription billing, there are no long-term contracts, lock-ins, or cancellation penalties. If you choose not to renew, your service simply lapses naturally at the conclusion of your paid period with no further action required.
                  </p>

                  <h2>5. Payment Processors & Security</h2>
                  <p>
                    All financial transactions are conducted through Tier-1 encrypted payment gateways. We support:
                  </p>
                  <ul>
                    <li><strong>PayPal:</strong> With complete Buyer Protection.</li>
                    <li><strong>Major Credit & Debit Cards:</strong> Visa, MasterCard, and American Express processed via SSL 256-bit bank-grade encryption.</li>
                  </ul>
                  <p>
                    We never sell, lease, or share customer financial data with third-party advertising brokers.
                  </p>

                  <h2>6. Service Availability & Uptime SLA</h2>
                  <p>
                    We maintain redundant server nodes with automated failover:
                  </p>
                  <ul>
                    <li><strong>Consumer Streaming Services:</strong> Backed by a <strong>99.9% uptime commitment</strong> with intelligent anti-freeze packet routing.</li>
                    <li><strong>Reseller Wholesale Infrastructure:</strong> Maintained on dedicated enterprise clusters backed by a <strong>99.99% service level agreement (SLA)</strong> with priority DNS propagation.</li>
                  </ul>
                  <p>
                    Routine infrastructure maintenance is scheduled during low-traffic off-peak hours and communicated in advance.
                  </p>

                  <h2>7. Customer Support & Dedicated Channels</h2>
                  <p>
                    We provide dedicated 24/7 technical and onboarding assistance:
                  </p>
                  <ul>
                    <li><strong>WhatsApp Priority Desk:</strong> +1 (804) 280-4332 (Typical response time under 3 minutes).</li>
                    <li><strong>Contact Form:</strong> Available directly via our <a href="/contact/" className="text-blue-400 hover:underline">Contact Us page</a>.</li>
                  </ul>

                  <h2>8. Prohibited Conduct & Account Integrity</h2>
                  <p>
                    To safeguard server stability and network performance for all subscribers, the following activities are strictly prohibited:
                  </p>
                  <ul>
                    <li>Re-streaming, rebroadcasting, or commercial resale of individual retail consumer lines.</li>
                    <li>Attempting to attack, reverse-engineer, brute-force, or overwhelm streaming API endpoints.</li>
                    <li>Publicly publishing or sharing Xtream Codes credentials on open internet forums.</li>
                  </ul>
                  <p>
                    Violations of these server integrity rules will result in immediate line termination without refund eligibility.
                  </p>

                  <h2>9. Refund Policy Reference</h2>
                  <p>
                    All consumer purchases are protected under our comprehensive <strong>7-Day Money-Back Guarantee</strong> covering verified server-side faults that our technical support team is unable to remediate. For full details on qualifying conditions, please consult our official <a href="/refund/" className="text-blue-400 hover:underline">Refund Policy</a>.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer currentLang="en" />
    </>
  );
}
