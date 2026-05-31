import Link from 'next/link';
import { Section, Eyebrow } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { pageMetadata } from '@/lib/seo';
import {
  connectors,
  CATEGORY_LABEL,
  STATUS_LABEL,
  type ConnectorCategory,
} from '@/content/connectors';

export const metadata = pageMetadata(
  'Marketplace',
  'Connectors that bridge Reshelvs with the systems your team already runs — SAP, Salesforce, Shopify, NetSuite, Slack and more.',
);

const CATEGORY_ORDER: ConnectorCategory[] = [
  'erp',
  'crm',
  'commerce',
  'communication',
  'analytics',
];

export default function MarketplacePage() {
  const grouped = CATEGORY_ORDER.reduce(
    (acc, cat) => {
      const items = connectors.filter((c) => c.category === cat);
      if (items.length > 0) acc[cat] = items;
      return acc;
    },
    {} as Record<ConnectorCategory, typeof connectors>,
  );

  return (
    <Section>
      <Eyebrow>Marketplace</Eyebrow>
      <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium tracking-display md:text-6xl">
        Reshelvs in the systems you already run.
      </h1>
      <p className="mt-6 max-w-2xl text-fg-muted">
        Visits don&apos;t live in isolation. Reshelvs ships first-party
        connectors to the ERP, CRM, and commerce systems your team is
        already paying for — so the data flows both ways without an SI
        project.
      </p>

      {CATEGORY_ORDER.map((cat) => {
        const items = grouped[cat];
        if (!items) return null;
        return (
          <div key={cat} className="mt-16">
            <h2 className="text-xs font-medium uppercase tracking-wider text-fg-muted">
              {CATEGORY_LABEL[cat]}
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {items.map((c) => (
                <Link
                  key={c.slug}
                  href={`/marketplace/${c.slug}`}
                  className="group block focus-visible:outline-none"
                >
                  <Card className="h-full">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm font-medium">{c.name}</div>
                        <div className="mt-0.5 text-[11px] uppercase tracking-wider text-fg-muted">
                          {c.vendor}
                        </div>
                      </div>
                      <span
                        className={
                          'rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider ' +
                          (c.status === 'live'
                            ? 'border-white/30 text-white'
                            : c.status === 'beta'
                              ? 'border-white/20 text-fg-muted'
                              : 'border-white/10 text-fg-muted')
                        }
                      >
                        {STATUS_LABEL[c.status]}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-fg-muted">{c.blurb}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        );
      })}

      <div className="mt-24 rounded-2xl border border-hairline bg-bg-surface p-8">
        <h2 className="font-display text-2xl font-medium tracking-display">
          Build your own
        </h2>
        <p className="mt-3 max-w-xl text-fg-muted">
          The public REST API v1 exposes stores, routes, and visits — bearer
          token, OAuth2 client_credentials. Read the OpenAPI spec at{' '}
          <Link href="/docs/api" className="underline">
            /docs/api
          </Link>{' '}
          to build a custom connector.
        </p>
      </div>
    </Section>
  );
}
