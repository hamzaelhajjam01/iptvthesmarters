import fs from 'node:fs';

// Extract getTargetUrlForLang from site-interactions.js
const siteInteractions = fs.readFileSync('Iptv The smarters Pro/assets/js/site-interactions.js', 'utf8');
const fnCode = siteInteractions.substring(
  siteInteractions.indexOf('function getTargetUrlForLang'),
  siteInteractions.indexOf('function updateSwitcherUI')
);

const fullEval = `
const COMMON_SUBPAGES = new Set(['', 'pricing', 'channels', 'features', 'contact', 'privacy', 'terms', 'refund', 'guides']);
${fnCode}
`;

const context = {};
const fn = new Function('context', fullEval + '\ncontext.getTargetUrlForLang = getTargetUrlForLang;');
fn(context);
const getTargetUrlForLang = context.getTargetUrlForLang;

console.log('Testing getTargetUrlForLang function:');

const testCases = [
  { current: '/guides/install-iptv-smarters-pro-on-firestick/', target: 'fr', expected: '/fr/guides/install-iptv-smarters-pro-on-firestick/' },
  { current: '/guides/install-iptv-smarters-pro-on-firestick/', target: 'de', expected: '/de/guides/install-iptv-smarters-pro-on-firestick/' },
  { current: '/guides/install-iptv-smarters-pro-on-firestick/', target: 'ar', expected: '/ar/guides/install-iptv-smarters-pro-on-firestick/' },
  { current: '/fr/guides/install-iptv-smarters-pro-on-firestick/', target: 'es', expected: '/es/guides/install-iptv-smarters-pro-on-firestick/' },
  { current: '/fr/guides/install-iptv-smarters-pro-on-firestick/', target: 'en', expected: '/guides/install-iptv-smarters-pro-on-firestick/' },
  { current: '/guides/', target: 'fr', expected: '/fr/guides/' },
  { current: '/guides/', target: 'ko', expected: '/ko/guides/' },
  { current: '/fr/guides/', target: 'en', expected: '/guides/' },
  { current: '/fr/guides/', target: 'de', expected: '/de/guides/' },
  { current: '/fr/pricing/', target: 'en', expected: '/pricing/' },
  { current: '/pricing/', target: 'fr', expected: '/fr/pricing/' }
];

let failed = 0;
for (const tc of testCases) {
  const result = getTargetUrlForLang(tc.target, tc.current);
  if (result === tc.expected) {
    console.log(`✅ [PASS] from ${tc.current} to [${tc.target}] => ${result}`);
  } else {
    failed++;
    console.error(`❌ [FAIL] from ${tc.current} to [${tc.target}] => Got: ${result}, Expected: ${tc.expected}`);
  }
}

if (failed === 0) {
  console.log('\n🎉 ALL LANGUAGE SWITCHER TESTS PASSED 100%! No redirects to home.');
} else {
  console.error(`\n⚠️ ${failed} tests failed.`);
  process.exit(1);
}
