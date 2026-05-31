import { Eyebrow } from '@/components/ui/Section';

export function Testimonial() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-surface p-10 md:p-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-mono-spot opacity-80"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <Eyebrow className="mx-auto">From the field</Eyebrow>
        <blockquote className="mt-8 font-display text-2xl font-medium leading-snug tracking-tight text-fg md:text-4xl">
          “We replaced three apps and a spreadsheet with Reshelvs. Our reps
          finish routes 40 minutes earlier, and we finally see OSA the same
          day — not the next week.”
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-3 text-sm">
          <span
            aria-hidden
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg-raised font-display text-xs font-medium text-fg"
          >
            KR
          </span>
          <div className="text-left">
            <div className="font-medium text-fg">Khalid Al-Rashed</div>
            <div className="text-xs text-fg-muted">
              Head of Field Operations · Gulf Distribution
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
