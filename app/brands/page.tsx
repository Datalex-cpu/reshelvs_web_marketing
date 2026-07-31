import { Section, Eyebrow } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Solutions',
  'How Reshelvs fits brand owners, distributors, retailers, and the field reps walking the stores.',
);

const segments = [
  {
    id: 'brand-owners',
    tag: 'Brand owners',
    title: 'See your shelves, not your forms',
    body:
      'Get AI-vision OSA, share-of-shelf, and planogram compliance across distributors you don\'t directly own. Sample audits without bolting on point apps.',
    points: [
      'AI shelf vision: facings, OSA, SOS',
      'Cross-distributor visibility',
      'Planogram & POSM compliance',
      'Trade-marketing scheme tracking',
    ],
  },
  {
    id: 'distributors',
    tag: 'Distributors',
    title: 'Run mixed-portfolio fleets',
    body:
      'One tenant, many companies, many brands. RBAC, multi-company isolation, and per-channel visit flows let one distributor service every principal in one app.',
    points: [
      'Multi-company per tenant',
      'Route auto-gen + geo-clustering',
      'Field productivity KPIs',
      'ERP / DMS integrations',
    ],
  },
  {
    id: 'retailers',
    tag: 'Retailers',
    title: 'In-store execution, on time',
    body:
      'For modern-trade chains running their own merchandising teams. Geofenced attendance, planogram audits, and replenishment reports your category managers can act on.',
    points: [
      'Geofenced check-in',
      'Planogram audits',
      'Replenishment fill rate',
      'Store-class chip lookup',
    ],
  },
  {
    id: 'field-reps',
    tag: 'Field reps',
    title: 'Less paperwork. More selling.',
    body:
      'A mobile app that actually respects the rep — biometric unlock, offline-first, native nav hand-off, voice notes, and a visit flow that takes seconds, not minutes.',
    points: [
      'Biometric unlock + offline cache',
      'One-tap navigation hand-off',
      'Voice notes + photo capture',
      'No more end-of-day data entry',
    ],
  },
];

export default function SolutionsPage() {
  return (
    <Section>
      <Eyebrow>Solutions</Eyebrow>
      <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium tracking-display md:text-6xl">
        One platform.{' '}
        <span className="text-fg-muted">Every role in the field.</span>
      </h1>
      <p className="mt-6 max-w-xl text-fg-muted">
        Reshelvs is built around four people: the rep walking the route, the
        supervisor planning beats, the brand owner tracking shelves, and the
        distributor running the whole show.
      </p>

      <div className="mt-16 space-y-16">
        {segments.map((s, i) => (
          <FadeIn key={s.id} delay={i * 0.04}>
            <section
            id={s.id}
            className="grid items-start gap-10 border-t border-border pt-16 md:grid-cols-[1fr_1.4fr]"
          >
            <div>
              <div className="text-xs uppercase tracking-[0.15em] text-fg-subtle">
                {String(i + 1).padStart(2, '0')} · {s.tag}
              </div>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
                {s.title}
              </h2>
            </div>
            <div>
              <p className="text-fg-muted">{s.body}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 rounded-md border border-border bg-bg-surface px-3 py-2 text-sm"
                  >
                    <span className="mt-0.5 text-fg/80">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button variant="secondary" href={`/brands/${s.id}`}>
                  Read more →
                </Button>
              </div>
            </div>
            </section>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
