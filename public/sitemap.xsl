<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>
          <xsl:choose>
            <xsl:when test="sitemap:sitemapindex">Sitemap Index — The Smarters IPTV</xsl:when>
            <xsl:otherwise>XML Sitemap — The Smarters IPTV</xsl:otherwise>
          </xsl:choose>
        </title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style type="text/css">
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            background-color: #09090b;
            color: #f4f4f5;
            padding: 40px 20px;
            line-height: 1.5;
          }
          .container {
            max-width: 1040px;
            margin: 0 auto;
          }
          .header-brand {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 8px;
          }
          .brand-icon {
            width: 38px;
            height: 38px;
            background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            font-weight: 900;
            font-size: 20px;
            box-shadow: 0 4px 16px rgba(124, 58, 237, 0.35);
          }
          h1 {
            font-size: 28px;
            font-weight: 900;
            color: #ffffff;
            letter-spacing: -0.02em;
          }
          .site-sub {
            font-size: 14px;
            color: #a1a1aa;
            margin-left: 52px;
            margin-bottom: 28px;
            font-weight: 500;
          }
          .site-sub a {
            color: #a78bfa;
            text-decoration: none;
            font-weight: 600;
          }
          .site-sub a:hover {
            color: #c4b5fd;
            text-decoration: underline;
          }
          .stats-card {
            display: inline-block;
            background: #18181b;
            border: 1px solid #27272a;
            border-radius: 14px;
            padding: 14px 24px;
            margin-bottom: 24px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          }
          .stats-card .count {
            font-size: 24px;
            font-weight: 900;
            color: #a78bfa;
            line-height: 1.2;
          }
          .stats-card .label {
            font-size: 11px;
            font-weight: 700;
            color: #71717a;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-top: 3px;
          }
          .nav-back {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 13px;
            font-weight: 700;
            color: #c4b5fd;
            text-decoration: none;
            margin-bottom: 20px;
            padding: 8px 14px;
            background: rgba(124, 58, 237, 0.12);
            border: 1px solid rgba(124, 58, 237, 0.3);
            border-radius: 8px;
            transition: all 0.15s ease;
          }
          .nav-back:hover {
            background: rgba(124, 58, 237, 0.25);
            color: #ffffff;
            text-decoration: none;
          }
          .table-wrapper {
            background: #121214;
            border: 1px solid #27272a;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 8px 24px rgba(0,0,0,0.3);
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            font-size: 13px;
          }
          thead th {
            background-color: #6d28d9;
            color: #ffffff;
            font-weight: 800;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            padding: 14px 18px;
          }
          thead th.num-col {
            width: 55px;
            text-align: center;
          }
          thead th.change-col {
            width: 110px;
            text-align: center;
          }
          thead th.prio-col {
            width: 80px;
            text-align: center;
          }
          thead th.date-col {
            width: 130px;
            text-align: right;
          }
          tbody tr {
            border-bottom: 1px solid #1e1e24;
            transition: background 0.1s ease;
          }
          tbody tr:last-child {
            border-bottom: none;
          }
          tbody tr:hover {
            background-color: #1a1a22;
          }
          tbody td {
            padding: 13px 18px;
            color: #d4d4d8;
          }
          tbody td.num-cell {
            text-align: center;
            font-weight: 700;
            color: #71717a;
            font-size: 12px;
          }
          tbody td.change-cell {
            text-align: center;
            font-size: 11px;
            font-weight: 600;
            color: #93c5fd;
            text-transform: uppercase;
          }
          tbody td.prio-cell {
            text-align: center;
            font-size: 12px;
            font-weight: 700;
            color: #34d399;
          }
          tbody td.url-cell a {
            color: #f4f4f5;
            font-weight: 600;
            text-decoration: none;
            word-break: break-all;
          }
          tbody td.url-cell a:hover {
            color: #a78bfa;
            text-decoration: underline;
          }
          tbody td.date-cell {
            text-align: right;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 12px;
            color: #a1a1aa;
            white-space: nowrap;
          }
          .footer-note {
            margin-top: 24px;
            font-size: 11px;
            color: #71717a;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          
          <xsl:choose>
            <!-- ── SITEMAP INDEX VIEW ────────────────────────────────────────── -->
            <xsl:when test="sitemap:sitemapindex">
              <div class="header-brand">
                <div class="brand-icon">📺</div>
                <h1>Sitemap Index</h1>
              </div>
              <div class="site-sub">
                <a href="https://thesmartersiptv.com">thesmartersiptv.com</a> — 4K IPTV Subscription, Xtream Codes Setup &amp; Tutorials
              </div>

              <div class="stats-card">
                <div class="count"><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></div>
                <div class="label">Sub-Sitemaps</div>
              </div>

              <div class="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th class="num-col">#</th>
                      <th>Sitemap URL</th>
                      <th class="date-col">Last Modified</th>
                    </tr>
                  </thead>
                  <tbody>
                    <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                      <tr>
                        <td class="num-cell"><xsl:value-of select="position()"/></td>
                        <td class="url-cell">
                          <a href="{sitemap:loc}">
                            <xsl:value-of select="sitemap:loc"/>
                          </a>
                        </td>
                        <td class="date-cell">
                          <xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/>
                        </td>
                      </tr>
                    </xsl:for-each>
                  </tbody>
                </table>
              </div>
            </xsl:when>

            <!-- ── INDIVIDUAL SUB-SITEMAP VIEW ───────────────────────────────── -->
            <xsl:otherwise>
              <a href="/sitemap.xml" class="nav-back">← Back to Sitemap Index</a>

              <div class="header-brand">
                <div class="brand-icon">📺</div>
                <h1>XML Sitemap</h1>
              </div>
              <div class="site-sub">
                <a href="https://thesmartersiptv.com">thesmartersiptv.com</a> — 4K IPTV Subscription, Xtream Codes Setup &amp; Tutorials
              </div>

              <div class="stats-card">
                <div class="count"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
                <div class="label">URLs in this sitemap</div>
              </div>

              <div class="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th class="num-col">#</th>
                      <th>Page URL</th>
                      <th class="change-col">Frequency</th>
                      <th class="prio-col">Priority</th>
                      <th class="date-col">Last Modified</th>
                    </tr>
                  </thead>
                  <tbody>
                    <xsl:for-each select="sitemap:urlset/sitemap:url">
                      <tr>
                        <td class="num-cell"><xsl:value-of select="position()"/></td>
                        <td class="url-cell">
                          <a href="{sitemap:loc}" target="_blank">
                            <xsl:value-of select="sitemap:loc"/>
                          </a>
                        </td>
                        <td class="change-cell">
                          <xsl:value-of select="sitemap:changefreq"/>
                        </td>
                        <td class="prio-cell">
                          <xsl:value-of select="sitemap:priority"/>
                        </td>
                        <td class="date-cell">
                          <xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/>
                        </td>
                      </tr>
                    </xsl:for-each>
                  </tbody>
                </table>
              </div>
            </xsl:otherwise>
          </xsl:choose>

          <p class="footer-note">
            Standard XML Sitemap protocol compliant with Google Search Console, Bing Webmaster, and major search engine crawlers.
          </p>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
