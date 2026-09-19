import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, SectionLabel } from "@/components/site-chrome";
import { getProduct, products } from "@/lib/studio";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData?.product.metaTitle || `${loaderData?.product.name} — WedgeWerks™`,
      },
      {
        name: "description",
        content: loaderData?.product.metaDescription || `${loaderData?.product.name}: ${loaderData?.product.job} ${loaderData?.product.price}.`,
      },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <main id="main" className="flex-1">
      <section className="border-b border-line py-16 sm:py-20">
        <Container className="max-w-4xl">
          <h1 className="font-display text-headline tracking-tight">
            {product.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lede leading-relaxed text-muted">
            {product.deck || product.wedge}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="font-display text-title tabular-nums text-fg">
                {product.price}
              </span>
              {product.url && (
                <Button asChild>
                  <a href={product.url} target="_blank" rel="noreferrer">
                    Open {product.name}
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </Container>
      </section>

      {product.theJob && (
        <section className="border-b border-line py-16 sm:py-20">
          <Container className="max-w-4xl">
            <h2 className="font-display text-title tracking-tight">The job</h2>
            <ul className="mt-5 space-y-3">
              {product.theJob.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {product.whoItsFor && (
        <section className="border-b border-line py-16 sm:py-20">
          <Container className="max-w-4xl">
            <h2 className="font-display text-title tracking-tight">Who it's for</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {product.whoItsFor}
            </p>
          </Container>
        </section>
      )}

      {product.whatItIsNot && (
        <section className="border-b border-line py-16 sm:py-20">
          <Container className="max-w-4xl">
            <h2 className="font-display text-title tracking-tight">What it is not</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {product.whatItIsNot}
            </p>
          </Container>
        </section>
      )}

      <section className="border-b border-line py-16 sm:py-20">
        <Container className="max-w-4xl">
          <p className="text-sm text-muted">
            Built by{" "}
            <Link to="/" className="text-fg hover:text-accent">
              WedgeWerks
            </Link>
            {" — product factory, not a platform."}
          </p>
          <p className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
            <Link to="/" className="hover:text-fg">
              Home
            </Link>
            <span>·</span>
            <Link to="/method" className="hover:text-fg">
              Method
            </Link>
            <span>·</span>
            <Link to="/products" className="hover:text-fg">
              Catalog
            </Link>
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <h2 className="font-display text-title tracking-tight">
            Also in the catalog
          </h2>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {others.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="flex min-h-16 items-center justify-between gap-4 py-4 text-sm transition-colors hover:text-accent"
                >
                  <span className="font-display text-title tracking-tight text-fg">
                    {p.name}
                  </span>
                  <span className="hidden max-w-md truncate text-right text-muted md:inline">
                    {p.wedge}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
}
