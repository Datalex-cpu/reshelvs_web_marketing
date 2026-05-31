import Link from 'next/link';
import { LogoMark } from '@/components/ui/Logo';

const groups = [
  {
    title: 'Product',
    links: [
      { href: '/product', label: 'Overview' },
      { href: '/product#routes', label: 'Route planning' },
      { href: '/product#visits', label: 'Store visits' },
      { href: '/product#osa', label: 'On-shelf availability' },
      { href: '/product#reports', label: 'Reports & KPIs' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/changelog', label: 'Changelog' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { href: '/brands#brand-owners', label: 'For brand owners' },
      { href: '/brands#distributors', label: 'For distributors' },
      { href: '/brands#retailers', label: 'For retailers' },
      { href: '/brands#field-reps', label: 'For field reps' },
      { href: '/customers', label: 'Case studies' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/blog', label: 'Blog' },
      { href: '/careers', label: 'Careers' },
      { href: '/contact', label: 'Contact' },
      { href: '/legal/privacy', label: 'Privacy' },
      { href: '/legal/terms', label: 'Terms' },
      { href: 'https://status.reshelvs.com', label: 'Status' },
    ],
  },
];

const socials = [
  { href: 'https://twitter.com/reshelvs', label: 'X', icon: 'X' },
  { href: 'https://linkedin.com/company/reshelvs', label: 'LinkedIn', icon: 'in' },
  { href: 'https://github.com/reshelvs', label: 'GitHub', icon: 'GH' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg-deep/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-fg/25 to-transparent"
      />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-10 px-6 py-20 md:grid-cols-5">
        <div className="col-span-2">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-sm font-semibold text-fg"
            aria-label="Reshelvs home"
          >
            <LogoMark className="h-5 w-5" />
            <span className="tracking-tight text-[15px]">Reshelvs</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-fg-muted">
            The operating system for FMCG field teams. Routes, visits,
            on-shelf availability, and reports — in one platform.
          </p>
          <div className="mt-6 flex items-center gap-2">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-fg/[0.03] text-xs text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>
        {groups.map((g) => (
          <div key={g.title}>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-fg-subtle">
              {g.title}
            </h4>
            <ul className="space-y-3 text-sm">
              {g.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-fg-muted transition-colors hover:text-fg"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 border-t border-border px-6 py-6 text-xs text-fg-subtle md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} Reshelvs, Inc. All rights reserved.</span>
        <span className="font-mono uppercase tracking-[0.2em]">
          Built for the field.
        </span>
      </div>
    </footer>
  );
}
