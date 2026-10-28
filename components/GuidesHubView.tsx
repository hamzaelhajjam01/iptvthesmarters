'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { GUIDES } from '@/data/guides';
import { TRANSLATIONS } from '@/data/translations';

interface GuidesHubViewProps {
  lang: string;
}

export default function GuidesHubView({ lang }: GuidesHubViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const prefix = lang === 'en' ? '/' : `/${lang}/`;

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    GUIDES.forEach(g => {
      if (g.category) set.add(g.category.toLowerCase());
    });
    return ['all', ...Array.from(set)];
  }, []);

  // Filtered guides based on search query and category
  const filteredGuides = useMemo(() => {
    return GUIDES.filter(g => {
      const localized = g.translations[lang] || { title: g.title, desc: g.desc };
      const guideTitle = (localized.title || g.title).toLowerCase();
      const guideDesc = (localized.desc || g.desc).toLowerCase();
      const matchesSearch =
        searchQuery === '' ||
        guideTitle.includes(searchQuery.toLowerCase()) ||
        guideDesc.includes(searchQuery.toLowerCase());

      const matchesCat =
        selectedCategory === 'all' ||
        (g.category && g.category.toLowerCase() === selectedCategory);

      return matchesSearch && matchesCat;
    });
  }, [lang, searchQuery, selectedCategory]);

  return (
    <div className="bg-zinc-950 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hub Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-4 uppercase tracking-wider">
            Knowledge Base & Tutorials
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            IPTV Smarters Pro Guides
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Step-by-step walkthroughs, device installation tutorials, troubleshooting fixes, and playlist setup for all your devices.
          </p>

          {/* Search Box */}
          <div className="mt-8 relative max-w-xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search guides (e.g. Firestick, Buffering, Xtream Codes)..."
              className="w-full px-5 py-4 pl-12 rounded-2xl bg-zinc-900/90 border border-zinc-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-zinc-500 text-sm outline-none transition-all"
            />
            <svg
              className="w-5 h-5 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold capitalize transition-all ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map(guide => {
            const localized = guide.translations[lang] || {
              title: guide.title,
              desc: guide.desc
            };
            const title = localized.title || guide.title;
            const desc = localized.desc || guide.desc;

            return (
              <Link
                key={guide.slug}
                href={`${prefix}guides/${guide.slug}/`}
                className="group p-6 rounded-3xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-purple-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 px-2.5 py-1 rounded-md bg-purple-500/10">
                      {guide.category}
                    </span>
                    <span className="text-[11px] text-zinc-500">{guide.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2 line-clamp-2">
                    {title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-6">
                    {desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 group-hover:text-purple-300 pt-4 border-t border-zinc-800/60">
                  <span>Read Tutorial</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredGuides.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-500 text-base">No guides found matching your search. Try another query.</p>
          </div>
        )}
      </div>
    </div>
  );
}
