# AI Studio publishing and indexing roadmap

## Generated

- 184 keyword landing/product pages under `products/`
- Crawlable product directory at `/products/`
- Canonical URLs, index/follow meta, Open Graph metadata, breadcrumbs, Service offers, and FAQ structured data
- Root `sitemap.xml`, `robots.txt`, `llms.txt`, and `keyword-map.csv`

## Before publishing in Google AI Studio

1. Upload or copy the complete site without flattening folders.
2. Preserve clean routes such as `/products/iptv/` and all files in `/assets/`.
3. Use the final public origin `https://iptv-smarters-pro.ai.studio`. If the domain changes, rerun the generator with `--origin https://your-domain.example`.
4. Confirm `/robots.txt`, `/sitemap.xml`, `/products/`, and five sample product routes return HTTP 200 without authentication.
5. Confirm each page has one H1, a self-referencing canonical, index/follow, visible FAQs matching its FAQ schema, and no browser errors.
6. Review hardware, free-playlist, location, channel, legal, and date-sensitive pages for factual accuracy before publishing.

## Google Search Console

1. Verify ownership of the final domain/property.
2. Inspect the homepage with the live URL test.
3. Submit `https://iptv-smarters-pro.ai.studio/sitemap.xml` in the Sitemaps report.
4. Request indexing for the homepage and `/products/`; use the sitemap for the remaining pages.
5. Check Page Indexing, Core Web Vitals, HTTPS, and Enhancements weekly for the first month.
6. Improve or consolidate pages Google labels duplicate, crawled-not-indexed, or discovered-not-indexed. Do not mass-request individual URLs.

Indexing cannot be guaranteed or completed before the public deployment and Search Console ownership are available.
