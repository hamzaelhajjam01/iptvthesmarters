'use client';

import React, { useState, useRef, useEffect } from 'react';

interface Plan {
  id: string;
  months: number;
  name: string;
  headingTag: 'h2' | 'h3';
  prices: { 1: string; 2: string; 3: string };
  discount: string;
  isPopular?: boolean;
  isDiamond?: boolean;
  badge?: string;
  effectiveRate?: { 1: string; 2: string; 3: string };
}

const PLANS: Plan[] = [
  {
    id: 'plan-1',
    months: 1,
    name: '1 Month',
    headingTag: 'h3',
    prices: { 1: '14.95', 2: '19.95', 3: '24.95' },
    discount: 'Save 14%',
  },
  {
    id: 'plan-3',
    months: 3,
    name: '3 Months',
    headingTag: 'h3',
    prices: { 1: '29.95', 2: '39.95', 3: '49.95' },
    discount: 'Save 33%',
  },
  {
    id: 'plan-6',
    months: 6,
    name: '6 Months',
    headingTag: 'h3',
    prices: { 1: '44.95', 2: '69.95', 3: '89.95' },
    discount: 'Save 50%',
  },
  {
    id: 'plan-12',
    months: 12,
    name: '12 Months',
    headingTag: 'h2',
    prices: { 1: '59.95', 2: '119.95', 3: '149.95' },
    discount: 'Save 67%',
    isPopular: true,
    badge: 'Most Popular',
  },
  {
    id: 'plan-24',
    months: 24,
    name: '24 Months',
    headingTag: 'h3',
    prices: { 1: '99.95', 2: '199.95', 3: '299.95' },
    discount: 'Save 75%',
    isDiamond: true,
    badge: 'Diamond Plan · Best Value',
    effectiveRate: { 1: '4.16', 2: '8.33', 3: '12.50' },
  },
];

const STANDARD_FEATURES = [
  'Top Live TV Channels',
  'Extensive Movie & TV Library',
  'All devices supported',
  '4K Ultra HD',
  '24/7 Dedicated Support',
];

export default function PricingSection() {
  const [selectedDevices, setSelectedDevices] = useState<1 | 2 | 3>(1);
  const [activeSlide, setActiveSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Sync with sessionStorage & custom events if present
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('iptvDevices');
      if (stored && ['1', '2', '3'].includes(stored)) {
        setSelectedDevices(Number(stored) as 1 | 2 | 3);
      }
    } catch (e) {}
  }, []);

  const handleDeviceChange = (dev: 1 | 2 | 3) => {
    setSelectedDevices(dev);
    try {
      sessionStorage.setItem('iptvDevices', String(dev));
      window.dispatchEvent(new CustomEvent('iptv:devices-changed', { detail: { devices: dev } }));
    } catch (e) {}
  };

  const getWhatsAppUrl = (planName: string, devices: number, price: string) => {
    const deviceText = devices === 1 ? '1 Device' : `${devices} Devices`;
    const message = [
      'Hello IPTV Smarters Pro Support,',
      '',
      'I would like to order the following subscription plan:',
      `• Plan: ${planName} (${deviceText})`,
      `• Total Price: $${price}`,
      '• Customer Email: ',
      '',
      'Please send me the payment link.',
      'After payment is confirmed, please send my login details to the email above.',
      'Thank you!',
    ].join('\n');
    return `https://wa.me/18042804332?text=${encodeURIComponent(message)}`;
  };

  const scrollTrack = (direction: 'prev' | 'next') => {
    if (!trackRef.current) return;
    const container = trackRef.current;
    const card = container.querySelector<HTMLElement>('.plan-carousel-item');
    const scrollAmount = card ? card.offsetWidth + 20 : 300;
    container.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollToSlide = (index: number) => {
    if (!trackRef.current) return;
    const container = trackRef.current;
    const cards = container.querySelectorAll<HTMLElement>('.plan-carousel-item');
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
      setActiveSlide(index);
    }
  };

  const handleScroll = () => {
    if (!trackRef.current) return;
    const container = trackRef.current;
    const scrollLeft = container.scrollLeft;
    const card = container.querySelector<HTMLElement>('.plan-carousel-item');
    const cardWidth = (card ? card.offsetWidth : 280) + 20;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveSlide(Math.max(0, Math.min(index, PLANS.length - 1)));
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-900/50" id="pricing">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
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

        {/* Interactive Pricing Carousel Container */}
        <div className="relative z-50 w-full">
          <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
            {/* Device Toggle Selector */}
            <div className="device-toggle mb-8" role="tablist" aria-label="Select number of devices" id="device-toggle">
              <button
                type="button"
                role="tab"
                aria-selected={selectedDevices === 1}
                onClick={() => handleDeviceChange(1)}
                className={`device-tab ${selectedDevices === 1 ? 'is-active' : ''}`}
                data-devices="1"
              >
                <span className="device-tab-bg" aria-hidden="true"></span>1 Device
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={selectedDevices === 2}
                onClick={() => handleDeviceChange(2)}
                className={`device-tab ${selectedDevices === 2 ? 'is-active' : ''}`}
                data-devices="2"
              >
                <span className="device-tab-bg" aria-hidden="true"></span>2 Devices
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={selectedDevices === 3}
                onClick={() => handleDeviceChange(3)}
                className={`device-tab ${selectedDevices === 3 ? 'is-active' : ''}`}
                data-devices="3"
              >
                <span className="device-tab-bg" aria-hidden="true"></span>3 Devices
              </button>
            </div>

            {/* ONLY Top Carousel Navigation Controls Bar */}
            <div className="flex items-center justify-between w-full max-w-6xl mx-auto mb-4 px-2">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#7828C8]"></span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-300">
                  Select Plan &amp; Slide to Compare ({activeSlide + 1} of {PLANS.length})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous Plan"
                  className="carousel-btn"
                  onClick={() => scrollTrack('prev')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next Plan"
                  className="carousel-btn"
                  onClick={() => scrollTrack('next')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Carousel Slider Track (Exact Same 280px Width on All Cards) */}
            <div className="relative w-full max-w-7xl mx-auto">
              <div
                ref={trackRef}
                onScroll={handleScroll}
                className="carousel-track flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-2 sm:px-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                id="plan-panels"
                aria-live="polite"
              >
                {PLANS.map((plan) => {
                  const currentPrice = plan.prices[selectedDevices];
                  const currentRate = plan.effectiveRate ? plan.effectiveRate[selectedDevices] : null;
                  const waUrl = getWhatsAppUrl(plan.name, selectedDevices, currentPrice);

                  if (plan.isDiamond) {
                    return (
                      <div
                        key={plan.id}
                        className="plan-carousel-item pricing-diamond-slot shrink-0 flex-none snap-start w-[85vw] max-w-[320px] sm:w-[280px] sm:max-w-[280px] flex flex-col h-full"
                        style={{ width: '280px', minWidth: '280px', maxWidth: '280px' }}
                        data-months={plan.months}
                        data-price-1={plan.prices[1]}
                        data-price-2={plan.prices[2]}
                        data-price-3={plan.prices[3]}
                      >
                        <div className="diamond-border w-full h-full flex flex-col">
                          <div className="diamond-panel is-locked relative w-full h-full flex flex-col justify-between" data-months="24">
                            <span className="diamond-badge">Diamond Plan · Best Value</span>
                            <div className="diamond-left">
                              <span className="plan-kicker">Subscription</span>
                              <h3 className="diamond-title">{plan.name}</h3>
                              <div className="diamond-price-row">
                                <span className="diamond-price">${currentPrice}</span>
                              </div>
                              <div className="diamond-rate">
                                Effective rate: <strong>${currentRate}/mo</strong>
                              </div>
                            </div>
                            <div className="diamond-divider" aria-hidden="true"></div>
                            <div className="diamond-right flex flex-col justify-between flex-grow">
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
                                <li>
                                  <span className="feat-check" style={{ background: 'rgba(168,85,247,.12)' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#c4b5fd' }}>
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </span>
                                  <span>4K Ultra HD &amp; Anti-Freeze</span>
                                </li>
                                <li className="diamond-more">
                                  <span>+ 24/7 VIP Dedicated Support</span>
                                </li>
                              </ul>
                              <a
                                href={waUrl}
                                rel="sponsored noopener"
                                className="buy-now-btn diamond-btn mt-6"
                                data-devices={selectedDevices}
                                data-price={currentPrice}
                              >
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
                    );
                  }

                  return (
                    <div
                      key={plan.id}
                      className={`plan-carousel-item plan-card shrink-0 flex-none snap-start w-[85vw] max-w-[320px] sm:w-[280px] sm:max-w-[280px] flex flex-col justify-between ${
                        plan.isPopular ? 'is-popular ring-1 ring-purple-500/50 shadow-[0_0_30px_rgba(120,40,200,0.35)]' : ''
                      }`}
                      style={{ width: '280px', minWidth: '280px', maxWidth: '280px' }}
                      data-months={plan.months}
                      data-price-1={plan.prices[1]}
                      data-price-2={plan.prices[2]}
                      data-price-3={plan.prices[3]}
                    >
                      <div>
                        {plan.isPopular && <span className="plan-pill is-popular-pill">Most Popular</span>}
                        <span className="plan-kicker">Subscription</span>
                        {plan.headingTag === 'h2' ? (
                          <h2 className="plan-name">{plan.name}</h2>
                        ) : (
                          <h3 className="plan-name">{plan.name}</h3>
                        )}
                        <div className="plan-price-row">
                          <span className="plan-price-amount">${currentPrice}</span>
                        </div>
                        <span className="plan-discount-chip">{plan.discount}</span>
                        <div className="plan-divider"></div>
                        <ul className="plan-features">
                          {STANDARD_FEATURES.map((feat) => (
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
                      </div>
                      <a
                        href={waUrl}
                        rel="sponsored noopener"
                        className="buy-now-btn mt-6"
                        data-devices={selectedDevices}
                        data-price={currentPrice}
                      >
                        <span>Continue to WhatsApp</span>
                        <span className="buy-now-arrow">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Carousel Pagination Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mt-8" role="tablist" aria-label="Pricing plans pagination">
              {PLANS.map((plan, idx) => (
                <button
                  key={plan.id}
                  type="button"
                  role="tab"
                  aria-selected={activeSlide === idx}
                  aria-label={`Go to ${plan.name} plan`}
                  onClick={() => scrollToSlide(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    activeSlide === idx
                      ? 'w-8 h-2.5 bg-gradient-to-r from-purple-500 to-cyan-400'
                      : 'w-2.5 h-2.5 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
