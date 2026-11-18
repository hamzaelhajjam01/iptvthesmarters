import { createServer } from 'node:http';
import { parse } from 'node:url';
import next from 'next';

process.on('uncaughtException', (err) => {
  console.error('Server uncaughtException:', err);
});

process.on('unhandledRejection', (reason) => {
  console.error('Server unhandledRejection:', reason);
});

const dev = process.env.NODE_ENV !== 'production';
const hostname = '0.0.0.0';
const port = parseInt(process.env.PORT || '3000', 10);

const CONSOLIDATION_REDIRECTS = {
  // Encoder hardware
  '/products/iptv-encoders/': '/products/iptv-encoder/',
  '/products/iptv-encoder-encoders/': '/products/iptv-encoder/',
  '/products/iptv-hd-encoder/': '/products/iptv-encoder/',
  '/products/iptv-video-encoder/': '/products/iptv-encoder/',
  '/products/iptv-encoder-box/': '/products/iptv-encoder/',
  '/products/hardware-iptv-encoder/': '/products/iptv-encoder/',
  '/products/hdmi-encoder-iptv/': '/products/hdmi-encoder-for-iptv/',
  '/products/hdmi-iptv-encoder/': '/products/hdmi-encoder-for-iptv/',
  '/products/iptv-hdmi-encoder/': '/products/hdmi-encoder-for-iptv/',
  '/products/iptv-encoder-hdmi/': '/products/hdmi-encoder-for-iptv/',
  '/products/hdmi-to-iptv-encoder/': '/products/hdmi-encoder-for-iptv/',
  '/products/hdmi-iptv/': '/products/hdmi-encoder-for-iptv/',
  '/products/hdmi-to-iptv/': '/products/hdmi-encoder-for-iptv/',
  '/products/hdmi-to-iptv-converter/': '/products/hdmi-encoder-for-iptv/',
  '/products/4k-hdmi-iptv-encoder/': '/products/4k-iptv-encoder/',
  '/products/4k-hevc-iptv-encoder/': '/products/4k-iptv-encoder/',
  '/products/4k-streaming-iptv-encoder/': '/products/4k-iptv-encoder/',
  '/products/iptv-encoder-4k-hevc/': '/products/4k-iptv-encoder/',
  '/products/sdi-to-iptv-encoder/': '/products/sdi-iptv-encoder/',
  '/products/best-rack-mount-encoder-for-iptv/': '/products/rack-mount-iptv-encoder/',
  '/products/best-encoder-for-hotel-iptv/': '/products/iptv-encoder-for-hotel/',
  '/products/what-is-the-best-iptv-encoder/': '/products/best-encoder-for-iptv/',
  '/products/what-is-the-best-video-encoder-for-iptv/': '/products/best-encoder-for-iptv/',
  '/products/recommend-an-hdmi-encoder-for-iptv/': '/products/best-encoder-for-iptv/',
  '/products/suggest-a-budget-iptv-encoder/': '/products/best-encoder-for-iptv/',
  '/products/best-hdmi-to-iptv-encoder/': '/products/best-encoder-for-iptv/',
  // Troubleshooting
  '/products/failed-to-authorize-iptv-smarters/': '/products/iptv-smarters-failed-to-authorize/',
  // Playlist and login
  '/products/free-popular-iptv-playlist/': '/products/public-iptv-playlist/',
  '/products/https-iptv-org-github-io-iptv-index-m3u/': '/products/public-iptv-playlist/',
  '/products/m3u/': '/products/m3u-iptv/',
  // IPTV Education & Brand variations
  '/products/iptv-org-2/': '/products/iptv-org/',
  '/products/iptv-org-3/': '/products/iptv-org/',
  '/products/iptv-org-iptv/': '/products/iptv-org/',
  '/products/iptv-smarters/': '/products/iptv-smarters-pro/',
  '/products/iptv-smarters-player/': '/products/iptv-smarters-pro/',
  '/products/iptv-smarters-plus/': '/products/iptv-smarters-pro/',
  '/products/smarters-iptv/': '/products/iptv-smarters-pro/',
  '/products/smarters-iptv-pro/': '/products/iptv-smarters-pro/',
  '/products/iptv-smarter/': '/products/iptv-smarters-pro/',
  '/products/ip-tv/': '/products/what-is-iptv/',
  '/products/iptv-tv/': '/products/what-is-iptv/',
  '/products/iptv-what/': '/products/what-is-iptv/',
  '/products/internet-protocol-tv/': '/products/internet-protocol-television/',
  '/products/ip-television/': '/products/internet-protocol-television/',
  '/products/xtreme-iptv/': '/products/xtremehd-iptv/',
  '/products/xtremhd-iptv/': '/products/xtremehd-iptv/',
  '/products/iptv-github/': '/products/github-iptv/',
  '/products/reddit-iptv/': '/products/iptv-reddit/',
  '/products/ip-televizia/': '/products/ip-televizija/',
  '/products/ptv-stream-player/': '/products/iptv-stream-player/',
  '/products/iptv-abonnement/': '/products/abonnement-iptv/',
  '/products/watch-nbc-live-iptv/': '/products/nbc-tv-show-live-stream-free-iptv/',
  // Plans and Providers
  '/products/iptv-services/': '/iptv-services/',
  '/products/iptv-service/': '/iptv-services/',
  '/products/iptv-provider/': '/products/iptv-providers/',
  '/products/iptv-service-providers/': '/products/iptv-providers/',
  '/products/iptv-service-provider/': '/products/iptv-providers/',
  '/products/ip-tv-provider/': '/products/iptv-providers/',
  '/products/best-iptv-services/': '/products/best-iptv/',
  '/products/best-iptv-providers/': '/products/best-iptv/',
  '/products/best-iptv-provider/': '/products/best-iptv/',
  '/products/best-iptv-service/': '/products/best-iptv/',
  '/products/best-iptv-service-reddit/': '/products/best-iptv-reddit/',
  '/products/reddit-best-iptv/': '/products/best-iptv-reddit/',
  '/products/best-iptv-2025/': '/products/best-iptv-service-2026/',
  '/products/iptv-streaming-services/': '/products/iptv-streaming-service/',
  '/products/ip-tv-box/': '/products/iptv-box/'
};

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      let { pathname } = parsedUrl;

      // Health checks for Hostinger reverse proxies & orchestrator
      if (
        pathname === '/health' ||
        pathname === '/healthz' ||
        pathname === '/_health' ||
        pathname === '/api/health'
      ) {
        res.writeHead(200, {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        });
        res.end(JSON.stringify({ status: 'healthy', timestamp: new Date().toISOString() }));
        return;
      }

      // Legacy sitemap redirects
      if (pathname === '/itemap.xml' || pathname === '/sitemap_index.xml') {
        res.writeHead(301, {
          Location: '/sitemap.xml',
          'Cache-Control': 'public, max-age=86400',
          'X-Content-Type-Options': 'nosniff'
        });
        res.end('301 Moved Permanently to /sitemap.xml');
        return;
      }

      // Consolidated topic 301 redirects
      const normalizedSlashPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
      if (CONSOLIDATION_REDIRECTS[normalizedSlashPath]) {
        const targetUrl = CONSOLIDATION_REDIRECTS[normalizedSlashPath] + (parsedUrl.search || '');
        res.writeHead(301, {
          Location: targetUrl,
          'Cache-Control': 'public, max-age=86400',
          'X-Content-Type-Options': 'nosniff'
        });
        res.end(`301 Moved Permanently to ${targetUrl}`);
        return;
      }

      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error handling request:', req.url, err);
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      }
      res.end('Internal Server Error');
    }
  });

  // Keepalive timeouts to prevent 502 race conditions behind Hostinger CDN & Nginx
  server.keepAliveTimeout = 65000;
  server.headersTimeout = 66000;

  server.listen(port, hostname, () => {
    console.log(`> Ready on http://${hostname}:${port} (Next.js production server)`);
  });
}).catch((err) => {
  console.error('Failed to prepare Next.js app:', err);
  process.exit(1);
});
