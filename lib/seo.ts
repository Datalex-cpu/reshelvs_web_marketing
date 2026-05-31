export const SITE = {
  name: 'Reshelvs',
  url: 'https://reshelvs.com',
  description:
    'The operating system for FMCG field teams. Routes, store visits, on-shelf availability, and field reports — in one platform.',
  twitter: '@reshelvs',
};

export function pageMetadata(title: string, description?: string) {
  return {
    title,
    description: description ?? SITE.description,
    openGraph: {
      title: `${title} · ${SITE.name}`,
      description: description ?? SITE.description,
    },
  };
}
