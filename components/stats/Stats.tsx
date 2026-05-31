const stats = [
  { value: '90s', label: 'Tenant onboarding', detail: 'sign up → first store' },
  { value: '10k+', label: 'Stores per tenant', detail: 'multi-company ready' },
  { value: '30+', label: 'Field tasks', detail: 'OSA, expiry, POSM, orders…' },
  { value: '<1s', label: 'Check-in latency', detail: 'with mock-GPS rejection' },
];

export function Stats() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-mono-spot"
      />
      <div className="relative grid grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`p-8 ${i >= 2 ? 'border-t border-border md:border-t-0' : ''} ${
              i % 2 === 1 ? 'border-l border-border md:border-l-0' : ''
            }`}
          >
            <div className="num font-display text-4xl font-medium tracking-display md:text-5xl">
              <span className="text-gradient">{s.value}</span>
            </div>
            <div className="mt-3 text-sm font-medium text-fg">{s.label}</div>
            <div className="mt-1 text-xs text-fg-muted">{s.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
