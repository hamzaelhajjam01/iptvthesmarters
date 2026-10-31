'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ALL_LOCALES } from '@/data/locales';
import { TRANSLATIONS } from '@/data/translations';

interface HeaderProps {
  currentLang?: string;
  guideSlug?: string;
}

export default function Header({ currentLang = 'en', guideSlug }: HeaderProps) {
  const pathname = usePathname() || '/';

  useEffect(() => {
    const run = () => {
      if (typeof window !== 'undefined' && (window as any).__initSite) {
        (window as any).__initSite();
      }
    };
    run();
    const timer = setTimeout(run, 60);
    return () => clearTimeout(timer);
  }, [pathname]);

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const nav = t.nav;
  const prefix = currentLang === 'en' ? '/' : `/${currentLang}/`;

  // Determine active nav tab
  const isHome = pathname === prefix || pathname === '/' || pathname === `/${currentLang}`;
  const isServices = pathname.includes('/iptv-services');
  const isFeatures = pathname.includes('/features');
  const isChannels = pathname.includes('/channels');
  const isPricing = pathname.includes('/pricing');
  const isReseller = pathname.includes('/reseller');
  const isGuides = pathname.includes('/guides');
  const isProducts = pathname.includes('/products');
  const isContact = pathname.includes('/contact');

  // Compute exact URL for switching to another language
  function getLangUrl(targetCode: string) {
    const targetPrefix = targetCode === 'en' ? '' : `/${targetCode}`;
    if (guideSlug) {
      return `${targetPrefix}/guides/${guideSlug}/`;
    }
    if (isGuides) {
      return `${targetPrefix}/guides/`;
    }
    if (isPricing) {
      return `${targetPrefix}/pricing/`;
    }
    if (isFeatures) {
      return `${targetPrefix}/features/`;
    }
    if (isChannels) {
      return `${targetPrefix}/channels/`;
    }
    if (isContact) {
      return `${targetPrefix}/contact/`;
    }
    if (isServices) {
      return `${targetPrefix}/iptv-services/`;
    }
    if (isReseller) {
      return `${targetPrefix}/reseller/`;
    }
    if (isProducts) {
      return `${targetPrefix}/products/`;
    }
    return targetPrefix ? `${targetPrefix}/` : '/';
  }

  const currentLocale = ALL_LOCALES.find(l => l.code === currentLang) || ALL_LOCALES[0];

  const handleMenuToggle = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && (window as any).__toggleMobileMenu) {
      return;
    }
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('menu-open');
    }
  };

  const closeMobileMenu = () => {
    if (typeof window !== 'undefined' && (window as any).__toggleMobileMenu) {
      (window as any).__toggleMobileMenu(false);
      return;
    }
    if (typeof document !== 'undefined') {
      document.body.classList.remove('menu-open');
    }
  };

  return (
    <header className="site-header sticky top-0 transition-colors z-50">
      <div className="site-header-blur backdrop-blur-md border-b transition-colors bg-black/90 border-white/10 site-header-scrolled">
        <div className="site-header-bar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href={prefix} className="flex items-center gap-3 group z-50 flex-shrink-0">
            <svg
              className="w-10 h-10 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/20 rounded-xl ring-1 ring-white/10"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="10" fill="url(#brand_gradient)" />
              <path
                d="M12 16C12 13.7909 13.7909 12 16 12H24C26.2091 12 28 13.7909 28 16V24C28 26.2091 26.2091 28 24 28H16C13.7909 28 12 26.2091 12 24V16Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 16.5L23.5 20L18 23.5V16.5Z"
                fill="white"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M15 8L18 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25 8L22 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="brand_gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7B3FE4" />
                  <stop offset="1" stopColor="#5F15CD" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-extrabold text-base sm:text-lg text-white tracking-tight">IPTV Smarters Pro</span>
          </Link>

          {/* Desktop Navigation - Always visible on lg (1024px+) screens */}
          <nav className="site-nav-desktop hidden lg:flex items-center text-sm font-medium" style={{ gap: '28px' }}>
            <Link
              href={`${prefix}features/`}
              className={`nav-link whitespace-nowrap transition-colors ${
                isFeatures ? 'text-white nav-link-active font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {nav.features}
            </Link>
            <Link
              href={`${prefix}channels/`}
              className={`nav-link whitespace-nowrap transition-colors ${
                isChannels ? 'text-white nav-link-active font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {nav.channels}
            </Link>
            <Link
              href={`${prefix}pricing/`}
              className={`nav-link whitespace-nowrap transition-colors ${
                isPricing ? 'text-white nav-link-active font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {nav.pricing}
            </Link>
            <Link
              href={`${prefix}reseller/`}
              className={`nav-link whitespace-nowrap transition-colors ${
                isReseller
                  ? 'text-purple-400 nav-link-active font-bold'
                  : 'text-purple-400/90 hover:text-purple-300 font-semibold'
              }`}
            >
              {nav.reseller}
            </Link>
            <Link
              href={`${prefix}guides/`}
              className={`nav-link whitespace-nowrap transition-colors ${
                isGuides ? 'text-white nav-link-active font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {nav.guides}
            </Link>
          </nav>

          {/* Right Side: CTA, Lang Switcher & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href={`${prefix}pricing/`}
              className="btn-buy-now btn-nav-cta hidden sm:flex px-4 xl:px-6 py-2 xl:py-2.5 font-bold text-xs xl:text-sm rounded-full items-center gap-2 transition-all flex-shrink-0"
            >
              <span>{nav.cta}</span>
              <span className="btn-buy-now-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right w-3.5 h-3.5 xl:w-4 xl:h-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Language Selector */}
            <details className="lang-switch">
              <summary
                id="langToggle"
                className="lang-trigger"
                aria-haspopup="true"
                aria-expanded="false"
                aria-label="Change language"
              >
                <span className="lang-flag" aria-hidden="true">
                  {currentLocale.flag}
                </span>
                <span className="lang-name">{currentLocale.name}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lang-chevron"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div id="langMenu" className="lang-menu" role="menu">
                {ALL_LOCALES.map(loc => {
                  const isActive = loc.code === currentLang;
                  return (
                    <Link
                      key={loc.code}
                      href={getLangUrl(loc.code)}
                      className={`lang-item ${isActive ? 'is-active' : ''}`}
                      role="menuitem"
                      aria-current={isActive ? 'true' : undefined}
                    >
                      <div className="lang-item-content">
                        <span className="lang-flag" aria-hidden="true">
                          {loc.flag}
                        </span>
                        <span>{loc.name}</span>
                      </div>
                      {isActive && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lang-item-check"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      )}
                    </Link>
                  );
                })}
              </div>
            </details>

            {/* Mobile Hamburger Button - Visible whenever width < 1024px (lg:hidden) */}
            <button
              type="button"
              id="menuToggle"
              onClick={handleMenuToggle}
              className="menu-toggle lg:hidden"
              aria-expanded="false"
              aria-controls="mobileNav"
              aria-label="Open menu"
            >
              <span className="menu-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <nav id="mobileNav" className="mobile-nav" aria-hidden="true" aria-label="Mobile">
        <div className="flex flex-col">
          <Link
            href={prefix}
            onClick={closeMobileMenu}
            className={`mobile-nav-row text-lg font-semibold py-3 px-2 ${
              isHome ? 'mobile-nav-row-active text-white' : 'text-zinc-400'
            }`}
          >
            {nav.home}
          </Link>
          <Link
            href={`${prefix}iptv-services/`}
            onClick={closeMobileMenu}
            className={`mobile-nav-row text-lg font-semibold py-3 px-2 ${
              isServices ? 'mobile-nav-row-active text-white' : 'text-zinc-400'
            }`}
          >
            {nav.services}
          </Link>
          <Link
            href={`${prefix}features/`}
            onClick={closeMobileMenu}
            className={`mobile-nav-row text-lg font-semibold py-3 px-2 ${
              isFeatures ? 'mobile-nav-row-active text-white' : 'text-zinc-400'
            }`}
          >
            {nav.features}
          </Link>
          <Link
            href={`${prefix}channels/`}
            onClick={closeMobileMenu}
            className={`mobile-nav-row text-lg font-semibold py-3 px-2 ${
              isChannels ? 'mobile-nav-row-active text-white' : 'text-zinc-400'
            }`}
          >
            {nav.channels}
          </Link>
          <Link
            href={`${prefix}pricing/`}
            onClick={closeMobileMenu}
            className={`mobile-nav-row text-lg font-semibold py-3 px-2 ${
              isPricing ? 'mobile-nav-row-active text-white' : 'text-zinc-400'
            }`}
          >
            {nav.pricing}
          </Link>
          <Link
            href={`${prefix}reseller/`}
            onClick={closeMobileMenu}
            className={`mobile-nav-row text-lg font-semibold py-3 px-2 ${
              isReseller ? 'mobile-nav-row-active text-purple-400 font-bold' : 'text-purple-400'
            }`}
          >
            {nav.reseller}
          </Link>
          <Link
            href={`${prefix}guides/`}
            onClick={closeMobileMenu}
            className={`mobile-nav-row text-lg font-semibold py-3 px-2 ${
              isGuides ? 'mobile-nav-row-active text-white' : 'text-zinc-400'
            }`}
          >
            {nav.guides}
          </Link>
          <Link
            href={`${prefix}products/`}
            onClick={closeMobileMenu}
            className={`mobile-nav-row text-lg font-semibold py-3 px-2 ${
              isProducts ? 'mobile-nav-row-active text-white' : 'text-zinc-400'
            }`}
          >
            {nav.products}
          </Link>
          <Link
            href={`${prefix}contact/`}
            onClick={closeMobileMenu}
            className={`mobile-nav-row text-lg font-semibold py-3 px-2 ${
              isContact ? 'mobile-nav-row-active text-white' : 'text-zinc-400'
            }`}
          >
            {nav.contact}
          </Link>

          <div className="pt-4 border-t border-zinc-800 space-y-3">
            <Link
              href={`${prefix}pricing/`}
              onClick={closeMobileMenu}
              className="btn-buy-now btn-nav-cta w-full py-3.5 font-bold text-sm rounded-full flex items-center justify-center gap-2"
            >
              <span>{nav.cta}</span>
            </Link>
            <a
              href="https://wa.me/18042804332"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-4 py-3.5 px-6 rounded-full text-sm font-bold text-white transition-all shadow-lg"
              style={{ backgroundColor: '#25D366', color: '#fff', boxShadow: '0 6px 20px rgba(37,211,102,0.35)' }}
            >
              <img src="/assets/images/whatsapp.png" width={22} height={22} alt="WhatsApp" className="w-[22px] h-[22px] object-contain shrink-0" />
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </nav>
      <div id="navOverlay" className="nav-overlay" onClick={closeMobileMenu}></div>
    </header>
  );
}

