export function ProductPreview() {
  return (
    <div className="relative">
      {/* Soft floor-glow so the preview feels lifted off the bg. fg-based so
          it flips with the theme (faint dark halo on light, white on dark). */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-20 -top-10 -bottom-10 bg-[radial-gradient(ellipse_at_center,rgb(var(--fg-rgb)/0.06),transparent_60%)]"
      />
      {/* Hairline highlight along the top, like a screen edge catching light. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-12 -top-px h-px hairline-glow"
      />
      <div className="relative grid items-center gap-6 md:grid-cols-[1fr_auto] md:gap-10">
        <DashboardMock />
        <PhoneMock />
      </div>
      {/* Honesty affordance: this is a designed preview, not a screen capture
          of the live product (private beta). Keeps the mock from reading as a
          real screenshot on close inspection. */}
      <p className="relative mt-5 text-center text-[11px] text-fg-subtle">
        Representative interface — a product preview, not a live screenshot.
      </p>
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
      {/* window chrome */}
      <div className="flex items-center justify-between border-b border-border bg-bg-deep/70 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
        </div>
        <div className="rounded-md border border-border bg-fg/[0.03] px-3 py-0.5 text-[10px] text-fg-subtle">
          app.reshelvs.com / routes
        </div>
        <span className="w-12" />
      </div>
      {/* body */}
      <div className="grid grid-cols-[180px_1fr] min-h-[320px]">
        {/* sidebar */}
        <div className="border-r border-border bg-bg-deep/40 p-3 text-[11px]">
          <div className="mb-2 text-fg-subtle uppercase tracking-[0.15em]">Workspace</div>
          {['Dashboard', 'Routes', 'Visits', 'Stores', 'Catalog', 'Reports', 'Users'].map((l, i) => (
            <div
              key={l}
              className={`mb-0.5 rounded-md px-2 py-1.5 ${
                i === 1 ? 'bg-fg/10 text-fg' : 'text-fg-muted'
              }`}
            >
              {l}
            </div>
          ))}
        </div>
        {/* main */}
        <div className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.15em] text-fg-subtle">
                Today · 26 May
              </div>
              <div className="font-display text-lg font-medium">North Riyadh route</div>
            </div>
            <div className="rounded-md border border-border bg-fg/[0.03] px-2 py-0.5 text-[10px] text-emerald-400">
              ON TRACK
            </div>
          </div>
          {/* mini chart */}
          <div className="mb-3 flex h-16 items-end gap-1">
            {[35, 55, 48, 70, 62, 80, 74, 88, 92, 78, 95, 88].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-fg/10 to-fg/85"
              />
            ))}
          </div>
          {/* row list */}
          <div className="space-y-1.5">
            {[
              ['08:12', 'Hypermarket · Olaya', 'OSA 92%', 'done'],
              ['09:04', 'Supermarket · Al Murouj', 'OSA 78%', 'done'],
              ['10:18', 'Supermarket · Hittin', 'in visit', 'live'],
              ['11:30', 'Mini-market · Yarmouk', 'queued', 'queued'],
            ].map(([time, name, status, state]) => (
              <div
                key={name}
                className="flex items-center justify-between rounded-md border border-border bg-bg-deep px-2.5 py-1.5 text-[11px]"
              >
                <span className="font-mono text-fg-subtle">{time}</span>
                <span className="flex-1 px-3 text-fg">{name}</span>
                <span
                  className={
                    state === 'done'
                      ? 'text-emerald-400'
                      : state === 'live'
                        ? 'text-fg'
                        : 'text-fg-muted'
                  }
                >
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneMock() {
  return (
    <div className="relative mx-auto w-[240px] md:w-[260px]">
      <div className="relative overflow-hidden rounded-[36px] border border-border bg-bg-deep p-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
        {/* notch — a phone notch reads as dark hardware on either theme */}
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />
        <div className="overflow-hidden rounded-[28px] bg-bg-surface px-4 pb-5 pt-10">
          <div className="text-[10px] uppercase tracking-[0.18em] text-fg-subtle">
            Visit · Hypermarket, Olaya
          </div>
          <div className="mt-2 font-display text-base font-medium text-fg">
            On-shelf check
          </div>
          {/* shelf grid */}
          <div className="mt-3 grid grid-cols-5 gap-1">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={`h-5 rounded-sm ${
                  i === 7 || i === 13 ? 'bg-rose-500/50' : 'bg-emerald-400/40'
                }`}
              />
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-[10px]">
            <span className="text-fg-muted">OSA</span>
            <span className="font-mono text-emerald-400">90.0%</span>
          </div>
          {/* tasks */}
          <div className="mt-4 space-y-1.5">
            {[
              ['Facings count', 'done'],
              ['Price audit', 'done'],
              ['Expiry check', 'live'],
              ['Order intake', 'queued'],
            ].map(([t, s]) => (
              <div
                key={t}
                className="flex items-center justify-between rounded-md border border-border bg-bg-deep px-2 py-1 text-[10px]"
              >
                <span className="text-fg">{t}</span>
                <span
                  className={
                    s === 'done'
                      ? 'text-emerald-400'
                      : s === 'live'
                        ? 'text-fg'
                        : 'text-fg-muted'
                  }
                >
                  {s}
                </span>
              </div>
            ))}
          </div>
          {/* big CTA */}
          <button
            disabled
            className="mt-4 w-full rounded-full bg-fg py-2 text-[11px] font-medium text-bg opacity-95"
          >
            Continue visit
          </button>
        </div>
      </div>
    </div>
  );
}
