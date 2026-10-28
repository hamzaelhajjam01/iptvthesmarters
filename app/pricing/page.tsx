import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/home/PricingSection';

export const metadata: Metadata = {
  title: 'Buy IPTV Smarters Pro 4K Subscription — Best Pricing Plans 2026',
  description: 'Choose from top-rated IPTV Smarters Pro 4K subscription plans starting from $14.95. Over 25,000 live channels, 100,000+ VOD movies, anti-freeze & instant Xtream Codes activation.',
  alternates: {
    canonical: 'https://thesmartersiptv.com/pricing/',
  },
};

const FAQS = [
  {
    num: '01',
    q: 'Is the IPTV Smarters Pro app free?',
    a: 'The app itself is entirely free to download and install on most platforms. However, it does not come with any content. You must purchase a subscription from a service provider (like us) to actually watch live TV or movies. The app is essentially a blank media player until you add a playlist.',
    isOpen: true,
  },
  {
    num: '02',
    q: 'How do I log in using Xtream Codes?',
    a: "When you open the Smarters Pro player, select the 'Login with Xtream Codes API' option. You will need to enter four pieces of information: any name you want (like 'My TV'), the username we email you, your password, and our portal URL. This is the fastest and most reliable setup method.",
    isOpen: false,
  },
  {
    num: '03',
    q: 'Can I install it on an Amazon Firestick?',
    a: 'Yes, but because it is not always available in the official Amazon App Store, you may need to sideload the Smarters Pro APK using the Downloader app. The process takes about two minutes, and it remains one of the top Firestick IPTV apps available.',
    isOpen: false,
  },
  {
    num: '04',
    q: 'Why is my EPG guide not loading?',
    a: "This usually happens if your provider's server is struggling, or if you entered a long M3U playlist link instead of using the API login. Using our Xtream Codes setup ensures your TV guide populates automatically and stays synced.",
    isOpen: false,
  },
  {
    num: '05',
    q: 'Does the app support multi-screen streaming?',
    a: 'Yes, it has a built-in multi-screen feature that allows you to watch up to four live channels simultaneously on the same display. Please note that your subscription must have multiple connections enabled (like our 2 or 3 device plans) to use this feature without freezing.',
    isOpen: false,
  },
  {
    num: '06',
    q: 'Is a VPN required to use this service?',
    a: 'We do not mandate a VPN because our service uses secure, load-balanced servers. However, we are completely VPN-friendly. If you experience ISP throttling during major sporting events, connecting to a VPN can quickly resolve those speed issues.',
    isOpen: false,
  },
];

export default function EnglishPricingPage() {
  return (
    <>
      <Header currentLang="en" />
      <main className="flex-1 pt-12">
        <PricingSection />

        <section className="py-8 px-4 bg-zinc-950/50 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="reveal-on-scroll bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 text-left hover:bg-zinc-900/60 hover:border-zinc-700/60 transition-all duration-300 flex flex-col items-start group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-6 h-6 text-purple-400">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Secure Payments</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Your payments are processed securely with enterprise-grade encryption. We accept all major credit cards and Crypto.
                </p>
              </div>

              <div className="reveal-on-scroll bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 text-left hover:bg-zinc-900/60 hover:border-zinc-700/60 transition-all duration-300 flex flex-col items-start group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones w-6 h-6 text-purple-400">
                    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Customer Support</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Our technical support team is available around the clock via live chat and email to help with setup or issues.
                </p>
              </div>

              <div className="reveal-on-scroll bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 text-left hover:bg-zinc-900/60 hover:border-zinc-700/60 transition-all duration-300 flex flex-col items-start group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-6 h-6 text-purple-400">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Instant Activation</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Your Xtream Codes login details are emailed within minutes of checkout, so you can set up and start streaming right away.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" id="faq">
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-zinc-400">Everything you need to know about the service and billing.</p>
            </div>
            <div className="faq-list w-full">
              {FAQS.map((faq) => (
                <details key={faq.num} className="faq-item" name="homepage-faq" open={faq.isOpen ? true : undefined}>
                  <summary className="faq-summary">
                    <span className="faq-num" aria-hidden="true">{faq.num}</span>
                    <span className="faq-q">{faq.q}</span>
                    <span className="faq-chevron" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer currentLang="en" />
    </>
  );
}
