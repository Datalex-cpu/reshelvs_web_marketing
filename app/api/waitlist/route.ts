import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // If Resend isn't configured yet, accept the signup silently so the
    // form works in preview/dev. Replace with a DB write once available.
    if (!resend) {
      return NextResponse.json({ ok: true, queued: true });
    }

    if (process.env.RESEND_AUDIENCE_ID) {
      await resend.contacts.create({
        email,
        audienceId: process.env.RESEND_AUDIENCE_ID,
      });
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM ?? 'hello@reshelvs.com',
      to: email,
      subject: "You're on the Reshelvs waitlist",
      html: `
        <div style="font-family:Inter,system-ui,sans-serif;background:#0a0a0a;color:#fafafa;padding:32px;border-radius:16px;">
          <h1 style="font-size:24px;margin:0 0 12px;">Welcome to Reshelvs.</h1>
          <p style="color:#a3a3a3;line-height:1.6;">
            You're on the list. We'll be in touch when your shelf is ready.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
