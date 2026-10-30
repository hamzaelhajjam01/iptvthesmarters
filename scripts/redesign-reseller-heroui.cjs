const fs = require('fs');
const path = require('path');
const { generateUniversalHeader, generateUniversalFooter } = require('./universal-components.cjs');

const resellerHtmlPath = path.join(__dirname, '..', 'Iptv The smarters Pro', 'reseller', 'index.html');

const universalHeader = generateUniversalHeader('/reseller/', 'en');
const universalFooter = generateUniversalFooter('en');

const pageHtml = `<!doctype html>
<html lang="en">
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XFWZSDKJ29"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XFWZSDKJ29');
    </script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/svg+xml" href="/assets/images/brand/favicon.svg">
    <link rel="apple-touch-icon" href="/assets/images/brand/logo.png">
    <title>IPTV Reseller Panel — Start Your IPTV Business | The Smarters IPTV</title>
    <meta name="title" content="IPTV Reseller Panel — Start Your IPTV Business | The Smarters IPTV">
    <meta name="description" content="Become an IPTV reseller with The Smarters IPTV. No-expire credits, white-label panel, 99.9% uptime. Starter packs from $99. Free 24h trial line included. Launch your IPTV business today.">
    <link rel="canonical" href="https://thesmartersiptv.com/reseller/">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="googlebot" content="index, follow">

    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://thesmartersiptv.com/reseller/">
    <meta property="og:title" content="IPTV Reseller Panel — Start Your IPTV Business | The Smarters IPTV">
    <meta property="og:description" content="Become an IPTV reseller with The Smarters IPTV. No-expire credits, white-label panel, 99.9% uptime. Starter packs from $99. Free 24h trial line.">
    <meta property="og:image" content="https://thesmartersiptv.com/og-image.jpg">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://thesmartersiptv.com/reseller/">
    <meta property="twitter:title" content="IPTV Reseller Panel — Start Your IPTV Business | The Smarters IPTV">
    <meta property="twitter:description" content="Become an IPTV reseller with The Smarters IPTV. Credits from $99. Free 24h trial line.">
    <meta property="twitter:image" content="https://thesmartersiptv.com/og-image.jpg">

    <!-- Stylesheets -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link rel="preload" as="style" href="/assets/css/inter.css">
    <link rel="stylesheet" href="/assets/css/inter.css" media="all" onload="this.media='all';this.onload=null">
    <noscript><link rel="stylesheet" href="/assets/css/inter.css"></noscript>
    <link rel="stylesheet" href="/assets/css/main.css">
    <link rel="stylesheet" href="/assets/css/runtime.css">
    <link rel="stylesheet" href="/assets/css/theme.css?v=20261030-nav2">
    <link rel="stylesheet" href="/assets/css/heroui.css?v=20261030-nav2">

    <style>
      /* Page-specific modern HeroUI enhancements */
      .reseller-hero-glow {
        background: radial-gradient(circle at 50% 0%, rgba(123, 63, 228, 0.22) 0%, transparent 65%);
      }
      .calc-input {
        background: rgba(18, 18, 24, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        color: #fff;
        padding: 12px 16px;
        font-size: 0.95rem;
        width: 100%;
        transition: all 0.2s ease;
      }
      .calc-input:focus {
        outline: none;
        border-color: #a855f7;
        box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.2);
      }
    </style>
    <script id="ais-lang-toggle-init">window.__toggleLangMenu=function(e){var d=(e&&e.target&&e.target.closest&&e.target.closest("details.lang-switch"))||document.querySelector("details.lang-switch");if(d){if(e&&e.target&&(e.target.tagName==="SUMMARY"||e.target.closest("summary")))return;d.open=!d.open;}};</script>
</head>
<body class="bg-black text-white selection:bg-cyan-500/30 selection:text-white">
  <div class="grain-overlay"></div>
  <div class="min-h-screen flex flex-col font-sans antialiased bg-black text-white transition-colors">
  ${universalHeader}

  <main class="flex-1">

    <!-- ═══════════════ HERO SECTION (Matches Features & Pricing) ═══════════════ -->
    <section class="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto reseller-hero-glow">
      <div class="text-center mb-12">
        <div class="flex flex-col items-center justify-center gap-4 mb-4">
          <div class="w-0.5 h-6 bg-purple-500"></div>
          <span class="text-xs font-bold tracking-widest text-zinc-500 uppercase">Reseller Program</span>
        </div>
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          IPTV Reseller Panel — <br class="hidden md:block">
          <span class="text-gradient">Start Your IPTV Business</span>
        </h1>
        <p class="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed mb-6">
          Launch your own high-margin IPTV business powered by Smarters infrastructure. Buy wholesale credits, create trials and subscriptions on your branded panel, and keep 60–70% net profit.
        </p>

        <!-- HeroUI High-Intent SEO Chips (Identical to Pricing/Features) -->
        <div class="flex flex-wrap items-center justify-center gap-2 mt-4 max-w-3xl mx-auto">
          <span class="heroui-chip heroui-chip-primary">99.9% Uptime</span>
          <span class="heroui-chip heroui-chip-default">Credits Never Expire</span>
          <span class="heroui-chip heroui-chip-default">10,000+ Active Lines</span>
          <span class="heroui-chip heroui-chip-secondary">24/7 WhatsApp Support</span>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a href="https://wa.me/18042804332?text=Hello%2C%20I%20want%20a%20free%2024h%20reseller%20trial%20line" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-green px-8 py-3.5 rounded-full font-bold text-sm text-white inline-flex items-center gap-2.5 transition-all shadow-lg" style="background-color:#25D366!important;color:#ffffff!important;box-shadow:0 8px 24px rgba(37,211,102,0.45)!important;">
            <img src="/assets/images/whatsapp.png" width="22" height="22" alt="WhatsApp" style="width:22px;height:22px;border-radius:50%;flex-shrink:0;">
            <span>Get Free 24h Trial Line</span>
          </a>
          <a href="#pricing-tiers" class="px-8 py-3.5 rounded-full font-bold text-sm border border-zinc-700 bg-zinc-900/90 hover:bg-zinc-800 text-white inline-flex items-center gap-2 transition-all shadow-md">
            <span>View Credit Pricing</span>
            <svg class="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ═══════════════ WHY CHOOSE US (4 Feature Cards matching Features page) ═══════════════ -->
    <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <div class="flex flex-col items-center justify-center gap-2 mb-3">
          <div class="w-0.5 h-6 bg-cyan-500"></div>
          <span class="text-xs font-bold tracking-widest text-zinc-500 uppercase">Reseller Benefits</span>
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-white tracking-tight">Why Choose Our Reseller Program?</h2>
        <p class="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base mt-2">
          Everything you need to launch and scale a profitable streaming service from day one.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="reveal-on-scroll group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 hover:bg-zinc-900/50 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Zero Buffering</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">Dedicated load-balanced 20 Gbps servers with 99.9% uptime guarantee. Your customers enjoy stutter-free live sports and movies.</p>
          </div>
        </div>

        <div class="reveal-on-scroll group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 hover:bg-zinc-900/50 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Credits Never Expire</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">Your purchased credits stay in your account forever until you assign them to active user subscriptions. Zero risk, zero wasted capital.</p>
          </div>
        </div>

        <div class="reveal-on-scroll group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 hover:bg-zinc-900/50 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">White-Label Panel</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">Full Xtream Codes compatible web management panel. Create, extend, pause, and edit customer accounts under your own brand identity.</p>
          </div>
        </div>

        <div class="reveal-on-scroll group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 hover:bg-zinc-900/50 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">24/7 Priority Support</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">Direct WhatsApp engineer line to assist with bulk activations, channel bouquets, troubleshooting, and instant wallet recharges.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ HOW IT WORKS (3 Step Cards) ═══════════════ -->
    <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <div class="flex flex-col items-center justify-center gap-2 mb-3">
          <div class="w-0.5 h-6 bg-purple-500"></div>
          <span class="text-xs font-bold tracking-widest text-zinc-500 uppercase">Process</span>
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-white tracking-tight">How the Credit System Works</h2>
        <p class="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base mt-2">
          3 simple steps to launch and manage your customers.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-400 flex items-center justify-center font-bold text-lg mb-6">1</div>
            <h3 class="text-xl font-bold text-white mb-2">Choose Credit Pack</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">1 credit = 1 month of subscription for a client. 12 credits = 1 year. Credits never expire.</p>
          </div>
        </div>

        <div class="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-400 flex items-center justify-center font-bold text-lg mb-6">2</div>
            <h3 class="text-xl font-bold text-white mb-2">Instant Panel Setup</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">Message us on WhatsApp. Receive your management panel login and wholesale credit balance within 15 minutes.</p>
          </div>
        </div>

        <div class="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-400 flex items-center justify-center font-bold text-lg mb-6">3</div>
            <h3 class="text-xl font-bold text-white mb-2">Sell &amp; Keep Profit</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">Generate free 24h trials, sell subscriptions at your own prices, and keep 60–70% margin on every renewal.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ RESELLER PRICING TIERS (Identical to Pricing page cards) ═══════════════ -->
    <section id="pricing-tiers" class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      <div class="text-center mb-16">
        <div class="flex flex-col items-center justify-center gap-4 mb-4">
          <div class="w-0.5 h-6 bg-purple-500"></div>
          <span class="text-xs font-bold tracking-widest text-zinc-500 uppercase">Wholesale Credit Packs</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">IPTV Reseller Credit Packages</h2>
        <p class="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
          Transparent wholesale pricing. Credits never expire. The more you buy, the higher your profit margins.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <!-- Tier 1: Starter -->
        <div class="reveal-on-scroll bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 flex flex-col justify-between hover:border-zinc-700/80 transition-all duration-300">
          <div>
            <span class="inline-flex px-3 py-1 rounded-full text-xs font-bold bg-zinc-800 text-zinc-400 border border-zinc-700 mb-4">Starter Pack</span>
            <h3 class="text-2xl font-bold text-white mb-1">20 Credits</h3>
            <p class="text-zinc-500 text-xs mb-6">Test the waters with low initial commitment</p>
            <div class="text-4xl font-extrabold text-white mb-1">$99</div>
            <span class="text-xs text-zinc-400 font-medium">($4.95 / credit)</span>

            <div class="border-t border-zinc-800/80 my-6"></div>

            <ul class="space-y-3 text-sm text-zinc-300">
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#A78BFA"><path d="M20 6 9 17l-5-5"/></svg>
                <span>20 Months of service</span>
              </li>
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#A78BFA"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Panel access included</span>
              </li>
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#A78BFA"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Unlimited free 24h trials</span>
              </li>
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#A78BFA"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Credits never expire</span>
              </li>
            </ul>
          </div>
          <a href="https://wa.me/18042804332?text=Hello%2C%20I%20want%20to%20buy%20the%20Starter%20Reseller%20Pack%20(20%20credits%20%2499)" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-green mt-8 w-full py-3.5 rounded-full font-bold text-sm text-white text-center transition-all flex items-center justify-center gap-2.5" style="background-color:#25D366!important;color:#ffffff!important;box-shadow:0 6px 20px rgba(37,211,102,0.4)!important;">
            <img src="/assets/images/whatsapp.png" width="22" height="22" alt="WhatsApp" style="width:22px;height:22px;border-radius:50%;flex-shrink:0;">
            <span>Order via WhatsApp</span>
          </a>
        </div>

        <!-- Tier 2: Business (Most Popular - Highlighted) -->
        <div class="reveal-on-scroll relative bg-gradient-to-b from-purple-950/30 to-zinc-900/60 backdrop-blur-sm border border-purple-500/60 rounded-3xl p-8 flex flex-col justify-between shadow-2xl shadow-purple-500/15">
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md">
            Most Popular
          </div>
          <div>
            <span class="inline-flex px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40 mb-4 mt-2">Business Pack</span>
            <h3 class="text-2xl font-bold text-white mb-1">50 Credits</h3>
            <p class="text-zinc-400 text-xs mb-6">Best balance for active resellers</p>
            <div class="text-4xl font-extrabold text-white mb-1">$289</div>
            <span class="text-xs text-purple-400 font-medium">($5.78 / credit — High Profit)</span>

            <div class="border-t border-purple-500/30 my-6"></div>

            <ul class="space-y-3 text-sm text-zinc-200">
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#A78BFA"><path d="M20 6 9 17l-5-5"/></svg>
                <span>50 Months of service</span>
              </li>
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#A78BFA"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Branded panel with sub-resellers</span>
              </li>
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#A78BFA"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Unlimited free 24h trials</span>
              </li>
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#A78BFA"><path d="M20 6 9 17l-5-5"/></svg>
                <span>65–70% estimated net margin</span>
              </li>
            </ul>
          </div>
          <a href="https://wa.me/18042804332?text=Hello%2C%20I%20want%20to%20buy%20the%20Business%20Reseller%20Pack%20(50%20credits%20%24289)" target="_blank" rel="noopener noreferrer" class="mt-8 w-full py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-center transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-purple-600/40" style="color:#ffffff!important;">
            <img src="/assets/images/whatsapp.png" width="22" height="22" alt="WhatsApp" style="width:22px;height:22px;border-radius:50%;flex-shrink:0;">
            <span>Order via WhatsApp</span>
          </a>
        </div>

        <!-- Tier 3: Professional -->
        <div class="reveal-on-scroll bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 flex flex-col justify-between hover:border-zinc-700/80 transition-all duration-300">
          <div>
            <span class="inline-flex px-3 py-1 rounded-full text-xs font-bold bg-zinc-800 text-zinc-400 border border-zinc-700 mb-4">Pro Pack</span>
            <h3 class="text-2xl font-bold text-white mb-1">150 Credits</h3>
            <p class="text-zinc-500 text-xs mb-6">Volume tier for established agencies</p>
            <div class="text-4xl font-extrabold text-white mb-1">$649</div>
            <span class="text-xs text-zinc-400 font-medium">($4.33 / credit)</span>

            <div class="border-t border-zinc-800/80 my-6"></div>

            <ul class="space-y-3 text-sm text-zinc-300">
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#A78BFA"><path d="M20 6 9 17l-5-5"/></svg>
                <span>150 Months of service</span>
              </li>
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#A78BFA"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Priority stream routing</span>
              </li>
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#A78BFA"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Sub-reseller panel creation</span>
              </li>
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#A78BFA"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Credits never expire</span>
              </li>
            </ul>
          </div>
          <a href="https://wa.me/18042804332?text=Hello%2C%20I%20want%20to%20buy%20the%20Pro%20Reseller%20Pack%20(150%20credits%20%24649)" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-green mt-8 w-full py-3.5 rounded-full font-bold text-sm text-white text-center transition-all flex items-center justify-center gap-2.5" style="background-color:#25D366!important;color:#ffffff!important;box-shadow:0 6px 20px rgba(37,211,102,0.4)!important;">
            <img src="/assets/images/whatsapp.png" width="22" height="22" alt="WhatsApp" style="width:22px;height:22px;border-radius:50%;flex-shrink:0;">
            <span>Order via WhatsApp</span>
          </a>
        </div>

        <!-- Tier 4: Enterprise -->
        <div class="reveal-on-scroll bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 flex flex-col justify-between hover:border-zinc-700/80 transition-all duration-300">
          <div>
            <span class="inline-flex px-3 py-1 rounded-full text-xs font-bold bg-zinc-800 text-zinc-400 border border-zinc-700 mb-4">Enterprise Pack</span>
            <h3 class="text-2xl font-bold text-white mb-1">300 Credits</h3>
            <p class="text-zinc-500 text-xs mb-6">Wholesale rate for massive operations</p>
            <div class="text-4xl font-extrabold text-white mb-1">$1,199</div>
            <span class="text-xs text-zinc-400 font-medium">($3.99 / credit — Maximum ROI)</span>

            <div class="border-t border-zinc-800/80 my-6"></div>

            <ul class="space-y-3 text-sm text-zinc-300">
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#A78BFA"><path d="M20 6 9 17l-5-5"/></svg>
                <span>300 Months of service</span>
              </li>
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#A78BFA"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Dedicated account manager</span>
              </li>
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#A78BFA"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Custom DNS &amp; portal rebranding</span>
              </li>
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#A78BFA"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Fast WhatsApp wallet top-ups</span>
              </li>
            </ul>
          </div>
          <a href="https://wa.me/18042804332?text=Hello%2C%20I%20want%20to%20buy%20the%20Enterprise%20Reseller%20Pack%20(300%20credits%20%241199)" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-green mt-8 w-full py-3.5 rounded-full font-bold text-sm text-white text-center transition-all flex items-center justify-center gap-2.5" style="background-color:#25D366!important;color:#ffffff!important;box-shadow:0 6px 20px rgba(37,211,102,0.4)!important;">
            <img src="/assets/images/whatsapp.png" width="22" height="22" alt="WhatsApp" style="width:22px;height:22px;border-radius:50%;flex-shrink:0;">
            <span>Order via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>

    <!-- ═══════════════ PROFIT CALCULATOR (Modern HeroUI Card Container) ═══════════════ -->
    <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="max-w-4xl mx-auto bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
        <div class="text-center mb-8">
          <div class="flex flex-col items-center justify-center gap-2 mb-2">
            <div class="w-0.5 h-6 bg-emerald-500"></div>
            <span class="text-xs font-bold tracking-widest text-zinc-500 uppercase">Interactive Tool</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">IPTV Reseller Profit Calculator</h2>
          <p class="text-zinc-400 text-sm max-w-lg mx-auto mt-2">
            Simulate your monthly and annual income based on your client count and retail subscription prices.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <label class="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Active Clients</label>
            <input type="number" id="calc-clients" value="50" min="5" max="5000" class="calc-input" />
          </div>

          <div>
            <label class="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Retail Price Per Month ($)</label>
            <input type="number" id="calc-price" value="14" min="8" max="50" class="calc-input" />
          </div>

          <div>
            <label class="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Wholesale Credit Tier</label>
            <select id="calc-tier" class="calc-input">
              <option value="4.95">Starter ($4.95 / credit)</option>
              <option value="5.78" selected>Business ($5.78 / credit)</option>
              <option value="4.33">Professional ($4.33 / credit)</option>
              <option value="3.99">Enterprise ($3.99 / credit)</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Billing Duration</label>
            <select id="calc-duration" class="calc-input">
              <option value="1" selected>Monthly (1 month)</option>
              <option value="3">Quarterly (3 months)</option>
              <option value="6">Half-Year (6 months)</option>
              <option value="12">Annual (12 months)</option>
            </select>
          </div>
        </div>

        <!-- Results Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 mb-6 text-center">
          <div>
            <span class="block text-xs font-medium text-zinc-500 mb-1">Total Revenue</span>
            <span id="res-revenue" class="text-xl sm:text-2xl font-bold text-white">$700</span>
          </div>
          <div>
            <span class="block text-xs font-medium text-zinc-500 mb-1">Wholesale Cost</span>
            <span id="res-cost" class="text-xl sm:text-2xl font-bold text-zinc-400">$289</span>
          </div>
          <div>
            <span class="block text-xs font-medium text-zinc-500 mb-1">Estimated Profit</span>
            <span id="res-profit" class="text-xl sm:text-2xl font-bold text-emerald-400">$411</span>
          </div>
          <div>
            <span class="block text-xs font-medium text-zinc-500 mb-1">Net Margin</span>
            <span id="res-margin" class="text-xl sm:text-2xl font-bold text-purple-400">58.7%</span>
          </div>
        </div>

        <div class="text-center">
          <a href="https://wa.me/18042804332?text=Hello%2C%20I%20used%20the%20profit%20calculator%20and%20want%20to%20start%20my%20reseller%20account" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-green px-8 py-3.5 rounded-full font-bold text-sm text-white inline-flex items-center gap-2.5 transition-all shadow-lg" style="background-color:#25D366!important;color:#ffffff!important;box-shadow:0 8px 24px rgba(37,211,102,0.45)!important;">
            <img src="/assets/images/whatsapp.png" width="22" height="22" alt="WhatsApp" style="width:22px;height:22px;border-radius:50%;flex-shrink:0;">
            <span>Lock In Wholesale Rate on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ═══════════════ FAQ SECTION (Matches Pricing / Features) ═══════════════ -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div class="text-center mb-12">
        <div class="flex flex-col items-center justify-center gap-4 mb-4">
          <div class="w-0.5 h-6 bg-purple-500"></div>
          <span class="text-xs font-bold tracking-widest text-zinc-500 uppercase">Questions &amp; Answers</span>
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-white tracking-tight">Frequently Asked Questions</h2>
      </div>

      <div class="space-y-4">
        <details class="group bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-2xl p-6 transition-colors open:border-purple-500/40">
          <summary class="flex items-center justify-between cursor-pointer font-bold text-lg text-white list-none">
            <span>What is an IPTV Reseller Panel?</span>
            <span class="transition group-open:rotate-180 text-zinc-400">
              <svg fill="none" height="20" width="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline><img src="/assets/images/whatsapp.png" width="18" height="18" alt="WhatsApp" style="width:18px;height:18px;border-radius:50%;flex-shrink:0;">
            </span>
          </summary>
          <p class="text-zinc-400 text-sm leading-relaxed mt-4">
            An IPTV reseller panel is a web dashboard that allows you to manage subscriptions for your own customers. You purchase credits in bulk at wholesale rates, and use those credits to create, activate, and manage accounts at your own retail pricing.
          </p>
        </details>

        <details class="group bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-2xl p-6 transition-colors open:border-purple-500/40">
          <summary class="flex items-center justify-between cursor-pointer font-bold text-lg text-white list-none">
            <span>Do my credits expire?</span>
            <span class="transition group-open:rotate-180 text-zinc-400">
              <svg fill="none" height="20" width="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </span>
          </summary>
          <p class="text-zinc-400 text-sm leading-relaxed mt-4">
            No. Credits purchased through our reseller program never expire. They remain in your account balance until you activate an end-user line.
          </p>
        </details>

        <details class="group bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-2xl p-6 transition-colors open:border-purple-500/40">
          <summary class="flex items-center justify-between cursor-pointer font-bold text-lg text-white list-none">
            <span>Can I generate free trial lines for prospective clients?</span>
            <span class="transition group-open:rotate-180 text-zinc-400">
              <svg fill="none" height="20" width="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </span>
          </summary>
          <p class="text-zinc-400 text-sm leading-relaxed mt-4">
            Yes! All reseller accounts have access to generate free 24-hour test lines directly from the panel with zero credit deduction.
          </p>
        </details>

        <details class="group bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-2xl p-6 transition-colors open:border-purple-500/40">
          <summary class="flex items-center justify-between cursor-pointer font-bold text-lg text-white list-none">
            <span>How fast can I get set up?</span>
            <span class="transition group-open:rotate-180 text-zinc-400">
              <svg fill="none" height="20" width="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </span>
          </summary>
          <p class="text-zinc-400 text-sm leading-relaxed mt-4">
            After choosing your credit pack on WhatsApp, your panel credentials and loaded credits are issued within 10 to 15 minutes.
          </p>
        </details>
      </div>
    </section>

    <!-- ═══════════════ FINAL CALL TO ACTION (Matching Pricing & Features) ═══════════════ -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-950/40 via-zinc-900 to-indigo-950/40 border border-purple-500/30 p-8 sm:p-12 text-center">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">Ready to Start Your IPTV Business?</h2>
        <p class="text-zinc-400 text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Contact our team on WhatsApp today to get your white-label panel set up and activate your first lines.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <a href="https://wa.me/18042804332?text=Hello%2C%20I%20am%20ready%20to%20start%20my%20reseller%20business" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-green px-8 py-3.5 rounded-full font-bold text-sm text-white inline-flex items-center gap-2.5 transition-all shadow-lg" style="background-color:#25D366!important;color:#ffffff!important;box-shadow:0 8px 24px rgba(37,211,102,0.45)!important;">
            <img src="/assets/images/whatsapp.png" width="22" height="22" alt="WhatsApp" style="width:22px;height:22px;border-radius:50%;flex-shrink:0;">
            <span>Message on WhatsApp</span>
          </a>
          <a href="#pricing-tiers" class="px-8 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white inline-flex items-center gap-2 transition-all shadow-lg shadow-purple-600/30" style="color:#ffffff!important;">
            <span>View Packages</span>
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>
      </div>
    </section>

  </main>

  ${universalFooter}
  </div>

  <!-- Calculator Script -->
  <script>
    (function() {
      function calcUpdate() {
        var clients = parseInt(document.getElementById('calc-clients').value) || 0;
        var price = parseFloat(document.getElementById('calc-price').value) || 0;
        var costPerCr = parseFloat(document.getElementById('calc-tier').value) || 5.78;
        var months = parseInt(document.getElementById('calc-duration').value) || 1;

        var totalRevenue = clients * price * months;
        var totalCost = clients * costPerCr * months;
        var profit = totalRevenue - totalCost;
        var margin = totalRevenue > 0 ? ((profit / totalRevenue) * 100).toFixed(1) : '0.0';

        var fmt = function(n) { return '$' + Math.round(n).toLocaleString('en-US'); };

        document.getElementById('res-revenue').textContent = fmt(totalRevenue);
        document.getElementById('res-cost').textContent = fmt(totalCost);
        document.getElementById('res-profit').textContent = fmt(profit);
        document.getElementById('res-margin').textContent = margin + '%';
      }

      ['calc-clients', 'calc-price', 'calc-tier', 'calc-duration'].forEach(function(id) {
        var el = document.getElementById(id);
        if (el) {
          el.addEventListener('input', calcUpdate);
          el.addEventListener('change', calcUpdate);
        }
      });
      calcUpdate();
    })();
  </script>
  <script src="/assets/js/site-interactions.js?v=20261030-nav2" defer></script>
  <script src="/assets/js/support-chat.js" defer></script>
</body>
</html>`;

fs.writeFileSync(resellerHtmlPath, pageHtml, 'utf8');
console.log('Successfully modernized Iptv The smarters Pro/reseller/index.html to match features/pricing design!');
