'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ComponentProps } from 'react';

/**
 * Reshelvs marketing theme provider — light default with a user
 * toggle to dark / system (2026-05).
 *
 * Why this exists at all: the marketing site originally hard-coded
 * `<html className="dark">` per the pure-mono-dark commitment. The
 * commitment was reversed in 2026-05 — light became the default and a
 * topbar toggle was added across all three Reshelvs surfaces. This
 * provider sits inside the body of `app/layout.tsx` so it can be a
 * client component without forcing the whole layout into client mode.
 *
 * The actual theme class is applied to <html> by next-themes after
 * hydration. To prevent the flash, a tiny boot script in layout.tsx
 * reads localStorage and pre-applies the class before React mounts.
 */
export function ThemeProvider({ children, ...props }: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      themes={['light', 'dark', 'system']}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
