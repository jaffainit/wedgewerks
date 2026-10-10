import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, SectionLabel } from "@/components/site-chrome";
import { studio } from "@/lib/studio";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — WedgeWerks™" },
      {
        name: "description",
        content:
          "Plain-language privacy notice for WedgeWerks™: what we collect, why, how long we keep it, and how to reach us.",
      },
    ],
    links: ([{ rel: "canonical", href: "https://www.wedgewerks.win/privacy" }]),
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main id="main" className="flex-1">
      <section className="border-b border-line py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="mt-4 font-display text-headline tracking-tight">
            Privacy notice
          </h1>
          <p className="mt-5 text-lede leading-relaxed text-muted">
            This notice explains how {studio.mark} handles personal data for our
            studio site and catalog products (UserProbe, CiteDeck, VecClip,
            DocBrief, PromptKit, SkillPack, TasteKit, and LinkPitch). Written for people in the UK and EU. Last updated 12
            September 2026.
          </p>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container className="prose-legal max-w-3xl space-y-10 text-sm leading-relaxed text-muted">
          <div>
            <h2 className="font-display text-title text-fg">Who we are</h2>
            <p className="mt-3">
              {studio.mark} is a small product studio. Controllers for this site
              and our apps: the WedgeWerks studio operators. Contact:{" "}
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
              .
            </p>
          </div>
          <div>
            <h2 className="font-display text-title text-fg">What we collect</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <span className="text-fg">Account email</span> — to sign you in
                and send receipts or product notices you asked for.
              </li>
              <li>
                <span className="text-fg">Password hashes</span> — never
                plaintext passwords. We store salted hashes when email/password
                auth is enabled.
              </li>
              <li>
                <span className="text-fg">Product content you upload</span> —
                lecture PDFs / PPTX (CiteDeck), short MP4s (VecClip), briefs /
                scripts and generated VO assets (DocBrief), probe answers
                (UserProbe), prompt snippets (PromptKit), installed skill
                packs (SkillPack), UI references queried via MCP (TasteKit), and
                site URLs, keywords and pitch drafts (LinkPitch)
                needed to do the job you paid for.
              </li>
              <li>
                <span className="text-fg">Brief inbox messages</span> — name,
                email, intent, and the job text you send via the studio brief
                form.
              </li>
              <li>
                <span className="text-fg">Payment metadata</span> — Stripe
                customer / subscription identifiers. Card numbers never touch
                our servers; Stripe is the payment processor.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-title text-fg">Why we use it</h2>
            <p className="mt-3">
              To provide the subscribed product, authenticate you, process
              payments, answer briefs, improve reliability, and meet legal
              duties. Lawful bases (UK GDPR / EU GDPR): contract (to deliver the
              service), legitimate interests (studio operations and security),
              and consent where we ask for it (e.g. optional marketing).
            </p>
          </div>
          <div>
            <h2 className="font-display text-title text-fg">Processors</h2>
            <p className="mt-3">
              <span className="text-fg">Stripe</span> processes payments. Hosting
              and email delivery may use infrastructure providers (e.g. Vercel
              for the site; Resend when{" "}
              <code className="text-fg">RESEND_API_KEY</code> is configured for
              brief delivery). They only receive what they need to perform that
              processing.
            </p>
          </div>
          <div>
            <h2 className="font-display text-title text-fg">Retention</h2>
            <p className="mt-3">
              Account and billing records: while your subscription is active,
              then as long as tax or dispute rules require. Uploaded lecture
              files, MP4s, briefs/scripts, and probe data: while your account
              needs them to use the product, or until you delete them / close
              the account. Studio brief form submissions emailed to us: kept only
              as long as needed to respond. Local-only briefs (when email is not
              configured) stay on your device until you clear site data.
            </p>
          </div>
          <div>
            <h2 className="font-display text-title text-fg">Your rights</h2>
            <p className="mt-3">
              You can ask for access, correction, deletion, restriction, or
              portability of your personal data, and object to certain
              processing. Contact{" "}
              <a
                className="text-accent underline-offset-2 hover:underline"
                href="mailto:admin@wedgewerks.win"
              >
                admin@wedgewerks.win
              </a>
              . You may also complain to the UK ICO or your local EU supervisory
              authority.
            </p>
          </div>
          <div>
            <h2 className="font-display text-title text-fg">Children</h2>
            <p className="mt-3">
              Our paid tools are aimed at adults and students old enough to
              consent to digital services in their country. We do not knowingly
              sell subscriptions to young children.
            </p>
          </div>
          <p className="pt-4">
            See also our{" "}
            <Link to="/terms" className="text-accent underline-offset-2 hover:underline">
              Terms of use
            </Link>
            .
          </p>
        </Container>
      </section>
    </main>
  );
}
