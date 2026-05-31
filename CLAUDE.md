# CLAUDE.md

Context for any Claude session (Cowork, Claude Code, or other) working on
this repo. Read this file end-to-end before making changes. It captures
decisions, conventions, and current state so you don't re-litigate things
that were already settled.

---

## What this repo is

`reshelvs_web_marketing` is the **public marketing site** for Reshelvs at
`reshelvs.com`. It is **not** the product app — the product lives
separately at `app.reshelvs.com` (different codebase, likely Firebase/
Firestore-backed). This site has zero customer data, zero auth, zero
billing. Its only job: convert visitors into qualified leads (waitlist
signups + sales calls).

## Sibling repos

Three repos make up the Reshelvs surface, all on the same brand:

- `reshelvs_web_marketing` — this repo. Public marketing.
- `../Reshelves_Web` — admin web app (React + Vite + shadcn + Firebase).
  Read its `CLAUDE.md` + `ROADMAP_3MO.md` for the quarter-ahead plan.
- `../Reshelves_Mobile` — field-rep Flutter app. Read its `CLAUDE.md`
  for the brand sweep + Phase 0 schema state.

Both sibling repos ported the monochrome brand system from this one in
the 2026-05 sweep. Any visual change here (tokens, primitives,
patterns) should be propagated to both — they don't auto-track. Update
`DESIGN_SYSTEM.md` here and ping a follow-up in the other two.

**Reshelvs in one sentence:** the operating system for FMCG field teams —
routes, store visits, on-shelf availability (OSA), and field reports in
one platform. GCC-first, Arabic-first (positioning, not yet shipped on
the marketing site), mobile-first, multi-tenant. Currently in private
beta.

**Primary audience for the site:** GCC distributors and FMCG brand
owners. Secondary: retailers with their own merchandising teams, and
field reps as end users.

---

## Stack

- **Framework:** Next.js 14 (App Router, React Server Components)
- **Styling:** Tailwind CSS + CSS variables in `app/globals.css`
- **Animation:** Framer Motion
- **Email:** Resend (transactional + waitlist confirmation)
- **Analytics:** Vercel Analytics (already wired in `app/layout.tsx`)
- **Hosting:** Vercel
- **Fonts:** Inter (via `next/font/google`), Geist Mono fallback
- **TypeScript:** strict mode; `npx tsc --noEmit` must pass before shipping

---

## Brand voice and design system

Read `DESIGN_SYSTEM.md` for the full spec. The high points:

### Visual

- **Monochrome, theme-aware. Light-default (2026-05).** Both light
  and dark themes are real and toggleable via the Navbar (`<ThemeToggle/>`).
  Light is the default — off-white bg (`#fafafa`), pure-white cards,
  near-black text (`#0a0a0a`), 4-step neutral ramp. Dark is the
  original pure-`#000` / pure-`#fff` palette, opt-in via toggle.
  **No chromatic gradients** anywhere (no violet, cyan, pink, etc.)
  on either theme. The previous design used a violet/cyan/pink
  gradient — it was removed in the original 2026-05 brand sweep and
  is still not allowed.
- **Surface tokens are CSS variables**, defined in `app/globals.css`
  under `:root` (light) and `.dark` (dark). Tailwind classes like
  `bg-bg-surface`, `text-fg-muted`, `border-border-strong` reference
  these vars and flip automatically when the theme class toggles on
  `<html>`. Don't reintroduce static hex tokens in `tailwind.config.ts`.
- **Status colors are allowed inside product mocks only** — emerald for
  "done", rose for "alert". These convey state, not brand. Never appear
  in marketing copy, section headers, or chrome.
- **Typography:** Inter / Inter Display. `font-medium` (500), never
  `font-bold` (700). Display headings use `tracking-display` (-0.04em).
- **Reference quality bar:** resend.com. Same family — same restraint,
  same negative space, same hover whisper-soft transitions.

### The R mark

- The active logo is `/public/reshelvs_ios_logo.png` (1024×1024). The
  `LogoMark` React component renders this via `next/image`.
- There were three prior approximation attempts as SVG (v1 / v2 / v3
  in git history). The official PNG superseded all of them. Do **not**
  try to redraw the mark from scratch without a clear request — the
  user has the source and will provide if/when needed.
- Distinctive feature of the mark: the diagonal "leg" goes **down-left**,
  not down-right (reversed from a traditional R). This took 3 iterations
  to learn. Don't re-do.

### Don'ts (carry-over from DESIGN_SYSTEM.md)

- No chromatic gradients
- No drop shadows on cards (use border + subtle white wash)
- No emoji in copy unless quoting a customer
- No filled buttons in section bodies except the primary CTA
- No more than one `text-gradient` (white→muted wash) per viewport
- No status colors (emerald/rose) in marketing copy or section headers

---

## File layout

```
app/
  (page.tsx)              Marketing pages (Server Components by default)
  api/
    contact/route.ts      Edge — forwards form to RESEND_API_KEY + CONTACT_INBOX
    waitlist/route.ts     Edge — uses Resend, optional RESEND_AUDIENCE_ID
  blog/[slug]/            Article detail; data in content/posts.ts
  customers/[slug]/       Case study detail; data in content/customers.ts
  brands/[slug]/          Persona/solution detail (brand-owners, distributors, etc.)
  legal/privacy, terms    Plain-language summaries; binding doc is the MSA
  opengraph-image.tsx     next/og — dynamic 1200×630 social card
  not-found.tsx           Branded 404
  layout.tsx              Root layout, JSON-LD (Organization + WebSite)
  sitemap.ts              Includes all routes (keep in sync when adding pages)
  robots.ts               Standard allow-all

components/
  ui/                     Logo, Button, Card, Section, Eyebrow, Badge — primitives
  nav/                    Navbar (with mobile menu), AnnouncementBar
  footer/                 Footer
  hero/                   AnimatedGradient (mono blobs), WaitlistForm
  bento/                  FeatureBento + per-feature visuals
  code/                   CodeTabs (cURL / Node / Python / Webhook)
  preview/                ProductPreview (synthetic — see "Pending" below)
  testimonial/            Testimonial
  stats/                  Stats
  marquee/                BrandMarquee, TrustedBy
  integrations/           IntegrationsGrid
  faq/                    FAQ accordion
  contact/                ContactForm (client component)

content/
  posts.ts                Blog post data — replace with MDX/CMS later
  customers.ts            Case study data — replace with CMS later

public/
  reshelvs_ios_logo.png   Primary logo source — DO NOT replace without user OK
  R.png                   Outline variant
  4 Icons.png             Brand-guide reference image (not used on site)

lib/
  seo.ts                  pageMetadata() helper
  utils.ts                cn() helper
  analytics.ts            Analytics shim
```

---

## Conventions

### Routing

- **All routes use the App Router.** No legacy `pages/` directory.
- **Deep links** like `/product#routes` rely on `id` attributes on
  bento cards inside `FeatureBento`. Adding a new feature → add an `id`.
  Available ids: `routes`, `osa`, `attendance`, `visits`, `catalog`,
  `reports`.
- **Sitemap is hand-maintained.** When adding a new top-level route,
  add it to `app/sitemap.ts`.

### Env vars (Resend wiring)

- `RESEND_API_KEY` — Resend secret. Read by `/api/contact` and `/api/waitlist`.
- `RESEND_FROM` — verified sender; defaults to `hello@reshelvs.com`.
- `CONTACT_INBOX` — destination for contact-form forwarding; defaults to
  `sales@reshelvs.com`.
- `RESEND_AUDIENCE_ID` — optional; if set, waitlist signups also added
  to a Resend audience.
- `NEXT_PUBLIC_SITE_URL` — used by sitemap, robots, OG image. Defaults
  to `https://reshelvs.com`.

**Variable naming:** SCREAMING_SNAKE_CASE. The user briefly used
`Resend_Emails` and we renamed to `RESEND_API_KEY` for convention.
Don't accept lowercase/CamelCase names — explain the convention and
push back.

**Where they live:** Vercel project → Settings → Environment Variables,
scoped to Production + Preview. After adding new vars, the project
must be **redeployed** for them to take effect.

**Dev / preview safety:** Both API routes are designed to no-op
gracefully when env vars are absent — they return `200 OK` so local
dev forms don't break.

### Content modules

When adding new content (blog post, case study), edit the shared module
in `content/`. Do **not** duplicate content into the index + slug pages
— both should read from the same source.

### Components

- `<Section>` wraps the page in `max-w-6xl px-6 py-24 md:py-32`. Use it.
- `<Eyebrow>` has two variants: `chip` (default, bordered pill) and
  `bare` (uppercase text only, no chip). Use `bare` inside section
  headers where the chip competes with the headline.
- `<Card>` has built-in hover lift (`-translate-y-0.5`) and brightens
  border. Don't override unless you have a reason.
- `<LogoMark>` renders the official PNG. Don't replace with inline SVG.

### Style

- `tracking-tight` for ≤text-4xl, `tracking-display` for ≥text-5xl.
- Numbers in stat/metric blocks get `.num` class for tabular-nums.
- Hero headlines: `text-5xl → sm:text-6xl → md:text-7xl → lg:text-8xl`.
- Hover transitions: 200ms (already the default in `Card`/`Button`).

---

## What's done

- Brand refresh from violet/cyan/pink → pure mono ✅
- Official R-mark wired as primary logo source ✅
- Mobile nav (full-screen takeover, scroll-locked, ESC to close) ✅
- All Tier-1 marketing pages: home, product, pricing, customers (+slug),
  brands (+slug), blog (+slug), careers, changelog, contact, docs,
  login, legal/privacy, legal/terms, 404 ✅
- Working `/api/waitlist` and `/api/contact` (Resend-backed) ✅
- Sitemap, robots, OG image (dynamic via next/og) ✅
- JSON-LD: Organization + WebSite (root), SoftwareApplication (product) ✅
- FAQ on pricing (data residency, RTL, offline, mock-GPS, etc.) ✅
- Hover-lift on cards, tabular-nums on metrics, refined gradient stops ✅
- Vercel env var `RESEND_API_KEY` configured ✅

---

## What's pending

Ordered by impact / effort:

1. **Real product screenshot in the hero.** The biggest visible gap vs.
   resend. Replace the synthetic `ProductPreview` (`DashboardMock` +
   `PhoneMock`) with a screenshot or 60-second Loom recording of the
   real `app.reshelvs.com`. The synthetic mock is well-built but reads
   as a coded illustration on close inspection.

2. **Real customer/distributor logos.** `TrustedBy` and `BrandMarquee`
   use invented (or real-but-unknown) MENA distributor names. Replace
   with at least one or two recognizable partner logos (LOI partners
   are fine) once available.

3. **Resend sender domain verification.** Until `reshelvs.com` is
   verified in Resend → Domains, set `RESEND_FROM=onboarding@resend.dev`
   (Resend's sandbox sender) so test emails actually deliver.

4. **Status page that resolves.** Footer links to
   `status.reshelvs.com`. Set up a Better Stack / Statuspage / static
   page so the link doesn't 404.

5. **Real docs.** `/docs` is a placeholder grid with cards. Build at
   least a `/docs/quickstart` page with the actual signup → first
   visit flow.

6. **Arabic / RTL localization.** Reshelvs positions as "Arabic-first"
   in the brand. The marketing site is English-only. Either ship an
   `/ar` route variant or de-emphasize the Arabic-first claim until
   shipped.

7. **Marketing collateral (separate from the site).** Pending in
   user's task queue:
   - Sales pitch deck (.pptx)
   - One-pager (.pdf)
   - Cold outreach email sequence
   - LinkedIn launch sequence

8. **Hero hamburger nav line-wrap on iPhone 14 Pro width (393px).**
   The headline "operating system for" wraps awkwardly. Minor.

---

## What's intentionally aspirational

So future Claude doesn't "fix" things that are deliberate:

- **The dashboard / phone mocks** are React components, not real
  screenshots. They show what the product *will* look like — replace
  when real UI exists.
- **The case study quotes** in `content/customers.ts` are well-crafted
  but were authored by Claude during a content sweep — they are not
  real customer testimonials. Flag this with the user before treating
  them as real.
- **API code samples** in `CodeTabs` describe the API surface — the
  API itself is not publicly callable yet (it's a private-beta
  product). Sophisticated readers will notice.
- **Customer logos** (Anabil, AlMaha Foods, etc.) are names the user
  gave during the brand-refresh — verify with the user before
  positioning them as real signed customers.

---

## Decisions already made (don't re-litigate)

- **Pure mono only**, no accent color. We went through this. The user
  benchmarked against resend.com and committed to mono.
- **Light-default with user-controllable light / dark / system toggle**
  (2026-05). Was originally dark-only forced; reversed in 2026-05 per
  user direction. Don't re-add `forcedTheme` or hard-code `<html class="dark">`.
- **The R mark's leg goes down-LEFT.** Three iteration cycles to get
  here. Don't redraw.
- **Vercel for marketing site, Firebase for product app.** This is the
  conscious split — don't propose moving marketing to Firebase or
  product to Vercel.
- **Self-serve waitlist + sales-led conversion.** Don't propose
  adding a real signup/login form to the marketing site — that lives
  in the product app.
- **No real auth on marketing site.** `/login` just bounces to
  `app.reshelvs.com`. Don't build a sign-in form.

---

## Open questions to ask the user when relevant

These came up but were deferred:

1. Will Arabic localization ship as `/ar` routes or as a separate
   `ar.reshelvs.com` subdomain? Affects sitemap and middleware design.
2. Should `app.reshelvs.com` be the product or just the signin
   entrypoint? Affects how the `/login` page is worded.
3. Real customer names (any pilot LOIs) — needed before launch.
4. Is the audience ID for the Resend audience set up? If not, that
   waitlist branch silently skips audience insertion.
5. Verified sending domain in Resend?
6. Status page provider (Better Stack vs. Statuspage vs. static)?

---

## How to verify a change

Before declaring "done":

1. `npx tsc --noEmit` — must exit 0
2. Grep for any leftover `violet|cyan|pink|accent-|brand-gradient`
   (excluding `npm-cache`) — should match nothing in source
3. Sitemap includes any new route
4. If editing the hero, eyeball at 393px (iPhone), 768px, 1280px,
   1920px breakpoints
5. If adding a form, verify the API route handles the absent-env-var
   case (return 200, don't throw)

---

## Working style notes

- **Be honest about gaps.** The user has explicitly asked for honest
  comparisons (vs resend) and design critique. Don't sugar-coat.
- **Push back on convention breaks** (e.g., env var naming) once, but
  comply if the user insists. Note the trade-off.
- **Save secrets in env vars.** Never write a literal API key into
  source. If the user pastes one in chat, refuse to write it to disk
  and walk them through Vercel env vars.
- **Use the task list** to track progress on multi-step work — the
  Cowork UI renders it as a widget for the user.
