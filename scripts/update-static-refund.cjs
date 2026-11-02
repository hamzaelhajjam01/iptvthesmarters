const fs = require('fs');
const path = require('path');

const enRefundPath = path.join(__dirname, '..', 'Iptv The smarters Pro', 'refund', 'index.html');
if (fs.existsSync(enRefundPath)) {
  let html = fs.readFileSync(enRefundPath, 'utf8');

  // Replace title & descriptions
  html = html.replace(/a 3-day request window/g, 'a 7-day money-back guarantee window');
  html = html.replace(/<strong>3 days<\/strong>/g, '<strong>7 days</strong>');
  html = html.replace(/3-day window/g, '7-day window');
  html = html.replace(/via Telegram within the 3-day window/g, 'via WhatsApp at +1 (804) 280-4332 or our Contact Page within the 7-day window');

  fs.writeFileSync(enRefundPath, html, 'utf8');
  console.log('Updated English static refund page!');
}

// Update other localized refund pages
const locales = ['fr', 'de', 'es', 'it', 'nl', 'pl', 'pt', 'pt-br', 'ko', 'ar'];
locales.forEach(loc => {
  const p = path.join(__dirname, '..', 'Iptv The smarters Pro', loc, 'refund', 'index.html');
  if (fs.existsSync(p)) {
    let html = fs.readFileSync(p, 'utf8');
    html = html.replace(/3-day|3 jours|3 Tage|3 días|3 giorni|3 dagen|3 dni|3 dias|3일|3 أيام/gi, (match) => {
      if (/jour/i.test(match)) return '7 jours';
      if (/tage/i.test(match)) return '7 Tage';
      if (/días/i.test(match)) return '7 días';
      if (/giorni/i.test(match)) return '7 giorni';
      if (/dagen/i.test(match)) return '7 dagen';
      if (/dni/i.test(match)) return '7 dni';
      if (/dias/i.test(match)) return '7 dias';
      if (/일/i.test(match)) return '7일';
      if (/أيام/i.test(match)) return '7 أيام';
      return '7-day';
    });
    fs.writeFileSync(p, html, 'utf8');
    console.log(`Updated ${loc} static refund page!`);
  }
});
