import React from 'react';

interface DeviceItem {
  title: string;
  desc: string;
  delay: string;
  icon: React.ReactNode;
  links?: {
    href: string;
    text: string;
    type: 'chrome' | 'firefox';
  }[];
}

const DEVICES: DeviceItem[] = [
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
    desc: 'Windows, macOS, Linux',
    delay: '0.3s',
    links: [
      {
        href: 'https://chromewebstore.google.com/detail/smarters-iptv-web-player/abgjeecgdimjgimljendbajiepppdjlk',
        text: 'Chrome',
        type: 'chrome',
      },
      {
        href: 'https://addons.mozilla.org/addon/smarters-iptv-web-player/',
        text: 'Firefox',
        type: 'firefox',
      },
    ],
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
              {dev.links && (
                <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
                  {dev.links.map((item, lIdx) => (
                    <a
                      key={lIdx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all shadow-sm hover:scale-105 ${
                        item.type === 'firefox'
                          ? 'bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-orange-300'
                          : 'bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300'
                      }`}
                    >
                      {item.type === 'chrome' ? (
                        <svg className="w-3 h-3 text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                      ) : (
                        <svg className="w-3 h-3 text-orange-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm7.64 6.78a8.03 8.03 0 0 1-1.28 4.7 7.91 7.91 0 0 1-3.66 3.12 7.84 7.84 0 0 1-5.18.3 8.06 8.06 0 0 1-4.4-3.14 7.95 7.95 0 0 1-1.12-5 7.86 7.86 0 0 1 2.82-5.1 8 8 0 0 1 5.38-1.66c.2.58.26 1.2.18 1.82a4.4 4.4 0 0 1-1.22 2.38 4.3 4.3 0 0 1-2.42 1.2 4.14 4.14 0 0 1-2.5-.4c-.1.38-.14.78-.14 1.18a6 6 0 0 0 1.76 4.24 6.06 6.06 0 0 0 4.24 1.76 5.92 5.92 0 0 0 4.12-1.64 5.9 5.9 0 0 0 1.76-4.12 6.09 6.09 0 0 0-.28-1.84c.6.48 1.12 1.06 1.54 1.7z"/>
                        </svg>
                      )}
                      <span>{item.text}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
