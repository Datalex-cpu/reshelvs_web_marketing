const brands = [
  'Atlas', 'Vector', 'Northwind', 'Quill', 'Foundry',
  'Helios', 'Lumen', 'Mercator', 'Orbit', 'Pioneer',
  'Sable', 'Tessera',
];

export function BrandMarquee() {
  return (
    <section className="relative w-full overflow-hidden border-y border-border bg-bg-deep/40">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="mb-8 text-center text-xs uppercase tracking-[0.2em] text-fg-subtle">
          Trusted by the brands shaping what's next
        </p>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-bg to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-bg to-transparent" />
          <div className="flex w-max animate-marquee gap-14">
            {[...brands, ...brands].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap font-display text-2xl font-medium tracking-tight text-fg-muted/60 transition-colors hover:text-white"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
