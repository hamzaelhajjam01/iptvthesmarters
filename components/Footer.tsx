'use client';

import React from 'react';
import Link from 'next/link';

interface FooterProps {
  currentLang?: string;
}

const PAYPAL_TEXT: Record<string, string> = {
  en: 'PayPal Accepted',
  fr: 'PayPal Accepté',
  de: 'PayPal Akzeptiert',
  es: 'PayPal Aceptado',
  it: 'PayPal Accettato',
  nl: 'PayPal Geaccepteerd',
  pt: 'PayPal Aceito',
  'pt-br': 'PayPal Aceito',
  pl: 'PayPal Akceptowany',
  ar: 'نقبل باي بال',
  ko: 'PayPal 결제 가능',
};

const RESELLER_LABEL: Record<string, string> = {
  en: 'Reseller Program',
  fr: 'Programme Revendeur',
  de: 'Reseller-Programm',
  es: 'Programa de Revendedores',
  it: 'Programma Rivenditori',
  nl: 'Reseller Programma',
  pt: 'Programa de Revendedores',
  'pt-br': 'Programa de Revendedores',
  pl: 'Program Resellerski',
  ar: 'برنامج الموزعين',
  ko: '리셀러 프로그램',
};

export default function Footer({ currentLang = 'en' }: FooterProps) {
  const prefix = currentLang === 'en' ? '/' : `/${currentLang}/`;
  const paypalLabel = PAYPAL_TEXT[currentLang] || PAYPAL_TEXT.en;
  const resellerLabel = RESELLER_LABEL[currentLang] || RESELLER_LABEL.en;

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-12 transition-colors text-xs relative">
      <div className="footer-top-glow" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer-grid mb-10">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href={prefix} className="flex items-center gap-2 group">
              <svg
                className="w-10 h-10 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/20 rounded-xl ring-1 ring-white/10"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="10" fill="url(#brand_gradient_footer)" />
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
                  <linearGradient id="brand_gradient_footer" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7B3FE4" />
                    <stop offset="1" stopColor="#5F15CD" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-display font-extrabold text-lg text-white tracking-tight">
                IPTV Smarters Pro
              </span>
            </Link>
            <p className="text-zinc-400 leading-relaxed text-xs">
              <strong className="text-white">IPTV Smarters Pro</strong> Premium IPTV streaming with a premium live TV lineup and an extensive on-demand library, delivering 4K on every screen you own.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://wa.me/18042804332"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message us on WhatsApp"
                className="footer-social-btn"
              >
                <img src="/assets/images/whatsapp.png" width={18} height={18} alt="WhatsApp" className="w-[18px] h-[18px] rounded-full shrink-0" />
              </a>
            </div>
          </div>

          {/* Product Col */}
          <div>
            <h2 className="font-bold text-white uppercase tracking-wider text-[11px] mb-4">Product</h2>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link href={`${prefix}features/`} className="hover:text-white transition-colors tappable">
                  Features
                </Link>
              </li>
              <li>
                <Link href={`${prefix}channels/`} className="hover:text-white transition-colors tappable">
                  Channel List
                </Link>
              </li>
              <li>
                <Link href={`${prefix}pricing/`} className="hover:text-white transition-colors tappable">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href={`${prefix}iptv-services/`} className="hover:text-white transition-colors tappable">
                  IPTV Services
                </Link>
              </li>
              <li>
                <Link href={`${prefix}reseller/`} className="hover:text-white transition-colors tappable text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1.5">
                  <span>{resellerLabel}</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">New</span>
                </Link>
              </li>
              <li>
                <Link href={`${prefix}products/`} className="hover:text-white transition-colors tappable">
                  Product Directory
                </Link>
              </li>
              <li>
                <Link href={`${prefix}guides/how-to-activate-iptv-smarters-pro/`} className="hover:text-white transition-colors tappable">
                  Setup Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h2 className="font-bold text-white uppercase tracking-wider text-[11px] mb-4">Company</h2>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link href={`${prefix}contact/`} className="hover:text-white transition-colors tappable">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href={`${prefix}guides/`} className="hover:text-white transition-colors tappable">
                  Guides
                </Link>
              </li>
              <li>
                <Link href={`${prefix}privacy/`} className="hover:text-white transition-colors tappable">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={`${prefix}terms/`} className="hover:text-white transition-colors tappable">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href={`${prefix}refund/`} className="hover:text-white transition-colors tappable">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h2 className="font-bold text-white uppercase tracking-wider text-[11px] mb-4">Contact</h2>
            <p className="text-zinc-400 mb-3 text-xs leading-relaxed">
              Expert Support via WhatsApp
            </p>
            <a
              href="https://wa.me/18042804332"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg text-xs font-semibold transition-all shadow-md shadow-purple-900/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle w-3.5 h-3.5"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              <span>Message Us</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 IPTV Smarters Pro. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shield-check text-green-500 w-3.5 h-3.5"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              Secure Checkout
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-credit-card text-blue-400 w-3.5 h-3.5"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
              {paypalLabel}
            </span>
            <button
              onClick={scrollToTop}
              type="button"
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              Back to Top
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
