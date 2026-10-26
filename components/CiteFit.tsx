"use client";

import { useEffect } from "react";

const EDGE = 12;

/**
 * Keeps citation notes (.cite__note) inside the paper: when one opens on hover
 * or focus, nudge it sideways via --dx if it would cross the sheet's edge.
 */
export function CiteFit() {
  useEffect(() => {
    const fit = (e: Event) => {
      const item = (e.target as Element | null)?.closest?.(".cite__item");
      const note = item?.querySelector<HTMLElement>(".cite__note");
      const sheet = document.querySelector(".sheet");
      if (!note || !sheet) return;
      note.style.setProperty("--dx", "0px");
      const r = note.getBoundingClientRect();
      const s = sheet.getBoundingClientRect();
      let dx = 0;
      if (r.right > s.right - EDGE) dx = s.right - EDGE - r.right;
      if (r.left + dx < s.left + EDGE) dx = s.left + EDGE - r.left;
      note.style.setProperty("--dx", `${Math.round(dx)}px`);
    };
    document.addEventListener("mouseover", fit, { passive: true });
    document.addEventListener("focusin", fit);
    return () => {
      document.removeEventListener("mouseover", fit);
      document.removeEventListener("focusin", fit);
    };
  }, []);

  return null;
}
