import React from 'react';
import Link from 'next/link';
import { TRANSLATIONS } from '@/data/translations';

interface PricingViewProps {
  lang: string;
}

const PLANS = [
  {
    name: '1 Month',
    badge: 'Starter',
    price: '$14.95',
    period: '/ 1 month',
    popular: false,
    checkoutUrl: 'https://wa.me/212600000000?text=' + encodeURIComponent('I want to order the 1 Month IPTV Smarters Pro 4K plan.')
  },
  {
    name: '3 Months',
    badge: 'Quarterly',
    price: '$29.95',
    period: '/ 3 months',
    popular: false,
    checkoutUrl: 'https://wa.me/212600000000?text=' + encodeURIComponent('I want to order the 3 Months IPTV Smarters Pro 4K plan.')
  },
  {
    name: '6 Months',
    badge: 'Popular',
    price: '$44.95',
    period: '/ 6 months',
    popular: false,
    checkoutUrl: 'https://wa.me/212600000000?text=' + encodeURIComponent('I want to order the 6 Months IPTV Smarters Pro 4K plan.')
  },
  {
    name: '12 Months',
    badge: 'Best Value (Save 65%)',
    price: '$64.95',
    period: '/ 12 months',
    popular: true,
    checkoutUrl: 'https://wa.me/212600000000?text=' + encodeURIComponent('I want to order the 12 Months Best Value IPTV Smarters Pro 4K plan.')
  }
];

export default function PricingView({ lang }: PricingViewProps) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const prefix = lang === 'en' ? '/' : `/${lang}/`;

  return (
    <div className="bg-zinc-950 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-4 uppercase tracking-wider">
            Premium 4K Streaming Plans
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Choose Your IPTV Smarters Plan
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            All plans include full access to 25,000+ live TV channels, 100,000+ VOD movies & series, anti-freeze technology, and instant activation.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-purple-900/40 via-zinc-900 to-zinc-900 border-2 border-purple-500 shadow-2xl shadow-purple-600/20 md:-translate-y-2'
                  : 'bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-[10px] uppercase tracking-wider shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  {!plan.popular && (
                    <span className="text-[10px] font-semibold text-zinc-400 uppercase px-2 py-0.5 rounded bg-zinc-800">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-xs text-zinc-400">{plan.period}</span>
                </div>

                <div className="w-full h-px bg-zinc-800 my-6" />

                <ul className="space-y-3 text-xs text-zinc-300 mb-8">
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>25,000+ Live Channels in 4K & FHD</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>100,000+ VOD Movies & Series</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Anti-Freeze™ Technology 9.8</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Instant Xtream Codes & M3U Delivery</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Electronic TV Guide (EPG)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>24/7 Priority Customer Support</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>7-Day Money-Back Guarantee</span>
                  </li>
                </ul>
              </div>

              <a
                href={plan.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-center transition-all ${
                  plan.popular
                    ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/30'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                }`}
              >
                Order Now
              </a>
            </div>
          ))}
        </div>

        {/* 24h Free Trial Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 text-center flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-xl font-bold text-white mb-1">
              Want to Test Our Servers First?
            </h3>
            <p className="text-zinc-400 text-sm">
              Request a 24-hour test line with zero commitment and stream on your Firestick, Smart TV, or phone right now.
            </p>
          </div>
          <a
            href="https://wa.me/212600000000?text=Hello%2C%20I%20would%20like%20to%20request%20a%20free%2024h%20trial%20for%20IPTV%20Smarters%20Pro."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-3.5 rounded-full bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-200 transition-colors"
          >
            Get 24h Free Trial
          </a>
        </div>
      </div>
    </div>
  );
}
