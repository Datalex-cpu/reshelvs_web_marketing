import { Section, Eyebrow } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { FeatureBento } from '@/components/bento/FeatureBento';
import { CodeTabs } from '@/components/code/CodeTabs';
import { Stats } from '@/components/stats/Stats';
import { ProductPreview } from '@/components/preview/ProductPreview';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Product',
  'Routes, store visits, on-shelf availability, attendance, catalog, and reports — the full field execution stack.',
);

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Reshelvs',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  url: 'https://reshelvs.com',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/PreOrder',
  },
};

export default function ProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Section>
        {/* Above the fold — paints immediately, no reveal (LCP + no shift). */}
        <div>
          <Eyebrow>Product</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium tracking-display md:text-6xl">
            One platform.{' '}
            <span className="text-fg-muted">Every field surface.</span>
          </h1>
          <p className="mt-6 max-w-xl text-fg-muted">
            Reshelvs replaces the patchwork of attendance trackers, route apps,
            audit forms, and BI exports with a single platform purpose-built
            for FMCG field execution.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/#waitlist">Join the waitlist</Button>
            <Button variant="secondary" href="/contact">
              Book a demo
            </Button>
          </div>
        </div>
        <FadeIn className="mt-16" delay={0.05}>
          <ProductPreview />
        </FadeIn>
      </Section>

      <Section className="!pt-0">
        <FadeIn>
          <Stats />
        </FadeIn>
      </Section>

      <Section className="!pt-0" id="features">
        <FadeIn className="mb-14 max-w-2xl">
          <Eyebrow>Surfaces</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium tracking-display md:text-5xl">
            Six surfaces. One source of truth.
          </h2>
        </FadeIn>
        <FadeIn delay={0.05}>
          <FeatureBento />
        </FadeIn>
      </Section>

      <Section id="api">
        <FadeIn className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>API & integrations</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium tracking-display md:text-5xl">
              Typed by default.
            </h2>
            <p className="mt-5 text-fg-muted">
              First-class SDKs for Node, Python, and a clean REST surface
              for everything else. Webhooks for every event your downstream
              systems care about.
            </p>
          </div>
          <CodeTabs />
        </FadeIn>
      </Section>
    </>
  );
}
