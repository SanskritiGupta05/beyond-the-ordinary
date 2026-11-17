"use client";

import { useEffect } from "react";

const EDGE = 8;
const MAX = 384; // 24rem

/** The block of text a citation sits in: its note should stay over that column. */
const COLUMN = "p, li, dd, dt, figcaption, blockquote, td, th, .callout";

/**
 * Keeps citation notes (.cite__note) over the column of text they belong to,
 * so they never spill onto the contents rail or past the paper: when one opens
 * on hover or focus, narrow it to the column (--note-max) and nudge it sideways (--dx).
 */
export function CiteFit() {
  useEffect(() => {
    const fit = (e: Event) => {
      const item = (e.target as Element | null)?.closest?.(".cite__item");
      const note = item?.querySelector<HTMLElement>(".cite__note");
      const sheet = document.querySelector(".sheet");
      if (!item || !note || !sheet) return;
      const s = sheet.getBoundingClientRect();
      const c = (item.closest(COLUMN) ?? sheet).getBoundingClientRect();
      const left = Math.max(c.left, s.left + EDGE);
      const right = Math.min(c.right, s.right - EDGE);
      note.style.setProperty("--note-max", `${Math.round(Math.min(MAX, Math.max(160, right - left)))}px`);
      note.style.setProperty("--dx", "0px");
      const r = note.getBoundingClientRect();
      let dx = 0;
      if (r.right > right) dx = right - r.right;
      if (r.left + dx < left) dx = left - r.left;
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
