'use client';

import { motion } from 'framer-motion';

export function AnimatedGradient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-60" />
      <motion.div
        className="absolute -top-32 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-accent-violet/40 blur-[140px]"
        animate={{ x: ['-30%', '30%', '-30%'], y: ['-10%', '10%', '-10%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-20 right-0 h-[520px] w-[520px] rounded-full bg-accent-cyan/30 blur-[140px]"
        animate={{ x: ['10%', '-10%', '10%'], y: ['0%', '15%', '0%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-accent-pink/25 blur-[140px]"
        animate={{ x: ['-15%', '15%', '-15%'], y: ['10%', '-5%', '10%'] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}
