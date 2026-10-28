import React from 'react';

const STANDARD_PLANS = [
  {
    months: 1,
    name: '1 Month',
    headingTag: 'h2',
    price1: '14.95',
    price2: '19.95',
    price3: '24.95',
    discount: 'Save 14%',
    isPopular: false,
    waLink: 'https://wa.me/18042804332?text=Hello%20IPTV%20Smarters%20Pro%20Support%2C%0A%0AI%20would%20like%20to%20order%20the%20following%20subscription%20plan%3A%0A%E2%80%A2%20Plan%3A%201%20Month%0A%E2%80%A2%20Total%20Price%3A%20%2414.95%0A%E2%80%A2%20Customer%20Email%3A%20%0A%0APlease%20send%20me%20the%20payment%20link.%0AAfter%20payment%20is%20confirmed%2C%20please%20send%20my%20login%20details%20to%20the%20email%20above.%0AThank%20you%21',
  },
  {
    months: 3,
    name: '3 Months',
    headingTag: 'h3',
    price1: '29.95',
    price2: '39.95',
    price3: '49.95',
    discount: 'Save 33%',
    isPopular: false,
    waLink: 'https://wa.me/18042804332?text=Hello%20IPTV%20Smarters%20Pro%20Support%2C%0A%0AI%20would%20like%20to%20order%20the%20following%20subscription%20plan%3A%0A%E2%80%A2%20Plan%3A%203%20Months%0A%E2%80%A2%20Total%20Price%3A%20%2429.95%0A%E2%80%A2%20Customer%20Email%3A%20%0A%0APlease%20send%20me%20the%20payment%20link.%0AAfter%20payment%20is%20confirmed%2C%20please%20send%20my%20login%20details%20to%20the%20email%20above.%0AThank%20you%21',
  },
  {
    months: 6,
    name: '6 Months',
    headingTag: 'h3',
    price1: '44.95',
    price2: '69.95',
    price3: '89.95',
    discount: 'Save 50%',
    isPopular: false,
    waLink: 'https://wa.me/18042804332?text=Hello%20IPTV%20Smarters%20Pro%20Support%2C%0A%0AI%20would%20like%20to%20order%20the%20following%20subscription%20plan%3A%0A%E2%80%A2%20Plan%3A%206%20Months%0A%E2%80%A2%20Total%20Price%3A%20%2444.95%0A%E2%80%A2%20Customer%20Email%3A%20%0A%0APlease%20send%20me%20the%20payment%20link.%0AAfter%20payment%20is%20confirmed%2C%20please%20send%20my%20login%20details%20to%20the%20email%20above.%0AThank%20you%21',
  },
  {
    months: 12,
    name: '12 Months',
    headingTag: 'h3',
    price1: '59.95',
    price2: '119.95',
    price3: '149.95',
    discount: 'Save 67%',
    isPopular: true,
    waLink: 'https://wa.me/18042804332?text=Hello%20IPTV%20Smarters%20Pro%20Support%2C%0A%0AI%20would%20like%20to%20order%20the%20following%20subscription%20plan%3A%0A%E2%80%A2%20Plan%3A%2012%20Months%0A%E2%80%A2%20Total%20Price%3A%20%2459.95%0A%E2%80%A2%20Customer%20Email%3A%20%0A%0APlease%20send%20me%20the%20payment%20link.%0AAfter%20payment%20is%20confirmed%2C%20please%20send%20my%20login%20details%20to%20the%20email%20above.%0AThank%20you%21',
  },
];

const PLAN_FEATURES = [
  'Top Live TV Channels',
  'Extensive Movie & TV Library',
  'All devices supported',
  '4K Ultra HD',
  '24/7 Dedicated Support',
];

export default function PricingSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-900/50" id="pricing">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center justify-center gap-4 mb-4">
            <div className="w-0.5 h-6 bg-blue-500"></div>
            <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Pricing Plans</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Top-Rated IPTV Smarters Pro <br className="hidden md:block" />
            <span className="text-gradient">Plans &amp; Pricing</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Get unlimited access to all IPTV Smarters Pro channels, movies, and VODs. Secure payments, and instant account activation.
          </p>
          {/* HeroUI High-Intent SEO Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 max-w-3xl mx-auto pricing-seo-badges">
            <span className="heroui-chip heroui-chip-primary">Best IPTV 2026</span>
            <span className="heroui-chip heroui-chip-default">Top Rated IPTV</span>
            <span className="heroui-chip heroui-chip-default">Instant Xtream Codes</span>
            <span className="heroui-chip heroui-chip-default">Anti-Freeze 4K Server</span>
          </div>
        </div>

        <div className="relative z-50 w-full">
          <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
            <div className="device-toggle" role="tablist" aria-label="Select number of devices" id="device-toggle">
              <button type="button" role="tab" aria-selected="true" data-devices="1" className="device-tab is-active">
                <span className="device-tab-bg" aria-hidden="true"></span>1 Device
              </button>
              <button type="button" role="tab" aria-selected="false" data-devices="2" className="device-tab">
                <span className="device-tab-bg" aria-hidden="true"></span>2 Devices
              </button>
              <button type="button" role="tab" aria-selected="false" data-devices="3" className="device-tab">
                <span className="device-tab-bg" aria-hidden="true"></span>3 Devices
              </button>
            </div>

            <div className="pricing-grid w-full" id="plan-panels" aria-live="polite">
              {STANDARD_PLANS.map((plan) => (
                <div
                  key={plan.months}
                  className={`plan-card ${plan.isPopular ? 'is-popular' : ''}`}
                  data-months={plan.months}
                  data-price-1={plan.price1}
                  data-price-2={plan.price2}
                  data-price-3={plan.price3}
                >
                  {plan.isPopular && <span className="plan-pill is-popular-pill">Most Popular</span>}
                  <span className="plan-kicker">Subscription</span>
                  {plan.headingTag === 'h2' ? (
                    <h2 className="plan-name">{plan.name}</h2>
                  ) : (
                    <h3 className="plan-name">{plan.name}</h3>
                  )}
                  <div className="plan-price-row">
                    <span className="plan-price-amount">${plan.price1}</span>
                  </div>
                  <span className="plan-discount-chip">{plan.discount}</span>
                  <div className="plan-divider"></div>
                  <ul className="plan-features">
                    {PLAN_FEATURES.map((feat) => (
                      <li key={feat}>
                        <span className="feat-check">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#A78BFA' }}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={plan.waLink} rel="sponsored noopener" className="buy-now-btn">
                    <span>Continue to WhatsApp</span>
                    <span className="buy-now-arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              ))}
            </div>

            <div className="w-full max-w-4xl mx-auto">
              <div className="diamond-border">
                <div className="diamond-panel is-locked" data-months="24" data-price-1="99.95">
                  <span className="diamond-badge">Diamond Plan · Best Value</span>
                  <div className="diamond-left">
                    <span className="plan-kicker">Subscription</span>
                    <h3 className="diamond-title">24 Months</h3>
                    <div className="diamond-price-row">
                      <span className="diamond-price">$99.95</span>
                    </div>
                    <div className="diamond-rate">
                      Effective rate: <strong>$4.16/mo</strong>
                    </div>
                  </div>
                  <div className="diamond-divider" aria-hidden="true"></div>
                  <div className="diamond-right">
                    <ul className="diamond-features">
                      <li>
                        <span className="feat-check" style={{ background: 'rgba(168,85,247,.12)' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#c4b5fd' }}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </span>
                        <span>Top Live TV Channels</span>
                      </li>
                      <li>
                        <span className="feat-check" style={{ background: 'rgba(168,85,247,.12)' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#c4b5fd' }}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </span>
                        <span>Extensive Movie &amp; TV Library</span>
                      </li>
                      <li>
                        <span className="feat-check" style={{ background: 'rgba(168,85,247,.12)' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#c4b5fd' }}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </span>
                        <span>All devices supported</span>
                      </li>
                      <li className="diamond-more">
                        <span>+ All other standard features</span>
                      </li>
                    </ul>
                    <a href="https://wa.me/18042804332?text=Hello%20IPTV%20Smarters%20Pro%20Support%2C%0A%0AI%20would%20like%20to%20order%20the%20following%20subscription%20plan%3A%0A%E2%80%A2%20Plan%3A%2024%20Months%0A%E2%80%A2%20Total%20Price%3A%20%2499.95%0A%E2%80%A2%20Customer%20Email%3A%20%0A%0APlease%20send%20me%20the%20payment%20link.%0AAfter%20payment%20is%20confirmed%2C%20please%20send%20my%20login%20details%20to%20the%20email%20above.%0AThank%20you%21" rel="sponsored noopener" className="buy-now-btn diamond-btn">
                      <span>Continue to WhatsApp</span>
                      <span className="buy-now-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
