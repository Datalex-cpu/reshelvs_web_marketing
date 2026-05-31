import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const features = [
  {
    id: 'routes',
    title: 'Intelligent route planning',
    body:
      'Auto-generate beats from visit frequency, geo-clustering, and rep capacity. Manual builder when you need control. Reps get the day they need to run.',
    span: 'md:col-span-2',
    tag: 'Routes',
    visual: <RouteVisual />,
  },
  {
    id: 'osa',
    title: 'AI shelf vision',
    body:
      'Snap a shelf photo — facings, SKUs, share-of-shelf, and OSA come back in seconds.',
    span: '',
    tag: 'OSA',
    visual: <ShelfVisual />,
  },
  {
    id: 'attendance',
    title: 'Geofenced attendance',
    body:
      'Selfie + GPS check-in with mock-location rejection. Field time you can actually trust.',
    span: '',
    tag: 'Attendance',
    visual: <GeoVisual />,
  },
  {
    id: 'visits',
    title: 'Visit flows that fit your playbook',
    body:
      'Drag-and-drop tasks — OSA check, facing count, price audit, expiry, planogram compliance, POSM, orders, payments. Set per company, per channel.',
    span: 'md:col-span-2',
    tag: 'Visits',
    visual: <FlowVisual />,
  },
  {
    id: 'catalog',
    title: 'Catalog & POSM',
    body:
      'SKUs, price lists, schemes, and POSM elements — versioned and pushed to the field in real time.',
    span: '',
    tag: 'Catalog',
    visual: <CatalogVisual />,
  },
  {
    id: 'reports',
    title: 'Reports that drive action',
    body:
      'OSA trends, expiry tracking, replenishment fill rate, rep productivity — read off the same Firestore that writes them.',
    span: 'md:col-span-2',
    tag: 'Analytics',
    visual: <ReportsVisual />,
  },
];

export function FeatureBento() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {features.map((f) => (
        <Card id={f.id} key={f.id} className={`${f.span} min-h-[260px]`}>
          <div className="flex h-full flex-col">
            <Badge className="mb-4 self-start">{f.tag}</Badge>
            <h3 className="font-display text-xl font-medium tracking-tight">
              {f.title}
            </h3>
            <p className="mt-2 max-w-md text-sm text-fg-muted">{f.body}</p>
            <div className="mt-6 flex-1">{f.visual}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}

function RouteVisual() {
  return (
    <svg viewBox="0 0 320 80" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="route" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <path
        d="M10 60 Q 60 10 110 50 T 210 30 T 310 50"
        fill="none"
        stroke="url(#route)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      {[10, 70, 130, 190, 250, 310].map((cx, i) => (
        <g key={cx}>
          <circle
            cx={cx}
            cy={i % 2 ? 35 : 55}
            r="4"
            fill="#000"
            stroke="#fff"
            strokeOpacity="0.7"
            strokeWidth="1.5"
          />
        </g>
      ))}
    </svg>
  );
}

function ShelfVisual() {
  return (
    <div className="relative h-full overflow-hidden rounded-lg border border-border bg-bg-deep p-3">
      <div className="grid grid-cols-5 gap-1.5">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className={`h-6 rounded-sm ${
              i === 6 || i === 11 ? 'bg-rose-500/40' : 'bg-emerald-400/30'
            }`}
          />
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between text-[10px] text-fg-subtle">
        <span>OSA</span>
        <span className="font-mono text-emerald-400">86.7%</span>
      </div>
    </div>
  );
}

function GeoVisual() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="absolute h-24 w-24 animate-ping rounded-full bg-fg/10" />
      <div className="absolute h-16 w-16 rounded-full border border-fg/20" />
      <div className="relative h-3 w-3 rounded-full bg-fg [box-shadow:0_0_14px_var(--hairline-glow)]" />
    </div>
  );
}

function FlowVisual() {
  const steps = ['Check-in', 'OSA scan', 'Facings', 'Price audit', 'Expiry', 'Order', 'Payment', 'Check-out'];
  return (
    <div className="flex flex-wrap gap-1.5">
      {steps.map((s, i) => (
        <span
          key={s}
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-fg/[0.03] px-2 py-1 text-[11px] text-fg-muted"
        >
          <span className="font-mono text-fg-subtle">{String(i + 1).padStart(2, '0')}</span>
          {s}
        </span>
      ))}
    </div>
  );
}

function CatalogVisual() {
  return (
    <div className="space-y-1.5">
      {[
        ['SKU-0421', 'Cola 330ml'],
        ['SKU-0107', 'Crisps 50g'],
        ['SKU-0832', 'Juice 1L'],
      ].map(([id, name]) => (
        <div
          key={id}
          className="flex items-center justify-between rounded-md border border-border bg-bg-deep px-2 py-1.5 text-[11px]"
        >
          <span className="font-mono text-fg-subtle">{id}</span>
          <span className="text-fg-muted">{name}</span>
        </div>
      ))}
    </div>
  );
}

function ReportsVisual() {
  const bars = [40, 65, 50, 80, 72, 90, 78, 95, 88, 100];
  return (
    <div className="flex h-20 items-end gap-1.5">
      {bars.map((h, i) => (
        <div
          key={i}
          style={{ height: `${h}%` }}
          className="flex-1 rounded-t-sm bg-gradient-to-t from-fg/10 to-fg/80"
        />
      ))}
    </div>
  );
}
