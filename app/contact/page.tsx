import { Section, Eyebrow } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/ui/FadeIn';
import { ContactForm } from '@/components/contact/ContactForm';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Contact',
  'Talk to the Reshelvs team — sales, partnerships, support, or a quick hello.',
);

const channels = [
  {
    tag: 'Sales',
    title: 'Buying for a team',
    body: 'Distributors, brand owners, retailers — we get back within one business day.',
    email: 'sales@reshelvs.com',
  },
  {
    tag: 'Support',
    title: 'Already on Reshelvs',
    body: 'Current customers — open a ticket or ping us in your shared channel.',
    email: 'support@reshelvs.com',
  },
  {
    tag: 'Press',
    title: 'Media + analysts',
    body: 'Story leads, interview requests, briefings.',
    email: 'press@reshelvs.com',
  },
];

export default function ContactPage() {
  return (
    <Section>
      {/* Above the fold — paints immediately, no reveal (LCP + no shift). */}
      <div>
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium tracking-display md:text-6xl">
          Talk to us.
        </h1>
        <p className="mt-6 max-w-xl text-fg-muted">
          Tell us about your field operation. We'll get back within one business
          day — sooner if you're already running a beat.
        </p>
      </div>

      <FadeIn
        className="mt-16 grid gap-12 md:grid-cols-[1.2fr_1fr]"
        delay={0.05}
      >
        <ContactForm />
        <div className="space-y-6">
          {channels.map((c) => (
            <Card key={c.tag} hover={false}>
              <div className="text-xs uppercase tracking-[0.15em] text-fg-subtle">
                {c.tag}
              </div>
              <h2 className="mt-2 font-display text-lg font-medium tracking-tight">
                {c.title}
              </h2>
              <p className="mt-2 text-sm text-fg-muted">{c.body}</p>
              <a
                href={`mailto:${c.email}`}
                className="mt-3 inline-block font-mono text-sm text-fg underline-offset-4 hover:underline"
              >
                {c.email}
              </a>
            </Card>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
