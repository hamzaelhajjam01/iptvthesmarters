import React from 'react';

const FAQS = [
  {
    num: '01',
    q: 'Is the IPTV Smarters Pro app free?',
    a: 'The app itself is entirely free to download and install on most platforms. However, it does not come with any content. You must purchase a subscription from a service provider (like us) to actually watch live TV or movies. The app is essentially a blank media player until you add a playlist.',
    isOpen: true,
  },
  {
    num: '02',
    q: 'How do I log in using Xtream Codes?',
    a: "When you open the Smarters Pro player, select the 'Login with Xtream Codes API' option. You will need to enter four pieces of information: any name you want (like 'My TV'), the username we email you, your password, and our portal URL. This is the fastest and most reliable setup method.",
    isOpen: false,
  },
  {
    num: '03',
    q: 'Can I install it on an Amazon Firestick?',
    a: 'Yes, but because it is not always available in the official Amazon App Store, you may need to sideload the Smarters Pro APK using the Downloader app. The process takes about two minutes, and it remains one of the top Firestick IPTV apps available.',
    isOpen: false,
  },
  {
    num: '04',
    q: 'Why is my EPG guide not loading?',
    a: "This usually happens if your provider's server is struggling, or if you entered a long M3U playlist link instead of using the API login. Using our Xtream Codes setup ensures your TV guide populates automatically and stays synced.",
    isOpen: false,
  },
  {
    num: '05',
    q: 'Does the app support multi-screen streaming?',
    a: 'Yes, it has a built-in multi-screen feature that allows you to watch up to four live channels simultaneously on the same display. Please note that your subscription must have multiple connections enabled (like our 2 or 3 device plans) to use this feature without freezing.',
    isOpen: false,
  },
  {
    num: '06',
    q: 'Is a VPN required to use this service?',
    a: 'We do not mandate a VPN because our service uses secure, load-balanced servers. However, we are completely VPN-friendly. If you experience ISP throttling during major sporting events, connecting to a VPN can quickly resolve those speed issues.',
    isOpen: false,
  },
];

export default function FaqSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden border-b border-zinc-900/50" id="faq">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="w-full max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center justify-center gap-4 mb-4">
            <div className="w-0.5 h-6 bg-cyan-500"></div>
            <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Common Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Frequently Asked <span className="text-gradient-cyan-blue">Questions.</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Everything you need to know about using your IPTV subscription with the Smarters Pro player.
          </p>
        </div>
        <div className="faq-list w-full max-w-3xl mx-auto">
          {FAQS.map((faq) => (
            <details key={faq.num} className="faq-item" name="homepage-faq" open={faq.isOpen ? true : undefined}>
              <summary className="faq-summary">
                <span className="faq-num" aria-hidden="true">{faq.num}</span>
                <span className="faq-q">{faq.q}</span>
                <span className="faq-chevron" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
