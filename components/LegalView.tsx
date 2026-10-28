import React from 'react';
import Link from 'next/link';

interface LegalViewProps {
  lang: string;
  type: 'privacy' | 'terms' | 'refund';
}

const LEGAL_DATA = {
  privacy: {
    badge: 'Legal & Compliance',
    title: 'Privacy Policy',
    updated: 'January 2026',
    content: `
      <h2>1. Information We Collect</h2>
      <p>We respect your privacy. When you request a subscription or free trial, we collect minimal operational information such as your contact email or WhatsApp handle and device type to configure your credentials.</p>
      
      <h2>2. No Logs Policy</h2>
      <p>Our streaming infrastructure strictly adheres to a zero-logging principle. We do not monitor, record, or store records of the specific channels, streams, or media files you access through your IPTV Smarters Pro application.</p>
      
      <h2>3. Payment Security</h2>
      <p>All subscription payments are processed securely through certified end-to-end encrypted gateways. We never store or handle your credit card numbers on our servers.</p>
      
      <h2>4. Data Retention</h2>
      <p>Operational account identifiers are retained solely for the active duration of your subscription to manage service continuity and technical support.</p>
    `
  },
  terms: {
    badge: 'Legal & Compliance',
    title: 'Terms of Service',
    updated: 'January 2026',
    content: `
      <h2>1. Service Agreement</h2>
      <p>By purchasing an IPTV Smarters Pro subscription, you agree to comply with our acceptable use policy. Our services are intended for personal, non-commercial home entertainment.</p>
      
      <h2>2. Device Connections</h2>
      <p>Standard subscription lines allow one simultaneous active stream per connection. Multi-room or simultaneous multi-device streams require a multi-connection package.</p>
      
      <h2>3. Fair Usage & Server Integrity</h2>
      <p>Re-streaming, commercial public broadcasting, or attempting to compromise server security will result in immediate line termination without refund.</p>
      
      <h2>4. Service Availability</h2>
      <p>We maintain an industry-leading 99.9% server availability. Occasional scheduled maintenance windows are executed with advance notification.</p>
    `
  },
  refund: {
    badge: 'Satisfaction Guarantee',
    title: 'Refund Policy',
    updated: 'January 2026',
    content: `
      <h2>1. 7-Day Money-Back Guarantee</h2>
      <p>We stand behind the quality of our anti-freeze streaming servers. If you experience persistent technical issues that our support team cannot resolve within 7 days of purchase, you are eligible for a full refund.</p>
      
      <h2>2. Free Trial Recommendation</h2>
      <p>We strongly recommend testing our service with a 24-hour free trial prior to purchasing multi-month packages to ensure full compatibility with your internet provider and device.</p>
      
      <h2>3. Refund Processing</h2>
      <p>To request a refund under our guarantee, contact our support desk via email or WhatsApp with your order transaction details. Approved refunds are processed back to your original payment method within 3 to 5 business days.</p>
    `
  }
};

export default function LegalView({ lang, type }: LegalViewProps) {
  const doc = LEGAL_DATA[type];
  const prefix = lang === 'en' ? '/' : `/${lang}/`;

  return (
    <div className="bg-zinc-950 min-h-screen py-16 md:py-24 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-4 uppercase tracking-wider">
            {doc.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            {doc.title}
          </h1>
          <p className="text-zinc-500 text-xs">
            Last Updated: {doc.updated}
          </p>
        </header>

        <div
          className="prose prose-invert prose-purple max-w-none text-zinc-300 space-y-6 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: doc.content }}
        />

        <div className="mt-16 pt-8 border-t border-zinc-800 text-center">
          <Link
            href={prefix}
            className="text-purple-400 hover:text-purple-300 font-bold text-sm"
          >
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
