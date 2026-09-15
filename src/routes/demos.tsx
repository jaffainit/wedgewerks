import { createFileRoute, Link } from "@tanstack/react-router";
import { CiteDeckDemo, VecClipDemo } from "@/components/demos";
import { Container, SectionLabel } from "@/components/site-chrome";

export const Route = createFileRoute("/demos")({
  head: () => ({
    meta: [
      { title: "Live demos — CiteDeck & VecClip — WedgeWerks™" },
      {
        name: "description",
        content:
          "Studio previews for CiteDeck (cited study notes) and VecClip (MP4 → path-morphing SVG). Open the live product demos without signup.",
      },
    ],
  }),
  component: DemosPage,
});

function DemosPage() {
  return (
    <main id="main" className="flex-1">
      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <SectionLabel>Studio demos</SectionLabel>
          <h1 className="mt-4 max-w-3xl font-display text-headline tracking-tight">
            CiteDeck and VecClip, side by side.
          </h1>
          <p className="mt-5 max-w-2xl text-lede leading-relaxed text-muted">
            Interactive studio previews below. For the full product demos (no signup), open
            each live site&apos;s <span className="text-fg">/demo</span> route.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a
              href="https://citedeck.wedgewerks.win/demo"
              className="font-medium text-accent hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              CiteDeck live demo →
            </a>
            <a
              href="https://vecclip.wedgewerks.win/demo"
              className="font-medium text-accent hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              VecClip live demo →
            </a>
            <Link to="/products" className="text-muted hover:text-fg">
              Full catalog
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionLabel>02 · CiteDeck</SectionLabel>
            <p className="mt-3 mb-6 max-w-md text-sm leading-relaxed text-muted">
              Cited notes and flashcards from a sample thermodynamics lecture.
            </p>
            <CiteDeckDemo />
          </div>
          <div>
            <SectionLabel>03 · VecClip</SectionLabel>
            <p className="mt-3 mb-6 max-w-md text-sm leading-relaxed text-muted">
              Short MP4 → path-morphing animated SVG you can drop on a site.
            </p>
            <VecClipDemo />
          </div>
        </Container>
      </section>
    </main>
  );
}
