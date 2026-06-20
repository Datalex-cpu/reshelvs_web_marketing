'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { LogoMark } from '@/components/ui/Logo';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

const nav = [
  { href: '/product', label: 'Product' },
  { href: '/brands', label: 'Solutions' },
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

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'relative w-full transition-all duration-300',
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
            className="focus-ring flex items-center gap-2.5 text-sm font-medium text-fg"
            aria-label="Reshelvs home"
            onClick={() => setOpen(false)}
          >
            <LogoMark className="h-6 w-6" />
            <span className="tracking-tight text-[15px]">Reshelvs</span>
          </Link>
          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <Button variant="ghost" size="sm" href="/login">
              Sign in
            </Button>
            <Button size="sm" href="/#waitlist">
              Get started
            </Button>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className="focus-ring relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg transition-colors hover:border-border-strong"
            >
              <BurgerIcon open={open} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu panel — full screen, mono. */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={cn(
          'fixed inset-0 z-40 md:hidden',
          'transition-opacity duration-200',
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      >
        <div
          className="absolute inset-0 bg-bg-deep/95 backdrop-blur-xl"
          onClick={() => setOpen(false)}
        />
        <div className="relative flex h-full flex-col px-6 pb-10 pt-24">
          <nav
            className="flex flex-col gap-1"
            aria-label="Mobile primary"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-xl border border-transparent px-3 py-3 font-display text-2xl font-medium tracking-tight text-fg transition-colors hover:border-border hover:bg-bg-surface"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <Button
              variant="secondary"
              href="/login"
              size="lg"
              className="w-full"
            >
              Sign in
            </Button>
            <Button
              href="/#waitlist"
              size="lg"
              className="w-full"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="square"
      aria-hidden
    >
      {open ? (
        <>
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </>
      ) : (
        <>
          <line x1="3" y1="8" x2="21" y2="8" />
          <line x1="3" y1="16" x2="21" y2="16" />
        </>
      )}
    </svg>
  );
}
