import { Section, Eyebrow } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Sign in',
  'Sign in to your Reshelvs tenant.',
);

export default function LoginPage() {
  return (
    <Section className="max-w-xl">
      <Eyebrow>Sign in</Eyebrow>
      <h1 className="mt-5 font-display text-4xl font-medium tracking-display md:text-5xl">
        Welcome back.
      </h1>
      <p className="mt-5 text-fg-muted">
        The Reshelvs app lives at{' '}
        <a
          href="https://app.reshelvs.com"
          className="text-fg underline-offset-4 hover:underline"
        >
          app.reshelvs.com
        </a>
        . Sign in there with your work email — we'll send a one-time link.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="https://app.reshelvs.com">Open the app →</Button>
        <Button variant="secondary" href="/contact">
          Forgot which tenant?
        </Button>
      </div>
      <div className="mt-16 rounded-2xl border border-border bg-bg-surface p-6 text-sm text-fg-muted">
        <div className="text-xs uppercase tracking-[0.15em] text-fg-subtle">
          Not on Reshelvs yet?
        </div>
        <p className="mt-3">
          Spin up a tenant in 90 seconds. Free to try, no credit card.
        </p>
        <div className="mt-4">
          <Button href="/#waitlist" size="sm">
            Join the waitlist
          </Button>
        </div>
      </div>
    </Section>
  );
}
