const brands = [
  'Anabil',
  'AlMaha Foods',
  'Gulf Distribution',
  'Nakheel FMCG',
  'Riyadh Retail',
  'Mada Trading',
  'Carrefour MENA',
  'Lulu Group',
  'Spinneys',
  'Panda Retail',
  'Tamimi Markets',
  'Othaim',
];

export function BrandMarquee() {
  return (
    <section
      aria-label="Built for FMCG field teams across the region"
      className="relative w-full overflow-hidden border-y border-border bg-bg-deep/40 py-12"
    >
      <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-fg-subtle">
        Built for FMCG field teams across the region
      </p>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-bg to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-14 px-8">
        {[...brands, ...brands].map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap font-display text-2xl font-medium tracking-tight text-fg-muted/70 transition-colors hover:text-fg/90"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
