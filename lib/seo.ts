export const SITE = {
  name: 'Reshelvs',
  url: 'https://reshelvs.com',
  description:
    'The modern shelf for your brands. Be discovered, organized, and loved.',
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
