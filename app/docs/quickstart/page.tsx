import Link from 'next/link';
import { Section, Eyebrow } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Quickstart',
  'From signup to your first store visit on Reshelvs — the five steps that take a field team live.',
);

const steps = [
  {
    n: '01',
    title: 'Create your tenant',
    body: 'Sign up and name your workspace. Your tenant is your isolated space — your data, your team, your stores. Nothing is shared across tenants.',
  },
  {
    n: '02',
    title: 'Add your company (or companies)',
    body: 'A single brand runs as one company. Distributors add a company per principal they carry — each with its own catalog, roles, and visit-flow templates, kept isolated inside the one tenant.',
  },
  {
    n: '03',
    title: 'Import your stores',
    body: 'Bring your store list as a CSV, or add stores via the location lookup. Each store gets a geofence, so check-ins can be verified against where the rep actually is.',
  },
  {
    n: '04',
    title: 'Build your first route',
    body: 'Auto-generate a beat from visit frequency, geo-clustering, and rep capacity — or build one by hand. Assign it to a rep and it lands in their app as the day they need to run.',
  },
  {
    n: '05',
    title: 'Run the first visit',
    body: 'The rep checks in (geofence + mock-GPS verified), captures on-shelf availability, completes the visit tasks, and submits. You see it the moment it lands — live attendance, OSA, and photos in the supervisor console.',
  },
];

export default function QuickstartPage() {
  return (
    <Section className="max-w-3xl">
      <Link
        href="/docs"
        className="focus-ring inline-block text-xs uppercase tracking-[0.15em] text-fg-subtle hover:text-fg"
      >
        ← All docs
      </Link>
      <div className="mt-8">
        <Eyebrow>Docs · Quickstart</Eyebrow>
      </div>
      <h1 className="mt-5 font-display text-4xl font-medium leading-tight tracking-display text-fg md:text-5xl">
        Signup to your first visit.
      </h1>
      <p className="mt-5 text-fg-muted">
        Five steps take a field team from nothing to a rep walking a store with
        Reshelvs in hand. Most teams run their first beat the same morning they
        sign up.
      </p>
      <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-surface px-3 py-1 text-xs text-fg-subtle">
        Reshelvs is in private beta — request access to follow along in the app.
      </p>

      <ol className="mt-14 space-y-4">
        {steps.map((s, i) => (
          <li key={s.n}>
            <FadeIn delay={i * 0.05}>
            <Card hover={false} className="flex gap-5">
              <div className="num font-mono text-sm text-fg-subtle">{s.n}</div>
              <div>
                <h2 className="font-display text-lg font-medium tracking-tight text-fg">
                  {s.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {s.body}
                </p>
              </div>
            </Card>
            </FadeIn>
          </li>
        ))}
      </ol>

      <Card hover={false} className="mt-14 md:p-8">
        <div className="text-xs uppercase tracking-[0.15em] text-fg-subtle">
          Next
        </div>
        <h2 className="mt-3 font-display text-2xl font-medium tracking-tight text-fg">
          Wire Reshelvs into your stack.
        </h2>
        <p className="mt-3 max-w-xl text-sm text-fg-muted">
          Once your field is running, pipe visits, OSA, and attendance into your
          ERP, BI, or DMS over the REST API and webhooks (private-beta preview).
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/contact">Request early access</Button>
          <Button variant="secondary" href="/developers">
            See the API
          </Button>
        </div>
      </Card>
    </Section>
  );
}
