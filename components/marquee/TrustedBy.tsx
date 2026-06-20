// Who Reshelvs is built for. Honest build-intent framing — we don't claim
// signed customers we don't have. Swap in real partner logos once there are
// design partners willing to be named.
const audiences = [
  'Distributors',
  'Brand owners',
  'Retail merchandising',
  'Wholesale & cash-and-carry',
  'Field-marketing agencies',
];

/**
 * Above-the-fold positioning strip. Static — no marquee. States who the
 * product is for, not who already uses it (we're in private beta).
 */
export function TrustedBy() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6">
      <p className="mb-6 text-center text-[11px] uppercase tracking-[0.2em] text-fg-subtle">
        Built for the teams that run the field
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80">
        {audiences.map((b) => (
          <span
            key={b}
            className="whitespace-nowrap font-display text-lg font-medium tracking-tight text-fg-muted/80 transition-colors hover:text-fg sm:text-xl"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
