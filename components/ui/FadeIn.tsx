'use client';

import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

const variants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

interface Props {
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'header';
  once?: boolean;
  children: React.ReactNode;
}

export function FadeIn({
  className,
  delay = 0,
  as = 'div',
  once = true,
  children,
}: Props) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-80px' }}
      variants={variants}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Comp>
  );
}
