async function testUrls() {
  const urls = [
    'http://localhost:3000/',
    'http://localhost:3000/pricing/',
    'http://localhost:3000/guides/',
    'http://localhost:3000/fr/',
    'http://localhost:3000/fr/guides/',
    'http://localhost:3000/fr/guides/iptv-smarters-pro-apk-safe-to-download/'
  ];
  for (const url of urls) {
    const res = await fetch(url);
    const html = await res.text();
    const hasStray = html.includes('> > >') || html.includes('>>');
    const headerMatch = html.match(/<nav class="hidden lg:flex[^"]*"[^>]*>([\s\S]*?)<\/nav>/);
    const links = headerMatch ? [...headerMatch[1].matchAll(/<a href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g)].map(m => m[2].trim()) : [];
    console.log(`${url} => Status: ${res.status} | Has Stray >: ${hasStray} | Menu Links (${links.length}): ${links.join(' / ')}`);
  }
}
testUrls();
