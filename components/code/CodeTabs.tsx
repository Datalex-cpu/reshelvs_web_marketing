'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const samples = [
  {
    label: 'cURL',
    lang: 'bash',
    code: `curl -X POST https://api.reshelvs.com/v1/visits \\
  -H "Authorization: Bearer $RESHELVS_KEY" \\
  -H "X-Tenant-Id: t001" \\
  -H "Content-Type: application/json" \\
  -d '{
    "storeId":   "store_8431",
    "routeId":   "route_2026_05_26_north",
    "userId":    "u014",
    "checkInAt": "2026-05-26T08:12:00+03:00",
    "geo":       { "lat": 24.7136, "lng": 46.6753 }
  }'`,
  },
  {
    label: 'Node',
    lang: 'ts',
    code: `import { Reshelvs } from '@reshelvs/sdk';

const rs = new Reshelvs({ apiKey: process.env.RESHELVS_KEY!, tenantId: 't001' });

// Open a store visit when the rep arrives on-site
const visit = await rs.visits.create({
  storeId:   'store_8431',
  routeId:   'route_2026_05_26_north',
  userId:    'u014',
  checkInAt: new Date(),
  geo:       { lat: 24.7136, lng: 46.6753 },
});

// Submit an OSA reading from the shelf-vision pipeline
await rs.osa.submit(visit.id, {
  shelf:     'primary',
  facings:   { 'sku_0421': 6, 'sku_0107': 3, 'sku_0832': 0 },
  imageUrl:  'gs://reshelvs/shelf/8431-2026-05-26.jpg',
});`,
  },
  {
    label: 'Python',
    lang: 'py',
    code: `from reshelvs import Reshelvs

rs = Reshelvs(api_key=os.environ["RESHELVS_KEY"], tenant_id="t001")

visit = rs.visits.create(
    store_id="store_8431",
    route_id="route_2026_05_26_north",
    user_id="u014",
    check_in_at=datetime.now(tz=timezone.utc),
    geo={"lat": 24.7136, "lng": 46.6753},
)

rs.osa.submit(
    visit.id,
    shelf="primary",
    facings={"sku_0421": 6, "sku_0107": 3, "sku_0832": 0},
)`,
  },
  {
    label: 'Webhook',
    lang: 'json',
    code: `{
  "event":     "visit.completed",
  "tenantId":  "t001",
  "companyId": "c001",
  "data": {
    "visitId":  "visit_19f2",
    "storeId":  "store_8431",
    "userId":   "u014",
    "duration": 1284,
    "osa":      0.867,
    "facings":  { "sku_0421": 6, "sku_0107": 3, "sku_0832": 0 },
    "issues":   ["expiry:sku_0832", "out_of_stock:sku_0832"]
  }
}`,
  },
];

export function CodeTabs() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const current = samples[active];

  async function copy() {
    try {
      await navigator.clipboard.writeText(current.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // ignore
    }
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-surface [box-shadow:0_0_0_1px_var(--glint)_inset]">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-fg/[0.06] to-transparent"
      />
      <div className="relative flex items-center justify-between border-b border-border bg-bg-deep/50 px-4 py-2.5">
        <div className="flex items-center gap-1" role="tablist" aria-label="Code sample language">
          {samples.map((s, i) => (
            <button
              key={s.label}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls="code-sample-panel"
              onClick={() => setActive(i)}
              className={cn(
                'rounded-md px-2.5 py-1 text-xs transition-colors',
                i === active
                  ? 'bg-fg/10 text-fg'
                  : 'text-fg-muted hover:text-fg',
              )}
            >
              {s.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-fg-subtle sm:inline">
            {current.lang}
          </span>
          <button
            type="button"
            onClick={copy}
            aria-label={`Copy ${current.label} code sample`}
            className="rounded-md px-2 py-1 text-[11px] text-fg-muted transition-colors hover:text-fg"
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
      <pre
        id="code-sample-panel"
        role="tabpanel"
        className="relative overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-fg"
      >
        <code>{current.code}</code>
      </pre>
      <div className="relative border-t border-border bg-bg-deep/30 px-5 py-2.5 text-[11px] text-fg-subtle">
        API preview — available to design partners in private beta.
      </div>
    </div>
  );
}
