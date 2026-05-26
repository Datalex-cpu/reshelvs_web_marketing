import { Section, Eyebrow } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Pricing',
  'Simple, transparent pricing. Start free, scale as you grow.',
);

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    blurb: 'For new brands launching their first shelf.',
    features: ['1 storefront', 'Up to 100 products', 'Community support'],
    cta: 'Get started',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$49',
    blurb: 'For brands ready to scale discovery and revenue.',
    features: ['Unlimited products', 'Custom domain', 'Insights & exports', 'Email support'],
    cta: 'Start free trial',
    highlight: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    blurb: 'For teams with multiple brands and surfaces.',
    features: ['SSO', 'SLA', 'Dedicated CSM', 'Headless API quota'],
    cta: 'Talk to sales',
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <Section>
      <div className="text-center">
        <Eyebrow className="mx-auto">Pricing</Eyebrow>
        <h1 className="mx-auto mt-5 max-w-2xl font-display text-5xl font-medium tracking-tight md:text-6xl">
          Simple. <span className="text-fg-muted">Honest.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-fg-muted">
          Start free. Pay for what scales with you. No surprises.
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
            <div className="mt-3 font-display text-5xl font-medium tracking-tight">
              {t.price}
              {t.price !== 'Free' && t.price !== 'Custom' && (
                <span className="text-base text-fg-muted">/mo</span>
              )}
            </div>
            <p className="mt-3 text-sm text-fg-muted">{t.blurb}</p>
            <ul className="mt-6 space-y-2 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-fg">
                  <span className="text-accent-cyan">✓</span> {f}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button
                href="#waitlist"
                variant={t.highlight ? 'primary' : 'secondary'}
                className="w-full"
              >
                {t.cta}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
