/**
 * Customer case study data — shared between /customers and /customers/[slug].
 */
export interface Customer {
  slug: string;
  company: string;
  tagline: string;
  segment: 'Distributor' | 'Brand owner' | 'Retailer';
  region: string;
  quote: string;
  attribution: { name: string; role: string };
  metrics: { value: string; label: string }[];
  story: string[];
}

export const customers: Customer[] = [
  {
    slug: 'gulf-distribution',
    company: 'Gulf Distribution',
    tagline: 'Three apps and a spreadsheet, replaced.',
    segment: 'Distributor',
    region: 'Riyadh, KSA',
    quote:
      'We replaced three apps and a spreadsheet with Reshelvs. Reps finish routes 40 minutes earlier — and we finally see OSA the same day.',
    attribution: {
      name: 'Khalid Al-Rashed',
      role: 'Head of Field Operations',
    },
    metrics: [
      { value: '40 min', label: 'Saved per rep per day' },
      { value: '92%', label: 'Visit-completion rate' },
      { value: '<24h', label: 'OSA visibility' },
    ],
    story: [
      "Gulf Distribution runs a mixed-portfolio fleet across modern trade in KSA — 120 reps, four principals, and an attendance system that used to live in three different spreadsheets.",
      "Before Reshelvs, supervisors spent the first two hours of every day reconciling the previous day's check-ins. Brand owners got OSA reports a week late. Reps were drowning in paper audit forms.",
      "After a six-week rollout — starting with one route in Riyadh and expanding nationally — every Gulf Distribution rep now runs the same visit flow, supervisors see live attendance, and brand owners get OSA same-day.",
      "The 40-minute-per-rep saving comes from three places: auto-generated routes (no more morning planning), one-tap navigation hand-off, and visit flows that don't require typing the same thing into three apps.",
    ],
  },
  {
    slug: 'almaha-foods',
    company: 'AlMaha Foods',
    tagline: 'First beat running before lunch.',
    segment: 'Brand owner',
    region: 'Jeddah, KSA',
    quote:
      'The 90-second onboarding actually delivered. We had our first beat running before lunch.',
    attribution: {
      name: 'Mona Farouk',
      role: 'Country Manager',
    },
    metrics: [
      { value: '90s', label: 'Tenant onboarding' },
      { value: 'Day 1', label: 'First route live' },
      { value: '12', label: 'Distributors monitored' },
    ],
    story: [
      "AlMaha Foods sells through twelve distributors across the GCC, which means they don't directly own the reps walking their shelves. Visibility into actual in-store execution was almost always second-hand.",
      "Reshelvs flipped that. AlMaha's category team now sees facings, OSA, and planogram compliance across every distributor that carries them — without owning a single rep app.",
      "Onboarding was a single morning. The country team signed up, picked their channels, imported their SKU list, and had the first sample audit running before the lunch break.",
      "What changed: the data they used to get monthly in PowerPoint, they now see daily in the admin portal — with photos.",
    ],
  },
  {
    slug: 'nakheel-fmcg',
    company: 'Nakheel FMCG',
    tagline: 'Attendance disputes to zero.',
    segment: 'Distributor',
    region: 'Dubai, UAE',
    quote:
      'Mock-GPS rejection alone paid for the year. Our attendance dispute rate went to zero.',
    attribution: {
      name: 'Tariq Yousef',
      role: 'Operations Director',
    },
    metrics: [
      { value: '0', label: 'Attendance disputes' },
      { value: '100%', label: 'Mock-GPS rejected' },
      { value: '6 weeks', label: 'From contract to live' },
    ],
    story: [
      "Before Reshelvs, Nakheel was running a custom attendance app that trusted whatever the phone reported. Mock-location apps were spreading through the field. Disputed timesheets were a monthly headache.",
      "We built mock-GPS rejection directly into the rep app: a signature pattern that catches mock-location apps, plus on-device geofence enforcement that prevents check-ins from outside the store radius.",
      "Six weeks after going live, Nakheel's attendance dispute rate dropped to zero. Supervisors stopped spending two hours a week investigating GPS irregularities. Reps stopped trying to game the system because the system stopped letting them.",
      "It wasn't the most glamorous feature we shipped — but it's the one that earned trust.",
    ],
  },
];

export function getCustomer(slug: string): Customer | undefined {
  return customers.find((c) => c.slug === slug);
}
