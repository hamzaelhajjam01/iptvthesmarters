const fs = require('fs');

const files = [
  'Iptv The smarters Pro/assets/js/support-chat.js',
  'public/assets/js/support-chat.js'
];

files.forEach(p => {
  if (!fs.existsSync(p)) return;
  let s = fs.readFileSync(p, 'utf8');
  const oldWa = /wa:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12\.04 2c-5\.46[\s\S]*?<\/svg>'/;
  const newWa = "wa:'<img src=\"/assets/images/whatsapp.png\" width=\"24\" height=\"24\" alt=\"WhatsApp\" class=\"sf3-wa-img\" style=\"width:24px;height:24px;border-radius:50%;display:inline-block;vertical-align:middle;flex-shrink:0;\">'";
  
  if (oldWa.test(s)) {
    s = s.replace(oldWa, newWa);
    if (!s.includes('#sf3-open .sf3-wa-img')) {
      s = s.replace(
        '#sf3-open svg{width:30px;height:30px;stroke-width:2.2}',
        '#sf3-open svg{width:30px;height:30px;stroke-width:2.2}#sf3-open .sf3-wa-img{width:36px!important;height:36px!important;display:block;margin:auto}'
      );
    }
    fs.writeFileSync(p, s, 'utf8');
    console.log('Successfully updated:', p);
  } else {
    console.log('Pattern not matched in:', p);
  }
});
