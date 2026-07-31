import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Section, Eyebrow } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/ui/FadeIn';
import { pageMetadata } from '@/lib/seo';
import {
  connectorBySlug,
  connectors,
  CATEGORY_LABEL,
  STATUS_LABEL,
} from '@/content/connectors';

export function generateStaticParams() {
  return connectors.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = connectorBySlug(slug);
  if (!c) return pageMetadata('Connector not found', '');
  return pageMetadata(`${c.name} — Reshelvs Marketplace`, c.blurb);
}

export default async function ConnectorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = connectorBySlug(slug);
  if (!c) return notFound();

  return (
    <Section>
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-fg-muted">
        <Link href="/marketplace" className="focus-ring hover:text-fg">
          Marketplace
        </Link>
        <span>·</span>
        <span>{CATEGORY_LABEL[c.category]}</span>
        <span>·</span>
        <span>{STATUS_LABEL[c.status]}</span>
      </div>

      <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium tracking-display md:text-6xl">
        {c.name}
      </h1>
      <p className="mt-3 text-sm text-fg-muted">By {c.vendor}</p>

      <p className="mt-8 max-w-2xl text-lg leading-7">{c.description}</p>

      <FadeIn className="mt-16 grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="text-sm font-medium uppercase tracking-wider text-fg-muted">
            Capabilities
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {c.capabilities.map((cap) => (
              <li key={cap} className="flex gap-3">
                <span className="mt-2 h-1 w-1 rounded-full bg-fg/40" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="text-sm font-medium uppercase tracking-wider text-fg-muted">
            Setup steps
          </h2>
          <ol className="mt-4 space-y-3 text-sm">
            {c.setupSteps.map((s, i) => (
              <li key={s} className="flex gap-3">
                <span className="text-xs text-fg-muted tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </Card>
      </FadeIn>

      <div className="mt-12">
        <h2 className="text-xs font-medium uppercase tracking-wider text-fg-muted">
          Required API scopes
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {c.scopes.map((s) => (
            <span
              key={s}
              className="rounded-full border border-hairline px-3 py-1 font-mono text-xs"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-24 rounded-2xl border border-hairline bg-bg-surface p-8">
        <h2 className="font-display text-2xl font-medium tracking-tight">
          Get started
        </h2>
        <p className="mt-3 max-w-xl text-fg-muted">
          {c.status === 'live' && (
            <>
              Available today. Enable from the admin app at{' '}
              <span className="text-fg">Settings → Integrations</span>.
            </>
          )}
          {c.status === 'beta' && (
            <>
              In private beta. Email{' '}
              <a className="underline" href="mailto:sales@reshelvs.com">
                sales@reshelvs.com
              </a>{' '}
              to join.
            </>
          )}
          {c.status === 'soon' && (
            <>
              Coming soon.{' '}
              <Link href="/contact" className="underline">
                Tell us about your use case
              </Link>{' '}
              and we&apos;ll prioritize.
            </>
          )}
        </p>
      </div>
    </Section>
  );
}
