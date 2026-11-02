const fs = require('fs');
const path = require('path');

const b1 = require('./i18n-ar-guides/batch1.cjs');
const b2 = require('./i18n-ar-guides/batch2.cjs');
const b3 = require('./i18n-ar-guides/batch3.cjs');
const b4 = require('./i18n-ar-guides/batch4.cjs');
const allData = { ...b1, ...b2, ...b3, ...b4 };

console.log('Total guides to update:', Object.keys(allData).length);

const arabicCallout = `<!-- HeroUI Design System: In-Content Keyword Silo Callout -->
  <div class="heroui-callout not-prose" role="region" aria-label="IPTV Smarters Pro Recommendation">
    <div class="heroui-callout-inner">
      <div class="heroui-callout-header">
        <div class="heroui-callout-icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <div class="heroui-callout-header-text">
          <span class="heroui-callout-chip">
            <span class="heroui-callout-chip-pulse" aria-hidden="true"></span>
            توصية الخبراء
          </span>
          <h3 class="heroui-callout-title">هل تبحث عن سيرفر IPTV 4K ثابت وسريع بدون تقطيع؟</h3>
        </div>
      </div>
      <p class="heroui-callout-desc">
        تجنب توقف البث وأخطاء فشل التوثيق وحجب مزودي الإنترنت. اربط تطبيقك مع <a href="/ar/pricing/">أفضل اشتراك IPTV Smarters Pro بدقة 4K</a> الذي يضم أكثر من 25,000 قناة مباشرة ومكتبة VOD ضخمة مع تفعيل فوري لكود Xtream.
      </p>
      <div class="heroui-callout-actions">
        <a href="/ar/pricing/" class="heroui-callout-btn">
          <span>استعراض باقات اشتراك 4K</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </a>
        <span class="heroui-callout-meta">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
          تفعيل فوري لكود Xtream · ضمان ثبات 99.9%
        </span>
      </div>
    </div>
  </div>`;

let updatedCount = 0;

for (const [slug, data] of Object.entries(allData)) {
  const filePath = path.join(__dirname, '..', 'Iptv The smarters Pro', 'ar', 'guides', slug, 'index.html');
  if (!fs.existsSync(filePath)) {
    console.error('File not found:', filePath);
    continue;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Build Desktop TOC
  const desktopTocHtml = `<ul class="space-y-3 text-sm" id="toc-list">\n` +
    data.toc.map(item => `                  <li>\n                    <a href="${item.href}" class="text-zinc-400 hover:text-blue-400 transition-colors line-clamp-2">${item.title}</a>\n                  </li>`).join('\n') +
    `\n                </ul>`;

  html = html.replace(/<ul class="space-y-3 text-sm" id="toc-list">[\s\S]*?<\/ul>/i, desktopTocHtml);

  // 2. Build Mobile TOC
  const mobileTocHtml = `<details class="lg:hidden bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-4 mb-10">
                <summary class="text-white font-bold text-sm uppercase tracking-wider flex items-center justify-between cursor-pointer list-none">
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open">
                      <path d="M12 7v14"></path>
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </svg>
                    المحتويات
                  </div>
                  <span class="text-zinc-500 text-xs">انقر للتوسيع</span>
                </summary>
                <ul class="space-y-3 text-sm mt-4 pt-4 border-t border-zinc-800/50">
${data.toc.map(item => `                  <li>\n                    <a href="${item.href}" class="text-zinc-400 hover:text-blue-400 transition-colors">${item.title}</a>\n                  </li>`).join('\n')}
                </ul>
              </details>`;

  html = html.replace(/<details class="lg:hidden[\s\S]*?<\/details>/i, mobileTocHtml);

  // 3. Share Guide button text
  html = html.replace(/>\s*Share Guide\s*<\/button>/i, `>مشاركة الشرح</button>`);

  // 4. Prose block replacement
  let translatedProse = data.prose;
  if (translatedProse.includes('<!-- CALLOUT_PLACEHOLDER -->')) {
    translatedProse = translatedProse.replace('<!-- CALLOUT_PLACEHOLDER -->', arabicCallout);
  }
  const proseReplacement = `<div class="prose">\n${translatedProse}\n              </div>\n              <div id="faq"`;
  html = html.replace(/<div class="prose">[\s\S]*?<\/div>\s*<div id="faq"/i, proseReplacement);

  // 5. FAQ section items replacement
  const faqItemsHtml = `<div class="space-y-6">\n` +
    data.faqs.map((faq, idx) => `                  <div class="reveal-on-scroll bg-zinc-900/30 border border-zinc-800/60 rounded-2xl p-6">
                    <h3 class="text-xl font-bold text-white mb-3" id="section-${data.toc.length + idx}">${faq.q}</h3>
                    <p class="text-zinc-400 leading-relaxed">${faq.a}</p>
                  </div>`).join('\n') +
    `\n                </div>`;

  html = html.replace(/<div id="faq"[\s\S]*?<div class="space-y-6">[\s\S]*?<\/div>\s*<\/div>/i, (match) => {
    return match.replace(/<div class="space-y-6">[\s\S]*?<\/div>/i, faqItemsHtml);
  });

  // 6. JSON-LD Schema FAQPage update
  html = html.replace(/(<script type="application\/ld\+json">[\s\S]*?<\/script>)/gi, (scriptTag) => {
    if (!scriptTag.includes('"FAQPage"')) return scriptTag;
    try {
      const jsonContent = scriptTag.replace(/<\/?script[^>]*>/gi, '');
      const parsed = JSON.parse(jsonContent);
      if (parsed['@graph']) {
        const faqGraph = parsed['@graph'].find(g => g['@type'] === 'FAQPage');
        if (faqGraph) {
          faqGraph.mainEntity = data.faqs.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.a
            }
          }));
          return `<script type="application/ld+json">\n${JSON.stringify(parsed, null, 2)}\n</script>`;
        }
      }
    } catch(e) {
      // Keep original if JSON parsing fails
    }
    return scriptTag;
  });

  fs.writeFileSync(filePath, html, 'utf8');
  updatedCount++;
}

console.log(`Successfully updated ${updatedCount}/35 Arabic guide files!`);

// Update Arabic Guides Hub (index.html)
const hubPath = path.join(__dirname, '..', 'Iptv The smarters Pro', 'ar', 'guides', 'index.html');
if (fs.existsSync(hubPath)) {
  let hubHtml = fs.readFileSync(hubPath, 'utf8');

  // Replace category badge labels
  hubHtml = hubHtml.replace(/>IPTV Basics<\/span>/g, '>أساسيات IPTV</span>');
  hubHtml = hubHtml.replace(/>Troubleshooting<\/span>/g, '>حل المشاكل</span>');
  hubHtml = hubHtml.replace(/>Setup<\/span>/g, '>التثبيت والإعداد</span>');
  hubHtml = hubHtml.replace(/>Devices<\/span>/g, '>الأجهزة والتشغيل</span>');
  hubHtml = hubHtml.replace(/>Comparisons<\/span>/g, '>مقارنات التطبيقات</span>');
  hubHtml = hubHtml.replace(/>Safety &amp; Legal<\/span>/g, '>الأمان والموثوقية</span>');
  hubHtml = hubHtml.replace(/>Safety & Legal<\/span>/g, '>الأمان والموثوقية</span>');

  // Replace "No guides found"
  hubHtml = hubHtml.replace(/No guides found/g, 'لم يتم العثور على أي شروحات');
  hubHtml = hubHtml.replace(/Try adjusting your search or filter to find what you're looking for\./g, 'جرب تعديل كلمات البحث أو اختيار تصنيف آخر للعثور على ما تبحث عنه.');

  // Replace bottom CTA
  hubHtml = hubHtml.replace(/Ready to upgrade your experience\?/g, 'هل أنت مستعد للارتقاء بتجربة المشاهدة لديك؟');
  hubHtml = hubHtml.replace(/Get instant access to over 25,000 live channels and 100,000\+ VOD titles with ultra-fast servers and 99\.9% uptime\./g, 'احصل على وصول فوري إلى أكثر من 25,000 قناة مباشرة ومكتبة تضم أكثر من 100,000 فيلم ومسلسل بدقة 4K مع سيرفرات فائقة السرعة وضمان ثبات 99.9%.');
  hubHtml = hubHtml.replace(/>Explore Pricing Plans/g, '>استعراض باقات الاشتراك');

  fs.writeFileSync(hubPath, hubHtml, 'utf8');
  console.log('Successfully updated Arabic Guides Hub page!');
}
