import React from 'react';

export default function TrustHighlights() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-900/50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="reveal-on-scroll bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 text-left hover:bg-zinc-900/60 hover:border-zinc-700/60 transition-all duration-300 flex flex-col items-start group" style={{ transitionDelay: '0s' }}>
          <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-6 h-6 text-purple-400">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Secure Payments</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Your payments are processed securely with enterprise-grade encryption. We accept PayPal, all major credit
            cards, and Crypto.
          </p>
        </div>
        <div className="reveal-on-scroll bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 text-left hover:bg-zinc-900/60 hover:border-zinc-700/60 transition-all duration-300 flex flex-col items-start group" style={{ transitionDelay: '0.1s' }}>
          <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones w-6 h-6 text-purple-400">
              <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Expert Customer Support</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Our technical support team is available around the clock via live chat and email to help with setup or
            issues.
          </p>
        </div>
        <div className="reveal-on-scroll bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 text-left hover:bg-zinc-900/60 hover:border-zinc-700/60 transition-all duration-300 flex flex-col items-start group" style={{ transitionDelay: '0.2s' }}>
          <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-6 h-6 text-purple-400">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Instant Activation</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Your Xtream Codes login details are emailed within minutes of checkout, so you can set up and start streaming right away.
          </p>
        </div>
      </div>
    </section>
  );
}
