const brands = [
  'Anabil',
  'AlMaha Foods',
  'Gulf Distribution',
  'Nakheel FMCG',
  'Mada Trading',
  'Riyadh Retail',
];

/**
 * Above-the-fold trust strip. Static — no marquee — for fast visual proof
 * that the product is in real hands. Swap in actual logo SVGs when available.
 */
export function TrustedBy() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6">
      <p className="mb-6 text-center text-[11px] uppercase tracking-[0.2em] text-fg-subtle">
        Running in the field with
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80">
        {brands.map((b) => (
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
