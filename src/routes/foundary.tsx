import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FactoryLog } from "@/components/demos";
import { Container, SectionLabel } from "@/components/site-chrome";
import { crew, studio } from "@/lib/studio";

export const Route = createFileRoute("/foundary")({
  head: () => ({
    meta: [
      { title: "Foundary — TrustMRR factory crew | WedgeWerks" },
      {
        name: "description",
        content:
          "Anchor, Radar, Dispatch, Forge, Herald. Factory finds and ships. Herald makes the catalog findable.",
      },
    ],
  }),
  component: FoundaryPage,
});

function FoundaryPage() {
  return (
    <main id="main" className="flex-1">
      <section className="border-b border-line py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionLabel>Foundary</SectionLabel>
          <h1 className="mt-4 font-display text-headline tracking-tight">
            The TrustMRR factory crew inside {studio.mark}.
          </h1>
          <p className="mt-5 text-lede leading-relaxed text-muted">
            Five seats. One direction. Radar finds today's AI movers.
            Dispatch ranks three and writes a build order. You approve.
            Forge builds that MVP only. Herald makes it findable. Anchor keeps the line honest.
          </p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
            Spelling note: Foundary is intentional — not “Foundry”.
          </p>
        </Container>
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <div className="grid gap-px bg-line sm:grid-cols-2">
            {crew.map((member) => (
              <article key={member.name} className="bg-bg p-6 sm:p-8 lg:p-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                  {member.hands}
                </p>
                <h2 className="mt-4 font-display text-title tracking-tight">
                  {member.name}
                </h2>
                <p className="mt-1 text-sm text-accent">{member.title}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{member.body}</p>
                <p className="mt-4 text-sm text-subtle">{member.not}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>Cadence</SectionLabel>
            <h2 className="mt-3 font-display text-headline tracking-tight">
              Daily scan. Daily brief. Build only on a yes.
            </h2>
            <ul className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
              <li>
                <span className="font-mono text-xs text-accent">07:00</span>
                <span className="ml-3">Radar posts the raw pack.</span>
              </li>
              <li>
                <span className="font-mono text-xs text-accent">07:20</span>
                <span className="ml-3">Dispatch ranks, writes the order, drafts email.</span>
              </li>
              <li>
                <span className="font-mono text-xs text-accent">07:30</span>
                <span className="ml-3">You get the draft. Reply build #1, #2, or skip.</span>
              </li>
              <li>
                <span className="font-mono text-xs text-accent">09:00</span>
                <span className="ml-3">Forge starts if a winner is approved and none is in flight.</span>
              </li>
              <li>
                <span className="font-mono text-xs text-accent">Sun 17:00</span>
                <span className="ml-3">Anchor reviews what shipped, what to pause, one change to approve.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
              Factory log · dated sample
            </p>
            <div className="mt-5 overflow-x-auto">
              <FactoryLog />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Hands off</SectionLabel>
            <p className="mt-3 max-w-lg text-lede leading-relaxed text-muted">
              Foundary does not steal assets, copy, trademarks, or private data.
              Same category is allowed. A thin working wedge is the point — not
              a funded company overnight.
            </p>
          </div>
          <Button asChild>
            <Link to="/brief">
              Send a brief
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </Container>
      </section>
    </main>
  );
}
