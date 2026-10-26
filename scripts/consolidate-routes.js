import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const sourceDir = path.join(projectRoot, 'Iptv The smarters Pro');

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

console.log("Processing 67 consolidations...");

// Process each consolidated file
for (const [srcPath, destPath] of Object.entries(consolidations)) {
  const relFile = srcPath.replace(/^\//, '') + 'index.html';
  const filePath = path.join(sourceDir, relFile);
  if (!fs.existsSync(filePath)) continue;

  const targetUrl = `https://iptv-the-smarters-pro.ai.studio${destPath}`;
  const targetName = destPath.replace(/^\/products\//, '').replace(/\/$/, '').replace(/-/g, ' ');

  const redirectHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Redirecting to ${targetName} | IPTV Smarters Pro</title>
  <meta name="robots" content="noindex, follow">
  <link rel="canonical" href="${targetUrl}">
  <meta http-equiv="refresh" content="0; url=${destPath}">
  <link rel="stylesheet" href="/assets/css/product-pages.css?v=1">
  <link rel="stylesheet" href="/assets/css/theme.css?v=20260907-9">
</head>
<body style="background:#0c0a14;color:#f8fafc;font-family:system-ui,-apple-system,sans-serif;padding:40px 20px;text-align:center;">
  <div style="max-width:600px;margin:80px auto;background:#13111e;border:1px solid #2d2642;border-radius:16px;padding:36px;">
    <h1 style="font-size:24px;margin-bottom:16px;color:#a78bfa;">Topic Consolidated</h1>
    <p style="color:#94a3b8;line-height:1.6;margin-bottom:24px;">
      This topic has been consolidated into our authoritative resource for <strong>${targetName}</strong>.
    </p>
    <a href="${destPath}" style="display:inline-block;padding:12px 28px;background:linear-gradient(135deg,#7B3FE4,#5F15CD);color:#fff;text-decoration:none;border-radius:10px;font-weight:600;">
      Continue to ${targetName} →
    </a>
  </div>
</body>
</html>`;

  fs.writeFileSync(filePath, redirectHtml, 'utf8');
}

console.log("Successfully wrote redirect stubs for all 67 consolidated routes.");
