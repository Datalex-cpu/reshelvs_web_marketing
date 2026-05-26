# Deployment — reshelvs.com

This site deploys to Vercel. The domain `reshelvs.com` is managed in Squarespace.

## 1. Vercel project

1. Import this repo at https://vercel.com/new.
2. Framework preset: **Next.js** (auto-detected).
3. Root directory: `./` (default).
4. Environment variables (Production + Preview):

| Key                       | Value                                  |
| ------------------------- | -------------------------------------- |
| `RESEND_API_KEY`          | `re_xxx` from Resend dashboard         |
| `RESEND_FROM`             | `hello@reshelvs.com`                   |
| `RESEND_AUDIENCE_ID`      | (optional) Resend audience id          |
| `NEXT_PUBLIC_SITE_URL`    | `https://reshelvs.com`                 |
| `NEXT_PUBLIC_POSTHOG_KEY` | (optional)                             |
| `SENTRY_DSN`              | (optional)                             |

5. Deploy. First deploy lands on `*.vercel.app`.

## 2. Squarespace DNS — reshelvs.com

Open Squarespace → **Domains → reshelvs.com → DNS Settings**. Remove any
A records pointing to Squarespace parking. Add:

### Web (Vercel)

| Type  | Host  | Value                  | TTL  |
| ----- | ----- | ---------------------- | ---- |
| A     | @     | `76.76.21.21`          | 3600 |
| CNAME | www   | `cname.vercel-dns.com` | 3600 |
| CNAME | docs  | `cname.vercel-dns.com` | 3600 |
| CNAME | blog  | `cname.vercel-dns.com` | 3600 |

Then in Vercel → **Project → Settings → Domains**: add `reshelvs.com`
and `www.reshelvs.com` (set `www` to redirect to apex). SSL is issued
automatically.

### Email — Google Workspace (receiving `hello@reshelvs.com`)

| Type | Host                  | Value                          | Priority |
| ---- | --------------------- | ------------------------------ | -------- |
| MX   | @                     | `smtp.google.com`              | 1        |
| TXT  | @                     | `v=spf1 include:_spf.google.com ~all` | —  |
| TXT  | `google._domainkey`   | (DKIM string from Google admin) | —       |
| TXT  | `_dmarc`              | `v=DMARC1; p=quarantine; rua=mailto:dmarc@reshelvs.com` | — |

### Email — Resend (sending transactional from `hello@reshelvs.com`)

In Resend dashboard → **Domains → Add `reshelvs.com`** → copy the
generated records:

| Type | Host                | Value                                            |
| ---- | ------------------- | ------------------------------------------------ |
| TXT  | `send`              | (SPF string from Resend)                         |
| TXT  | `resend._domainkey` | (DKIM string from Resend)                        |
| MX   | `send`              | `feedback-smtp.us-east-1.amazonses.com` (priority 10) |

DNS propagation: 5 minutes – 24 hours. Verify in both dashboards.

## 3. Subdomains (later)

| Subdomain               | Use                          |
| ----------------------- | ---------------------------- |
| `docs.reshelvs.com`     | Mintlify or Vercel `/docs`   |
| `blog.reshelvs.com`     | Vercel — same project, `/blog` route |
| `status.reshelvs.com`   | BetterStack / Instatus       |

## 4. Post-launch checks

- [ ] `https://reshelvs.com` resolves with valid SSL
- [ ] `https://www.reshelvs.com` 301s to apex
- [ ] Waitlist form POST succeeds and Resend email arrives
- [ ] Lighthouse: Performance ≥ 95, Accessibility ≥ 95
- [ ] `/sitemap.xml` and `/robots.txt` resolve
- [ ] Vercel Analytics shows traffic
