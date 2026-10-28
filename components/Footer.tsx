import React from 'react';
import Link from 'next/link';
import { TRANSLATIONS } from '@/data/translations';

interface FooterProps {
  currentLang?: string;
}

export default function Footer({ currentLang = 'en' }: FooterProps) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const f = t.footer;
  const nav = t.nav;
  const prefix = currentLang === 'en' ? '/' : `/${currentLang}/`;

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-12 transition-colors text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer-grid mb-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href={prefix} className="flex items-center gap-3">
              <span className="font-extrabold text-lg text-white tracking-tight">IPTV Smarters Pro</span>
            </Link>
            <p className="text-zinc-500 leading-relaxed text-xs">{f.desc}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wider uppercase text-xs">
              {f.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href={prefix} className="hover:text-purple-400 transition-colors">
                  {nav.home}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}features/`} className="hover:text-purple-400 transition-colors">
                  {nav.features}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}channels/`} className="hover:text-purple-400 transition-colors">
                  {nav.channels}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}pricing/`} className="hover:text-purple-400 transition-colors">
                  {nav.pricing}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}guides/`} className="hover:text-purple-400 transition-colors">
                  {nav.guides}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}contact/`} className="hover:text-purple-400 transition-colors">
                  {nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Setup Guides */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wider uppercase text-xs">
              {f.guidesTitle}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={`${prefix}guides/install-iptv-smarters-pro-on-firestick/`}
                  className="hover:text-purple-400 transition-colors"
                >
                  Firestick Setup Guide
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}guides/iptv-smarters-pro-on-samsung-lg-smart-tvs/`}
                  className="hover:text-purple-400 transition-colors"
                >
                  Samsung & LG Smart TVs
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}guides/how-to-set-up-xtream-codes-iptv-smarters-pro/`}
                  className="hover:text-purple-400 transition-colors"
                >
                  Xtream Codes API
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}guides/iptv-smarters-pro-keeps-buffering-fixes/`}
                  className="hover:text-purple-400 transition-colors"
                >
                  Fix Buffering & Freezing
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}guides/iptv-smarters-pro-for-pc-mac-setup/`}
                  className="hover:text-purple-400 transition-colors"
                >
                  Windows & macOS Setup
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wider uppercase text-xs">
              {f.legalTitle}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href={`${prefix}privacy/`} className="hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={`${prefix}terms/`} className="hover:text-purple-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href={`${prefix}refund/`} className="hover:text-purple-400 transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/212600000000?text=${encodeURIComponent(
                    'Hello, I need help with IPTV Smarters Pro setup.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold mt-2"
                >
                  <span>WhatsApp Support (24/7)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-zinc-900/80 text-zinc-600 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px]">
          <p>© {new Date().getFullYear()} IPTV Smarters Pro. {f.rights}</p>
          <p className="max-w-xl text-center md:text-right">{f.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
