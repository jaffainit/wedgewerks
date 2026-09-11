export type ProductStatus = "live" | "in-forge" | "next";

export type Product = {
  slug: string;
  index: string;
  name: string;
  status: ProductStatus;
  price: string;
  wedge: string;
  job: string;
  forWhom: string;
  charge: string;
  image: string;
  imageAlt: string;
  must: string[];
  mustNot: string[];
  metric: string;
  demoLabel: string;
};

export const studio = {
  name: "WedgeWerks",
  mark: "WedgeWerks™",
  crew: "Foundary",
  tagline: "Find the wedge. Ship the MVP.",
  lede: "We are a small product factory that finds fast-growing AI wedges, picks one, and ships a paid MVP in days — landing, auth, the core job, Stripe — then moves to the next.",
  manifesto:
    "We design and release focused tools. We are not one big platform. Each app is a differentiable clone of a clear job-to-be-done, sold as a simple subscription.",
};

export const nav = [
  { to: "/products", label: "Catalog" },
  { to: "/method", label: "Method" },
  { to: "/foundary", label: "Foundary" },
] as const;

export const products: Product[] = [
  {
    slug: "userprobe",
    index: "01",
    name: "UserProbe",
    status: "live",
    price: "$29/mo",
    wedge: "Solo builders who need research without a research team.",
    job: "Run a five-question async probe and get a job-to-be-done synthesis with pull-quotes in hours, not a quarter.",
    forWhom: "Founders and PMs shipping alone.",
    charge: "Simple monthly seat. No per-interview tax.",
    image: "/brand/userprobe.jpg",
    imageAlt: "Steel inspection probe and brass caliper on black felt.",
    must: [
      "Five-question probe templates",
      "Shareable async link for participants",
      "JTBD clustering with pull-quotes",
      "Export a one-page synthesis",
      "Stripe Checkout for the seat",
    ],
    mustNot: [
      "A full research repository",
      "Live moderated interviews",
      "Panel recruiting marketplace",
    ],
    metric: "A founder can send a probe Friday and read a synthesis Monday.",
    demoLabel: "Probe",
  },
  {
    slug: "citedeck",
    index: "02",
    name: "CiteDeck",
    status: "in-forge",
    price: "$39/mo",
    wedge: "Operators writing exec memos who hate citation busywork.",
    job: "Drop URLs and PDFs. Get a one-pager where every claim is linked to evidence.",
    forWhom: "Chiefs of staff, analysts, solo operators.",
    charge: "Monthly subscription. Export included.",
    image: "/brand/citedeck.jpg",
    imageAlt: "Blank bone index cards under a steel paperweight.",
    must: [
      "URL and PDF ingest",
      "Claim-to-evidence mapping",
      "One-pager with linked sources",
      "Source health flags",
      "Paid seat via Stripe",
    ],
    mustNot: [
      "A general writing assistant",
      "Legal discovery tooling",
      "Pixel-clone of a giant knowledge base",
    ],
    metric: "A cited one-pager from a pile of sources in under 20 minutes.",
    demoLabel: "Memo",
  },
  {
    slug: "vecclip",
    index: "03",
    name: "VecClip",
    status: "next",
    price: "$49/mo",
    wedge: "Support and product people drowning in Looms and screen recordings.",
    job: "Search your recordings by meaning and copy the twelve seconds that prove the bug.",
    forWhom: "Support leads and product trios.",
    charge: "Monthly workspace. Storage billed only if it leaves the wedge.",
    image: "/brand/vecclip.jpg",
    imageAlt: "Steel binder clips holding strips of film on a dark bench.",
    must: [
      "Upload Looms and screen recordings",
      "Semantic search across transcripts",
      "Timestamped clip copy",
      "Share a 12-second proof link",
      "Workspace subscription",
    ],
    mustNot: [
      "A full video editor",
      "Public social video hosting",
      "Hardware capture dongles",
    ],
    metric: "Find the proving clip in one search, not a thirty-minute scrub.",
    demoLabel: "Clips",
  },
];

export const pipeline = [
  {
    id: "radar",
    name: "Radar",
    time: "07:00",
    title: "Scan TrustMRR",
    body: "Pulls fresh and fast-growing AI listings. Verified revenue, growth, founded date. A raw pack — no ranking, no ideas.",
  },
  {
    id: "dispatch",
    name: "Dispatch",
    time: "07:20",
    title: "Rank, order, draft",
    body: "Top 3 feasible wedges. One exact build order. A daily email draft. Default winner is #1 until you say otherwise.",
  },
  {
    id: "human",
    name: "You",
    time: "07:30",
    title: "Approve the winner",
    body: "Build #1, build #2 instead, or skip. Nothing ships, spends, or deploys without this wall.",
  },
  {
    id: "forge",
    name: "Forge",
    time: "09:00",
    title: "Build that MVP only",
    body: "Landing, auth, the one core job, Stripe. Default stack: Next.js, TypeScript, Tailwind, Vercel, GitHub. Then stop.",
  },
] as const;

export const crew = [
  {
    name: "Anchor",
    title: "Crew lead",
    hands: "Schedule, honesty, crisis stops.",
    not: "Does not scan listings or write product code.",
    body: "Keeps Radar, Dispatch, and Forge in a one-way pipeline. Two choices plus skip. Never stacks a second build while Forge is mid-MVP.",
  },
  {
    name: "Radar",
    title: "TrustMRR scanner",
    hands: "Evidence pack.",
    not: "Does not rank the final three or email anyone.",
    body: "Scans public TrustMRR surfaces and, with a key, the growth and listed feeds. Table first. Never invents MRR.",
  },
  {
    name: "Dispatch",
    title: "Ranker",
    hands: "Top 3, build order, email draft.",
    not: "Does not write app code or deploy.",
    body: "Feasible in 1–3 days. Clear wedge. Paid checkout imaginable. Kill list: fake-feeling MRR, ChatGPT wrappers with no job, things Forge already shipped.",
  },
  {
    name: "Forge",
    title: "MVP builder",
    hands: "Code, repo, preview.",
    not: "Does not pick a different idea mid-build.",
    body: "One approved product at a time. Smallest paid loop. Asks at most three questions, then builds the smaller interpretation.",
  },
] as const;

export const logLines = [
  { time: "07:00", who: "RADAR", text: "scan complete — 11 AI listings, 3 overlap" },
  { time: "07:20", who: "DISPATCH", text: "ranked top 3 · default winner CiteDeck" },
  { time: "07:31", who: "HUMAN", text: "approved #1" },
  { time: "09:00", who: "FORGE", text: "repo citedeck-mvp · landing + checkout in flight" },
  { time: "17:00", who: "ANCHOR", text: "one MVP, no second build stacked" },
] as const;

export const willNot = [
  "Hardware, marketplaces, or regulated medical/finance cores",
  "A pixel-for-pixel rip of a giant",
  "A ChatGPT wrapper with no job",
  "A second MVP while one is in flight",
  "Spend, ship, or send without a human yes",
];

export const mvpIs = [
  "Landing page with the wedge and the price",
  "Auth",
  "The one core job the winner is known for",
  "Checkout — or a waitlist stub if keys are missing",
  "Then we move to the next wedge",
];

export const statusLabel: Record<ProductStatus, string> = {
  live: "Live",
  "in-forge": "In forge",
  next: "Next",
};

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const BRIEFS_KEY = "wedgewerks-briefs";
