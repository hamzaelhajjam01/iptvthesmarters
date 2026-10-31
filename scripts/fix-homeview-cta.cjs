const fs = require('fs');

let home = fs.readFileSync('components/HomeView.tsx', 'utf8');
const oldHomeClasses = 'w-full sm:w-auto px-8 py-4 rounded-full border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 font-semibold text-sm transition-all';
const newHomeClasses = 'btn-whatsapp-green w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm text-white inline-flex items-center justify-center gap-2.5 transition-all shadow-lg';

if (home.includes(oldHomeClasses)) {
  home = home.replace(
    oldHomeClasses,
    newHomeClasses + '" style={{ backgroundColor: "#25D366", color: "#ffffff", boxShadow: "0 8px 24px rgba(37,211,102,0.45)" }}'
  );
  home = home.replace(
    '{t.hero.trial}',
    '<img src="/assets/images/whatsapp.png" width={22} height={22} alt="WhatsApp" className="w-[22px] h-[22px] rounded-full shrink-0" /><span>{t.hero.trial}</span>'
  );
  fs.writeFileSync('components/HomeView.tsx', home, 'utf8');
  console.log('✓ HomeView hero trial button updated to green WhatsApp styling');
} else {
  console.log('- HomeView hero trial already updated');
}
