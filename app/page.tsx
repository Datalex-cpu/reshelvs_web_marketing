import { Section, Eyebrow } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { AnimatedGradient } from '@/components/hero/AnimatedGradient';
import { WaitlistForm } from '@/components/hero/WaitlistForm';
import { BrandMarquee } from '@/components/marquee/BrandMarquee';
import { FeatureBento } from '@/components/bento/FeatureBento';
import { CodeTabs } from '@/components/code/CodeTabs';

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <AnimatedGradient />
        <div className="mx-auto max-w-5xl px-6 pb-24 pt-28 text-center md:pt-40">
          <Eyebrow className="mx-auto">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Now in private beta
          </Eyebrow>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
            The modern shelf for{' '}
            <span className="text-brand-gradient">your brands</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-fg-muted md:text-lg">
            Reshelvs is the platform for brands that want to be discovered,
            organized, and loved. Beautiful storefronts, smart shelves, and a
            headless API — built for the next decade of commerce.
          </p>
          <div className="mx-auto mt-10 flex flex-col items-center gap-4">
            <WaitlistForm />
            <p className="text-xs text-fg-subtle">
              No spam. We'll email you when your shelf is ready.
            </p>
          </div>
        </div>
      </section>

      <BrandMarquee />

      <Section>
        <div className="mb-14 text-center">
          <Eyebrow className="mx-auto">Features</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-medium tracking-tight md:text-5xl">
            Everything brands need.{' '}
            <span className="text-fg-muted">Nothing they don't.</span>
          </h2>
        </div>
        <FeatureBento />
      </Section>

      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Developer first</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium tracking-tight md:text-5xl">
              A headless API for every surface.
            </h2>
            <p className="mt-5 max-w-md text-fg-muted">
              Ship a storefront in minutes or compose your own with our
              type-safe SDK. Webhooks, GraphQL, REST — your call.
            </p>
            <div className="mt-8 flex gap-3">
              <Button href="/docs">Read the docs</Button>
              <Button variant="secondary" href="/product">
                Explore product
              </Button>
            </div>
          </div>
          <CodeTabs />
        </div>
      </Section>

      <Section>
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
              <Button href="#waitlist">Join the waitlist</Button>
              <Button variant="secondary" href="/contact">
                Talk to us
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
