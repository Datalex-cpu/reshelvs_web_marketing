import { Eyebrow } from '@/components/ui/Section';

export function Testimonial() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-surface p-10 md:p-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-mono-spot opacity-80"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <Eyebrow className="mx-auto">What we&apos;re building</Eyebrow>
        <p className="mt-8 font-display text-2xl font-medium leading-snug tracking-tight text-fg md:text-4xl">
          Three apps and a spreadsheet, replaced by one. Reps finish routes
          earlier, supervisors see attendance live, and brand owners see
          on-shelf availability the same day — not the next week.
        </p>
        <p className="mt-8 text-xs uppercase tracking-[0.2em] text-fg-subtle">
          The Reshelvs thesis · private beta
        </p>
      </div>
    </div>
  );
}
