import React from 'react';

export default function SetupWalkthrough() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-y border-zinc-900/50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <div className="flex flex-col items-center justify-center gap-4 mb-6">
            <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-transparent rounded-full"></div>
            <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">Xtream Codes Login</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            How to configure your <span className="text-gradient-blue-cyan">Smarters Pro setup.</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Forget typing long, complicated playlist URLs. Our setup process uses the much faster API login method.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent -z-10"></div>
          <div className="reveal-on-scroll bg-black/50 backdrop-blur-sm border border-zinc-800/60 p-10 rounded-3xl text-center relative group hover:border-zinc-700 transition-colors" style={{ transitionDelay: '0s' }}>
            <div className="w-20 h-20 mx-auto bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex items-center justify-center mb-8 group-hover:border-blue-500 transition-colors shadow-lg shadow-black/50">
              <span className="text-2xl font-black text-blue-400">01</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Choose a Plan</h3>
            <p className="text-zinc-400 leading-relaxed">
              Select a premium subscription plan that fits your viewing needs. We offer flexible options with no
              hidden fees and no long-term contracts.
            </p>
          </div>
          <div className="reveal-on-scroll bg-black/50 backdrop-blur-sm border border-zinc-800/60 p-10 rounded-3xl text-center relative group hover:border-zinc-700 transition-colors" style={{ transitionDelay: '0.1s' }}>
            <div className="w-20 h-20 mx-auto bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex items-center justify-center mb-8 group-hover:border-cyan-400 transition-colors shadow-lg shadow-black/50">
              <span className="text-2xl font-black text-cyan-400">02</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Get Credentials</h3>
            <p className="text-zinc-400 leading-relaxed">
              Instantly receive an email containing your unique Xtream Codes API login details (username, password,
              and our secure portal URL).
            </p>
          </div>
          <div className="reveal-on-scroll bg-black/50 backdrop-blur-sm border border-zinc-800/60 p-10 rounded-3xl text-center relative group hover:border-zinc-700 transition-colors" style={{ transitionDelay: '0.2s' }}>
            <div className="w-20 h-20 mx-auto bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex items-center justify-center mb-8 group-hover:border-purple-400 transition-colors shadow-lg shadow-black/50">
              <span className="text-2xl font-black text-purple-400">03</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Start Streaming</h3>
            <p className="text-zinc-400 leading-relaxed">
              Open the IPTV Smarters Pro app on your preferred device, enter your new details into the login screen,
              and immediately start exploring the channel list.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
