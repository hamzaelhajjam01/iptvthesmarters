import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceDir = path.join(__dirname, '..', 'Iptv The smarters Pro');

/**
 * 1. Enrich iptv-smarters-failed-to-authorize (18,100 volume / 0% KD)
 */
function enrichFailedToAuthorize() {
  const filePath = path.join(sourceDir, 'products', 'iptv-smarters-failed-to-authorize', 'index.html');
  if (!fs.existsSync(filePath)) return;

  let html = fs.readFileSync(filePath, 'utf8');

  // Enrich Copy with step-by-step troubleshooting diagnosis
  const originalCopyRegex = /<div class="kw-copy">[\s\S]*?<\/div>/;
  const enrichedCopy = `<div class="kw-copy">
        <section>
          <h2>1. Verify Portal URL & Trailing Slashes</h2>
          <p>The #1 reason for "Failed to Authorize" in IPTV Smarters Pro is entering an extra trailing slash or space at the end of the Server URL (e.g., <code>http://example.com:8080/</code> instead of <code>http://example.com:8080</code>). Ensure the protocol (http:// vs https://) matches your provider credentials exactly.</p>
        </section>
        <section>
          <h2>2. Clear App Cache & Re-Sync Xtream Codes</h2>
          <p>Corrupted cached tokens cause continuous handshake failures. On Android TV or FireStick, navigate to <strong>Settings &gt; Applications &gt; Manage Installed Applications &gt; IPTV Smarters Pro &gt; Clear Cache</strong>. Restart the app and re-enter your username and password.</p>
        </section>
        <section>
          <h2>3. Check ISP DNS Throttling & VPN Compatibility</h2>
          <p>Certain internet service providers block default IPTV authentication DNS requests. Toggle a VPN or update your device DNS settings to Google DNS (8.8.8.8 / 8.8.4.4) or Cloudflare (1.1.1.1). Our service is 100% VPN friendly and works seamlessly across all regions.</p>
        </section>
      </div>`;

  if (originalCopyRegex.test(html)) {
    html = html.replace(originalCopyRegex, enrichedCopy);
  }

  // Enrich FAQs with specific high-intent search questions
  const originalFaqRegex = /<section class="faq">[\s\S]*?<\/section>/;
  const enrichedFaq = `<section class="faq">
        <span class="eyebrow">Troubleshooting &amp; Fixes</span>
        <h2>IPTV Smarters Failed to Authorize: Detailed FAQ</h2>
        <div class="faq-list">
          <details class="faq-item" open>
            <summary class="faq-summary">
              <span class="faq-num">01</span>
              <span class="faq-q">Why does IPTV Smarters Pro say "Failed to Authorize"?</span>
              <span class="faq-chevron">⌄</span>
            </summary>
            <div class="faq-answer">
              <p>The "Failed to Authorize" error occurs when the IPTV Smarters Pro app cannot authenticate your credentials against the provider's server. Common causes include expired subscriptions, typos in the Server URL (extra spaces or slashes), incorrect username/password, or your ISP blocking the connection port.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary class="faq-summary">
              <span class="faq-num">02</span>
              <span class="faq-q">How do I fix "Failed to Authorize" on FireStick or Smart TV?</span>
              <span class="faq-chevron">⌄</span>
            </summary>
            <div class="faq-answer">
              <p>1. Go to Device Settings &gt; Applications &gt; IPTV Smarters Pro &gt; Force Stop, then Clear Cache.<br>
              2. Re-open the app and select "Login with Xtream Codes API".<br>
              3. Manually re-type the Server URL without trailing slashes or capital letters.<br>
              4. If the error persists, connect to a VPN or switch to an active premium subscription.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary class="faq-summary">
              <span class="faq-num">03</span>
              <span class="faq-q">Can an expired IPTV subscription cause an authorization error?</span>
              <span class="faq-chevron">⌄</span>
            </summary>
            <div class="faq-answer">
              <p>Yes. If your account plan expired or the provider revoked the portal credentials, the server will return an authorization failure code. Upgrading to an active IPTV Smarters Pro subscription gives you refreshed 4K login credentials within minutes.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary class="faq-summary">
              <span class="faq-num">04</span>
              <span class="faq-q">Does IPTV Smarters Pro support both Xtream Codes and M3U links?</span>
              <span class="faq-chevron">⌄</span>
            </summary>
            <div class="faq-answer">
              <p>Yes. If your Xtream Codes API continues to return authorization issues, you can choose "Load Your Playlist or File/URL" and paste your full M3U Plus playlist URL as an alternative connection method.</p>
            </div>
          </details>
        </div>
      </section>`;

  if (originalFaqRegex.test(html)) {
    html = html.replace(originalFaqRegex, enrichedFaq);
  }

  // Update JSON-LD schema
  const schemaRegex = /"@type": "FAQPage",[\s\S]*?"mainEntity": \[[^\]]+\]/;
  const newSchema = `"@type": "FAQPage",
          "@id": "https://iptvthesmarters.vercel.app/products/iptv-smarters-failed-to-authorize/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Why does IPTV Smarters Pro say Failed to Authorize?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Failed to Authorize error occurs when the IPTV Smarters app cannot authenticate your credentials with the server. Common causes include expired accounts, typos in the Server URL, or ISP port blocking."
              }
            },
            {
              "@type": "Question",
              "name": "How do I fix Failed to Authorize on FireStick or Smart TV?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Clear the IPTV Smarters app cache, re-verify the Server URL without trailing slashes, check your device time, and test with a VPN enabled if your ISP is throttling connection ports."
              }
            },
            {
              "@type": "Question",
              "name": "Can an expired IPTV subscription cause an authorization error?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. When your account expires, the authentication server rejects the handshake and displays Failed to Authorize."
              }
            }
          ]`;

  if (schemaRegex.test(html)) {
    html = html.replace(schemaRegex, newSchema);
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log('Successfully enriched iptv-smarters-failed-to-authorize with high-converting diagnostic content!');
}

/**
 * 2. Enrich best-iptv-service (14,800 volume / 0% KD)
 */
function enrichBestIptvService() {
  const filePath = path.join(sourceDir, 'products', 'best-iptv-service', 'index.html');
  if (!fs.existsSync(filePath)) return;

  let html = fs.readFileSync(filePath, 'utf8');

  const originalCopyRegex = /<div class="kw-copy">[\s\S]*?<\/div>/;
  const enrichedCopy = `<div class="kw-copy">
        <section>
          <h2>Anti-Freezing & 99.9% Server Uptime</h2>
          <p>Looking for the best IPTV service in 2026 requires looking beyond channel count. Our premium backend utilizes dynamic load balancing and anti-buffer streaming technology across dedicated global server nodes to eliminate stuttering during live sports and high-traffic events.</p>
        </section>
        <section>
          <h2>Native IPTV Smarters Pro Integration</h2>
          <p>Get instant Xtream Codes API credentials and fast-loading M3U Plus playlists. Enjoy synchronized EPG TV guides, automated channel categorization, multi-screen viewing, and 4K Ultra HD playback on all your smart devices.</p>
        </section>
        <section>
          <h2>Comprehensive Device & Multi-Room Compatibility</h2>
          <p>Whether you stream on Amazon Fire TV Stick, Samsung Tizen OS, LG webOS, Android Box, Apple TV, iOS, or PC, our service activates within minutes with 24/7 dedicated customer assistance.</p>
        </section>
      </div>`;

  if (originalCopyRegex.test(html)) {
    html = html.replace(originalCopyRegex, enrichedCopy);
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log('Successfully enriched best-iptv-service with premium commercial copy!');
}

enrichFailedToAuthorize();
enrichBestIptvService();
