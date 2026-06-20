import { Section, Eyebrow } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FAQ } from '@/components/faq/FAQ';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Pricing',
  'Simple, transparent pricing. Start free, scale as your field team grows.',
);

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    suffix: '',
    blurb: 'For a single team running their first beats.',
    features: [
      'Up to 5 field reps',
      '1 company per tenant',
      'Up to 250 stores',
      'Core visit flow (10 task types)',
      'Community support',
    ],
    cta: 'Get started',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$12',
    suffix: '/ rep / mo',
    blurb: 'For distributors and brand teams scaling field execution.',
    features: [
      'Unlimited stores',
      'Up to 5 companies per tenant',
      'All visit-flow templates',
      'AI shelf vision (OSA)',
      'API + webhooks',
      'Email + chat support',
    ],
    cta: 'Start free trial',
    highlight: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    suffix: '',
    blurb: 'For multi-tenant operators, large distributors, and enterprises.',
    features: [
      'Unlimited companies',
      'Custom RBAC + SSO (SAML / OIDC)',
      'Dedicated CSM + SLA',
      'On-prem / VPC option',
      'ERP & DMS integrations',
      'Audit log export',
    ],
    cta: 'Talk to sales',
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <Section>
      <div className="text-center">
        <Eyebrow className="mx-auto">Pricing</Eyebrow>
        <h1 className="mx-auto mt-5 max-w-2xl font-display text-5xl font-medium tracking-display md:text-6xl">
          Simple. <span className="text-fg-muted">Per-rep. Honest.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-fg-muted">
          Pay only for the reps actively in the field. No setup fees, no
          minimums, no surprises.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
        {tiers.map((t) => (
          <Card
            key={t.name}
            className={t.highlight ? 'ring-1 ring-white/20' : ''}
          >
            <div className="text-xs uppercase tracking-[0.15em] text-fg-subtle">
              {t.name}
            </div>
            <div className="num mt-3 flex items-baseline gap-1.5 font-display">
              <span className="text-5xl font-medium tracking-display">
                {t.price}
              </span>
              {t.suffix && (
                <span className="text-sm text-fg-muted">{t.suffix}</span>
              )}
            </div>
            <p className="mt-3 text-sm text-fg-muted">{t.blurb}</p>
            <ul className="mt-6 space-y-2 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-fg">
                  <span className="mt-0.5 text-fg/80">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button
                href={t.name === 'Scale' ? '/contact' : '/#waitlist'}
                variant={t.highlight ? 'primary' : 'secondary'}
                className="w-full"
              >
                {t.cta}
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center text-xs text-fg-subtle">
        Prices in USD. Local billing available for KSA, UAE, and Egypt.
      </div>

      <div className="mt-32">
        <div className="mb-10 max-w-2xl">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium tracking-display md:text-5xl">
            Questions before you spin up.
          </h2>
        </div>
        <FAQ items={faqs} />
        <p className="mt-8 text-sm text-fg-muted">
          Something we didn't cover?{' '}
          <a
            href="/contact"
            className="text-fg underline-offset-4 hover:underline"
          >
            Ask sales →
          </a>
        </p>
      </div>
    </Section>
  );
}

const faqs = [
  {
    q: 'Where does our data live?',
    a: 'Production data sits in Google Cloud (Firestore) in regional configurations. Enterprise plans can pin data to a specific region — KSA, UAE, or EU — at tenant creation. We do not move data across regions without explicit consent.',
  },
  {
    q: 'Is the rep app Arabic-first?',
    a: 'Arabic and right-to-left are in the foundation — not a translated bolt-on — and we’re rolling that out across surfaces, rep app first, then admin and reports. English is always available, and translation is in-house, not machine-translated. Tell us your tenant’s default language and we’ll confirm exactly what’s live today.',
  },
  {
    q: 'What happens when a rep loses connectivity in-store?',
    a: 'The rep app is offline-first. Visits, OSA captures, attendance, and notes are written locally and synced when connectivity returns. The supervisor console shows a clear "queued" state for anything not yet synced.',
  },
  {
    q: 'How does mock-GPS rejection actually work?',
    a: 'Reshelvs runs an on-device signature check that detects mock-location apps, combined with a geofence-enforced check-in window. If either flag trips, the check-in is rejected at the device and surfaced to the supervisor — no phantom attendance gets into your data.',
  },
  {
    q: 'Can we use Reshelvs for one brand or many?',
    a: 'Both. A tenant can contain one company (single-brand) or many companies (a distributor running multiple principals). RBAC and visit-flow templates are scoped per company so portfolios stay isolated.',
  },
  {
    q: 'What integrations are available?',
    a: 'A typed REST API and webhooks for the events your downstream systems care about — visits, OSA readings, orders, payments, attendance — are in private-beta preview. Connectors for SAP, Oracle NetSuite, Odoo, Power BI, Tableau, and Slack are on the roadmap; enterprise plans get a generic SFTP feed and bespoke connectors. Ask us what’s callable today.',
  },
  {
    q: 'What does the rollout actually look like?',
    a: 'Starter tenants self-serve in about 90 seconds. For Growth and Scale customers we run a guided rollout: one route → one company → full fleet, over two to six weeks. We do not stage-gate features by rollout phase — every customer gets the full product on day one.',
  },
  {
    q: 'Can we leave?',
    a: 'Yes. Tenant admins can export their operational data from the admin portal at any time — JSON for events, CSV for tables. On termination we keep your export available for 30 days and delete on request.',
  },
];
