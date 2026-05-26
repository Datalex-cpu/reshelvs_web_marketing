import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border bg-bg-surface p-6 transition-colors hover:border-border-strong',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </div>
  );
}
