"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { renderClippingImage } from "@/lib/clippingImage";
import { addClipping, type Clipping } from "@/lib/clippings";
import { ClippingSheet } from "./ClippingSheet";

const MIN_CHARS = 12;
const MAX_CHARS = 1200;

interface Props {
  /** Element id of the text readers can clip from. */
  containerId: string;
  /** The story the passage belongs to. */
  clip: Omit<Clipping, "clippedAt" | "quote">;
}

/** Labels and citation numbers that aren't part of the passage itself. */
export const NOT_PASSAGE = '[aria-hidden="true"], .callout__label, .cite, .cite__note';

/** The selected text without labels or citation numbers, with paragraph breaks as spaces. */
function passageText(range: Range) {
  const frag = range.cloneContents();
  frag.querySelectorAll(NOT_PASSAGE).forEach((n) => n.remove());
  frag.querySelectorAll("p, li, h1, h2, h3, h4, blockquote, figcaption, dd, dt").forEach((el) => el.append(" "));
  return (frag.textContent ?? "").replace(/\s+/g, " ").trim();
}

/** Short stable id for a passage, so clipping the same text twice doesn't duplicate it. */
const hash = (s: string) => [...s].reduce((h, c) => (Math.imul(31, h) + c.charCodeAt(0)) | 0, 0).toString(36);

/**
 * Clip a passage: select text in the story and a "Clip & share" button appears
 * beside it. The passage is saved to Clippings and comes out of the page as a
 * newsprint image with ways to share it; closing drops it into the dock.
 */
export function ShareClipping({ containerId, clip }: Props) {
  const [anchor, setAnchor] = useState<{ rect: DOMRect; text: string } | null>(null);
  const [sheet, setSheet] = useState<{ origin: DOMRect; text: string } | null>(null);
  const [image, setImage] = useState<{ url: string; blob: Blob } | null>(null);

  // Show the button beside a selection made inside the story text.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const sel = document.getSelection();
        const container = document.getElementById(containerId);
        const text = sel && !sel.isCollapsed && sel.rangeCount ? passageText(sel.getRangeAt(0)) : "";
        if (!sel || sel.isCollapsed || !container || text.length < MIN_CHARS || !container.contains(sel.anchorNode) || !container.contains(sel.focusNode)) {
          setAnchor(null);
          return;
        }
        setAnchor({ rect: sel.getRangeAt(0).getBoundingClientRect(), text });
      });
    };
    document.addEventListener("selectionchange", update);
    const scroller = document.getElementById("sheet-scroll");
    scroller?.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("selectionchange", update);
      scroller?.removeEventListener("scroll", update);
    };
  }, [containerId]);

  useEffect(() => () => void (image && URL.revokeObjectURL(image.url)), [image]);

  const make = async () => {
    if (!anchor) return;
    const text = anchor.text.length > MAX_CHARS ? `${anchor.text.slice(0, MAX_CHARS).replace(/\s+\S*$/, "")}…` : anchor.text;
    addClipping({ ...clip, id: `${clip.id}#${hash(text)}`, quote: text });
    setImage(null);
    setSheet({ origin: anchor.rect, text });
    document.getSelection()?.removeAllRanges();
    const blob = await renderClippingImage({ kind: "passage", title: clip.title, text, url: `${location.host}${clip.href}` });
    if (blob) setImage({ url: URL.createObjectURL(blob), blob });
  };

  return (
    <>
      {anchor
        ? createPortal(
            <button
              type="button"
              className="share-chip"
              style={{ left: anchor.rect.left + anchor.rect.width / 2, top: anchor.rect.top }}
              // Keep the selection when the button is pressed.
              onMouseDown={(e) => e.preventDefault()}
              onClick={make}
            >
              ✂ Clip &amp; share
            </button>,
            document.body,
          )
        : null}
      <ClippingSheet
        open={!!sheet}
        image={image}
        title={clip.title}
        shareText={sheet?.text ?? ""}
        path={clip.href}
        origin={sheet?.origin ?? null}
        onClose={() => setSheet(null)}
      />
    </>
  );
}
