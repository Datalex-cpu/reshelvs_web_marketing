import Link from 'next/link';
import { Section, Eyebrow } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Brands',
  'The brands building their next chapter on Reshelvs.',
);

const brands = [
  { slug: 'atlas', name: 'Atlas', tagline: 'Modern home essentials' },
  { slug: 'vector', name: 'Vector', tagline: 'Performance gear' },
  { slug: 'northwind', name: 'Northwind', tagline: 'Slow-made apparel' },
  { slug: 'quill', name: 'Quill', tagline: 'Stationery & paper' },
  { slug: 'foundry', name: 'Foundry', tagline: 'Tools for makers' },
  { slug: 'helios', name: 'Helios', tagline: 'Outdoor & travel' },
  { slug: 'lumen', name: 'Lumen', tagline: 'Lighting design' },
  { slug: 'mercator', name: 'Mercator', tagline: 'Maps & prints' },
  { slug: 'orbit', name: 'Orbit', tagline: 'Audio for the home' },
];

export default function BrandsPage() {
  return (
    <Section>
      <Eyebrow>Brands</Eyebrow>
      <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium tracking-tight md:text-6xl">
        Brands on the shelf.
      </h1>
      <p className="mt-6 max-w-xl text-fg-muted">
        A curated set of brands using Reshelvs to be discovered.
      </p>
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
        {brands.map((b) => (
          <Link key={b.slug} href={`/brands/${b.slug}`}>
            <Card className="h-full">
              <div className="mb-6 h-24 w-24 rounded-xl bg-brand-gradient opacity-80" />
              <h3 className="font-display text-xl font-semibold">{b.name}</h3>
              <p className="mt-1 text-sm text-fg-muted">{b.tagline}</p>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
