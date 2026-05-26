import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary:
    'bg-white text-black hover:bg-white/90 active:scale-[0.98] shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset]',
  secondary:
    'bg-white/5 text-white border border-border hover:bg-white/10 backdrop-blur',
  ghost: 'text-fg-muted hover:text-white',
};

const sizes: Record<Size, string> = {
  sm: 'h-8 px-4 text-sm',
  md: 'h-10 px-5 text-sm',
  lg: 'h-12 px-7 text-base',
};

interface Props {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  ...rest
}: Props) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
