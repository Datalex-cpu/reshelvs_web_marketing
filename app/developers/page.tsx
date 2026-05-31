import Link from 'next/link';
import { Section, Eyebrow } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Developers',
  'Build with Reshelvs — public REST API, OAuth2 client credentials, connector SDK, marketplace listings.',
);

const RESOURCES = [
  {
    title: 'REST API v1',
    blurb: 'OAuth2 client_credentials. Read stores, routes, visits. Cursor-paginated.',
    href: 'https://app.reshelvs.com/api/v1/docs',
  },
  {
    title: 'OpenAPI 3.1 spec',
    blurb: 'Live spec — generates SDKs and Postman collections automatically.',
    href: 'https://app.reshelvs.com/api/v1/openapi.json',
  },
  {
    title: 'Connector SDK',
    blurb: '@reshelvs/connector-sdk for TypeScript. Built-in auth + pagination + webhook verify.',
    href: 'https://www.npmjs.com/package/@reshelvs/connector-sdk',
  },
  {
    title: 'Scaffold a connector',
    blurb: 'npx create-reshelvs-connector my-connector — boilerplate in 5 seconds.',
    href: 'https://www.npmjs.com/package/create-reshelvs-connector',
  },
  {
    title: 'Marketplace',
    blurb: 'List your connector. 70/30 revenue share. Certification required.',
    href: '/marketplace',
  },
  {
    title: 'Status + uptime',
    blurb: '99.95% SLA. Live status feed.',
    href: 'https://status.reshelvs.com',
  },
];

export default function DevelopersPage() {
  return (
    <Section>
      <Eyebrow>Developers</Eyebrow>
      <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium tracking-display md:text-6xl">
        Build with Reshelvs.
      </h1>
      <p className="mt-6 max-w-xl text-fg-muted">
        Public REST API, OAuth2 auth, SDK, marketplace. The data
        running your field execution is yours to integrate.
      </p>
      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {RESOURCES.map((r) => (
          <Link key={r.title} href={r.href} className="group block focus-visible:outline-none">
            <Card className="h-full">
              <div className="text-sm font-medium">{r.title}</div>
              <p className="mt-3 text-sm leading-6 text-fg-muted">{r.blurb}</p>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
