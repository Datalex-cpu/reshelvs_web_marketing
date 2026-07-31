#!/usr/bin/env node
/**
 * Post-build smoke test for reshelvs.com.
 *
 * Codifies the checks that caught real regressions during the 2026-06 hardening
 * pass. Every assertion here maps to a bug that actually shipped at some point,
 * so a failure means something regressed — not that the check is fussy.
 *
 *   npm run build && npm start &      # or: next start -p 3000
 *   node scripts/smoke.mjs            # BASE=https://reshelvs.com to test prod
 *
 * Exits non-zero on the first category with failures, so it can gate CI.
 */

const BASE = process.env.BASE ?? 'http://localhost:3000';

let pass = 0;
const failures = [];

function check(name, ok, detail = '') {
  if (ok) {
    pass++;
  } else {
    failures.push(`${name}${detail ? ` — ${detail}` : ''}`);
  }
}

async function get(path) {
  const res = await fetch(BASE + path, { redirect: 'manual' });
  return { status: res.status, body: await res.text(), headers: res.headers };
}

async function main() {
  console.log(`smoke: ${BASE}\n`);

  // ── sitemap is the source of truth for which pages must work ──────────────
  const sm = await get('/sitemap.xml');
  check('sitemap 200', sm.status === 200, `got ${sm.status}`);
  const paths = [...sm.body.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].replace(/^https?:\/\/[^/]+/, '') || '/')
    .sort();
  check('sitemap has entries', paths.length > 0, `${paths.length}`);

  // ── every listed page renders, and carries its own canonical ─────────────
  for (const p of paths) {
    const { status, body } = await get(p);
    check(`200 ${p}`, status === 200, `got ${status}`);

    const canonical = body.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    check(`canonical ${p}`, Boolean(canonical), 'missing');
    if (canonical) {
      const want = (p === '/' ? '' : p);
      check(
        `canonical points at self ${p}`,
        canonical.replace(/\/$/, '').endsWith(want),
        `got ${canonical}`,
      );
    }

    // Above-the-fold must paint immediately: the <h1> must not be inside a
    // scroll-reveal wrapper (that delays LCP and shifts layout).
    const beforeH1 = body.split('<main')[1]?.split('<h1')[0] ?? '';
    check(`h1 not fade-gated ${p}`, !beforeH1.includes('class="fade-in'));
  }

  // ── 404 ───────────────────────────────────────────────────────────────────
  check('404 for unknown route', (await get('/definitely-not-a-page')).status === 404);

  // ── API contract: graceful without secrets, strict on bad input ───────────
  for (const [path, good, bad] of [
    ['/api/waitlist', { email: 'a@b.com' }, { email: 'nope' }],
    ['/api/contact', { name: 'A', email: 'a@b.com', message: 'hi' }, { email: 'a@b.com' }],
  ]) {
    const post = (payload) =>
      fetch(BASE + path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    check(`${path} accepts valid`, (await post(good)).status === 200);
    check(`${path} rejects invalid`, (await post(bad)).status === 400);
  }

  // ── social card must render as a real PNG, with no external fetch ─────────
  const og = await fetch(BASE + '/opengraph-image');
  check('OG image 200', og.status === 200, `got ${og.status}`);
  check(
    'OG image is png',
    (og.headers.get('content-type') ?? '').includes('image/png'),
    og.headers.get('content-type') ?? 'none',
  );
  check('OG image non-trivial', (await og.arrayBuffer()).byteLength > 5000);

  // ── robots ────────────────────────────────────────────────────────────────
  const robots = await get('/robots.txt');
  check('robots 200', robots.status === 200);
  check('robots links sitemap', robots.body.includes('/sitemap.xml'));

  // ── brand rules that regressed before (checked against rendered HTML) ─────
  const home = (await get('/')).body;
  check('no chromatic colors', !/violet-|cyan-|fuchsia-|\bpink-|indigo-/.test(home));
  check('no hardcoded white text', !/class="[^"]*\btext-white\b/.test(home));
  check('no font-bold in chrome', !/class="[^"]*font-(bold|semibold)\b/.test(home));

  // ── report ────────────────────────────────────────────────────────────────
  console.log(`  passed: ${pass}`);
  if (failures.length) {
    console.log(`  FAILED: ${failures.length}\n`);
    failures.forEach((f) => console.log(`    ✗ ${f}`));
    process.exit(1);
  }
  console.log('  all checks passed\n');
}

main().catch((err) => {
  console.error('smoke: fatal —', err.message);
  process.exit(1);
});
