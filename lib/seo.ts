export const SITE = {
  name: 'Reshelvs',
  url: 'https://reshelvs.com',
  description:
    'The operating system for FMCG field teams. Routes, store visits, on-shelf availability, and field reports — in one platform.',
  twitter: '@reshelvs',
};

/**
 * Standard page metadata.
 *
 * `path` (root-relative, e.g. `/pricing`) sets the canonical URL. Next
 * resolves it against `metadataBase` in app/layout.tsx. Always pass it:
 * without a canonical, campaign links (`?utm_source=…`), the `www` host,
 * and trailing-slash variants can each be indexed as separate pages, which
 * splits ranking signals across duplicates.
 */
export function pageMetadata(
  title: string,
  description?: string,
  path?: string,
) {
  const desc = description ?? SITE.description;
  return {
    title,
    description: desc,
    ...(path ? { alternates: { canonical: path } } : {}),
    openGraph: {
      title: `${title} · ${SITE.name}`,
      description: desc,
      ...(path ? { url: path } : {}),
    },
  };
}
