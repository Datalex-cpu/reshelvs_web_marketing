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

    const from = process.env.RESEND_FROM ?? 'hello@reshelvs.com';

    if (process.env.RESEND_AUDIENCE_ID) {
      await resend.contacts.create({
        email,
        audienceId: process.env.RESEND_AUDIENCE_ID,
      });
    }

    // Internal notification so waitlist signups are visible to the team,
    // not just sitting in the Resend audience. Non-fatal if it fails.
    const notify = process.env.CONTACT_INBOX ?? 'sales@reshelvs.com';
    try {
      await resend.emails.send({
        from: `Reshelvs Waitlist <${from}>`,
        to: notify,
        reply_to: email,
        subject: `New waitlist signup — ${email}`,
        text: `New waitlist signup: ${email}`,
      });
    } catch {
      // Swallow — the user-facing confirmation below is what matters.
    }

    await resend.emails.send({
      from,
      to: email,
      subject: "You're on the Reshelvs waitlist",
      html: `
        <div style="font-family:Inter,system-ui,sans-serif;background:#0a0a0a;color:#fafafa;padding:32px;border-radius:16px;max-width:560px;">
          <h1 style="font-size:24px;margin:0 0 12px;font-weight:500;letter-spacing:-0.02em;">Welcome to Reshelvs.</h1>
          <p style="color:#a3a3a3;line-height:1.65;margin:0 0 16px;">
            You're on the list for the operating system for FMCG field teams.
            We're rolling out early-access slots region by region — KSA and
            GCC distributors first, then wider MENA, then beyond.
          </p>
          <p style="color:#a3a3a3;line-height:1.65;margin:0 0 24px;">
            If you want to jump the queue, reply to this email with your
            team size, country, and current stack. We read every reply.
          </p>
          <p style="color:#737373;font-size:12px;margin:0;">
            — The Reshelvs team
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
