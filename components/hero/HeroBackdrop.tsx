'use client';

import dynamic from 'next/dynamic';

/**
 * Lazy-loads the framer-motion hero backdrop so framer-motion stays out of
 * the home page's initial JS bundle. The backdrop is an aria-hidden
 * decoration, so deferring it to a client-only chunk (ssr: false) is
 * invisible in practice — and `ssr: false` is only permitted inside a
 * client component, which is why this thin wrapper exists (the home page
 * itself is a Server Component).
 */
const AnimatedGradient = dynamic(
  () => import('./AnimatedGradient').then((m) => m.AnimatedGradient),
  { ssr: false },
);

export function HeroBackdrop() {
  return <AnimatedGradient />;
}
