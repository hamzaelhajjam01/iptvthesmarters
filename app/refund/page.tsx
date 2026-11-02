import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Refund Policy | IPTV Smarters Pro',
  description: 'Read the IPTV Smarters Pro 7-Day Money-Back Guarantee refund policy: transparent conditions covering verified technical faults our support team is unable to resolve.',
  alternates: {
    canonical: 'https://thesmartersiptv.com/refund/',
  },
  openGraph: {
    title: 'Refund Policy | IPTV Smarters Pro',
    description: 'Read the IPTV Smarters Pro 7-Day Money-Back Guarantee refund policy: transparent conditions covering verified technical faults our support team is unable to resolve.',
    url: 'https://thesmartersiptv.com/refund/',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Refund Policy | IPTV Smarters Pro',
    description: 'Read the IPTV Smarters Pro 7-Day Money-Back Guarantee refund policy: transparent conditions covering verified technical faults our support team is unable to resolve.',
  },
};

export default function EnglishRefundPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://thesmartersiptv.com/refund/#webpage',
        url: 'https://thesmartersiptv.com/refund/',
        name: 'Refund Policy | IPTV Smarters Pro',
        description: 'Information regarding refund eligibility, 7-day money-back guarantee, and technical support assistance for IPTV Smarters Pro.',
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header currentLang="en" />
      <main className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white pt-24 pb-16">
        <div className="relative">
          <section className="py-16 md:py-24 text-center px-4 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6 tracking-wide uppercase">
              Satisfaction Guarantee
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              7-Day Money-Back <span className="text-gradient-blue-cyan">Guarantee</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Our transparent refund policy, in plain language.</p>
          </section>
          <section className="pb-24 px-4">
            <div className="max-w-3xl mx-auto">
              <div className="reveal-on-scroll bg-zinc-900/30 border border-zinc-800/60 rounded-3xl p-8 md:p-12 is-visible">
                <div className="prose prose-invert max-w-none prose-p:text-zinc-400 prose-p:leading-relaxed prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight prose-strong:text-white">
                  <p>
                    We want you to be completely satisfied with your IPTV Smarters Pro streaming experience. We back every subscription with a transparent <strong>7-Day Money-Back Guarantee</strong> covering verified technical faults that our dedicated support team is unable to resolve.
                  </p>
                  <h2>1. 7-Day Eligibility Window</h2>
                  <p>
                    Refund requests must be submitted within <strong>7 days</strong> of your original purchase. Requests made after this 7-day window has expired cannot be accepted. Prior to purchasing multi-month subscriptions, we strongly recommend activating our <strong>24-hour free trial</strong> to verify device and ISP compatibility.
                  </p>
                  <h2>2. What Qualifies for a Refund</h2>
                  <p>
                    Refunds are issued where there is a confirmed, persistent technical issue on our server side that prevents you from enjoying the service and that our support team is unable to resolve. Qualifying issues include:
                  </p>
                  <ul>
                    <li>Your login credentials do not authenticate and cannot be restored by our engineers.</li>
                    <li>The service is persistently unavailable due to an unresolvable server-side outage.</li>
                    <li>Severe, continuous buffering caused by server congestion that our team cannot fix after optimizing your server route.</li>
                  </ul>
                  <p>
                    You must contact our support team and give us a reasonable opportunity to diagnose and fix the problem. The vast majority of connection and EPG issues are resolved in minutes with a quick setting or DNS adjustment.
                  </p>
                  <h2>3. How to Request a Refund</h2>
                  <p>
                    To request a refund within your 7-day window, simply contact our 24/7 support team via <strong>WhatsApp at +1 (804) 280-4332</strong> or through our <a href="/contact/" className="text-blue-400 hover:underline">Contact Page</a>. Please provide:
                  </p>
                  <ul>
                    <li>Your order transaction ID or purchase email.</li>
                    <li>Your streaming device model and app version.</li>
                    <li>A brief description or screenshot of the technical error you encountered.</li>
                  </ul>
                  <h2>4. Processing Time & Payment Methods</h2>
                  <p>
                    Approved refunds are authorized within <strong>24 hours</strong>. Depending on your financial institution and original payment method (PayPal or Credit/Debit card), it typically takes <strong>3 to 5 business days</strong> for the refunded funds to reflect on your statement.
                  </p>
                  <h2>5. Non-Refundable Circumstances</h2>
                  <p>
                    Refunds will not be granted in the following scenarios:
                  </p>
                  <ul>
                    <li>Requests submitted after the 7-day guarantee window has expired.</li>
                    <li>Issues caused by local home network instability, low Wi-Fi bandwidth (under 25 Mbps for 4K), or third-party ISP throttling that can be resolved via VPN.</li>
                    <li>Accidental orders or change of mind after the service has been actively utilized.</li>
                    <li>Refusal to follow basic technical troubleshooting guidance with our support agents.</li>
                    <li>Accounts terminated due to a breach of our Terms of Service (such as re-streaming, unauthorized public broadcasting, or exceeding allocated simultaneous device limits).</li>
                  </ul>
                  <h2>6. No Automatic Renewals</h2>
                  <p>
                    All IPTV Smarters Pro subscription plans are strictly <strong>one-time purchases</strong>. We never store recurring billing agreements or charge your card without your explicit authorization. You will never face surprise recurring charges.
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
