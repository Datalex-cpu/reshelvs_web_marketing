'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun, Laptop } from 'lucide-react';
import { useEffect, useState } from 'react';

/**
 * Navbar light / dark / system theme toggle for the marketing site.
 * Mirror of the admin's `client/src/components/theme-toggle.tsx`.
 *
 * Renders a button that opens a small dropdown. Visible icon reflects
 * the *resolved* active theme (Sun on light, Moon on dark) rather than
 * the user's selected mode (which includes "system"). A neutral
 * placeholder is rendered until `mounted` so the SSR / CSR icon match.
 */
export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on outside-click / Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-theme-toggle-root]')) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Theme toggle"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-fg-muted"
      >
        <Sun className="h-4 w-4 opacity-50" />
      </button>
    );
  }

  const ActiveIcon = resolvedTheme === 'dark' ? Moon : Sun;

  return (
    <div className="relative" data-theme-toggle-root>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Theme toggle"
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-fg-muted hover:text-fg hover:bg-fg/[0.04] transition-colors"
      >
        <ActiveIcon className="h-4 w-4" />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full mt-2 w-40 rounded-xl border border-hairline bg-bg-surface p-1 shadow-lg backdrop-blur"
        >
          <ThemeMenuItem
            icon={<Sun className="h-4 w-4" />}
            label="Light"
            active={theme === 'light'}
            onClick={() => {
              setTheme('light');
              setOpen(false);
            }}
          />
          <ThemeMenuItem
            icon={<Moon className="h-4 w-4" />}
            label="Dark"
            active={theme === 'dark'}
            onClick={() => {
              setTheme('dark');
              setOpen(false);
            }}
          />
          <ThemeMenuItem
            icon={<Laptop className="h-4 w-4" />}
            label="System"
            active={theme === 'system'}
            onClick={() => {
              setTheme('system');
              setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}

function ThemeMenuItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-fg hover:bg-fg/[0.04] transition-colors"
    >
      <span className="text-fg-muted">{icon}</span>
      <span>{label}</span>
      {active && <span className="ml-auto text-xs text-fg-subtle">✓</span>}
    </button>
  );
}
