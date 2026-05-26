import { Section, Eyebrow } from '@/components/ui/Section';
import { FeatureBento } from '@/components/bento/FeatureBento';
import { CodeTabs } from '@/components/code/CodeTabs';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Product',
  'Storefronts, smart shelves, a headless API — and everything brands need to grow.',
);

export default function ProductPage() {
  return (
    <Section>
      <Eyebrow>Product</Eyebrow>
      <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium tracking-tight md:text-6xl">
        One platform.{' '}
        <span className="text-fg-muted">Every brand surface.</span>
      </h1>
      <p className="mt-6 max-w-xl text-fg-muted">
        Build storefronts, curate shelves, and grow with insights — all from
        a single source of truth.
      </p>
      <div className="mt-16">
        <FeatureBento />
      </div>
      <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            Type-safe by default.
          </h2>
          <p className="mt-4 text-fg-muted">
            First-class SDKs for the languages your team already uses.
          </p>
        </div>
        <CodeTabs />
      </div>
    </Section>
  );
}
