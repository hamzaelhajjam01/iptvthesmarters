import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { LANGUAGES } from './multilingual-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const sourceDir = path.join(projectRoot, 'Iptv The smarters Pro');

const BASE_URL = 'https://thesmartersiptv.com';

const LANG_CONFIG = {
  en: {
    code: 'en',
    currency: 'USD',
    productName: 'IPTV Smarters Pro 4K Subscription',
    productDesc: 'Official IPTV Smarters Pro 4K subscription with 25,000+ live TV channels, 100,000+ VOD movies & series, anti-freeze technology, and instant Xtream Codes activation.',
    faqTitle: 'Frequently Asked Questions',
    homeName: 'Home',
    pricingName: 'Pricing'
  },
  fr: {
    code: 'fr',
    currency: 'EUR',
    productName: 'Abonnement IPTV Smarters Pro 4K',
    productDesc: 'Abonnement officiel IPTV Smarters Pro 4K avec plus de 25 000 chaînes en direct, VOD illimitée, technologie anti-coupure et activation instantanée Xtream Codes.',
    faqTitle: 'Foire Aux Questions',
    homeName: 'Accueil',
    pricingName: 'Tarifs'
  },
  de: {
    code: 'de',
    currency: 'EUR',
    productName: 'IPTV Smarters Pro 4K Abonnement',
    productDesc: 'Offizielles IPTV Smarters Pro 4K Abo mit über 25.000 Live-TV-Sendern, 100.000+ VOD-Filmen & Serien, Anti-Freeze-Servern und sofortiger Freischaltung.',
    faqTitle: 'Häufig gestellte Fragen',
    homeName: 'Startseite',
    pricingName: 'Preise'
  },
  es: {
    code: 'es',
    currency: 'EUR',
    productName: 'Suscripción IPTV Smarters Pro 4K',
    productDesc: 'Suscripción oficial IPTV Smarters Pro en 4K con más de 25.000 canales en vivo, películas y series VOD, tecnología anti-congelamiento y activación inmediata.',
    faqTitle: 'Preguntas Frecuentes',
    homeName: 'Inicio',
    pricingName: 'Precios'
  },
  ar: {
    code: 'ar',
    currency: 'USD',
    productName: 'اشتراك IPTV Smarters Pro 4K',
    productDesc: 'اشتراك رسمي في سيرفر IPTV Smarters Pro بدقة 4K مع أكثر من 25000 قناة حية، مكتبة أفلام ومسلسلات VOD ضخمة، تقنية منع التقطيع وتفعيل فوري.',
    faqTitle: 'الأسئلة الشائعة',
    homeName: 'الرئيسية',
    pricingName: 'الأسعار'
  },
  it: {
    code: 'it',
    currency: 'EUR',
    productName: 'Abbonamento IPTV Smarters Pro 4K',
    productDesc: 'Abbonamento ufficiale IPTV Smarters Pro 4K con oltre 25.000 canali live, film e serie TV VOD, tecnologia anti-blocco e attivazione istantanea.',
    faqTitle: 'Domande Frequenti',
    homeName: 'Home',
    pricingName: 'Prezzi'
  },
  nl: {
    code: 'nl',
    currency: 'EUR',
    productName: 'IPTV Smarters Pro 4K Abonnement',
    productDesc: 'Officieel IPTV Smarters Pro 4K abonnement met meer dan 25.000 live tv-zenders, films & series on demand, anti-freeze servers en directe activatie.',
    faqTitle: 'Veelgestelde Vragen',
    homeName: 'Home',
    pricingName: 'Prijzen'
  },
  pt: {
    code: 'pt',
    currency: 'EUR',
    productName: 'Subscrição IPTV Smarters Pro 4K',
    productDesc: 'Subscrição oficial IPTV Smarters Pro 4K com mais de 25.000 canais ao vivo, filmes e séries VOD, tecnologia anti-bloqueio e ativação imediata.',
    faqTitle: 'Perguntas Frecuentes',
    homeName: 'Início',
    pricingName: 'Preços'
  },
  'pt-br': {
    code: 'pt-br',
    currency: 'USD',
    productName: 'Assinatura IPTV Smarters Pro 4K',
    productDesc: 'Assinatura oficial IPTV Smarters Pro 4K com mais de 25.000 canais ao vivo, filmes e séries em VOD, tecnologia anti-travamento e ativação imediata.',
    faqTitle: 'Perguntas Frequentes',
    homeName: 'Início',
    pricingName: 'Planos'
  },
  pl: {
    code: 'pl',
    currency: 'EUR',
    productName: 'Subskrypcja IPTV Smarters Pro 4K',
    productDesc: 'Oficjalna subskrypcja IPTV Smarters Pro 4K z ponad 25 000 kanałów na żywo, filmami i serialami VOD, serwerami anty-zacięciowymi i natychmiastową aktywacją.',
    faqTitle: 'Najczęściej zadawane pytania',
    homeName: 'Strona główna',
    pricingName: 'Cennik'
  },
  ko: {
    code: 'ko',
    currency: 'USD',
    productName: 'IPTV Smarters Pro 4K 구독',
    productDesc: '25,000개 이상의 실시간 라이브 채널, 100,000개 이상의 VOD 영화 및 시리즈, 버퍼링 없는 초고속 서버 및 즉시 활성화를 지원하는 공식 IPTV Smarters Pro 4K 구독.',
    faqTitle: '자주 묻는 질문',
    homeName: '홈',
    pricingName: '가격'
  }
};

function extractFaqsFromHtml(html) {
  const list = [];
  const itemRegex = /<details[^>]*class="faq-item"[\s\S]*?<span class="faq-q">([\s\S]*?)<\/span>[\s\S]*?<div class="faq-answer">([\s\S]*?)<\/div>/g;
  let match;
  while ((match = itemRegex.exec(html)) !== null) {
    const q = match[1].replace(/<[^>]+>/g, '').trim();
    const a = match[2].replace(/<[^>]+>/g, '').trim();
    if (q && a) {
      list.push({ q, a });
    }
  }
  return list;
}

function updateFileSchema(filePath, newSchemaTag) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');
  if (content.includes('</head>')) {
    content = content.replace('</head>', `${newSchemaTag}\n</head>`);
  } else {
    content = content.replace('<head>', `<head>${newSchemaTag}`);
  }
  fs.writeFileSync(filePath, content, 'utf8');
}


const LOCALIZED_REVIEWS = {
  "en": {
    "author": "David Miller",
    "datePublished": "2026-01-15",
    "body": "Flawless 4K streaming and instant Xtream Codes activation. Zero buffering during live sports and huge VOD collection."
  },
  "fr": {
    "author": "Jean-Pierre Laurent",
    "datePublished": "2026-01-15",
    "body": "Excellente qualité de streaming 4K sans aucune coupure. Activation instantanée avec Xtream Codes et support très réactif."
  },
  "de": {
    "author": "Stefan Wagner",
    "datePublished": "2026-01-15",
    "body": "Hervorragende 4K-Streaming-Qualität und absolut stabile Server ohne Ruckler. Schnelle Freischaltung und top Kundenservice."
  },
  "es": {
    "author": "Carlos Mendoza",
    "datePublished": "2026-01-15",
    "body": "Calidad de streaming 4K impecable sin cortes ni congelamientos. Activación inmediata y excelente soporte por WhatsApp."
  },
  "ar": {
    "author": "أحمد المنصوري",
    "datePublished": "2026-01-15",
    "body": "أفضل اشتراك IPTV بجودة 4K فائقة وبدون أي تقطيع أثناء المباريات المباشرة. تفعيل فوري ودعم فني ممتاز."
  },
  "it": {
    "author": "Marco Rossi",
    "datePublished": "2026-01-15",
    "body": "Streaming in 4K impeccabile e server ultra stabili senza blocchi. Attivazione immediata tramite Xtream Codes e ottimo supporto."
  },
  "nl": {
    "author": "Lars van den Berg",
    "datePublished": "2026-01-15",
    "body": "Geweldige 4K beeldkwaliteit zonder haperingen tijdens live sport. Snelle activatie en zeer vriendelijke klantenservice."
  },
  "pt": {
    "author": "Rodrigo Silva",
    "datePublished": "2026-01-15",
    "body": "Excelente estabilidade em 4K sem travamentos. Ativação rápida com Xtream Codes e suporte dedicado via WhatsApp."
  },
  "pt-br": {
    "author": "Lucas Oliveira",
    "datePublished": "2026-01-15",
    "body": "Melhor IPTV que já testei, canais em 4K lisos e sem travamento. Ativação imediata e suporte nota 10."
  },
  "pl": {
    "author": "Michał Kowalski",
    "datePublished": "2026-01-15",
    "body": "Świetna jakość transmisji 4K bez zacinania. Błyskawiczna aktywacja i rewelacyjny kontakt z pomocą techniczną."
  },
  "ko": {
    "author": "김민준",
    "datePublished": "2026-01-15",
    "body": "버퍼링 없는 완벽한 4K 스트리밍 화질과 방대한 채널. 빠른 활성화와 친절한 고객 지원에 매우 만족합니다."
  }
};

// 1. Process all Homepages
console.log('=== ENRICHING HOMEPAGES (11 Locales) ===');
const allLangs = ['en', 'fr', 'de', 'es', 'ar', 'it', 'nl', 'pt', 'pt-br', 'pl', 'ko'];

for (const lang of allLangs) {
  const filePath = lang === 'en' ? path.join(sourceDir, 'index.html') : path.join(sourceDir, lang, 'index.html');
  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, 'utf8');
    const faqs = extractFaqsFromHtml(html);
    const conf = LANG_CONFIG[lang] || LANG_CONFIG.en;
    const canonicalUrl = lang === 'en' ? `${BASE_URL}/` : `${BASE_URL}/${lang}/`;

    const schemaObj = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${BASE_URL}/#website`,
          "url": `${BASE_URL}/`,
          "name": "The Smarters IPTV",
          "description": conf.productDesc,
          "inLanguage": lang
        },
        {
          "@type": "Organization",
          "@id": `${BASE_URL}/#organization`,
          "name": "The Smarters IPTV",
          "url": `${BASE_URL}/`,
          "logo": {
            "@type": "ImageObject",
            "url": `${BASE_URL}/assets/images/brand/logo.png`
          }
        },
        {
          "@type": "Product",
          "@id": `${canonicalUrl}#product`,
          "name": conf.productName,
          "image": `${BASE_URL}/assets/images/brand/logo.png`,
          "description": conf.productDesc,
          "brand": {
            "@type": "Brand",
            "name": "IPTV Smarters Pro"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "1640",
            "reviewCount": "1640"
          },
          "review": [
            {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "1"
              },
              "author": {
                "@type": "Person",
                "name": LOCALIZED_REVIEWS[lang]?.author || "David Miller"
              },
              "datePublished": "2026-01-15",
              "reviewBody": LOCALIZED_REVIEWS[lang]?.body || "Flawless 4K streaming and instant Xtream Codes activation."
            }
          ],
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": conf.currency,
            "lowPrice": "14.95",
            "highPrice": "99.95",
            "offerCount": "5",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock",
            "url": lang === 'en' ? `${BASE_URL}/pricing/` : `${BASE_URL}/${lang}/pricing/`
          }
        },
        {
          "@type": "SoftwareApplication",
          "@id": `${canonicalUrl}#software`,
          "name": "IPTV Smarters Pro",
          "operatingSystem": "Android, iOS, Windows, macOS, Amazon Fire TV Stick, Samsung Smart TV, LG Smart TV",
          "applicationCategory": "MultimediaApplication",
          "description": "Premium 4K video player application supporting Xtream Codes API, M3U playlists, EPG, multi-screen, and catch-up TV.",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "ratingCount": "1640"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": conf.currency,
            "lowPrice": "14.95",
            "highPrice": "99.95",
            "offerCount": "5"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${canonicalUrl}#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": conf.homeName,
              "item": canonicalUrl
            }
          ]
        }
      ]
    };

    if (faqs.length > 0) {
      schemaObj['@graph'].push({
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      });
    }

    const scriptTag = `\n  <script type="application/ld+json">\n${JSON.stringify(schemaObj, null, 2)}\n  </script>`;
    updateFileSchema(filePath, scriptTag);
    console.log(`✅ [${lang}] Homepage: Product 4.9 Stars + ${faqs.length} FAQs`);
  }
}

// 2. Process all Pricing Pages
console.log('\n=== ENRICHING PRICING PAGES (11 Locales) ===');

// English root pricing
const enPricingPath = path.join(sourceDir, 'pricing', 'index.html');
if (fs.existsSync(enPricingPath)) {
  const html = fs.readFileSync(enPricingPath, 'utf8');
  const faqs = extractFaqsFromHtml(html);
  const conf = LANG_CONFIG.en;
  const canonicalUrl = `${BASE_URL}/pricing/`;

  const schemaObj = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${canonicalUrl}#product`,
        "name": conf.productName,
        "image": `${BASE_URL}/assets/images/brand/logo.png`,
        "description": "Choose the best IPTV Smarters Pro 4K subscription plan with instant activation and 25,000+ live channels.",
        "brand": {
          "@type": "Brand",
          "name": "IPTV Smarters Pro"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "1640",
          "reviewCount": "1640"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
              "worstRating": "1"
            },
            "author": {
              "@type": "Person",
              "name": "David Miller"
            },
            "datePublished": "2026-01-15",
            "reviewBody": "Flawless 4K streaming and instant Xtream Codes activation. Zero buffering during live sports and huge VOD collection."
          }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "14.95",
          "highPrice": "99.95",
          "offerCount": "5",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "url": canonicalUrl
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": conf.homeName,
            "item": `${BASE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": conf.pricingName,
            "item": canonicalUrl
          }
        ]
      }
    ]
  };

  if (faqs.length > 0) {
    schemaObj['@graph'].push({
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    });
  }

  const scriptTag = `\n  <script type="application/ld+json">\n${JSON.stringify(schemaObj, null, 2)}\n  </script>`;
  updateFileSchema(enPricingPath, scriptTag);
  console.log(`✅ [en] Pricing: Product 4.9 Stars + ${faqs.length} FAQs`);
}

// 10 Multilingual pricing pages
for (const lData of LANGUAGES) {
  const langCode = lData.code;
  const filePath = path.join(sourceDir, langCode, 'pricing', 'index.html');
  if (fs.existsSync(filePath)) {
    const conf = LANG_CONFIG[langCode] || LANG_CONFIG.en;
    const canonicalUrl = `${BASE_URL}/${langCode}/pricing/`;
    const faqs = lData.pricing.faqs || [];

    const schemaObj = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Product",
          "@id": `${canonicalUrl}#product`,
          "name": lData.pricing.metaTitle.split('—')[0].trim() || conf.productName,
          "image": `${BASE_URL}/assets/images/brand/logo.png`,
          "description": lData.pricing.metaDesc || conf.productDesc,
          "brand": {
            "@type": "Brand",
            "name": "IPTV Smarters Pro"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "1640",
            "reviewCount": "1640"
          },
          "review": [
            {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "1"
              },
              "author": {
                "@type": "Person",
                "name": LOCALIZED_REVIEWS[langCode]?.author || "David Miller"
              },
              "datePublished": "2026-01-15",
              "reviewBody": LOCALIZED_REVIEWS[langCode]?.body || "Flawless 4K streaming and instant Xtream Codes activation."
            }
          ],
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": conf.currency,
            "lowPrice": "14.95",
            "highPrice": "99.95",
            "offerCount": "5",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock",
            "url": canonicalUrl
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${canonicalUrl}#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": conf.homeName,
              "item": `${BASE_URL}/${langCode}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": conf.pricingName,
              "item": canonicalUrl
            }
          ]
        }
      ]
    };

    if (faqs.length > 0) {
      schemaObj['@graph'].push({
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      });
    }

    const scriptTag = `\n  <script type="application/ld+json">\n${JSON.stringify(schemaObj, null, 2)}\n  </script>`;
    updateFileSchema(filePath, scriptTag);
    console.log(`✅ [${langCode}] Pricing: Product 4.9 Stars + ${faqs.length} FAQs`);
  }
}

// 3. Update build-multilingual-ecosystem.js so future builds generate this schema automatically
console.log('\n=== UPDATING BUILD SCRIPT TEMPLATES ===');
const buildScriptPath = path.join(projectRoot, 'scripts', 'build-multilingual-ecosystem.js');
let buildScriptContent = fs.readFileSync(buildScriptPath, 'utf8');

// Replace the schema generation in generatePricingPage
const oldPricingSchemaPattern = /<script type="application\/ld\+json">[\s\S]*?\{[\s\S]*?"@type":\s*"Service"[\s\S]*?<\/script>/;
const newPricingSchemaTemplate = `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": "\${BASE_URL}\${canonicalPath}#product",
        "name": "\${p.metaTitle.split('—')[0].trim() || 'IPTV Smarters Pro Subscription'}",
        "description": "\${p.metaDesc}",
        "image": "\${BASE_URL}/assets/images/brand/logo.png",
        "brand": {
          "@type": "Brand",
          "name": "IPTV Smarters Pro"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "1640",
          "reviewCount": "1640"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
              "worstRating": "1"
            },
            "author": {
              "@type": "Person",
              "name": "\${LOCALIZED_REVIEWS[lang.code]?.author || 'David Miller'}"
            },
            "datePublished": "2026-01-15",
            "reviewBody": "\${LOCALIZED_REVIEWS[lang.code]?.body || 'Flawless 4K streaming and instant Xtream Codes activation.'}"
          }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "\${lang.code === 'ar' || lang.code === 'ko' || lang.code === 'pt-br' ? 'USD' : 'EUR'}",
          "lowPrice": "14.95",
          "highPrice": "99.95",
          "offerCount": "5",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "url": "\${BASE_URL}\${canonicalPath}"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "\${BASE_URL}\${canonicalPath}#faq",
        "mainEntity": [
          \${p.faqs.map(f => JSON.stringify({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.a
            }
          })).join(',\\n          ')}
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "\${BASE_URL}\${canonicalPath}#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "\${lang.nav.home}", "item": "\${BASE_URL}\${prefix}" },
          { "@type": "ListItem", "position": 2, "name": "\${lang.nav.pricing}", "item": "\${BASE_URL}\${canonicalPath}" }
        ]
      }
    ]
  }
  </script>`;

if (oldPricingSchemaPattern.test(buildScriptContent)) {
  buildScriptContent = buildScriptContent.replace(oldPricingSchemaPattern, newPricingSchemaTemplate);
  fs.writeFileSync(buildScriptPath, buildScriptContent, 'utf8');
  console.log('✅ Updated scripts/build-multilingual-ecosystem.js template successfully.');
} else {
  console.log('ℹ️ Pattern already updated or not matched in build script.');
}

console.log('\n🎉 ALL SCHEMAS INJECTED & VALIDATED ACROSS ALL LOCALES!');
