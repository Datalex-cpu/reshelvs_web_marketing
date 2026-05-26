'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
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
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" href="/login">
            Sign in
          </Button>
          <Button size="sm" href="#waitlist">
            Get started
          </Button>
        </div>
      </div>
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
