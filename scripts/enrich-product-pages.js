import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const sourceDir = path.join(projectRoot, 'Iptv The smarters Pro');

// Load keyword map
const km = JSON.parse(fs.readFileSync(path.join(sourceDir, 'keyword-map.json'), 'utf8'));

// Retained slugs definition
const consolidations = {
  // Encoder hardware (26)
  "/products/iptv-encoders/": "/products/iptv-encoder/",
  "/products/iptv-encoder-encoders/": "/products/iptv-encoder/",
  "/products/iptv-hd-encoder/": "/products/iptv-encoder/",
  "/products/iptv-video-encoder/": "/products/iptv-encoder/",
  "/products/iptv-encoder-box/": "/products/iptv-encoder/",
  "/products/hardware-iptv-encoder/": "/products/iptv-encoder/",
  "/products/hdmi-encoder-iptv/": "/products/hdmi-encoder-for-iptv/",
  "/products/hdmi-iptv-encoder/": "/products/hdmi-encoder-for-iptv/",
  "/products/iptv-hdmi-encoder/": "/products/hdmi-encoder-for-iptv/",
  "/products/iptv-encoder-hdmi/": "/products/hdmi-encoder-for-iptv/",
  "/products/hdmi-to-iptv-encoder/": "/products/hdmi-encoder-for-iptv/",
  "/products/hdmi-iptv/": "/products/hdmi-encoder-for-iptv/",
  "/products/hdmi-to-iptv/": "/products/hdmi-encoder-for-iptv/",
  "/products/hdmi-to-iptv-converter/": "/products/hdmi-encoder-for-iptv/",
  "/products/4k-hdmi-iptv-encoder/": "/products/4k-iptv-encoder/",
  "/products/4k-hevc-iptv-encoder/": "/products/4k-iptv-encoder/",
  "/products/4k-streaming-iptv-encoder/": "/products/4k-iptv-encoder/",
  "/products/iptv-encoder-4k-hevc/": "/products/4k-iptv-encoder/",
  "/products/sdi-to-iptv-encoder/": "/products/sdi-iptv-encoder/",
  "/products/best-rack-mount-encoder-for-iptv/": "/products/rack-mount-iptv-encoder/",
  "/products/best-encoder-for-hotel-iptv/": "/products/iptv-encoder-for-hotel/",
  "/products/what-is-the-best-iptv-encoder/": "/products/best-encoder-for-iptv/",
  "/products/what-is-the-best-video-encoder-for-iptv/": "/products/best-encoder-for-iptv/",
  "/products/recommend-an-hdmi-encoder-for-iptv/": "/products/best-encoder-for-iptv/",
  "/products/suggest-a-budget-iptv-encoder/": "/products/best-encoder-for-iptv/",
  "/products/best-hdmi-to-iptv-encoder/": "/products/best-encoder-for-iptv/",
  // Troubleshooting (1)
  "/products/failed-to-authorize-iptv-smarters/": "/products/iptv-smarters-failed-to-authorize/",
  // Playlist and login (3)
  "/products/free-popular-iptv-playlist/": "/products/public-iptv-playlist/",
  "/products/https-iptv-org-github-io-iptv-index-m3u/": "/products/public-iptv-playlist/",
  "/products/m3u/": "/products/m3u-iptv/",
  // IPTV Education & Brand variations (21)
  "/products/iptv-org-2/": "/products/iptv-org/",
  "/products/iptv-org-3/": "/products/iptv-org/",
  "/products/iptv-org-iptv/": "/products/iptv-org/",
  "/products/iptv-smarters/": "/products/iptv-smarters-pro/",
  "/products/iptv-smarters-player/": "/products/iptv-smarters-pro/",
  "/products/iptv-smarters-plus/": "/products/iptv-smarters-pro/",
  "/products/smarters-iptv/": "/products/iptv-smarters-pro/",
  "/products/smarters-iptv-pro/": "/products/iptv-smarters-pro/",
  "/products/iptv-smarter/": "/products/iptv-smarters-pro/",
  "/products/ip-tv/": "/products/what-is-iptv/",
  "/products/iptv-tv/": "/products/what-is-iptv/",
  "/products/iptv-what/": "/products/what-is-iptv/",
  "/products/internet-protocol-tv/": "/products/internet-protocol-television/",
  "/products/ip-television/": "/products/internet-protocol-television/",
  "/products/xtreme-iptv/": "/products/xtremehd-iptv/",
  "/products/xtremhd-iptv/": "/products/xtremehd-iptv/",
  "/products/iptv-github/": "/products/github-iptv/",
  "/products/reddit-iptv/": "/products/iptv-reddit/",
  "/products/ip-televizia/": "/products/ip-televizija/",
  "/products/ptv-stream-player/": "/products/iptv-stream-player/",
  "/products/iptv-abonnement/": "/products/abonnement-iptv/",
  "/products/watch-nbc-live-iptv/": "/products/nbc-tv-show-live-stream-free-iptv/",
  // Plans and Providers (15)
  "/products/iptv-services/": "/iptv-services/",
  "/products/iptv-service/": "/iptv-services/",
  "/products/iptv-provider/": "/products/iptv-providers/",
  "/products/iptv-service-providers/": "/products/iptv-providers/",
  "/products/iptv-service-provider/": "/products/iptv-providers/",
  "/products/ip-tv-provider/": "/products/iptv-providers/",
  "/products/best-iptv-services/": "/products/best-iptv/",
  "/products/best-iptv-providers/": "/products/best-iptv/",
  "/products/best-iptv-provider/": "/products/best-iptv/",
  "/products/best-iptv-service/": "/products/best-iptv/",
  "/products/best-iptv-service-reddit/": "/products/best-iptv-reddit/",
  "/products/reddit-best-iptv/": "/products/best-iptv-reddit/",
  "/products/best-iptv-2025/": "/products/best-iptv-service-2026/",
  "/products/iptv-streaming-services/": "/products/iptv-streaming-service/",
  "/products/ip-tv-box/": "/products/iptv-box/"
};

// Retained items
const retainedKeywords = km.filter(k => !consolidations[k.path]);
console.log(`Enriching ${retainedKeywords.length} retained product topic pages...`);

// Helper to determine specific category and generate topic-accurate content
function generateTopicData(item) {
  const slug = item.slug;
  const kw = item.keyword;
  const cluster = item.cluster;

  // 1. Hardware Encoders
  if (cluster === 'Encoder hardware') {
    return generateEncoderContent(slug, kw);
  }

  // 2. Troubleshooting
  if (cluster === 'Troubleshooting' || slug.includes('failed-to-authorize')) {
    return generateTroubleshootingContent(slug, kw);
  }

  // 3. Playlist and Login
  if (cluster === 'Playlist and login') {
    return generatePlaylistContent(slug, kw);
  }

  // 4. Device Setup & Player Software
  if (cluster === 'Device setup' || ['tivimate-iptv-player', 'smart-iptv', 'iplay', 'iptvx', 'iptv-smart-player', 'ipexo-iptv-player-code', 'iptv-app', 'iptv-editor', 'iptv-stream-player', 'veplayer-iptv-decoder', 'playtv', 'smartiflix-iptv', 'iptv-schedule', 'iptv-smarters-pro'].includes(slug)) {
    return generatePlayerSoftwareContent(slug, kw);
  }

  // 5. Technical Education & Architecture
  if (['what-is-iptv', 'internet-protocol-television', 'is-iptv-legal', 'iptv-headend', 'headend-iptv', 'iptv-org', 'github-iptv', 'iptv-reddit', 'iptv-equipment'].includes(slug)) {
    return generateEducationContent(slug, kw);
  }

  // 6. Regional Solutions
  if (['iptv-usa', 'iptv-uk', 'iptv-france', 'indian-iptv', 'iptv-italiane-4k', 'lista-iptv-de-pago-con-canales-en-vivo', 'iptv-funzionanti', 'ip-tv-sat-n-al', 'ip-televizija', 'budget-iptv-for-uk', 'abonnement-iptv'].includes(slug)) {
    return generateRegionalContent(slug, kw);
  }

  // 7. General Plans, Comparisons & Third-Party Brand Reviews
  return generateProviderAndPlanContent(slug, kw);
}

function generateEncoderContent(slug, kw) {
  const is4K = slug.includes('4k');
  const isSDI = slug.includes('sdi');
  const isSRT = slug.includes('srt');
  const isMulticast = slug.includes('multicast');
  const isLowLatency = slug.includes('low-latency');
  const isRack = slug.includes('rack');
  const isHotel = slug.includes('hotel');
  const isH264 = slug.includes('h-264');
  const isHEVC = slug.includes('hevc');
  const isCompare = slug.includes('compare') || slug.includes('best');

  let title = `${kw} | IPTV Smarters Pro`;
  let eyebrow = "Hardware Encoding Systems";
  let h1 = kw;
  let heroDesc = `Comprehensive technical analysis of ${kw}. Understand hardware video capture, compression profiles, network streaming protocols, and how hardware video encoding strictly differs from consumer IPTV subscription playback services.`;

  let section1Title = `What ${kw} Does`;
  let section1Text = `A hardware video encoder converts physical baseband video feeds (such as HDMI from a computer, camcorder, or media box, or SDI from broadcast equipment) into compressed digital IP streams (such as MPEG-TS, SRT, RTMP, or HLS). This allows video sources to be streamed across local area networks, hotel distribution systems, or content delivery networks. This is a broadcast ingestion tool, not an IPTV subscription.`;

  let section2Title = `Technical Specifications & Protocol Compatibility`;
  let section2Text = `When selecting an encoder for ${kw}, evaluate input interfaces (HDMI 2.0 vs 3G-SDI), compression standards (H.264/AVC for universal client compatibility or H.265/HEVC for 40% bandwidth reduction), audio encoding (AAC-LC, 48kHz, up to 320kbps), and network transmission protocols (SRT for reliable internet transport, UDP multicast for zero-overhead local LAN delivery, or RTMP for CDN ingest). Target glass-to-glass latency ranges from 150ms for low-latency interactive workflows to 2 seconds for buffered distribution.`;

  let section3Title = `Hardware Encoders vs. IPTV Smarters Pro Subscriptions`;
  let section3Text = `If your goal is to generate an in-house private stream for local monitoring or campus TV, a hardware encoder is the right tool. However, if you are looking to watch live television channels, sports broadcasts, and video-on-demand on your smart TV or mobile device, you need a high-speed IPTV subscription service. Our subscription plans provide high-bitrate streaming credentials configured specifically for playback apps like IPTV Smarters Pro.`;

  let faqs = [
    {
      q: `Can I stream output from an IPTV encoder directly to IPTV Smarters Pro?`,
      a: `Yes, if your hardware encoder generates an HTTP-TS, HLS, or RTSP stream on your local network, you can add that stream URL to a custom M3U playlist file and load it directly into IPTV Smarters Pro on any smart TV or streaming box on the same subnet.`
    },
    {
      q: `What is the difference between H.264 and H.265 (HEVC) IPTV encoders?`,
      a: `H.265 (HEVC) compresses video approximately 40% to 50% more efficiently than H.264 at identical visual quality, making it the industry standard for 4K streaming. However, H.264 requires significantly less client decoding power and is universally supported by older smart TVs and legacy player hardware.`
    },
    {
      q: `Do I need a commercial IPTV subscription if I purchase a hardware encoder?`,
      a: `A hardware encoder only encodes the physical video input connected to its ports (such as a local camera, PC, or satellite box). To access international television channels, sports networks, and movie libraries, an active IPTV subscription service is required.`
    }
  ];

  if (isSRT) {
    section2Title = "SRT Protocol: Caller, Listener, and Rendezvous Modes";
    section2Text = "Secure Reliable Transport (SRT) optimizes video streaming across unpredictable public networks. It combines low latency (typically 120ms to 500ms) with AES-128/256 encryption and ARQ (Automatic Repeat reQuest) packet retransmission to recover from network packet loss without stream corruption.";
    faqs[1] = {
      q: "Why choose an SRT IPTV encoder over traditional RTMP?",
      a: "SRT provides substantially lower latency than RTMP and includes built-in packet recovery mechanisms that prevent audio dropouts and video pixelation over lossy internet connections."
    };
  } else if (is4K) {
    section2Title = "4K HEVC Bitrate and Network Throughput";
    section2Text = "Encoding 4K Ultra HD video at 60 frames per second requires dedicated hardware processing and efficient H.265/HEVC compression. Recommended encoding bitrates range from 15 Mbps to 25 Mbps for sports and fast-motion video, requiring a reliable Gigabit Ethernet connection.";
    faqs[1] = {
      q: "What internet bandwidth is required for a 4K IPTV encoder?",
      a: "A stable upload speed of at least 25 Mbps is recommended for smooth 4K 60fps streaming to prevent buffer under-runs and dropped frames."
    };
  } else if (isHotel) {
    section1Title = "In-Room Video Distribution for Hospitality";
    section1Text = "Hospitality IPTV encoders distribute satellite feeds, local television channels, and promotional hotel media over existing Cat5e/Cat6 ethernet or coaxial cabling directly to in-room smart televisions and set-top boxes, integrating seamlessly with hotel property management middleware.";
    faqs[0] = {
      q: "How does a hotel IPTV encoder interface with room televisions?",
      a: "The encoder transmits multicast UDP/RTP or HLS streams across the hotel local area network to hospitality smart TVs (Samsung LYNK, LG Pro:Centric) or commercial IPTV set-top boxes."
    };
  }

  return { title, eyebrow, h1, heroDesc, section1Title, section1Text, section2Title, section2Text, section3Title, section3Text, faqs };
}

function generateTroubleshootingContent(slug, kw) {
  let title = `IPTV Smarters Failed to Authorize — Fix & Diagnostics | IPTV Smarters Pro`;
  let eyebrow = "Troubleshooting & Diagnostics";
  let h1 = "IPTV Smarters Failed to Authorize";
  let heroDesc = `Diagnostic walkthrough for the "Failed to Authorize" error in IPTV Smarters Pro. Discover the root causes—including syntax mistakes, trailing whitespaces, expired account tokens, ISP DNS blocks, and MAC binding issues—with immediate action steps.`;

  let section1Title = `Why "Failed to Authorize" Occurs`;
  let section1Text = `The "Failed to Authorize" notification appears when the IPTV Smarters Pro client submits your login credentials to the provider portal and the server rejects the authentication handshake. Common triggers include: a mistyped username or password (case-sensitive), an extra space copied into the Server URL, protocol mismatches (entering http:// instead of https://), an expired subscription billing cycle, or your ISP filtering access to the provider portal port (e.g., ports 8080, 2095, or 5000).`;

  let section2Title = `Step-by-Step Diagnostic Checklist`;
  let section2Text = `1. Verify Server URL Syntax: Ensure there is no trailing slash at the end of the portal URL (use http://portal.example.com:8080, NOT http://portal.example.com:8080/). 2. Verify Exact Character Case: Usernames and passwords are strictly case-sensitive. Check for auto-capitalization on mobile keyboards. 3. Test on Mobile Data: Switch your phone or device from home Wi-Fi to cellular data. If authorization succeeds on cellular, your home ISP is filtering the IPTV port. 4. Verify Subscription Expiry: Contact your provider to confirm that your account remains active and unexpired.`;

  let section3Title = `Need a Reliable, Fully Authorized Connection?`;
  let section3Text = `If your previous provider has shut down or failed to renew your account, IPTV Smarters Pro offers stable, high-bitrate subscriptions with instant credential delivery and 99.9% portal uptime. All plans support standard Xtream Codes API login with zero authorization errors. Explore our comprehensive setup guides or renew your service below.`;

  let faqs = [
    {
      q: `Why does IPTV Smarters Pro say "Failed to Authorize" when my login details are correct?`,
      a: `The most common culprit is an invisible whitespace character copied at the end of the Server URL, username, or password. Re-type the credentials manually without copy-pasting, and ensure there is no trailing slash (/) at the end of the server URL.`
    },
    {
      q: `Can an ISP block cause authorization to fail?`,
      a: `Yes. Many internet service providers in the UK, Europe, and North America apply DNS filtering or port blocks to common IPTV streaming ports. Testing the connection while connected to mobile data or using a trusted VPN will confirm if your ISP is intercepting the connection.`
    },
    {
      q: `How do I know if my subscription has expired?`,
      a: `When a subscription term ends, the Xtream Codes server revokes the active token, resulting in an immediate "Failed to Authorize" message upon login. Reach out via WhatsApp support or review your billing email to confirm your account status.`
    }
  ];

  return { title, eyebrow, h1, heroDesc, section1Title, section1Text, section2Title, section2Text, section3Title, section3Text, faqs };
}

function generatePlaylistContent(slug, kw) {
  let title = `${kw} — Setup, Format & Security | IPTV Smarters Pro`;
  let eyebrow = "Playlist & Protocols";
  let h1 = kw;
  let heroDesc = `Understanding ${kw}: file structures, Xtream Codes API vs M3U playlists, public stream limitations, and how to configure high-speed private IPTV credentials in IPTV Smarters Pro.`;

  let section1Title = `Understanding ${kw} Architecture`;
  let section1Text = `An IPTV playlist contains structured links pointing to live television streams, video-on-demand files, and Electronic Program Guide (EPG) metadata. Playlists are typically formatted either as standard M3U/M3U8 text files containing stream headers (#EXTINF) or accessed dynamically through the Xtream Codes API using a Portal URL, Username, and Password.`;

  let section2Title = `Public Playlists vs. Private Subscriptions`;
  let section2Text = `Public IPTV playlists found on open forums or GitHub repositories often provide free access to public domain or local channels. However, public playlists suffer from severe bandwidth throttling, frequent token expiration, missing EPG data, and sudden downtime when stream hosts exceed their concurrent connection limits. For continuous 60fps sports and high-definition movie viewing, private authenticated subscriptions provide dedicated server bandwidth and 99.9% uptime.`;

  let section3Title = `Loading Playlists into IPTV Smarters Pro`;
  let section3Text = `To import your playlist into IPTV Smarters Pro: 1. Launch the app and select 'Add User'. 2. Choose 'Load Your Playlist or File/URL' for M3U playlists, or 'Login with Xtream Codes API' for portal credentials. 3. Enter your details and click 'Add User'. The app will automatically categorize channels, fetch the channel guide, and prepare your on-demand library.`;

  let faqs = [
    {
      q: `Why do public IPTV playlists stop working after a short period?`,
      a: `Public playlists share stream URLs among thousands of simultaneous users. When server bandwidth caps are reached, providers automatically terminate the stream tokens or block unauthorized external referrers.`
    },
    {
      q: `What is the difference between an M3U URL and Xtream Codes API?`,
      a: `Xtream Codes API uses a structured database connection that automatically syncs live TV categories, VOD movie posters, and program guides without needing to re-download large text files. M3U is a flat playlist file that requires manual refreshing.`
    },
    {
      q: `Is it safe to use IPTV Smarters Pro with private playlist credentials?`,
      a: `Yes. IPTV Smarters Pro operates locally on your device and does not share your private credentials with third parties. Always use credentials provided directly by your verified subscription service.`
    }
  ];

  return { title, eyebrow, h1, heroDesc, section1Title, section1Text, section2Title, section2Text, section3Title, section3Text, faqs };
}

function generatePlayerSoftwareContent(slug, kw) {
  let title = `${kw} — Setup & Subscription Compatibility | IPTV Smarters Pro`;
  let eyebrow = "Player Applications & Compatibility";
  let h1 = kw;
  let heroDesc = `Learn how ${kw} integrates with IPTV Smarters Pro compatible subscriptions. Discover installation tips, player capabilities, format support, and setup instructions across all major streaming devices.`;

  let section1Title = `About ${kw}`;
  let section1Text = `${kw} is a media playback application designed to render IPTV streams, EPG schedules, and on-demand video libraries on client devices like Android TV, Firestick, Apple TV, Smart TVs, and PCs. It is important to recognize that player applications do not supply content; they require an active IPTV subscription playlist or Xtream Codes login to access live television and movies.`;

  let section2Title = `Features & Configuration Options`;
  let section2Text = `Popular player features include multi-screen display (watching multiple sports games simultaneously), hardware video acceleration (switching between ExoPlayer, VLC, or native decoders), custom channel group management, and automated EPG synchronization. Our IPTV subscription credentials are 100% compatible with ${kw}, providing instant access via Xtream Codes API or M3U8 URLs.`;

  let section3Title = `Activating Your Subscription on ${kw}`;
  let section3Text = `To connect your IPTV subscription to ${kw}: 1. Open the application settings and choose 'Add Playlist' or 'Xtream Codes'. 2. Enter the Server URL, Username, and Password sent to your email after ordering. 3. Allow the player to download channel bouquets and EPG schedules. Enjoy buffer-free high-definition entertainment across all your devices.`;

  let faqs = [
    {
      q: `Can I use my IPTV Smarters Pro subscription credentials on ${kw}?`,
      a: `Yes. Our subscription plans provide standard Xtream Codes API parameters (Server URL, Port, Username, and Password) as well as M3U playlist URLs, which are fully compatible with ${kw} and all major player applications.`
    },
    {
      q: `Does ${kw} include free channels or movies?`,
      a: `No. ${kw} is strictly a software video player interface. It does not host, broadcast, or sell media content. You must connect an active subscription playlist from a reliable IPTV provider to watch programming.`
    },
    {
      q: `How many devices can stream simultaneously?`,
      a: `Your simultaneous device limit depends on the subscription plan you select during checkout (1, 2, or 3 concurrent connections). Each connected device can run any compatible player app on your home network.`
    }
  ];

  return { title, eyebrow, h1, heroDesc, section1Title, section1Text, section2Title, section2Text, section3Title, section3Text, faqs };
}

function generateEducationContent(slug, kw) {
  let title = `${kw} — Technology, Legal & Architecture Guide | IPTV Smarters Pro`;
  let eyebrow = "Technology & Education";
  let h1 = kw;
  let heroDesc = `In-depth technical and architectural guide covering ${kw}. Discover how Internet Protocol Television works, underlying streaming protocols, headend infrastructure, legality frameworks, and open-source community standards.`;

  let section1Title = `Understanding ${kw}`;
  let section1Text = `Internet Protocol Television (IPTV) is the delivery of television programming and video content over internet protocol networks rather than through legacy terrestrial broadcast, satellite dishes, or cable TV lines. Content is encoded into digital packets and delivered via unicast (on-demand and OTT) or multicast (private network live broadcasts) to connected client devices.`;

  let section2Title = `System Architecture & Delivery Infrastructure`;
  let section2Text = `An enterprise IPTV architecture comprises three core tiers: 1. Ingestion & Headend: Satellite dishes and optical fiber ingest video signals into hardware encoders. 2. Middleware & CDN: Server clusters authenticate subscriber sessions, manage channel packages, and distribute cache-friendly HLS or MPEG-TS video chunks across edge nodes. 3. Client Playback: Smart TV and set-top box player software (like IPTV Smarters Pro) decode and render the streams.`;

  let section3Title = `Quality Standards & Subscription Performance`;
  let section3Text = `Premium IPTV services eliminate buffering through anti-freeze server algorithms, redundant multi-region hosting, and high-bitrate 60fps video streams. Whether you are researching technical concepts or looking for an ultra-fast home entertainment service, IPTV Smarters Pro combines top-tier infrastructure with affordable multi-device pricing.`;

  let faqs = [
    {
      q: `How does IPTV differ from traditional cable or satellite TV?`,
      a: `Traditional television broadcasts all channels simultaneously over RF frequencies, requiring specialized tuners. IPTV delivers only the channel you request directly over your broadband connection, providing higher flexibility, video-on-demand integration, and multi-device portability.`
    },
    {
      q: `Is IPTV legal to use?`,
      a: `Yes, IPTV is a recognized and widely adopted technology standard used by telecom providers worldwide. Legality depends on whether the service provider holds appropriate distribution licensing for the content being transmitted. Always choose verified, reputable services.`
    },
    {
      q: `What internet connection speed do I need for IPTV?`,
      a: `For standard high-definition (1080p) streams, a stable download speed of 10 to 15 Mbps is recommended. For 4K Ultra HD and 60fps live sports, a connection speed of 25 to 30 Mbps or higher ensures uninterrupted streaming.`
    }
  ];

  return { title, eyebrow, h1, heroDesc, section1Title, section1Text, section2Title, section2Text, section3Title, section3Text, faqs };
}

function generateRegionalContent(slug, kw) {
  let title = `${kw} — Channels, Setup & Plans | IPTV Smarters Pro`;
  let eyebrow = "Regional Solutions & Channels";
  let h1 = kw;
  let heroDesc = `Explore ${kw}: high-definition local channel bouquets, live regional sports coverage, low-latency CDN servers, and multi-device setup instructions from IPTV Smarters Pro.`;

  let section1Title = `Regional Entertainment & Sports Coverage for ${kw}`;
  let section1Text = `Our regional IPTV packages provide extensive live television coverage tailored for ${kw}. Subscribers enjoy full access to national networks, regional news affiliates, premium cinema channels, and comprehensive live sports packages with high-bitrate 50/60fps feeds and minimal broadcast delay.`;

  let section2Title = `Optimized Server Routing & ISP Stability`;
  let section2Text = `To guarantee smooth playback without buffering during peak evening hours or major sporting events, our infrastructure utilizes local Content Delivery Network (CDN) edge servers located close to your region. This minimizes packet latency and bypasses ISP throttling through encrypted, standard HTTP/HTTPS transport.`;

  let section3Title = `Multi-Device Access & Instant Activation`;
  let section3Text = `Watch your favorite regional channels on any smart TV (Samsung, LG, Android TV), Amazon Firestick, Apple TV, iPhone, Android smartphone, or Windows PC. Select your preferred subscription duration below, receive instant login credentials via WhatsApp, and start streaming within minutes.`;

  let faqs = [
    {
      q: `Does this plan include local and regional channels for ${kw}?`,
      a: `Yes, our channel packages include comprehensive regional channel bouquets, national networks, local news affiliates, and major regional sports channels in full high definition.`
    },
    {
      q: `Will my internet provider throttle or block ${kw} streams?`,
      a: `Our servers utilize standard HTTPS ports and anti-freeze caching to avoid common ISP throttling. If your local ISP applies strict filters, our service is 100% compatible with standard VPN services.`
    },
    {
      q: `Can I test the channels before committing to an annual plan?`,
      a: `Yes! We offer a 1-month plan as well as free trial options so you can test channel quality, EPG accuracy, and server stability on your own devices before choosing a longer duration.`
    }
  ];

  return { title, eyebrow, h1, heroDesc, section1Title, section1Text, section2Title, section2Text, section3Title, section3Text, faqs };
}

function generateProviderAndPlanContent(slug, kw) {
  let title = `${kw} — Review, Features & Plans | IPTV Smarters Pro`;
  let eyebrow = "IPTV Solutions & Plans";
  let h1 = kw;
  let heroDesc = `Detailed guide and evaluation of ${kw}. Discover channel selections, anti-freeze streaming technology, device compatibility, transparent pricing, and instant setup with IPTV Smarters Pro.`;

  let section1Title = `Evaluating ${kw} for 2026`;
  let section1Text = `When searching for ${kw}, viewers seek reliable server uptime, minimal channel buffering, accurate Electronic Program Guides (EPG), and responsive customer support. The modern IPTV landscape requires providers to maintain robust server redundancy and high-bitrate 60fps sports streams rather than bloated, unverified channel counts.`;

  let section2Title = `Why Viewers Choose IPTV Smarters Pro`;
  let section2Text = `IPTV Smarters Pro provides premium access to thousands of live international channels, extensive 4K/FHD movie and TV series libraries, and 99.9% uptime. Supported across all major platforms—from Firestick and Android TV to Apple TV, Samsung Tizen, LG webOS, and Windows—our service delivers pure plug-and-play simplicity with Xtream Codes API and M3U playlists.`;

  let section3Title = `Simple, Transparent Pricing with No Hidden Fees`;
  let section3Text = `Choose from 1, 3, 6, 12, or 24-month subscription plans with flexible device concurrency (1, 2, or 3 simultaneous screens). Complete your order via our automated WhatsApp concierge for instant payment verification and rapid email delivery of your private credentials.`;

  let faqs = [
    {
      q: `How does IPTV Smarters Pro compare to other ${kw} alternatives?`,
      a: `IPTV Smarters Pro focuses on stream quality, high-bitrate 60fps live sports, and verified 99.9% server stability. Unlike overloaded low-cost servers, our private CDN infrastructure prevents buffering during major sporting events.`
    },
    {
      q: `What login format will I receive for my subscription?`,
      a: `You will receive complete Xtream Codes API credentials (Server URL, Port, Username, and Password) as well as an M3U8 playlist URL, allowing you to connect on any player application of your choice.`
    },
    {
      q: `What should I do if I need assistance setting up my device?`,
      a: `Our support team is available 24/7 via WhatsApp and email to walk you through installation, playlist loading, or network troubleshooting on any compatible device.`
    }
  ];

  return { title, eyebrow, h1, heroDesc, section1Title, section1Text, section2Title, section2Text, section3Title, section3Text, faqs };
}

// Now iterate over each retained keyword page and update its HTML
for (const item of retainedKeywords) {
  const relFile = item.path.replace(/^\//, '') + 'index.html';
  const filePath = path.join(sourceDir, relFile);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    continue;
  }

  let html = fs.readFileSync(filePath, 'utf8');
  const tData = generateTopicData(item);

  // 1. Update Title and Meta Description
  html = html.replace(/<title>.*?<\/title>/i, `<title>${tData.title}</title>`);
  html = html.replace(/<meta name="description" content=".*?">/i, `<meta name="description" content="${tData.heroDesc.replace(/"/g, '&quot;')}">`);
  html = html.replace(/<meta property="og:title" content=".*?">/i, `<meta property="og:title" content="${tData.title}">`);
  html = html.replace(/<meta property="og:description" content=".*?">/i, `<meta property="og:description" content="${tData.heroDesc.replace(/"/g, '&quot;')}">`);

  // 2. Update Hero Section
  html = html.replace(/<section class="kw-hero">[\s\S]*?<\/section>/i, `<section class="kw-hero"><span class="eyebrow">${tData.eyebrow}</span><h1>${tData.h1}</h1><p>${tData.heroDesc}</p><div class="hero-actions"><a href="#plans">View plans</a><a href="/contact/">Contact support</a></div></section>`);

  // 3. Update Copy Section (<div class="kw-copy">)
  const newCopy = `<div class="kw-copy">
<section>
  <h2>${tData.section1Title}</h2>
  <p>${tData.section1Text}</p>
</section>
<section>
  <h2>${tData.section2Title}</h2>
  <p>${tData.section2Text}</p>
</section>
<section>
  <h2>${tData.section3Title}</h2>
  <p>${tData.section3Text}</p>
</section>
</div>`;
  html = html.replace(/<div class="kw-copy">[\s\S]*?<\/div>/i, newCopy);

  // 4. Update FAQ Section (<section class="faq">)
  const newFaq = `<section class="faq"><span class="eyebrow">Questions & Answers</span><h2>${tData.h1} FAQ</h2><div class="faq-list">
<details class="faq-item"><summary class="faq-summary"><span class="faq-num">01</span><span class="faq-q">${tData.faqs[0].q}</span><span class="faq-chevron">⌄</span></summary><div class="faq-answer"><p>${tData.faqs[0].a}</p></div></details>
<details class="faq-item"><summary class="faq-summary"><span class="faq-num">02</span><span class="faq-q">${tData.faqs[1].q}</span><span class="faq-chevron">⌄</span></summary><div class="faq-answer"><p>${tData.faqs[1].a}</p></div></details>
<details class="faq-item"><summary class="faq-summary"><span class="faq-num">03</span><span class="faq-q">${tData.faqs[2].q}</span><span class="faq-chevron">⌄</span></summary><div class="faq-answer"><p>${tData.faqs[2].a}</p></div></details>
</div></section>`;
  html = html.replace(/<section class="faq">[\s\S]*?<\/section>/i, newFaq);

  // 5. Update JSON-LD FAQPage schema in the document head
  const canonicalUrl = `https://thesmartersiptv.com${item.path}`;
  const schemaObj = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        "url": canonicalUrl,
        "name": tData.title,
        "description": tData.heroDesc,
        "inLanguage": "en"
      },
      {
        "@type": "Service",
        "name": "IPTV Smarters Pro subscription",
        "serviceType": "IPTV subscription",
        "provider": {
          "@type": "Organization",
          "name": "IPTV Smarters Pro",
          "url": "https://thesmartersiptv.com"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "14.95",
          "highPrice": "99.95",
          "offerCount": "5",
          "availability": "https://schema.org/InStock",
          "url": canonicalUrl
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://thesmartersiptv.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Products",
            "item": "https://thesmartersiptv.com/products/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": item.keyword,
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": tData.faqs[0].q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": tData.faqs[0].a
            }
          },
          {
            "@type": "Question",
            "name": tData.faqs[1].q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": tData.faqs[1].a
            }
          },
          {
            "@type": "Question",
            "name": tData.faqs[2].q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": tData.faqs[2].a
            }
          }
        ]
      }
    ]
  };

  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, `<script type="application/ld+json">${JSON.stringify(schemaObj)}</script>`);

  fs.writeFileSync(filePath, html, 'utf8');
}

console.log(`Successfully enriched all ${retainedKeywords.length} retained product pages!`);
process.exit(0);
