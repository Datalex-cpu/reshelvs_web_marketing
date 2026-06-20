import type { ReactNode } from 'react';
import { Section } from '@/components/ui/Section';

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <Section className="max-w-3xl">
      <div className="prose-legal text-fg-muted">{children}</div>
    </Section>
  );
}
