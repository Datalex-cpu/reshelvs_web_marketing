import { Section, Eyebrow } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
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
    features: [
      'Unlimited products',
      'Custom domain',
      'Insights & exports',
      'Email support',
    ],
    cta: 'Start free trial',
    highlight: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    blurb: 'For teams with multiple brands and surfaces.',
    features: ['SSO', '99.99% SLA', 'Dedicated CSM', 'Headless API quota'],
    cta: 'Talk to sales',
    highlight: false,
  },
];

const compare = [
  { feature: 'Storefronts', starter: '1', growth: 'Unlimited', scale: 'Unlimited' },
  { feature: 'Products', starter: '100', growth: 'Unlimited', scale: 'Unlimited' },
  { feature: 'Custom domain', starter: '—', growth: '✓', scale: '✓' },
  { feature: 'Smart shelves', starter: '—', growth: '✓', scale: '✓' },
  { feature: 'Insights exports', starter: '—', growth: '✓', scale: '✓' },
  { feature: 'Webhooks', starter: '—', growth: '5', scale: 'Unlimited' },
  { feature: 'API requests / mo', starter: '10k', growth: '1M', scale: 'Custom' },
  { feature: 'SSO / SAML', starter: '—', growth: '—', scale: '✓' },
  { feature: 'SLA', starter: '—', growth: '99.9%', scale: '99.99%' },
  { feature: 'Support', starter: 'Community', growth: 'Email', scale: 'Dedicated CSM' },
];

const faqs = [
  {
    q: 'Do you offer a free trial on Growth?',
    a: 'Yes — 14 days, no credit card. Cancel anytime.',
  },
  {
    q: 'Can I switch plans later?',
    a: 'Anytime. Upgrades are prorated; downgrades take effect at the next cycle.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'All major cards through Stripe. Annual invoicing available on Scale.',
  },
  {
    q: 'Is there a non-profit / startup discount?',
    a: 'Yes — write to hello@reshelvs.com with a short note about what you\'re building.',
  },
];

export default function PricingPage() {
  return (
    <>
      <Section className="pb-12">
        <FadeIn>
          <div className="text-center">
            <Eyebrow className="mx-auto">Pricing</Eyebrow>
            <h1 className="mx-auto mt-5 max-w-2xl font-display text-5xl font-medium tracking-tight md:text-6xl">
              Simple. <span className="text-fg-muted">Honest.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-md text-fg-muted">
              Start free. Pay for what scales with you. No surprises.
            </p>
          </div>
        </FadeIn>
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {tiers.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.05}>
              <Card
                className={
                  t.highlight ? 'h-full ring-1 ring-white/20' : 'h-full'
                }
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
                    href="/#waitlist"
                    variant={t.highlight ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    {t.cta}
                  </Button>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <FadeIn>
          <h2 className="mb-8 font-display text-3xl font-medium tracking-tight md:text-4xl">
            Compare plans
          </h2>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-bg-surface text-xs uppercase tracking-[0.12em] text-fg-subtle">
                  <th className="px-6 py-4 font-medium">Feature</th>
                  <th className="px-6 py-4 font-medium">Starter</th>
                  <th className="px-6 py-4 font-medium">Growth</th>
                  <th className="px-6 py-4 font-medium">Scale</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={
                      i % 2 === 0 ? 'bg-bg/40' : 'bg-bg-surface/40'
                    }
                  >
                    <td className="px-6 py-4 text-fg">{row.feature}</td>
                    <td className="px-6 py-4 text-fg-muted">{row.starter}</td>
                    <td className="px-6 py-4 text-fg-muted">{row.growth}</td>
                    <td className="px-6 py-4 text-fg-muted">{row.scale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <FadeIn>
          <h2 className="mb-8 font-display text-3xl font-medium tracking-tight md:text-4xl">
            Questions, answered.
          </h2>
        </FadeIn>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((f, i) => (
            <FadeIn key={f.q} delay={i * 0.04}>
              <div className="rounded-2xl border border-border bg-bg-surface p-6">
                <div className="font-medium">{f.q}</div>
                <p className="mt-2 text-sm text-fg-muted">{f.a}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
