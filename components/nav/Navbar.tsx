'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

const nav = [
  { href: '/product', label: 'Product' },
  { href: '/brands', label: 'Brands' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/customers', label: 'Customers' },
  { href: '/changelog', label: 'Changelog' },
  { href: '/blog', label: 'Blog' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'h-14' : 'h-16',
      )}
    >
      <div
        className={cn(
          'mx-auto flex h-full w-full max-w-6xl items-center justify-between px-6 transition-all',
          scrolled && 'glass border-b border-border',
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold"
          onClick={() => setOpen(false)}
        >
          <LogoMark />
          <span className="tracking-tight">Reshelvs</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-fg-muted transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" href="/login">
            Sign in
          </Button>
          <Button size="sm" href="/#waitlist">
            Get started
          </Button>
        </div>
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-muted md:hidden"
        >
          <Burger open={open} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 glass border-t border-border md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-8">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.03 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border py-4 text-lg text-fg transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Button variant="secondary" href="/login" size="lg">
                  Sign in
                </Button>
                <Button href="/#waitlist" size="lg">
                  Get started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function LogoMark() {
  return (
    <span
      aria-hidden
      className="inline-block h-5 w-5 rounded-md bg-brand-gradient"
    />
  );
}

function Burger({ open }: { open: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <motion.path
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        animate={open ? { d: 'M3 3 L11 11' } : { d: 'M2 4 L12 4' }}
      />
      <motion.path
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        animate={open ? { d: 'M3 11 L11 3' } : { d: 'M2 10 L12 10' }}
      />
    </svg>
  );
}
