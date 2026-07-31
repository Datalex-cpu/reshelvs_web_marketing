import Link from 'next/link';
import { Section, Eyebrow } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/ui/FadeIn';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Developers',
  'The Reshelvs API — a typed REST API, OAuth2 auth, SDK, and connector marketplace, in private-beta preview for design partners.',
);

// The API surface is real in shape but not yet publicly callable — Reshelvs
// is in private beta. Anything that doesn't exist yet routes to /contact
// ("request early access") instead of linking to a 404. Only /marketplace
// is a live page on this site.
const RESOURCES = [
  {
    title: 'REST API v1',
    blurb: 'OAuth2 client_credentials. Read stores, routes, visits. Cursor-paginated.',
    href: '/contact',
    badge: 'Private beta',
  },
  {
    title: 'OpenAPI 3.1 spec',
    blurb: 'Generates SDKs and Postman collections automatically.',
    href: '/contact',
    badge: 'Coming soon',
  },
  {
    title: 'Connector SDK',
    blurb: '@reshelvs/connector-sdk for TypeScript — auth, pagination, webhook verify.',
    href: '/contact',
    badge: 'Coming soon',
  },
  {
    title: 'Scaffold a connector',
    blurb: 'create-reshelvs-connector — boilerplate to a working connector in seconds.',
    href: '/contact',
    badge: 'Coming soon',
  },
  {
    title: 'Marketplace',
    blurb: 'List your connector. Revenue share, certification — preview the model.',
    href: '/marketplace',
    badge: 'Preview',
  },
  {
    title: 'Status + uptime',
    blurb: 'Live status feed. Enterprise SLA terms in your agreement.',
    href: '/contact',
    badge: 'Coming soon',
  },
];

export default function DevelopersPage() {
  return (
    <Section>
      <Eyebrow>Developers</Eyebrow>
      <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium tracking-display md:text-6xl">
        Build with Reshelvs.
      </h1>
      <p className="mt-6 max-w-xl text-fg-muted">
        A typed REST API, OAuth2 auth, SDK, and connector marketplace — so the
        data running your field execution is yours to integrate.
      </p>
      <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-bg-surface px-3 py-1 text-xs text-fg-subtle">
        API preview · available to design partners in private beta. Request
        early access and we&apos;ll send keys + docs.
      </p>
      <FadeIn className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {RESOURCES.map((r) => (
          <Link key={r.title} href={r.href} className="group block focus-visible:outline-none">
            <Card className="h-full">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-medium">{r.title}</div>
                <span className="whitespace-nowrap rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-fg-subtle">
                  {r.badge}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-fg-muted">{r.blurb}</p>
            </Card>
          </Link>
        ))}
      </FadeIn>
    </Section>
  );
}
