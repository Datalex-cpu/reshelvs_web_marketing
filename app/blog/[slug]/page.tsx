import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Section, Eyebrow } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { getPost, posts } from '@/content/posts';

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params) {
  const post = getPost(params.slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} · Reshelvs`,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function BlogPost({ params }: Params) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Section className="max-w-3xl">
        <Link
          href="/blog"
          className="inline-block text-xs uppercase tracking-[0.15em] text-fg-subtle hover:text-fg"
        >
          ← All posts
        </Link>
        <div className="mt-8">
          <Eyebrow>{post.category}</Eyebrow>
        </div>
        <h1 className="mt-5 font-display text-4xl font-medium leading-tight tracking-display md:text-5xl">
          {post.title}
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-fg-subtle">
          <span>{post.author}</span>
          <span aria-hidden>·</span>
          <span>
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <span aria-hidden>·</span>
          <span>{post.readMinutes} min read</span>
        </div>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-fg-muted md:text-lg">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <Card hover={false} className="mt-16 md:p-8">
          <div className="text-xs uppercase tracking-[0.15em] text-fg-subtle">
            Reshelvs
          </div>
          <h2 className="mt-3 font-display text-2xl font-medium tracking-tight">
            The operating system for FMCG field teams.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-fg-muted">
            Routes, store visits, on-shelf availability, and field reports —
            in one platform.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/#waitlist">Join the waitlist</Button>
            <Button variant="secondary" href="/product">
              See the product
            </Button>
          </div>
        </Card>
      </Section>

      {related.length > 0 && (
        <Section className="!pt-0 max-w-3xl">
          <div className="border-t border-border pt-12">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group block"
                >
                  <Card className="p-5">
                    <div className="text-xs uppercase tracking-[0.15em] text-fg-subtle">
                      {r.category}
                    </div>
                    <div className="mt-2 font-display text-lg font-medium tracking-tight text-fg">
                      {r.title}
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
