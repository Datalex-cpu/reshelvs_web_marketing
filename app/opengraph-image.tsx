import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Reshelvs — the modern shelf for your brands';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background:
            'radial-gradient(at 20% 20%, #1a0b2e 0%, #0a0a0a 60%), radial-gradient(at 80% 80%, #082a36 0%, transparent 70%)',
          color: '#fafafa',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background:
                'linear-gradient(135deg, #8b5cf6 0%, #22d3ee 50%, #ec4899 100%)',
            }}
          />
          <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.5 }}>
            Reshelvs
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 500,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            The modern shelf for your brands.
          </div>
          <div style={{ fontSize: 28, color: '#a3a3a3', maxWidth: 800 }}>
            Beautiful storefronts. Smart shelves. A headless API.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 20,
            color: '#737373',
          }}
        >
          <span>reshelvs.com</span>
          <span>Now in private beta</span>
        </div>
      </div>
    ),
    size,
  );
}
