import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const HOST = '0.0.0.0';

process.on('uncaughtException', (err) => {
  console.error('Server uncaughtException:', err);
});

process.on('unhandledRejection', (reason) => {
  console.error('Server unhandledRejection:', reason);
});

const sourceDir = path.join(__dirname, 'Iptv The smarters Pro');
const distDir = path.join(__dirname, 'dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.csv': 'text/csv; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8'
};

const CONSOLIDATION_REDIRECTS = {
  // Encoder hardware (26)
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
  // Troubleshooting (1)
  '/products/failed-to-authorize-iptv-smarters/': '/products/iptv-smarters-failed-to-authorize/',
  // Playlist and login (3)
  '/products/free-popular-iptv-playlist/': '/products/public-iptv-playlist/',
  '/products/https-iptv-org-github-io-iptv-index-m3u/': '/products/public-iptv-playlist/',
  '/products/m3u/': '/products/m3u-iptv/',
  // IPTV Education & Brand variations (21)
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
  // Plans and Providers (15)
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

const fetchPatch = '<script id="ais-fetch-compat">(function(){try{var _r=window.fetch;var _b=_r?_r.bind(window):_r;var _f=_b;Object.defineProperty(window,"fetch",{get:function(){return _f;},set:function(v){_f=v;},configurable:true,enumerable:true});}catch(e){try{if(typeof Window!=="undefined"&&Window.prototype){var _pr=Window.prototype.fetch;var _pb=_pr?_pr.bind(window):_pr;var _pf=_pb;Object.defineProperty(Window.prototype,"fetch",{get:function(){return _pf;},set:function(v){_pf=v;},configurable:true,enumerable:true});}}catch(e2){}}})();</script>';

function findFile(safePath) {
  // Check both source and dist directories, prioritizing sourceDir in development
  const baseDirs = [sourceDir, distDir].filter(d => fs.existsSync(d));

  for (const dir of baseDirs) {
    let candidate = path.join(dir, safePath);

    if (fs.existsSync(candidate) && !fs.statSync(candidate).isDirectory()) {
      return candidate;
    }
    if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) {
      const idx = path.join(candidate, 'index.html');
      if (fs.existsSync(idx)) return idx;
    }
    if (fs.existsSync(`${candidate}.html`)) {
      return `${candidate}.html`;
    }
    const subIdx = path.join(candidate, 'index.html');
    if (fs.existsSync(subIdx)) {
      return subIdx;
    }
  }
  return null;
}

const server = http.createServer((req, res) => {
  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost:3000'}`);
    let pathname = parsedUrl.pathname;
    try {
      pathname = decodeURIComponent(pathname);
    } catch {
      // Ignore decode error, use raw pathname
    }

    // Health checks for orchestrator and proxies
    if (pathname === '/health' || pathname === '/healthz' || pathname === '/_health' || pathname === '/api/health') {
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-cache, no-store'
      });
      res.end(JSON.stringify({ status: 'healthy', timestamp: new Date().toISOString() }));
      return;
    }

    // Normalize path to prevent directory traversal
    let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
    if (safePath.startsWith('/') || safePath.startsWith('\\')) {
      safePath = safePath.slice(1);
    }

    // Legacy sitemap redirects
    if (pathname === '/itemap.xml' || pathname === '/sitemap_index.xml') {
      res.writeHead(301, {
        'Location': '/sitemap.xml',
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
        'Location': targetUrl,
        'Cache-Control': 'public, max-age=86400',
        'X-Content-Type-Options': 'nosniff'
      });
      res.end(`301 Moved Permanently to ${targetUrl}`);
      return;
    }

    // Canonical 301 trailing-slash redirect for directory URLs
    // Resolves "Alternative page with proper canonical tag" reported by Google Search Console
    if (!pathname.endsWith('/') && !path.extname(pathname)) {
      const baseDirs = [sourceDir, distDir].filter(d => fs.existsSync(d));
      const hasDirectoryIndex = baseDirs.some(d => fs.existsSync(path.join(d, safePath, 'index.html')));
      if (hasDirectoryIndex) {
        const redirectUrl = `${pathname}/${parsedUrl.search || ''}`;
        res.writeHead(301, {
          'Location': redirectUrl,
          'Cache-Control': 'public, max-age=86400',
          'X-Content-Type-Options': 'nosniff'
        });
        res.end(`301 Moved Permanently to ${redirectUrl}`);
        return;
      }
    }

    let filePath = findFile(safePath);

    // If file not found, return real HTTP 404 (prevent soft-404 and duplicate index indexing)
    if (!filePath) {
      const parsedExt = path.extname(safePath).toLowerCase();
      if (!parsedExt || parsedExt === '.html') {
        const notFoundPath = findFile('404.html');
        if (notFoundPath) {
          fs.readFile(notFoundPath, 'utf8', (err, html404) => {
            if (err) {
              res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
              res.end('404 Not Found');
              return;
            }
            res.writeHead(404, {
              'Content-Type': 'text/html; charset=utf-8',
              'Cache-Control': 'no-cache, no-store, must-revalidate',
              'X-Content-Type-Options': 'nosniff'
            });
            res.end(html404);
          });
          return;
        }
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<!doctype html><html><head><title>404 Not Found</title></head><body><h1>404 Not Found</h1></body></html>');
        return;
      } else {
        // Files with non-HTML extensions (.xml, .css, .js, .png, etc.) must NEVER return HTML
        res.writeHead(404, { 'Content-Type': MIME_TYPES[parsedExt] || 'text/plain; charset=utf-8' });
        res.end(parsedExt === '.xml' ? '<?xml version="1.0" encoding="UTF-8"?><error>404 Not Found</error>' : '404 Not Found');
        return;
      }
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    if (req.method === 'HEAD') {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      });
      res.end();
      return;
    }

    if (ext === '.html') {
      fs.readFile(filePath, 'utf8', (err, htmlContent) => {
        if (err) {
          if (!res.headersSent) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
          }
          res.end('500 Internal Server Error');
          return;
        }

        const fileName = path.basename(filePath);
        // Do not alter Google Search Console verification files
        if (fileName.startsWith('google') && fileName.endsWith('.html')) {
          res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin': '*'
          });
          res.end(htmlContent);
          return;
        }

        let finalHtml = htmlContent;

        // Dynamic domain adaptation for canonical tags, OG tags, and JSON-LD
        let reqHost = req.headers['x-forwarded-host'] || req.headers.host || 'iptv-the-smarters-pro.ai.studio';
        let cleanHost = reqHost.split(':')[0];
        if (!cleanHost || cleanHost === 'localhost' || cleanHost === '127.0.0.1') {
          cleanHost = 'iptv-the-smarters-pro.ai.studio';
        }
        finalHtml = finalHtml.replace(/https:\/\/(?:iptv-smarters-pro|iptv-the-smarters-pro)\.ai\.studio/g, `https://${cleanHost}`);

        if (!finalHtml.includes('ais-fetch-compat')) {
          if (finalHtml.includes('<head>')) {
            finalHtml = finalHtml.replace('<head>', '<head>' + fetchPatch);
          } else if (finalHtml.includes('<head ')) {
            finalHtml = finalHtml.replace(/(<head[^>]*>)/i, '$1' + fetchPatch);
          } else {
            finalHtml = fetchPatch + finalHtml;
          }
        }

        const hash = crypto.createHash('md5').update(finalHtml).digest('hex');
        const etag = `"${hash}"`;

        if (req.headers['if-none-match'] === etag) {
          res.writeHead(304, {
            'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
            'ETag': etag,
            'X-Content-Type-Options': 'nosniff',
            'Access-Control-Allow-Origin': '*'
          });
          res.end();
          return;
        }

        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
          'ETag': etag,
          'X-Content-Type-Options': 'nosniff',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(finalHtml);
      });
      return;
    }

    // Dynamic host matching for sitemap.xml
    if (ext === '.xml' && path.basename(filePath) === 'sitemap.xml') {
      fs.readFile(filePath, 'utf8', (err, xmlContent) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('500 Internal Server Error');
          return;
        }
        let reqHost = req.headers['x-forwarded-host'] || req.headers.host || 'iptv-the-smarters-pro.ai.studio';
        let cleanHost = reqHost.split(':')[0];
        if (!cleanHost || cleanHost === 'localhost' || cleanHost === '127.0.0.1') {
          cleanHost = 'iptv-the-smarters-pro.ai.studio';
        }
        // Ensure URLs match the current hostname if not localhost
        const adaptedXml = xmlContent.replace(/https:\/\/(?:iptv-smarters-pro|iptv-the-smarters-pro)\.ai\.studio/g, `https://${cleanHost}`);
        res.writeHead(200, {
          'Content-Type': 'application/xml; charset=utf-8',
          'Cache-Control': 'public, max-age=86400',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(adaptedXml);
      });
      return;
    }

    // Static assets caching headers (CSS, JS, images, fonts)
    let assetCacheControl = 'no-cache, no-store, must-revalidate';
    if (['.png', '.jpg', '.jpeg', '.webp', '.svg', '.woff', '.woff2', '.ttf'].includes(ext)) {
      assetCacheControl = 'public, max-age=86400';
    } else if (path.basename(filePath) === 'robots.txt') {
      assetCacheControl = 'public, max-age=86400';
    }

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': assetCacheControl,
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*'
    });
    const stream = fs.createReadStream(filePath);
    stream.on('error', (streamErr) => {
      console.error('File stream error:', streamErr);
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      }
      res.end();
    });
    stream.pipe(res);
  } catch (err) {
    console.error('Server error:', err);
    if (!res.headersSent) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    }
    res.end('500 Internal Server Error');
  }
});

// Configure keepalive timeouts to avoid proxy socket race conditions
server.keepAliveTimeout = 65000;
server.headersTimeout = 66000;

server.on('error', (err) => {
  console.error('Server error on port ' + PORT + ':', err);
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/ serving from ${sourceDir}`);
});
