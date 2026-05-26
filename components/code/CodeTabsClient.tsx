'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export interface Sample {
  label: string;
  html: string;
}

export function CodeTabsClient({ samples }: { samples: Sample[] }) {
  const [active, setActive] = useState(0);
  const current = samples[active];

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-1 border-b border-border bg-bg-deep/60 px-2 py-2">
        <div className="mr-3 flex items-center gap-1.5 pl-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        </div>
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
      <div
        className="reshelvs-code overflow-x-auto p-5 text-sm leading-relaxed [&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre]:font-mono"
        dangerouslySetInnerHTML={{ __html: current.html }}
      />
    </div>
  );
}
