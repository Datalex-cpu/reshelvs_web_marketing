const brands = [
  'Atlas', 'Vector', 'Northwind', 'Quill', 'Foundry',
  'Helios', 'Lumen', 'Mercator', 'Orbit', 'Pioneer',
  'Sable', 'Tessera',
];

export function BrandMarquee() {
  return (
    <div className="relative w-full overflow-hidden border-y border-border bg-bg-deep/40 py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-bg to-transparent" />
      <div className="flex w-max animate-marquee gap-16 px-8">
        {[...brands, ...brands].map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap font-display text-2xl font-medium tracking-tight text-fg-muted/80"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
