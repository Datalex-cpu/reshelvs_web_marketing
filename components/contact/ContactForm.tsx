'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const reasons = [
  { value: 'sales', label: 'Talk to sales' },
  { value: 'partnership', label: 'Partnership / channel' },
  { value: 'support', label: 'Customer support' },
  { value: 'press', label: 'Press or analyst' },
  { value: 'other', label: 'Something else' },
];

export function ContactForm() {
  const [state, setState] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');
  const [message, setMessage] = useState<string>('');

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('loading');
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Could not send. Try again or email us directly.');
      setState('ok');
      setMessage('Thanks — we received your note and will reply within one business day.');
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      setState('err');
      setMessage(err instanceof Error ? err.message : 'Try again');
    }
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-border bg-bg-surface p-6 md:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Work email" name="email" type="email" required />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field label="Company" name="company" />
        <SelectField label="Reason" name="reason" options={reasons} />
      </div>
      <div className="mt-4">
        <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-fg-subtle">
          Tell us about your field operation
        </label>
        <textarea
          name="message"
          rows={5}
          className="w-full rounded-lg border border-border bg-fg/[0.02] px-4 py-3 text-sm text-fg placeholder:text-fg-subtle focus:border-border-strong focus:outline-none"
          placeholder="Number of reps, regions, brands you carry, current stack…"
        />
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button type="submit">
          {state === 'loading' ? 'Sending…' : 'Send'}
        </Button>
        {message && (
          <p
            className={cn(
              'text-xs',
              state === 'ok' ? 'text-emerald-400' : 'text-rose-400',
            )}
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-fg-subtle">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-border bg-fg/[0.02] px-4 py-3 text-sm text-fg placeholder:text-fg-subtle focus:border-border-strong focus:outline-none"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-fg-subtle">
        {label}
      </label>
      <select
        name={name}
        defaultValue="sales"
        className="w-full rounded-lg border border-border bg-fg/[0.02] px-4 py-3 text-sm text-fg focus:border-border-strong focus:outline-none"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-bg-deep">
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
