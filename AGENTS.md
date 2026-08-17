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

## TODO before / after go-live
- Contact form (src/pages/contact-boudoir-photography-auckland.astro) posts to a Formspree
  PLACEHOLDER (`https://formspree.io/f/REPLACE_ME`). Replace with a real endpoint before launch.
- Terms & conditions and privacy policy are legal pages — have Belinda (or a lawyer) confirm
  wording before go-live, per the build guide's advice.
- Go live: create GitHub repo → push → connect repo in Cloudflare Pages (build `npm run build`,
  output `dist`) → point boudoirphotographyauckland.co.nz DNS at Pages → confirm live → check
  Cloudflare's AI Crawl Control isn't overriding robots.txt → cancel Squarespace LAST.
  **All of these are explicit-confirmation steps — do not push to GitHub, touch DNS, or cancel
  Squarespace without checking with Belinda first, each time.**

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
