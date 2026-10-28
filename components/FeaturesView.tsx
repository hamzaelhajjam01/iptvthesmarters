import React from 'react';
import Link from 'next/link';

interface FeaturesViewProps {
  lang: string;
}

export default function FeaturesView({ lang }: FeaturesViewProps) {
  const prefix = lang === 'en' ? '/' : `/${lang}/`;

  const features = [
    {
      title: 'Anti-Freeze™ Technology 9.8',
      desc: 'Smart load-balancing servers automatically bypass network congestion and ISP throttling, delivering 0% buffering even during major live sporting events.',
      icon: '⚡'
    },
    {
      title: 'Ultra 4K & FHD Quality',
      desc: 'Crystal-clear streams at 60 FPS with HDR color reproduction. Enjoy live sports and cinema blockbusters as they were meant to be seen.',
      icon: '📺'
    },
    {
      title: 'Electronic Program Guide (EPG)',
      desc: 'Real-time 7-day TV guide schedule for all major US, UK, European, Arabic, and International live channels.',
      icon: '📅'
    },
    {
      title: 'Multi-Screen & Dual Audio',
      desc: 'Watch up to 4 live sports matches simultaneously on a single screen. Choose your preferred commentary audio track with one click.',
      icon: '🔲'
    },
    {
      title: 'Catch-Up & Recording',
      desc: 'Missed your favorite show or live match? Use 48-hour catch-up TV to replay any broadcast directly within Smarters Pro.',
      icon: '⏪'
    },
    {
      title: '24/7 Dedicated Support',
      desc: 'Expert technical staff ready around the clock via live chat and WhatsApp to troubleshoot playlists, EPG sync, and app installation.',
      icon: '💬'
    }
  ];

  return (
    <div className="bg-zinc-950 min-h-screen py-16 md:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-4 uppercase tracking-wider">
            Engineered for Excellence
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Next-Generation IPTV Features
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Discover why over 150,000 satisfied users trust our servers for their daily entertainment and sports streaming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(f => (
            <div
              key={f.title}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/50 transition-all group"
            >
              <div className="text-3xl mb-4 p-3 rounded-2xl bg-purple-500/10 w-fit group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {f.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href={`${prefix}pricing/`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-xl shadow-purple-600/30 transition-all"
          >
            <span>Get Started with 4K Streaming</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
