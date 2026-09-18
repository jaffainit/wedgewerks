import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/product-bits";
import { Container, SectionLabel } from "@/components/site-chrome";
import { products, studio } from "@/lib/studio";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Catalog — WedgeWerks™" },
      {
        name: "description",
        content:
          "WedgeWerks catalog: UserProbe, CiteDeck, VecClip, and DocBrief are live. Focused tools, one job each.",
      },
    ],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  return (
    <main id="main" className="flex-1">
      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <SectionLabel>Catalog</SectionLabel>
          <h1 className="mt-4 max-w-3xl font-display text-headline tracking-tight">
            Four tools. Each one job. Sold as a subscription.
          </h1>
          <p className="mt-5 max-w-2xl text-lede leading-relaxed text-muted">
            {studio.manifesto} UserProbe, CiteDeck, VecClip, and DocBrief are live.
          </p>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
