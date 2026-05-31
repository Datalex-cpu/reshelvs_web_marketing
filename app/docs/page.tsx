import { Section, Eyebrow } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Docs',
  'Reshelvs developer documentation — API, webhooks, SDKs, and field guides.',
);

const sections = [
  {
    tag: 'Quickstart',
    title: 'Spin up a tenant',
    body: 'From signup to your first visit in 90 seconds — onboarding, IDs, and the first beat.',
    href: '#quickstart',
  },
  {
    tag: 'REST API',
    title: 'Typed endpoints',
    body: 'Visits, OSA, attendance, orders, payments. Versioned, idempotent, paginated.',
    href: '#rest',
  },
  {
    tag: 'Webhooks',
    title: 'Events you care about',
    body: 'visit.completed, osa.submitted, attendance.* — signed payloads, replay-safe.',
    href: '#webhooks',
  },
  {
    tag: 'SDKs',
    title: 'Node + Python',
    body: 'First-class clients. Bring-your-own runtime for everything else.',
    href: '#sdks',
  },
  {
    tag: 'Integrations',
    title: 'ERP + DMS + BI',
    body: 'SAP, NetSuite, Odoo, Power BI, Tableau — plus a generic SFTP feed.',
    href: '#integrations',
  },
  {
    tag: 'Field guides',
    title: 'How the field works',
    body: 'Visit flow templates, OSA conventions, GPS edge cases, RTL & multi-language.',
    href: '#field',
  },
];

export default function DocsPage() {
  return (
    <Section>
      <Eyebrow>Docs</Eyebrow>
      <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium tracking-display md:text-6xl">
        Build on Reshelvs.
      </h1>
      <p className="mt-6 max-w-xl text-fg-muted">
        The full reference for the API, webhooks, SDKs, and field operations.
        The complete docs site is shipping with our public beta — for now,
        early-access partners get the OpenAPI spec on request.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/contact">Request the OpenAPI spec</Button>
        <Button variant="secondary" href="/product#api">
          See the API surface
        </Button>
      </div>

      <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((s) => (
          <Card key={s.tag}>
            <div className="text-xs uppercase tracking-[0.15em] text-fg-subtle">
              {s.tag}
            </div>
            <h2 className="mt-3 font-display text-xl font-medium tracking-tight">
              {s.title}
            </h2>
            <p className="mt-2 text-sm text-fg-muted">{s.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
