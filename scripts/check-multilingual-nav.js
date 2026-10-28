import { LANGUAGES } from './multilingual-data.js';

for (const lang of LANGUAGES) {
  console.log(`Lang: ${lang.code} -> nav:`, lang.nav);
}
