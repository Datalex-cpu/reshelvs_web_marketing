import { NextResponse } from 'next/server';

interface Payload {
  name?: string;
  email?: string;
  company?: string;
  reason?: string;
  message?: string;
}

export const runtime = 'edge';

/**
 * Minimal contact endpoint. Validates payload and (if RESEND_API_KEY is set)
 * forwards to a notification address. Falls back to a 200 OK no-op in dev so
 * the form doesn't break locally.
 */
export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 });
  }

  const { name, email, message } = body;
  if (!name || !email) {
    return NextResponse.json(
      { error: 'Name and email are required.' },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: 'That email looks off.' },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notify = process.env.CONTACT_INBOX ?? 'sales@reshelvs.com';
  const from = process.env.RESEND_FROM ?? 'hello@reshelvs.com';
  if (!apiKey) {
    // Dev / preview without secrets — accept silently.
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Reshelvs Site <${from}>`,
        to: notify,
        reply_to: email,
        subject: `Contact form — ${body.reason ?? 'general'}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${body.company ?? '—'}`,
          `Reason: ${body.reason ?? '—'}`,
          '',
          message ?? '(no message)',
        ].join('\n'),
      }),
    });
    if (!res.ok) throw new Error('Upstream rejected.');
  } catch {
    return NextResponse.json(
      { error: 'We could not send this. Please email sales@reshelvs.com.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
