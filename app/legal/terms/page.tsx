import { Eyebrow } from '@/components/ui/Section';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Terms of service',
  'The terms that govern your use of Reshelvs.',
);

const UPDATED = 'May 26, 2026';

export default function TermsPage() {
  return (
    <>
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mt-5 font-display text-4xl font-medium tracking-display text-fg md:text-5xl">
        Terms of service
      </h1>
      <p className="mt-3 text-xs uppercase tracking-[0.15em] text-fg-subtle">
        Last updated · {UPDATED}
      </p>

      <p className="mt-10">
        These terms are a plain-language summary of how Reshelvs works for
        customers. Paid plans are governed by the full Master Services
        Agreement — for the binding document, contact{' '}
        <a className="text-fg" href="mailto:legal@reshelvs.com">
          legal@reshelvs.com
        </a>
        .
      </p>

      <Section title="1 · Your account">
        <p>
          You must be authorized to bind your organization. Tenant admins
          control RBAC inside Reshelvs and are responsible for keeping
          credentials and access lists current.
        </p>
      </Section>

      <Section title="2 · Acceptable use">
        <p>
          Don't use Reshelvs to break laws, abuse other users, run security
          attacks, or interfere with the service. Don't reverse-engineer or
          resell access without a partnership agreement.
        </p>
      </Section>

      <Section title="3 · Data ownership">
        <p>
          You own your operational data. We host and process it on your
          behalf. We will return or delete your data on request, on
          termination, and per the retention windows in your contract.
        </p>
      </Section>

      <Section title="4 · Service availability">
        <p>
          Production-paid plans target 99.9% monthly uptime. Status and
          incident history live at{' '}
          <a className="text-fg" href="https://status.reshelvs.com">
            status.reshelvs.com
          </a>
          .
        </p>
      </Section>

      <Section title="5 · Fees + termination">
        <p>
          Self-serve plans bill monthly. Enterprise plans are governed by
          a signed order form. Either party may terminate for material
          breach with notice; we keep your export available for 30 days
          after termination.
        </p>
      </Section>

      <Section title="6 · Liability">
        <p>
          We provide Reshelvs "as is" to the extent permitted by law. Our
          aggregate liability for any claim is capped at the fees you paid
          us in the preceding twelve months. Nothing limits liability for
          fraud, gross negligence, or violation of the other party's IP.
        </p>
      </Section>

      <Section title="7 · Changes">
        <p>
          We may update these terms. If changes are material, we'll notify
          tenant admins by email at least 30 days before they take effect.
        </p>
      </Section>

      <p className="mt-16 text-xs text-fg-subtle">
        Questions about anything here? Email{' '}
        <a className="text-fg" href="mailto:legal@reshelvs.com">
          legal@reshelvs.com
        </a>
        .
      </p>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-lg font-medium tracking-tight text-fg">
        {title}
      </h2>
      <div className="mt-3 space-y-3 leading-relaxed">{children}</div>
    </section>
  );
}
