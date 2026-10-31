async function run() {
  const htmlRes = await fetch('https://thesmartersiptv.com/products/');
  const html = await htmlRes.text();
  
  // Find all stylesheet hrefs
  const hrefs = [];
  const linkRe = /<link[^>]+rel=["']stylesheet["'][^>]*>/gi;
  let m;
  while ((m = linkRe.exec(html)) !== null) {
    const hrefM = m[0].match(/href=["']([^"']+)["']/i);
    if (hrefM) hrefs.push(hrefM[1]);
  }
  console.log('Stylesheets in products page:', hrefs);

  for (const href of hrefs) {
    const url = href.startsWith('http') ? href : `https://thesmartersiptv.com${href}`;
    try {
      const res = await fetch(url);
      const text = await res.text();
      console.log(`\n=== ${href} (${text.length} chars) ===`);
      
      // Search for footer rules
      const re = /([^{}]*footer[^{}]*)\{([^}]*)\}/gi;
      let fm;
      while ((fm = re.exec(text)) !== null) {
        console.log('Rule:', fm[1].trim());
        console.log('  Styles:', fm[2].trim());
      }
      
      // Search for footer-grid rules
      const gre = /([^{}]*footer-grid[^{}]*)\{([^}]*)\}/gi;
      while ((fm = gre.exec(text)) !== null) {
        console.log('Grid Rule:', fm[1].trim());
        console.log('  Styles:', fm[2].trim());
      }
    } catch (e) {
      console.log('Error fetching', url, e.message);
    }
  }
}
run();
