import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const lectureNotes = [
  {
    text: "The first law of thermodynamics states that energy is conserved.",
    page: 1,
  },
  {
    text: "Entropy measures the dispersal of energy at a given temperature.",
    page: 2,
  },
  {
    text: "PV = nRT relates pressure, volume, amount, and temperature.",
    page: 3,
  },
];

const lectureCards = [
  {
    front: "What does the first law state?",
    back: "Energy is conserved.",
    page: 1,
  },
  {
    front: "For an isolated system, entropy…",
    back: "Never decreases.",
    page: 2,
  },
];

export function CiteDeckDemo() {
  const [tab, setTab] = useState<"notes" | "cards">("notes");
  const [flipped, setFlipped] = useState(false);
  const [cardI, setCardI] = useState(0);
  const card = lectureCards[cardI];

  return (
    <DemoShell label="CiteDeck">
      <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-subtle">
        Sample lecture · sample-lecture.pdf · 3 pages
      </p>
      <div className="mb-4 flex gap-2">
        <button
          type="button"
          onClick={() => setTab("notes")}
          className={
            "rounded-md px-3 py-1.5 text-xs font-medium " +
            (tab === "notes" ? "bg-accent text-bg" : "bg-surface text-muted")
          }
        >
          Cited notes
        </button>
        <button
          type="button"
          onClick={() => setTab("cards")}
          className={
            "rounded-md px-3 py-1.5 text-xs font-medium " +
            (tab === "cards" ? "bg-accent text-bg" : "bg-surface text-muted")
          }
        >
          Flashcards
        </button>
      </div>

      {tab === "notes" ? (
        <ul className="space-y-2">
          {lectureNotes.map((n) => (
            <li
              key={n.text}
              className="flex items-start justify-between gap-3 rounded-md bg-surface px-3 py-2.5 text-sm"
            >
              <span className="text-fg">{n.text}</span>
              <span className="shrink-0 font-mono text-[11px] uppercase tracking-wider text-accent">
                p.{n.page}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => setFlipped((f) => !f)}
            className="w-full rounded-md bg-surface px-4 py-6 text-left shadow-[var(--shadow-border)]"
          >
            <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">
              {flipped ? "Answer" : "Prompt"} · p.{card.page}
            </p>
            <p className="mt-2 text-sm text-fg">{flipped ? card.back : card.front}</p>
          </button>
          <div className="flex justify-between gap-2">
            <Button
              type="button"
              size="compact"
              variant="ghost"
              disabled={cardI === 0}
              onClick={() => {
                setCardI((i) => i - 1);
                setFlipped(false);
              }}
            >
              Previous
            </Button>
            <Button
              type="button"
              size="compact"
              disabled={cardI >= lectureCards.length - 1}
              onClick={() => {
                setCardI((i) => i + 1);
                setFlipped(false);
              }}
            >
              Next
              <ArrowRight className="size-3.5" />
            </Button>
          </div>
        </div>
      )}
      <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-subtle">
        Live product · citedeck.wedgewerks.win/demo
      </p>
    </DemoShell>
  );
}

/** Canned looping morph preview for the VecClip studio demo. */
function LoopingSvgPreview() {
  return (
    <svg
      viewBox="0 0 240 140"
      className="h-36 w-full rounded-md bg-bg"
      role="img"
      aria-label="Looping SVG preview"
    >
      <rect width="240" height="140" fill="#0b0b0a" />
      <path fill="none" stroke="#c4a574" strokeWidth="2.2">
        <animate
          attributeName="d"
          dur="2.4s"
          repeatCount="indefinite"
          values="
            M40 100 C70 40, 110 40, 140 100 S210 160, 200 70;
            M40 90 C80 30, 120 50, 150 95 S200 140, 200 60;
            M40 100 C70 40, 110 40, 140 100 S210 160, 200 70
          "
        />
      </path>
      <circle cx="48" cy="96" r="4" fill="#f0ece3">
        <animate
          attributeName="cy"
          dur="2.4s"
          repeatCount="indefinite"
          values="96;86;96"
        />
      </circle>
      <text
        x="120"
        y="128"
        textAnchor="middle"
        fill="#8a8578"
        fontFamily="ui-monospace, monospace"
        fontSize="9"
      >
        morph · loop · drop-in SVG
      </text>
    </svg>
  );
}

export function VecClipDemo() {
  const [phase, setPhase] = useState<"idle" | "working" | "done">("idle");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (phase !== "working") return;
    setProgress(0);
    const started = Date.now();
    const id = window.setInterval(() => {
      const t = Math.min(1, (Date.now() - started) / 1600);
      setProgress(Math.round(t * 100));
      if (t >= 1) {
        window.clearInterval(id);
        setPhase("done");
      }
    }, 40);
    return () => window.clearInterval(id);
  }, [phase]);

  return (
    <DemoShell label="VecClip">
      <div className="rounded-lg bg-surface px-3 py-3 shadow-[var(--shadow-border)]">
        <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">
          Input · sample.mp4 · 4.2s · 720p
        </p>
        <p className="mt-2 text-sm text-fg">Short product loop → path-morphing SVG</p>
      </div>

      {phase === "idle" ? (
        <Button
          className="mt-4 w-full"
          type="button"
          onClick={() => setPhase("working")}
        >
          Convert MP4 → SVG
          <ArrowRight className="size-4" />
        </Button>
      ) : null}

      {phase === "working" ? (
        <div className="mt-4 space-y-2">
          <div className="flex justify-between font-mono text-[11px] uppercase tracking-wider text-subtle">
            <span>Vectorizing frames</span>
            <span className="tabular-nums">{progress}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-accent transition-[width] duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      ) : null}

      {phase === "done" ? (
        <div className="mt-4 space-y-3">
          <LoopingSvgPreview />
          <Button
            className="w-full"
            type="button"
            variant="ghost"
            onClick={() => {
              const blob = new Blob(
                [
                  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 140">
  <rect width="240" height="140" fill="#0b0b0a"/>
  <path d="M40 100 C70 40, 110 40, 140 100 S210 160, 200 70" fill="none" stroke="#c4a574" stroke-width="2.2"/>
</svg>`,
                ],
                { type: "image/svg+xml" },
              );
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "vecclip-sample.svg";
              a.click();
              URL.revokeObjectURL(url);
            }}
          >
            Download SVG
            <Download className="size-4" />
          </Button>
          <button
            type="button"
            className="w-full text-center font-mono text-[11px] uppercase tracking-wider text-subtle hover:text-fg"
            onClick={() => setPhase("idle")}
          >
            Run again
          </button>
        </div>
      ) : null}
      <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-subtle">
        Live product · vecclip.wedgewerks.win/demo
      </p>
    </DemoShell>
  );
}

const docBriefBeats = [
  {
    n: "01",
    label: "Script",
    body: "Solo founders don’t need a film crew. They need a voice, a caption, and a cut that ships tonight.",
  },
  {
    n: "02",
    label: "Caption",
    body: "Why editing burns founders — 0:00–0:08",
  },
  {
    n: "03",
    label: "Poster",
    body: "Still · dark desk · wedge of light · title card ready",
  },
];

export function DocBriefDemo() {
  const [ran, setRan] = useState(false);
  return (
    <DemoShell label="DocBrief">
      <div className="rounded-lg bg-surface px-3 py-3 shadow-[var(--shadow-border)]">
        <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">
          Brief
        </p>
        <p className="mt-2 text-sm text-fg">
          “Why solo founders burn out on editing”
        </p>
      </div>
      <Button
        className="mt-4 w-full"
        type="button"
        onClick={() => setRan(true)}
      >
        Generate MP4
        <ArrowRight className="size-4" />
      </Button>
      {ran ? (
        <ol className="mt-5 space-y-3 border-t border-border pt-5">
          {docBriefBeats.map((s) => (
            <li
              key={s.n}
              className="flex gap-3 rounded-lg bg-surface px-3 py-3 shadow-[var(--shadow-border)]"
            >
              <span className="font-mono text-[11px] tabular-nums text-subtle">
                {s.n}
              </span>
              <div>
                <p className="text-sm text-fg">{s.label}</p>
                <p className="mt-0.5 text-sm text-muted">{s.body}</p>
              </div>
            </li>
          ))}
          <li className="font-mono text-[11px] uppercase tracking-wider text-accent">
            Canned three-beat result · MP4 mux stub ready
          </li>
        </ol>
      ) : null}
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
          key={`${row.time}-${row.who}`}
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
