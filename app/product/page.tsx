import { Section, Eyebrow } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FeatureBento } from '@/components/bento/FeatureBento';
import { CodeTabs } from '@/components/code/CodeTabs';
import { FadeIn } from '@/components/ui/FadeIn';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Product',
  'Storefronts, smart shelves, and a headless API — built for the next decade of commerce.',
);

const pillars = [
  {
    title: 'Storefront',
    body: 'Beautifully fast, SEO-optimized storefronts you can ship in minutes. Edge-cached, instantly localized.',
  },
  {
    title: 'Shelves',
    body: 'AI-curated collections that adapt to taste, season, and intent — without sacrificing editorial control.',
  },
  {
    title: 'Insights',
    body: 'Real-time analytics built for brand teams. See what works, ship more of it.',
  },
];

export default function ProductPage() {
  return (
    <>
      <Section className="pb-12">
        <FadeIn>
          <Eyebrow>Product</Eyebrow>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium tracking-tight md:text-7xl">
            One platform.{' '}
            <span className="text-fg-muted">Every brand surface.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-6 max-w-xl text-fg-muted">
            Reshelvs unifies storefronts, shelves, and insights behind a single
            type-safe API. Ship to web, mobile, kiosk, voice — without rewiring.
          </p>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.05}>
              <div className="rounded-2xl border border-border bg-bg-surface p-7">
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-fg-muted">{p.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="mb-12 max-w-2xl">
            <Eyebrow>Features</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium tracking-tight md:text-5xl">
              Made for brands that move fast.
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.05}>
          <FeatureBento />
        </FadeIn>
      </Section>

      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <FadeIn>
            <div>
              <Eyebrow>Developer first</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-medium tracking-tight md:text-5xl">
                Type-safe by default.
              </h2>
              <p className="mt-4 text-fg-muted">
                First-class SDKs for the languages your team already uses,
                with the same primitives behind every endpoint.
              </p>
              <div className="mt-8 flex gap-3">
                <Button href="/docs">Read the docs</Button>
                <Button variant="secondary" href="/#waitlist">
                  Get started
                </Button>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <CodeTabs />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
