import { cn } from '@/lib/utils';
import { LOGO_PATHS, LOGO_VIEWBOX } from '@/lib/logo-paths';

interface LogoProps {
  className?: string;
}

/** Reshelvs R-mark — bare glyph only, currentColor-tinted. */
export function LogoMark({ className }: LogoProps) {
  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      className={cn('shrink-0', className)}
      role="img"
      aria-label="Reshelvs"
      fill="currentColor"
    >
      {LOGO_PATHS.map((d) => (
        <path key={d.slice(0, 24)} d={d} />
      ))}
    </svg>
  );
}

/**
 * Lockup of mark + wordmark.
 */
export function LogoLockup({
  className,
  size = 'md',
}: LogoProps & { size?: 'sm' | 'md' | 'lg' }) {
  const mark = {
    sm: 'h-5 w-5',
    md: 'h-7 w-7',
    lg: 'h-9 w-9',
  }[size];
  const text = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
  }[size];
  return (
    <span
      className={cn(
        // text-fg follows the theme: near-black on light, white on dark.
        // Same flip the LogoMark gets via currentColor.
        'inline-flex items-center gap-2.5 font-display text-fg',
        className,
      )}
    >
      <LogoMark className={mark} />
      <span className={cn('font-medium tracking-tight', text)}>Reshelvs</span>
    </span>
  );
}
