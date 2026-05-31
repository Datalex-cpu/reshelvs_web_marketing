import Link from 'next/link';
import { Section, Eyebrow } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { pageMetadata } from '@/lib/seo';
import { posts } from '@/content/posts';

export const metadata = pageMetadata(
  'Blog',
  'Notes on FMCG, field execution, and building Reshelvs.',
);

export default function BlogIndex() {
  return (
    <Section>
      <Eyebrow>Blog</Eyebrow>
      <h1 className="mt-5 font-display text-5xl font-medium tracking-display md:text-6xl">
        Notes from the field.
      </h1>
      <div className="mt-16 grid gap-4 md:grid-cols-2">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group block focus-visible:outline-none"
          >
            <Card className="h-full transition-colors group-hover:border-border-strong">
              <div className="flex items-center gap-3 text-xs text-fg-subtle">
                <span className="uppercase tracking-[0.15em]">
                  {p.category}
                </span>
                <span>·</span>
                <span>
                  {new Date(p.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <span>·</span>
                <span>{p.readMinutes} min</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-fg transition-colors group-hover:text-fg">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-fg-muted">{p.excerpt}</p>
              <div className="mt-6 text-xs text-fg-subtle transition-colors group-hover:text-fg">
                Read post →
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
