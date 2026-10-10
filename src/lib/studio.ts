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
  /** Short deck for product page hero */
  deck?: string;
  /** The job bullets for product page */
  theJob?: string[];
  /** Who it's for detail */
  whoItsFor?: string;
  /** What it is not detail */
  whatItIsNot?: string;
  /** SEO meta description for product page */
  metaDescription?: string;
  /** SEO title for product page */
  metaTitle?: string;
  /** Stripe Payment Link (or checkout URL) when the product takes payment */
  paymentUrl?: string;
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
    image: "/brand/logos/userprobe.png",
    imageAlt: "Indigo UserProbe logo: an off-white magnifying glass around a person, with a coral dot.",
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
    url: "https://userprobe.wedgewerks.win",
    deck: "Solo builders who need research without a research team.",
    theJob: [
      "Turns a product question into usable research",
      "Built for one founder, not a research org",
      "Not a full insights platform or survey suite",
    ],
    whoItsFor: "Solo builders who need research without a research team.",
    whatItIsNot: "Not an agency. Not a panel marketplace. Not \"unlock growth.\"",
    metaTitle: "UserProbe — Research without a research team | WedgeWerks",
    metaDescription: "For solo builders who need research without a research team. $29/mo. One job. Simple subscription. Built by WedgeWerks.",
  },
  {
    slug: "citedeck",
    index: "02",
    name: "CiteDeck",
    status: "live",
    price: "$12/mo",
    paymentUrl: import.meta.env.VITE_CITEDECK_CHECKOUT_URL || undefined,
    wedge: "Uni students and bootcamp learners who need study notes with page citations.",
    job: "Upload lecture PDFs or PPTX. Get structured notes, flashcards, and a quiz where every claim cites a page or slide.",
    forWhom: "Students and bootcamp learners using their own materials.",
    charge: "Pro $12/mo. Free tier included.",
    image: "/brand/logos/citedeck.png",
    imageAlt: "Indigo CiteDeck logo: a stack of off-white note cards with a coral quotation mark.",
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
    deck: "Uni students and bootcamp learners who need study notes with page citations.",
    theJob: [
      "Study notes that keep the page citation",
      "Built for coursework and bootcamp pace",
      "Not a generic chatbot notes dump",
    ],
    whoItsFor: "Uni students and bootcamp learners who need study notes with page citations.",
    whatItIsNot: "Not a tutoring marketplace. Not an essay mill. Not a \"learning platform.\"",
    metaTitle: "CiteDeck — Study notes with page citations | WedgeWerks",
    metaDescription: "For uni students and bootcamp learners who need study notes with page citations. $12/mo. One job. Built by WedgeWerks.",
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
    image: "/brand/logos/vecclip.png",
    imageAlt: "Indigo VecClip logo: an off-white film strip with a coral path-morphing trail.",
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
    deck: "Indie web designers who want looping SVG from short MP4s.",
    theJob: [
      "Short MP4 in → looping SVG out",
      "Built for indie web designers, not a film studio",
      "Not a full motion-graphics suite",
    ],
    whoItsFor: "Indie web designers who want looping SVG from short MP4s.",
    whatItIsNot: "Not After Effects. Not a stock marketplace. Not \"AI video platform.\"",
    metaTitle: "VecClip — Looping SVG from short MP4s | WedgeWerks",
    metaDescription: "For indie web designers who want looping SVG from short MP4s. $19/mo. One job. Built by WedgeWerks.",
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
    image: "/brand/logos/docbrief.png",
    imageAlt: "Indigo DocBrief logo: an off-white document with a coral play mark.",
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
    deck: "Faceless and solo creators who need a short YouTube documentary without an editor or GPU film studio.",
    theJob: [
      "Short documentary-style YouTube cut",
      "Built for faceless and solo creators",
      "No editor hire. No GPU film studio.",
    ],
    whoItsFor: "Faceless and solo creators who need a short YouTube documentary without an editor or GPU film studio.",
    whatItIsNot: "Not a full NLE. Not a studio. Not a ChatGPT wrapper with no job.",
    metaTitle: "DocBrief — Short YouTube docs without an editor | WedgeWerks",
    metaDescription: "For faceless and solo creators who need a short YouTube documentary without an editor or GPU film studio. Starter $12 / Creator $36. Built by WedgeWerks.",
  },
  {
    slug: "promptkit",
    index: "05",
    name: "PromptKit",
    status: "live",
    price: "$4/mo",
    wedge: "Claude.ai power users who lose prompts across chats.",
    job: "Save reusable prompt snippets from Claude.ai, sync them to your account, and one-click insert them back into the composer.",
    forWhom: "Solo builders and PMs who live in Claude.ai daily.",
    charge: "Free (10 snippets). Pro $4/mo unlimited. Lifetime $28.",
    image: "/brand/logos/promptkit.png",
    imageAlt: "Indigo PromptKit logo: an off-white briefcase with a coral command prompt.",
    must: [
      "Chrome MV3 extension on claude.ai",
      "Save / insert / tags / markdown export",
      "Synced snippet library with auth",
      "Stripe Checkout Free → Pro $4/mo (+ Lifetime $28)",
    ],
    mustNot: [
      "Pixel-clone of ClaudeKit branding",
      "Full Claude thread fork graph",
      "Multi-LLM beyond Claude.ai",
      "Team workspaces / SSO",
    ],
    metric: "A paid checkout or 20 synced snippets across 5 users in week one.",
    demoLabel: "Snippets",
    url: "https://promptkit.wedgewerks.win",
    deck: "Claude.ai power users who lose prompts across chats.",
    theJob: [
      "Keep prompts across Claude.ai chats",
      "Built for power users who reuse what works",
      "Not a prompt marketplace. Not an agent runtime.",
    ],
    whoItsFor: "Claude.ai power users who lose prompts across chats.",
    whatItIsNot: "Not Microsoft PromptKit. Not a Go agent runtime. Not \"prompt engineering platform.\"",
    metaTitle: "PromptKit — Save Claude.ai prompts across chats | WedgeWerks",
    metaDescription: "For Claude.ai power users who lose prompts across chats. $4/mo. One job. WedgeWerks PromptKit — not the other PromptKits.",
  },
  {
    slug: "skillpack",
    index: "06",
    name: "SkillPack",
    status: "live",
    price: "$9/mo",
    wedge:
      "TrustMRR mover Skillry (Agent Skills library) — curated, installable skills for Cursor, Claude Code, and Codex.",
    job: "Curated, installable agent skills for Cursor, Claude Code and Codex. Browse free, Pro unlocks the full library.",
    forWhom: "Indie AI builders on Cursor / Claude Code.",
    charge: "Free browse. Pro $9/mo. Lifetime $49.",
    image: "/brand/logos/skillpack.png",
    imageAlt: "Indigo SkillPack logo: an off-white backpack with a coral lightning bolt.",
    must: [
      "Browse curated agent skills for Cursor, Claude Code, and Codex",
      "One-click install into the agent's skill folder",
      "Free browse; Pro unlocks the full library",
      "Stripe Checkout Free → Pro $9/mo (+ Lifetime $49)",
    ],
    mustNot: [
      "Pixel-clone of Skillry branding",
      "A user-generated skill marketplace",
      "An agent runtime or IDE",
      "Team workspaces / SSO",
    ],
    metric: "A paid checkout or 20 installs across 5 users in week one.",
    demoLabel: "Skills",
    url: "https://skillpack.wedgewerks.win",
    deck: "Curated, installable agent skills for Cursor, Claude Code and Codex. Browse free, Pro unlocks the full library.",
    theJob: [
      "Install curated agent skills in one click",
      "Built for indie AI builders on Cursor and Claude Code",
      "Not a skill marketplace. Not an agent runtime.",
    ],
    whoItsFor: "Indie AI builders on Cursor / Claude Code.",
    whatItIsNot: "Not Skillry. Not an IDE. Not an agent runtime.",
    metaTitle: "SkillPack — Installable agent skills for Cursor and Claude Code | WedgeWerks",
    metaDescription:
      "Curated, installable agent skills for Cursor, Claude Code and Codex. Browse free. Pro $9/mo. Built by WedgeWerks.",
  },
  {
    slug: "tastekit",
    index: "07",
    name: "TasteKit",
    status: "live",
    price: "$9/mo",
    wedge:
      "TrustMRR mover Uizze (UI reference library) — a UI reference library your coding agent can query.",
    job: "A UI reference library your coding agent can query. 25 original references with build specs, served over MCP to Cursor, Claude Code and Codex.",
    forWhom: "Indie AI builders on Cursor / Claude Code / Codex.",
    charge: "Free shows 5 refs/day. Pro $9/mo. Lifetime $49.",
    image: "/brand/logos/tastekit.png",
    imageAlt: "Indigo TasteKit logo: an off-white UI window with a coral sparkle.",
    must: [
      "25 original UI references with build specs",
      "Queryable over MCP for Cursor, Claude Code, and Codex",
      "Free tier shows 5 refs/day",
      "Stripe Checkout Free → Pro $9/mo (+ Lifetime $49)",
    ],
    mustNot: [
      "Pixel-clone of Uizze branding",
      "A user-generated UI kit marketplace",
      "A design editor or Figma clone",
      "Team workspaces / SSO",
    ],
    metric: "A paid checkout or 20 MCP queries across 5 users in week one.",
    demoLabel: "Refs",
    url: "https://tastekit.wedgewerks.win",
    deck: "A UI reference library your coding agent can query. 25 original references with build specs, served over MCP to Cursor, Claude Code and Codex.",
    theJob: [
      "Query a UI reference library from your coding agent",
      "Built for indie AI builders on Cursor, Claude Code, and Codex",
      "Not a design marketplace. Not a Figma clone.",
    ],
    whoItsFor: "Indie AI builders who want UI references their coding agent can query.",
    whatItIsNot: "Not Uizze. Not a design editor. Not a component marketplace.",
    metaTitle: "TasteKit — UI references your coding agent can query | WedgeWerks",
    metaDescription:
      "A UI reference library your coding agent can query. 25 original references with build specs, served over MCP to Cursor, Claude Code and Codex. Free 5 refs/day. Pro $9/mo. Built by WedgeWerks.",
  },
  {
    slug: "linkpitch",
    index: "08",
    name: "LinkPitch",
    status: "live",
    price: "$29/mo",
    wedge:
      "A thin version of ElvixAI — backlink prospects and AI pitch drafts for indie SaaS founders.",
    job: "Enter your site and niche keywords. Get a ranked list of relevant backlink targets, each with a \"why it fits\" line, plus one-click personalised outreach drafts you edit, approve and export as CSV.",
    forWhom: "Indie SaaS founders doing their own link building.",
    charge: "Free (1 campaign, 10 prospects, 3 drafts). Pro $29/mo.",
    image: "/brand/logos/linkpitch.png",
    imageAlt: "Indigo LinkPitch logo: an off-white chain link and paper plane with a coral sparkle.",
    must: [
      "Ranked backlink prospects from your site and niche keywords",
      "A \"why it fits\" line for every prospect",
      "One-click personalised outreach draft per prospect — edit, approve, export as CSV",
      "Stripe Checkout Free → Pro $29/mo",
    ],
    mustNot: [
      "Pixel-clone of ElvixAI branding",
      "Sending email from your inbox",
      "A full SEO suite or rank tracker",
      "Team workspaces / SSO",
    ],
    metric: "1 paid subscriber by day 14.",
    demoLabel: "Pitches",
    url: "https://linkpitch.wedgewerks.win",
    deck: "Backlink prospects and AI pitch drafts for indie SaaS founders. Enter your site and niche keywords, get a ranked list of relevant targets, and draft a personalised email for each. You send it yourself.",
    theJob: [
      "Get ranked backlink prospects, each with a line on why it fits",
      "Draft a personalised outreach email per prospect in one click",
      "Edit, approve and export as CSV. You send it yourself; nothing goes out from your inbox.",
    ],
    whoItsFor: "Indie SaaS founders who want backlinks without hiring a link-building agency.",
    whatItIsNot: "Not ElvixAI. Not an email sender. Not a full SEO suite.",
    metaTitle: "LinkPitch — Backlink prospects and AI pitch drafts for indie SaaS | WedgeWerks",
    metaDescription:
      "Backlink prospects and AI pitch drafts for indie SaaS founders. Ranked targets with a why-it-fits line, personalised outreach drafts, CSV export. Free tier. Pro $29/mo. Built by WedgeWerks.",
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
  {
    name: "Herald",
    title: "Distribution",
    hands: "Getting WedgeWerks.win and the live catalog in front of humans who will pay.",
    not: "Does not invent wedges, change prices, or start a second product.",
    body: "Owns getting WedgeWerks.win and the live catalog in front of humans who will pay. Drafts SEO, launches, threads, outreach. Humans send and post.",
  },
] as const;

/** Dated sample — not a live ticker. All eight products live. */
export const logLines = [
  { time: "07:00", who: "RADAR", text: "scan complete — 14 AI listings, 2 overlap" },
  { time: "07:20", who: "DISPATCH", text: "ranked top 3 · default winner next wedge" },
  { time: "07:31", who: "HUMAN", text: "hold · UserProbe · CiteDeck · VecClip · DocBrief · PromptKit · SkillPack · TasteKit · LinkPitch all live" },
  { time: "09:00", who: "FORGE", text: "idle — awaiting next approved wedge" },
  { time: "17:00", who: "ANCHOR", text: "catalog: eight live · no second build stacked" },
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
