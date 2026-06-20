import { cn } from '@/lib/utils';

interface CardProps {
  id?: string;
  className?: string;
  /**
   * Interactive hover treatment — lift + border-brighten + wash. Default
   * `true` (the brand card identity). Set `false` for static, non-clickable
   * panels so the surface stays consistent without a false click affordance.
   */
  hover?: boolean;
  children: React.ReactNode;
}

export function Card({ id, className, hover = true, children }: CardProps) {
  return (
    <div
      id={id}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border bg-bg-surface p-6 scroll-mt-24',
        hover &&
          'transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong',
        className,
      )}
    >
      {hover && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-fg/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
