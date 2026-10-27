"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { OPEN_EVENT, clearOpenedClipping, getClippings, peekOpenedClipping, useClippings } from "@/lib/clippings";
import { SHEET_SCROLL_ID } from "@/lib/sheet";
import { NOT_PASSAGE } from "./ShareClipping";

const normalize = (s: string) => s.replace(/\s+/g, " ").trim();

/**
 * Finds a clipped passage in the story text. Matching ignores whitespace and
 * paragraph breaks, and skips hidden text such as citation notes.
 */
function findRange(container: HTMLElement, quote: string): Range | null {
  const full = normalize(quote.replace(/…$/, ""));
  // Locate the passage by its opening (robust to edits further on), then cover all of it if it still matches.
  const needle = full.slice(0, 300);
  if (needle.length < 8) return null;
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => (n.parentElement?.closest(`${NOT_PASSAGE}, script, style`) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
  });
  let text = "";
  const map: [Text, number][] = [];
  let lastBlock: Element | null | undefined;
  let space = false;
  for (let n = walker.nextNode() as Text | null; n; n = walker.nextNode() as Text | null) {
    const block = n.parentElement?.closest("p, li, h1, h2, h3, h4, blockquote, figcaption, dd, dt, td, th");
    if (lastBlock !== undefined && block !== lastBlock) space = true;
    lastBlock = block;
    for (let i = 0; i < n.data.length; i++) {
      const ch = n.data[i];
      if (/\s/.test(ch)) {
        space = true;
        continue;
      }
      if (space && text) {
        text += " ";
        map.push([n, i]);
      }
      space = false;
      text += ch;
      map.push([n, i]);
    }
  }
  const at = text.indexOf(needle);
  if (at < 0) return null;
  const length = text.startsWith(full, at) ? full.length : needle.length;
  const [startNode, startOffset] = map[at];
  const [endNode, endOffset] = map[at + length - 1];
  const range = document.createRange();
  range.setStart(startNode, startOffset);
  range.setEnd(endNode, endOffset + 1);
  return range;
}

const supportsHighlights = () => typeof CSS !== "undefined" && "highlights" in CSS && typeof Highlight !== "undefined";
const dayMonth = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short" });

/**
 * Shows readers what they clipped: every saved passage from this story is
 * softly marked in vermilion, and a clipping opened from the drawer is
 * scrolled to, marked strongly and labelled. Opening a whole-story clipping
 * presses the "clipped" stamp on the header.
 */
export function ClipHighlight({ storyId, containerId }: { storyId: string; containerId: string }) {
  const clippings = useClippings();
  const passages = clippings.filter((c) => c.id.startsWith(`${storyId}#`) && c.quote);
  const key = passages.map((c) => c.id).join("|");
  const [tag, setTag] = useState<{ top: number; left: number; date: string; container: HTMLElement } | null>(null);

  // Soft highlight on every saved passage from this story
  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container || !supportsHighlights()) return;
    const ranges = passages.map((c) => findRange(container, c.quote!)).filter((r): r is Range => !!r);
    CSS.highlights.set("clipping", new Highlight(...ranges));
    return () => void CSS.highlights.delete("clipping");
    // `key` captures the passages that matter; the array itself changes identity on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerId, key]);

  // Point out the clipping the reader opened from the drawer
  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;
    let timers: number[] = [];
    const belongs = (i: string) => i === storyId || i.startsWith(`${storyId}#`);
    const reveal = () => {
      if (!peekOpenedClipping(belongs)) return;
      timers.forEach(clearTimeout);
      timers = [];
      // Wait for layout to settle; claim the request only when it is actually shown,
      // so a remount in between (e.g. React Strict Mode) doesn't lose it.
      timers.push(
        window.setTimeout(() => {
          const id = peekOpenedClipping(belongs);
          if (!id) return;
          clearOpenedClipping();
          // Read the saved list directly: on arrival the hook's value may not have loaded yet.
          const clip = getClippings().find((c) => c.id === id);
          const scroller = document.getElementById(SHEET_SCROLL_ID);
          if (!clip?.quote) {
            // Whole-story clipping: back to the top, and press the stamp on the header
            scroller?.scrollTo({ top: 0, behavior: "smooth" });
            const head = document.querySelector(".story-head");
            head?.classList.remove("is-revisited");
            void (head as HTMLElement | null)?.offsetWidth;
            head?.classList.add("is-revisited");
            timers.push(window.setTimeout(() => head?.classList.remove("is-revisited"), 2800));
            return;
          }
          // Passage: scroll to it, mark it strongly and label it
          const range = findRange(container, clip.quote);
          if (!range || !scroller) return;
          if (supportsHighlights()) CSS.highlights.set("clipping-active", new Highlight(range));
          const r = range.getBoundingClientRect();
          const c = container.getBoundingClientRect();
          setTag({ top: r.top - c.top, left: Math.max(0, r.left - c.left), date: dayMonth(clip.clippedAt), container });
          scroller.scrollBy({ top: r.top - scroller.getBoundingClientRect().top - scroller.clientHeight * 0.3, behavior: "smooth" });
          timers.push(
            window.setTimeout(() => {
              if (supportsHighlights()) CSS.highlights.delete("clipping-active");
              setTag(null);
            }, 6000),
          );
        }, 350),
      );
    };
    reveal();
    window.addEventListener(OPEN_EVENT, reveal);
    return () => {
      window.removeEventListener(OPEN_EVENT, reveal);
      timers.forEach(clearTimeout);
    };
  }, [containerId, storyId]);

  return tag
    ? createPortal(
        <span className="clip-tag" style={{ top: tag.top, left: tag.left }} role="status">
          ✂ Your clipping · {tag.date}
        </span>,
        tag.container,
      )
    : null;
}
