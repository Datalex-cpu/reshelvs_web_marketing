/**
 * Illustrative usage scenarios — shared between /customers and
 * /customers/[slug].
 *
 * IMPORTANT: these are NOT real customer case studies. Reshelvs is in
 * private beta with no named, signed customers yet. Each entry is an
 * archetype ("the multi-brand distributor") with illustrative TARGETS,
 * not measured results, and no named individuals. The pages render them
 * with a visible "illustrative scenario" label. When real design
 * partners agree to be named, replace these with their actual stories.
 */
export interface Customer {
  slug: string;
  /** Archetype title, e.g. "The multi-brand distributor". Not a company. */
  title: string;
  tagline: string;
  segment: 'Distributor' | 'Brand owner' | 'Retailer';
  region: string;
  /** Reshelvs' own capability statement for this archetype — not a quote. */
  thesis: string;
  /** Illustrative targets / design goals — NOT measured customer results. */
  targets: { value: string; label: string }[];
  story: string[];
}

export const customers: Customer[] = [
  {
    slug: 'multi-brand-distributor',
    title: 'The multi-brand distributor',
    tagline: 'Three apps and a spreadsheet, replaced by one.',
    segment: 'Distributor',
    region: 'KSA · modern trade',
    thesis:
      'Reps run one visit flow instead of three apps and a paper form. Supervisors see attendance live, and the principals you carry see on-shelf availability the same day — not the next week.',
    targets: [
      { value: '1 flow', label: 'Replaces 3 apps + a spreadsheet' },
      { value: 'Same-day', label: 'OSA visibility (target)' },
      { value: 'Auto', label: 'Route generation, no morning planning' },
    ],
    story: [
      'A mixed-portfolio distributor — say 100+ reps across several principals — typically runs attendance, routing, and shelf audits in three different tools that never talk to each other.',
      "The first two hours of a supervisor's day go to reconciling yesterday's check-ins. Brand owners get OSA reports a week late. Reps drown in paper audit forms.",
      'On Reshelvs, every rep runs the same visit flow, supervisors see live attendance, and brand owners get OSA the same day. A typical rollout starts with one route in one city, then expands fleet-wide.',
      'The time saved comes from three places: auto-generated routes (no morning planning), one-tap navigation hand-off, and visit flows that never make a rep type the same thing into three apps.',
    ],
  },
  {
    slug: 'brand-owner-via-distributors',
    title: 'The brand owner selling through distributors',
    tagline: "See your shelves, even when you don't own the reps.",
    segment: 'Brand owner',
    region: 'GCC',
    thesis:
      "When you sell through a dozen distributors, in-store execution is always second-hand. Reshelvs gives your category team facings, OSA, and planogram compliance across every distributor that carries you — without owning a single rep app.",
    targets: [
      { value: '~90s', label: 'Tenant onboarding (target)' },
      { value: 'Day 1', label: 'First route live' },
      { value: 'Every', label: 'Distributor in one view' },
    ],
    story: [
      "A brand owner selling through twelve distributors doesn't directly own the reps walking its shelves, so visibility into actual in-store execution is almost always reported after the fact.",
      'Reshelvs is designed to flip that: a category team can see facings, OSA, and planogram compliance across every distributor that carries them — without owning a single rep app.',
      'Onboarding is meant to take a single morning — sign up, pick your channels, import your SKU list, and run a first sample audit before lunch.',
      'The intent: the data teams used to get monthly in a slide deck, they see daily in the admin portal — with photos.',
    ],
  },
  {
    slug: 'attendance-integrity',
    title: 'The distributor fighting attendance fraud',
    tagline: 'Mock-GPS check-ins, rejected at the device.',
    segment: 'Distributor',
    region: 'UAE',
    thesis:
      'An attendance app that trusts whatever the phone reports invites mock-location fraud and disputed timesheets. Reshelvs rejects mock-GPS at the device and enforces geofenced check-ins, so phantom attendance never reaches your data.',
    targets: [
      { value: 'On-device', label: 'Mock-GPS rejection' },
      { value: 'Geofenced', label: 'Check-in enforcement' },
      { value: '2–6 wks', label: 'Typical rollout (target)' },
    ],
    story: [
      'A custom attendance app that trusts whatever the phone reports is easy to game — mock-location apps spread through the field, and disputed timesheets become a monthly headache.',
      'Reshelvs builds mock-GPS rejection into the rep app directly: a signature check that catches mock-location apps, plus on-device geofence enforcement that prevents check-ins from outside the store radius.',
      'The goal is simple — phantom attendance never enters your data, so supervisors stop spending hours a week investigating GPS irregularities and reps stop trying to game a system that no longer lets them.',
      "It isn't the most glamorous capability in the product — but it's often the one that earns trust first.",
    ],
  },
];

export function getCustomer(slug: string): Customer | undefined {
  return customers.find((c) => c.slug === slug);
}
