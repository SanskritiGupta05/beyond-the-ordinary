"use client";

import { useEffect, useRef, useState } from "react";
import { renderClippingImage } from "@/lib/clippingImage";
import { addClipping, removeClipping, useClippings, type Clipping } from "@/lib/clippings";
import { ClippingSheet } from "./ClippingSheet";

const CUT_MS = 900;

/**
 * "Clip this story": scissors run along a dashed cut line around the story
 * header, the clipping comes out of the page as a card with ways to share it,
 * and on close it drops into the Clippings drawer in the dock (it is saved as
 * soon as it is cut). Once clipped, the button reopens the clipping to share.
 */
export function ClipButton({ clip, dek, kicker }: { clip: Omit<Clipping, "clippedAt" | "quote">; dek: string; kicker: string }) {
  const clipped = useClippings().some((c) => c.id === clip.id);
  const [cutting, setCutting] = useState(false);
  const [sheet, setSheet] = useState<{ origin: DOMRect | null } | null>(null);
  const [image, setImage] = useState<{ url: string; blob: Blob } | null>(null);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => () => void (image && URL.revokeObjectURL(image.url)), [image]);

  const draw = async () => {
    const blob = await renderClippingImage({ kind: "story", title: clip.title, text: dek, kicker, url: `${location.host}${clip.href}` });
    if (blob) setImage({ url: URL.createObjectURL(blob), blob });
  };

  const openSheet = (target: HTMLElement | null | undefined) => {
    setSheet({ origin: target?.getBoundingClientRect() ?? null });
    if (!image) void draw();
  };

  const onClick = () => {
    if (cutting) return;
    const target = ref.current?.closest<HTMLElement>(".story-head");
    if (clipped) {
      openSheet(target);
      return;
    }
    addClipping(clip);
    void draw();
    if (!target || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSheet({ origin: null });
      return;
    }
    setCutting(true);
    target.classList.add("is-cutting");
    window.setTimeout(() => {
      target.classList.remove("is-cutting");
      setCutting(false);
      setSheet({ origin: target.getBoundingClientRect() });
    }, CUT_MS);
  };

  return (
    <div className="clip-row">
      <button ref={ref} type="button" className="clip-btn" aria-pressed={clipped} onClick={onClick}>
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="4" cy="12" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="12" cy="12" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.3" />
          <path d="M5.6 10.4 12 1.5M10.4 10.4 4 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        {clipped ? "Clipped · share" : "Clip this story"}
      </button>
      {clipped ? (
        <button type="button" className="clip-remove" onClick={() => removeClipping(clip.id)}>
          Remove from clippings
        </button>
      ) : null}
      {/* The cut line and scissors, shown around the header while cutting */}
      <span className="cut-line" aria-hidden="true">
        <span className="cut-line__scissors">✂</span>
      </span>
      <ClippingSheet
        open={!!sheet}
        image={image}
        title={clip.title}
        shareText={dek}
        path={clip.href}
        origin={sheet?.origin ?? null}
        onClose={() => setSheet(null)}
      />
    </div>
  );
}
