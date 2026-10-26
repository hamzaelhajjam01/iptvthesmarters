const res = await fetch('http://localhost:3000');
const html = await res.text();
const matches = [...html.matchAll(/(?:src|href)=["']([^"']+)["']/g)].map(m => m[1]);
const localAssets = [...new Set(matches.filter(u => u.startsWith('/') || u.startsWith('assets/')))];
console.log('Unique local links/assets found:', localAssets.length);

let broken = 0;
for (const a of localAssets) {
  const url = 'http://localhost:3000' + (a.startsWith('/') ? a : '/' + a);
  try {
    const r = await fetch(url);
    if (r.status >= 400) {
      console.log(`[BROKEN ${r.status}] ${a}`);
      broken++;
    }
  } catch (err) {
    console.log(`[ERR] ${a}: ${err.message}`);
    broken++;
  }
}
console.log(`Done. Broken items: ${broken}`);
