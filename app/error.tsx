'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Section';
import { LogoMark } from '@/components/ui/Logo';

/**
 * Route-segment error boundary. Renders inside the root layout, so the nav
 * and footer stay in place — the user sees a branded recovery screen, not a
 * default crash page. `reset()` re-renders the segment to retry.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface to the console / any monitoring wired up later.
    console.error(error);
  }, [error]);

  return (
    <div className="relative mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <LogoMark className="h-12 w-12 text-fg" />
      <Eyebrow className="mt-8 mx-auto">Error</Eyebrow>
      <h1 className="mt-6 font-display text-5xl font-medium tracking-display md:text-6xl">
        Something went wrong.
      </h1>
      <p className="mt-6 max-w-lg text-fg-muted">
        An error on our end interrupted that. Try again — and if it keeps
        happening, tell us and we&apos;ll chase it down.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Button onClick={reset}>Try again</Button>
        <Button variant="secondary" href="/contact">
          Report it
        </Button>
      </div>
      {error.digest && (
        <p className="mt-12 font-mono text-xs text-fg-subtle">
          Reference: {error.digest}
        </p>
      )}
    </div>
  );
}
