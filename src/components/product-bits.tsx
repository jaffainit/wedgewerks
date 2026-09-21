import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import {
  type Product,
  type ProductStatus,
  statusLabel,
} from "@/lib/studio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function StatusChip({ status }: { status: ProductStatus }) {
  return (
    <span
      className={cn(
        "inline-flex h-7 items-center rounded-full px-2.5 font-mono text-[11px] uppercase tracking-[0.12em]",
        status === "live" && "bg-accent text-accent-fg",
        status === "in-forge" && "bg-elevated text-fg shadow-[var(--shadow-border)]",
        status === "next" && "text-muted shadow-[var(--shadow-border)]",
      )}
    >
      {statusLabel[status]}
    </span>
  );
}

export function ProductCard({ product }: { product: Product }) {
  // Renders product price for all products on catalog page
  return (
    <div className="group flex flex-col rounded-xl bg-surface p-2 shadow-[var(--shadow-border)]">
      <Link
        to="/products/$slug"
        params={{ slug: product.slug }}
        className="block overflow-hidden rounded-lg bg-elevated"
      >
        <img
          src={product.image}
          alt={product.imageAlt}
          className="photo aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs text-subtle">{product.index}</span>
          <StatusChip status={product.status} />
        </div>
        <h3 className="mt-3 font-display text-title tracking-tight">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{product.wedge}</p>
        <div className="mt-5 flex items-center justify-between gap-2 text-sm">
          <span className="tabular-nums text-fg shrink-0 min-w-[4rem]">{product.price}</span>
          <div className="flex items-center gap-2 shrink">
            <Link
              to="/products/$slug"
              params={{ slug: product.slug }}
              className="inline-flex items-center gap-1 text-muted transition-colors hover:text-fg"
            >
              Details
            </Link>
            {product.url && (
              <a
                href={product.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-muted transition-colors hover:text-fg"
                onClick={(e) => e.stopPropagation()}
              >
                Open
                <ArrowUpRight className="size-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductCta({ product }: { product: Product }) {
  if (product.url) {
    return (
      <Button asChild>
        <a href={product.url} target="_blank" rel="noreferrer">
          Open {product.name}
          <ArrowUpRight className="size-3.5" />
        </a>
      </Button>
    );
  }
  return (
    <Button asChild>
      <Link to="/brief" search={{ product: product.slug }}>
        Request access
        <ArrowUpRight className="size-3.5" />
      </Link>
    </Button>
  );
}
