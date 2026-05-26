'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const samples = [
  {
    label: 'cURL',
    lang: 'bash',
    code: `curl -X POST https://api.reshelvs.com/v1/products \\
  -H "Authorization: Bearer $RESHELVS_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Ceramic Mug",
    "brand": "atlas",
    "price": 2400
  }'`,
  },
  {
    label: 'Node',
    lang: 'ts',
    code: `import { Reshelvs } from '@reshelvs/sdk';

const rs = new Reshelvs(process.env.RESHELVS_KEY);

await rs.products.create({
  name: 'Ceramic Mug',
  brand: 'atlas',
  price: 2400,
});`,
  },
  {
    label: 'Python',
    lang: 'py',
    code: `from reshelvs import Reshelvs

rs = Reshelvs(api_key=os.environ["RESHELVS_KEY"])

rs.products.create(
    name="Ceramic Mug",
    brand="atlas",
    price=2400,
)`,
  },
];

export function CodeTabs() {
  const [active, setActive] = useState(0);
  const current = samples[active];

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-bg-surface">
      <div className="flex items-center gap-1 border-b border-border bg-bg-deep/50 px-2 py-2">
        {samples.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setActive(i)}
            className={cn(
              'rounded-md px-3 py-1 text-xs transition-colors',
              i === active
                ? 'bg-white/10 text-white'
                : 'text-fg-muted hover:text-white',
            )}
          >
            {s.label}
          </button>
        ))}
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-fg">
        <code>{current.code}</code>
      </pre>
    </div>
  );
}
