import type { MetadataRoute } from 'next';
import { posts } from '@/content/posts';
import { customers } from '@/content/customers';
import { connectors } from '@/content/connectors';

const STATIC_ROUTES: { path: string; priority: number }[] = [
  { path: '', priority: 1 },
  { path: '/product', priority: 0.9 },
  { path: '/pricing', priority: 0.9 },
  { path: '/brands', priority: 0.7 },
  { path: '/customers', priority: 0.7 },
  { path: '/marketplace', priority: 0.7 },
  { path: '/changelog', priority: 0.6 },
  { path: '/blog', priority: 0.6 },
  { path: '/careers', priority: 0.5 },
  { path: '/contact', priority: 0.6 },
  { path: '/docs', priority: 0.5 },
  { path: '/docs/quickstart', priority: 0.4 },
  { path: '/developers', priority: 0.5 },
  { path: '/login', priority: 0.3 },
  { path: '/legal/privacy', priority: 0.2 },
  { path: '/legal/terms', priority: 0.2 },
  { path: '/legal/delete-account', priority: 0.2 },
];

const BRAND_SLUGS = ['brand-owners', 'distributors', 'retailers', 'field-reps'];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://reshelvs.com';
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority,
  }));

  const blogEntries = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  const customerEntries = customers.map((c) => ({
    url: `${base}/customers/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  const brandEntries = BRAND_SLUGS.map((slug) => ({
    url: `${base}/brands/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  const connectorEntries = connectors.map((c) => ({
    url: `${base}/marketplace/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.4,
  }));

  return [
    ...staticEntries,
    ...blogEntries,
    ...customerEntries,
    ...brandEntries,
    ...connectorEntries,
  ];
}
