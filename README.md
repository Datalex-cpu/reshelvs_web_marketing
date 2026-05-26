# reshelvs_web_marketing

Marketing site for **reshelvs.com**. Next.js 14 (App Router) + Tailwind CSS + Framer Motion. Deployed on Vercel.

## Quick start

```bash
pnpm install        # or npm install / yarn
cp .env.example .env.local
pnpm dev
```

Open http://localhost:3000.

## Stack

| Layer       | Choice                                |
| ----------- | ------------------------------------- |
| Framework   | Next.js 14 (App Router, RSC)          |
| Styling     | Tailwind CSS + CSS variables          |
| Animation   | Framer Motion                         |
| Email       | Resend (transactional + waitlist)     |
| Analytics   | Vercel Analytics (+ PostHog optional) |
| Hosting     | Vercel                                |

## Structure

```
app/                Routes (App Router)
  api/waitlist/     Edge function: signup → Resend
components/         UI primitives, hero, marquee, bento, code tabs
lib/                Utilities (cn, seo, analytics)
content/            Future MDX (blog, changelog)
public/             Static assets (fonts, logos, OG images)
```

## Deployment

See `DEPLOYMENT.md` for the exact Vercel + Squarespace DNS setup.

## Design system

See `DESIGN_SYSTEM.md` for colors, typography, and motion specs.

## Branches

- Development: `claude/confident-curie-xw03Y`
- Default: `main` (post-launch)
