import { Section, Eyebrow } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Customers',
  'Hear from the brands building on Reshelvs.',
);

const quotes = [
  {
    quote:
      'Reshelvs gave us a real shelf in a place we never expected to find one.',
    name: 'Maya Chen',
    role: 'Founder, Atlas',
  },
  {
    quote:
      'We launched in eleven days. Our previous platform took six months.',
    name: 'Diego Park',
    role: 'CTO, Vector',
  },
  {
    quote: 'The shelf is where the customer is. Reshelvs got that first.',
    name: 'Amelia Brooks',
    role: 'Head of Retail, Northwind',
  },
];

export default function CustomersPage() {
  return (
    <Section>
      <Eyebrow>Customers</Eyebrow>
      <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium tracking-tight md:text-6xl">
        Loved by the brands building what's next.
      </h1>
      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {quotes.map((q) => (
          <Card key={q.name}>
            <p className="font-display text-lg leading-relaxed">"{q.quote}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-brand-gradient" />
              <div>
                <div className="text-sm font-medium">{q.name}</div>
                <div className="text-xs text-fg-muted">{q.role}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
