import React from 'react';
import Link from 'next/link';

interface ChannelsViewProps {
  lang: string;
}

const CHANNEL_PACKAGES = [
  { name: 'Live Sports (4K & 60 FPS)', count: '3,800+ Channels', desc: 'Premier League, Champions League, La Liga, Serie A, NBA, NFL, UFC, F1 & PPV events.' },
  { name: 'USA & Canada Network', count: '4,500+ Channels', desc: 'ABC, CBS, NBC, FOX, HBO, ESPN, Discovery, TSN, Sportsnet & all local regional affiliates.' },
  { name: 'UK & Ireland VIP', count: '2,900+ Channels', desc: 'Sky Sports, TNT Sports, BBC, ITV, Channel 4, Premier Sports & Irish networks.' },
  { name: 'France & BeIN Sports', count: '2,400+ Channels', desc: 'Canal+, BeIN Sports France, RMC Sport, TF1, M6 & Belgian/Swiss francophone feeds.' },
  { name: 'Germany & Sky DE', count: '2,100+ Channels', desc: 'Sky Sport Bundesliga, DAZN, RTL, ProSieben, ZDF, ARD & Austrian bouquets.' },
  { name: 'Arabic & MENA World', count: '3,200+ Channels', desc: 'BeIN Sports MENA, OSN, Shahid VIP, MBC, SSC Sports & regional national feeds.' },
  { name: 'Spain & Movistar+', count: '1,800+ Channels', desc: 'Movistar LaLiga, DAZN España, Telecinco, Antena 3 & Latin America feeds.' },
  { name: 'Italy & Sky Italia', count: '1,900+ Channels', desc: 'Sky Sport Italia, DAZN Italia, RAI, Mediaset & Swiss Italian channels.' },
  { name: 'Netherlands & Ziggo', count: '1,400+ Channels', desc: 'Ziggo Sport, ESPN NL, NPO, RTL, SBS & Belgian Flemish feeds.' },
  { name: 'Portugal & Brazil VIP', count: '2,800+ Channels', desc: 'Sport TV Portugal, Benfica TV, Premiere Brasil, SporTV, Globo & Telecine.' },
  { name: 'Poland & Polsat/Canal+', count: '1,500+ Channels', desc: 'Canal+ Sport Polska, Polsat Sport, Eleven Sports, TVP & HBO Polska.' },
  { name: 'VOD Cinema & Series', count: '100,000+ Titles', desc: 'Netflix, Disney+, Prime Video, HBO Max & Apple TV latest releases in 4K with multi-subtitles.' }
];

export default function ChannelsView({ lang }: ChannelsViewProps) {
  const prefix = lang === 'en' ? '/' : `/${lang}/`;

  return (
    <div className="bg-zinc-950 min-h-screen py-16 md:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-4 uppercase tracking-wider">
            Massive 25,000+ Channel Lineup
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            World-Class Channel Bouquet
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            From local networks and live international sports to blockbuster cinema, access the world's finest streaming catalog in 4K UHD.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHANNEL_PACKAGES.map(pkg => (
            <div
              key={pkg.name}
              className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
                  {pkg.count}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {pkg.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                <span className="text-zinc-500">Anti-Freeze Protected</span>
                <Link
                  href={`${prefix}pricing/`}
                  className="font-bold text-purple-400 hover:text-purple-300"
                >
                  Stream Now →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-2">
            Looking for a Specific Country or Channel?
          </h3>
          <p className="text-zinc-400 text-xs leading-relaxed mb-6">
            Our IPTV Smarters Pro subscription includes over 50 country bouquets. Ask our support team to verify your favorite station or request a test line.
          </p>
          <a
            href="https://wa.me/18042804332?text=Hello%2C%20does%20your%20IPTV%20playlist%20include..."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-green px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-white inline-flex items-center gap-2 transition-all shadow-lg" style={{ backgroundColor: "#25D366", color: "#ffffff", boxShadow: "0 6px 20px rgba(37,211,102,0.4)" }}><img src="/assets/images/whatsapp.png" width={20} height={20} alt="WhatsApp" className="w-5 h-5 rounded-full shrink-0" /><span>Ask Support on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
