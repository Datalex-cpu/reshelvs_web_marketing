import { Section, Eyebrow } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { pageMetadata } from '@/lib/seo';

interface Params {
  params: { slug: string };
}

const labels: Record<string, string> = {
  'brand-owners': 'Brand owners',
  distributors: 'Distributors',
  retailers: 'Retailers',
  'field-reps': 'Field reps',
};

export function generateMetadata({ params }: Params) {
  const name = labels[params.slug] ?? toTitle(params.slug);
  return pageMetadata(
    `${name} on Reshelvs`,
    `How ${name.toLowerCase()} run field execution on Reshelvs.`,
  );
}

export default function SegmentPage({ params }: Params) {
  const name = labels[params.slug] ?? toTitle(params.slug);
  return (
    <Section>
      <Eyebrow>Solution</Eyebrow>
      <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium tracking-display md:text-6xl">
        {name} on Reshelvs.
      </h1>
      <p className="mt-6 max-w-xl text-fg-muted">
        A short look at how {name.toLowerCase()} use Reshelvs to run their
        field — and what changes on day one.
      </p>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        <Stat label="Avg. onboarding" value="90s" />
        <Stat label="Visit time saved" value="40 min" />
        <Stat label="Attendance disputes" value="-100%" />
      </div>
      <p className="mt-4 text-xs text-fg-subtle">
        Illustrative targets — Reshelvs is in private beta, not measured
        customer results.
      </p>

      <div className="mt-16 max-w-2xl space-y-6 text-fg-muted">
        <p>
          Most {name.toLowerCase()} we work with are stitching together an
          attendance tracker, a paper audit form, an Excel route plan, and
          a weekly BI export. Reshelvs replaces all four with one platform
          — the rep app, the supervisor console, and the admin portal sharing
          the same Firestore source of truth.
        </p>
        <p>
          The result: routes that auto-generate against today's reality,
          OSA you see the moment a rep photographs a shelf, and a clean
          audit log of every check-in, every visit, every order.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Button href="/#waitlist">Get started</Button>
        <Button variant="secondary" href="/contact">
          Talk to sales
        </Button>
      </div>
    </Section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <Card hover={false}>
      <div className="num font-display text-4xl font-medium tracking-display">
        <span className="text-gradient">{value}</span>
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.15em] text-fg-subtle">
        {label}
      </div>
    </Card>
  );
}

function toTitle(s: string) {
  return s
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');
}
