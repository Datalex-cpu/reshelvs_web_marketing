import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="relative mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
        Error 404
      </div>
      <h1 className="mt-6 font-display text-6xl font-medium tracking-tight md:text-8xl">
        Off the shelf.
      </h1>
      <p className="mt-5 max-w-md text-fg-muted">
        We couldn't find the page you were looking for. It may have moved, or
        never existed at all.
      </p>
      <div className="mt-10 flex gap-3">
        <Button href="/">Back home</Button>
        <Button variant="secondary" href="/product">
          Explore product
        </Button>
      </div>
      <Link
        href="/changelog"
        className="mt-12 text-xs text-fg-subtle transition-colors hover:text-white"
      >
        See what we shipped recently →
      </Link>
    </section>
  );
}
