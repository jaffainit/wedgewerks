/**
 * Force apex wedgewerks.win → www (vercel.json host redirects are unreliable
 * with this Nitro/TanStack deploy path).
 */
interface Event {
  url: URL;
  req: { method: string; headers: Headers };
}

function hostOf(event: Event): string {
  const raw =
    event.req.headers.get("x-forwarded-host") ??
    event.req.headers.get("host") ??
    event.url.host;
  return raw.split(",")[0]?.trim().toLowerCase().split(":")[0] || "";
}

export default async function canonicalWww(
  event: Event,
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  const host = hostOf(event);
  if (host === "wedgewerks.win") {
    const dest = new URL(event.url.pathname + event.url.search, "https://www.wedgewerks.win");
    return Response.redirect(dest, 308);
  }
  return next();
}
