'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');
  const [message, setMessage] = useState<string>('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error ?? 'Something went wrong');
      setState('ok');
      setMessage("You're on the list.");
      setEmail('');
    } catch (err) {
      setState('err');
      setMessage(err instanceof Error ? err.message : 'Try again');
    }
  }

  return (
    <form
      id="waitlist"
      onSubmit={submit}
      className="mx-auto flex w-full max-w-md flex-col items-stretch gap-2 sm:flex-row"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@brand.com"
        className="h-12 flex-1 rounded-full border border-border bg-white/[0.04] px-5 text-sm text-white placeholder:text-fg-subtle focus:border-border-strong focus:outline-none"
      />
      <button
        type="submit"
        disabled={state === 'loading'}
        className={cn(
          'h-12 rounded-full bg-white px-6 text-sm font-medium text-black transition-all hover:bg-white/90 disabled:opacity-50',
        )}
      >
        {state === 'loading' ? 'Joining…' : 'Join waitlist'}
      </button>
      {message && (
        <p
          className={cn(
            'mt-2 w-full text-center text-xs sm:absolute sm:mt-16',
            state === 'ok' ? 'text-emerald-400' : 'text-rose-400',
          )}
        >
          {message}
        </p>
      )}
    </form>
  );
}
