import { Section, Eyebrow } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Careers',
  'Help us build the modern shelf for brands.',
);

const roles = [
  { title: 'Founding Engineer, Platform', location: 'Remote · EMEA', team: 'Engineering' },
  { title: 'Brand Design Lead', location: 'Remote', team: 'Design' },
  { title: 'Developer Experience', location: 'Remote', team: 'Engineering' },
];

export default function CareersPage() {
  return (
    <Section>
      <Eyebrow>Careers</Eyebrow>
      <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium tracking-tight md:text-6xl">
        Help us build the modern shelf.
      </h1>
      <p className="mt-6 max-w-xl text-fg-muted">
        We're a small team obsessed with craft, speed, and the brands we work
        with. Come build with us.
      </p>
      <div className="mt-16 space-y-3">
        {roles.map((r) => (
          <Card key={r.title} className="flex flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.15em] text-fg-subtle">
                {r.team}
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                {r.title}
              </h3>
              <div className="mt-1 text-sm text-fg-muted">{r.location}</div>
            </div>
            <Button variant="secondary" href="/contact">
              Apply
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
