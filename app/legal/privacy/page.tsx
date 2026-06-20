import { Eyebrow } from '@/components/ui/Section';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Privacy policy',
  'How Reshelvs collects, uses, and protects your data.',
);

const UPDATED = 'May 26, 2026';

export default function PrivacyPage() {
  return (
    <>
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mt-5 font-display text-4xl font-medium tracking-display text-fg md:text-5xl">
        Privacy policy
      </h1>
      <p className="mt-3 text-xs uppercase tracking-[0.15em] text-fg-subtle">
        Last updated · {UPDATED}
      </p>

      <p className="mt-10">
        This policy explains what data Reshelvs collects, why we collect it,
        and how we keep it. It applies to{' '}
        <a className="text-fg" href="https://reshelvs.com">
          reshelvs.com
        </a>
        , the Reshelvs app at{' '}
        <a className="text-fg" href="https://app.reshelvs.com">
          app.reshelvs.com
        </a>
        , our mobile field apps, and any of our APIs.
      </p>

      <Section title="1 · What we collect">
        <p>
          <strong className="text-fg">Account data.</strong> Name, work
          email, tenant + company you belong to, and your role. You provide
          this during signup or via your tenant admin.
        </p>
        <p>
          <strong className="text-fg">Operational data.</strong> Routes,
          stores, visits, OSA readings, attendance, orders, payments — the
          field execution data your team produces while using Reshelvs.
        </p>
        <p>
          <strong className="text-fg">Device + telemetry.</strong> Device
          model, OS version, app version, IP, and minimal interaction logs
          (e.g. "visit submitted") used to keep the product reliable and
          investigate issues.
        </p>
        <p>
          <strong className="text-fg">Location.</strong> When you check in
          to a store, the rep app sends GPS coordinates + a mock-location
          signal. Geofence checks happen on-device; coordinates are sent only
          on check-in / check-out events.
        </p>
      </Section>

      <Section title="2 · How we use it">
        <p>
          To deliver the product (route planning, visits, reports), to support
          our customers, to debug and improve reliability, and to comply with
          legal obligations. We do not sell your data, and we do not use
          customer operational data to train models that we sell to others.
        </p>
      </Section>

      <Section title="3 · Where it lives">
        <p>
          Production data is stored in Google Cloud (Firestore) in
          regional configurations. Enterprise plans can pin data to a
          specific region (KSA, UAE, EU) at tenant creation.
        </p>
      </Section>

      <Section title="4 · Sub-processors">
        <p>
          We use a small set of vetted sub-processors — Google Cloud,
          Resend (transactional email), Vercel (hosting). The current list
          is maintained on request.
        </p>
      </Section>

      <Section title="5 · Your rights">
        <p>
          You can request access, export, correction, or deletion of your
          personal data at any time. Tenant admins can export operational
          data directly from the admin portal. To delete your account and
          data, see{' '}
          <a className="text-fg" href="/legal/delete-account">
            Delete your account &amp; data
          </a>
          .
        </p>
      </Section>

      <Section title="6 · Contact">
        <p>
          Questions? Email{' '}
          <a className="text-fg" href="mailto:privacy@reshelvs.com">
            privacy@reshelvs.com
          </a>
          . For data-subject requests, please include the tenant and the
          relevant account email.
        </p>
      </Section>

      <p className="mt-16 text-xs text-fg-subtle">
        This page is a plain-language summary. The binding terms live in our
        Master Services Agreement — talk to{' '}
        <a className="text-fg" href="mailto:legal@reshelvs.com">
          legal@reshelvs.com
        </a>{' '}
        for the full document.
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
