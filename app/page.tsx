import { Section, Eyebrow } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/ui/FadeIn';
import { HeroBackdrop } from '@/components/hero/HeroBackdrop';
import { WaitlistForm } from '@/components/hero/WaitlistForm';
import { BrandMarquee } from '@/components/marquee/BrandMarquee';
import { TrustedBy } from '@/components/marquee/TrustedBy';
import { FeatureBento } from '@/components/bento/FeatureBento';
import { CodeTabs } from '@/components/code/CodeTabs';
import { Stats } from '@/components/stats/Stats';
import { ProductPreview } from '@/components/preview/ProductPreview';
import { Testimonial } from '@/components/testimonial/Testimonial';
import { IntegrationsGrid } from '@/components/integrations/IntegrationsGrid';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <HeroBackdrop />
        <FadeIn className="mx-auto max-w-5xl px-6 pb-14 pt-16 text-center md:pt-24">
          <Eyebrow className="mx-auto">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-fg/70" />
            Now in private beta
          </Eyebrow>
          <h1 className="mx-auto mt-6 max-w-5xl font-display text-5xl font-medium leading-[1.02] tracking-display sm:text-6xl md:text-7xl lg:text-8xl">
            The <span className="whitespace-nowrap">operating system</span> for{' '}
            <span className="text-gradient">FMCG field teams</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-fg-muted md:text-lg">
            Routes, visits, on-shelf availability, and field reports — in one
            platform built for the way your field actually works.
          </p>
          <div className="mx-auto mt-8 flex flex-col items-center gap-4">
            <WaitlistForm />
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-fg-subtle">
              <span>No credit card.</span>
              <span aria-hidden>·</span>
              <span>90-second onboarding.</span>
              <span aria-hidden>·</span>
              <a href="/product" className="hover:text-fg">
                See the product →
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Trusted by — above-the-fold social proof */}
        <FadeIn className="pb-10" delay={0.08}>
          <TrustedBy />
        </FadeIn>

        {/* Product preview — slides up under hero */}
        <FadeIn className="mx-auto max-w-6xl px-6 pb-16" delay={0.04}>
          <ProductPreview />
        </FadeIn>
      </section>

      <FadeIn>
        <BrandMarquee />
      </FadeIn>

      {/* Stats */}
      <Section className="!py-20 md:!py-24">
        <FadeIn>
          <Stats />
        </FadeIn>
      </Section>

      {/* Features bento */}
      <Section className="!pt-0">
        <FadeIn className="mb-14 max-w-2xl">
          <Eyebrow>Features</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium tracking-display md:text-5xl">
            Everything your field team needs.{' '}
            <span className="text-fg-muted">Nothing it doesn't.</span>
          </h2>
          <p className="mt-5 text-fg-muted">
            Six surfaces — built to replace the patchwork of point apps,
            paper checklists, and weekly spreadsheets that FMCG teams have
            put up with for years.
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <FeatureBento />
        </FadeIn>
      </Section>

      {/* Developer / integrations */}
      <Section>
        <FadeIn className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>API & integrations</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium tracking-display md:text-5xl">
              Pipe the field into your stack.
            </h2>
            <p className="mt-5 max-w-md text-fg-muted">
              A typed REST API and webhooks for every event your team cares
              about — visits, OSA readings, orders, payments, attendance.
              ERP, BI, and DMS integrations included.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/docs">Read the docs</Button>
              <Button variant="secondary" href="/product">
                Explore product
              </Button>
            </div>
            <div className="mt-8">
              <IntegrationsGrid />
            </div>
          </div>
          <CodeTabs />
        </FadeIn>
      </Section>

      {/* Testimonial */}
      <Section>
        <FadeIn>
          <Testimonial />
        </FadeIn>
      </Section>

      {/* Why Reshelvs — three pillars */}
      <Section>
        <FadeIn className="mb-14 max-w-2xl">
          <Eyebrow>Why Reshelvs</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium tracking-display md:text-5xl">
            Built for the GCC.{' '}
            <span className="text-fg-muted">Ready for the world.</span>
          </h2>
        </FadeIn>
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.06}>
              <Card hover={false} className="h-full">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-fg/5 font-mono text-sm">
                  {p.glyph}
                </div>
                <h3 className="font-display text-lg font-medium tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-fg-muted">{p.body}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-bg-surface to-bg-deep p-10 md:p-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-fg/[0.07] blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-fg/[0.04] blur-3xl" />
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div className="max-w-xl">
                <Eyebrow>Get started</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-medium tracking-display md:text-5xl">
                  Spin up your tenant in 90 seconds.
                </h2>
                <p className="mt-5 text-fg-muted">
                  Join the FMCG teams going live on Reshelvs. Free to try, no
                  credit card. Bring your team and your stores — we'll handle
                  the rest.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Button href="#waitlist" size="lg">
                  Join the waitlist
                </Button>
                <Button variant="secondary" href="/contact" size="lg">
                  Talk to sales
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

const pillars = [
  {
    glyph: 'AR',
    title: 'Built for Arabic & RTL',
    body:
      'Designed GCC-first with Arabic and right-to-left in the foundation — not a translated bolt-on. Rolling out across surfaces.',
  },
  {
    glyph: 'MT',
    title: 'Multi-tenant by design',
    body:
      'One tenant, many companies, many brands. Distributors with mixed portfolios are first-class.',
  },
  {
    glyph: 'GP',
    title: 'GPS you can trust',
    body:
      'Mock-location rejection, geofence enforcement, and tamper-proof attendance — built in, not bought in.',
  },
];
