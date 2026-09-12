import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { logLines } from "@/lib/studio";

function DemoShell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-surface p-2 shadow-[var(--shadow-border)]">
      <div className="rounded-lg bg-elevated px-4 py-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
          {label} · studio preview
        </p>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

const probeQuestions = [
  "When did you last try to learn what users actually want?",
  "What did you do instead of running interviews?",
  "What broke when you guessed?",
  "If a synthesis arrived Monday, what would you change?",
  "Who else needs to see the quotes?",
];

const probeResult = [
  {
    theme: "Guessing is the bottleneck",
    quote: "I ship, then find out the job was two inches to the left.",
  },
  {
    theme: "Interviews feel too heavy",
    quote: "I don't need a research ops team. I need five honest answers.",
  },
  {
    theme: "Quotes beat slides",
    quote: "If I can paste a sentence into the changelog, I'll change the changelog.",
  },
];

export function UserProbeDemo() {
  const [ran, setRan] = useState(false);
  return (
    <DemoShell label="UserProbe">
      <ol className="space-y-3">
        {probeQuestions.map((q, i) => (
          <li key={q} className="flex gap-3 text-sm leading-relaxed">
            <span className="font-mono text-xs text-subtle tabular-nums">
              0{i + 1}
            </span>
            <span className="text-fg">{q}</span>
          </li>
        ))}
      </ol>
      <div className="mt-5">
        <Button type="button" size="compact" onClick={() => setRan(true)}>
          Run synthesis
          <ArrowRight className="size-3.5" />
        </Button>
      </div>
      {ran ? (
        <ul className="mt-6 space-y-4 border-t border-border pt-5">
          {probeResult.map((row) => (
            <li key={row.theme}>
              <p className="text-sm font-medium text-fg">{row.theme}</p>
              <p className="mt-1 font-display text-base italic text-muted">
                “{row.quote}”
              </p>
            </li>
          ))}
        </ul>
      ) : null}
    </DemoShell>
  );
}

const sources = [
  { id: "S1", title: "TrustMRR AI category — growth sort", kind: "URL" },
  { id: "S2", title: "Internal memo: one job, one price", kind: "PDF" },
  { id: "S3", title: "Support transcript — clip search ask", kind: "TXT" },
  { id: "S4", title: "Stripe Checkout docs (public)", kind: "URL" },
];

export function CiteDeckDemo() {
  const [open, setOpen] = useState(false);
  return (
    <DemoShell label="CiteDeck">
      <ul className="space-y-2">
        {sources.map((s) => (
          <li
            key={s.id}
            className="flex items-center justify-between gap-3 rounded-md bg-surface px-3 py-2.5 text-sm"
          >
            <span className="text-fg">{s.title}</span>
            <span className="shrink-0 font-mono text-[11px] uppercase tracking-wider text-subtle">
              {s.id} · {s.kind}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <Button type="button" size="compact" onClick={() => setOpen(true)}>
          Compose memo
          <ArrowRight className="size-3.5" />
        </Button>
      </div>
      {open ? (
        <div className="mt-6 border-t border-border pt-5 text-sm leading-relaxed text-muted">
          <p>
            Fast-growing AI wedges are showing up as focused jobs, not platforms.{" "}
            <span className="text-accent">[S1]</span> A paid loop is landing,
            auth, the core job, and Checkout — then stop.{" "}
            <span className="text-accent">[S2][S4]</span> The next ask from
            support is not another dashboard: it is the twelve seconds that
            prove the bug. <span className="text-accent">[S3]</span>
          </p>
        </div>
      ) : null}
    </DemoShell>
  );
}

const clips = [
  { t: "02:14", title: "Checkout fails on empty coupon", tags: "stripe bug" },
  { t: "08:41", title: "User cannot find export", tags: "nav research" },
  { t: "12:03", title: "Probe link pasted in Slack", tags: "userprobe" },
  { t: "19:27", title: "Mobile overflow on price row", tags: "css layout" },
  { t: "27:02", title: "Founder restates the wedge", tags: "positioning" },
];

export function VecClipDemo() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return clips;
    return clips.filter(
      (c) =>
        c.title.toLowerCase().includes(needle) ||
        c.tags.toLowerCase().includes(needle),
    );
  }, [q]);

  return (
    <DemoShell label="VecClip">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle" />
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search recordings — try “stripe” or “wedge”"
          className="pl-10"
          aria-label="Search clips"
        />
      </div>
      <ul className="mt-4 divide-y divide-border">
        {filtered.map((c) => (
          <li key={c.t} className="flex items-center justify-between gap-3 py-3">
            <div>
              <p className="text-sm text-fg">{c.title}</p>
              <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-subtle">
                {c.tags}
              </p>
            </div>
            <span className="font-mono text-xs tabular-nums text-muted">{c.t}</span>
          </li>
        ))}
        {filtered.length === 0 ? (
          <li className="py-6 text-sm text-muted">No clip matches that job.</li>
        ) : null}
      </ul>
    </DemoShell>
  );
}


export function DocBriefDemo() {
  const steps = [
    { n: "01", label: "Brief", body: "“Why solo founders burn out on editing”" },
    { n: "02", label: "Script + TTS", body: "Polished VO · 92s · burned-in captions" },
    { n: "03", label: "MP4", body: "Download ready — stills + audio muxed" },
  ];
  return (
    <DemoShell label="DocBrief">
      <ol className="space-y-3">
        {steps.map((s) => (
          <li
            key={s.n}
            className="flex gap-3 rounded-lg bg-surface px-3 py-3 shadow-[var(--shadow-border)]"
          >
            <span className="font-mono text-[11px] tabular-nums text-subtle">{s.n}</span>
            <div>
              <p className="text-sm text-fg">{s.label}</p>
              <p className="mt-0.5 text-sm text-muted">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <Button className="mt-4 w-full" type="button">
        Generate MP4
        <ArrowRight className="size-4" />
      </Button>
    </DemoShell>
  );
}

export function ProductDemo({ slug }: { slug: string }) {
  if (slug === "userprobe") return <UserProbeDemo />;
  if (slug === "citedeck") return <CiteDeckDemo />;
  if (slug === "vecclip") return <VecClipDemo />;
  if (slug === "docbrief") return <DocBriefDemo />;
  return null;
}

export function FactoryLog() {
  return (
    <ol className="font-mono text-xs leading-7 text-muted sm:text-sm sm:leading-8">
      {logLines.map((row) => (
        <li
          key={row.time}
          className="grid grid-cols-[3.5rem_6.5rem_1fr] gap-3 tabular-nums sm:grid-cols-[4.5rem_8rem_1fr]"
        >
          <span className="text-subtle">{row.time}</span>
          <span className="text-accent">{row.who}</span>
          <span className="text-fg">{row.text}</span>
        </li>
      ))}
    </ol>
  );
}
