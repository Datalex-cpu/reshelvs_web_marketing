# Design system

Reshelvs is dark-first and pure monochrome. The brand is built on two
anchors — pure black `#000000` and pure white `#FFFFFF` — with a narrow
ramp of neutrals between them. The reference quality bar is resend.com.

The "R" mark is the heart of the brand. It's a geometric, 45°-aligned
letterform with consistent stroke width — kept in `/public` as SVG and
rendered in-app via `<LogoMark />` and `<LogoLockup />`.

## Tokens

### Color

| Token         | Hex / value                | Use                         |
| ------------- | -------------------------- | --------------------------- |
| `bg`          | `#000000`                  | Page background             |
| `bg.deep`     | `#000000`                  | Footer, deepest surfaces    |
| `bg.surface`  | `#0a0a0a`                  | Cards, panels               |
| `bg.raised`   | `#111111`                  | Elevated surfaces           |
| `bg.elevated` | `#161616`                  | Doubly-elevated surfaces    |
| `fg`          | `#ffffff`                  | Primary text                |
| `fg.muted`    | `#a1a1a1`                  | Secondary text              |
| `fg.subtle`   | `#6b6b6b`                  | Captions, labels            |
| `fg.faint`    | `#404040`                  | Borders-as-type, watermarks |
| `border`      | `rgba(255,255,255,0.08)`   | Hairline borders            |
| `border.strong` | `rgba(255,255,255,0.16)` | Hover, focus borders        |

No accent hues. Status colors (emerald for "done", rose for "alert")
are allowed inside product mocks and the announcement bar because they
communicate state, not brand — but they never appear in body copy,
headings, or marketing decoration.

### Typography

- **Display** — Inter Display (fallback: Inter). Used for headings.
- **Body** — Inter, loaded via `next/font/google`.
- **Mono** — Geist Mono (fallback: JetBrains Mono). Used in code tabs.

Sizes follow Tailwind defaults; hero headlines use `text-5xl`–`text-7xl`
with `tracking-tight` and `font-medium` (not `font-bold`). The wordmark
in the lockup uses Inter at `font-medium` with `-tracking-tight`.

### Motion

- Hero spotlight blobs: 22–32s ease-in-out, infinite, white-only.
- Fade-up: 600ms ease-out, 12px translate.
- Marquee: 30s linear, infinite.
- Hover: 200ms color/opacity transitions.

## Logo

Files in `/public`:

| File                       | Use                                          |
| -------------------------- | -------------------------------------------- |
| `reshelvs_ios_logo.png`    | Primary mark — favicon, apple-touch, nav     |
| `R.png`                    | Outline / line-art variant                   |
| `4 Icons.png`              | Brand-guide reference of all icon variants   |

In React, prefer `<LogoMark />` from `components/ui/Logo.tsx`. It
renders the official PNG via `next/image` so the file is downscaled
crisply at small sizes (nav, footer) and served at full resolution
for larger usages.

## Primitives

`Button`, `Card`, `Section`, `Eyebrow`, `Badge`, `LogoMark`,
`LogoLockup` — see `components/ui/`.

## Patterns

- **Hero** — white-spotlight blobs + grid background + centered headline
  + inline waitlist input. See `app/page.tsx`.
- **Bento** — 3-column grid where one or two tiles span 2 columns.
- **Code tabs** — language switcher above a monospace block. Replace
  the placeholder rendering with Shiki once content is final.
- **Marquee** — horizontal infinite scroll with edge fades to bg.

## Don'ts

- No chromatic gradients (violet/cyan/pink, etc.). The brand is
  monochrome — period.
- No drop shadows on cards (use border + subtle white wash overlay).
- No emoji in copy unless quoting a customer.
- No filled buttons in section bodies except the primary CTA.
- No more than one `text-gradient` (white-to-grey wash) per viewport.
- No status colors (emerald/rose) in marketing copy or section headers.
