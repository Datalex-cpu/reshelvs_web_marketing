import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Section, Eyebrow } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { getCustomer, customers } from '@/content/customers';

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return customers.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Params) {
  const c = getCustomer(params.slug);
  if (!c) return { title: 'Scenario not found' };
  return {
    title: `${c.title} — scenario`,
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
          {c.title}
        </h1>
        <p className="mt-4 font-display text-xl text-fg-muted md:text-2xl">
          {c.tagline}
        </p>
        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-surface px-3 py-1 text-xs text-fg-subtle">
          Illustrative scenario · Reshelvs is in private beta — figures below
          are design targets, not customer results.
        </p>

        <div className="mt-10 text-xs uppercase tracking-[0.15em] text-fg-subtle">
          Illustrative targets
        </div>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {c.targets.map((m) => (
            <Card key={m.label} hover={false}>
              <div className="num font-display text-3xl font-medium tracking-display md:text-4xl">
                <span className="text-gradient">{m.value}</span>
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.15em] text-fg-subtle">
                {m.label}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 space-y-6 text-base leading-relaxed text-fg-muted md:text-lg">
          {c.story.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <Card hover={false} className="mt-16 p-8 md:p-10">
          <p className="font-display text-2xl font-medium leading-snug tracking-tight text-fg md:text-3xl">
            {c.thesis}
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.15em] text-fg-subtle">
            What Reshelvs is built to do · private beta
          </p>
        </Card>

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
            <Eyebrow>More scenarios</Eyebrow>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/customers/${o.slug}`}
                  className="group block"
                >
                  <Card className="p-5">
                    <div className="text-xs uppercase tracking-[0.15em] text-fg-subtle">
                      {o.segment} · {o.region}
                    </div>
                    <div className="mt-2 font-display text-lg font-medium tracking-tight text-fg">
                      {o.title}
                    </div>
                    <div className="mt-1 text-sm text-fg-muted">
                      {o.tagline}
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
