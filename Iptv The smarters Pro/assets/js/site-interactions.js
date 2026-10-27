(() => {
  'use strict';
  const clean = value => (value || '').replace(/\s+/g, ' ').trim();
  const css = document.createElement('style');
  css.textContent = `
    #local-mobile-menu{position:fixed;inset:72px 16px auto;z-index:9999;background:#091226f2;border:1px solid #ffffff24;border-radius:18px;padding:18px;box-shadow:0 24px 70px #0009;backdrop-filter:blur(14px)}
    #local-mobile-menu[hidden]{display:none} #local-mobile-menu a{display:block;color:#fff;text-decoration:none;font-weight:800;padding:13px 12px;border-bottom:1px solid #ffffff18} #local-mobile-menu a:last-child{border:0}
    #local-toast{position:fixed;right:20px;bottom:20px;z-index:10001;background:#071326;color:white;border:1px solid #ffffff2a;border-radius:14px;padding:14px 18px;box-shadow:0 16px 50px #0008;max-width:360px}
    .local-faq-open{grid-template-rows:1fr!important;opacity:1!important}.local-faq-plus{transform:rotate(45deg);transition:transform .2s ease}
    .reveal-on-scroll,.hero-fade-up{opacity:1!important;transform:none!important;visibility:visible!important}
  `;
  document.head.appendChild(css);

  function toast(message) {
    document.getElementById('local-toast')?.remove();
    const el = document.createElement('div'); el.id = 'local-toast'; el.textContent = message; document.body.appendChild(el);
    setTimeout(() => el.remove(), 3500);
  }

  function mobileMenu() {
    if (window.__mobileMenuInitialized) return;
    window.__mobileMenuInitialized = true;

    function getElements() {
      const menuToggle = document.getElementById('menuToggle') || document.querySelector('.menu-toggle');
      const mobileNav = document.getElementById('mobileNav') || document.querySelector('.mobile-nav');
      const navOverlay = document.getElementById('navOverlay') || document.querySelector('.nav-overlay');
      return { menuToggle, mobileNav, navOverlay };
    }

    function toggleMenu(forceOpen) {
      const { menuToggle, mobileNav, navOverlay } = getElements();
      if (!mobileNav) return;

      const isCurrentlyOpen = document.body.classList.contains('menu-open') || mobileNav.classList.contains('is-open');
      const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : !isCurrentlyOpen;

      document.body.classList.toggle('menu-open', shouldOpen);
      document.body.classList.toggle('is-menu-open', shouldOpen);

      mobileNav.classList.toggle('is-open', shouldOpen);
      mobileNav.classList.toggle('active', shouldOpen);
      mobileNav.setAttribute('aria-hidden', String(!shouldOpen));

      if (menuToggle) {
        menuToggle.classList.toggle('is-open', shouldOpen);
        menuToggle.setAttribute('aria-expanded', String(shouldOpen));
      }

      if (navOverlay) {
        navOverlay.classList.toggle('is-active', shouldOpen);
        navOverlay.classList.toggle('is-open', shouldOpen);
      }

      document.body.style.overflow = shouldOpen ? 'hidden' : '';
    }

    window.__toggleMobileMenu = toggleMenu;

    document.addEventListener('click', (e) => {
      const toggle = e.target.closest('#menuToggle, .menu-toggle');
      if (toggle) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
        return;
      }

      if (e.target.closest('#navOverlay, .nav-overlay')) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu(false);
        return;
      }

      const link = e.target.closest('#mobileNav a, .mobile-nav a');
      if (link) {
        toggleMenu(false);
        return;
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        toggleMenu(false);
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        toggleMenu(false);
      }
    });
  }

  const faqData = {
    'General Questions': [['What is IPTV Smarters Pro?','IPTV Smarters Pro is a premium streaming service offering 19,000+ live TV channels, movies, sports, and international content in stunning 4K quality. Stream on any device with instant activation and 24/7 support.'],['Can I use IPTV Smarters Pro in my area?',"Yes! IPTV Smarters Pro works worldwide. Whether you're in the US, Canada, UK, Europe, Middle East, Asia, Africa, or anywhere else, you can stream instantly on any device — no geo-restrictions."],['What devices are supported?','IPTV Smarters Pro works on all devices including FireStick, Android TV, Smart TVs, Apple TV, iPhone/iPad, MAG boxes, Formuler boxes, Chromecast, Shield TV, and more.'],['How many devices can I use simultaneously?','Our plans support 1 to 5 devices simultaneously. You can choose the number of devices when ordering.'],['Do you offer a free trial?','We offer a 24-hour money-back guarantee. Try our service risk-free, and if you are not satisfied within the first 24 hours, contact support for a full refund.']],
    'Setup & Installation': [['How do I receive my subscription details?','After ordering, your login and setup details are sent with the instructions for your chosen device.'],['How do I install IPTV Smarters Pro?','Open the Setup Guide, choose your device, and follow its step-by-step instructions.'],['Which login formats are supported?','The service supports Xtream Codes, M3U playlists, and MAG portal formats.'],['Can support help me set it up?','Yes. Contact support if you need personal help with installation or configuration.']],
    'Streaming & Quality': [['What internet speed do I need?','For HD streaming use at least 15 Mbps. For 4K Ultra HD use 25–50 Mbps; Ethernet is recommended.'],['Why is my stream buffering?','Buffering is commonly caused by slow internet, Wi-Fi interference, or congestion. Try Ethernet, close background apps, restart the router, or lower video quality.'],['Do you offer 4K streaming?','Yes, supported channels are available in 4K on a compatible device and suitable internet connection.'],['Does the service include EPG (TV Guide)?','Yes. EPG is included and shows current and upcoming programs.'],['Can I watch sports live?','Yes. The service includes extensive live sports coverage, including major leagues and events.']],
    'Pricing & Payment': [['What payment methods do you accept?','Major payment methods are accepted through the secure payment gateway.'],['Are there any hidden fees?','No. The displayed plan price includes the listed service features.'],['Can I change my subscription plan?','Yes. Contact support to add devices or extend your subscription.'],['Do subscriptions auto-renew?','No. Subscriptions are renewed manually.'],["What's your refund policy?",'A 24-hour money-back guarantee applies; see the Refund Policy page for details.']],
    'Troubleshooting': [['What should I do if channels do not load?','Restart the app and router, verify your connection and login details, then contact support if the issue continues.'],['Why does playback buffer?','Try Ethernet, close background downloads, restart the router, and test a lower stream quality.'],['My login does not work. What should I check?','Check for typing errors, confirm the subscription is active, and contact support without sharing your password publicly.'],['How do I report a channel problem?','Tell support the channel name, device, player, time of the issue, and any error message.']],
    'Support & Contact': [['How can I contact customer support?','Customer support is available through the secure website contact options.'],['What information should I provide?','Provide your username, device and player versions, an error screenshot, and what you already tried. Never send your password.'],['How quickly will my issue be resolved?','Common setup questions are usually answered quickly; complex technical issues may take longer.'],['Do you provide setup assistance?','Yes. Setup guides are available for all major devices, and support can guide you step by step.']]
  };

  function wireFaqCard(card) {
    const button = card.querySelector('button'); const answer = button?.nextElementSibling; if (!button || !answer) return;
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open)); answer.classList.toggle('local-faq-open', open);
      const icon = button.querySelector('svg')?.parentElement; if (icon) icon.classList.toggle('local-faq-plus', open);
    });
  }

  function faq() {
    const tabs = [...document.querySelectorAll('.faq [role="tab"], [data-faq-tab]')];
    const questionButtons = [...document.querySelectorAll('.faq button, .faq-item button')].filter(b => b.querySelector('h3'));
    questionButtons.forEach(b => wireFaqCard(b.parentElement));
    if (!tabs.length || !questionButtons.length) return;
    const list = questionButtons[0].parentElement.parentElement;
    const template = questionButtons[0].parentElement.cloneNode(true);
    const render = name => {
      const rows = faqData[name] || faqData['General Questions']; list.innerHTML = '';
      rows.forEach(([question, answer]) => { const card = template.cloneNode(true); card.querySelector('h3').textContent = question; const answerBox = card.querySelector('button')?.nextElementSibling; const answerText = answerBox?.querySelector('.overflow-hidden > div') || answerBox?.querySelector('.overflow-hidden') || answerBox; if (answerText) answerText.textContent = answer; if (answerBox) { answerBox.classList.remove('local-faq-open'); answerBox.classList.add('opacity-0'); } wireFaqCard(card); list.appendChild(card); });
    };
    tabs.forEach(tab => tab.addEventListener('click', () => { const name = clean(tab.textContent); tabs.forEach(t => { t.setAttribute('aria-selected', String(t === tab)); t.classList.toggle('bg-primary', t === tab); t.classList.toggle('text-white', t === tab); }); render(name); }));
  }

  const PLAN_PRICING = {
    1: {
      '1': { price: '14.95', rate: '14.95', discount: '14%' },
      '3': { price: '29.95', rate: '9.98', discount: '33%' },
      '6': { price: '44.95', rate: '7.49', discount: '50%' },
      '12': { price: '59.95', rate: '5.00', discount: '67%' },
      '24': { price: '99.95', rate: '4.16', discount: 'Diamond' }
    },
    2: {
      '1': { price: '19.95', rate: '19.95', discount: '14%' },
      '3': { price: '39.95', rate: '13.32', discount: '33%' },
      '6': { price: '69.95', rate: '11.66', discount: '50%' },
      '12': { price: '119.95', rate: '10.00', discount: '67%' },
      '24': { price: '199.95', rate: '8.33', discount: 'Diamond' }
    },
    3: {
      '1': { price: '24.95', rate: '24.95', discount: '14%' },
      '3': { price: '49.95', rate: '16.65', discount: '33%' },
      '6': { price: '89.95', rate: '14.99', discount: '50%' },
      '12': { price: '149.95', rate: '12.50', discount: '67%' },
      '24': { price: '299.95', rate: '12.50', discount: 'Diamond' }
    }
  };

  function updatePricing(devices) {
    devices = Number(devices) || 1;
    if (devices < 1) devices = 1;
    if (devices > 3) devices = 3;

    window.__selectedDevices = devices;
    try { sessionStorage.setItem('iptvDevices', String(devices)); } catch(e) {}

    // 1. Update toggle buttons state
    const tabs = document.querySelectorAll('.device-toggle button, .device-tab, [data-devices]');
    tabs.forEach(btn => {
      const d = Number(btn.dataset.devices || (clean(btn.textContent).match(/([1-3])/)||[])[1] || 1);
      const active = (d === devices);
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', String(active));
      btn.setAttribute('aria-pressed', String(active));
    });

    // 2. Update .plan-card
    document.querySelectorAll('.plan-card').forEach(card => {
      const months = card.dataset.months || (card.innerText.match(/\b(24|12|6|3|1)\s*(?:Months?|mes(?:es)?|Monat(?:e)?|mois|maanden|mesi|mês(?:es)?|شهر|Years?|año|Jahr|an|jaar|anno|ano|عام)/i) || [])[1] || '1';
      const pData = PLAN_PRICING[devices]?.[months] || { price: card.dataset['price' + devices] || '14.95' };
      const price = card.dataset['price' + devices] || pData.price;

      const priceAmount = card.querySelector('.plan-price-amount');
      if (priceAmount) {
        priceAmount.textContent = '$' + price;
      }

      const badge = card.querySelector('.plan-device-lock-badge');
      if (badge) {
        badge.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg> ${devices} Device${devices === 1 ? '' : 's'}`;
      }

      const cta = card.querySelector('.buy-now-btn, a[href*="wa.me"]');
      if (cta) {
        const href = cta.getAttribute('href') || '';
        if (href.includes('wa.me')) {
          const updated = href
            .replace(/Total%20Price%3A%20%24\d+(?:\.\d{2})?/gi, `Total%20Price%3A%20%24${price}`)
            .replace(/Total\+Price%3A\+\%24\d+(?:\.\d{2})?/gi, `Total+Price%3A+%24${price}`);
          cta.setAttribute('href', updated);
        }
        cta.dataset.devices = String(devices);
        cta.dataset.price = price;
      }
    });

    // 3. Update .diamond-panel
    document.querySelectorAll('.diamond-panel').forEach(diamond => {
      const pData = PLAN_PRICING[devices]?.['24'] || { price: devices === 1 ? '99.95' : (devices === 2 ? '199.95' : '299.95'), rate: devices === 1 ? '4.16' : (devices === 2 ? '8.33' : '12.50') };
      const dPrice = diamond.dataset['price' + devices] || pData.price;
      const dRate = pData.rate;

      const priceEl = diamond.querySelector('.diamond-price');
      if (priceEl) priceEl.textContent = '$' + dPrice;

      const rateStrong = diamond.querySelector('.diamond-rate strong');
      if (rateStrong) rateStrong.textContent = '$' + dRate + '/mo';

      const cta = diamond.querySelector('.buy-now-btn, a[href*="wa.me"]');
      if (cta) {
        const href = cta.getAttribute('href') || '';
        if (href.includes('wa.me')) {
          const updated = href
            .replace(/Total%20Price%3A%20%24\d+(?:\.\d{2})?/gi, `Total%20Price%3A%20%24${dPrice}`)
            .replace(/Total\+Price%3A\+\%24\d+(?:\.\d{2})?/gi, `Total+Price%3A+%24${dPrice}`);
          cta.setAttribute('href', updated);
        }
        cta.dataset.devices = String(devices);
        cta.dataset.price = dPrice;
      }
    });

    // 4. Update .kw-plan (Product pages)
    document.querySelectorAll('.kw-plan').forEach(plan => {
      const months = plan.dataset.months || (plan.innerText.match(/\b(24|12|6|3|1)\s*Month/i) || [])[1] || '1';
      const pData = PLAN_PRICING[devices]?.[months];
      if (pData) {
        const strong = plan.querySelector('strong');
        if (strong) strong.textContent = '$' + pData.price;

        const cta = plan.querySelector('.buy-now-btn, a[href*="wa.me"]');
        if (cta) {
          const href = cta.getAttribute('href') || '';
          if (href.includes('wa.me')) {
            const updated = href
              .replace(/Total%20Price%3A%20%24\d+(?:\.\d{2})?/gi, `Total%20Price%3A%20%24${pData.price}`)
              .replace(/Total\+Price%3A\+\%24\d+(?:\.\d{2})?/gi, `Total+Price%3A+%24${pData.price}`);
            cta.setAttribute('href', updated);
          }
          cta.dataset.devices = String(devices);
          cta.dataset.price = pData.price;
        }
      }
    });

    window.dispatchEvent(new CustomEvent('iptv:devices-changed', { detail: { devices } }));
  }
  window.__updatePricing = updatePricing;

  function pricing() {
    const tabs = document.querySelectorAll('.device-toggle button, .device-tab, [data-devices]');
    if (!tabs.length) return;

    tabs.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const d = Number(button.dataset.devices || (clean(button.textContent).match(/([1-3])/)||[])[1] || 1);
        updatePricing(d);
      });
    });

    let initialDevices = 1;
    try {
      const stored = sessionStorage.getItem('iptvDevices');
      if (stored && ['1','2','3'].includes(stored)) initialDevices = Number(stored);
    } catch(e) {}
    updatePricing(initialDevices);
  }

  function normalizePricingLayout() {
    document.querySelectorAll('.pricing-grid').forEach(grid => {
      const host = grid.nextElementSibling;
      const diamond = host?.querySelector('.diamond-border');
      if (!diamond || host.classList.contains('pricing-diamond-slot')) return;
      host.classList.add('pricing-diamond-slot');
      grid.appendChild(host);
    });
  }
  const CHANNEL_CATEGORIES = {
    all: {
      title: 'All Premium Channels',
      desc: 'Browse our complete selection of 19,000+ live premium global channels in native 4K and FHD.',
      channels: [
        { name: 'Premier League 4K', quality: '4K', cat: 'Sports' },
        { name: 'ESPN Multi-Feed', quality: 'FHD', cat: 'Sports' },
        { name: 'Sky Sports F1', quality: '4K', cat: 'Sports' },
        { name: 'TNT Sports 4K', quality: '4K', cat: 'Sports' },
        { name: 'UFC Fight Pass', quality: 'FHD', cat: 'Sports' },
        { name: 'HBO Max Cinema 4K', quality: '4K', cat: 'Movies' },
        { name: 'Sky Cinema Premiere 4K', quality: '4K', cat: 'Movies' },
        { name: 'Starz Cinema HD', quality: 'FHD', cat: 'Movies' },
        { name: 'Canal+ Cinéma 4K', quality: '4K', cat: 'Movies' },
        { name: 'Paramount Network 4K', quality: '4K', cat: 'Movies' },
        { name: 'USA Network 4K', quality: '4K', cat: 'Entertainment' },
        { name: 'BBC One HD', quality: 'FHD', cat: 'Entertainment' },
        { name: 'Discovery Channel 4K', quality: '4K', cat: 'Entertainment' },
        { name: 'National Geographic HD', quality: 'FHD', cat: 'Entertainment' },
        { name: 'History Channel 4K', quality: '4K', cat: 'Entertainment' },
        { name: 'CNN International 4K', quality: '4K', cat: 'News' },
        { name: 'BBC News HD', quality: 'FHD', cat: 'News' },
        { name: 'Fox News Channel HD', quality: 'FHD', cat: 'News' },
        { name: 'Sky News UK HD', quality: 'FHD', cat: 'News' },
        { name: 'Nat Geo Wild 4K', quality: '4K', cat: 'News' },
        { name: 'Disney Channel 4K', quality: '4K', cat: 'Kids' },
        { name: 'Cartoon Network HD', quality: 'FHD', cat: 'Kids' },
        { name: 'Nickelodeon HD', quality: 'FHD', cat: 'Kids' },
        { name: 'Disney Junior', quality: 'HD', cat: 'Kids' },
        { name: 'TF1 4K France', quality: '4K', cat: 'International' },
        { name: 'ZDF 4K Germany', quality: '4K', cat: 'International' },
        { name: 'Rai 1 HD Italy', quality: 'FHD', cat: 'International' },
        { name: 'Antena 3 4K Spain', quality: '4K', cat: 'International' },
        { name: 'TV Globo 4K Brazil', quality: '4K', cat: 'International' },
        { name: 'MBC 1 HD Arabic', quality: 'FHD', cat: 'International' },
        { name: 'TRT 1 4K Turkey', quality: '4K', cat: 'International' },
        { name: 'Star Plus HD India', quality: 'FHD', cat: 'International' }
      ]
    },
    sports: {
      title: 'Sports Channels',
      desc: 'Every major sporting event, PPV, and network in native 4K and FHD.',
      channels: [
        { name: 'Premier League 4K', quality: '4K' },
        { name: 'ESPN Multi-Feed', quality: 'FHD' },
        { name: 'Sky Sports F1', quality: '4K' },
        { name: 'NBA League Pass', quality: 'FHD' },
        { name: 'NFL Network 4K', quality: '4K' },
        { name: 'Bein Sports Global', quality: 'FHD' },
        { name: 'DAZN Simulcast', quality: 'FHD' },
        { name: 'Fox Sports 1 4K', quality: '4K' },
        { name: 'Eurosport 4K', quality: '4K' },
        { name: 'Sky Sports Main Event', quality: '4K' },
        { name: 'TNT Sports 4K', quality: '4K' },
        { name: 'UFC Fight Pass', quality: 'FHD' },
        { name: 'WWE Network', quality: 'FHD' },
        { name: 'Golf Channel 4K', quality: '4K' },
        { name: 'Cricket Live 4K', quality: '4K' },
        { name: 'MLB Extra Innings', quality: 'FHD' },
        { name: 'SuperSport Grandstand 4K', quality: '4K' },
        { name: 'CBS Sports Network', quality: 'FHD' },
        { name: 'TSN 1-5 Canada', quality: 'FHD' },
        { name: 'Optus Sport Australia', quality: '4K' }
      ]
    },
    movies: {
      title: 'Movies & Cinema Channels',
      desc: 'Blockbusters, 24/7 movie channels, premiere releases, and cinema feeds in ultra-high resolution.',
      channels: [
        { name: 'HBO Max Cinema 4K', quality: '4K' },
        { name: 'Sky Cinema Premiere 4K', quality: '4K' },
        { name: 'Starz Cinema HD', quality: 'FHD' },
        { name: 'Cinemax HD', quality: 'FHD' },
        { name: 'Showtime East & West', quality: 'FHD' },
        { name: 'Paramount Network 4K', quality: '4K' },
        { name: 'MGM+ Movies', quality: 'FHD' },
        { name: 'Canal+ Cinéma 4K', quality: '4K' },
        { name: 'Film4 HD UK', quality: 'FHD' },
        { name: 'Movistar Estrenos 4K', quality: '4K' },
        { name: 'Sony Cine HD', quality: 'FHD' },
        { name: 'Sky Cinema Action HD', quality: 'FHD' },
        { name: 'AMC Networks HD', quality: 'FHD' },
        { name: 'Cinecanal HD', quality: 'FHD' },
        { name: 'TCM Turner Classic Movies', quality: 'HD' },
        { name: 'Hallmark Channel HD', quality: 'HD' },
        { name: 'Canal+ Grand Écran', quality: '4K' },
        { name: 'Sky Cinema Family HD', quality: 'FHD' },
        { name: 'Cinema One HD', quality: 'HD' },
        { name: 'CineStar Premiere 4K', quality: '4K' }
      ]
    },
    entertainment: {
      title: 'Entertainment Channels',
      desc: 'Top drama series, primetime television, reality TV, and global lifestyle networks.',
      channels: [
        { name: 'Sky Max HD', quality: 'FHD' },
        { name: 'USA Network 4K', quality: '4K' },
        { name: 'BBC One HD', quality: 'FHD' },
        { name: 'BBC Two HD', quality: 'FHD' },
        { name: 'ITV1 UK 4K', quality: '4K' },
        { name: 'Channel 4 HD', quality: 'FHD' },
        { name: 'FX HD', quality: 'FHD' },
        { name: 'Comedy Central HD', quality: 'FHD' },
        { name: 'Bravo TV HD', quality: 'FHD' },
        { name: 'TBS HD', quality: 'FHD' },
        { name: 'TNT Drama 4K', quality: '4K' },
        { name: 'Discovery Channel 4K', quality: '4K' },
        { name: 'National Geographic HD', quality: 'FHD' },
        { name: 'History Channel 4K', quality: '4K' },
        { name: 'TLC HD', quality: 'HD' },
        { name: 'E! Entertainment HD', quality: 'HD' },
        { name: 'SYFY HD', quality: 'HD' },
        { name: 'A&E Network HD', quality: 'HD' },
        { name: 'HGTV Home & Garden', quality: 'FHD' },
        { name: 'Food Network 4K', quality: '4K' }
      ]
    },
    news: {
      title: 'News & Documentaries Channels',
      desc: 'Round-the-clock live international news, financial markets, investigative journalism, and nature documentaries.',
      channels: [
        { name: 'CNN International 4K', quality: '4K' },
        { name: 'BBC News HD', quality: 'FHD' },
        { name: 'Fox News Channel HD', quality: 'FHD' },
        { name: 'MSNBC Live HD', quality: 'FHD' },
        { name: 'Sky News UK HD', quality: 'FHD' },
        { name: 'CNBC World HD', quality: 'FHD' },
        { name: 'Bloomberg TV HD', quality: 'FHD' },
        { name: 'Al Jazeera English HD', quality: 'FHD' },
        { name: 'EuroNews HD', quality: 'HD' },
        { name: 'BBC World News', quality: 'FHD' },
        { name: 'Nat Geo Wild 4K', quality: '4K' },
        { name: 'Animal Planet HD', quality: 'FHD' },
        { name: 'Discovery Science HD', quality: 'FHD' },
        { name: 'Smithsonian Channel HD', quality: 'FHD' },
        { name: 'RT Documentary HD', quality: 'HD' },
        { name: 'DW English HD', quality: 'HD' },
        { name: 'France 24 English', quality: 'FHD' },
        { name: 'NHK World-Japan 4K', quality: '4K' },
        { name: 'CGTN HD', quality: 'HD' },
        { name: 'Crime + Investigation', quality: 'HD' }
      ]
    },
    kids: {
      title: 'Kids & Family Channels',
      desc: 'Safe, family-friendly animation, cartoons, and educational channels for kids of all ages.',
      channels: [
        { name: 'Disney Channel 4K', quality: '4K' },
        { name: 'Cartoon Network HD', quality: 'FHD' },
        { name: 'Nickelodeon HD', quality: 'FHD' },
        { name: 'Disney Junior', quality: 'HD' },
        { name: 'Boomerang HD', quality: 'HD' },
        { name: 'Nick Jr. HD', quality: 'HD' },
        { name: 'Disney XD HD', quality: 'FHD' },
        { name: 'CBBC UK HD', quality: 'FHD' },
        { name: 'CBeebies HD', quality: 'HD' },
        { name: 'PBS Kids HD', quality: 'HD' },
        { name: 'Cartoonito HD', quality: 'HD' },
        { name: 'BabyTV', quality: 'HD' },
        { name: 'Discovery Kids HD', quality: 'FHD' },
        { name: 'DreamWorks Channel HD', quality: 'FHD' },
        { name: 'Teletoon HD', quality: 'HD' },
        { name: 'Universal Kids HD', quality: 'HD' },
        { name: 'Tiny Pop UK', quality: 'HD' },
        { name: 'POP Max', quality: 'HD' },
        { name: 'Nicktoons HD', quality: 'FHD' },
        { name: 'Canal J HD', quality: 'HD' }
      ]
    },
    international: {
      title: 'International Channels',
      desc: 'National and regional broadcast networks from the US, UK, Europe, Latin America, Middle East, and Asia.',
      channels: [
        { name: 'TF1 4K France', quality: '4K' },
        { name: 'M6 HD France', quality: 'FHD' },
        { name: 'ZDF 4K Germany', quality: '4K' },
        { name: 'Das Erste HD Germany', quality: 'FHD' },
        { name: 'Rai 1 HD Italy', quality: 'FHD' },
        { name: 'Antena 3 4K Spain', quality: '4K' },
        { name: 'Telecinco HD Spain', quality: 'FHD' },
        { name: 'RTP 1 HD Portugal', quality: 'FHD' },
        { name: 'TV Globo 4K Brazil', quality: '4K' },
        { name: 'MBC 1 HD Arabic', quality: 'FHD' },
        { name: 'Dubai TV HD', quality: 'HD' },
        { name: 'Star Plus HD India', quality: 'FHD' },
        { name: 'Zee TV HD India', quality: 'FHD' },
        { name: 'Geo News HD Pakistan', quality: 'HD' },
        { name: 'TRT 1 4K Turkey', quality: '4K' },
        { name: 'CCTV 4 China', quality: 'HD' },
        { name: 'NPO 1 4K Netherlands', quality: '4K' },
        { name: 'TVP 1 HD Poland', quality: 'FHD' },
        { name: 'Al Arabiya 4K', quality: '4K' },
        { name: 'Univision 4K USA', quality: '4K' }
      ]
    }
  };

  function resolveChannelKey(btn) {
    const raw = (btn.dataset.channelTab || btn.dataset.category || clean(btn.textContent)).toLowerCase();
    if (raw.includes('sport')) return 'sports';
    if (raw.includes('movi') || raw.includes('cinema')) return 'movies';
    if (raw.includes('entertain')) return 'entertainment';
    if (raw.includes('news') || raw.includes('doc')) return 'news';
    if (raw.includes('kid') || raw.includes('fam')) return 'kids';
    if (raw.includes('inter') || raw.includes('world')) return 'international';
    return 'all';
  }

  function renderChannelCardHtml(ch) {
    const is4K = ch.quality === '4K';
    const isFHD = ch.quality === 'FHD';
    const badgeColor = is4K
      ? 'text-cyan-400 border-cyan-500/30 bg-cyan-950/40'
      : (isFHD ? 'text-purple-300 border-purple-500/30 bg-purple-950/40' : 'text-zinc-400 border-zinc-700/60 bg-zinc-900/60');
    return `
      <div class="channel-card bg-[#0f172a] border border-[#334155]/40 rounded-lg p-3.5 flex items-center justify-between hover:border-[#7B3FE4] hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-200 group">
        <div class="flex items-center gap-2.5 min-w-0">
          <span class="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_6px_rgba(52,211,153,0.8)]" title="Active live stream"></span>
          <span class="text-sm font-semibold text-white truncate group-hover:text-purple-300 transition-colors">${ch.name}</span>
        </div>
        <div class="flex items-center gap-1.5 shrink-0 ml-2">
          ${ch.cat ? `<span class="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-400 border border-zinc-700/40">${ch.cat}</span>` : ''}
          <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${badgeColor}">${ch.quality}</span>
        </div>
      </div>
    `;
  }

  function channels() {
    const tablist = document.querySelector('[role="tablist"][aria-label*="Channel"], #channel-categories-tablist');
    if (!tablist) return;

    const tabs = [...tablist.querySelectorAll('button')];
    if (!tabs.length) return;

    const titleEl = document.getElementById('channel-category-title') || document.querySelector('.channel-category-title') || tablist.parentElement?.querySelector('h3');
    const descEl = document.getElementById('channel-category-desc') || document.querySelector('.channel-category-desc') || tablist.parentElement?.querySelector('p');
    const grid = document.getElementById('channel-grid') || document.querySelector('.channel-grid') || tablist.parentElement?.querySelector('.grid');
    const searchInput = document.getElementById('channel-search-input');
    const clearBtn = document.getElementById('channel-search-clear');
    const countEl = document.getElementById('channel-count-badge');

    if (!grid) return;

    function renderList() {
      const activeBtn = tablist.querySelector('button[aria-selected="true"]') || tabs[0];
      const catKey = resolveChannelKey(activeBtn);
      const catData = CHANNEL_CATEGORIES[catKey] || CHANNEL_CATEGORIES.sports;

      const q = (searchInput?.value || '').trim().toLowerCase();
      let list = catData.channels;

      if (q) {
        if (clearBtn) clearBtn.classList.remove('hidden');
        // Search in active category or across all if searching
        const pool = catKey === 'all' ? catData.channels : CHANNEL_CATEGORIES.all.channels.concat(catData.channels);
        const seen = new Set();
        list = pool.filter(ch => {
          if (seen.has(ch.name)) return false;
          seen.add(ch.name);
          return ch.name.toLowerCase().includes(q) ||
            (ch.quality && ch.quality.toLowerCase().includes(q)) ||
            (ch.cat && ch.cat.toLowerCase().includes(q));
        });
      } else {
        if (clearBtn) clearBtn.classList.add('hidden');
      }

      if (countEl) {
        countEl.textContent = `${list.length} channel${list.length === 1 ? '' : 's'}`;
      }

      if (!list.length) {
        grid.innerHTML = `
          <div class="col-span-full text-center py-10 px-4 bg-zinc-900/30 rounded-xl border border-zinc-800/60">
            <p class="text-zinc-400 text-sm">No channels found matching "<span class="text-white font-medium">${q}</span>"</p>
            <button type="button" class="mt-3 px-3.5 py-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors" id="reset-search-btn">Reset search</button>
          </div>
        `;
        document.getElementById('reset-search-btn')?.addEventListener('click', () => {
          if (searchInput) searchInput.value = '';
          renderList();
        });
        return;
      }

      grid.innerHTML = list.map(renderChannelCardHtml).join('');
    }

    function selectTab(btn) {
      tabs.forEach(t => {
        const isCurrent = (t === btn);
        t.setAttribute('aria-selected', String(isCurrent));
        if (isCurrent) {
          t.className = 'channel-tab-btn px-4 py-2 rounded-lg text-sm font-semibold transition-all bg-[#6D28D9] text-white shadow-md shadow-purple-900/30 ring-1 ring-purple-400/40 is-active';
        } else {
          t.className = 'channel-tab-btn px-4 py-2 rounded-lg text-sm font-semibold transition-all bg-[#1e293b] text-[#94a3b8] hover:bg-[#334155] hover:text-white';
        }
      });

      const catKey = resolveChannelKey(btn);
      const catData = CHANNEL_CATEGORIES[catKey] || CHANNEL_CATEGORIES.sports;
      if (titleEl) titleEl.textContent = catData.title;
      if (descEl) descEl.textContent = catData.desc;

      renderList();
    }

    tabs.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        selectTab(button);
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        renderList();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        renderList();
        searchInput?.focus();
      });
    }

    // Initial render
    const initialActive = tablist.querySelector('button[aria-selected="true"]') || tabs[1] || tabs[0];
    if (initialActive) selectTab(initialActive);
  }

  function actions() {
    [...document.querySelectorAll('button')].forEach(button => {
      const label = clean(button.textContent);
      if (/^See what makes us #1$/i.test(label)) button.addEventListener('click', () => (document.getElementById('pricing') || [...document.querySelectorAll('section')].find(s => /Choose Your Perfect Plan/i.test(s.innerText)))?.scrollIntoView({ behavior:'smooth' }));
      if (/^(Free Trial|Start 1-Day Free Trial)$/i.test(label)) button.addEventListener('click', () => { history.replaceState(null, '', location.pathname + '?trial=true'); toast('Free-trial request opened. Use Contact to send the request from this offline copy.'); });
      if (/Open Live Chat/i.test(label)) button.addEventListener('click', () => { location.href = '/contact/'; });
      if (/START STREAMING|GET BEST VALUE/i.test(label)) button.addEventListener('click', () => toast(`Selected ${button.dataset.duration || 'plan'} for ${button.dataset.devices || '1'} device(s). This offline copy does not process payments.`));
    });
  }

  /* =========================================================
     Site-Wide Multi-Language & Instant DOM Translation Engine
     Supported Languages:
       - English (en) [Default]
       - Français (fr)
       - Español (es)
       - 한국어 (ko)
     ========================================================= */

  const SUPPORTED_LANGS = {
    en: { code: 'en', name: 'English', flag: '🇬🇧', path: '/' },
    fr: { code: 'fr', name: 'Français', flag: '🇫🇷', path: '/fr/' },
    es: { code: 'es', name: 'Español', flag: '🇪🇸', path: '/es/' },
    de: { code: 'de', name: 'Deutsch', flag: '🇩🇪', path: '/de/' },
    it: { code: 'it', name: 'Italiano', flag: '🇮🇹', path: '/it/' },
    nl: { code: 'nl', name: 'Nederlands', flag: '🇳🇱', path: '/nl/' },
    pl: { code: 'pl', name: 'Polski', flag: '🇵🇱', path: '/pl/' },
    pt: { code: 'pt', name: 'Português', flag: '🇵🇹', path: '/pt/' },
    'pt-br': { code: 'pt-br', name: 'Português (Brasil)', flag: '🇧🇷', path: '/pt-br/' },
    ko: { code: 'ko', name: '한국어', flag: '🇰🇷', path: '/ko/' },
    ar: { code: 'ar', name: 'العربية', flag: '🇸🇦', path: '/ar/' }
  };

  const TRANSLATIONS = {
  "fr": {
    "Home": "Accueil",
    "IPTV Services": "Services IPTV",
    "Features": "Fonctionnalités",
    "Channels": "Chaînes",
    "Pricing": "Tarifs",
    "Guides": "Guides",
    "Contact": "Contact",
    "Products": "Produits",
    "Free Trial": "Essai Gratuit",
    "Get Started": "Commencer",
    "Buy Now": "Acheter Maintenant",
    "Select Plan": "Choisir le forfait",
    "Explore Plans": "Découvrir les forfaits",
    "Start 1-Day Free Trial": "Démarrer l'essai 1 jour",
    "Message us on WhatsApp": "Écrivez-nous sur WhatsApp",
    "Message us on Telegram": "Écrivez-nous sur WhatsApp",
    "Open menu": "Ouvrir le menu",
    "Close menu": "Fermer le menu",
    "Change language": "Changer de langue",
    "Television, without limits.": "La télévision, sans limites.",
    "Live Now · Streaming Top Channels Worldwide": "En direct · Diffusion des meilleures chaînes mondiales",
    "View Plans & Pricing": "Voir les forfaits & tarifs",
    "Instant account activation": "Activation immédiate du compte",
    "expert customer support": "support client expert 24/7",
    "Setup in under 5 minutes": "Installation en moins de 5 minutes",
    "Active Streams": "Flux Actifs",
    "Global Channels": "Chaînes Mondiales",
    "Uptime SLA": "Disponibilité SLA",
    "Native 4K & FHD Streams": "Flux 4K & FHD Natifs",
    "Zero Buffering Engine": "Technologie Anti-Coupure",
    "Instant Setup & Delivery": "Activation Immédiate",
    "Works on Every Device": "Compatible Tous Appareils",
    "Anti-Buffer Tech": "Technologie Anti-Coupure",
    "4K Ultra HD": "4K Ultra HD",
    "Xtream Codes API": "API Xtream Codes",
    "M3U Playlists": "Playlists M3U",
    "Multi-Screen Mode": "Mode Multi-Écran",
    "VPN Friendly": "Compatible VPN",
    "Expert Support": "Support Expert",
    "EPG Guide": "Guide TV (EPG)",
    "Top Tier": "Haut de Gamme",
    "Live Channels": "Chaînes en Direct",
    "Why use our service with the Smarters Pro Player?": "Pourquoi choisir notre service avec le lecteur Smarters Pro ?",
    "How to configure your Smarters Pro setup.": "Comment configurer votre installation Smarters Pro.",
    "Stream flawlessly on every device you own.": "Un streaming impeccable sur tous vos appareils.",
    "Simple, transparent pricing.": "Des tarifs simples et transparents.",
    "Choose Your Perfect Plan": "Choisissez votre forfait idéal",
    "Choose Your Perfect IPTV Plan": "Choisissez votre forfait IPTV idéal",
    "Flexible plans tailored for every household.": "Des forfaits flexibles adaptés à chaque foyer.",
    "Frequently Asked Questions.": "Questions fréquentes.",
    "Frequently Asked Questions": "Questions fréquentes",
    "FAQ": "Questions fréquentes",
    "Browse Our Channel List": "Parcourir la liste des chaînes",
    "Engineered for Flawless Streaming": "Conçu pour un streaming parfait",
    "Setup & Installation Guides": "Guides de configuration & installation",
    "We're Here to Help 24/7": "Nous sommes là pour vous aider 24/7",
    "Complete IPTV Solutions & Subscriptions": "Solutions complètes IPTV & Abonnements",
    "1 Device Connection": "Connexion 1 Appareil",
    "2 Simultaneous Devices": "2 Appareils Simultanés",
    "3 Simultaneous Devices": "3 Appareils Simultanés",
    "1 Device": "1 Appareil",
    "2 Devices": "2 Appareils",
    "3 Devices": "3 Appareils",
    "1 Month": "1 Mois",
    "3 Months": "3 Mois",
    "6 Months": "6 Mois",
    "12 Months": "12 Mois",
    "24 Months": "24 Mois",
    "1 Year": "1 An",
    "2 Years": "2 Ans",
    "Months": "Mois",
    "Month": "Mois",
    "START STREAMING": "COMMENCER LE STREAMING",
    "GET BEST VALUE": "MEILLEURE OFFRE",
    "Order via WhatsApp": "Commander via WhatsApp",
    "Order on WhatsApp": "Commander sur WhatsApp",
    "Continue to WhatsApp": "Continuer vers WhatsApp",
    "Duration": "Durée",
    "Devices": "Appareils",
    "Total Price": "Prix Total",
    "Total Price:": "Prix Total :",
    "Most Popular": "Le Plus Populaire",
    "Best Value": "Meilleur Rapport Qualité/Prix",
    "Instant Access": "Accès Immédiat",
    "Money-Back Guarantee": "Garantie Satisfait ou Remboursé",
    "24-Hour Guarantee": "Garantie 24 Heures",
    "Save 50%": "Économisez 50%",
    "Save 67%": "Économisez 67%",
    "Save up to 67%": "Économisez jusqu'à 67%",
    "Diamond Plan": "Forfait Diamond",
    "Save with 2-Year Plan": "Économisez avec le forfait 2 ans",
    "Billed monthly": "Facturé mensuellement",
    "Billed annually": "Facturé annuellement",
    "per month": "par mois",
    "/mo": "/mois",
    "/month": "/mois",
    "Channel Categories": "Catégories de Chaînes",
    "All Channels": "Toutes les Chaînes",
    "All Premium Channels": "Toutes les Chaînes Premium",
    "Sports": "Sports",
    "Movies": "Films & Séries",
    "Entertainment": "Divertissement",
    "News": "Actualités",
    "Kids": "Jeunesse",
    "International": "International",
    "Search channels...": "Rechercher une chaîne...",
    "Search Channels...": "Rechercher une chaîne...",
    "Reset search": "Réinitialiser la recherche",
    "Reset Search": "Réinitialiser la recherche",
    "Quality": "Qualité",
    "Category": "Catégorie",
    "Live": "En Direct",
    "channels": "chaînes",
    "Activate Your Free Trial": "Activez votre essai gratuit",
    "Subscription Type": "Type d'abonnement",
    "Standard": "Standard",
    "MAG Box": "Boîtier MAG",
    "Email Address": "Adresse e-mail",
    "Email Address (e.g., john@example.com)*": "Adresse e-mail (ex : jean@exemple.fr)*",
    "MAC Address (e.g., 00:1A:79:XX:XX:XX)*": "Adresse MAC (ex : 00:1A:79:XX:XX:XX)*",
    "ACTIVATE YOUR FREE TRIAL": "ACTIVER MON ESSAI GRATUIT",
    "Free Trial Activated!": "Essai gratuit activé !",
    "CLOSE": "FERMER",
    "Complete Your Order": "Finalisez votre commande",
    "Step 1 of 2": "Étape 1 sur 2",
    "CONTINUE TO WHATSAPP ›": "CONTINUER VERS WHATSAPP ›",
    "Get in Touch": "Contactez-nous",
    "Full Name": "Nom complet",
    "Device Type": "Type d'appareil",
    "Message": "Message",
    "Send Message": "Envoyer le message",
    "Message sent successfully!": "Message envoyé avec succès !",
    "Telegram Live Chat": "Chat en direct WhatsApp",
    "WhatsApp Live Chat": "Chat en direct WhatsApp",
    "Direct WhatsApp Support": "Support WhatsApp Direct",
    "Email Support": "Support par e-mail",
    "Product": "Produit",
    "Company": "Société",
    "Legal": "Mentions Légales",
    "Terms of Use": "Conditions d'utilisation",
    "Terms of Service": "Conditions d'utilisation",
    "Privacy Policy": "Politique de confidentialité",
    "Refund Policy": "Politique de remboursement",
    "DMCA Disclaimer": "Avis DMCA",
    "All rights reserved.": "Tous droits réservés.",
    "Copyright © 2026 IPTV Smarters Pro. All rights reserved.": "Copyright © 2026 IPTV Smarters Pro. Tous droits réservés.",
    "What is IPTV Smarters Pro?": "Qu'est-ce qu'IPTV Smarters Pro ?",
    "Can I use IPTV Smarters Pro in my area?": "Puis-je utiliser IPTV Smarters Pro dans ma région ?",
    "What devices are supported?": "Quels appareils sont compatibles ?",
    "How many devices can I use simultaneously?": "Combien d'appareils puis-je utiliser simultanément ?",
    "Do you offer a free trial?": "Proposez-vous un essai gratuit ?",
    "How do I receive my subscription details?": "Comment reçois-je mes identifiants d'abonnement ?",
    "How do I install IPTV Smarters Pro?": "Comment installer IPTV Smarters Pro ?",
    "Which login formats are supported?": "Quels formats de connexion sont pris en charge ?",
    "Can support help me set it up?": "Le support peut-il m'aider pour l'installation ?",
    "What internet speed do I need?": "Quelle vitesse Internet est nécessaire ?",
    "Why is my stream buffering?": "Pourquoi mon flux vidéo se met-il en mémoire tampon ?",
    "Do you offer 4K streaming?": "Proposez-vous le streaming en 4K ?",
    "Does the service include EPG (TV Guide)?": "Le service inclut-il le guide des programmes (EPG) ?",
    "Can I watch sports live?": "Puis-je regarder le sport en direct ?",
    "What payment methods do you accept?": "Quels moyens de paiement acceptez-vous ?",
    "Are there any hidden fees?": "Y a-t-il des frais cachés ?",
    "Can I change my subscription plan?": "Puis-je changer de forfait d'abonnement ?",
    "Do subscriptions auto-renew?": "Les abonnements se renouvellent-ils automatiquement ?",
    "What's your refund policy?": "Quelle est votre politique de remboursement ?",
    "What should I do if channels do not load?": "Que faire si les chaînes ne se chargent pas ?",
    "Why does playback buffer?": "Pourquoi la lecture ralentit-elle ?",
    "My login does not work. What should I check?": "Mon identifiant ne fonctionne pas. Que vérifier ?",
    "How do I report a channel problem?": "Comment signaler un problème de chaîne ?",
    "How can I contact customer support?": "Comment puis-je contacter le support client ?",
    "What information should I provide?": "Quelles informations dois-je fournir ?",
    "How quickly will my issue be resolved?": "En combien de temps mon problème sera-t-il résolu ?",
    "Do you provide setup assistance?": "Fournissez-vous une aide à l'installation ?",
    "Explore Channels": "Explorer les chaînes",
    "On Air Now": "En direct",
    "Unlimited": "Illimité",
    "Movies & Series": "Films & Séries",
    "Premium IPTV Subscription": "Abonnement IPTV Premium",
    "Why use our service with the": "Pourquoi utiliser notre service avec le",
    "Smarters Pro Player?": "lecteur Smarters Pro ?",
    "Anti-Buffer Technology": "Technologie Anti-Coupure",
    "True 4K & FHD": "Véritable 4K & FHD",
    "Custom Playlists": "Playlists Personnalisées",
    "100% VPN Friendly": "100% Compatible VPN",
    "Xtream Codes Login": "Connexion Xtream Codes",
    "How to configure your": "Comment configurer votre",
    "Smarters Pro setup.": "installation Smarters Pro.",
    "Choose a Plan": "Choisir un forfait",
    "Get Credentials": "Recevoir vos identifiants",
    "Start Streaming": "Commencer le streaming",
    "Multi-Screen Streaming": "Streaming multi-écran",
    "Stream flawlessly on": "Un streaming impeccable sur",
    "every device you own.": "tous vos appareils.",
    "Smart TVs": "Smart TVs",
    "Samsung, LG WebOS, Android TV": "Samsung, LG WebOS, Android TV",
    "Streaming Boxes": "Boîtiers de Streaming",
    "Firestick, Apple TV, MAG": "Firestick, Apple TV, MAG",
    "Mobile & Tablet": "Mobile & Tablette",
    "iOS, iPadOS, Android": "iOS, iPadOS, Android",
    "Computers": "Ordinateurs",
    "Windows, macOS, Web Browser": "Windows, macOS, Navigateur Web",
    "Pricing Plans": "Forfaits & Tarifs",
    "Simple, transparent": "Des tarifs simples",
    "pricing.": "et transparents.",
    "Subscription": "Abonnement",
    "Save 14%": "Économisez 14%",
    "Top Live TV Channels": "Meilleures chaînes TV en direct",
    "Extensive Movie & TV Library": "Grande bibliothèque de films & séries",
    "All devices supported": "Tous appareils compatibles",
    "24/7 Dedicated Support": "Support dédié 24/7",
    "Save 33%": "Économisez 33%",
    "Diamond Plan · Best Value": "Forfait Diamond · Meilleur Choix",
    "Effective rate:": "Tarif effectif :",
    "+ All other standard features": "+ Toutes les autres fonctionnalités incluses",
    "Secure Payments": "Paiements Sécurisés",
    "Expert Customer Support": "Support Client Expert",
    "Instant Activation": "Activation Immédiate",
    "Got Questions?": "Des questions ?",
    "Frequently Asked": "Questions",
    "Questions.": "Fréquentes.",
    "Everything you need to know about the service and billing.": "Tout ce que vous devez savoir sur le service et la facturation.",
    "Is the IPTV Smarters Pro app free?": "L'application IPTV Smarters Pro est-elle gratuite ?",
    "How do I log in using Xtream Codes?": "Comment se connecter avec Xtream Codes ?",
    "Can I install it on an Amazon Firestick?": "Puis-je l'installer sur Amazon Firestick ?",
    "Why is my EPG guide not loading?": "Pourquoi mon guide TV (EPG) ne se charge pas ?",
    "Does the app support multi-screen streaming?": "L'application prend-elle en charge le multi-écran ?",
    "Is a VPN required to use this service?": "Un VPN est-il nécessaire pour utiliser ce service ?",
    "Channel List": "Liste des chaînes",
    "Product Topics": "Sujets produits",
    "Setup Guide": "Guide d'installation",
    "Contact Us": "Contactez-nous",
    "Expert Support via WhatsApp": "Assistance experte via WhatsApp",
    "Expert Support via Telegram": "Assistance experte via WhatsApp",
    "Message Us": "Écrivez-nous",
    "IPTV Smarters Pro. All rights reserved.": "IPTV Smarters Pro. Tous droits réservés.",
    "Secure Checkout": "Paiement Sécurisé",
    "Back to top": "Retour en haut",
    "Live Content": "Contenu en Direct",
    "Premium": "Premium",
    "Channels.": "Chaînes.",
    "All": "Toutes",
    "Movies & Cinema": "Films & Cinéma",
    "News & Documentaries": "Actualités & Documentaires",
    "Kids & Family": "Jeunesse & Famille",
    "20 channels": "20 chaînes",
    "Sports Channels": "Chaînes de sport",
    "Every major sporting event, PPV, and network in native 4K and FHD.": "Chaque événement sportif majeur, PPV et chaîne en 4K et FHD natif.",
    "Ready to watch every channel?": "Prêt à regarder toutes les chaînes ?",
    "Advanced": "Avancé",
    "Streaming Features.": "Fonctionnalités de streaming.",
    "High-Speed Edge Network": "Réseau Edge Haute Vitesse",
    "4K Streaming": "Streaming 4K",
    "Full EPG Guide": "Guide EPG Complet",
    "Fast & Reliable Support": "Support Rapide & Fiable",
    "Secure & Private": "Sécurisé & Confidentiel",
    "No Contracts": "Sans Engagement",
    "Catch-Up TV": "Replay TV",
    "120+ Countries": "120+ Pays",
    "Multi-Platform": "Multiplateforme",
    "Deep Device Compatibility": "Haute Compatibilité Matérielle",
    "Smart TV": "Smart TV",
    "Fire TV Stick": "Fire TV Stick",
    "iOS & Android": "iOS & Android",
    "PC & Mac": "PC & Mac",
    "MAG / Formuler": "MAG / Formuler",
    "Quick Start": "Démarrage Rapide",
    "Setup in three steps": "Installation en 3 étapes",
    "Choose your plan": "Choisissez votre forfait",
    "Receive credentials": "Recevez vos identifiants",
    "Start streaming": "Commencez à regarder",
    "Feature & Setup FAQs": "FAQ Fonctionnalités & Installation",
    "How reliable is the streaming quality?": "Quelle est la fiabilité de la qualité du streaming ?",
    "How detailed is the EPG?": "Quel est le niveau de détail de l'EPG ?",
    "What devices are compatible?": "Quels appareils sont compatibles ?",
    "Ready for the ultimate upgrade?": "Prêt pour l'expérience ultime ?",
    "View Plans": "Voir les forfaits",
    "Knowledge Base": "Base de connaissances",
    "Master your": "Maîtrisez votre",
    "Streaming.": "Streaming.",
    "Setup": "Configuration",
    "Troubleshooting": "Dépannage",
    "Comparisons": "Comparatifs",
    "Safety": "Sécurité",
    "IPTV Basics": "Bases de l'IPTV",
    "Read article": "Lire l'article",
    "Support": "Support",
    "How can we": "Comment pouvons-nous",
    "help?": "vous aider ?",
    "Live Chat Support": "Chat en direct",
    "WhatsApp Live Support": "Support WhatsApp en direct",
    "Message @host4k": "Discuter sur WhatsApp",
    "Chat on WhatsApp": "Discuter sur WhatsApp",
    "Get the fastest response times by messaging our support agents directly on WhatsApp.": "Obtenez les réponses les plus rapides en écrivant directement à nos conseillers sur WhatsApp.",
    "Get the fastest response times by messaging our support agents directly on Telegram.": "Obtenez les réponses les plus rapides en écrivant directement à nos conseillers sur WhatsApp.",
    "Always Available": "Toujours disponible",
    "Technical Experts": "Experts techniques",
    "Provider Directory": "Annuaire des fournisseurs",
    "Directory.": "Annuaire.",
    "Xtream Codes": "Xtream Codes",
    "Live TV & VOD": "TV en direct & VOD",
    "Showing": "Affichage",
    "Category:": "Catégorie :",
    "4K Stream": "Flux 4K",
    "Live & VOD": "Direct & VOD",
    "Global Sports": "Sports Mondiaux",
    "Smart TV Ready": "Prêt pour Smart TV",
    "M3U Playlist": "Playlist M3U",
    "4K / FHD Quality": "Qualité 4K / FHD"
  },
  "es": {
    "Home": "Inicio",
    "IPTV Services": "Servicios IPTV",
    "Features": "Características",
    "Channels": "Canales",
    "Pricing": "Precios",
    "Guides": "Guías",
    "Contact": "Contacto",
    "Products": "Productos",
    "Free Trial": "Prueba Gratis",
    "Get Started": "Empezar",
    "Buy Now": "Comprar Ahora",
    "Select Plan": "Seleccionar plan",
    "Explore Plans": "Explorar planes",
    "Start 1-Day Free Trial": "Iniciar prueba de 1 día",
    "Message us on WhatsApp": "Escríbenos en WhatsApp",
    "Message us on Telegram": "Escríbenos en WhatsApp",
    "Open menu": "Abrir menú",
    "Close menu": "Cerrar menú",
    "Change language": "Cambiar idioma",
    "Television, without limits.": "Televisión, sin límites.",
    "Live Now · Streaming Top Channels Worldwide": "En vivo · Las mejores cadenas del mundo",
    "View Plans & Pricing": "Ver planes y precios",
    "Instant account activation": "Activación instantánea de la cuenta",
    "expert customer support": "soporte al cliente experto 24/7",
    "Setup in under 5 minutes": "Configuración en menos de 5 minutos",
    "Active Streams": "Transmisiones Activas",
    "Global Channels": "Canales Globales",
    "Uptime SLA": "Disponibilidad SLA",
    "Native 4K & FHD Streams": "Transmisiones 4K y FHD",
    "Zero Buffering Engine": "Motor Sin Búfer",
    "Instant Setup & Delivery": "Configuración Inmediata",
    "Works on Every Device": "Compatible con Todos los Dispositivos",
    "Anti-Buffer Tech": "Tecnología Anti-Búfer",
    "4K Ultra HD": "4K Ultra HD",
    "Xtream Codes API": "API Xtream Codes",
    "M3U Playlists": "Listas M3U",
    "Multi-Screen Mode": "Modo Multipantalla",
    "VPN Friendly": "Compatible con VPN",
    "Expert Support": "Soporte Experto",
    "EPG Guide": "Guía TV (EPG)",
    "Top Tier": "Nivel Superior",
    "Live Channels": "Canales en Vivo",
    "Why use our service with the Smarters Pro Player?": "¿Por qué usar nuestro servicio con el reproductor Smarters Pro?",
    "How to configure your Smarters Pro setup.": "Cómo configurar tu instalación de Smarters Pro.",
    "Stream flawlessly on every device you own.": "Streaming impecable en todos tus dispositivos.",
    "Simple, transparent pricing.": "Precios sencillos y transparentes.",
    "Choose Your Perfect Plan": "Elige tu plan ideal",
    "Choose Your Perfect IPTV Plan": "Elige tu plan IPTV ideal",
    "Flexible plans tailored for every household.": "Planes flexibles adaptados a cada hogar.",
    "Frequently Asked Questions.": "Preguntas frecuentes.",
    "Frequently Asked Questions": "Preguntas frecuentes",
    "FAQ": "Preguntas frecuentes",
    "Browse Our Channel List": "Explorar la lista de canales",
    "Engineered for Flawless Streaming": "Diseñado para un streaming perfecto",
    "Setup & Installation Guides": "Guías de configuración e instalación",
    "We're Here to Help 24/7": "Estamos aquí para ayudarte 24/7",
    "Complete IPTV Solutions & Subscriptions": "Soluciones completas de IPTV y Suscripciones",
    "1 Device Connection": "Conexión 1 Dispositivo",
    "2 Simultaneous Devices": "2 Dispositivos Simultáneos",
    "3 Simultaneous Devices": "3 Dispositivos Simultáneos",
    "1 Device": "1 Dispositivo",
    "2 Devices": "2 Dispositivos",
    "3 Devices": "3 Dispositivos",
    "1 Month": "1 Mes",
    "3 Months": "3 Meses",
    "6 Months": "6 Meses",
    "12 Months": "12 Meses",
    "24 Months": "24 Meses",
    "1 Year": "1 Año",
    "2 Years": "2 Años",
    "Months": "Meses",
    "Month": "Mes",
    "START STREAMING": "EMPEZAR STREAMING",
    "GET BEST VALUE": "MEJOR OFERTA",
    "Order via WhatsApp": "Pedir por WhatsApp",
    "Order on WhatsApp": "Pedir en WhatsApp",
    "Continue to WhatsApp": "Continuar a WhatsApp",
    "Duration": "Duración",
    "Devices": "Dispositivos",
    "Total Price": "Precio Total",
    "Total Price:": "Precio Total:",
    "Most Popular": "Más Popular",
    "Best Value": "Mejor Oferta",
    "Instant Access": "Acceso Instantáneo",
    "Money-Back Guarantee": "Garantía de Devolución",
    "24-Hour Guarantee": "Garantía de 24 Horas",
    "Save 50%": "Ahorra 50%",
    "Save 67%": "Ahorra 67%",
    "Save up to 67%": "Ahorra hasta 67%",
    "Diamond Plan": "Plan Diamond",
    "Save with 2-Year Plan": "Ahorra con el plan de 2 años",
    "Billed monthly": "Facturado mensualmente",
    "Billed annually": "Facturado anualmente",
    "per month": "por mes",
    "/mo": "/mes",
    "/month": "/mes",
    "Channel Categories": "Categorías de Canales",
    "All Channels": "Todos los Canales",
    "All Premium Channels": "Todos los Canales Premium",
    "Sports": "Deportes",
    "Movies": "Películas",
    "Entertainment": "Entretenimiento",
    "News": "Noticias",
    "Kids": "Infantil",
    "International": "Internacional",
    "Search channels...": "Buscar canales...",
    "Search Channels...": "Buscar canales...",
    "Reset search": "Restablecer búsqueda",
    "Reset Search": "Restablecer búsqueda",
    "Quality": "Calidad",
    "Category": "Categoría",
    "Live": "En Vivo",
    "channels": "canales",
    "Activate Your Free Trial": "Activa tu prueba gratuita",
    "Subscription Type": "Tipo de suscripción",
    "Standard": "Estándar",
    "MAG Box": "Caja MAG",
    "Email Address": "Correo electrónico",
    "Email Address (e.g., john@example.com)*": "Correo electrónico (ej: juan@ejemplo.es)*",
    "MAC Address (e.g., 00:1A:79:XX:XX:XX)*": "Dirección MAC (ej: 00:1A:79:XX:XX:XX)*",
    "ACTIVATE YOUR FREE TRIAL": "ACTIVAR MI PRUEBA GRATIS",
    "Free Trial Activated!": "¡Prueba gratuita activada!",
    "CLOSE": "CERRAR",
    "Complete Your Order": "Completa tu pedido",
    "Step 1 of 2": "Paso 1 de 2",
    "CONTINUE TO WHATSAPP ›": "CONTINUAR A WHATSAPP ›",
    "Get in Touch": "Ponte en contacto",
    "Full Name": "Nombre completo",
    "Device Type": "Tipo de dispositivo",
    "Message": "Mensaje",
    "Send Message": "Enviar mensaje",
    "Message sent successfully!": "¡Mensaje enviado con éxito!",
    "Telegram Live Chat": "Chat en vivo de WhatsApp",
    "WhatsApp Live Chat": "Chat en vivo de WhatsApp",
    "Chat on WhatsApp": "Chatear en WhatsApp",
    "Direct WhatsApp Support": "Soporte directo por WhatsApp",
    "Email Support": "Soporte por correo",
    "Product": "Producto",
    "Company": "Empresa",
    "Legal": "Legal",
    "Terms of Use": "Términos de uso",
    "Terms of Service": "Términos del servicio",
    "Privacy Policy": "Política de privacidad",
    "Refund Policy": "Política de reembolso",
    "DMCA Disclaimer": "Descargo de responsabilidad DMCA",
    "All rights reserved.": "Todos los derechos reservados.",
    "Copyright © 2026 IPTV Smarters Pro. All rights reserved.": "Copyright © 2026 IPTV Smarters Pro. Todos los derechos reservados.",
    "What is IPTV Smarters Pro?": "¿Qué es IPTV Smarters Pro?",
    "Can I use IPTV Smarters Pro in my area?": "¿Puedo usar IPTV Smarters Pro en mi área?",
    "What devices are supported?": "¿Qué dispositivos son compatibles?",
    "How many devices can I use simultaneously?": "¿Cuántos dispositivos puedo usar simultáneamente?",
    "Do you offer a free trial?": "¿Ofrecen una prueba gratuita?",
    "How do I receive my subscription details?": "¿Cómo recibo los datos de mi suscripción?",
    "How do I install IPTV Smarters Pro?": "¿Cómo instalo IPTV Smarters Pro?",
    "Which login formats are supported?": "¿Qué formatos de inicio de sesión son compatibles?",
    "Can support help me set it up?": "¿El soporte puede ayudarme a configurarlo?",
    "What internet speed do I need?": "¿Qué velocidad de Internet necesito?",
    "Why is my stream buffering?": "¿Por qué se congela o carga mi transmisión?",
    "Do you offer 4K streaming?": "¿Ofrecen transmisión en 4K?",
    "Does the service include EPG (TV Guide)?": "¿El servicio incluye EPG (Guía de TV)?",
    "Can I watch sports live?": "¿Puedo ver deportes en vivo?",
    "What payment methods do you accept?": "¿Qué métodos de pago aceptan?",
    "Are there any hidden fees?": "¿Hay algún cargo oculto?",
    "Can I change my subscription plan?": "¿Puedo cambiar mi plan de suscripción?",
    "Do subscriptions auto-renew?": "¿Las suscripciones se renuevan automáticamente?",
    "What's your refund policy?": "¿Cuál es su política de reembolso?",
    "What should I do if channels do not load?": "¿Qué debo hacer si los canales no cargan?",
    "Why does playback buffer?": "¿Por qué se almacena en búfer la reproducción?",
    "My login does not work. What should I check?": "Mi inicio de sesión no funciona. ¿Qué debo verificar?",
    "How do I report a channel problem?": "¿Cómo informo sobre un problema en un canal?",
    "How can I contact customer support?": "¿Cómo puedo contactar al servicio de atención al cliente?",
    "What information should I provide?": "¿Qué información debo proporcionar?",
    "How quickly will my issue be resolved?": "¿Qué tan rápido se resolverá mi problema?",
    "Do you provide setup assistance?": "¿Proporcionan asistencia de configuración?",
    "Explore Channels": "Explorar canales",
    "On Air Now": "En el aire",
    "Unlimited": "Ilimitado",
    "Movies & Series": "Películas y Series",
    "Premium IPTV Subscription": "Suscripción IPTV Premium",
    "Why use our service with the": "¿Por qué usar nuestro servicio con el",
    "Smarters Pro Player?": "reproductor Smarters Pro?",
    "Anti-Buffer Technology": "Tecnología Anti-Búfer",
    "True 4K & FHD": "Verdadero 4K y FHD",
    "Custom Playlists": "Listas Personalizadas",
    "100% VPN Friendly": "100% Compatible con VPN",
    "Xtream Codes Login": "Inicio con Xtream Codes",
    "How to configure your": "Cómo configurar tu",
    "Smarters Pro setup.": "instalación de Smarters Pro.",
    "Choose a Plan": "Elige un plan",
    "Get Credentials": "Recibe tus credenciales",
    "Start Streaming": "Empieza a transmitir",
    "Multi-Screen Streaming": "Streaming multipantalla",
    "Stream flawlessly on": "Transmite de forma impecable en",
    "every device you own.": "todos tus dispositivos.",
    "Smart TVs": "Smart TVs",
    "Samsung, LG WebOS, Android TV": "Samsung, LG WebOS, Android TV",
    "Streaming Boxes": "Cajas de Streaming",
    "Firestick, Apple TV, MAG": "Firestick, Apple TV, MAG",
    "Mobile & Tablet": "Móvil y Tableta",
    "iOS, iPadOS, Android": "iOS, iPadOS, Android",
    "Computers": "Ordenadores",
    "Windows, macOS, Web Browser": "Windows, macOS, Navegador Web",
    "Pricing Plans": "Planes de Precios",
    "Simple, transparent": "Precios sencillos",
    "pricing.": "y transparentes.",
    "Subscription": "Suscripción",
    "Save 14%": "Ahorra 14%",
    "Top Live TV Channels": "Principales canales de TV en vivo",
    "Extensive Movie & TV Library": "Amplia biblioteca de películas y TV",
    "All devices supported": "Todos los dispositivos compatibles",
    "24/7 Dedicated Support": "Soporte dedicado 24/7",
    "Save 33%": "Ahorra 33%",
    "Diamond Plan · Best Value": "Plan Diamond · Mejor Valor",
    "Effective rate:": "Tarifa efectiva:",
    "+ All other standard features": "+ Todas las demás funciones incluidas",
    "Secure Payments": "Pagos Seguros",
    "Expert Customer Support": "Soporte Técnico Experto",
    "Instant Activation": "Activación Instantánea",
    "Got Questions?": "¿Tienes preguntas?",
    "Frequently Asked": "Preguntas",
    "Questions.": "Frecuentes.",
    "Everything you need to know about the service and billing.": "Todo lo que necesitas saber sobre el servicio y la facturación.",
    "Is the IPTV Smarters Pro app free?": "¿La aplicación IPTV Smarters Pro es gratuita?",
    "How do I log in using Xtream Codes?": "¿Cómo inicio sesión con Xtream Codes?",
    "Can I install it on an Amazon Firestick?": "¿Puedo instalarlo en un Amazon Firestick?",
    "Why is my EPG guide not loading?": "¿Por qué no carga mi guía EPG?",
    "Does the app support multi-screen streaming?": "¿La aplicación admite transmisión multipantalla?",
    "Is a VPN required to use this service?": "¿Se requiere una VPN para usar este servicio?",
    "Channel List": "Lista de canales",
    "Product Topics": "Temas de productos",
    "Setup Guide": "Guía de configuración",
    "Contact Us": "Contáctanos",
    "Expert Support via WhatsApp": "Soporte experto en WhatsApp",
    "Expert Support via Telegram": "Soporte experto en WhatsApp",
    "Message Us": "Escríbenos",
    "IPTV Smarters Pro. All rights reserved.": "IPTV Smarters Pro. Todos los derechos reservados.",
    "Secure Checkout": "Pago Seguro",
    "Back to top": "Volver arriba",
    "Live Content": "Contenido en Vivo",
    "Premium": "Premium",
    "Channels.": "Canales.",
    "All": "Todos",
    "Movies & Cinema": "Películas y Cine",
    "News & Documentaries": "Noticias y Documentales",
    "Kids & Family": "Infantil y Familiar",
    "20 channels": "20 canales",
    "Sports Channels": "Canales de deportes",
    "Every major sporting event, PPV, and network in native 4K and FHD.": "Cada gran evento deportivo, PPV y canal en 4K y FHD nativo.",
    "Ready to watch every channel?": "¿Listo para ver todos los canales?",
    "Advanced": "Avanzado",
    "Streaming Features.": "Funciones de streaming.",
    "High-Speed Edge Network": "Red Edge de Alta Velocidad",
    "4K Streaming": "Streaming 4K",
    "Full EPG Guide": "Guía EPG Completa",
    "Fast & Reliable Support": "Soporte Rápido y Confiable",
    "Secure & Private": "Seguro y Privado",
    "No Contracts": "Sin Contratos",
    "Catch-Up TV": "TV a la Carta",
    "120+ Countries": "120+ Países",
    "Multi-Platform": "Multiplataforma",
    "Deep Device Compatibility": "Alta Compatibilidad de Dispositivos",
    "Smart TV": "Smart TV",
    "Fire TV Stick": "Fire TV Stick",
    "iOS & Android": "iOS y Android",
    "PC & Mac": "PC y Mac",
    "MAG / Formuler": "MAG / Formuler",
    "Quick Start": "Inicio Rápido",
    "Setup in three steps": "Configuración en 3 pasos",
    "Choose your plan": "Elige tu plan",
    "Receive credentials": "Recibe credenciales",
    "Start streaming": "Empieza a transmitir",
    "Feature & Setup FAQs": "Preguntas Frecuentes de Instalación",
    "How reliable is the streaming quality?": "¿Qué tan confiable es la calidad del streaming?",
    "How detailed is the EPG?": "¿Qué tan detallada es la EPG?",
    "What devices are compatible?": "¿Qué dispositivos son compatibles?",
    "Ready for the ultimate upgrade?": "¿Listo para la mejor experiencia?",
    "View Plans": "Ver Planes",
    "Knowledge Base": "Base de conocimientos",
    "Master your": "Domina tu",
    "Streaming.": "Streaming.",
    "Setup": "Configuración",
    "Troubleshooting": "Resolución de problemas",
    "Comparisons": "Comparaciones",
    "Safety": "Seguridad",
    "IPTV Basics": "Básicos de IPTV",
    "Read article": "Leer artículo",
    "Support": "Soporte",
    "How can we": "¿Cómo podemos",
    "help?": "ayudarte?",
    "Live Chat Support": "Chat de soporte en vivo",
    "WhatsApp Live Support": "Soporte en vivo por WhatsApp",
    "Message @host4k": "Chatear en WhatsApp",
    "Chat on WhatsApp": "Chatear en WhatsApp",
    "Get the fastest response times by messaging our support agents directly on WhatsApp.": "Obtén los tiempos de respuesta más rápidos contactando directamente a nuestro equipo en WhatsApp.",
    "Get the fastest response times by messaging our support agents directly on Telegram.": "Obtén los tiempos de respuesta más rápidos contactando directamente a nuestro equipo en WhatsApp.",
    "Always Available": "Siempre disponible",
    "Technical Experts": "Expertos técnicos",
    "Provider Directory": "Directorio de proveedores",
    "Directory.": "Directorio.",
    "Xtream Codes": "Xtream Codes",
    "Live TV & VOD": "TV en Vivo y VOD",
    "Showing": "Mostrando",
    "Category:": "Categoría:",
    "4K Stream": "Transmisión 4K",
    "Live & VOD": "En Vivo y VOD",
    "Global Sports": "Deportes Globales",
    "Smart TV Ready": "Listo para Smart TV",
    "M3U Playlist": "Lista M3U",
    "4K / FHD Quality": "Calidad 4K / FHD"
  },
  "ko": {
    "Home": "홈",
    "IPTV Services": "IPTV 서비스",
    "Features": "주요 기능",
    "Channels": "채널 목록",
    "Pricing": "요금제",
    "Guides": "가이드",
    "Contact": "고객지원",
    "Products": "제품",
    "Free Trial": "무료 체험",
    "Get Started": "시작하기",
    "Buy Now": "지금 구매하기",
    "Select Plan": "요금제 선택",
    "Explore Plans": "요금제 둘러보기",
    "Start 1-Day Free Trial": "1일 무료 체험 시작",
    "Message us on WhatsApp": "WhatsApp으로 문의하기",
    "Message us on Telegram": "WhatsApp으로 문의하기",
    "Open menu": "메뉴 열기",
    "Close menu": "메뉴 닫기",
    "Change language": "언어 변경",
    "Television, without limits.": "한계 없는 프리미엄 TV 스트리밍.",
    "Live Now · Streaming Top Channels Worldwide": "실시간 라이브 · 전 세계 최고 인기 채널 스트리밍",
    "View Plans & Pricing": "요금제 및 가격 보기",
    "Instant account activation": "계정 즉시 활성화",
    "expert customer support": "24/7 전문 고객 지원",
    "Setup in under 5 minutes": "5분 이내 간편 설정",
    "Active Streams": "활성 스트림",
    "Global Channels": "글로벌 채널",
    "Uptime SLA": "가동 시간 SLA",
    "Native 4K & FHD Streams": "네이티브 4K & FHD 스트림",
    "Zero Buffering Engine": "버퍼링 제로 엔진",
    "Instant Setup & Delivery": "즉각적인 설정 및 전송",
    "Works on Every Device": "모든 기기 지원",
    "Anti-Buffer Tech": "안티 버퍼링 기술",
    "4K Ultra HD": "4K 울트라 HD",
    "Xtream Codes API": "Xtream Codes API",
    "M3U Playlists": "M3U 재생목록",
    "Multi-Screen Mode": "멀티스크린 모드",
    "VPN Friendly": "VPN 완벽 호환",
    "Expert Support": "전문가 지원",
    "EPG Guide": "EPG TV 가이드",
    "Top Tier": "최고 수준",
    "Live Channels": "라이브 채널",
    "Why use our service with the Smarters Pro Player?": "왜 Smarters Pro 플레이어와 함께 당사 서비스를 이용해야 할까요?",
    "How to configure your Smarters Pro setup.": "Smarters Pro 설정을 구성하는 방법.",
    "Stream flawlessly on every device you own.": "보유한 모든 기기에서 완벽하게 스트리밍하세요.",
    "Simple, transparent pricing.": "단순하고 투명한 요금제.",
    "Choose Your Perfect Plan": "완벽한 플랜을 선택하세요",
    "Choose Your Perfect IPTV Plan": "완벽한 IPTV 요금제를 선택하세요",
    "Flexible plans tailored for every household.": "모든 가정에 맞춘 유연한 요금제.",
    "Frequently Asked Questions.": "자주 묻는 질문 (FAQ).",
    "Frequently Asked Questions": "자주 묻는 질문",
    "FAQ": "자주 묻는 질문",
    "Browse Our Channel List": "채널 목록 둘러보기",
    "Engineered for Flawless Streaming": "완벽한 스트리밍을 위한 설계",
    "Setup & Installation Guides": "설정 및 설치 가이드",
    "We're Here to Help 24/7": "24/7 언제나 도와드리겠습니다",
    "Complete IPTV Solutions & Subscriptions": "완벽한 IPTV 솔루션 & 구독 서비스",
    "1 Device Connection": "1대 기기 연결",
    "2 Simultaneous Devices": "2대 동시 연결",
    "3 Simultaneous Devices": "3대 동시 연결",
    "1 Device": "1개 기기",
    "2 Devices": "2개 기기",
    "3 Devices": "3개 기기",
    "1 Month": "1개월",
    "3 Months": "3개월",
    "6 Months": "6개월",
    "12 Months": "12개월",
    "24 Months": "24개월",
    "1 Year": "1년",
    "2 Years": "2년",
    "Months": "개월",
    "Month": "개월",
    "START STREAMING": "스트리밍 시작하기",
    "GET BEST VALUE": "최고의 혜택 선택",
    "Order via WhatsApp": "WhatsApp으로 주문하기",
    "Order on WhatsApp": "WhatsApp으로 주문하기",
    "Continue to WhatsApp": "WhatsApp으로 이동",
    "Duration": "구독 기간",
    "Devices": "기기 수",
    "Total Price": "총 금액",
    "Total Price:": "총 금액:",
    "Most Popular": "가장 인기",
    "Best Value": "최고의 가치",
    "Instant Access": "즉시 이용 가능",
    "Money-Back Guarantee": "환불 보장",
    "24-Hour Guarantee": "24시간 안심 보장",
    "Save 50%": "50% 할인",
    "Save 67%": "67% 할인",
    "Save up to 67%": "최대 67% 절약",
    "Diamond Plan": "다이아몬드 플랜",
    "Save with 2-Year Plan": "2년 요금제로 최대 절약",
    "Billed monthly": "월별 청구",
    "Billed annually": "연간 청구",
    "per month": "월",
    "/mo": "/월",
    "/month": "/월",
    "Channel Categories": "채널 카테고리",
    "All Channels": "전체 채널",
    "All Premium Channels": "모든 프리미엄 채널",
    "Sports": "스포츠",
    "Movies": "영화",
    "Entertainment": "엔터테인먼트",
    "News": "뉴스",
    "Kids": "키즈 & 어린이",
    "International": "해외 & 글로벌",
    "Search channels...": "채널 검색...",
    "Search Channels...": "채널 검색...",
    "Reset search": "검색 초기화",
    "Reset Search": "검색 초기화",
    "Quality": "화질",
    "Category": "카테고리",
    "Live": "라이브",
    "channels": "채널",
    "Activate Your Free Trial": "무료 체험 활성화",
    "Subscription Type": "구독 유형",
    "Standard": "표준 (Standard)",
    "MAG Box": "MAG 박스",
    "Email Address": "이메일 주소",
    "Email Address (e.g., john@example.com)*": "이메일 주소 (예: user@example.com)*",
    "MAC Address (e.g., 00:1A:79:XX:XX:XX)*": "MAC 주소 (예: 00:1A:79:XX:XX:XX)*",
    "ACTIVATE YOUR FREE TRIAL": "무료 체험 활성화하기",
    "Free Trial Activated!": "무료 체험이 활성화되었습니다!",
    "CLOSE": "닫기",
    "Complete Your Order": "주문 완료하기",
    "Step 1 of 2": "1단계 / 총 2단계",
    "CONTINUE TO WHATSAPP ›": "WHATSAPP으로 계속하기 ›",
    "Get in Touch": "문의하기",
    "Full Name": "이름",
    "Device Type": "기기 유형",
    "Message": "메시지",
    "Send Message": "메시지 보내기",
    "Message sent successfully!": "메시지가 성공적으로 전송되었습니다!",
    "Telegram Live Chat": "WhatsApp 실시간 상담",
    "WhatsApp Live Chat": "WhatsApp 실시간 상담",
    "Chat on WhatsApp": "WhatsApp 상담",
    "Direct WhatsApp Support": "WhatsApp 직통 지원",
    "Email Support": "이메일 고객지원",
    "Product": "제품",
    "Company": "회사",
    "Legal": "법적 고지",
    "Terms of Use": "이용 약관",
    "Terms of Service": "서비스 약관",
    "Privacy Policy": "개인정보 처리방침",
    "Refund Policy": "환불 정책",
    "DMCA Disclaimer": "DMCA 면책 조항",
    "All rights reserved.": "모든 권리 보유.",
    "Copyright © 2026 IPTV Smarters Pro. All rights reserved.": "저작권 © 2026 IPTV Smarters Pro. 모든 권리 보유.",
    "What is IPTV Smarters Pro?": "IPTV Smarters Pro란 무엇인가요?",
    "Can I use IPTV Smarters Pro in my area?": "제가 거주하는 지역에서도 사용할 수 있나요?",
    "What devices are supported?": "어떤 기기들이 지원되나요?",
    "How many devices can I use simultaneously?": "동시에 몇 대의 기기를 사용할 수 있나요?",
    "Do you offer a free trial?": "무료 체험을 제공하나요?",
    "How do I receive my subscription details?": "구독 정보는 어떻게 전달받나요?",
    "How do I install IPTV Smarters Pro?": "IPTV Smarters Pro 설치 방법은 무엇인가요?",
    "Which login formats are supported?": "어떤 로그인 형식이 지원되나요?",
    "Can support help me set it up?": "고객 지원팀에서 설정을 도와줄 수 있나요?",
    "What internet speed do I need?": "어느 정도의 인터넷 속도가 필요한가요?",
    "Why is my stream buffering?": "스트리밍 시 버퍼링이 생기는 이유는 무엇인가요?",
    "Do you offer 4K streaming?": "4K 화질 스트리밍을 지원하나요?",
    "Does the service include EPG (TV Guide)?": "EPG (TV 편성표) 기능이 포함되어 있나요?",
    "Can I watch sports live?": "스포츠 경기를 라이브로 시청할 수 있나요?",
    "What payment methods do you accept?": "어떤 결제 수단을 지원하나요?",
    "Are there any hidden fees?": "숨겨진 추가 요금이 있나요?",
    "Can I change my subscription plan?": "구독 요금제를 변경할 수 있나요?",
    "Do subscriptions auto-renew?": "구독이 자동으로 갱신되나요?",
    "What's your refund policy?": "환불 정책은 어떻게 되나요?",
    "What should I do if channels do not load?": "채널이 로드되지 않을 때는 어떻게 해야 하나요?",
    "Why does playback buffer?": "재생 중 멈춤 현상이 발생하는 이유는 무엇인가요?",
    "My login does not work. What should I check?": "로그인이 되지 않습니다. 무엇을 확인해야 하나요?",
    "How do I report a channel problem?": "채널 문제를 어떻게 신고하나요?",
    "How can I contact customer support?": "고객 지원팀에 어떻게 연락하나요?",
    "What information should I provide?": "어떤 정보를 제공해야 하나요?",
    "How quickly will my issue be resolved?": "문의 사항이 얼마나 빨리 해결되나요?",
    "Do you provide setup assistance?": "설치 지원을 제공하나요?",
    "Explore Channels": "채널 목록 살펴보기",
    "On Air Now": "현재 방송 중",
    "Unlimited": "무제한",
    "Movies & Series": "영화 및 시리즈",
    "Premium IPTV Subscription": "프리미엄 IPTV 구독",
    "Why use our service with the": "왜 당사 서비스를 이용해야 할까요?",
    "Smarters Pro Player?": "Smarters Pro 플레이어와 함께",
    "Anti-Buffer Technology": "버퍼링 방지 기술",
    "True 4K & FHD": "리얼 4K & FHD",
    "Custom Playlists": "맞춤형 재생목록",
    "100% VPN Friendly": "100% VPN 완벽 지원",
    "Xtream Codes Login": "Xtream Codes 로그인",
    "How to configure your": "간편하게 설정하는 방법",
    "Smarters Pro setup.": "Smarters Pro 기기 설치.",
    "Choose a Plan": "요금제 선택",
    "Get Credentials": "접속 정보 수신",
    "Start Streaming": "스트리밍 시작",
    "Multi-Screen Streaming": "멀티스크린 스트리밍",
    "Stream flawlessly on": "끊김 없이 즐기는 스트리밍",
    "every device you own.": "보유한 모든 기기에서.",
    "Smart TVs": "스마트 TV",
    "Samsung, LG WebOS, Android TV": "삼성, LG WebOS, 안드로이드 TV",
    "Streaming Boxes": "스트리밍 셋톱박스",
    "Firestick, Apple TV, MAG": "Firestick, 애플 TV, MAG",
    "Mobile & Tablet": "모바일 및 태블릿",
    "iOS, iPadOS, Android": "iOS, iPadOS, 안드로이드",
    "Computers": "컴퓨터 & PC",
    "Windows, macOS, Web Browser": "윈도우, macOS, 웹 브라우저",
    "Pricing Plans": "요금제 안내",
    "Simple, transparent": "단순하고 투명한",
    "pricing.": "요금 정책.",
    "Subscription": "구독",
    "Save 14%": "14% 할인",
    "Top Live TV Channels": "인기 라이브 TV 채널",
    "Extensive Movie & TV Library": "방대한 영화 및 TV 라이브러리",
    "All devices supported": "모든 기기 완벽 지원",
    "24/7 Dedicated Support": "연중무휴 24시간 전담 지원",
    "Save 33%": "33% 할인",
    "Diamond Plan · Best Value": "다이아몬드 플랜 · 최고의 혜택",
    "Effective rate:": "실질 월 환산 요금:",
    "+ All other standard features": "+ 모든 기본 프리미엄 기능 포함",
    "Secure Payments": "안전한 결제 시스템",
    "Expert Customer Support": "전문 고객 지원",
    "Instant Activation": "즉각적인 계정 활성화",
    "Got Questions?": "궁금한 점이 있으신가요?",
    "Frequently Asked": "자주 묻는",
    "Questions.": "질문 (FAQ).",
    "Everything you need to know about the service and billing.": "서비스 및 결제에 대해 알아야 할 모든 것.",
    "Is the IPTV Smarters Pro app free?": "IPTV Smarters Pro 앱은 무료인가요?",
    "How do I log in using Xtream Codes?": "Xtream Codes로 어떻게 로그인하나요?",
    "Can I install it on an Amazon Firestick?": "Amazon Firestick에 설치할 수 있나요?",
    "Why is my EPG guide not loading?": "EPG 편성표가 로드되지 않는 이유는 무엇인가요?",
    "Does the app support multi-screen streaming?": "앱에서 멀티스크린 스트리밍을 지원하나요?",
    "Is a VPN required to use this service?": "서비스를 이용하려면 VPN이 필요한가요?",
    "Channel List": "채널 목록",
    "Product Topics": "제품 항목",
    "Setup Guide": "설치 가이드",
    "Contact Us": "문의하기",
    "Expert Support via WhatsApp": "WhatsApp 전문 상담",
    "Expert Support via Telegram": "WhatsApp 전문 상담",
    "Message Us": "메시지 보내기",
    "IPTV Smarters Pro. All rights reserved.": "IPTV Smarters Pro. 모든 권리 보유.",
    "Secure Checkout": "안전 결제",
    "Back to top": "맨 위로 이동",
    "Live Content": "라이브 콘텐츠",
    "Premium": "프리미엄",
    "Channels.": "채널 목록.",
    "All": "전체",
    "Movies & Cinema": "영화 & 시네마",
    "News & Documentaries": "뉴스 & 다큐멘터리",
    "Kids & Family": "키즈 & 가족",
    "20 channels": "20개 채널",
    "Sports Channels": "스포츠 채널",
    "Every major sporting event, PPV, and network in native 4K and FHD.": "모든 주요 스포츠 경기, PPV, 방송사를 네이티브 4K 및 FHD로 시청.",
    "Ready to watch every channel?": "모든 채널을 시청할 준비가 되셨나요?",
    "Advanced": "첨단 기술",
    "Streaming Features.": "스트리밍 주요 기능.",
    "High-Speed Edge Network": "초고속 엣지 네트워크",
    "4K Streaming": "4K 초고화질 스트리밍",
    "Full EPG Guide": "완벽한 EPG 편성표",
    "Fast & Reliable Support": "신속하고 안정적인 고객 지원",
    "Secure & Private": "안전하고 철저한 프라이버시",
    "No Contracts": "약정 없는 자유로운 구독",
    "Catch-Up TV": "다시보기 TV (Catch-Up)",
    "120+ Countries": "120개국 이상 지원",
    "Multi-Platform": "멀티 플랫폼 지원",
    "Deep Device Compatibility": "뛰어난 기기 호환성",
    "Smart TV": "스마트 TV",
    "Fire TV Stick": "Fire TV Stick",
    "iOS & Android": "iOS 및 안드로이드",
    "PC & Mac": "PC 및 Mac",
    "MAG / Formuler": "MAG / Formuler",
    "Quick Start": "빠른 시작",
    "Setup in three steps": "3단계 간편 설치",
    "Choose your plan": "요금제 선택",
    "Receive credentials": "접속 정보 수신",
    "Start streaming": "스트리밍 시작",
    "Feature & Setup FAQs": "기능 및 설치 FAQ",
    "How reliable is the streaming quality?": "스트리밍 화질과 안정성은 어떤가요?",
    "How detailed is the EPG?": "EPG는 얼마나 상세한가요?",
    "What devices are compatible?": "어떤 기기들이 호환되나요?",
    "Ready for the ultimate upgrade?": "궁극의 프리미엄 TV를 경험할 준비가 되셨나요?",
    "View Plans": "요금제 확인하기",
    "Knowledge Base": "지식 베이스",
    "Master your": "마스터 가이드",
    "Streaming.": "스트리밍.",
    "Setup": "설치 및 구성",
    "Troubleshooting": "문제 해결",
    "Comparisons": "비교 분석",
    "Safety": "보안 및 안전",
    "IPTV Basics": "IPTV 기초 상식",
    "Read article": "글 읽기",
    "Support": "고객지원",
    "How can we": "무엇을 도와",
    "help?": "드릴까요?",
    "Live Chat Support": "실시간 라이브 채팅 지원",
    "WhatsApp Live Support": "WhatsApp 실시간 상담 지원",
    "Message @host4k": "WhatsApp으로 문의하기",
    "Chat on WhatsApp": "WhatsApp으로 문의하기",
    "Get the fastest response times by messaging our support agents directly on WhatsApp.": "WhatsApp으로 고객 지원팀에 문의하여 가장 빠른 상담을 받아보세요.",
    "Get the fastest response times by messaging our support agents directly on Telegram.": "WhatsApp으로 고객 지원팀에 문의하여 가장 빠른 상담을 받아보세요.",
    "Always Available": "365일 연중무휴 지원",
    "Technical Experts": "전문 엔지니어 팀",
    "Provider Directory": "공식 제공업체 디렉터리",
    "Directory.": "디렉터리.",
    "Xtream Codes": "Xtream Codes",
    "Live TV & VOD": "라이브 TV 및 VOD",
    "Showing": "표시 중",
    "Category:": "카테고리:",
    "4K Stream": "4K 스트림",
    "Live & VOD": "라이브 및 VOD",
    "Global Sports": "글로벌 스포츠",
    "Smart TV Ready": "스마트 TV 지원",
    "M3U Playlist": "M3U 재생목록",
    "4K / FHD Quality": "4K / FHD 화질"
  }
};

  // Node WeakMap to store original English text for lossless toggling
  const originalTextMap = new WeakMap();

  function translateNode(node, lang) {
    if (!node) return;

    if (node.nodeType === Node.TEXT_NODE) {
      const raw = node.nodeValue;
      const trimmed = raw.trim();
      if (!trimmed || trimmed.length < 2) return;

      if (!originalTextMap.has(node)) {
        originalTextMap.set(node, raw);
      }

      const orig = originalTextMap.get(node);
      const origTrimmed = orig.trim();

      if (lang === 'en') {
        node.nodeValue = orig;
        return;
      }

      const trans = TRANSLATIONS[lang]?.[origTrimmed];
      if (trans) {
        const leading = orig.match(/^\s*/)[0];
        const trailing = orig.match(/\s*$/)[0];
        node.nodeValue = leading + trans + trailing;
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const tag = node.tagName;
      if (['SCRIPT', 'STYLE', 'CODE', 'PRE', 'NOSCRIPT', 'SVG'].includes(tag)) return;
      if (node.classList && (node.classList.contains('lang-switch') || node.classList.contains('lang-menu') || node.classList.contains('lang-item'))) return;

      ['placeholder', 'aria-label', 'title'].forEach(attr => {
        if (node.hasAttribute(attr)) {
          const key = '__orig_' + attr;
          if (!node.hasAttribute(key)) {
            node.setAttribute(key, node.getAttribute(attr));
          }
          const origVal = node.getAttribute(key);
          if (lang === 'en') {
            node.setAttribute(attr, origVal);
          } else {
            const trans = TRANSLATIONS[lang]?.[origVal.trim()];
            if (trans) node.setAttribute(attr, trans);
          }
        }
      });

      node.childNodes.forEach(child => translateNode(child, lang));
    }
  }

  function detectCurrentLang() {
    const p = (typeof window !== 'undefined' && window.location && window.location.pathname) ? window.location.pathname : '/';
    if (p === '/fr' || p.startsWith('/fr/')) return 'fr';
    if (p === '/es' || p.startsWith('/es/')) return 'es';
    if (p === '/de' || p.startsWith('/de/')) return 'de';
    if (p === '/it' || p.startsWith('/it/')) return 'it';
    if (p === '/nl' || p.startsWith('/nl/')) return 'nl';
    if (p === '/pl' || p.startsWith('/pl/')) return 'pl';
    if (p === '/pt-br' || p.startsWith('/pt-br/')) return 'pt-br';
    if (p === '/pt' || p.startsWith('/pt/')) return 'pt';
    if (p === '/ko' || p.startsWith('/ko/')) return 'ko';
    if (p === '/ar' || p.startsWith('/ar/')) return 'ar';
    return 'en';
  }

  const COMMON_SUBPAGES = new Set(['', 'pricing', 'channels', 'features', 'contact', 'privacy', 'terms', 'refund']);

  function getTargetUrlForLang(targetLang, currentPath) {
    const p = currentPath || (typeof window !== 'undefined' ? window.location.pathname : '/');
    const langCodes = ['fr', 'de', 'es', 'ar', 'it', 'nl', 'pt-br', 'pt', 'pl', 'ko'];
    
    let subPath = p;
    for (const code of langCodes) {
      if (p === '/' + code || p === '/' + code + '/') {
        subPath = '';
        break;
      } else if (p.startsWith('/' + code + '/')) {
        subPath = p.slice(code.length + 2);
        break;
      }
    }

    const cleanSub = subPath.replace(/^\/+|\/+$/g, '');

    if (targetLang === 'en') {
      return cleanSub ? '/' + cleanSub + '/' : '/';
    }

    if (COMMON_SUBPAGES.has(cleanSub)) {
      return cleanSub ? '/' + targetLang + '/' + cleanSub + '/' : '/' + targetLang + '/';
    }

    return '/' + targetLang + '/';
  }

  function updateSwitcherUI(lang) {
    const cfg = SUPPORTED_LANGS[lang] || SUPPORTED_LANGS.en;
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

    document.querySelectorAll('.lang-switch').forEach(sw => {
      const flagEl = sw.querySelector('.lang-flag');
      const nameEl = sw.querySelector('.lang-name');
      if (flagEl) flagEl.textContent = cfg.flag;
      if (nameEl) nameEl.textContent = cfg.name;

      sw.querySelectorAll('.lang-item').forEach(item => {
        const itemLang = item.getAttribute('data-lang');
        const isActive = itemLang === lang;
        item.classList.toggle('is-active', isActive);
        if (isActive) item.setAttribute('aria-current', 'true');
        else item.removeAttribute('aria-current');

        if (itemLang) {
          const targetUrl = getTargetUrlForLang(itemLang, currentPath);
          item.setAttribute('href', targetUrl);
        }
      });
    });

    document.querySelectorAll('.mobile-lang-item').forEach(item => {
      const itemLang = item.getAttribute('data-lang');
      const isActive = itemLang === lang;
      item.classList.toggle('is-active', isActive);
      if (itemLang) {
        const targetUrl = getTargetUrlForLang(itemLang, currentPath);
        item.setAttribute('href', targetUrl);
      }
    });
  }

  function applyLanguage(lang, shouldNavigate) {
    if (!SUPPORTED_LANGS[lang]) lang = 'en';

    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    updateSwitcherUI(lang);

    try {
      localStorage.setItem('iptv_selected_lang', lang);
      document.cookie = 'googtrans=/auto/' + lang + '; path=/;';
      document.cookie = 'googtrans=/auto/' + lang + '; path=/; domain=' + window.location.hostname + ';';
    } catch(e) {}

    window.dispatchEvent(new CustomEvent('iptv:lang-changed', { detail: { lang } }));

    if (shouldNavigate) {
      const targetUrl = getTargetUrlForLang(lang, window.location.pathname);
      const cleanTarget = targetUrl.replace(/\/$/, '') || '/';
      const cleanCurrent = window.location.pathname.replace(/\/$/, '') || '/';
      if (cleanTarget !== cleanCurrent) {
        window.location.href = targetUrl;
      }
    }
  }
  window.__setLanguage = applyLanguage;

  window.__toggleLangMenu = function(e) {
    const details = (e && e.target && e.target.closest && e.target.closest('details.lang-switch')) || document.querySelector('details.lang-switch');
    if (details) {
      if (e && e.target && (e.target.tagName === 'SUMMARY' || e.target.closest('summary'))) {
        return; // native summary click handles toggle
      }
      details.open = !details.open;
    }
  };

  function selectLanguageItem(item, e) {
    if (!item) return;
    const lang = item.getAttribute('data-lang');
    if (!lang) return;

    try {
      localStorage.setItem('iptv_selected_lang', lang);
    } catch(_) {}

    document.querySelectorAll('details.lang-switch[open]').forEach(d => d.removeAttribute('open'));

    const targetUrl = item.getAttribute('href') || getTargetUrlForLang(lang, window.location.pathname);
    const cleanTarget = targetUrl.replace(/\/$/, '') || '/';
    const cleanCurrent = window.location.pathname.replace(/\/$/, '') || '/';
    if (cleanTarget !== cleanCurrent) {
      if (e) {
        try { e.preventDefault(); } catch(_) {}
      }
      window.location.href = targetUrl;
    }
  }

  function bindLangTriggers() {
    document.querySelectorAll('details.lang-switch').forEach(d => {
      // Ensure any lingering hidden or inline style is removed
      const m = d.querySelector('.lang-menu');
      if (m) {
        m.removeAttribute('hidden');
        m.style.display = '';
      }
      d.addEventListener('toggle', () => {
        const menu = d.querySelector('.lang-menu');
        if (menu) {
          menu.removeAttribute('hidden');
          menu.style.display = '';
        }
        const trigger = d.querySelector('.lang-trigger');
        if (trigger) trigger.setAttribute('aria-expanded', String(d.open));
      });
    });
  }

  function initLanguageSwitcher() {
    const currentLang = detectCurrentLang();
    applyLanguage(currentLang, false);
    bindLangTriggers();

    if (window.__langSwitcherInitialized) return;
    window.__langSwitcherInitialized = true;

    // Delegated click listener for selecting language and closing when clicking outside
    document.addEventListener('click', (e) => {
      const item = e.target.closest('.lang-item') || e.target.closest('.mobile-lang-item');
      if (item) {
        selectLanguageItem(item, e);
        return;
      }

      // Clicked outside language switcher
      if (!e.target.closest('.lang-switch')) {
        document.querySelectorAll('details.lang-switch[open]').forEach(d => {
          d.removeAttribute('open');
          const trigger = d.querySelector('.lang-trigger');
          if (trigger) trigger.setAttribute('aria-expanded', 'false');
        });
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('details.lang-switch[open]').forEach(d => {
          d.removeAttribute('open');
          const trigger = d.querySelector('.lang-trigger');
          if (trigger) trigger.setAttribute('aria-expanded', 'false');
        });
      }
    });
  }

  function initSite() {
    try { initLanguageSwitcher(); } catch(e) { console.warn('Language switcher init warning:', e); }
    try { normalizePricingLayout(); } catch(e) { console.warn('Pricing layout warning:', e); }
    try { mobileMenu(); } catch(e) { console.warn('Mobile menu warning:', e); }
    try { faq(); } catch(e) { console.warn('FAQ warning:', e); }
    try { pricing(); } catch(e) { console.warn('Pricing warning:', e); }
    try { channels(); } catch(e) { console.warn('Channels warning:', e); }
    try { actions(); } catch(e) { console.warn('Actions warning:', e); }
  }

  // Pre-initialize language switcher immediately if elements already exist in DOM
  if (typeof document !== 'undefined') {
    try { initLanguageSwitcher(); } catch(e) {}
    try { mobileMenu(); } catch(e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSite);
  } else {
    initSite();
  }
})();
