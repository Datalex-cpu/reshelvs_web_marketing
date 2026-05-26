import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const features = [
  {
    title: 'Brand storefronts',
    body: 'Beautiful, fast, SEO-optimized storefronts for every brand on the shelf.',
    span: 'md:col-span-2',
    tag: 'Storefront',
  },
  {
    title: 'Smart shelves',
    body: 'AI-curated collections that adapt to taste, season, and intent.',
    span: '',
    tag: 'AI',
  },
  {
    title: 'Insights',
    body: 'Real-time analytics that turn browsers into buyers.',
    span: '',
    tag: 'Analytics',
  },
  {
    title: 'Headless API',
    body: 'Bring Reshelvs to any surface — mobile, kiosk, voice, AR.',
    span: 'md:col-span-2',
    tag: 'Platform',
  },
  {
    title: 'Payments',
    body: 'Global payments, taxes, and payouts handled end to end.',
    span: '',
    tag: 'Commerce',
  },
  {
    title: 'Discovery',
    body: 'Programmatic SEO and social surfaces built in by default.',
    span: '',
    tag: 'Growth',
  },
];

export function FeatureBento() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {features.map((f) => (
        <Card key={f.title} className={`${f.span} min-h-[200px]`}>
          <Badge className="mb-4">{f.tag}</Badge>
          <h3 className="font-display text-xl font-semibold tracking-tight">
            {f.title}
          </h3>
          <p className="mt-2 text-sm text-fg-muted">{f.body}</p>
        </Card>
      ))}
    </div>
  );
}
