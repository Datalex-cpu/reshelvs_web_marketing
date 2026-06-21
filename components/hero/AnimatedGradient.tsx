'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Monochrome hero backdrop. No colored gradients — just a soft white
 * spotlight that drifts, the grid bg, and a fade-to-bg at the bottom.
 * Restrained, resend-style.
 *
 * Honours prefers-reduced-motion: the blobs render static (no drift) for
 * users who opt out of motion. CSS animations are handled by the global
 * reduced-motion guard in globals.css.
 */
export function AnimatedGradient() {
  const reduce = useReducedMotion();

  // Drift props per blob — omitted entirely when reduced motion is preferred,
  // so the blob sits at its CSS position with no transform animation.
  const loop = (animate: { x: string[]; y: string[] }, duration: number) =>
    reduce
      ? {}
      : {
          animate,
          transition: {
            duration,
            repeat: Infinity,
            ease: 'easeInOut' as const,
          },
        };

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-60" />
      <motion.div
        className="absolute -top-40 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-fg/[0.10] blur-[160px]"
        {...loop({ x: ['-22%', '22%', '-22%'], y: ['-6%', '8%', '-6%'] }, 22)}
      />
      <motion.div
        className="absolute top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-fg/[0.06] blur-[140px]"
        {...loop({ x: ['8%', '-8%', '8%'], y: ['0%', '12%', '0%'] }, 28)}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-10%] h-[480px] w-[480px] rounded-full bg-fg/[0.05] blur-[140px]"
        {...loop({ x: ['-10%', '10%', '-10%'], y: ['6%', '-4%', '6%'] }, 32)}
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}
