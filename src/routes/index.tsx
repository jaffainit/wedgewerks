import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FactoryLog } from "@/components/demos";
import { ProductCard } from "@/components/product-bits";
import { Container, SectionLabel } from "@/components/site-chrome";
import { mvpIs, pipeline, products, studio, willNot } from "@/lib/studio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "WedgeWerks™ — Find the wedge. Ship the MVP.",
      },
      {
        name: "description",
        content:
          "WedgeWerks is a small product factory. We find fast-growing AI wedges, pick one, and ship a paid MVP in days — landing, auth, core job, Stripe.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main id="main">
      <section className="border-b border-line">
        <Container className="grid gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-24">
          <div>
            <SectionLabel>A product factory, not a platform</SectionLabel>
            <h1 className="mt-6 font-display text-display leading-[0.95] tracking-[-0.03em] italic">
              Find the wedge.
              <br />
              Ship the MVP.
            </h1>
            <p className="mt-8 max-w-xl text-lede leading-relaxed text-muted">
              {studio.lede}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/products">
                  See the catalog
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/brief">
                  Send a brief
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
          <p className="max-w-md font-display text-title italic leading-snug text-muted lg:justify-self-end">
            {studio.manifesto}
          </p>
        </Container>
      </section>

      <section className="border-b border-line">
        <img
          src="/brand/hero-wedge.jpg"
          alt="A machined steel wedge on a dark foundry bench."
          className="photo max-h-[72vh] w-full object-cover"
        />
        <Container className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
            The wedge is the job. Everything else is inventory.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
            Parent studio of Foundary
          </p>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
          {[
            ["Days", "not quarters"],
            ["One job", "per tool"],
            ["Simple", "subscription"],
            ["One MVP", "in flight"],
          ].map(([k, v]) => (
            <div key={k} className="bg-bg px-5 py-8 sm:py-10">
              <p className="font-display text-title tracking-tight">{k}</p>
              <p className="mt-1 text-sm text-muted">{v}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="border-b border-line py-20 sm:py-24">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Catalog</SectionLabel>
              <h2 className="mt-3 font-display text-headline tracking-tight">
                Focused tools. Then the next one.
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex min-h-11 items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
            >
              Full catalog
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 sm:py-24">
        <Container>
          <SectionLabel>Method</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-headline tracking-tight">
            Radar finds. Dispatch ranks. You approve. Forge builds that MVP only.
          </h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pipeline.map((step, i) => (
              <li key={step.id} className="border-t border-border pt-5">
                <p className="font-mono text-xs tabular-nums text-subtle">
                  {String(i + 1).padStart(2, "0")} · {step.time}
                </p>
                <h3 className="mt-3 font-display text-title">{step.name}</h3>
                <p className="mt-1 text-sm text-fg">{step.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Link
              to="/method"
              className="inline-flex min-h-11 items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
            >
              Read the method
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>What an MVP is</SectionLabel>
            <ul className="mt-6 space-y-3">
              {mvpIs.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionLabel>What we will not do</SectionLabel>
            <ul className="mt-6 space-y-3">
              {willNot.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-border" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 sm:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Foundary · today</SectionLabel>
            <h2 className="mt-3 font-display text-headline tracking-tight">
              The crew that keeps the factory honest.
            </h2>
            <p className="mt-5 max-w-md text-muted leading-relaxed">
              Anchor, Radar, Dispatch, Forge. Bots draft. Humans send, pay, and
              ship. Sunday review. No second build while one is in the fire.
            </p>
            <Link
              to="/foundary"
              className="mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
            >
              Meet Foundary
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
              Factory log · sample
            </p>
            <div className="mt-5 overflow-x-auto">
              <FactoryLog />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Next wedge</SectionLabel>
            <h2 className="mt-3 max-w-xl font-display text-headline tracking-tight italic">
              Have a job that should be a tool? File a brief.
            </h2>
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
