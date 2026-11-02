const fs = require('fs');
const path = require('path');

const termsPath = path.join(__dirname, '..', 'Iptv The smarters Pro', 'terms', 'index.html');
let html = fs.readFileSync(termsPath, 'utf8');

const newProse = `<div class="prose prose-invert max-w-none prose-p:text-zinc-400 prose-p:leading-relaxed prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight prose-strong:text-white">
                <p>
                  Welcome to IPTV Smarters Pro. By purchasing an activation, initiating a free trial, or accessing our high-speed streaming infrastructure, you acknowledge and agree to comply with the terms set forth below.
                </p>

                <h2>1. Personal Home Entertainment &amp; Device Connections</h2>
                <p>
                  Our service is provided strictly for your personal, residential entertainment use. You may install the IPTV Smarters Pro application on as many personal devices as you wish; however, the number of <strong>simultaneous active streams</strong> is governed by the connection plan you purchased (1, 2, or 3 simultaneous connections).
                </p>
                <p>
                  Attempting to stream simultaneously on more devices than your plan permits may result in temporary automated stream locking by our load balancers.
                </p>

                <h2>2. Billing, Pricing &amp; No Automatic Renewals</h2>
                <p>
                  All subscription plans (1 Month, 3 Months, 6 Months, 12 Months, and 24 Months) are billed as <strong>one-time upfront purchases</strong>.
                </p>
                <ul>
                  <li><strong>No recurring auto-debits:</strong> We do not store your full payment card details or enroll you in surprise recurring subscriptions.</li>
                  <li><strong>Manual renewal:</strong> When your subscription term approaches expiration, you will receive a friendly courtesy reminder via email or WhatsApp. Renewal is 100% voluntary.</li>
                  <li><strong>No hidden fees:</strong> The price displayed at checkout is the complete, final amount you pay.</li>
                </ul>

                <h2>3. Subscription Upgrades &amp; Adding Devices</h2>
                <p>
                  You can upgrade your subscription plan (e.g., from 1 Month to 12 Months) or increase your simultaneous device limit at any point during your active term. Simply contact our support desk via WhatsApp or our Contact Page; we will calculate any remaining prorated credit toward your upgrade so you never pay twice.
                </p>

                <h2>4. Cancellation Terms</h2>
                <p>
                  Because our services do not utilize recurring subscription billing, there are no long-term contracts, lock-ins, or cancellation penalties. If you choose not to renew, your service simply lapses naturally at the conclusion of your paid period with no further action required.
                </p>

                <h2>5. Payment Processors &amp; Security</h2>
                <p>
                  All financial transactions are conducted through Tier-1 encrypted payment gateways. We support:
                </p>
                <ul>
                  <li><strong>PayPal:</strong> With complete Buyer Protection.</li>
                  <li><strong>Major Credit &amp; Debit Cards:</strong> Visa, MasterCard, and American Express processed via SSL 256-bit bank-grade encryption.</li>
                </ul>
                <p>
                  We never sell, lease, or share customer financial data with third-party advertising brokers.
                </p>

                <h2>6. Service Availability &amp; Uptime SLA</h2>
                <p>
                  We maintain redundant server nodes with automated failover:
                </p>
                <ul>
                  <li><strong>Consumer Streaming Services:</strong> Backed by a <strong>99.9% uptime commitment</strong> with intelligent anti-freeze packet routing.</li>
                  <li><strong>Reseller Wholesale Infrastructure:</strong> Maintained on dedicated enterprise clusters backed by a <strong>99.99% service level agreement (SLA)</strong> with priority DNS propagation.</li>
                </ul>
                <p>
                  Routine infrastructure maintenance is scheduled during low-traffic off-peak hours and communicated in advance.
                </p>

                <h2>7. Customer Support &amp; Dedicated Channels</h2>
                <p>
                  We provide dedicated 24/7 technical and onboarding assistance:
                </p>
                <ul>
                  <li><strong>WhatsApp Priority Desk:</strong> +1 (804) 280-4332 (Typical response time under 3 minutes).</li>
                  <li><strong>Contact Form:</strong> Available directly via our <a href="/contact/" class="text-blue-400 hover:underline">Contact Us page</a>.</li>
                </ul>

                <h2>8. Prohibited Conduct &amp; Account Integrity</h2>
                <p>
                  To safeguard server stability and network performance for all subscribers, the following activities are strictly prohibited:
                </p>
                <ul>
                  <li>Re-streaming, rebroadcasting, or commercial resale of individual retail consumer lines.</li>
                  <li>Attempting to attack, reverse-engineer, brute-force, or overwhelm streaming API endpoints.</li>
                  <li>Publicly publishing or sharing Xtream Codes credentials on open internet forums.</li>
                </ul>
                <p>
                  Violations of these server integrity rules will result in immediate line termination without refund eligibility.
                </p>

                <h2>9. Refund Policy Reference</h2>
                <p>
                  All consumer purchases are protected under our comprehensive <strong>7-Day Money-Back Guarantee</strong> covering verified server-side faults that our technical support team is unable to remediate. For full details on qualifying conditions, please consult our official <a href="/refund/" class="text-blue-400 hover:underline">Refund Policy</a>.
                </p>
              </div>\n              </div>\n            </div>\n          </section>`;

html = html.replace(/<div class="prose[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/i, newProse);
fs.writeFileSync(termsPath, html, 'utf8');
console.log('Successfully updated Iptv The smarters Pro/terms/index.html!');
