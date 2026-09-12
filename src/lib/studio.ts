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
  /** Public product URL when live */
  url?: string;
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
    status: "next",
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
    status: "live",
    price: "$12/mo",
    wedge: "Uni students and bootcamp learners who need study notes with page citations.",
    job: "Upload lecture PDFs or PPTX. Get structured notes, flashcards, and a quiz where every claim cites a page or slide.",
    forWhom: "Students and bootcamp learners using their own materials.",
    charge: "Pro $12/mo. Free tier included.",
    image: "/brand/citedeck.jpg",
    imageAlt: "Dark CiteDeck window: PDF to cited notes, flashcards, and quiz.",
    must: [
      "PDF and PPTX upload",
      "Cited note blocks with pageRef",
      "Flashcards and quiz from the same material",
      "OpenAI notes + OCR for scans when keyed",
      "Stripe Checkout for Pro",
    ],
    mustNot: [
      "A general writing assistant",
      "Live lecture capture",
      "Legal discovery tooling",
    ],
    metric: "Cited notes from your own deck in one upload.",
    demoLabel: "Notes",
    url: "https://citedeck.wedgewerks.win",
  },
  {
    slug: "vecclip",
    index: "03",
    name: "VecClip",
    status: "live",
    price: "$19/mo",
    wedge: "Indie web designers who want looping SVG from short MP4s.",
    job: "Convert a short MP4 into a path-morphing animated SVG you can drop on a site.",
    forWhom: "Indie designers and front-end builders.",
    charge: "Pro $19/mo via Stripe Checkout.",
    image: "/brand/vecclip.jpg",
    imageAlt: "Dark VecClip window: MP4 to frames to morphing SVG.",
    must: [
      "MP4 upload",
      "Frame→SVG vectorization with path morphing",
      "Durable storage and exports",
      "Auth + Stripe Pro",
      "Downloadable looping SVG",
    ],
    mustNot: [
      "A full video editor",
      "Public social video hosting",
      "Hardware capture dongles",
    ],
    metric: "A looping SVG from a short clip in one export.",
    demoLabel: "SVG",
    url: "https://vecclip.wedgewerks.win",
  },
  {
    slug: "docbrief",
    index: "04",
    name: "DocBrief",
    status: "live",
    price: "Starter $12 / Creator $36",
    wedge: "Faceless and solo creators who need a short YouTube documentary without an editor or GPU film studio.",
    job: "Paste a topic or rough script. Get a polished voiceover script, TTS, B-roll stills, burned-in captions, and a downloadable MP4.",
    forWhom: "Faceless / solo YouTube creators.",
    charge: "Free (1 short render). Starter $12/mo. Creator $36/mo via Stripe Checkout.",
    image: "/brand/docbrief.jpg",
    imageAlt: "Dark documentary player frame with a caption bar and progress scrubber.",
    must: [
      "Brief → polished script",
      "TTS voiceover when keyed",
      "B-roll placeholder stills",
      "Burned-in captions",
      "Downloadable MP4 + Stripe Starter/Creator",
    ],
    mustNot: [
      "Character-consistent multi-cast GPU video",
      "Seedance / Kling",
      "YouTube OAuth publish",
      "Viducer pixel-clone branding",
    ],
    metric: "A short captioned MP4 from a brief in one generate.",
    demoLabel: "MP4",
    url: "https://docbrief.wedgewerks.win",
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
    hands: "Raw evidence pack — listings and numbers only.",
    not: "Does not rank the final three, draft email, or write product code.",
    body: "Scans public TrustMRR surfaces and, with a key, the growth and listed feeds. Table first. Never invents MRR. Hands Dispatch a pack — not a ranked shortlist.",
  },
  {
    name: "Dispatch",
    title: "Ranker",
    hands: "Top 3, build order, email draft — not code.",
    not: "Does not write Forge code, open a repo, or deploy.",
    body: "Feasible in 1–3 days. Clear wedge. Paid checkout imaginable. Kill list: fake-feeling MRR, ChatGPT wrappers with no job, things Forge already shipped. Ranking and the draft are Dispatch; shipping code is Forge.",
  },
  {
    name: "Forge",
    title: "MVP builder",
    hands: "Landing, auth, core job, Stripe — the code.",
    not: "Does not pick a different idea mid-build or rescan TrustMRR.",
    body: "One approved product at a time. Smallest paid loop. Asks at most three questions, then builds the smaller interpretation.",
  },
] as const;

/** Dated sample — not a live ticker. CiteDeck / VecClip / DocBrief live; UserProbe next. */
export const logLines = [
  { time: "07:00", who: "RADAR", text: "scan complete — 14 AI listings, 2 overlap" },
  { time: "07:20", who: "DISPATCH", text: "ranked top 3 · default winner UserProbe" },
  { time: "07:31", who: "HUMAN", text: "hold #1 · CiteDeck · VecClip · DocBrief already live" },
  { time: "09:00", who: "FORGE", text: "idle — next seat is UserProbe" },
  { time: "17:00", who: "ANCHOR", text: "catalog: three live · UserProbe next · no second build stacked" },
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
