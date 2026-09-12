import { createServerFn } from "@tanstack/react-start";

export type BriefPayload = {
  name: string;
  email: string;
  intent: string;
  product: string;
  message: string;
  id: string;
  filedAt: string;
};

export type BriefSubmitResult =
  | { channel: "email"; ok: true }
  | { channel: "local"; ok: true; reason: "no_resend_key" }
  | { channel: "email"; ok: false; error: string };

/**
 * If RESEND_API_KEY is set, email the brief to studio@wedgewerks.win via Resend.
 * Otherwise the client keeps the localStorage-only honesty path.
 */
export const submitBrief = createServerFn({ method: "POST" })
  .inputValidator((data: BriefPayload) => data)
  .handler(async ({ data }): Promise<BriefSubmitResult> => {
    const key = process.env.RESEND_API_KEY?.trim();
    if (!key) {
      return { channel: "local", ok: true, reason: "no_resend_key" };
    }

    const to =
      process.env.BRIEF_INBOX_TO?.trim() || "studio@wedgewerks.win";
    const from =
      process.env.BRIEF_FROM_EMAIL?.trim() ||
      "WedgeWerks Briefs <onboarding@resend.dev>";

    const subject = `[Brief] ${data.intent} · ${data.product} · ${data.name}`;
    const text = [
      `Ref: ${data.id}`,
      `Filed: ${data.filedAt}`,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Intent: ${data.intent}`,
      `Product: ${data.product}`,
      "",
      data.message,
    ].join("\n");

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: data.email,
          subject,
          text,
        }),
      });
      if (!res.ok) {
        const body = await res.text();
        return {
          channel: "email",
          ok: false,
          error: `Resend ${res.status}: ${body.slice(0, 200)}`,
        };
      }
      return { channel: "email", ok: true };
    } catch (err) {
      return {
        channel: "email",
        ok: false,
        error: err instanceof Error ? err.message : "send failed",
      };
    }
  });
