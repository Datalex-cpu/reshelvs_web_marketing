import Link from 'next/link';

const groups = [
  {
    title: 'Product',
    links: [
      { href: '/product', label: 'Overview' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/changelog', label: 'Changelog' },
      { href: '/docs', label: 'Docs' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/customers', label: 'Customers' },
      { href: '/brands', label: 'Brands' },
      { href: '/careers', label: 'Careers' },
      { href: '/blog', label: 'Blog' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/contact', label: 'Contact' },
      { href: '/legal/privacy', label: 'Privacy' },
      { href: '/legal/terms', label: 'Terms' },
      { href: 'https://status.reshelvs.com', label: 'Status' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-10 px-6 py-16 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
            <span className="inline-block h-5 w-5 rounded-md bg-brand-gradient" />
            <span>Reshelvs</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-fg-muted">
            The modern shelf for your brands. Built for the next decade of commerce.
          </p>
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
                    className="text-fg-muted transition-colors hover:text-white"
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
        <span>Made with care.</span>
      </div>
    </footer>
  );
}
