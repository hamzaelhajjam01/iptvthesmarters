import React from 'react';
import Link from 'next/link';
import { TRANSLATIONS } from '@/data/translations';
import { GUIDES } from '@/data/guides';
import PricingView from '@/components/PricingView';

interface HomeViewProps {
  lang: string;
}

export default function HomeView({ lang }: HomeViewProps) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const prefix = lang === 'en' ? '/' : `/${lang}/`;

  // Top 3 featured guides
  const featuredGuides = GUIDES.slice(0, 3);

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(123,63,228,0.25),rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-8 max-w-5xl mx-auto leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400">
            {t.hero.title}
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              href={`${prefix}pricing/`}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-xl shadow-purple-600/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>{t.hero.cta}</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <a
              href="https://wa.me/18042804332?text=Hello%2C%20I%20would%20like%20to%20request%20a%20free%2024h%20trial%20for%20IPTV%20Smarters%20Pro."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-green w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm text-white inline-flex items-center justify-center gap-2.5 transition-all shadow-lg" style={{ backgroundColor: "#25D366", color: "#ffffff", boxShadow: "0 8px 24px rgba(37,211,102,0.45)" }}"
            >
              <img src="/assets/images/whatsapp.png" width={22} height={22} alt="WhatsApp" className="w-[22px] h-[22px] rounded-full shrink-0" /><span>{t.hero.trial}</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-zinc-900/80 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">25,000+</div>
              <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Live TV Channels</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-purple-400">100,000+</div>
              <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">VOD Movies & Series</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">99.9%</div>
              <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Anti-Freeze Uptime</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-purple-400">&lt; 10s</div>
              <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Instant Activation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Device Compatibility */}
      <section className="py-20 border-b border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-3">
            Universal Support
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Compatible with All Your Devices
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto mb-12">
            Install IPTV Smarters Pro in minutes on your favorite TV, streaming stick, mobile phone, or desktop.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Amazon Firestick', 'Samsung Smart TV', 'LG WebOS TV', 'Android & Shield', 'Apple iOS / Mac', 'Windows PC'].map(dev => (
              <div
                key={dev}
                className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-center hover:border-purple-500/40 transition-all"
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect width="18" height="12" x="3" y="4" rx="2" strokeWidth="2" />
                    <line x1="8" y1="20" x2="16" y2="20" strokeWidth="2" />
                  </svg>
                </div>
                <div className="text-xs font-bold text-zinc-200">{dev}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Pricing Section */}
      <PricingView lang={lang} />

      {/* Featured Setup Guides Section */}
      <section className="py-20 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">
                Official Knowledge Base
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Step-by-Step Setup Guides
              </h2>
            </div>
            <Link
              href={`${prefix}guides/`}
              className="mt-4 md:mt-0 text-sm font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1.5"
            >
              <span>Explore All 35+ Guides</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGuides.map(g => {
              const loc = g.translations[lang] || { title: g.title, desc: g.desc };
              return (
                <Link
                  key={g.slug}
                  href={`${prefix}guides/${g.slug}/`}
                  className="group p-6 rounded-3xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800 hover:border-purple-500/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] font-bold text-purple-400 uppercase tracking-wider mb-2">
                      {g.category}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2 line-clamp-2">
                      {loc.title || g.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-6">
                      {loc.desc || g.desc}
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-purple-400 group-hover:text-purple-300 pt-4 border-t border-zinc-800">
                    Read Walkthrough →
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
