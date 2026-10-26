"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { SHEET_SCROLL_ID } from "@/lib/sheet";

/** Vertical Japanese names that are written in with a brush sweep as they scroll into view. */
const SELECTOR = ".ja-hed--tate, .story-head__tate, .section-head__ja";

/**
 * Marks each vertical Japanese name as pending, then lets it "write itself"
 * (a top-to-bottom ink sweep, see globals.css) the first time it scrolls into
 * view on the sheet. Skipped entirely for reduced motion.
 */
export function InkWriter() {
  const pathname = usePathname();

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.getElementById(SHEET_SCROLL_ID);
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    els.forEach((el) => (el.dataset.write = "pending"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).dataset.write = "done";
          io.unobserve(e.target);
        }
      },
      { root, rootMargin: "0px 0px -12% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
