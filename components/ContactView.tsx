'use client';

import React, { useState } from 'react';

interface ContactViewProps {
  lang: string;
}

export default function ContactView({ lang }: ContactViewProps) {
  return (
    <div className="bg-zinc-950 min-h-screen py-16 md:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-4 uppercase tracking-wider">
            24/7 Technical Support
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Contact & Customer Care
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Need help installing IPTV Smarters Pro, entering your Xtream Codes, or configuring your playlist? Our team is standing by.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Direct Support Channels */}
          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800">
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Instant WhatsApp Chat (Recommended)
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Fastest way to get help with your Xtream Codes credentials, trial activation, or playlist sync. Typical response time is under 3 minutes.
              </p>
              <a
                href="https://wa.me/18042804332?text=Hello%2C%20I%20need%20assistance%20with%20IPTV%20Smarters%20Pro."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-green inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all shadow-lg" style={{ backgroundColor: "#25D366", color: "#ffffff", boxShadow: "0 6px 20px rgba(37,211,102,0.4)" }}><img src="/assets/images/whatsapp.png" width={22} height={22} alt="WhatsApp" className="w-[22px] h-[22px] rounded-full shrink-0" /><span>Open WhatsApp Support</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Email Technical Support
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                For complex installation diagnostics or reseller inquiries, reach our engineering desk directly:
              </p>
              <a
                href="mailto:support@thesmartersiptv.com"
                className="text-purple-400 hover:text-purple-300 font-bold text-sm"
              >
                support@thesmartersiptv.com
              </a>
            </div>
          </div>

          {/* Setup Inquiry Form */}
          <div className="p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800">
            <h3 className="text-2xl font-bold text-white mb-2">
              Send Us a Message
            </h3>
            <p className="text-zinc-400 text-xs mb-6">
              Fill out the form below and an engineer will reply to you within 1 hour.
            </p>

            <form
              onSubmit={e => {
                e.preventDefault();
                alert('Thank you! Your message has been sent to our support desk.');
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase mb-2">
                  Your Device
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm outline-none focus:border-purple-500">
                  <option>Amazon Firestick / Fire TV</option>
                  <option>Samsung Smart TV (Tizen)</option>
                  <option>LG Smart TV (webOS)</option>
                  <option>Android TV / Google TV / Shield</option>
                  <option>Apple TV / iPhone / iPad</option>
                  <option>Windows PC / macOS</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase mb-2">
                  How Can We Help?
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your question or issue..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm outline-none focus:border-purple-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm transition-colors shadow-lg shadow-purple-600/30"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
