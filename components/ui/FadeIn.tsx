'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  /** Stagger offset in seconds (e.g. index * 0.06 for a list). */
  delay?: number;
  /** Re-trigger on every scroll-in (default: reveal once). */
  once?: boolean;
  children: ReactNode;
}

/**
 * Scroll-reveal: a subtle 14px rise + fade as the element enters the
 * viewport. Deliberately framework-free (IntersectionObserver + a CSS
 * class) so it adds ~nothing to the bundle — unlike a framer-motion
 * variant, which would pull framer-motion back into every page.
 *
 * Honours prefers-reduced-motion (shows instantly, no transform). The CSS
 * lives in globals.css (.fade-in / .fade-in-shown), and a <noscript> guard
 * in the root layout reveals everything if JS never runs.
 */
export function FadeIn({ className, delay = 0, once = true, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            if (once) io.disconnect();
          } else if (!once) {
            setShown(false);
          }
        }),
      { rootMargin: '0px 0px -80px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn('fade-in', shown && 'fade-in-shown', className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
