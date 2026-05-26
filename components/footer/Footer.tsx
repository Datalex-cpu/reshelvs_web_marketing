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
    <footer className="relative mt-32 border-t border-border bg-bg-deep">
      <Wordmark />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-2 gap-10 px-6 pb-16 pt-24 md:grid-cols-5 md:pt-32">
        <div className="col-span-2 md:col-span-2">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
            <span className="inline-block h-5 w-5 rounded-md bg-brand-gradient" />
            <span>Reshelvs</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-fg-muted">
            The modern shelf for your brands. Built for the next decade of
            commerce.
          </p>
          <p className="mt-6 text-xs leading-relaxed text-fg-subtle">
            Reshelvs, Inc.
            <br />
            Made with care.
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

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 border-t border-border px-6 py-6 text-xs text-fg-subtle md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} Reshelvs, Inc. All rights reserved.</span>
        <div className="flex items-center gap-5">
          <Link href="/legal/privacy" className="hover:text-white">Privacy</Link>
          <Link href="/legal/terms" className="hover:text-white">Terms</Link>
          <a
            href="https://github.com/datalex-cpu"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

function Wordmark() {
  return (
    <div
      aria-hidden
      className="pointer-events-none relative w-full overflow-hidden select-none"
    >
      <div className="mx-auto max-w-[1600px] px-2">
        <div className="relative h-[clamp(140px,28vw,420px)]">
          <svg
            viewBox="0 0 1000 260"
            preserveAspectRatio="xMidYMax meet"
            className="absolute inset-x-0 bottom-0 w-full"
          >
            <defs>
              <linearGradient id="rs-wordmark" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#1a1a1a" />
                <stop offset="100%" stopColor="#0a0a0a" />
              </linearGradient>
              <linearGradient id="rs-wordmark-mask" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="60%" stopColor="white" stopOpacity="1" />
              </linearGradient>
              <mask id="rs-fade">
                <rect width="1000" height="260" fill="url(#rs-wordmark-mask)" />
              </mask>
            </defs>
            <text
              x="500"
              y="248"
              textAnchor="middle"
              fontFamily="Inter, system-ui, sans-serif"
              fontWeight="600"
              fontSize="300"
              letterSpacing="-14"
              fill="url(#rs-wordmark)"
              mask="url(#rs-fade)"
            >
              Reshelvs
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
