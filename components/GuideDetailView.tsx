import React from 'react';
import Link from 'next/link';
import { getGuideBySlug, GUIDES } from '@/data/guides';
import HeroUICallout from '@/components/HeroUICallout';
import { TRANSLATIONS } from '@/data/translations';

interface GuideDetailViewProps {
  lang: string;
  slug: string;
}

export default function GuideDetailView({ lang, slug }: GuideDetailViewProps) {
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Guide Not Found</h1>
        <p className="text-zinc-400 mb-8">The tutorial you are looking for does not exist or has been moved.</p>
        <Link
          href={lang === 'en' ? '/guides/' : `/${lang}/guides/`}
          className="px-6 py-3 rounded-full bg-purple-600 text-white font-bold hover:bg-purple-500 transition-colors"
        >
          Back to Guides Hub
        </Link>
      </div>
    );
  }

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const prefix = lang === 'en' ? '/' : `/${lang}/`;

  // Localized title & description
  const localizedMeta = guide.translations[lang] || {
    title: guide.title,
    desc: guide.desc
  };

  const title = localizedMeta.title || guide.title;
  const desc = localizedMeta.desc || guide.desc;

  // Other related guides in the same or nearby category
  const relatedGuides = GUIDES.filter(g => g.slug !== slug).slice(0, 3);

  return (
    <div className="bg-zinc-950 min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-8 overflow-x-auto whitespace-nowrap">
          <Link href={prefix} className="hover:text-purple-400 transition-colors">
            {t.nav.home}
          </Link>
          <span>/</span>
          <Link href={`${prefix}guides/`} className="hover:text-purple-400 transition-colors">
            {t.nav.guides}
          </Link>
          <span>/</span>
          <span className="text-zinc-400 capitalize">{guide.category}</span>
          <span>/</span>
          <span className="text-zinc-300 font-medium truncate max-w-xs">{title}</span>
        </nav>

        {/* Article Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Content */}
          <div className="lg:col-span-8">
            <header className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-4 uppercase tracking-wider">
                {guide.category}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                {desc}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 pt-4 border-t border-zinc-900">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>IPTV Smarters Pro Team</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{guide.readTime}</span>
                </span>
                <span>•</span>
                <span className="text-purple-400 font-semibold">2026 Verified Edition</span>
              </div>
            </header>

            {/* HeroUI In-Content Callout Box */}
            <HeroUICallout currentLang={lang} />

            {/* Full Guide HTML Body */}
            <div
              className="guide-prose prose prose-invert prose-purple max-w-none space-y-6 text-zinc-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: guide.contentHtml }}
            />

            {/* Bottom In-Content CTA */}
            <div className="mt-16 p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Need Help Activating Your Xtream Codes?
              </h3>
              <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-6">
                Our 24/7 technical team is available to assist you via WhatsApp with setup, playlist troubleshooting, and 4K activation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={`${prefix}pricing/`}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm transition-all"
                >
                  View 4K Pricing Plans
                </Link>
                <a
                  href="https://wa.me/212600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-zinc-700 bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 font-semibold text-sm transition-all"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Quick Sticky CTA Box */}
            <div className="sticky top-28 space-y-8">
              <div className="p-6 rounded-3xl bg-gradient-to-b from-purple-900/20 to-zinc-900/60 border border-purple-500/20 backdrop-blur-md">
                <div className="text-[10px] font-bold tracking-wider uppercase text-purple-400 mb-2">
                  Top Recommended
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Official Smarters Pro 4K Subscription
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  Get high-speed anti-freeze streaming, 25,000+ live channels, and instant Xtream Codes credentials delivered in seconds.
                </p>
                <ul className="space-y-2.5 text-xs text-zinc-300 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Instant Xtream Codes & M3U URL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Anti-Freeze & Anti-Buffering 99.9%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Firestick, Smart TV, Android & iOS</span>
                  </li>
                </ul>
                <Link
                  href={`${prefix}pricing/`}
                  className="block w-full py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg shadow-purple-600/30 transition-all"
                >
                  Get Started (From $14.95)
                </Link>
              </div>

              {/* Related Guides List */}
              <div className="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800/80">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                  Related Tutorials
                </h4>
                <div className="space-y-4">
                  {relatedGuides.map(rel => {
                    const relMeta = rel.translations[lang] || {
                      title: rel.title,
                      desc: rel.desc
                    };
                    return (
                      <Link
                        key={rel.slug}
                        href={`${prefix}guides/${rel.slug}/`}
                        className="group block p-3 rounded-2xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 transition-all"
                      >
                        <div className="text-[10px] text-purple-400 font-semibold uppercase mb-1">
                          {rel.category}
                        </div>
                        <h5 className="text-xs font-bold text-zinc-200 group-hover:text-white transition-colors line-clamp-2 mb-1">
                          {relMeta.title || rel.title}
                        </h5>
                        <span className="text-[10px] text-zinc-500">{rel.readTime}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
