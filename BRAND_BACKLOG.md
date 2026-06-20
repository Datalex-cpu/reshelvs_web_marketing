# Brand + credibility backlog

Generated from a 6-dimension multi-agent audit (2026-06-20). 55 raw
findings → prioritized below. The monochrome brand system itself is
sound (zero `font-bold`, no chromatic gradients, clean theme-token
parity). The gaps are **credibility/legal** (false-fact claims, real
third-party trademarks) plus small brand leaks and a11y.

Worked top-to-bottom by the self-paced `/loop`. Check items off as shipped.

## Do now — credibility/legal pass (blockers) — ✅ SHIPPED 2026-06-20

- [x] **1. Strip real retailer trademarks** — marquee now shows retail
  *channels* (Hypermarkets/Supermarkets/…); hero mock rows now store-type +
  district ("Hypermarket · Olaya"). Zero real trademarks in source.
- [x] **2. De-fabricate home testimonial + trust strip** — testimonial is
  now Reshelvs' own thesis (no named person); trust strip reads "Built for
  the teams that run the field" with audience categories.
- [x] **3. Relabel fabricated case studies** — `customers.ts` rewritten as
  archetype scenarios (no named individuals, no quotes); metrics → labelled
  "Illustrative targets"; both routes carry a private-beta disclaimer. Slugs
  changed → sitemap auto-tracks.
- [x] **4. Gate developers/API + pricing FAQ as preview/roadmap** — dev cards
  route to /contact with Coming-soon/Private-beta badges; 99.95% SLA dropped;
  CodeTabs carries an "API preview" caption; pricing Arabic + integrations
  FAQs softened to match shipped reality.

## Do next — brand + a11y pass (high)

- [ ] **5. Pull status colors out of chrome** — `components/hero/WaitlistForm.tsx`,
  `components/contact/ContactForm.tsx`, `app/page.tsx`, `app/opengraph-image.tsx`.
  Replace emerald/rose status text with mono tokens (also fixes WCAG).
  **NOTE:** the announcement-bar emerald is *explicitly permitted* by
  DESIGN_SYSTEM.md — leave `AnnouncementBar.tsx` alone unless the user
  tightens that doc.
- [ ] **6. Light-theme contrast + iPhone-393 hero wrap** — `app/globals.css`,
  `app/page.tsx`. Darken `--fg-subtle` #9b9b9b → ~#767676 (AA); hold the
  hero noun phrase together at 393px.

## Backlog (medium/low)

- [ ] Relabel headline stat band (10k+ stores, <1s) as design targets — `components/stats/Stats.tsx`
- [ ] "Representative interface — not a live screenshot" caption on ProductPreview
- [ ] Replace ~9 hand-rolled Card-surface divs with `<Card>` (9 pages)
- [ ] Use `<Section>` in `app/legal/layout.tsx`
- [ ] Marketplace status pill → theme-aware / `<Badge>`
- [ ] Lower 2 chrome wordmarks `font-semibold` → `font-medium` (Navbar, Footer)
- [ ] Route 3 dynamic detail pages' metadata through `pageMetadata()`
- [ ] Fix operator-precedence bug in OG image `siteUrl` (yields `https://undefined`)
- [ ] Add `focus-visible` rings to bare nav/FAQ/footer/announcement links
- [ ] Complete FAQ accordion ARIA (`aria-controls`, `id`, `role="region"`)
- [ ] Fix careers heading-level skip (h1 → h3)
- [ ] Associate ContactForm labels with inputs; stronger focus cue
- [ ] Make product-mock internals theme-aware (light-mode rendering)
- [ ] Remove `shadow-lg` on theme-toggle dropdown
- [ ] Align small-heading tracking with the scale rule (polish)
