import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Section';
import { LogoMark } from '@/components/ui/Logo';

const shortcuts = [
  { href: '/product', label: 'Product' },
  { href: '/brands', label: 'Solutions' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/customers', label: 'Customers' },
  { href: '/changelog', label: 'Changelog' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function NotFound() {
  return (
    <div className="relative mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <LogoMark className="h-12 w-12 text-fg" />
      <Eyebrow className="mt-8 mx-auto">404</Eyebrow>
      <h1 className="mt-6 font-display text-5xl font-medium tracking-display md:text-6xl">
        We couldn't find that page.
      </h1>
      <p className="mt-6 max-w-lg text-fg-muted">
        The link might be old, the page might have moved, or we might have
        renamed something. Try one of these instead.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Button href="/">Back to home</Button>
        <Button variant="secondary" href="/contact">
          Tell us what broke
        </Button>
      </div>
      <div className="mt-16 w-full border-t border-border pt-10">
        <div className="text-xs uppercase tracking-[0.15em] text-fg-subtle">
          Or jump to
        </div>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
          {shortcuts.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
