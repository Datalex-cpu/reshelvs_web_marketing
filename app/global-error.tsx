'use client';

import { useEffect } from 'react';

/**
 * Catastrophic fallback — only renders if the ROOT layout itself throws,
 * which replaces the entire document (globals.css + chrome included). So
 * this is intentionally self-contained with inline styles in the brand's
 * light palette. The common case (a route segment throwing) is handled by
 * app/error.tsx, which keeps the nav + footer.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          background: '#fafafa',
          color: '#0a0a0a',
          fontFamily: 'Inter, system-ui, sans-serif',
          textAlign: 'center',
          padding: '24px',
        }}
      >
        <h1
          style={{
            fontSize: '40px',
            fontWeight: 500,
            letterSpacing: '-0.03em',
            margin: 0,
          }}
        >
          Something went wrong.
        </h1>
        <p
          style={{
            color: '#6b6b6b',
            maxWidth: '420px',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          An unexpected error interrupted the page. Try again, or head back to
          the homepage.
        </p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
          <button
            onClick={reset}
            style={{
              border: 'none',
              borderRadius: '9999px',
              background: '#0a0a0a',
              color: '#fafafa',
              padding: '10px 22px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
          <a
            href="/"
            style={{
              borderRadius: '9999px',
              border: '1px solid rgba(0,0,0,0.16)',
              color: '#0a0a0a',
              padding: '10px 22px',
              fontSize: '14px',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            Back to home
          </a>
        </div>
      </body>
    </html>
  );
}
