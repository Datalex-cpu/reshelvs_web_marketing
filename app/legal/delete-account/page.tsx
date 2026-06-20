import { Eyebrow } from '@/components/ui/Section';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Delete your account & data',
  'How to delete your Reshelvs account and personal data, on iOS, Android, and the web.',
);

const UPDATED = 'June 1, 2026';

export default function DeleteAccountPage() {
  return (
    <>
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mt-5 font-display text-4xl font-medium tracking-display text-fg md:text-5xl">
        Delete your account &amp; data
      </h1>
      <p className="mt-3 text-xs uppercase tracking-[0.15em] text-fg-subtle">
        Last updated · {UPDATED}
      </p>

      <p className="mt-10">
        This page explains how to delete your Reshelvs account and the personal
        data tied to it. It applies to the Reshelvs mobile app on iOS and
        Android, the web app at{' '}
        <a className="text-fg" href="https://app.reshelvs.com">
          app.reshelvs.com
        </a>
        , and any account you created at{' '}
        <a className="text-fg" href="https://reshelvs.com">
          reshelvs.com
        </a>
        . You can submit a deletion request without reinstalling or opening the
        app.
      </p>

      <Section title="Before you start — how accounts work">
        <p>
          Reshelvs is a multi-tenant product used by companies (tenants). How
          your account is deleted depends on how it was created:
        </p>
        <p>
          <strong className="text-fg">Account owners / admins.</strong> If you
          created your own Reshelvs account (self-serve signup), you can delete
          it yourself using any of the methods below.
        </p>
        <p>
          <strong className="text-fg">Field reps &amp; invited users.</strong>{' '}
          If your account was created for you by a tenant admin, your access is
          managed by your organization. You can still request deletion of your
          personal data using the methods below; we will action it and notify
          your tenant admin where the account is required for that
          organization&rsquo;s records.
        </p>
      </Section>

      <Section title="Option 1 — delete in the app (iOS &amp; Android)">
        <p>
          The fastest way. In the Reshelvs mobile app:
        </p>
        <p>
          Open <strong className="text-fg">Profile</strong> &rarr;{' '}
          <strong className="text-fg">Account settings</strong> &rarr;{' '}
          <strong className="text-fg">Delete account</strong>, then confirm.
          You&rsquo;ll be asked to re-authenticate (password or biometrics)
          before the request is submitted.
        </p>
        <p>
          The same flow is available in the web app at{' '}
          <a className="text-fg" href="https://app.reshelvs.com">
            app.reshelvs.com
          </a>{' '}
          under <strong className="text-fg">Settings &rarr; Account</strong>.
        </p>
      </Section>

      <Section title="Option 2 — request deletion by email">
        <p>
          If you can&rsquo;t access the app, email{' '}
          <a className="text-fg" href="mailto:privacy@reshelvs.com">
            privacy@reshelvs.com
          </a>{' '}
          from the email address on your account, with the subject{' '}
          <strong className="text-fg">&ldquo;Delete my account&rdquo;</strong>.
          Include your tenant / company name so we can locate the record. We may
          ask one verification question to confirm it&rsquo;s really you before
          we proceed.
        </p>
      </Section>

      <Section title="What gets deleted">
        <p>
          When a deletion request is verified, we delete the personal data tied
          to your account, including:
        </p>
        <p>
          your name and work email, your profile and role, your login
          credentials, device and telemetry records linked to you, and the
          location coordinates collected from your store check-ins / check-outs.
        </p>
      </Section>

      <Section title="What may be retained — and for how long">
        <p>
          Some data is kept for a limited period for legitimate or legal
          reasons:
        </p>
        <p>
          <strong className="text-fg">Operational records.</strong> Field
          execution data (visits, OSA readings, orders, payment collections)
          belongs to your organization (the tenant) as their business record.
          Where it can be dissociated from you, we anonymize it rather than
          delete it, so the tenant&rsquo;s reporting stays intact.
        </p>
        <p>
          <strong className="text-fg">Legal &amp; financial.</strong> Records we
          are required to keep (e.g. tax, accounting, fraud-prevention, or
          dispute records) are retained only for the period the law requires,
          then deleted.
        </p>
        <p>
          <strong className="text-fg">Backups.</strong> Residual copies in
          encrypted backups are purged on our normal backup rotation.
        </p>
      </Section>

      <Section title="How long deletion takes">
        <p>
          We action verified requests within{' '}
          <strong className="text-fg">30 days</strong>. Account access is
          revoked immediately on confirmation; full removal from active systems
          and backup rotation completes within that 30-day window. We&rsquo;ll
          email you when it&rsquo;s done.
        </p>
      </Section>

      <Section title="Children&rsquo;s data">
        <p>
          Reshelvs is a workplace product and is not directed to children. We do
          not knowingly collect personal data from anyone under 16. If you
          believe a minor&rsquo;s data is in Reshelvs, email{' '}
          <a className="text-fg" href="mailto:privacy@reshelvs.com">
            privacy@reshelvs.com
          </a>{' '}
          and we will delete it promptly.
        </p>
      </Section>

      <Section title="Other data rights">
        <p>
          You can also request access, export, or correction of your personal
          data instead of deletion. See our{' '}
          <a className="text-fg" href="/legal/privacy">
            privacy policy
          </a>{' '}
          for the full list of rights and how we handle your data.
        </p>
      </Section>

      <p className="mt-16 text-xs text-fg-subtle">
        Questions about deletion? Email{' '}
        <a className="text-fg" href="mailto:privacy@reshelvs.com">
          privacy@reshelvs.com
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
