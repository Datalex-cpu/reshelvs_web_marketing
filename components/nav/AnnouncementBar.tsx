import Link from 'next/link';

export function AnnouncementBar() {
  return (
    <div className="relative z-40 w-full border-b border-border bg-bg-deep/60">
      <Link
        href="/#waitlist"
        className="focus-ring group mx-auto flex w-full max-w-6xl items-center justify-center gap-2 px-6 py-2 text-center text-xs text-fg-muted transition-colors hover:text-fg"
      >
        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
        <span>
          <span className="font-medium text-fg">Early access</span>
          <span className="mx-2 text-fg-subtle">·</span>
          <span>Open for KSA / GCC distributors</span>
        </span>
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </Link>
    </div>
  );
}
