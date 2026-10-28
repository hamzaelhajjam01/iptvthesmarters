import React from 'react';
import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const viewport: Viewport = {
  themeColor: '#0a0a0c',
};

export const metadata: Metadata = {
  title: 'Refund Policy | IPTV Smarters Pro',
  description: 'Read the IPTV Smarters Pro refund policy: a 3-day request window covering verified technical faults our support team is unable to resolve.',
  alternates: {
    canonical: 'https://thesmartersiptv.com/refund/',
  },
  openGraph: {
    title: 'Refund Policy | IPTV Smarters Pro',
    description: 'Read the IPTV Smarters Pro refund policy: a 3-day request window covering verified technical faults our support team is unable to resolve.',
    url: 'https://thesmartersiptv.com/refund/',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refund Policy | IPTV Smarters Pro',
    description: 'Read the IPTV Smarters Pro refund policy: a 3-day request window covering verified technical faults our support team is unable to resolve.',
    images: ['/og-image.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://thesmartersiptv.com/refund/#webpage',
      url: 'https://thesmartersiptv.com/refund/',
      name: 'Refund Policy | IPTV Smarters Pro',
      description: 'Information regarding refund eligibility, terms, and technical support guarantee for IPTV Smarters Pro.',
      inLanguage: 'en',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://thesmartersiptv.com/refund/#breadcrumb',
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
          name: 'Refund Policy | IPTV Smarters Pro',
          item: 'https://thesmartersiptv.com/refund/',
        },
      ],
    },
  ],
};

export default function EnglishRefundPage() {
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
                <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Legal</span>
              </div>
              <h1 className="reveal-on-scroll text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight is-visible">
                Refund <span className="text-gradient-blue-cyan">Policy</span>
              </h1>
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Our refund terms, in plain language.</p>
              <p className="text-zinc-600 text-sm mt-4">Last updated: July 27, 2026</p>
            </div>
          </section>
          <section className="pb-24 px-4">
            <div className="max-w-3xl mx-auto">
              <div className="reveal-on-scroll bg-zinc-900/30 border border-zinc-800/60 rounded-3xl p-8 md:p-12 is-visible">
                <div className="prose prose-invert max-w-none prose-p:text-zinc-400 prose-p:leading-relaxed prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight prose-strong:text-white">
                  <p>
                    We want you to be completely satisfied with your IPTV Smarters Pro streaming experience. This page
                    explains exactly when a refund can be issued, so there are no surprises.
                  </p>
                  <h2>Eligibility Window</h2>
                  <p>
                    Refund requests must be submitted within <strong>3 days</strong> of your original purchase. Requests
                    made after this 3-day window has expired cannot be accepted.
                  </p>
                  <h2>What Qualifies for a Refund</h2>
                  <p>
                    Refunds are issued only where there is a confirmed, serious technical fault on our side that
                    prevents the service from working and that our support team is unable to resolve. Qualifying issues
                    include:
                  </p>
                  <ul>
                    <li>Your login credentials do not work and cannot be restored.</li>
                    <li>The service is persistently unavailable due to a fault on our servers.</li>
                    <li>Severe, continuous buffering that our team cannot fix after troubleshooting with you.</li>
                  </ul>
                  <p>
                    You must contact support first and give us a reasonable opportunity to diagnose and fix the problem.
                    The vast majority of issues are resolved quickly, and a refund is considered only if the fault
                    cannot be corrected.
                  </p>
                  <h2>How to Request</h2>
                  <p>
                    To request a refund, contact our support team via Telegram within the 3-day window. Please provide
                    your order email address and a clear description of the problem, including any error messages or
                    screenshots, so we can verify the issue.
                  </p>
                  <h2>Processing Time</h2>
                  <p>
                    Approved refunds are processed within 24 hours. Depending on your bank or payment method, it may
                    take 3-5 business days for the funds to reflect in your account.
                  </p>
                  <h2>Non-Refundable Circumstances</h2>
                  <p>
                    Refunds will not be granted after the 3-day window has expired; where the problem is caused by your
                    own device, internet connection, or ISP throttling; where you have simply changed your mind or are
                    dissatisfied for reasons unrelated to a technical fault; where you declined to work with support to
                    troubleshoot; or if your account was suspended for a violation of our Terms of Service (e.g.,
                    account sharing, restreaming).
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
