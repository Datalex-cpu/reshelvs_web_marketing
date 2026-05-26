import { Section, Eyebrow } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

interface Params {
  params: { slug: string };
}

export function generateMetadata({ params }: Params) {
  const name = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  return {
    title: `${name} — Case study`,
    description: `How ${name} is building its next chapter on Reshelvs.`,
  };
}

export default function BrandCaseStudy({ params }: Params) {
  const name = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  return (
    <Section>
      <Eyebrow>Case study</Eyebrow>
      <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium tracking-tight md:text-6xl">
        {name} on Reshelvs.
      </h1>
      <p className="mt-6 max-w-xl text-fg-muted">
        A short, opinionated story of why {name} chose Reshelvs and what
        shipped first.
      </p>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        <Stat label="Conversion lift" value="+34%" />
        <Stat label="Time to launch" value="11 days" />
        <Stat label="Active surfaces" value="6" />
      </div>

      <div className="mt-16 max-w-2xl space-y-6 text-fg-muted">
        <p>
          {name} needed a single source of truth for product, inventory,
          and discovery — without losing the editorial feel that made the
          brand what it is.
        </p>
        <p>
          With Reshelvs, the team launched a new storefront, plugged into
          their existing OMS, and shipped a mobile shelf in under two
          weeks.
        </p>
      </div>

      <div className="mt-12">
        <Button href="#waitlist">Get started like {name}</Button>
      </div>
    </Section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-bg-surface p-6">
      <div className="font-display text-4xl font-semibold tracking-tight">
        {value}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.15em] text-fg-subtle">
        {label}
      </div>
    </div>
  );
}
