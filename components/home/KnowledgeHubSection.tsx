import React from 'react';
import Link from 'next/link';

const GUIDES = [
  {
    href: '/guides/install-iptv-smarters-pro-on-firestick/',
    category: 'Amazon Fire TV',
    title: 'Firestick Setup Tutorial',
    desc: 'Complete step-by-step sideload and downloader activation guide for Fire TV Stick.',
  },
  {
    href: '/guides/how-to-activate-iptv-smarters-pro/',
    category: 'Account Activation',
    title: 'How to Activate Smarters Pro',
    desc: 'Learn how to log in with your credentials, username, password, and portal URL.',
  },
  {
    href: '/guides/iptv-smarters-pro-on-samsung-lg-smart-tvs/',
    category: 'Smart TVs',
    title: 'Samsung & LG TV Setup',
    desc: 'Install directly from Samsung Tizen Smart Hub and LG webOS Content Store.',
  },
  {
    href: '/guides/how-to-set-up-xtream-codes-iptv-smarters-pro/',
    category: 'API Setup',
    title: 'Xtream Codes API Guide',
    desc: 'Connect via server URL, username, and password for fast channel and VOD loading.',
  },
  {
    href: '/guides/how-to-add-m3u-playlist-iptv-smarters-pro/',
    category: 'M3U Playlist',
    title: 'Add M3U Playlist / File',
    desc: 'How to paste your M3U URL or upload local playlist files on mobile and TV.',
  },
  {
    href: '/guides/iptv-smarters-pro-keeps-buffering-fixes/',
    category: 'Troubleshooting',
    title: 'Fix Buffering & Freezing',
    desc: 'Diagnostic steps to eliminate stream buffering, cache lag, and ISP throttling.',
  },
  {
    href: '/guides/iptv-smarters-pro-for-pc-mac-setup/',
    category: 'Desktop',
    title: 'Windows & macOS Setup',
    desc: 'Download and configure Smarters Pro on desktop PCs and Apple Mac computers.',
  },
  {
    href: '/guides/iptv-smarters-pro-epg-not-loading-fix/',
    category: 'TV Guide / EPG',
    title: 'Fix EPG Not Loading',
    desc: 'Restore missing Electronic Programme Guide schedules and channel timelines.',
  },
];

const TOPICS = [
  { href: '/products/4k-iptv/', label: '4K IPTV' },
  { href: '/products/iptv-smarters-pro/', label: 'IPTV Smarters Pro' },
  { href: '/products/best-iptv-service-2026/', label: 'Best IPTV Service 2026' },
  { href: '/products/iptv-subscription/', label: 'IPTV Subscription' },
  { href: '/products/best-iptv-player/', label: 'Best IPTV Player' },
  { href: '/products/smart-iptv/', label: 'Smart IPTV' },
  { href: '/guides/install-iptv-smarters-pro-on-firestick/', label: 'Firestick Setup Guide' },
  { href: '/products/tivimate-iptv-player/', label: 'TiviMate IPTV Player' },
];

export default function KnowledgeHubSection() {
  return (
    <section id="seo-knowledge-hub" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900/60">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 block">
            Knowledge Base &amp; Device Tutorials
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            IPTV Smarters Pro Setup Guides &amp; Solutions
          </h2>
        </div>
        <Link
          href="/guides/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
        >
          <span>View all 20+ setup guides</span>
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {GUIDES.map((g, idx) => (
          <Link
            key={idx}
            href={g.href}
            className="group p-5 bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/70 hover:border-purple-500/50 rounded-2xl transition-all block"
          >
            <span className="text-xs font-semibold text-purple-400 mb-1 block">{g.category}</span>
            <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
              {g.title}
            </h3>
            <p className="text-xs text-zinc-400 line-clamp-2">{g.desc}</p>
          </Link>
        ))}
      </div>

      <div className="pt-6 border-t border-zinc-900/60">
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3 block">
          Featured Topics &amp; Solutions
        </span>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((topic, idx) => (
            <Link
              key={idx}
              href={topic.href}
              className="text-xs px-3 py-1.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
            >
              {topic.label}
            </Link>
          ))}
          <Link
            href="/products/"
            className="text-xs px-3 py-1.5 rounded-lg bg-purple-950/40 hover:bg-purple-900/50 text-purple-300 hover:text-white border border-purple-800/40 transition-colors font-semibold"
          >
            Browse all 180+ IPTV Topics →
          </Link>
        </div>
      </div>
    </section>
  );
}
