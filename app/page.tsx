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
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-28 pt-24 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:pt-40 md:pb-36">
          <div className="flex flex-col items-start text-left">
            <FadeIn>
              <a
                href="/changelog"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs text-fg-muted transition-colors hover:text-white"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Announcing Reshelvs Beta
                <span aria-hidden>›</span>
              </a>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="mt-7 font-serif text-[64px] font-normal leading-[0.98] tracking-[-0.02em] text-white md:text-[88px]">
                The shelf for
                <br />
                <em className="italic text-fg-muted">modern brands.</em>
              </h1>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-7 max-w-md text-base text-fg-muted md:text-lg">
                Storefronts that load instantly. Shelves that learn. A
                headless API for every surface you'll ever ship.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button href="/#waitlist" size="lg">
                  Get started
                </Button>
                <Button href="/docs" variant="ghost" size="lg">
                  Documentation
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.28}>
              <div id="waitlist" className="mt-12 w-full max-w-md">
                <WaitlistForm />
                <p className="mt-3 text-xs text-fg-subtle">
                  Join 400+ brands. We'll email you when your shelf is ready.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <div className="relative md:mt-6">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent blur-2xl" />
              <CodeTabs />
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <BrandMarquee />
      </FadeIn>

      <Section>
        <FadeIn>
          <div className="mb-14 max-w-2xl">
            <Eyebrow>Platform</Eyebrow>
            <h2 className="mt-5 font-serif text-5xl font-normal leading-[1.05] tracking-[-0.02em] md:text-6xl">
              Everything brands need.
              <br />
              <em className="italic text-fg-muted">Nothing they don't.</em>
            </h2>
            <p className="mt-6 max-w-md text-fg-muted">
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
              <h2 className="mt-5 font-serif text-5xl font-normal leading-[1.05] tracking-[-0.02em] md:text-6xl">
                A headless API for
                <br />
                <em className="italic text-fg-muted">every surface.</em>
              </h2>
              <p className="mt-6 max-w-md text-fg-muted">
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
          <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-surface p-10 md:p-16">
            <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-white/[0.05] blur-3xl" />
            <div className="relative max-w-xl">
              <h2 className="font-serif text-5xl font-normal leading-[1.05] tracking-[-0.02em] md:text-6xl">
                Build the shelf you've
                <br />
                <em className="italic text-fg-muted">always wanted.</em>
              </h2>
              <p className="mt-6 text-fg-muted">
                Join the brands going live on Reshelvs. It takes five minutes.
              </p>
              <div className="mt-8 flex gap-3">
                <Button href="/#waitlist">Join the waitlist</Button>
                <Button variant="ghost" href="/contact">
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
