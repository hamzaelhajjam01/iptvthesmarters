# Keyword page automation

The public site contains one generated route for every row in `input-keywords.csv`. Generated pages are marked and can be updated safely. The generator refuses to overwrite an unrelated file at the same route.

## Regenerate after editing the CSV

Run this from PowerShell:

```powershell
& "C:\Users\boulh\Desktop\scrapy\.venv\Scripts\python.exe" "C:\Users\boulh\Desktop\scrapy\ai_studio_keyword_pages.py" "C:\Users\boulh\Desktop\Iptv The smarters Pro\input-keywords.csv" "C:\Users\boulh\Desktop\Iptv The smarters Pro" --origin "https://iptv-smarters-pro.ai.studio"
```

Change `--origin` before publishing if the final public domain changes. Regeneration updates the product pages, product directory, keyword map, sitemap, robots file, AI Studio prompt, and indexing roadmap.

## Files to publish

Publish the whole website folder. Do not upload only `products/`; the pages also use root scripts, styles, modal components, and localized assets.

## Required editorial review

Review new or changed rows before publishing, especially keywords about free playlists, encoders, specific channels, legality, locations, dates, and third-party apps. A sitemap helps discovery but cannot guarantee indexing.