import { useEffect } from "react";

/**
 * Privacy-first analytics, env-gated. Set BOTH vars in Vercel to activate:
 *   VITE_ANALYTICS_PROVIDER = "umami" | "plausible"
 *   VITE_ANALYTICS_ID       = umami website-id  |  plausible domain (e.g. wedgewerks.win)
 * With no vars set this renders nothing (zero bytes, zero cookies).
 */
export function Analytics() {
  useEffect(() => {
    const provider = import.meta.env.VITE_ANALYTICS_PROVIDER as string | undefined;
    const id = import.meta.env.VITE_ANALYTICS_ID as string | undefined;
    if (!provider || !id) return;

    const el = document.createElement("script");
    el.defer = true;
    el.dataset.dom = "wedgewerks-analytics";
    if (provider === "umami") {
      el.src = "https://cloud.umami.is/script.js";
      el.setAttribute("data-website-id", id);
    } else if (provider === "plausible") {
      el.src = "https://plausible.io/js/script.js";
      el.setAttribute("data-domain", id);
    } else {
      return;
    }
    document.head.appendChild(el);
  }, []);
  return null;
}
