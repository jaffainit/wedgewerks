import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, SectionLabel } from "@/components/site-chrome";
import { pipeline } from "@/lib/studio";

export const Route = createFileRoute("/method")({
  head: () => ({
    meta: [
      { title: "Method — TrustMRR in. One paid MVP out." },
      {
        name: "description",
        content:
          "Radar scans TrustMRR. Dispatch ranks three. You approve. Forge builds that MVP only. Human wall on spend and ship.",
      },
    ],
    links: ([{ rel: "canonical", href: "https://www.wedgewerks.win/method" }]),
  }),
  component: MethodPage,
});

function MethodPage() {
  return (
    <main id="main" className="flex-1">
      <section className="border-b border-line py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionLabel>Method</SectionLabel>
          <h1 className="mt-4 font-display text-headline tracking-tight">
            A one-way factory. Fresh AI wedges in. One paid MVP out.
          </h1>
          <p className="mt-5 text-lede leading-relaxed text-muted">
            Signal comes from TrustMRR. Foundary ranks it. A human picks the
            winner. Forge builds only that product, then the line clears.
          </p>
        </Container>
      </section>

      <section className="border-b border-line">
        <img
          src="/brand/foundry.jpg"
          alt="Empty foundry floor with a wedge of light."
          className="photo max-h-[64vh] w-full object-cover"
        />
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <ol className="grid gap-0 sm:grid-cols-2">
            {pipeline.map((step, i) => (
              <li
                key={step.id}
                className="border-b border-line px-0 py-10 sm:border-r sm:px-8 sm:odd:pl-0 sm:even:border-r-0 sm:even:pr-0 lg:py-12"
              >
                <p className="font-mono text-xs tabular-nums text-subtle">
                  {String(i + 1).padStart(2, "0")} · {step.time} local
                </p>
                <h2 className="mt-4 font-display text-title tracking-tight">
                  {step.name}
                  <span className="text-muted"> — {step.title}</span>
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Human approval wall</SectionLabel>
            <p className="mt-4 max-w-md text-lede leading-relaxed text-muted">
              Bots draft. You send, pay, ship. The factory stops for anything
              that spends money, creates a repo, deploys, or changes the winner
              after Forge has started.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-fg">
              {[
                "Sending email",
                "Creating a GitHub repo or pushing",
                "Deploying or adding a domain",
                "Spending on APIs, Stripe live, or a custom domain",
                "Changing the winner mid-build",
                "Adding or removing a bot",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionLabel>Default stack</SectionLabel>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Next.js App Router, TypeScript, Tailwind, Stripe Checkout, Vercel,
              GitHub. Postgres or SQLite. Forge does not add a custom domain,
              tweet a launch, or pick a “better” idea.
            </p>
            <p className="mt-6 font-display text-title italic text-fg">
              Differentiable clone. Named wedge. Who it is for, what it does in
              one sentence, how it charges.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Work with the factory</SectionLabel>
            <h2 className="mt-3 max-w-xl font-display text-headline tracking-tight">
              Bring a job. Leave with a paid loop — or a no.
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
