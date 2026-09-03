# SEO rank tracking — boudoirphotographyauckland.co.nz

Tracking whether the Squarespace → Cloudflare Pages migration affects Google visibility, and watching
for the impact of a new Australian competitor entering the Auckland boudoir photography market with a
larger marketing budget than Belinda has.

Method: live web search for each target phrase, noting whether boudoirphotographyauckland.co.nz appears
and roughly where, plus which real competitors (not directories/marketplaces) rank above it. This is a
directional proxy, not exact rank — search results vary by location/personalization. Google Search
Console (search.google.com/search-console) is the authoritative source when an authenticated session is
available.

**Correction (2026-09-02, later same day):** this file originally said Search Console was "not yet
checked" for this domain — that was wrong, it just hadn't been looked at yet. It's actually been verified
and collecting data here for months already. Real trailing-3-month numbers, pulled 2026-09-02: **236
total clicks, 5.88K impressions, 4% average CTR, 15.4 average position.** Top queries by clicks: "boudoir
photography auckland" (28 clicks / 219 impressions — strong relative CTR), "boudoir photography" (27
clicks / 738 impressions — high visibility, weak CTR, likely ranking poorly for this broader/unlocalized
term), "boudoir auckland" (6/26), "boudoir photography new zealand" (4/135), "erotic photography" (4/79
— an unintentional/adjacent match, not something to target), "boudoir shoot" (3/67). Indexing: 5 pages
indexed, 11 not indexed (normal for a site this size, not a red flag on its own). Confirms the localized
phrase ("...auckland") earns clicks much more efficiently than the generic phrase — worth leaning into in
future copy/content decisions.

A scheduled task (`bbp-boudoir-seo-rank-check`) re-runs this check fortnightly, appending a new entry
below and comparing to the previous one and to the baseline.

---

## 2026-09-02 — BASELINE (day of Squarespace → Cloudflare DNS cutover)

| Phrase | Result | Real competitors ranking above |
|---|---|---|
| boudoir photography auckland | Visible, ~position 4 | Boudoir Pix, Studio Boudoir (Bark.com, a lead-marketplace directory, also ranks above but is not a competing photographer) |
| auckland boudoir photographer | Visible, ~position 3 among real competitors | Peony Blush Boudoir (Instagram-only), Studio Boudoir |

**Site SEO snapshot at baseline (old Squarespace vs. new Astro site, not yet live):**

| | Squarespace (live at baseline) | Astro (about to go live) |
|---|---|---|
| Page title | Had a formatting glitch (nested quote marks) | Clean |
| Meta description | Generic | Names Belinda Dunne + Hibiscus Coast — stronger local signal |
| Structured data (schema.org) | None found | ProfessionalService schema added (name, image, address, price range, area served) |
| URL paths | — | Kept identical to Squarespace on purpose, to preserve existing ranking signals |
| FAQ page | Exists | Exists, carries FAQPage schema; content itself could still be expanded/improved |

**Context:** Belinda flagged that an Australian company with significantly more marketing budget is
entering the Auckland boudoir photography market. Her competitive angle isn't outspending them — it's
technical SEO fundamentals (structured data, page speed, preserved URLs) plus content depth, since those
aren't things a bigger ad budget automatically buys. Revisit this competitor's presence in future checks
once their site/ads are live and visible in search results.

**Recommendations discussed, not yet actioned:**
- Google Business Profile: confirm it exists for this business and is filled in with local keywords
  ("boudoir photography Auckland", "Hibiscus Coast")
- Expand the FAQ page content (page exists, schema is in place, copy could go deeper)
- Client testimonials with Review schema markup
- Bark.com: real NZ service, but pay-per-lead (~$2.20+ per lead contacted), not a free listing —
  low priority given budget, not recommended to pursue actively

**Summary:** Reasonably competitive but not dominant heading into the migration — 3rd–4th among real
competitors on the two core phrases. URL structure preserved and technical SEO upgraded going into the
switch, so the expectation is stable-to-improved visibility post-migration. This is the baseline future
checks compare against.
