// Analytics surface. Vercel Analytics is loaded in app/layout.tsx.
// PostHog can be wired here once the key is set.

export function track(event: string, props?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  // @ts-expect-error - posthog injected on window when loaded
  if (window.posthog) {
    // @ts-expect-error - posthog injected on window when loaded
    window.posthog.capture(event, props);
  }
}
