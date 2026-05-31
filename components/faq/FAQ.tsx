'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface QA {
  q: string;
  a: string;
}

interface FAQProps {
  items: QA[];
}

export function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-bg-surface">
      {items.map((item, i) => {
        const expanded = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(expanded ? null : i)}
              aria-expanded={expanded}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-fg/[0.02]"
            >
              <span className="font-display text-base font-medium tracking-tight text-fg md:text-lg">
                {item.q}
              </span>
              <span
                aria-hidden
                className={cn(
                  'flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-fg-muted transition-transform',
                  expanded && 'rotate-45',
                )}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <line
                    x1="5"
                    y1="0"
                    x2="5"
                    y2="10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="0"
                    y1="5"
                    x2="10"
                    y2="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
            </button>
            <div
              className={cn(
                'grid overflow-hidden px-6 transition-all duration-200',
                expanded
                  ? 'grid-rows-[1fr] pb-5 opacity-100'
                  : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <p className="min-h-0 max-w-2xl text-sm leading-relaxed text-fg-muted">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
