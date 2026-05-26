# Design system

Reshelvs is dark-first, with a soft brand gradient (violet → cyan → pink)
used sparingly for emphasis. The reference quality bar is resend.com.

## Tokens

### Color

| Token         | Hex / value                | Use                         |
| ------------- | -------------------------- | --------------------------- |
| `bg`          | `#0a0a0a`                  | Page background             |
| `bg.deep`     | `#000`                     | Footer, deepest surfaces    |
| `bg.surface`  | `#111`                     | Cards, panels               |
| `bg.raised`   | `#1a1a1a`                  | Elevated surfaces           |
| `fg`          | `#fafafa`                  | Primary text                |
| `fg.muted`    | `#a3a3a3`                  | Secondary text              |
| `fg.subtle`   | `#737373`                  | Captions, labels            |
| `border`      | `rgba(255,255,255,0.08)`   | Hairline borders            |
| `accent.violet` | `#8b5cf6`                | Gradient stop               |
| `accent.cyan`   | `#22d3ee`                | Gradient stop               |
| `accent.pink`   | `#ec4899`                | Gradient stop               |

### Typography

- **Display** — Inter Display (fallback: Inter). Used for headings.
- **Body** — Inter, loaded via `next/font/google`.
- **Mono** — Geist Mono (fallback: JetBrains Mono). Used in code tabs.

Sizes follow Tailwind defaults; hero headlines use `text-5xl`–`text-7xl`
with `tracking-tight` and `font-medium` (not `font-bold`).

### Motion

- Hero gradient blobs: 18–26s ease-in-out, infinite, large translate.
- Fade-up: 600ms ease-out, 12px translate.
- Marquee: 30s linear, infinite.
- Hover: 200ms color/opacity transitions.

## Primitives

`Button`, `Card`, `Section`, `Eyebrow`, `Badge` — see `components/ui/`.

## Patterns

- **Hero** — gradient blobs + grid background + centered headline +
  inline waitlist input. See `app/page.tsx`.
- **Bento** — 3-column grid where one or two tiles span 2 columns.
- **Code tabs** — language switcher above a monospace block. Replace
  the placeholder rendering with Shiki once content is final.
- **Marquee** — horizontal infinite scroll with edge fades to bg.

## Don'ts

- No drop shadows on cards (use border + subtle gradient overlay).
- No emoji in copy unless quoting a customer.
- No filled buttons in section bodies except the primary CTA.
- No more than three brand-gradient surfaces per viewport.
