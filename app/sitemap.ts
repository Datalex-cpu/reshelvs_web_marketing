import type { MetadataRoute } from 'next';

const ROUTES = ['', '/product', '/brands', '/pricing', '/blog', '/changelog', '/customers', '/careers'];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://reshelvs.com';
  return ROUTES.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: r === '' ? 1 : 0.7,
  }));
}
