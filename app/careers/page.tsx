import { Section, Eyebrow } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Careers',
  'Help us build the operating system for FMCG field teams.',
);

const roles = [
  {
    title: 'Founding Engineer · Backend',
    location: 'Riyadh / Cairo / Remote · MENA',
    team: 'Engineering',
  },
  {
    title: 'Founding Mobile Engineer · Flutter',
    location: 'Remote · MENA',
    team: 'Engineering',
  },
  {
    title: 'ML Engineer · Shelf Vision',
    location: 'Remote',
    team: 'Engineering',
  },
  {
    title: 'Field Operations Lead',
    location: 'Riyadh',
    team: 'Customer success',
  },
  {
    title: 'Product Designer',
    location: 'Remote',
    team: 'Design',
  },
];

export default function CareersPage() {
  return (
    <Section>
      <Eyebrow>Careers</Eyebrow>
      <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium tracking-display md:text-6xl">
        Help us build the OS for the field.
      </h1>
      <p className="mt-6 max-w-xl text-fg-muted">
        We're a small team obsessed with craft, latency, and the realities
        of FMCG distribution. We work in the open, ship every week, and
        spend a real amount of time in actual stores.
      </p>
      <div className="mt-16 space-y-3">
        {roles.map((r) => (
          <Card
            key={r.title}
            className="flex flex-row items-center justify-between gap-6"
          >
            <div>
              <div className="text-xs uppercase tracking-[0.15em] text-fg-subtle">
                {r.team}
              </div>
              <h3 className="mt-2 font-display text-xl font-medium tracking-tight">
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
