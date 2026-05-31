/**
 * Blog post data. Single source — both /blog index and /blog/[slug] pull from
 * here. Replace with MDX or a CMS when post volume justifies it.
 */
export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: 'Company' | 'Engineering' | 'Product';
  author: string;
  readMinutes: number;
  body: string[];
}

export const posts: Post[] = [
  {
    slug: 'introducing-reshelvs',
    title: 'Introducing Reshelvs',
    excerpt:
      "Why the FMCG field deserves a real platform — and what we're building first.",
    date: '2026-05-20',
    category: 'Company',
    author: 'The Reshelvs team',
    readMinutes: 4,
    body: [
      "FMCG field execution has lived inside spreadsheets, paper checklists, and bolted-on point apps for too long. The reps walking the stores deserve better. The supervisors planning beats deserve better. The brand owners trying to see their shelves deserve better.",
      "Reshelvs is the operating system for FMCG field teams — routes, store visits, on-shelf availability, attendance, catalog, and reports, all on one source of truth. Mobile-first. Multi-tenant. Arabic-first. Built for the way the GCC field actually works.",
      "Today, we're inviting our first distributor and brand-owner cohort into private beta. If you run reps in KSA, the UAE, or Egypt and you'd like a 90-second look at what a modern field stack feels like, join the waitlist.",
      "We'll be opening up more pieces over the coming weeks — AI shelf vision, multi-company tenants, the route-planner, our public API. Watch this space.",
    ],
  },
  {
    slug: 'osa-the-hard-way',
    title: 'OSA the hard way: what AI shelf vision actually has to solve',
    excerpt:
      'Facings, occlusion, mixed planograms, and why a generic vision API gives you 40% wrong answers.',
    date: '2026-05-10',
    category: 'Engineering',
    author: 'The Reshelvs team',
    readMinutes: 7,
    body: [
      "On-shelf availability sounds simple: count what's there, compare against what should be there, return a percentage. In practice, the gap between that one-paragraph spec and a production-quality OSA pipeline is enormous.",
      "First — facings. A rep snaps a shelf. Are five Coca-Cola 330ml cans three facings deep one facing? Or one facing three deep? Both are visually plausible, and a generic vision API can't tell you which one without depth information.",
      "Second — occlusion. Half the SKUs on any real shelf are partially blocked by price tags, hanger strips, POSM, or the reps' own thumb in the corner of the frame. You need a model that votes confidence per SKU, not a binary yes/no.",
      "Third — mixed planograms. Two distributors might share a section. The model has to know which SKUs belong to which principal so the OSA roll-up doesn't penalize a brand for someone else's stockout.",
      "We've spent the last several months training, evaluating, and iterating on shelf-vision specifically for the GCC SKU catalog. The result is a model that runs in seconds, costs cents, and is accurate enough that our reps trust it more than counting by hand.",
    ],
  },
  {
    slug: 'route-planning-at-real-scale',
    title: 'Route planning at real scale',
    excerpt:
      'Geo-clustering, nearest-neighbor optimization, and visit-frequency rules — without making your reps drive in circles.',
    date: '2026-04-28',
    category: 'Product',
    author: 'The Reshelvs team',
    readMinutes: 6,
    body: [
      "Auto-generating beats is the kind of feature that's easy to demo and brutal to ship. The naïve version — nearest-neighbor over today's store list — gives reps a route that crosses itself three times before lunch.",
      "Real route planning has three layers. First, geo-clustering by call-cycle frequency: an A-class store visited weekly belongs in a different cluster than a C-class store visited monthly. Second, capacity per rep: a route that promises 28 stops at 18 minutes each is a route a rep can't finish. Third, real-world friction — traffic, prayer times, store opening hours, return trips for cold-chain SKUs.",
      "Reshelvs builds beats from these three layers, then lets supervisors override anything the algorithm got wrong. The result is a day a rep can actually run — not a theoretically optimal one.",
      "We're publishing the optimization parameters as part of our public API so distributors can tune the algorithm to their channel mix. Read the docs (coming soon) for the full surface.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
