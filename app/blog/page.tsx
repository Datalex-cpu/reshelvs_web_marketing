import { Section, Eyebrow } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Blog',
  'Notes on brands, design, and building Reshelvs.',
);

const posts = [
  {
    slug: 'introducing-reshelvs',
    title: 'Introducing Reshelvs',
    excerpt: 'A new home for the brands shaping what comes next.',
    date: '2026-05-20',
  },
  {
    slug: 'design-principles',
    title: 'Our design principles',
    excerpt: 'Less, but better. The four ideas we hold ourselves to.',
    date: '2026-05-10',
  },
];

export default function BlogIndex() {
  return (
    <Section>
      <Eyebrow>Blog</Eyebrow>
      <h1 className="mt-5 font-display text-5xl font-medium tracking-tight md:text-6xl">
        Notes from the shelf.
      </h1>
      <div className="mt-16 grid gap-4 md:grid-cols-2">
        {posts.map((p) => (
          <Card key={p.slug}>
            <div className="text-xs text-fg-subtle">
              {new Date(p.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-fg-muted">{p.excerpt}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
