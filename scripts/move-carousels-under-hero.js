import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const indexPath = path.join(__dirname, '..', 'Iptv The smarters Pro', 'index.html');

let html = fs.readFileSync(indexPath, 'utf8');

// Match the VOD Entertainment Hub section
const vodRegex = /<!-- HeroUI VOD Entertainment Hub[\s\S]*?<\/section>\s*/;
const vodMatch = html.match(vodRegex);

if (!vodMatch) {
  console.error('Could not find VOD Entertainment Hub section');
  process.exit(1);
}

const vodSection = vodMatch[0];

// Remove it from its current position
html = html.replace(vodRegex, '');

// Target right after the Hero section closing: line ~780:
// Target string:
const heroEndAnchor = `              <div class="hero-chip hero-chip-2" aria-hidden="true">
                <span class="hero-chip-icon" style="background: rgba(168, 85, 247, 0.15); color: #c084fc">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                </span>
                <span>
                  <span class="hero-chip-num" style="display: block">Unlimited</span>
                  <span class="hero-chip-label">Movies &amp; Series</span>
                </span>
              </div>
            </div>
          </div>
        </section>`;

const heroEndAnchorLF = heroEndAnchor.replace(/\r\n/g, '\n');

if (html.includes(heroEndAnchor)) {
  html = html.replace(heroEndAnchor, heroEndAnchor + '\n\n        ' + vodSection.trim());
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('Successfully moved carousels directly under the Hero section (CRLF)!');
} else if (html.includes(heroEndAnchorLF)) {
  html = html.replace(heroEndAnchorLF, heroEndAnchorLF + '\n\n        ' + vodSection.trim());
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('Successfully moved carousels directly under the Hero section (LF)!');
} else {
  // Try regex on hero-stage end
  const heroStageRegex = /(class="[^"]*hero-stage[^"]*"[\s\S]*?<\/section>)/;
  if (heroStageRegex.test(html)) {
    html = html.replace(heroStageRegex, `$1\n\n        ${vodSection.trim()}`);
    fs.writeFileSync(indexPath, html, 'utf8');
    console.log('Successfully moved carousels directly under the Hero section via hero-stage regex!');
  } else {
    console.error('Could not locate Hero section end tag');
  }
}
