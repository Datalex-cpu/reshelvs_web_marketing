'use client';

import { motion } from 'framer-motion';

/**
 * Monochrome hero backdrop. No colored gradients — just a soft white
 * spotlight that drifts, the grid bg, and a fade-to-bg at the bottom.
 * Restrained, resend-style.
 */
export function AnimatedGradient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-60" />
      <motion.div
        className="absolute -top-40 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-fg/[0.10] blur-[160px]"
        animate={{ x: ['-22%', '22%', '-22%'], y: ['-6%', '8%', '-6%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-fg/[0.06] blur-[140px]"
        animate={{ x: ['8%', '-8%', '8%'], y: ['0%', '12%', '0%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-10%] h-[480px] w-[480px] rounded-full bg-fg/[0.05] blur-[140px]"
        animate={{ x: ['-10%', '10%', '-10%'], y: ['6%', '-4%', '6%'] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}
