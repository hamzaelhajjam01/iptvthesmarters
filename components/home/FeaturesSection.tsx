import React from 'react';

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-900/50 max-w-7xl mx-auto relative overflow-hidden">
      <div className="text-center mb-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-4 mb-6">
          <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-transparent rounded-full"></div>
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">Premium IPTV Subscription</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Why use our service with the <br className="hidden md:block" />
          <span className="text-gradient">Smarters Pro Player?</span>
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl">
          Connecting a high-quality API login to your player app makes the difference between endless freezing and a
          flawless 4K experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
        <div className="reveal-on-scroll md:col-span-8 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-zinc-700/50 transition-colors" style={{ transitionDelay: '0s' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap">
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Anti-Buffer Technology</h3>
            <p className="text-zinc-400 text-lg max-w-lg leading-relaxed">
              One common issue with the Smarters Pro APK is buffering on overloaded servers. Our load-balanced
              backend automatically routes your connection to the fastest node, effectively eliminating stuttering
              during peak hours.
            </p>
          </div>
        </div>
        <div className="reveal-on-scroll md:col-span-4 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-8 relative overflow-hidden group hover:border-zinc-700/50 transition-colors" style={{ transitionDelay: '0.1s' }}>
          <div className="relative z-10 h-full flex flex-col">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tv">
                <rect width="20" height="15" x="2" y="7" rx="2" ry="2"></rect>
                <polyline points="17 2 12 7 7 2"></polyline>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">True 4K &amp; FHD</h3>
            <p className="text-zinc-400 leading-relaxed">
              Watch live sports and on-demand movies in crystal clear 4K UHD. We never use aggressive compression,
              ensuring your picture quality remains sharp on large screens.
            </p>
          </div>
        </div>
        <div className="reveal-on-scroll md:col-span-5 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-8 relative overflow-hidden group hover:border-zinc-700/50 transition-colors" style={{ transitionDelay: '0.15s' }}>
          <div className="relative z-10 h-full flex flex-col">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-play">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Custom Playlists</h3>
            <p className="text-zinc-400 leading-relaxed">
              Organize and access your favorite content instantly. Our service supports custom M3U playlists,
              allowing you to get to the channels and movies you love without delays.
            </p>
          </div>
        </div>
        <div className="reveal-on-scroll md:col-span-7 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-zinc-700/50 transition-colors" style={{ transitionDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10 h-full flex flex-col justify-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">100% VPN Friendly</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              We don't block or restrict VPN usage. If your internet service provider throttles IPTV traffic, simply
              connect your VPN to bypass the blocks and maintain a smooth connection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
