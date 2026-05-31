import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Monochrome system, theme-aware via CSS variables in globals.css.
        // `:root` ships the light values; `.dark` overrides for dark mode.
        //
        // `fg.DEFAULT` and `bg.surface` use `rgb(var(--*-rgb) / <alpha-value>)`
        // so Tailwind's opacity modifier works (`text-fg/40`, `bg-fg/[0.05]`,
        // `border-fg/10` etc.). The non-alpha-aware tokens still use plain
        // `var()` form since they don't need to mix alpha at the utility level.
        //
        // 2026-05: switched from pure-mono-dark to theme-aware via vars.
        bg: {
          DEFAULT:  'rgb(var(--bg-rgb) / <alpha-value>)',
          deep:     'var(--bg-deep)',
          surface:  'rgb(var(--surface-rgb) / <alpha-value>)',
          raised:   'var(--raised)',
          elevated: 'var(--elevated)',
        },
        fg: {
          DEFAULT: 'rgb(var(--fg-rgb) / <alpha-value>)',
          muted:   'var(--fg-muted)',
          subtle:  'var(--fg-subtle)',
          faint:   'var(--fg-faint)',
        },
        border: {
          DEFAULT: 'var(--border)',
          strong:  'var(--border-strong)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Inter Display"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'display': '-0.04em',
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // Mono "spotlight" — theme-aware via --mono-spot CSS variable.
        'mono-spot':
          'radial-gradient(ellipse at center, var(--mono-spot), transparent 60%)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'float-slow': 'float-slow 22s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.7' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-12px,0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
