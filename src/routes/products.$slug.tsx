import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ProductDemo } from "@/components/demos";
import { ProductCta, StatusChip } from "@/components/product-bits";
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
        title: loaderData
          ? `${loaderData.product.name} — WedgeWerks™`
          : "WedgeWerks™",
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
      <section className="border-b border-line">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="photo max-h-[56vh] w-full object-cover"
        />
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <SectionLabel>{product.index}</SectionLabel>
              <StatusChip status={product.status} />
            </div>
            <h1 className="mt-4 font-display text-headline tracking-tight">
              {product.name}
            </h1>
            <p className="mt-5 max-w-xl text-lede leading-relaxed text-muted">
              {product.job}
            </p>
            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <dt>
                  <SectionLabel>For</SectionLabel>
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-fg">{product.forWhom}</dd>
              </div>
              <div>
                <dt>
                  <SectionLabel>Wedge</SectionLabel>
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-fg">{product.wedge}</dd>
              </div>
              <div>
                <dt>
                  <SectionLabel>Charge</SectionLabel>
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-fg">
                  {product.price} · {product.charge}
                </dd>
              </div>
              <div>
                <dt>
                  <SectionLabel>Done when</SectionLabel>
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-fg">{product.metric}</dd>
              </div>
            </dl>
            <div className="mt-10">
              <ProductCta product={product} />
            </div>
          </div>
          <ProductDemo slug={product.slug} />
        </Container>
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <Container className="grid gap-12 sm:grid-cols-2">
          <div>
            <SectionLabel>Must</SectionLabel>
            <ul className="mt-5 space-y-3">
              {product.must.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionLabel>Must not</SectionLabel>
            <ul className="mt-5 space-y-3">
              {product.mustNot.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-border" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionLabel>Also in the catalog</SectionLabel>
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
