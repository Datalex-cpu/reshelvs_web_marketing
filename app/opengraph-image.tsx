import { ImageResponse } from 'next/og';
import { LOGO_PATHS, LOGO_VIEWBOX } from '@/lib/logo-paths';

export const runtime = 'edge';
export const alt = 'Reshelvs — the operating system for FMCG field teams';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Dynamic Open Graph image — rendered by next/og + satori at the edge.
 * Matches the marketing site's light-default brand (2026-05). Shows
 * the R mark + tagline + url.
 *
 * Note: OG images are static per render. We could fork into light/dark
 * variants and serve the right one based on prefers-color-scheme, but
 * Twitter/LinkedIn cards don't honour that — they pick one URL and
 * display it. So we ship the light card to match the new default
 * theme. The dark version is preserved in git history if we ever want
 * to switch.
 *
 * Next.js auto-wires this as the openGraph + twitter image for every
 * route under app/ (children inherit). To override per-route, add
 * another opengraph-image.tsx in that route folder.
 */
export default async function OG() {
  // No siteUrl/logoUrl needed any more — the mark is drawn inline, so this
  // route has no external dependency and renders identically in every env.
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#fafafa',
          color: '#0a0a0a',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '88px',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        {/* Top row: mark + wordmark. The mark is drawn inline from the shared
            path data — previously this <img>'d the PNG off `siteUrl`, which
            (a) needed a network fetch every render and (b) silently produced a
            blank black square whenever that URL didn't return a real PNG (the
            pre-launch domain 200s an HTML catch-all page). Inline = no fetch,
            no failure mode, and always identical to the in-app LogoMark. */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 22,
              background: '#0a0a0a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              width={62}
              height={62}
              viewBox={LOGO_VIEWBOX}
              fill="#fafafa"
              xmlns="http://www.w3.org/2000/svg"
            >
              {LOGO_PATHS.map((d) => (
                <path key={d.slice(0, 24)} d={d} />
              ))}
            </svg>
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 600,
              letterSpacing: '-2px',
              color: '#0a0a0a',
              display: 'flex',
            }}
          >
            Reshelvs
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 84,
            fontWeight: 500,
            letterSpacing: '-3px',
            lineHeight: 1.05,
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 1000,
          }}
        >
          <span>The operating system</span>
          <span style={{ color: '#6b6b6b' }}>for FMCG field teams.</span>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#9b9b9b',
            fontSize: 22,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: '#6b6b6b',
                display: 'flex',
              }}
            />
            <span style={{ display: 'flex' }}>Now in private beta</span>
          </div>
          <div style={{ display: 'flex' }}>reshelvs.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
