"use client";

import { useRef, useState } from "react";
import { addClipping, removeClipping, useClippings, type Clipping } from "@/lib/clippings";

const CUT_MS = 900;

/**
 * "Clip this story": a pair of scissors runs along a dashed cut line around the
 * story header, the cut-out lifts off the page, and the story is saved to the
 * reader's Clippings drawer (in the dock). Clicking again removes it.
 */
export function ClipButton({ clip }: { clip: Omit<Clipping, "clippedAt"> }) {
  const clipped = useClippings().some((c) => c.id === clip.id);
  const [cutting, setCutting] = useState(false);
  const [note, setNote] = useState("");
  const ref = useRef<HTMLButtonElement>(null);

  const onClick = () => {
    if (cutting) return;
    if (clipped) {
      removeClipping(clip.id);
      setNote("Removed from your clippings.");
      return;
    }
    const target = ref.current?.closest<HTMLElement>(".story-head");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!target || reduce) {
      addClipping(clip);
      setNote("Clipped. Find it under Clippings in the menu bar.");
      return;
    }
    setCutting(true);
    target.classList.add("is-cutting");
    window.setTimeout(() => {
      target.classList.remove("is-cutting");
      target.classList.add("is-lifting");
      addClipping(clip);
      setNote("Clipped. Find it under Clippings in the menu bar.");
    }, CUT_MS);
    window.setTimeout(() => {
      target.classList.remove("is-lifting");
      setCutting(false);
    }, CUT_MS + 650);
  };

  return (
    <div className="clip-row">
      <button ref={ref} type="button" className="clip-btn" aria-pressed={clipped} onClick={onClick}>
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="4" cy="12" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="12" cy="12" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.3" />
          <path d="M5.6 10.4 12 1.5M10.4 10.4 4 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        {clipped ? "Clipped · remove" : "Clip this story"}
      </button>
      <p className="clip-note" role="status">
        {note}
      </p>
      {/* The cut line and scissors, shown around the header while cutting */}
      <span className="cut-line" aria-hidden="true">
        <span className="cut-line__scissors">✂</span>
      </span>
    </div>
  );
}
