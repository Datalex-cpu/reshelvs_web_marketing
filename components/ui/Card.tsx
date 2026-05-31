import { cn } from '@/lib/utils';

interface CardProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Card({ id, className, children }: CardProps) {
  return (
    <div
      id={id}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border bg-bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong scroll-mt-24',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-fg/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </div>
  );
}
