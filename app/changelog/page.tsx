import { Section, Eyebrow } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/ui/FadeIn';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Changelog',
  'What we shipped, when we shipped it.',
);

const entries = [
  {
    version: 'v0.5',
    date: '2026-05-22',
    tag: 'Feature',
    title: 'Biometric auth fallbacks',
    body:
      'Stuck-on-lock-screen bug is dead. The auth gate now offers "Try again" (re-prompt biometric) and "Use password instead" — so a missing Face ID can\'t trap a rep before their first store.',
  },
  {
    version: 'v0.4',
    date: '2026-05-08',
    tag: 'Feature',
    title: 'Auto-generated routes, multi-day',
    body:
      'Plan a whole week in one click. Daily capacity, visit-frequency rules, region filters, and round-robin distribution across the team.',
  },
  {
    version: 'v0.3',
    date: '2026-04-27',
    tag: 'Feature',
    title: 'Visit Flow tab + 17 default tasks',
    body:
      'Tasks library, drag-and-drop flow templates, preview tab, and 17 pre-configured FMCG merchandising tasks seeded on tenant creation.',
  },
  {
    version: 'v0.2',
    date: '2026-04-10',
    tag: 'Improvement',
    title: '90-second onboarding',
    body:
      'New bootstrap wizard. Sign up → choose create vs join → confirm what gets created → profile setup → dashboard. Sequential tenant / company / user IDs.',
  },
  {
    version: 'v0.1',
    date: '2026-03-15',
    tag: 'Launch',
    title: 'Private beta',
    body: 'Reshelvs is in private beta. Welcome to the field.',
  },
];

export default function ChangelogPage() {
  return (
    <Section>
      <Eyebrow>Changelog</Eyebrow>
      <h1 className="mt-5 font-display text-5xl font-medium tracking-display md:text-6xl">
        What we shipped.
      </h1>
      <p className="mt-6 max-w-xl text-fg-muted">
        Updates land every week or so. Subscribe via{' '}
        <a href="/#waitlist" className="text-fg hover:underline">
          the waitlist
        </a>{' '}
        to get them in your inbox.
      </p>
      <div className="mt-16 space-y-12">
        {entries.map((e, i) => (
          <FadeIn key={e.version} delay={i * 0.04}>
            <article
            className="grid gap-6 border-t border-border pt-10 md:grid-cols-[140px_1fr]"
          >
            <div>
              <div className="font-mono text-sm text-fg-muted">{e.version}</div>
              <div className="mt-1 text-xs text-fg-subtle">
                {new Date(e.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </div>
            </div>
            <div>
              <Badge>{e.tag}</Badge>
              <h2 className="mt-3 font-display text-2xl font-medium tracking-tight">
                {e.title}
              </h2>
              <p className="mt-2 max-w-2xl text-fg-muted">{e.body}</p>
            </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
