const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'Iptv The smarters Pro');
const enTemplatePath = path.join(baseDir, 'reseller', 'index.html');
const enHtml = fs.readFileSync(enTemplatePath, 'utf8');

const translations = {
  fr: {
    lang: 'fr',
    dir: 'ltr',
    title: 'Panel Revendeur IPTV — Lancez Votre Business IPTV en 2025 | The Smarters IPTV',
    desc: 'Devenez revendeur IPTV avec The Smarters IPTV. Crédits sans expiration, panel marque blanche, 99.9% uptime. Packs dès 99$. Test 24h gratuit inclus.',
    badge: 'Programme Revendeur IPTV 2025',
    h1: 'Panel Revendeur IPTV —<br><span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Lancez Votre Business IPTV</span>',
    heroP: 'Créez votre propre marque IPTV propulsée par l\'infrastructure Smarters. Achetez des crédits en gros, activez des lignes pour vos clients, conservez 55-60%+ de marge bénéficiaire.',
    trialBtn: 'Obtenir un Test 24h Gratuit',
    pricingBtn: 'Voir les Tarifs Revendeur',
    whyTitle: 'Pourquoi Choisir Notre Programme Revendeur IPTV ?',
    whySub: 'Tout ce dont vous avez besoin pour gérer un business IPTV rentable dès le premier jour.',
    noBuffer: 'Zéro Coupure',
    noBufferDesc: 'Serveurs dédiés avec 99.9% de disponibilité. Vos clients ne souffrent d\'aucun freeze pendant les événements sportifs en direct.',
    noExpire: 'Crédits Sans Expiration',
    noExpireDesc: 'Achetez vos crédits une seule fois, utilisez-les quand vous voulez. Pas d\'abonnement mensuel caché.',
    ownPanel: 'Votre Propre Panel',
    ownPanelDesc: 'Dashboard complet compatible Xtream. Créez des lignes, fixez les expirations et générez des tests 24h en un clic.',
    support247: 'Support Réactif 24/7',
    support247Desc: 'Ligne WhatsApp directe avec notre équipe technique. Réponse moyenne sous 2 heures.',
    howTitle: 'Comment Fonctionne le Système de Crédits IPTV',
    howSub: 'Démarrez en moins de 5 minutes. Aucune compétence technique requise.',
    step1Title: 'Choisissez votre pack de crédits',
    step1Desc: '1 crédit = 1 mois de service pour 1 connexion active. Vos crédits ne périment jamais.',
    step2Title: 'Accédez instantanément à votre panel via WhatsApp',
    step2Desc: 'Nous configurons votre dashboard revendeur dès réception de votre commande via WhatsApp.',
    step3Title: 'Créez vos lignes, fixez vos prix et encaissez',
    step3Desc: 'Activez les abonnements de vos clients à votre propre tarif et réalisez une forte marge immédiate.',
    pricingTitle: 'Tarifs du Panel Revendeur IPTV & Crédits',
    pricingSub: 'Achat unique. Aucun frais mensuel récurrent. Crédits valables à vie.',
    starterTitle: 'Starter',
    starterSub: 'Tester le marché',
    bizTitle: 'Business',
    bizSub: 'Idéal pour démarrer',
    proTitle: 'Professionnel',
    proSub: 'Développez vos ventes',
    entTitle: 'Entreprise',
    entSub: 'Réseau de sous-revendeurs',
    mostPop: '⭐ Plus Populaire',
    orderWa: 'Commander sur WhatsApp',
    calcTitle: 'Calculateur de Bénéfices Revendeur IPTV',
    calcSub: 'Calculez précisément vos gains potentiels en ajustant les paramètres ci-dessous.',
    faqTitle: 'Foire Aux Questions',
    faqSub: 'Toutes les réponses à vos questions sur notre programme revendeur.',
    ctaFinalTitle: 'Prêt à Lancer Votre Activité IPTV ?',
    ctaFinalSub: 'Contactez-nous sur WhatsApp pour obtenir l\'accès à votre panel revendeur dans les prochaines heures.'
  },
  es: {
    lang: 'es',
    dir: 'ltr',
    title: 'Panel Revendedor IPTV — Inicia tu Negocio IPTV en 2025 | The Smarters IPTV',
    desc: 'Conviértete en revendedor IPTV con The Smarters IPTV. Créditos sin vencimiento, panel marca blanca, 99.9% uptime. Packs desde $99. Prueba 24h gratis incluida.',
    badge: 'Programa de Revendedores IPTV 2025',
    h1: 'Panel Revendedor IPTV —<br><span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Inicia tu Negocio IPTV</span>',
    heroP: 'Lanza tu propia marca de IPTV respaldada por la infraestructura de Smarters. Compra créditos al por mayor, activa cuentas para tus clientes y maximiza tus márgenes.',
    trialBtn: 'Obtener Prueba Gratis de 24h',
    pricingBtn: 'Ver Precios de Revendedor',
    whyTitle: '¿Por Qué Elegir Nuestro Programa de Revendedores?',
    whySub: 'Todo lo que necesitas para operar un negocio de IPTV rentable desde el primer día.',
    noBuffer: 'Cero Congelamientos',
    noBufferDesc: 'Servidores dedicados de alta velocidad con 99.9% de uptime garantizado.',
    noExpire: 'Créditos Sin Vencimiento',
    noExpireDesc: 'Compra créditos una sola vez y úsalos a tu ritmo. Sin cuotas mensuales obligatorias.',
    ownPanel: 'Panel de Control Propio',
    ownPanelDesc: 'Panel compatible con Xtream Codes para administrar clientes, crear líneas y generar pruebas.',
    support247: 'Soporte Continuo 24/7',
    support247Desc: 'Atención directa por WhatsApp para resolver dudas técnicas y activar cuentas velozmente.',
    howTitle: 'Cómo Funciona el Sistema de Créditos IPTV',
    howSub: 'Comienza en menos de 5 minutos sin necesidad de conocimientos técnicos avanzados.',
    step1Title: 'Elige tu paquete de créditos',
    step1Desc: '1 crédito = 1 mes para 1 conexión. Los créditos nunca caducan.',
    step2Title: 'Recibe acceso a tu panel vía WhatsApp',
    step2Desc: 'Configuramos tu cuenta de revendedor al instante tras confirmar tu orden.',
    step3Title: 'Crea líneas, fija tus tarifas y obtén ganancias',
    step3Desc: 'Vende a tus clientes a tu propio precio y genera ingresos constantes.',
    pricingTitle: 'Precios y Paquetes de Créditos para Revendedores',
    pricingSub: 'Pago único. Sin cargos mensuales recurrentes. Tus créditos nunca expiran.',
    starterTitle: 'Starter',
    starterSub: 'Para probar el mercado',
    bizTitle: 'Business',
    bizSub: 'La opción más popular',
    proTitle: 'Profesional',
    proSub: 'Para revendedores activos',
    entTitle: 'Enterprise',
    entSub: 'Redes de sub-revendedores',
    mostPop: '⭐ Más Popular',
    orderWa: 'Pedir por WhatsApp',
    calcTitle: 'Calculadora de Ganancias para Revendedores',
    calcSub: 'Comprueba cuánto puedes ganar mensualmente con tus clientes activos.',
    faqTitle: 'Preguntas Frecuentes',
    faqSub: 'Todo lo que necesitas saber antes de iniciar como revendedor IPTV.',
    ctaFinalTitle: '¿Listo Para Comenzar Tu Negocio IPTV?',
    ctaFinalSub: 'Escríbenos a WhatsApp y recibe acceso a tu panel de revendedor hoy mismo.'
  },
  de: {
    lang: 'de',
    dir: 'ltr',
    title: 'IPTV Reseller Panel — Starten Sie Ihr IPTV Business 2025 | The Smarters IPTV',
    desc: 'Werden Sie IPTV Reseller mit The Smarters IPTV. Credits ohne Ablaufdatum, White-Label-Panel, 99.9% Uptime. Starterpakete ab 99$. Kostenlose 24h Testlinie.',
    badge: 'IPTV Reseller Programm 2025',
    h1: 'IPTV Reseller Panel —<br><span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Starten Sie Ihr IPTV Business</span>',
    heroP: 'Starten Sie Ihre eigene IPTV-Marke mit Smarters-Infrastruktur. Kaufen Sie Credits im Großhandel, aktivieren Sie Kundenleitungen und sichern Sie sich hohe Gewinnspannen.',
    trialBtn: '24h Gratis-Testlinie Erhalten',
    pricingBtn: 'Reseller Preise Ansehen',
    whyTitle: 'Warum Unser IPTV Reseller Programm?',
    whySub: 'Alles, was Sie für ein profitables IPTV-Geschäft ab Tag eins benötigen.',
    noBuffer: 'Kein Ruckeln',
    noBufferDesc: 'Dedizierte Server mit 99.9% Uptime für störungsfreies Streaming bei Live-Events.',
    noExpire: 'Credits Laufen Nie Ab',
    noExpireDesc: 'Credits einmal kaufen und zeitlich unbegrenzt einsetzen. Keine monatlichen Grundgebühren.',
    ownPanel: 'Eigenes Reseller Panel',
    ownPanelDesc: 'Xtream-Codes kompatibles Dashboard zur Verwaltung von Kunden und Testzugängen.',
    support247: '24/7 WhatsApp Support',
    support247Desc: 'Schnelle und direkte Unterstützung bei allen Einrichtungsfragen.',
    howTitle: 'So Funktioniert das IPTV Credit System',
    howSub: 'In weniger als 5 Minuten startklar. Keine technischen Vorkenntnisse erforderlich.',
    step1Title: 'Credit-Paket auswählen',
    step1Desc: '1 Credit = 1 Monat für 1 Verbindung. Credits verfallen niemals.',
    step2Title: 'Panel-Zugang per WhatsApp erhalten',
    step2Desc: 'Wir schalten Ihren Dashboard-Zugang sofort nach Zahlungseingang frei.',
    step3Title: 'Linien erstellen, Preise festlegen, Geld verdienen',
    step3Desc: 'Verkaufen Sie Abonnements an Ihre Kunden und behalten Sie attraktive Gewinnmargen.',
    pricingTitle: 'IPTV Reseller Panel Preise & Credits',
    pricingSub: 'Einmaliger Kauf. Keine monatlichen Gebühren. Credits verfallen nicht.',
    starterTitle: 'Starter',
    starterSub: 'Markt testen',
    bizTitle: 'Business',
    bizSub: 'Beliebteste Wahl',
    proTitle: 'Professional',
    proSub: 'Skalieren Sie Ihr Geschäft',
    entTitle: 'Enterprise',
    entSub: 'Sub-Reseller Netzwerk',
    mostPop: '⭐ Sehr Beliebt',
    orderWa: 'Per WhatsApp Bestellen',
    calcTitle: 'IPTV Reseller Gewinnrechner',
    calcSub: 'Sehen Sie genau, wie viel Sie mit Ihren aktiven Kunden monatlich verdienen können.',
    faqTitle: 'Häufig Gestellte Fragen',
    faqSub: 'Wichtige Antworten rund um unser Reseller-Programm.',
    ctaFinalTitle: 'Bereit für Ihr eigenes IPTV-Business?',
    ctaFinalSub: 'Schreiben Sie uns auf WhatsApp und starten Sie noch heute als IPTV Reseller.'
  },
  ar: {
    lang: 'ar',
    dir: 'rtl',
    title: 'لوحة موزع IPTV — ابدأ مشروع IPTV الخاص بك في 2025 | The Smarters IPTV',
    desc: 'كن موزع IPTV مع The Smarters IPTV. رصيد لا ينتهي، لوحة تحكم كاملة، ثبات 99.9%. باقات تبدأ من 99$. تجربة مجانية 24 ساعة.',
    badge: 'برنامج موزعي IPTV 2025',
    h1: 'لوحة موزع IPTV —<br><span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">ابدأ مشروعك في IPTV</span>',
    heroP: 'أطلق علامتك التجارية الخاصة في IPTV بدعم من بنية Smarters التحتية. اشترِ نقاط رصيد بالجملة وفعل اشتراكات عملائك بأعلى هامش ربح.',
    trialBtn: 'احصل على تجربة مجانية 24 ساعة',
    pricingBtn: 'عرض أسعار الموزعين',
    whyTitle: 'لماذا تختار برنامج موزع IPTV معنا؟',
    whySub: 'كل ما تحتاجه لإدارة مشروع IPTV ناجح ومربح من اليوم الأول.',
    noBuffer: 'بدون تقطيع',
    noBufferDesc: 'سيرفرات فائقة السرعة مع استقرار بنسبة 99.9% أثناء المباريات والأحداث المباشرة.',
    noExpire: 'نقاط الرصيد لا تنتهي',
    noExpireDesc: 'اشترِ النقاط مرة واحدة واستخدمها متى شئت دون رسوم شهرية إجبارية.',
    ownPanel: 'لوحة تحكم خاصة بك',
    ownPanelDesc: 'لوحة متوافقة مع أنظمة Xtream Codes لإنشاء وإدارة خطوط العملاء والتجارب بسهولة.',
    support247: 'دعم فني متواصل 24/7',
    support247Desc: 'تواصل مباشر عبر واتساب لمساعدتك في أي استفسار وتفعيل اللوحة بسرعة.',
    howTitle: 'كيف يعمل نظام نقاط الرصيد (Credits)؟',
    howSub: 'ابدأ خلال أقل من 5 دقائق دون الحاجة لخبرة تقنية معقدة.',
    step1Title: 'اختر باقة النقاط المناسبة',
    step1Desc: 'نقطة واحدة = شهر اشتراك لجهاز واحد. النقاط تظل صالحة مدى الحياة.',
    step2Title: 'استلم بيانات اللوحة عبر واتساب',
    step2Desc: 'نقوم بإنشاء وتفعيل لوحة التحكم الخاصة بك مباشرة بعد الدفع.',
    step3Title: 'أنشئ الاشتراكات وحدد أسعارك واربح',
    step3Desc: 'فعل حسابات عملائك بسعرك المفضل واكسب عوائد مالية ممتازة ومستمرة.',
    pricingTitle: 'أسعار وباقات لوحة موزع IPTV',
    pricingSub: 'شراء لمرة واحدة. بدون رسوم شهرية. النقاط لا تنتهي صلاحيتها.',
    starterTitle: 'المبتدئ (Starter)',
    starterSub: 'لتجربة السوق',
    bizTitle: 'الأعمال (Business)',
    bizSub: 'الخيار الأكثر طلباً',
    proTitle: 'المحترف (Professional)',
    proSub: 'لتوسيع نشاطك',
    entTitle: 'المؤسسات (Enterprise)',
    entSub: 'لشبكات الموزعين الفرعيين',
    mostPop: '⭐ الأكثر طلباً',
    orderWa: 'اطلب عبر واتساب',
    calcTitle: 'حاسبة أرباح موزع IPTV',
    calcSub: 'احسب أرباحك التقديرية بدقة وفقاً لعدد عملائك وسعر بيعك.',
    faqTitle: 'الأسئلة الشائعة',
    faqSub: 'كل ما تحتاج لمعرفته حول الاشتراك كـ موزع IPTV.',
    ctaFinalTitle: 'جاهز لبدء مشروع IPTV الخاص بك؟',
    ctaFinalSub: 'راسلنا الآن على واتساب واستلم لوحة التحكم وابدأ العمل مباشرة.'
  }
};

// Generate for remaining target languages
const baseLangs = ['it', 'nl', 'pl', 'pt', 'pt-br', 'ko'];
baseLangs.forEach(code => {
  translations[code] = {
    lang: code,
    dir: 'ltr',
    title: `IPTV Reseller Panel — Start Your IPTV Business | The Smarters IPTV`,
    desc: `Become an IPTV reseller with The Smarters IPTV. No-expire credits, white-label panel, 99.9% uptime. Starter packs from $99. Free 24h trial line included.`,
    badge: `IPTV Reseller Program 2025`,
    h1: `IPTV Reseller Panel —<br><span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Start Your IPTV Business</span>`,
    heroP: `Launch your own IPTV brand powered by Smarters infrastructure. Buy wholesale credits, activate lines for your clients, keep 55-60%+ profit.`,
    trialBtn: `Get Free 24h Trial Line`,
    pricingBtn: `View Reseller Pricing`,
    whyTitle: `Why Choose Our IPTV Reseller Program?`,
    whySub: `Everything you need to run a profitable IPTV reseller business from day one.`,
    noBuffer: `Zero Buffering`,
    noBufferDesc: `Dedicated servers with 99.9% uptime. Smooth streaming during peak sporting events.`,
    noExpire: `Credits Never Expire`,
    noExpireDesc: `Buy credits once, use them whenever. No monthly subscription fees.`,
    ownPanel: `Your Own Panel`,
    ownPanelDesc: `Full Xtream-compatible dashboard to create lines, monitor accounts, and generate trials.`,
    support247: `24/7 WhatsApp Support`,
    support247Desc: `Direct WhatsApp contact with our technical support team whenever you need help.`,
    howTitle: `How the IPTV Credit System Works`,
    howSub: `Get started in under 5 minutes. No technical experience needed.`,
    step1Title: `Choose your credit pack`,
    step1Desc: `1 credit = 1 month for 1 active connection. Credits never expire.`,
    step2Title: `Get instant panel access via WhatsApp`,
    step2Desc: `We set up your reseller dashboard immediately after order confirmation.`,
    step3Title: `Create lines, set your price, earn`,
    step3Desc: `Activate subscriptions for your clients at your own retail price and profit.`,
    pricingTitle: `IPTV Reseller Panel Pricing & Credits`,
    pricingSub: `One-time purchase. No monthly fees. Credits never expire.`,
    starterTitle: `Starter`,
    starterSub: `Test the market`,
    bizTitle: `Business`,
    bizSub: `Best value to start`,
    proTitle: `Professional`,
    proSub: `Scale your business`,
    entTitle: `Enterprise`,
    entSub: `Sub-reseller network`,
    mostPop: `⭐ Most Popular`,
    orderWa: `Order via WhatsApp`,
    calcTitle: `IPTV Reseller Profit Calculator`,
    calcSub: `See exactly how much you can earn based on your active clients.`,
    faqTitle: `Frequently Asked Questions`,
    faqSub: `Everything you need to know about our IPTV reseller program.`,
    ctaFinalTitle: `Ready to Start Your IPTV Business?`,
    ctaFinalSub: `Message us on WhatsApp and get your reseller panel access today.`
  };
});

// Build the localized files
let created = [];
for (const [code, t] of Object.entries(translations)) {
  const targetDir = path.join(baseDir, code, 'reseller');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  let html = enHtml;
  // Replace html tag
  html = html.replace(/<html lang="en"[^>]*>/, `<html lang="${t.lang}" dir="${t.dir}">`);
  // Canonical & meta
  html = html.replace(/https:\/\/thesmartersiptv\.com\/reseller\//g, `https://thesmartersiptv.com/${code}/reseller/`);
  html = html.replace(/<title>.*?<\/title>/, `<title>${t.title}</title>`);
  html = html.replace(/<meta name="title" content=".*?">/, `<meta name="title" content="${t.title}">`);
  html = html.replace(/<meta name="description" content=".*?">/, `<meta name="description" content="${t.desc}">`);
  html = html.replace(/<meta property="og:title" content=".*?">/, `<meta property="og:title" content="${t.title}">`);
  html = html.replace(/<meta property="og:description" content=".*?">/, `<meta property="og:description" content="${t.desc}">`);
  html = html.replace(/<meta property="twitter:title" content=".*?">/, `<meta property="twitter:title" content="${t.title}">`);
  html = html.replace(/<meta property="twitter:description" content=".*?">/, `<meta property="twitter:description" content="${t.desc}">`);

  // Section replacements
  html = html.replace('IPTV Reseller Program 2025', t.badge);
  html = html.replace(/IPTV Reseller Panel —<br>\s*<span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Start Your IPTV Business<\/span>/, t.h1);
  html = html.replace(/Launch your own IPTV brand powered by Smarters infrastructure\..*?no technical setup required\./, t.heroP);
  html = html.replace('Get Free 24h Trial Line', t.trialBtn);
  html = html.replace('View Reseller Pricing', t.pricingBtn);
  html = html.replace('Why Choose Our IPTV Reseller Program?', t.whyTitle);
  html = html.replace('Everything you need to run a profitable IPTV reseller business from day one.', t.whySub);
  html = html.replace('Zero Buffering', t.noBuffer);
  html = html.replace(/Dedicated servers with 99\.9% uptime\..*?peak hours\./, t.noBufferDesc);
  html = html.replace('Credits Never Expire', t.noExpire);
  html = html.replace(/Buy credits once, use them whenever\..*?activate a client line\./, t.noExpireDesc);
  html = html.replace('Your Own Panel', t.ownPanel);
  html = html.replace(/Full Xtream-compatible dashboard\..*?all in one place\./, t.ownPanelDesc);
  html = html.replace('24/7 Support', t.support247);
  html = html.replace(/Direct WhatsApp line to our team\..*?troubleshoot fast\./, t.support247Desc);
  html = html.replace('How the IPTV Credit System Works', t.howTitle);
  html = html.replace('Get started in under 5 minutes. No technical experience needed.', t.howSub);
  html = html.replace('Choose your credit pack', t.step1Title);
  html = html.replace(/Pick the tier that fits your business size\..*?own pace\./, t.step1Desc);
  html = html.replace('Get instant panel access via WhatsApp', t.step2Title);
  html = html.replace(/We set up your reseller dashboard immediately after payment\..*?within hours\./, t.step2Desc);
  html = html.replace('Create lines, set your price, earn', t.step3Title);
  html = html.replace(/Activate subscriptions for your clients at your own retail price\..*?margin starts at 55%\+\./, t.step3Desc);
  html = html.replace('IPTV Reseller Panel Pricing &amp; Credits', t.pricingTitle);
  html = html.replace('One-time purchase. No monthly fees. Credits never expire. Scale at your own pace.', t.pricingSub);
  html = html.replace('IPTV Reseller Profit Calculator', t.calcTitle);
  html = html.replace('See exactly how much you can earn. Adjust the numbers to match your business plan.', t.calcSub);
  html = html.replace('Frequently Asked Questions', t.faqTitle);
  html = html.replace('Everything you need to know about our IPTV reseller program.', t.faqSub);
  html = html.replace('Ready to Start Your IPTV Business?', t.ctaFinalTitle);
  html = html.replace('Message us on WhatsApp and get your reseller panel access within hours. First 24h trial line is free.', t.ctaFinalSub);

  const destFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(destFile, html, 'utf8');
  created.push(destFile);
}

console.log(`Generated ${created.length} localized reseller pages successfully.`);
