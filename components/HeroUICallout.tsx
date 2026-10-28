import React from 'react';
import Link from 'next/link';

interface HeroUICalloutProps {
  currentLang?: string;
  badge?: string;
  title?: string;
  desc?: string;
  btnText?: string;
}

export default function HeroUICallout({
  currentLang = 'en',
  badge = 'Recommended Provider 2026',
  title = 'Experience Flawless 4K IPTV on Smarters Pro',
  desc = 'Pair your application with high-speed anti-freeze servers, 25,000+ live premium channels, 100,000+ VOD movies, and instant Xtream Codes activation.',
  btnText = 'Get Instant 4K Activation'
}: HeroUICalloutProps) {
  const prefix = currentLang === 'en' ? '/' : `/${currentLang}/`;
  const pricingHref = `${prefix}pricing/`;

  return (
    <div className="heroui-callout not-prose my-10 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-purple-900/20 via-zinc-900/80 to-blue-900/20 border border-purple-500/30 backdrop-blur-md shadow-2xl relative overflow-hidden">
      <div className="absolute -right-12 -top-12 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span>{badge}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
            {title}
          </h3>
          <p className="text-zinc-400 text-sm max-w-2xl leading-relaxed">
            {desc}
          </p>
        </div>

        <div className="shrink-0 flex flex-col sm:flex-row items-stretch md:items-center gap-3">
          <Link
            href={pricingHref}
            className="px-6 py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm text-center shadow-lg shadow-purple-600/30 transition-all flex items-center justify-center gap-2 group"
          >
            <span>{btnText}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
