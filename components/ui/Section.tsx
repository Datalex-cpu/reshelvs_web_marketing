import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('mx-auto w-full max-w-6xl px-6 py-24 md:py-32', className)}
    >
      {children}
    </section>
  );
}

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.15em] text-fg-muted',
        className,
      )}
    >
      {children}
    </div>
  );
}
