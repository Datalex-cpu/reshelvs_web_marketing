import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Section, Eyebrow } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { getCustomer, customers } from '@/content/customers';

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return customers.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Params) {
  const c = getCustomer(params.slug);
  if (!c) return { title: 'Case study not found' };
  return {
    title: `${c.company} — case study`,
    description: c.tagline,
  };
}

export default function CustomerStory({ params }: Params) {
  const c = getCustomer(params.slug);
  if (!c) notFound();

  const others = customers.filter((x) => x.slug !== c.slug).slice(0, 2);

  return (
    <>
      <Section className="max-w-3xl">
        <Link
          href="/customers"
          className="inline-block text-xs uppercase tracking-[0.15em] text-fg-subtle hover:text-fg"
        >
          ← All customers
        </Link>
        <div className="mt-8">
          <Eyebrow>
            {c.segment} · {c.region}
          </Eyebrow>
        </div>
        <h1 className="mt-5 font-display text-4xl font-medium leading-tight tracking-display md:text-5xl">
          {c.company}
        </h1>
        <p className="mt-4 font-display text-xl text-fg-muted md:text-2xl">
          {c.tagline}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {c.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-border bg-bg-surface p-6"
            >
              <div className="num font-display text-3xl font-medium tracking-display md:text-4xl">
                <span className="text-gradient">{m.value}</span>
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.15em] text-fg-subtle">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-6 text-base leading-relaxed text-fg-muted md:text-lg">
          {c.story.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <figure className="mt-16 rounded-2xl border border-border bg-bg-surface p-8 md:p-10">
          <blockquote className="font-display text-2xl font-medium leading-snug tracking-tight text-fg md:text-3xl">
            "{c.quote}"
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <span
              aria-hidden
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-raised font-display text-xs font-medium text-fg"
            >
              {c.attribution.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .slice(0, 2)}
            </span>
            <div>
              <div className="text-sm font-medium text-fg">
                {c.attribution.name}
              </div>
              <div className="text-xs text-fg-muted">
                {c.attribution.role} · {c.company}
              </div>
            </div>
          </figcaption>
        </figure>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button href="/#waitlist">Run on Reshelvs</Button>
          <Button variant="secondary" href="/contact">
            Talk to sales
          </Button>
        </div>
      </Section>

      {others.length > 0 && (
        <Section className="!pt-0 max-w-3xl">
          <div className="border-t border-border pt-12">
            <Eyebrow>More stories</Eyebrow>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/customers/${o.slug}`}
                  className="group block"
                >
                  <div className="rounded-2xl border border-border bg-bg-surface p-5 transition-colors group-hover:border-border-strong">
                    <div className="text-xs uppercase tracking-[0.15em] text-fg-subtle">
                      {o.segment} · {o.region}
                    </div>
                    <div className="mt-2 font-display text-lg font-medium tracking-tight text-fg">
                      {o.company}
                    </div>
                    <div className="mt-1 text-sm text-fg-muted">
                      {o.tagline}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
