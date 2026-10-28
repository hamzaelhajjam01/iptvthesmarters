import React from 'react';

const DEVICES = [
  {
    title: 'Smart TVs',
    desc: 'Samsung Tizen, LG webOS, Android TV',
    delay: '0s',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tv w-8 h-8 text-purple-400">
        <rect width="20" height="15" x="2" y="7" rx="2" ry="2"></rect>
        <polyline points="17 2 12 7 7 2"></polyline>
      </svg>
    ),
  },
  {
    title: 'Streaming Boxes',
    desc: 'Firestick, Apple TV, MAG',
    delay: '0.1s',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor w-8 h-8 text-purple-400">
        <rect width="20" height="14" x="2" y="3" rx="2"></rect>
        <line x1="8" x2="16" y1="21" y2="21"></line>
        <line x1="12" x2="12" y1="17" y2="21"></line>
      </svg>
    ),
  },
  {
    title: 'Mobile & Tablet',
    desc: 'iOS, iPadOS, Android',
    delay: '0.2s',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone w-8 h-8 text-purple-400">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
        <path d="M12 18h.01"></path>
      </svg>
    ),
  },
  {
    title: 'Computers',
    desc: 'Windows, macOS, Web Browser',
    delay: '0.3s',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor w-8 h-8 text-purple-400">
        <rect width="20" height="14" x="2" y="3" rx="2"></rect>
        <line x1="8" x2="16" y1="21" y2="21"></line>
        <line x1="12" x2="12" y1="17" y2="21"></line>
      </svg>
    ),
  },
];

export default function DevicesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-900/50">
      <div className="text-center mb-16">
        <div className="flex flex-col items-center justify-center gap-4 mb-4">
          <div className="w-0.5 h-6 bg-purple-500"></div>
          <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Multi-Screen Streaming</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Stream flawlessly on <br className="hidden md:block" />
          <span className="text-gradient">every device you own.</span>
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-lg">
          Whether you are using a Firestick IPTV app, an Android box, or a Samsung Smart TV, our service connects
          instantly.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {DEVICES.map((dev, idx) => (
          <div
            key={idx}
            className="reveal-on-scroll group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 text-center hover:bg-zinc-900/50 hover:border-zinc-700/60 transition-all duration-300 flex flex-col items-center overflow-hidden h-full"
            style={{ transitionDelay: dev.delay }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center h-full">
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all duration-300 shadow-lg shadow-black/20">
                {dev.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-purple-50 transition-colors">
                {dev.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed flex-grow">{dev.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
