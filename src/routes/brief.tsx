import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { Container, SectionLabel } from "@/components/site-chrome";
import { BRIEFS_KEY, products } from "@/lib/studio";
import { submitBrief } from "@/lib/brief-inbox";

const intents = [
  { id: "access", label: "Request access to a tool" },
  { id: "wedge", label: "Suggest a wedge to build" },
  { id: "press", label: "Press or partnership" },
] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short."),
  email: z.string().trim().email("Need a real email."),
  intent: z.enum(["access", "wedge", "press"]),
  product: z.string(),
  message: z.string().trim().min(12, "Give us a sentence or two."),
});

type BriefValues = z.infer<typeof schema>;

type StoredBrief = BriefValues & { id: string; filedAt: string };

function readBriefs(): StoredBrief[] {
  try {
    const raw = localStorage.getItem(BRIEFS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as StoredBrief[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export const Route = createFileRoute("/brief")({
  validateSearch: (search: Record<string, unknown>): { product?: string } => {
    if (typeof search.product === "string" && search.product.length > 0) {
      return { product: search.product };
    }
    return {};
  },
  head: () => ({
    meta: [
      { title: "Send a brief — WedgeWerks™" },
      {
        name: "description",
        content:
          "File a WedgeWerks brief: request access, suggest a wedge, or press. Short jobs only.",
      },
    ],
    links: ([{ rel: "canonical", href: "https://www.wedgewerks.win/brief" }]),
  }),
  component: BriefPage,
});

function BriefPage() {
  const { product: productFromSearch } = Route.useSearch();
  const [receipt, setReceipt] = useState<StoredBrief | null>(null);
  const [emailed, setEmailed] = useState(false);

  const defaultProduct = useMemo(() => {
    if (productFromSearch && products.some((p) => p.slug === productFromSearch)) {
      return productFromSearch;
    }
    return products[0]?.slug ?? "userprobe";
  }, [productFromSearch]);

  const form = useForm<BriefValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      intent: productFromSearch ? "access" : "wedge",
      product: defaultProduct,
      message: "",
    },
  });

  async function onSubmit(values: BriefValues) {
    const entry: StoredBrief = {
      ...values,
      id: crypto.randomUUID(),
      filedAt: new Date().toISOString(),
    };
    const next = [entry, ...readBriefs()].slice(0, 20);
    localStorage.setItem(BRIEFS_KEY, JSON.stringify(next));

    let sent = false;
    try {
      const result = await submitBrief({ data: entry });
      sent = result.channel === "email" && result.ok;
    } catch {
      sent = false;
    }
    setEmailed(sent);
    setReceipt(entry);
  }

  if (receipt) {
    const productName =
      products.find((p) => p.slug === receipt.product)?.name ?? receipt.product;
    const filed = new Date(receipt.filedAt);
    return (
      <main id="main" className="flex-1">
        <section className="py-20 sm:py-28">
          <Container className="max-w-xl">
            <div className="flex size-11 items-center justify-center rounded-full bg-accent text-accent-fg">
              <Check className="size-5" />
            </div>
            <div className="mt-6">
              <SectionLabel>Brief filed</SectionLabel>
            </div>
            <h1 className="mt-4 font-display text-headline tracking-tight">
              {emailed
                ? "Filed and emailed to the studio inbox."
                : "Logged on this device. We will not pretend this emailed anyone."}
            </h1>
            <p className="mt-5 leading-relaxed text-muted">
              {emailed
                ? "A copy also stays in localStorage on this browser. Foundary still waits on a human before anything is built."
                : "No RESEND_API_KEY on the server, so the brief stays local. Foundary still waits on a human before anything is built."}
            </p>
            <dl className="mt-10 space-y-4 rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
              <div className="flex justify-between gap-4 text-sm">
                <dt className="text-subtle">Ref</dt>
                <dd className="font-mono text-xs text-fg">{receipt.id.slice(0, 8)}</dd>
              </div>
              <div className="flex justify-between gap-4 text-sm">
                <dt className="text-subtle">When</dt>
                <dd className="tabular-nums text-fg">
                  {filed.toLocaleString(undefined, {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </dd>
              </div>
              <div className="flex justify-between gap-4 text-sm">
                <dt className="text-subtle">About</dt>
                <dd className="text-fg">{productName}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/products">Back to catalog</Link>
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={() => {
                  setReceipt(null);
                  form.reset();
                }}
              >
                File another
              </Button>
            </div>
          </Container>
        </section>
      </main>
    );
  }

  const errors = form.formState.errors;

  return (
    <main id="main" className="flex-1">
      <section className="border-b border-line py-16 sm:py-20">
        <Container className="max-w-2xl">
          <SectionLabel>Brief</SectionLabel>
          <h1 className="mt-4 font-display text-headline tracking-tight">
            Two choices, or skip. Tell us the job.
          </h1>
          <p className="mt-5 text-lede leading-relaxed text-muted">
            Access to a live tool, a wedge we should consider, or press. Keep it
            short. If it needs hardware, a marketplace, or a medical core, we
            will pass.
          </p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
            <Link to="/privacy" className="hover:text-fg">
              Privacy
            </Link>
            <span className="mx-2">·</span>
            <Link to="/terms" className="hover:text-fg">
              Terms
            </Link>
          </p>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container className="max-w-2xl">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7" noValidate>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" autoComplete="name" {...form.register("name")} />
                {errors.name ? (
                  <p className="text-sm text-danger">{errors.name.message}</p>
                ) : null}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...form.register("email")}
                />
                {errors.email ? (
                  <p className="text-sm text-danger">{errors.email.message}</p>
                ) : null}
              </div>
            </div>

            <fieldset className="space-y-3">
              <legend className="block font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted">
                Intent
              </legend>
              <div className="grid gap-2">
                {intents.map((intent) => (
                  <label
                    key={intent.id}
                    className="flex min-h-11 cursor-pointer items-center gap-3 rounded-md px-3 shadow-[var(--shadow-border)] transition-[box-shadow] hover:shadow-[var(--shadow-border-hover)]"
                  >
                    <input
                      type="radio"
                      value={intent.id}
                      className="size-4 accent-accent"
                      {...form.register("intent")}
                    />
                    <span className="text-sm text-fg">{intent.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="space-y-2">
              <Label htmlFor="product">Tool</Label>
              <select
                id="product"
                className="flex h-11 w-full rounded-md bg-surface px-3.5 text-base text-fg shadow-[var(--shadow-border)] outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                {...form.register("product")}
              >
                {products.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.index} {p.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">The job</Label>
              <Textarea
                id="message"
                rows={6}
                placeholder="Who it is for, what it does in one sentence, how it should charge."
                {...form.register("message")}
              />
              {errors.message ? (
                <p className="text-sm text-danger">{errors.message.message}</p>
              ) : null}
            </div>

            <Button type="submit" disabled={form.formState.isSubmitting}>
              File brief
            </Button>
          </form>
        </Container>
      </section>
    </main>
  );
}
