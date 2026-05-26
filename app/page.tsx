import { Section, Eyebrow } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ShaderHero } from '@/components/hero/ShaderHero';
import { WaitlistForm } from '@/components/hero/WaitlistForm';
import { BrandMarquee } from '@/components/marquee/BrandMarquee';
import { FeatureBento } from '@/components/bento/FeatureBento';
import { CodeTabs } from '@/components/code/CodeTabs';
import { FadeIn } from '@/components/ui/FadeIn';

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <ShaderHero />
        <div className="mx-auto max-w-5xl px-6 pb-28 pt-28 text-center md:pt-44">
          <FadeIn>
            <Eyebrow className="mx-auto">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Now in private beta
            </Eyebrow>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.02] tracking-tight md:text-7xl">
              The shelf where{' '}
              <span className="text-brand-gradient">brands belong</span>.
            </h1>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="mx-auto mt-7 max-w-xl text-base text-fg-muted md:text-lg">
              Reshelvs is the platform for the brands building what comes next.
              Storefronts that load instantly. Shelves that learn. A headless
              API for every surface you'll ever ship.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mx-auto mt-10 flex flex-col items-center gap-4">
              <WaitlistForm />
              <p className="text-xs text-fg-subtle">
                Join 400+ brands. We'll email you when your shelf is ready.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <BrandMarquee />
      </FadeIn>

      <Section>
        <FadeIn>
          <div className="mb-14 text-center">
            <Eyebrow className="mx-auto">Platform</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-medium tracking-tight md:text-5xl">
              Everything brands need.{' '}
              <span className="text-fg-muted">Nothing they don't.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-fg-muted">
              One platform for storefronts, shelves, insights, and the API
              that powers them all.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.05}>
          <FeatureBento />
        </FadeIn>
      </Section>

      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <div>
              <Eyebrow>Developer first</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-medium tracking-tight md:text-5xl">
                A headless API for{' '}
                <span className="text-fg-muted">every surface.</span>
              </h2>
              <p className="mt-5 max-w-md text-fg-muted">
                Ship a storefront in minutes or compose your own with our
                type-safe SDK. Webhooks, GraphQL, REST — whichever you reach
                for, we're ready.
              </p>
              <div className="mt-8 flex gap-3">
                <Button href="/docs">Read the docs</Button>
                <Button variant="secondary" href="/product">
                  Explore product
                </Button>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <CodeTabs />
          </FadeIn>
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-bg-surface to-bg-deep p-10 md:p-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-violet/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-accent-cyan/20 blur-3xl" />
            <div className="relative max-w-xl">
              <Eyebrow>Get started</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-medium tracking-tight md:text-5xl">
                Build the shelf you've always wanted.
              </h2>
              <p className="mt-5 text-fg-muted">
                Join the brands going live on Reshelvs. It takes five minutes.
              </p>
              <div className="mt-8 flex gap-3">
                <Button href="/#waitlist">Join the waitlist</Button>
                <Button variant="secondary" href="/contact">
                  Talk to us
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
