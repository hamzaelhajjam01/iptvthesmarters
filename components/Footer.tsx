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

export default function Footer({ currentLang = 'en' }: FooterProps) {
  const prefix = currentLang === 'en' ? '/' : `/${currentLang}/`;
  const paypalLabel = PAYPAL_TEXT[currentLang] || PAYPAL_TEXT.en;

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-12 transition-colors text-xs">
      <div className="footer-top-glow" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer-grid mb-10">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href={prefix} className="flex items-center gap-2 group">
              <svg
                className="w-10 h-10 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/20 rounded-xl ring-1 ring-white/10"
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
                  className="lucide lucide-message-circle w-4 h-4"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
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
            <ul className="space-y-3 text-xs text-zinc-400">
              <li>Expert Support via WhatsApp</li>
              <li>
                <a
                  href="https://wa.me/18042804332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tappable inline-flex px-4 py-2 bg-gradient-primary hover:opacity-90 text-white font-bold rounded-lg transition-colors items-center gap-2"
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
                    className="lucide lucide-message-circle w-4 h-4"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                  Message Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between text-xs text-[#64748b] gap-4">
          <p>© 2026 IPTV Smarters Pro. All rights reserved.</p>
          <div className="flex items-center flex-wrap gap-4 sm:gap-6">
            <span className="footer-trust-pill">
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
                className="w-4 h-4"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Secure Checkout
            </span>
            <span className="footer-trust-pill">
              <svg
                className="w-4 h-4 text-[#0079C1]"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.792.792 0 0 1 .782-.67h6.634c3.084 0 5.487 1.056 5.86 4.382.203 1.808-.415 3.32-1.745 4.26-1.127.798-2.678 1.188-4.608 1.188H9.373a.855.855 0 0 0-.845.727l-.95 6.01a.642.642 0 0 1-.633.541l.13-.82z" />
                <path d="M9.13 14.88h2.07c2.44 0 4.35-.97 4.9-3.79.23-1.18.06-2.13-.53-2.79-.62-.69-1.66-1.06-3.09-1.06H8.28a.86.86 0 0 0-.85.73l-1.37 8.68a.64.64 0 0 0 .63.74h2.44z" fill="#00457C" />
              </svg>
              {paypalLabel}
            </span>
            <button
              type="button"
              aria-label="Back to top"
              className="footer-back-to-top"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              Back to top
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
                className="footer-back-to-top-icon w-4 h-4"
              >
                <path d="M12 19V5" />
                <path d="m5 12 7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
