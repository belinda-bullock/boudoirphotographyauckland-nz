# boudoir-website
Boudoir Photography Auckland — boudoirphotographyauckland.co.nz
A rebuild of the Squarespace site as a fast, SEO-complete Astro static site for Cloudflare Pages.

## Persona
Photographer name on THIS site is **Belinda Dunne**, not Belinda Bullock — intentional persona
separation, confirmed 2026-08-08. Never silently correct it. This is a separate business from
Belinda Bullock Photography and Digital Twin Imaging — keep it purely boudoir/maternity.

## Stack
- Astro 7.x (static) + @astrojs/sitemap
- Tailwind v4 via @tailwindcss/vite (tokens in src/styles/global.css @theme)
- Fonts: Playfair Display (headings/serif) + Inter (body), loaded via Google Fonts in Base.astro
- Dev: `npm run dev` → localhost:4321
- Build: `npm run build` → dist/

## Brand
Colours measured directly from the live logo file and site CSS (not eyeballed).
- `boudoir-red` #CB171E (sampled from the logo script wordmark) — primary accent, CTAs, headings
- `boudoir-red-hover` #9E1218 — hover state
- `boudoir-pink` #E67DE3 (sampled from live site CSS) — secondary accent on dark sections
- `boudoir-ink` #000000 — dark section backgrounds
- `boudoir-white` #FFFFFF
- `boudoir-muted` #6B5F66 — body copy on light backgrounds
- `boudoir-cream` #FAF6F5 — light section backgrounds
- Logo: `/images/boudoir-logo.png` (dark red script "Boudoir" + grey uppercase wordmark, pulled from the live Squarespace CDN)

## URL slugs (match the live Squarespace site — do not rename, preserves SEO)
`/` · `/about-belinda-dunne` · `/pricing` · `/faqs` · `/boudoir-photoshoot-gallery-auckland` ·
`/maternity-photography` · `/contact-boudoir-photography-auckland` · `/terms-and-conditions` ·
`/privacy-policy` (new — didn't exist on the live site, added because the site has a contact form)
Short aliases redirect in astro.config.mjs: `/about`, `/faq`, `/gallery`, `/contact`

## Copy rules
- Belinda's usual rules apply (no em dashes, no "actually", no "honest"/"honestly")
- Keep the current tone: warm, body-positive, direct — this is the one site where a bit of
  frankness ("hell yes", "damn... is that really me?") is on-brand, don't sand it down to
  match the more corporate tone of the other two sites

## SEO (baked in from the start, per the migration brief)
- Base.astro: canonical, OG, Twitter card, ProfessionalService JSON-LD, one H1/page
- FAQs page: FAQPage JSON-LD
- public/robots.txt (welcomes GPTBot, ClaudeBot, PerplexityBot, Google-Extended…), llms.txt
- Sitemap auto-generated → sitemap-index.xml

## Images
All 38 real photos were pulled straight from the LIVE boudoirphotographyauckland.co.nz
(Squarespace CDN), not from any local Desktop folder — see [[feedback_dont_use_desktop_folders_for_website_photos]].
Organised under `public/images/{home,about,gallery,maternity}/`. Downloaded via curl with
`?format=1500w`, then normalised with `sips` (the CDN actually served WebP regardless of the
requested extension, so everything was converted to real JPEG and capped at 1600px). Do not pull
from ~/Desktop/boudoir/ or ~/Desktop/Boudoir maybes/ — those are unrelated to this site.

## Contact form
Both contact forms (standalone contact page + homepage embedded section) post to Web3Forms,
using this site's own dedicated form ("Boudoir Photography Auckland Contact Form", access key
ff781121-c927-40fe-89a9-f7798a2a0838), one of three separate forms under Belinda's single
Web3Forms account (belinda.r.bullock@gmail.com) alongside BBP and Digital Twin Imaging — each
site has its own form so submissions are kept apart in the dashboard, all routing to the same
inbox. Set up 2026-09-02.

## Deployment — THE SITE IS LIVE (verified 2026-09-03)
GitHub `belinda-bullock/boudoirphotographyauckland-nz` → Cloudflare Pages →
https://www.boudoirphotographyauckland.co.nz. A push to `main` publishes to the real site
within a minute or two. Do not push without asking Belinda first, each time.
Check the live site with curl before claiming anything about deployment state.

Still outstanding:
- Terms & conditions and privacy policy are legal pages — have Belinda (or a lawyer) confirm
  wording, per the build guide's advice.
- Confirm Cloudflare's AI Crawl Control isn't overriding robots.txt.
- Squarespace: check with Belinda whether it has been cancelled yet. Cancel LAST, on her say-so only.

## Image formats — check before trusting a file extension
Files pulled from the Squarespace CDN were served as WebP no matter what extension was requested.
`public/images/boudoir-logo.png` was a WebP named `.png` and went live that way: Chrome sniffed the
bytes and rendered it, Safari trusted the name (Cloudflare also sends `nosniff`) and showed nothing,
so the logo was invisible in the nav and footer of every page for every Safari/iOS visitor.
Fixed 2026-09-03 with `sips -s format png`. Verify with `file -b` after adding any image; never
assume the extension is honest.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
