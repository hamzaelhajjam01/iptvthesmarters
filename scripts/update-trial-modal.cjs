const fs = require('fs');

['Iptv The smarters Pro/assets/js/free-trial-modal.js', 'public/assets/js/free-trial-modal.js'].forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(
      '<h2 id="tm-title">Activate Your Free Trial</h2>',
      '<div class="tm-heading-wrap"><h2 id="tm-title">Activate Your 24-Hour Free Trial</h2><p style="margin:4px 0 0;font-size:13px;color:#666;">Instant 24-hour access to 25,000+ live channels & 4K VOD. No credit card required.</p></div>'
    );
    content = content.replace(
      '<button class="tm-submit" type="submit">ACTIVATE YOUR FREE TRIAL</button>',
      '<button class="tm-submit" type="submit">ACTIVATE YOUR 24H FREE TRIAL</button>'
    );
    content = content.replace(
      'submit.textContent=\'ACTIVATE YOUR FREE TRIAL\'',
      'submit.textContent=\'ACTIVATE YOUR 24H FREE TRIAL\''
    );
    content = content.replace(
      '<h2>Free Trial Activated!</h2>',
      '<h2>24-Hour Free Trial Activated!</h2>'
    );
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated:', file);
  }
});
