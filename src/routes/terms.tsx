import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, SectionLabel } from "@/components/site-chrome";
import { studio } from "@/lib/studio";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — WedgeWerks™" },
      {
        name: "description",
        content:
          "Terms of use for WedgeWerks™ studio site and catalog products — plain language for UK and EU visitors.",
      },
    ],
    links: ([{ rel: "canonical", href: "https://www.wedgewerks.win/terms" }]),
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main id="main" className="flex-1">
      <section className="border-b border-line py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="mt-4 font-display text-headline tracking-tight">
            Terms of use
          </h1>
          <p className="mt-5 text-lede leading-relaxed text-muted">
            These terms cover the {studio.mark} studio site and our catalog
            products. Keep it simple: use the tools lawfully, pay for what you
            subscribe to, and do not upload content you have no right to use.
            Last updated 12 September 2026.
          </p>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl space-y-10 text-sm leading-relaxed text-muted">
          <div>
            <h2 className="font-display text-title text-fg">The service</h2>
            <p className="mt-3">
              {studio.mark} publishes focused software tools (including
              UserProbe, CiteDeck, VecClip, DocBrief, PromptKit, SkillPack, and TasteKit). Features, prices, and
              availability can change. Pre-release or “next” seats are not a
              guarantee of a ship date.
            </p>
          </div>
          <div>
            <h2 className="font-display text-title text-fg">Accounts</h2>
            <p className="mt-3">
              You are responsible for your login and for activity under your
              account. Provide a real email you control. Do not share passwords
              or attempt to access another user’s data.
            </p>
          </div>
          <div>
            <h2 className="font-display text-title text-fg">Your content</h2>
            <p className="mt-3">
              You keep ownership of lecture PDFs, MP4s, briefs, scripts, and
              other materials you upload. You grant us a limited licence to
              process that content solely to provide the product (e.g. generate
              cited notes, SVG exports, or captioned MP4s). You must have the
              rights to upload it. Do not upload unlawful, harmful, or
              infringing material.
            </p>
          </div>
          <div>
            <h2 className="font-display text-title text-fg">Payments</h2>
            <p className="mt-3">
              Paid plans are billed through Stripe. Fees are as shown at
              checkout. Taxes may apply. Refunds are handled case-by-case —
              write to{" "}
              <a
                className="text-accent underline-offset-2 hover:underline"
                href="mailto:info@wedgewerks.win"
              >
                info@wedgewerks.win
              </a>
              .
            </p>
          </div>
          <div>
            <h2 className="font-display text-title text-fg">Acceptable use</h2>
            <p className="mt-3">
              No scraping that harms the service, no abuse of AI quotas, no
              attempts to reverse-engineer paid endpoints for competing clones
              of the core job, and no use that breaks applicable law (including
              UK and EU rules).
            </p>
          </div>
          <div>
            <h2 className="font-display text-title text-fg">Disclaimer</h2>
            <p className="mt-3">
              Tools are provided “as is”. Generated notes, SVGs, scripts, and
              videos can contain errors — review before you rely on them. We do
              not warrant uninterrupted availability.
            </p>
          </div>
          <div>
            <h2 className="font-display text-title text-fg">Liability</h2>
            <p className="mt-3">
              To the extent allowed by UK and EU consumer law, our liability for
              paid services is limited to fees you paid us for the product in
              the three months before the claim. Nothing here limits liability
              that cannot be limited by law.
            </p>
          </div>
          <div>
            <h2 className="font-display text-title text-fg">Contact</h2>
            <p className="mt-3">
              Questions:{" "}
              <a
                className="text-accent underline-offset-2 hover:underline"
                href="mailto:info@wedgewerks.win"
              >
                info@wedgewerks.win
              </a>{" "}
              or{" "}
              <a
                className="text-accent underline-offset-2 hover:underline"
                href="mailto:admin@wedgewerks.win"
              >
                admin@wedgewerks.win
              </a>
              . Privacy details live in our{" "}
              <Link
                to="/privacy"
                className="text-accent underline-offset-2 hover:underline"
              >
                Privacy notice
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
