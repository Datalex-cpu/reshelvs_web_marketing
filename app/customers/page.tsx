import Link from 'next/link';
import { Section, Eyebrow } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { pageMetadata } from '@/lib/seo';
import { customers } from '@/content/customers';

export const metadata = pageMetadata(
  'Customers',
  'Distributors, brand owners, and retail operators using Reshelvs to run the field.',
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
          Built with the teams running the field.
        </h1>
        <p className="mt-6 max-w-xl text-fg-muted">
          From single-brand startups to multi-company distributors —
          Reshelvs powers the people who actually walk the stores.
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
                  {c.company}
                </h3>
                <p className="mt-2 max-w-md text-sm text-fg-muted">
                  {c.tagline}
                </p>
                <blockquote className="mt-6 font-display text-base leading-relaxed text-fg/90">
                  "{c.quote}"
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <span
                    aria-hidden
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg-raised font-display text-xs font-medium text-fg"
                  >
                    {c.attribution.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </span>
                  <div>
                    <div className="text-sm font-medium">
                      {c.attribution.name}
                    </div>
                    <div className="text-xs text-fg-muted">
                      {c.attribution.role}
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-xs text-fg-subtle transition-colors group-hover:text-fg">
                  Read the story →
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
            Who runs on Reshelvs.
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
