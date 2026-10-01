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

---

## 2026-09-17 — First fortnightly check after the 2026-09-02 cutover (web search proxy)

| Phrase | Result | Real competitors ranking above | vs. 2026-09-02 baseline |
|---|---|---|---|
| boudoir photography auckland | Visible, ~position 4 | Boudoir Pix, Studio Boudoir (Bark.com also above — lead marketplace, not a competing photographer) | no change |
| auckland boudoir photographer | Visible, ~position 2 among real competitors | Studio Boudoir only (Peony Blush Boudoir ranks above but is Instagram-only; Wikipedia's boudoir-photography article also above) | slight improvement (was ~3 among real competitors) |

Real dashboard data (Cloudflare Web Analytics + Google Search Console): **not provided this run** —
unattended scheduled run, Belinda was not present to open the dashboards. The trailing-3-month GSC figures
recorded in the correction note at the top of this file (2026-09-02: 236 clicks, 5.88K impressions, 4% CTR,
15.4 avg. position) remain the most recent real numbers on record for this site.

**Australian competitor: still not visible.** Neither target phrase returned an Australian-owned boudoir
business in the top results, and no paid/ad placement from one appeared either. Every name ranking above
this site is the same New Zealand field as before. Nothing to act on yet — keep watching.

**One new name in the results that wasn't in the 2026-09-03 competitor teardown:** Milk Intimates
(milkintimates.co.nz, Sarah Nutt, Creative Director of Milk Photography Studio, Auckland), appearing for
"auckland boudoir photographer". New Zealand, not the flagged Australian entrant, and it ranks below this
site. Noted for the record so future checks can tell whether it climbs. Worth knowing that Milk Photography
also shows up in the BBP log's headshot results — the same studio group now competes with Belinda on two
separate fronts.

**FLAG — the stale homepage title is still not fixed in Google, 15 days after cutover.** Google is *still*
serving the old Squarespace title with the nested-quote glitch:
`Boudoir Photography Auckland "Auckland Boudoir Photographer | Elegant & Sexy Photography"`.
Verified the live site directly this run: the real title tag is now clean and correct —
`Boudoir Photography Auckland | Elegant & Confidence-Boosting Sessions`. So the site is right and Google's
index is stale. Reindexing for `/` was already requested on 2026-09-03, which makes this a two-week-old
unfulfilled request rather than something that was never actioned. Next step when Belinda is available:
re-check Search Console → URL Inspection on the homepage to see whether the crawl has happened and Google
simply chose to keep the old title (which it sometimes does when it judges a title a better match), or
whether the page genuinely hasn't been recrawled yet. If it has been recrawled and Google is overriding,
that is a different problem and usually means the on-page H1 and title disagree.

**Also still open from 2026-09-03, not verifiable without an authenticated session:**
- Did `sitemap-index.xml` move off "Couldn't fetch"? (The file itself was independently verified as
  serving HTTP 200 as `application/xml` under a Googlebot user agent, so this should have cleared.)
- Did the indexed-page count move up from 5 of 16? The sitemap submission was expected to be the fix for
  that, and enough time has now passed to see movement.
- Putting the 11 real Google reviews on the site (for persuasion, not rich snippets) — not yet done.

**Summary:** stable. Two weeks after the platform switch, this site holds the same position on the primary
phrase and has edged up one place among real competitors on the secondary one. That is the outcome the
baseline entry predicted (URLs preserved, technical SEO upgraded), and it means the migration itself has
not cost visibility. The open work is all indexing follow-through, not ranking recovery.

### Addendum — Search Console worked directly, same day (2026-09-17)

Belinda connected her live Chrome session so this could be checked properly rather than left as open items.

**Sitemap: resolved.** Status "Success", last read **16 Sep 2026**, 10 discovered pages. The "Couldn't
fetch" state noted on 2026-09-03 was indeed just Search Console's normal initial state. Closed.

**Indexing now 6 indexed / 19 not indexed** (was 5 / 11 on 2026-09-03). The not-indexed number rising is
not a regression — it means Google has now read the sitemap and discovered more URLs, including legacy
Squarespace ones. Breakdown of the 19: page with redirect 5, excluded by noindex 4, alternate page with
canonical 2, discovered but not crawled 5, crawled but not indexed 3, 404s 0.

**The real problem: 5 of the 10 real pages have never been crawled.** All 5 show "Discovered - currently
not indexed" with Last crawled = N/A: `/faqs/`, `/maternity-photography/`, `/privacy-policy/`,
`/terms-and-conditions/`, `/testimonials/`. Google knows they exist (via the sitemap) but has never
fetched them. FAQs, maternity and testimonials are the three that carry commercial weight — maternity is
an entire service line with no search presence at all.

**The 4 "excluded by noindex" URLs are stale 2025 records, not a live problem.** They are
`/cart`, `/maternity-photography`, `/terms-and-conditions`, `/faqs` — all non-trailing-slash Squarespace
forms, last crawled Jun–Nov **2025**, when the old Squarespace site did carry noindex on them. Verified
each against the live site this session: `/faqs/`, `/maternity-photography/` and `/terms-and-conditions/`
all return HTTP 200 with **no robots meta tag** (indexable), and `/cart` correctly 404s as a dead
Squarespace shop URL. Nothing on the live site is blocked. No action needed beyond the recrawl.

**Action taken: requested indexing for all 5** uncrawled pages via URL Inspection. All confirmed
"Indexing requested / added to a priority crawl queue".

**Homepage stale-title question: answered, and it is not a fault.** The indexed-pages list shows `/` was
last crawled **11 Sep 2026**, i.e. Google has already recrawled it since the 3 Sep reindex request. Live
title tag confirmed correct (`Boudoir Photography Auckland | Elegant & Confidence-Boosting Sessions`) and
the page H1 matches it, so the "Google overrides a title when H1 disagrees" theory is ruled out. The old
Squarespace title still showing in search results is display lag, not a site or crawl problem. Expect it
to clear on its own. **Downgrade this from a flag to a watch item** — recheck next run, do not change the
site for it.

**Next check should verify:** whether the 5 requested pages moved from "Discovered" into Indexed, and
whether the homepage title has refreshed in live results.

---

## 2026-10-01 — Fortnightly check (web search proxy)

| Phrase | Result | Real competitors ranking above | vs. 2026-09-17 |
|---|---|---|---|
| boudoir photography auckland | **Visible, position 1** | None | **improved** (~4 → 1). Bark.com no longer above either |
| auckland boudoir photographer | **Not visible in top 9** | Studio Boudoir (3 listings), Studio X, Milk Intimates, Boutique Lifestyle Photography, Tania Te Ata, Natalie Pasco (Wikipedia's Rhondda Bosworth article also present) | **dropped** (~2 among real competitors → not visible) |

Real dashboard data (Cloudflare Web Analytics + Google Search Console): **not provided this run** — unattended
scheduled run, Belinda not present. Search Console is set up and verified for this domain (URL-prefix property,
see 2026-09-03), so this is a gap for this run only, not a setup task. Most recent real figures remain the
trailing-3-month numbers at the top of this file (2026-09-02: 236 clicks, 5.88K impressions, 4% CTR, 15.4 avg. position).

**Australian competitor: still not visible.** No Australian-owned business and no ad placement in either
phrase's results. Every name is a New Zealand studio.

**New names vs prior entries (all New Zealand, not the flagged Australian entrant):**
- Boutique Lifestyle Photography (boutiquelifestylephotography.co.nz, glamour and boudoir page) — first
  appearance, "auckland boudoir photographer".
- La Muse (lamusephotography.co.nz) — first appearance, "boudoir photography auckland", ranks below this site.
- Milk Intimates — first seen 2026-09-17 below this site; this run it is in the results while this site is not.

**Mixed result, one big win and one drop.** Position 1 on the main phrase is the best result this site has
had in the log, and it is the phrase that earns most clicks in GSC (28 clicks / 219 impressions on the
3-month view). The drop on the reworded phrase is the thing to watch. Studio Boudoir takes three of the
nine slots for it (homepage, about page, gallery), which crowds the list. Proxy results for this phrase have
swung before (baseline ~3, 09-17 ~2), so one run is not a trend. If it is still missing next check, look at
GSC for the "auckland boudoir photographer" query specifically.

**Homepage title in search results: still stale.** The result still shows the old Squarespace title with
the nested-quote glitch. Live title re-checked this run and is correct
(`Boudoir Photography Auckland | Elegant & Confidence-Boosting Sessions`). Per the 2026-09-17 addendum this
is display lag after a confirmed 11 Sep recrawl, not a fault. It has not stopped the page taking position 1.
Watch item only.

**Still to verify with GSC access:** whether the 5 pages requested for indexing on 2026-09-17 (/faqs/,
/maternity-photography/, /privacy-policy/, /terms-and-conditions/, /testimonials/) have moved into Indexed.
Also carried from 2026-09-03: bridal boudoir competitor check (Natalie Pasco has a dedicated "Bridal Boudoir
Photography in Auckland" page, which showed up in this run's results), and putting the 11 Google reviews on the site.

### Addendum — real dashboard data attempt, same day (2026-10-01). Belinda asked for a recheck with Chrome open.

**FLAG: Search Console has LOST verification for this site.** The property list now shows
`https://www.boudoirphotographyauckland.co.nz/` under **"Not verified"**, and every report returns
"Oops, you don't have access to this property". It was working on 2026-09-17 (sitemap, indexing requests
all done through it). `sc-domain:boudoirphotographyauckland.co.nz` also returns no access (never created).

Likely cause: the property was originally verified by Squarespace's built-in Search Console link, which
works by placing a hidden tag in Squarespace's pages. That tag disappeared when the site moved to Astro on
2026-09-02, and Google's periodic re-check has now dropped the verification. Checked this run:
- The live Astro homepage has **no** `google-site-verification` meta tag (BBP's homepage does have one).
- DNS **does** have a TXT record on the root:
  `google-site-verification=KyMZ8aL4fESU-JKbzmTSy5cc4wiyzUa1viN0Wi8dg3o` — origin unknown, probably from an
  earlier domain-verification attempt.

**Recommended fix (needs Belinda's OK, it is an account action):** in Search Console, Add property →
Domain → `boudoirphotographyauckland.co.nz`. If the TXT record above is her token, it verifies in one click
and the Domain property also covers www and non-www together. If not, Search Console gives a new TXT value
to add in Cloudflare DNS. Google keeps the historic data, so nothing is lost once ownership is restored.
Not done this run.

No GSC numbers this run as a result. The 5 pages requested for indexing on 2026-09-17 remain unverified.

**Cloudflare Web Analytics, 30 days (first time recorded, covers almost exactly the period since the 2026-09-02 cutover):**
400 visits, 890 page views (2.2 pages per visit), page load 546 ms. Referrers: direct 280, **google.com 120**.
Top paths: / 370, /pricing/ 20, /privacy-policy/ 10. Countries: NZ 210, **Singapore 130**, US 30, then
single digits (Australia 10). Desktop 250 / mobile 150. Hosts: www 290, bare domain 110.
Note: Singapore 130 is very likely automated traffic. Real human visits probably ~250, with Google sending
~120, more than double BBP's Google referrals in the same window despite this being the newer site.

**Re-verification attempt, same day (2026-10-01).** Search Console's verify dialog for the URL-prefix property
offers HTML file, HTML tag, Analytics, Tag Manager, or Domain name provider. Chosen: DNS TXT via "Any DNS
provider" (avoids granting Google OAuth access to Cloudflare, and avoids a code deploy while the repo has
unrelated uncommitted work). Google's new token for this account:
`google-site-verification=Rs9Yy_EYWucqQd2jqCX-KoZgLKf7eayEJPRm1N9J42k` — different from the existing root TXT
(`KyMZ8...`), which is why the property did not re-verify on its own. Adding the record in Cloudflare was
blocked from automation; handed to Belinda to add by hand (Type TXT, Name @, Content = token above), then
click VERIFY in Search Console. Leave the old KyMZ8 record in place. Note: HTML-file method was rejected because
Cloudflare Pages redirects `.html` URLs to extensionless ones, which can fail Google's file check.

**FIXED, same day (2026-10-01).** With Belinda's explicit go-ahead in chat, added the TXT record in Cloudflare
DNS (Type TXT, Name @, content `google-site-verification=Rs9Yy_EYWucqQd2jqCX-KoZgLKf7eayEJPRm1N9J42k`).
Confirmed public via 1.1.1.1 and 8.8.8.8, then clicked Verify: **"Ownership verified", method: Domain name
provider.** Do NOT delete either google-site-verification TXT record in Cloudflare. All historic data was intact.

**Search Console, 28 days (Sep 2 – Sep 29), first full post-cutover window:** 59 clicks, 1.27K impressions,
4.6% CTR, avg. position 13.0. (Trailing 3-month baseline at 2026-09-02: 236 clicks / 5.88K / 4% / 15.4, i.e.
~79 clicks per 28 days. CTR and position are better; clicks a bit below the 3-month average — watch, too early to call.)

Top queries: "boudoir photography auckland" 10 clicks / 86 impr / **11.6% CTR / position 3.3**;
"boudoir photography" 5 / 180 / 8.4; "boudoir" 0 / 127 / 8.8; "best boudoir photographer nz" 0 / 26 / 8.2.
*boudoir photographer* (contains): 1 click, 40 impr, position 20.2. The exact "auckland boudoir photographer"
wording does not appear as a query at all this window, so the proxy drop for that phrase earlier today is
low-volume and not a concern.

Top pages: / 53 clicks of 59 (1,075 impr, pos 11.4); /pricing/ 2 (139 impr); about 2. Some pages still appear
in both slash and non-slash forms (gallery, pricing, about) — expected to fold together as Google recrawls
after the 301 redirects; check next run.

**Indexing: 10 indexed / 15 not indexed** (was 6 / 19 on 2026-09-17). **"Discovered - currently not indexed"
is now 0** (was 5), so all five pages requested on 2026-09-17 (/faqs/, /maternity-photography/,
/privacy-policy/, /terms-and-conditions/, /testimonials/) have been crawled. /testimonials/ and
/maternity-photography are already earning impressions. Remaining not-indexed: redirects 5, stale noindex 4,
canonical alternates 2, crawled-not-indexed 3, Google-chose-different-canonical 1 — all normal for a migrated site.

**Follow-up actions, same day (2026-10-01), with Belinda's go-ahead:**
- Deployed d56105a: every internal link and both contact-form redirects now use the trailing-slash URL
  (was 51 non-slash links). Same fix as BBP 2026-08-15. Expect slash/non-slash duplicate pages in GSC to fold
  together over 1–4 weeks. Verified live.
- Deployed f7af159: added Annelie and Kathy (new Google reviews, word for word, first names only) to
  /testimonials/, count updated to 14. Correction: the "put Google reviews on the site" item was DONE on
  2026-09-03; this log wrongly carried it as open. Tracey's 2023 review still not added (full text not read).
- Google review counts seen 2026-10-01: this business 14 (5.0), Studio Boudoir 9 (5.0).
- Wedding directories checked: free self-serve listings exist on Getting Hitched (Silver, includes website
  link), WeddingWise (free forever) and My Wedding Guide (free, link not counted for SEO). Boudoir
  International is paid membership only and submissions closed. Bride & Groom, NZ Bride, Wedding Vendors NZ,
  Together Journal: paid only. None are email-based; all are signup forms Belinda must complete herself.

---

## 2026-10-02 — Three new pages published (Belinda reviewed each draft)

- `/boudoir-for-every-body/`: plus size, before a mastectomy, burn and surgical scars, after weight loss surgery,
  every age/colour/background. Targets "plus size boudoir auckland", "boudoir before mastectomy nz", "boudoir scars".
  Rewritten once after Belinda's review (sensitive-wording rules recorded in the file header).
- `/milestone-birthday-boudoir/`: 30th/40th/50th, four weeks' notice, gift voucher process. Targets "40th birthday
  boudoir", "birthday boudoir shoot auckland", "boudoir gift voucher auckland".
- `/blog/how-to-choose-a-boudoir-photographer-nz/`: eight questions + Belinda's answers. Targets "best boudoir
  photographer nz" (26 impr, pos 8.2 in Sep).
- Same wording fixes applied to homepage cards, FAQs (scars answer) and the first-shoot post. New pages linked from
  homepage, FAQs, blog index and llms.txt; all in the sitemap.
- Requested indexing for all three via URL Inspection, 2026-10-02.
- **Check next run:** are the three pages indexed, and are they picking up impressions for their target searches?
