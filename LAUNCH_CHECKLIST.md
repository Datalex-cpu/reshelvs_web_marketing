# Launch checklist — reshelvs.com

Ordered path to production + receiving inquiries. Do them top to bottom.
Items marked **[you]** need account access; **[done]** are already
handled in code.

## 1. Email plumbing (the actual blocker for inquiries)

- [ ] **[you]** Verify `reshelvs.com` in Resend → Domains. Add the
      generated SPF/DKIM TXT + MX records to Squarespace DNS
      (see `DEPLOYMENT.md` §2). Wait for "Verified".
- [done] Contact route now sends `from = RESEND_FROM` (no longer a
      hardcoded `site@reshelvs.com`). Works with the verified domain
      or the `onboarding@resend.dev` sandbox stopgap.
- [done] Waitlist route now emails an internal notification to
      `CONTACT_INBOX` on every signup (was previously invisible).
- [ ] **[you]** Stopgap until the domain verifies: set
      `RESEND_FROM=onboarding@resend.dev` so test emails actually
      deliver. Switch to `hello@reshelvs.com` once verified.

## 2. Vercel project

- [ ] **[you]** Import the repo at vercel.com/new (Next.js auto-detected).
- [ ] **[you]** Set env vars (Production + Preview):
      `RESEND_API_KEY`, `RESEND_FROM`, `CONTACT_INBOX`,
      `NEXT_PUBLIC_SITE_URL=https://reshelvs.com`,
      and optional `RESEND_AUDIENCE_ID`.
- [ ] **[you]** Deploy. **Redeploy** after any env var change — they
      don't take effect until you do.

## 3. DNS cutover (Squarespace → Vercel)

- [ ] **[you]** A record `@ → 76.76.21.21`, CNAME `www → cname.vercel-dns.com`
      (see `DEPLOYMENT.md` §2). Add `reshelvs.com` + `www` in Vercel →
      Domains; set `www` to redirect to apex. SSL auto-issues.

## 4. Pre-launch smoke test

- [ ] Submit the contact form → confirm the email lands in `CONTACT_INBOX`.
- [ ] Join the waitlist → confirm both the user confirmation **and** the
      internal notification arrive.
- [ ] `https://reshelvs.com` resolves with SSL; `www` 301s to apex.
- [ ] `/sitemap.xml` and `/robots.txt` resolve.
- [ ] Lighthouse: Performance ≥ 95, Accessibility ≥ 95.

## 5. Credibility pass (before a GCC distributor sees it)

- [done] Homepage Arabic-first claim softened to match shipped reality.
- [ ] **[you]** Replace invented customer logos / case-study quotes, OR
      relabel them so they don't read as signed customers.
- [ ] **[you]** Replace the synthetic hero `ProductPreview` mock with a
      real `app.reshelvs.com` screenshot or short Loom.

## Nice-to-have (not launch blockers)

- [ ] `status.reshelvs.com` so the footer link doesn't 404.
- [ ] Real `/docs/quickstart` page.
- [ ] `/ar` localized route (or de-emphasize Arabic-first until shipped).
