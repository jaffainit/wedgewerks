import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { nav, studio } from "@/lib/studio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WedgeMark } from "@/components/wedge-mark";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-subtle">
      {children}
    </p>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-fg transition-opacity duration-150 hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          <WedgeMark />
          <span className="font-display text-xl tracking-tight">
            {studio.mark}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-sm transition-colors duration-150",
                pathname === item.to || pathname.startsWith(`${item.to}/`)
                  ? "text-fg"
                  : "text-muted hover:text-fg",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="compact">
            <Link to="/brief">
              Send a brief
              <ArrowUpRight className="size-3.5" />
            </Link>
          </Button>
        </nav>

        <button
          type="button"
          className="relative flex size-11 items-center justify-center rounded-md text-fg shadow-[var(--shadow-border)] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-line bg-bg md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center text-base text-fg"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full">
              <Link to="/brief" onClick={() => setOpen(false)}>
                Send a brief
              </Link>
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <Container className="grid gap-10 py-12 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <WedgeMark className="size-6" />
            <span className="font-display text-lg">{studio.mark}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Parent studio of {studio.crew}, the TrustMRR factory. Focused tools,
            one wedge at a time.
          </p>
        </div>
        <div>
          <SectionLabel>Studio</SectionLabel>
          <ul className="mt-4 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-muted transition-colors hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/brief" className="text-muted transition-colors hover:text-fg">
                Brief
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <SectionLabel>Cadence</SectionLabel>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Scan at 07:00. Rank at 07:20. Build only after a human yes. One MVP
            in flight.
          </p>
        </div>
      </Container>
      <div className="border-t border-line">
        <Container className="flex flex-col gap-3 py-5 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {studio.mark}</span>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="transition-colors hover:text-fg">
              Privacy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-fg">
              Terms
            </Link>
            <span className="hidden sm:inline">Not a platform · A catalog of jobs</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export function NotFoundPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <SectionLabel>404</SectionLabel>
      <h1 className="mt-4 font-display text-headline italic">No such wedge.</h1>
      <p className="mt-4 max-w-md text-muted">
        That path is not in the catalog. Pick a live tool, or send a brief.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild>
          <Link to="/products">Catalog</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/">Home</Link>
        </Button>
      </div>
    </main>
  );
}
