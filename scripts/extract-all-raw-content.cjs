const fs = require('fs');
const path = require('path');

const slugs = JSON.parse(fs.readFileSync('scripts/extracted-all-35-cards.json', 'utf8')).map(c => c.slug);
const allGuidesData = {};

slugs.forEach(slug => {
  const p = path.join('Iptv The smarters Pro', 'guides', slug, 'index.html');
  if (!fs.existsSync(p)) return;
  const html = fs.readFileSync(p, 'utf8');

  // TOC links
  const tocMatch = html.match(/<ul class="space-y-3 text-sm" id="toc-list">([\s\S]*?)<\/ul>/i);
  const tocItems = [];
  if (tocMatch) {
    const liMatches = tocMatch[1].match(/<a href="([^"]+)"[^>]*>([^<]+)<\/a>/gi) || [];
    liMatches.forEach(li => {
      const m = li.match(/<a href="([^"]+)"[^>]*>([^<]+)<\/a>/i);
      if (m) tocItems.push({ href: m[1], text: m[2].trim() });
    });
  }

  // Prose: match everything from <div class="prose"> up to <div id="faq"
  const proseMatch = html.match(/<div class="prose">([\s\S]*?)<\/div>\s*<div id="faq"/i);
  let proseHtml = proseMatch ? proseMatch[1].trim() : '';
  // remove the callout box from prose to keep pure content
  proseHtml = proseHtml.replace(/<!-- HeroUI Design System: In-Content Keyword Silo Callout -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, '<!-- CALLOUT_PLACEHOLDER -->');

  // FAQs
  const faqMatch = html.match(/<div id="faq"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i);
  const faqItems = [];
  if (faqMatch) {
    const qMatches = faqMatch[0].match(/<h3 class="text-xl font-bold text-white mb-3"[^>]*>([\s\S]*?)<\/h3>\s*<p class="text-zinc-400 leading-relaxed">([\s\S]*?)<\/p>/gi) || [];
    qMatches.forEach(q => {
      const qm = q.match(/<h3 class="text-xl font-bold text-white mb-3"[^>]*>([\s\S]*?)<\/h3>\s*<p class="text-zinc-400 leading-relaxed">([\s\S]*?)<\/p>/i);
      if (qm) {
        faqItems.push({
          question: qm[1].replace(/<[^>]+>/g, '').trim(),
          answer: qm[2].replace(/<[^>]+>/g, '').trim()
        });
      }
    });
  }

  allGuidesData[slug] = {
    slug,
    toc: tocItems,
    prose: proseHtml,
    faqs: faqItems
  };
});

fs.writeFileSync('scripts/extracted-all-35-raw-content.json', JSON.stringify(allGuidesData, null, 2), 'utf8');
console.log('Saved 35 guides raw content correctly.');
