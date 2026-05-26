import { Section, Eyebrow } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Changelog',
  'What we shipped, when we shipped it.',
);

const entries = [
  {
    version: 'v0.3',
    date: '2026-05-22',
    tag: 'Feature',
    title: 'Smart shelves are here',
    body: 'AI-curated collections that adapt to taste, season, and intent.',
  },
  {
    version: 'v0.2',
    date: '2026-05-08',
    tag: 'Improvement',
    title: 'Faster storefronts',
    body: 'Average TTFB cut by 38% with new edge caching.',
  },
  {
    version: 'v0.1',
    date: '2026-04-20',
    tag: 'Launch',
    title: 'Private beta',
    body: 'Reshelvs is now in private beta. Welcome to the shelf.',
  },
];

export default function ChangelogPage() {
  return (
    <Section>
      <Eyebrow>Changelog</Eyebrow>
      <h1 className="mt-5 font-display text-5xl font-medium tracking-tight md:text-6xl">
        What we shipped.
      </h1>
      <div className="mt-16 space-y-12">
        {entries.map((e) => (
          <article
            key={e.version}
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
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                {e.title}
              </h2>
              <p className="mt-2 max-w-2xl text-fg-muted">{e.body}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
