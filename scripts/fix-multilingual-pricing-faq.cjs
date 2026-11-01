const fs = require('fs');
const path = require('path');

const FAQ_TRANSLATIONS = {
  fr: {
    title: 'FAQ — Questions &amp; Réponses',
    subtitle: 'Tout ce que vous devez savoir sur notre service et son activation.'
  },
  it: {
    title: 'Domande Frequenti (FAQ)',
    subtitle: 'Tutto quello che devi sapere sul nostro servizio e sulla sua attivazione.'
  },
  es: {
    title: 'Preguntas Frecuentes (FAQ)',
    subtitle: 'Todo lo que necesitas saber sobre nuestro servicio y su activación.'
  },
  de: {
    title: 'Häufig Gestellte Fragen (FAQ)',
    subtitle: 'Alles, was Sie über unseren Service und die Aktivierung wissen müssen.'
  },
  ar: {
    title: 'الأسئلة الشائعة — الأسئلة والأجوبة',
    subtitle: 'كل ما تحتاج لمعرفته حول خدمتنا وتفعيلها.'
  },
  nl: {
    title: 'Veelgestelde Vragen (FAQ)',
    subtitle: 'Alles wat u moet weten over onze service en de activering ervan.'
  },
  pt: {
    title: 'Perguntas Frequentes (FAQ)',
    subtitle: 'Tudo o que precisa de saber sobre o nosso serviço e a sua ativação.'
  },
  'pt-br': {
    title: 'Perguntas Frequentes (FAQ)',
    subtitle: 'Tudo o que você precisa saber sobre o nosso serviço e sua ativação.'
  },
  pl: {
    title: 'Najczęściej Zadawane Pytania (FAQ)',
    subtitle: 'Wszystko, co musisz wiedzieć o naszej usłudze i jej aktywacji.'
  },
  ko: {
    title: '자주 묻는 질문 (FAQ)',
    subtitle: '서비스 및 활성화에 대해 알아야 할 모든 것.'
  },
  en: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about our service and activation.'
  }
};

const baseDir = path.join(__dirname, '..', 'Iptv The smarters Pro');

// 1. Update each localized pricing index.html
for (const [lang, trans] of Object.entries(FAQ_TRANSLATIONS)) {
  if (lang === 'en') continue;
  const filePath = path.join(baseDir, lang, 'pricing', 'index.html');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace the French title and subtitle
    const oldTitleRegex = /<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">FAQ — Questions &amp; Réponses<\/h2>/g;
    const oldSubRegex = /<p class="text-zinc-400">Tout ce que vous devez savoir sur notre service et son activation\.<\/p>/g;

    let modified = false;
    if (oldTitleRegex.test(content)) {
      content = content.replace(oldTitleRegex, `<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">${trans.title}</h2>`);
      modified = true;
    }
    if (oldSubRegex.test(content)) {
      content = content.replace(oldSubRegex, `<p class="text-zinc-400">${trans.subtitle}</p>`);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated pricing FAQ header in ${lang}/pricing/index.html`);
    } else {
      console.log(`No match or already updated in ${lang}/pricing/index.html`);
    }
  }
}

// 2. Update scripts/build-multilingual-ecosystem.js
const builderPath = path.join(__dirname, '..', 'scripts', 'build-multilingual-ecosystem.js');
if (fs.existsSync(builderPath)) {
  let builderContent = fs.readFileSync(builderPath, 'utf8');

  // Check if FAQ_TRANSLATIONS is already in builder
  if (!builderContent.includes('const PRICING_FAQ_HEADERS')) {
    const dictCode = `
const PRICING_FAQ_HEADERS = {
  fr: { title: 'FAQ — Questions &amp; Réponses', subtitle: 'Tout ce que vous devez savoir sur notre service et son activation.' },
  it: { title: 'Domande Frequenti (FAQ)', subtitle: 'Tutto quello che devi sapere sul nostro servizio e sulla sua attivazione.' },
  es: { title: 'Preguntas Frecuentes (FAQ)', subtitle: 'Todo lo que necesitas saber sobre nuestro service y su activación.' },
  de: { title: 'Häufig Gestellte Fragen (FAQ)', subtitle: 'Alles, was Sie über unseren Service und die Aktivierung wissen müssen.' },
  ar: { title: 'الأسئلة الشائعة — الأسئلة والأجوبة', subtitle: 'كل ما تحتاج لمعرفته حول خدمتنا وتفعيلها.' },
  nl: { title: 'Veelgestelde Vragen (FAQ)', subtitle: 'Alles wat u moet weten over onze service en de activering ervan.' },
  pt: { title: 'Perguntas Frequentes (FAQ)', subtitle: 'Tudo o que precisa de saber sobre o nosso serviço e a sua ativação.' },
  'pt-br': { title: 'Perguntas Frequentes (FAQ)', subtitle: 'Tudo o que você precisa saber sobre o nosso serviço e sua ativação.' },
  pl: { title: 'Najczęściej Zadawane Pytania (FAQ)', subtitle: 'Wszystko, co musisz wiedzieć o naszej usłudze i jej aktywacji.' },
  ko: { title: '자주 묻는 질문 (FAQ)', subtitle: '서비스 및 활성화에 대해 알아야 할 모든 것.' },
  en: { title: 'Frequently Asked Questions', subtitle: 'Everything you need to know about our service and activation.' }
};
`;
    // Insert before generatePricingPage
    builderContent = builderContent.replace('function generatePricingPage(lang) {', dictCode + '\nfunction generatePricingPage(lang) {');

    // Replace the hardcoded strings in generatePricingPage
    builderContent = builderContent.replace(
      '<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">FAQ — Questions &amp; Réponses</h2>\n          <p class="text-zinc-400">Tout ce que vous devez savoir sur notre service et son activation.</p>',
      '<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">${(PRICING_FAQ_HEADERS[lang.code] || PRICING_FAQ_HEADERS.en).title}</h2>\n          <p class="text-zinc-400">${(PRICING_FAQ_HEADERS[lang.code] || PRICING_FAQ_HEADERS.en).subtitle}</p>'
    );

    fs.writeFileSync(builderPath, builderContent, 'utf8');
    console.log('Updated scripts/build-multilingual-ecosystem.js with localized FAQ headers mapping!');
  }
}
