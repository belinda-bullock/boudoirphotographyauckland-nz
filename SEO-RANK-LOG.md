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

---

## 2026-09-03 — Competitor teardown + on-site audit

Not a rank check (baseline was yesterday). This is a look at what the competitors do that this site
doesn't, prompted by Belinda asking how to improve SEO and make clients more comfortable booking.

**Who actually ranks for "boudoir photography auckland":** photoshoot.co.nz, Studio Boudoir,
boudoirphotographyauckland.co.nz, Gilmour Studios, Natalie Pasco, Studio X, Tania Te Ata.
Also present: Boudoir Pix (Mark Robotham, Auckland/Hamilton/Rotorua), Casey van Liefde.

**Auckland Magazine "5 Best Boudoir Photography Studios in Auckland [2026]" — we are listed 2nd**,
behind Studio Boudoir. Their stated criteria: portfolio/style, comfort and professionalism, **privacy
policies**, packages and inclusions. Each entry carries 2-3 testimonials with ratings. No public
nomination process documented.

**Studio Boudoir (the main rival, ranks above us) puts on its HOMEPAGE:**
- "Your privacy is always respected. Your images are never shared without permission"
- "Your session is completely confidential and utmost discretion assured" / "You are always in control"
- Password-protected private galleries
- "Gentle, step-by-step posing guidance (all verbal, no touching)"
- A named 3-step process: Consultation -> Photoshoot -> Image Selection
- "all pricing is upfront with no hidden surprises"
- 4 named testimonials + a link to more
- 20+ years experience, "internationally award winning", studio address shown

**Our gaps against that, measured on this site:**
| Thing | Studio Boudoir | This site |
|---|---|---|
| Privacy reassurance on homepage | Yes, prominent | Only inside the FAQ page |
| "No touching" posing statement | Yes | Absent |
| Named testimonials | 4 on homepage + more page | 2 total (Kendal on /, Carolyn on /pricing) |
| Review / AggregateRating schema | — | **None** — no star eligibility in Google |
| Studio address shown | Yes | Suburb only ("Hibiscus Coast") |
| Upfront pricing | Promised | Actual prices shown ($750/$950/$1,200) — we are ahead here |

**Technical findings:**
- Google is still serving the OLD Squarespace title for our homepage, including the nested-quote
  glitch: `Boudoir Photography Auckland "Auckland Boudoir Photographer | Elegant & Sexy Photography"`.
  Expected one day after cutover, but worth forcing: Search Console -> URL Inspection -> Request Indexing.
- Page weight: homepage images 2,140 KB, gallery images 2,111 KB. **Zero WebP/AVIF on the site** —
  everything is JPEG, largest single file 291 KB. Slow on mobile, and speed is a ranking input.
- Schema present: ProfessionalService, FAQPage. Missing: Review/AggregateRating, ImageObject.
- Google Business Profile: still not confirmed to exist (carried over from the baseline entry,
  still unactioned). This is the biggest untouched local-SEO lever.

**Priority order recommended to Belinda:** (1) Request reindexing, (2) Google Business Profile,
(3) surface privacy/confidentiality on the homepage and contact page, (4) collect and mark up real
reviews, (5) compress images to WebP, (6) FAQs into the main menu.

---

## 2026-09-03 — Search Console + Business Profile, worked directly. Two earlier notes were WRONG.

**Correction 1 — the Search Console property is a URL-prefix property**, `https://www.boudoirphotographyauckland.co.nz/`, NOT a domain (`sc-domain:`) property. Going to the sc-domain URL gives "you don't have access to this property", which looks alarming and isn't.

**Correction 2 — the Google Business Profile EXISTS and is verified.** The baseline entry listed it as unconfirmed and it was recommended as the biggest untouched lever. It is neither untouched nor missing:
- **5.0 stars from 11 Google reviews**, Belinda replies to them
- 905 monthly views, 246 customer interactions
- Google rates profile strength as "Looks good!"
- It sits alongside Belinda Bullock Photography and DIGITAL TWIN IMAGING in the same manager account, all three verified

**The actual problem found: no sitemap had ever been submitted.** "Submitted sitemaps: 0-0 of 0". This is very likely why only 5 of 16 pages were indexed. Inspecting the gallery page returned "URL is unknown to Google" with "No referring sitemaps detected" and "Referring page: none detected" — Google had never heard of it.

Actions taken 2026-09-03:
- Submitted `sitemap-index.xml`. Status showed "Couldn't fetch" straight after submission, which is Search Console's normal initial state. Verified independently that the file returns HTTP 200 as `application/xml`, is declared in robots.txt, and fetches fine under a Googlebot user agent. Re-check the status in a day.
- Requested indexing for `/` (was already indexed, page changed) and `/boudoir-photoshoot-gallery-auckland/` (was not indexed at all). Both added to the priority crawl queue.

**Correction 3 — drop the "add Review schema to get stars" recommendation.** Google does not show star ratings from a site's own AggregateRating for a local business; self-serving reviews are excluded from rich results. The stars Belinda already gets come from the Business Profile, which is working. Putting the 11 Google reviews on the website is still worth doing, but for persuasion, not for rich snippets. Do not promise stars from on-site markup.

**Next, in order:** (1) confirm the sitemap fetches, (2) request indexing for the remaining pages once the sitemap is read, (3) put the real Google reviews on the site.

---

## 2026-09-03 — content added from Belinda's own knowledge (not a rank check)

Belinda described why women actually book, none of which was on the site. Added as a
"There is no wrong reason" section on the homepage and two new FAQs:
milestone birthdays; **bridal boudoir** (she says it is one of her most common bookings);
after a divorce; after a hard year including money worries and grief; **documenting a body
before a mastectomy**; and **scars and burns**, which she has real experience photographing.

**Search terms this opens up that the site previously said nothing about:**
`bridal boudoir Auckland`, `mastectomy photography NZ`, `divorce boudoir`, `40th birthday
boudoir`. Bridal boudoir in particular is high commercial intent and worth its own page later.
Check whether competitors rank for it at the next fortnightly check.

**Blocked:** Belinda has no bridal boudoir photos she has permission to publish. Text only for now.

Also tidied the FAQ page: removed a size/age question that duplicated two existing, better-written
answers ("Do you photograph plus sized women?" — "Hell yes." and "What age of women do you work
with?"), and moved the reassurance questions to the top of the list where a nervous reader meets
them first. 18 questions, FAQPage schema still valid.

**Gift certificates (2026-09-03).** Belinda sells them and the site said nothing about it. She says
sessions are commonly bought by friends for a friend's milestone birthday, and by men for their wives
as a birthday or Valentine's gift. Added to the homepage "no wrong reason" section, the FAQs, and the
pricing page.

This is a **second audience the site was not written for**: the buyer is often not the woman being
photographed. Search terms now worth tracking: `boudoir gift voucher Auckland`, `boudoir gift
certificate NZ`, `Valentine's gift for wife Auckland`, `40th birthday gift for her Auckland`. Valentine's
is seasonal, so check visibility for it in January rather than mid-year.

**Answered 2026-09-03, now written up on the pricing page and in the FAQs.** The process: buyer gets in
touch, Belinda has a conversation with them about the recipient and which package suits her, then sends a
**digital** voucher for the buyer to hand over. The voucher states the session length and image count but
**not the price**, so the recipient never sees what was spent. The recipient then calls Belinda herself for
a separate conversation about outfits, what she wants, and how the day runs, to settle nerves. **Three
month expiry, deliberately**: Belinda's reasoning is that an open-ended voucher gets deferred forever,
usually until the woman has lost weight. Written up on the site as a gentle push rather than a
restriction, which also reinforces the body-acceptance message running through the rest of the site.
