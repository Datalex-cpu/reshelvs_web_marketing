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
  /**
   * `chip` (default) — bordered pill with hairline.
   * `bare` — uppercase text only, no chip. Quieter, used inside section headers
   * where the chip would compete with the headline below it.
   */
  variant?: 'chip' | 'bare';
}

export function Eyebrow({
  children,
  className,
  variant = 'chip',
}: EyebrowProps) {
  if (variant === 'bare') {
    return (
      <div
        className={cn(
          'inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-fg-subtle',
          className,
        )}
      >
        {children}
      </div>
    );
  }
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.15em] text-fg-muted',
        className,
      )}
    >
      {children}
    </div>
  );
}
