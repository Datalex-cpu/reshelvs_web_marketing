import { cn } from '@/lib/utils';

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-border bg-fg/[0.03] px-2.5 py-0.5 text-xs text-fg-muted',
        className,
      )}
    >
      {children}
    </span>
  );
}
