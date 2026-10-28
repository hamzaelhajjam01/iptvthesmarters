'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ALL_LOCALES, Locale } from '@/data/locales';
import { TRANSLATIONS } from '@/data/translations';

interface HeaderProps {
  currentLang?: string;
  guideSlug?: string;
}

export default function Header({ currentLang = 'en', guideSlug }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const pathname = usePathname() || '/';

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const nav = t.nav;
  const prefix = currentLang === 'en' ? '/' : `/${currentLang}/`;

  // Get current active section
  const isHome = pathname === prefix || pathname === '/' || pathname === `/${currentLang}`;
  const isFeatures = pathname.includes('/features');
  const isChannels = pathname.includes('/channels');
  const isPricing = pathname.includes('/pricing');
  const isGuides = pathname.includes('/guides');
  const isContact = pathname.includes('/contact');

  // Compute target URL for each language switch
  function getLangUrl(targetLocale: Locale) {
    const targetPrefix = targetLocale.code === 'en' ? '' : `/${targetLocale.code}`;
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
    return targetPrefix || '/';
  }

  const currentLocale = ALL_LOCALES.find(l => l.code === currentLang) || ALL_LOCALES[0];

  return (
    <header className="site-header sticky top-0 transition-colors z-50">
      <div className="site-header-blur backdrop-blur-md border-b transition-colors bg-black/90 border-white/10 site-header-scrolled">
        <div className="site-header-bar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href={prefix} className="flex items-center gap-3 group z-50">
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
            <span className="font-extrabold text-lg text-white tracking-tight">IPTV Smarters Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href={prefix}
              className={`nav-link text-sm font-medium transition-colors ${
                isHome ? 'text-white nav-link-active' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {nav.home}
            </Link>
            <Link
              href={`${prefix}features/`}
              className={`nav-link text-sm font-medium transition-colors ${
                isFeatures ? 'text-white nav-link-active' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {nav.features}
            </Link>
            <Link
              href={`${prefix}channels/`}
              className={`nav-link text-sm font-medium transition-colors ${
                isChannels ? 'text-white nav-link-active' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {nav.channels}
            </Link>
            <Link
              href={`${prefix}pricing/`}
              className={`nav-link text-sm font-medium transition-colors ${
                isPricing ? 'text-white nav-link-active' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {nav.pricing}
            </Link>
            <Link
              href={`${prefix}guides/`}
              className={`nav-link text-sm font-medium transition-colors ${
                isGuides ? 'text-white nav-link-active' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {nav.guides}
            </Link>
            <Link
              href={`${prefix}contact/`}
              className={`nav-link text-sm font-medium transition-colors ${
                isContact ? 'text-white nav-link-active' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {nav.contact}
            </Link>
          </nav>

          {/* Right Side: CTA & Lang Switcher */}
          <div className="flex items-center gap-4">
            <Link
              href={`${prefix}pricing/`}
              className="btn-buy-now btn-nav-cta hidden md:flex px-6 py-2.5 font-bold text-sm rounded-full items-center gap-2 transition-all"
            >
              <span>{nav.cta}</span>
              <span className="btn-buy-now-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Language Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="lang-trigger flex items-center gap-2 px-3 py-2 rounded-full border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-sm text-zinc-300 transition-colors"
                aria-expanded={langMenuOpen}
                aria-label="Change language"
              >
                <span className="lang-flag" aria-hidden="true">
                  {currentLocale.flag}
                </span>
                <span className="lang-name font-medium">{currentLocale.name}</span>
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
                  className={`transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {langMenuOpen && (
                <div
                  className="lang-menu absolute right-0 mt-2 w-48 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl p-2 z-50 flex flex-col gap-1"
                  role="menu"
                >
                  {ALL_LOCALES.map(loc => {
                    const isActive = loc.code === currentLang;
                    return (
                      <Link
                        key={loc.code}
                        href={getLangUrl(loc)}
                        onClick={() => setLangMenuOpen(false)}
                        className={`lang-item flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-colors ${
                          isActive ? 'bg-purple-600/20 text-purple-400 font-bold' : 'text-zinc-300 hover:bg-zinc-800/80 hover:text-white'
                        }`}
                        role="menuitem"
                      >
                        <div className="flex items-center gap-2">
                          <span aria-hidden="true">{loc.flag}</span>
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
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <nav className="mobile-nav lg:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-6 transition-all">
          <div className="flex flex-col space-y-3">
            <Link
              href={prefix}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-semibold py-2 px-2 rounded-xl transition-colors ${
                isHome ? 'text-white bg-zinc-900 font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {nav.home}
            </Link>
            <Link
              href={`${prefix}features/`}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-semibold py-2 px-2 rounded-xl transition-colors ${
                isFeatures ? 'text-white bg-zinc-900 font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {nav.features}
            </Link>
            <Link
              href={`${prefix}channels/`}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-semibold py-2 px-2 rounded-xl transition-colors ${
                isChannels ? 'text-white bg-zinc-900 font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {nav.channels}
            </Link>
            <Link
              href={`${prefix}pricing/`}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-semibold py-2 px-2 rounded-xl transition-colors ${
                isPricing ? 'text-white bg-zinc-900 font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {nav.pricing}
            </Link>
            <Link
              href={`${prefix}guides/`}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-semibold py-2 px-2 rounded-xl transition-colors ${
                isGuides ? 'text-white bg-zinc-900 font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {nav.guides}
            </Link>
            <Link
              href={`${prefix}contact/`}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-semibold py-2 px-2 rounded-xl transition-colors ${
                isContact ? 'text-white bg-zinc-900 font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {nav.contact}
            </Link>
            <div className="pt-4 border-t border-zinc-800">
              <Link
                href={`${prefix}pricing/`}
                onClick={() => setMobileMenuOpen(false)}
                className="btn-buy-now btn-nav-cta w-full py-3.5 font-bold text-sm rounded-full flex items-center justify-center gap-2"
              >
                <span>{nav.cta}</span>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
