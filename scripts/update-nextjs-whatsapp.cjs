const fs = require('fs');

console.log('--- Updating Next.js Components for WhatsApp ---');

// 1. components/Header.tsx
if (fs.existsSync('components/Header.tsx')) {
  let header = fs.readFileSync('components/Header.tsx', 'utf8');
  const oldSvgPattern = /<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">[\s\S]*?<\/svg>/;
  if (oldSvgPattern.test(header)) {
    header = header.replace(oldSvgPattern, '<img src="/assets/images/whatsapp.png" width={22} height={22} alt="WhatsApp" className="w-[22px] h-[22px] rounded-full shrink-0" />');
    fs.writeFileSync('components/Header.tsx', header, 'utf8');
    console.log('✓ Updated components/Header.tsx');
  } else {
    console.log('- Header.tsx SVG pattern not matched or already updated');
  }
}

// 2. components/Footer.tsx
if (fs.existsSync('components/Footer.tsx')) {
  let footer = fs.readFileSync('components/Footer.tsx', 'utf8');
  const oldFooterSvg = /<svg\s+xmlns="http:\/\/www\.w3\.org\/2000\/svg"\s+width="24"\s+height="24"\s+viewBox="0 0 24 24"\s+fill="none"\s+stroke="currentColor"\s+strokeWidth="2"\s+strokeLinecap="round"\s+strokeLinejoin="round"\s+className="lucide lucide-message-circle w-4 h-4"\s*>\s*<path d="M7\.9 20A9 9 0 1 0 4 16\.1L2 22Z" \/>\s*<\/svg>/;
  if (oldFooterSvg.test(footer)) {
    footer = footer.replace(oldFooterSvg, '<img src="/assets/images/whatsapp.png" width={18} height={18} alt="WhatsApp" className="w-[18px] h-[18px] rounded-full shrink-0" />');
    fs.writeFileSync('components/Footer.tsx', footer, 'utf8');
    console.log('✓ Updated components/Footer.tsx');
  } else {
    console.log('- Footer.tsx pattern not matched or already updated');
  }
}

// 3. components/HomeView.tsx
if (fs.existsSync('components/HomeView.tsx')) {
  let home = fs.readFileSync('components/HomeView.tsx', 'utf8');
  home = home.replace(/212600000000/g, '18042804332');
  const oldHomeBtn = /className="w-full sm:w-auto px-8 py-4 rounded-full border border-zinc-800 bg-zinc-900\/60 hover:bg-zinc-800 text-zinc-200 font-semibold text-sm transition-all"\s*>\s*Free 24h Trial/g;
  if (oldHomeBtn.test(home)) {
    home = home.replace(oldHomeBtn, 'className="btn-whatsapp-green w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm text-white inline-flex items-center justify-center gap-2.5 transition-all shadow-lg" style={{ backgroundColor: "#25D366", color: "#ffffff", boxShadow: "0 8px 24px rgba(37,211,102,0.45)" }}><img src="/assets/images/whatsapp.png" width={22} height={22} alt="WhatsApp" className="w-[22px] h-[22px] rounded-full shrink-0" /><span>Free 24h Trial</span>');
    fs.writeFileSync('components/HomeView.tsx', home, 'utf8');
    console.log('✓ Updated components/HomeView.tsx button');
  } else {
    fs.writeFileSync('components/HomeView.tsx', home, 'utf8');
    console.log('✓ Updated components/HomeView.tsx phone numbers');
  }
}

// 4. components/ChannelsView.tsx
if (fs.existsSync('components/ChannelsView.tsx')) {
  let ch = fs.readFileSync('components/ChannelsView.tsx', 'utf8');
  ch = ch.replace(/212600000000/g, '18042804332');
  const oldChBtn = /className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-block"\s*>\s*Ask Support on WhatsApp/g;
  if (oldChBtn.test(ch)) {
    ch = ch.replace(oldChBtn, 'className="btn-whatsapp-green px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-white inline-flex items-center gap-2 transition-all shadow-lg" style={{ backgroundColor: "#25D366", color: "#ffffff", boxShadow: "0 6px 20px rgba(37,211,102,0.4)" }}><img src="/assets/images/whatsapp.png" width={20} height={20} alt="WhatsApp" className="w-5 h-5 rounded-full shrink-0" /><span>Ask Support on WhatsApp</span>');
  }
  fs.writeFileSync('components/ChannelsView.tsx', ch, 'utf8');
  console.log('✓ Updated components/ChannelsView.tsx');
}

// 5. components/PricingView.tsx
if (fs.existsSync('components/PricingView.tsx')) {
  let pr = fs.readFileSync('components/PricingView.tsx', 'utf8');
  pr = pr.replace(/212600000000/g, '18042804332');
  fs.writeFileSync('components/PricingView.tsx', pr, 'utf8');
  console.log('✓ Updated components/PricingView.tsx phone numbers');
}

// 6. components/GuideDetailView.tsx
if (fs.existsSync('components/GuideDetailView.tsx')) {
  let gd = fs.readFileSync('components/GuideDetailView.tsx', 'utf8');
  gd = gd.replace(/212600000000/g, '18042804332');
  const oldGdBtn = /className="w-full sm:w-auto px-8 py-3\.5 rounded-full border border-zinc-700 bg-zinc-800\/80 hover:bg-zinc-800 text-zinc-200 font-semibold text-sm transition-all"\s*>\s*Chat on WhatsApp/g;
  if (oldGdBtn.test(gd)) {
    gd = gd.replace(oldGdBtn, 'className="btn-whatsapp-green w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm text-white inline-flex items-center justify-center gap-2.5 transition-all shadow-lg" style={{ backgroundColor: "#25D366", color: "#ffffff", boxShadow: "0 8px 24px rgba(37,211,102,0.45)" }}><img src="/assets/images/whatsapp.png" width={20} height={20} alt="WhatsApp" className="w-5 h-5 rounded-full shrink-0" /><span>Chat on WhatsApp</span>');
  }
  fs.writeFileSync('components/GuideDetailView.tsx', gd, 'utf8');
  console.log('✓ Updated components/GuideDetailView.tsx');
}

// 7. components/ContactView.tsx
if (fs.existsSync('components/ContactView.tsx')) {
  let cv = fs.readFileSync('components/ContactView.tsx', 'utf8');
  cv = cv.replace(/212600000000/g, '18042804332');
  const oldCvBtn = /className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 hover:bg-green-500 text-white font-bold text-sm transition-colors"\s*>\s*<span>Open WhatsApp Support<\/span>/g;
  if (oldCvBtn.test(cv)) {
    cv = cv.replace(oldCvBtn, 'className="btn-whatsapp-green inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all shadow-lg" style={{ backgroundColor: "#25D366", color: "#ffffff", boxShadow: "0 6px 20px rgba(37,211,102,0.4)" }}><img src="/assets/images/whatsapp.png" width={22} height={22} alt="WhatsApp" className="w-[22px] h-[22px] rounded-full shrink-0" /><span>Open WhatsApp Support</span>');
  }
  fs.writeFileSync('components/ContactView.tsx', cv, 'utf8');
  console.log('✓ Updated components/ContactView.tsx');
}

// 8. app/contact/page.tsx
if (fs.existsSync('app/contact/page.tsx')) {
  let ac = fs.readFileSync('app/contact/page.tsx', 'utf8');
  const oldAcIcon = /<div className="w-20 h-20 rounded-full bg-emerald-500\/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500\/20 transition-all">[\s\S]*?<\/div>/;
  if (oldAcIcon.test(ac)) {
    ac = ac.replace(oldAcIcon, '<div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all"><img src="/assets/images/whatsapp.png" width={56} height={56} alt="WhatsApp" className="w-14 h-14 rounded-full" /></div>');
    fs.writeFileSync('app/contact/page.tsx', ac, 'utf8');
    console.log('✓ Updated app/contact/page.tsx');
  }
}

console.log('--- Done updating Next.js components ---');
