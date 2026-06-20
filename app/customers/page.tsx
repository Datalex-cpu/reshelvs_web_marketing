import Link from 'next/link';
import { Section, Eyebrow } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { pageMetadata } from '@/lib/seo';
import { customers } from '@/content/customers';

export const metadata = pageMetadata(
  'Customers',
  'How distributors, brand owners, and retail operators use Reshelvs to run the field — illustrative scenarios from a private-beta product.',
);

const segments = [
  {
    tag: 'Distributors',
    title: 'Run mixed-portfolio fleets',
    body:
      'One tenant, many brands. RBAC, multi-company, per-channel visit flows.',
  },
  {
    tag: 'Brand owners',
    title: 'See your shelves, not your forms',
    body:
      'AI-vision OSA, share-of-shelf, planogram compliance — across distributors you don\'t own.',
  },
  {
    tag: 'Retail merch',
    title: 'In-store execution, on time',
    body:
      'Geofenced attendance, route auto-gen, visit flows tuned to your store playbook.',
  },
];

export default function CustomersPage() {
  return (
    <>
      <Section>
        <Eyebrow>Customers</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium tracking-display md:text-6xl">
          Built for the teams that run the field.
        </h1>
        <p className="mt-6 max-w-xl text-fg-muted">
          From single-brand startups to multi-company distributors —
          Reshelvs is built for the people who actually walk the stores.
        </p>
        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-surface px-3 py-1 text-xs text-fg-subtle">
          Illustrative scenarios · Reshelvs is in private beta — no named
          customers yet.
        </p>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {customers.map((c) => (
            <Link
              key={c.slug}
              href={`/customers/${c.slug}`}
              className="group block focus-visible:outline-none"
            >
              <Card className="h-full transition-colors group-hover:border-border-strong">
                <div className="text-xs uppercase tracking-[0.15em] text-fg-subtle">
                  {c.segment} · {c.region}
                </div>
                <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-fg">
                  {c.title}
                </h3>
                <p className="mt-2 max-w-md text-sm text-fg-muted">
                  {c.tagline}
                </p>
                <p className="mt-6 font-display text-base leading-relaxed text-fg/90">
                  {c.thesis}
                </p>
                <div className="mt-6 text-xs text-fg-subtle transition-colors group-hover:text-fg">
                  Read the scenario →
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="mb-10 max-w-2xl">
          <Eyebrow>Segments</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium tracking-display md:text-5xl">
            Who Reshelvs is built for.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {segments.map((s) => (
            <div
              key={s.tag}
              className="rounded-2xl border border-border bg-bg-surface p-6"
            >
              <div className="text-xs uppercase tracking-[0.15em] text-fg-subtle">
                {s.tag}
              </div>
              <h3 className="mt-3 font-display text-xl font-medium tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-fg-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
