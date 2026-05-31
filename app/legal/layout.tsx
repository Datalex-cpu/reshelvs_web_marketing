import type { ReactNode } from 'react';

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-24 md:py-32">
      <div className="prose-legal text-fg-muted">{children}</div>
    </div>
  );
}
