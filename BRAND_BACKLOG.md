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

## Do next — brand + a11y pass (high) — ✅ SHIPPED 2026-06-20

- [x] **5. Pull status colors out of chrome** — both forms now use mono
  tokens (success → `text-fg-muted`, error → `text-fg`); hero eyebrow dot
  `bg-emerald-400` → `bg-fg/70` (glow dropped); OG status dot `#10b981` →
  `#6b6b6b`. `AnnouncementBar.tsx` left as-is (DESIGN_SYSTEM.md permits it).
  Remaining emerald/rose are inside product mocks (ProductPreview,
  FeatureBento) only — allowed.
- [x] **6. Light-theme contrast + iPhone-393 hero wrap** — `--fg-subtle`
  #9b9b9b → **#737373** (verified 4.54:1 on #fafafa — AA; the audit's
  #767676 was only 4.35:1). Hero "operating system" wrapped in a
  `whitespace-nowrap` span so it holds together at 393px.

## Backlog (medium/low)

- [x] Relabel headline stat band (10k+ stores, <1s) as design targets — `components/stats/Stats.tsx` — added a "platform capacity and design targets" caption framing all four numbers
- [x] "Representative interface — not a live screenshot" caption on ProductPreview
- [ ] Replace ~9 hand-rolled Card-surface divs with `<Card>` (9 pages)
- [x] Use `<Section>` in `app/legal/layout.tsx`
- [x] Marketplace status pill → theme-aware (now uses border/fg tokens — the
  `text-white` pill was invisible on light theme)
- [x] Lower 2 chrome wordmarks `font-semibold` → `font-medium` (Navbar, Footer)
- [ ] Route 3 dynamic detail pages' metadata through `pageMetadata()`
- [x] Fix operator-precedence bug in OG image `siteUrl` (yields `https://undefined`) — done alongside #5
- [x] Add `focus-visible` rings to bare nav/FAQ/footer/announcement links — added a shared `.focus-ring` utility in globals.css (keyboard-only, 2px fg ring) and applied it across Navbar, Footer, AnnouncementBar, FAQ
- [x] Complete FAQ accordion ARIA (`aria-controls`, `id`, `role="region"`, `aria-labelledby`)
- [x] Fix careers heading-level skip (h1 → h3) — added an "Open roles" h2
- [x] Associate ContactForm labels with inputs (`htmlFor`/`id`); ring focus cue
- [ ] Make product-mock internals theme-aware (light-mode rendering)
- [x] Remove `shadow-lg` on theme-toggle dropdown (now border + inset glint)

### Found mid-loop (not in original audit) — credibility

- [x] **Marketplace API overclaim** — `/marketplace` "Build your own" said
  "The public REST API v1 exposes…" present-tense; softened to
  "(private-beta preview)". Intro "ships first-party connectors" →
  "is building".
- [x] **Connector statuses** — SAP / Salesforce / Slack were marked **Live
  (callable today)** for a private-beta product with a non-public API.
  Downgraded all `live` → `beta`; added a roadmap disclaimer on the page +
  a note in `content/connectors.ts`. ⚠️ If any connector is genuinely live,
  promote it back.
- [ ] **Connector detail descriptions** still read present-tense
  ("the connector posts…", "hourly job pulls…") on `/marketplace/[slug]`.
  Reword to design-partner-beta framing in a later pass.
- [ ] Align small-heading tracking with the scale rule (polish)
