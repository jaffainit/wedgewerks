import { cn } from "@/lib/utils";

export function WedgeMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("size-7 text-fg", className)}
    >
      <path
        d="M6 26 L16 6 L26 26 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="miter"
      />
      <path d="M11.2 26 L16 14.5 L20.8 26 Z" className="fill-accent" />
    </svg>
  );
}
