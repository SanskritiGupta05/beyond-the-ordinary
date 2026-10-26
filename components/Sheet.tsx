"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, ViewTransition } from "react";
import { playRustle } from "@/lib/paperSound";
import { SHEET_SCROLL_ID } from "@/lib/sheet";

const SCROLL_KEYS = new Set(["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "]);

/**
 * The newspaper: a dark desk, a stack of sheets, and a tilted front sheet whose
 * content scrolls inside it. The homepage is the front page (tilted more, with
 * a centre fold); other pages sit a little straighter for comfortable reading.
 */
export function Sheet({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const scroller = useRef<HTMLDivElement>(null);
  const front = pathname === "/";
  const firstPage = useRef(true);

  // Each new page starts at the top of the sheet, unless it opens at an anchor.
  // A layout effect, so the page-turn snapshot shows the new page from the top.
  useLayoutEffect(() => {
    if (!window.location.hash) scroller.current?.scrollTo({ top: 0, behavior: "instant" });
    // A page turned: rustle, if the reader switched the paper sound on.
    if (firstPage.current) firstPage.current = false;
    else playRustle();
  }, [pathname]);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    if (document.activeElement === document.body) el.focus({ preventScroll: true });

    // Wheel or trackpad over the desk scrolls the paper.
    const onWheel = (e: WheelEvent) => {
      if (!el.contains(e.target as Node)) el.scrollBy({ top: e.deltaY });
    };
    // Keyboard scrolling works without clicking into the sheet first.
    const onKey = (e: KeyboardEvent) => {
      if (e.target === document.body && SCROLL_KEYS.has(e.key)) el.focus({ preventScroll: true });
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="desk" data-front={front}>
      <div className="stack">
        <div className="stack__under stack__under--3" aria-hidden="true" />
        <div className="stack__under stack__under--2" aria-hidden="true" />
        <div className="stack__under stack__under--1" aria-hidden="true" />
        {/* Page turn: on navigation the old sheet slides off the pile (see globals.css). */}
        <ViewTransition name="sheet" update={{ "in-place": "none", default: "sheet-turn" }} default="none">
          <div className="sheet">
            <div className="sheet__scroll" id={SHEET_SCROLL_ID} ref={scroller} tabIndex={-1}>
              {children}
            </div>
          </div>
        </ViewTransition>
      </div>
    </div>
  );
}
