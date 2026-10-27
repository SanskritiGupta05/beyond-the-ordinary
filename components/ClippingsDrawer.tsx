"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { openClipping, removeClipping, useClippings } from "@/lib/clippings";

/** The reader's saved clippings, opened from the dock. */
export function ClippingsDrawer({ onClose }: { onClose: () => void }) {
  const clippings = useClippings();
  const heading = useRef<HTMLHeadingElement>(null);
  // Keep the latest onClose without re-running the open effect (and re-grabbing focus) on each render.
  const close = useRef(onClose);
  useEffect(() => {
    close.current = onClose;
  });

  useEffect(() => {
    heading.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close.current();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="clippings" id="clippings-drawer" role="dialog" aria-labelledby="clippings-title">
      <div className="clippings__head">
        <h2 id="clippings-title" ref={heading} tabIndex={-1}>
          Clippings <span lang="ja">切り抜き</span>
        </h2>
        <button type="button" className="clippings__close" onClick={onClose} aria-label="Close clippings">
          ×
        </button>
      </div>
      {clippings.length ? (
        <ul className="clippings__list">
          {clippings.map((c, i) => (
            <li key={c.id} className="clipping" style={{ "--r": `${[-1.2, 0.8, -0.5, 1.1][i % 4]}deg` } as React.CSSProperties}>
              <Link
                href={c.href}
                onClick={() => {
                  openClipping(c.id);
                  onClose();
                }}
              >
                <span className="clipping__meta">
                  {c.category} · clipped {new Date(c.clippedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                </span>
                {c.subjectJa ? (
                  <span className="clipping__ja" lang="ja">
                    {c.subjectJa}
                  </span>
                ) : null}
                {c.quote ? <span className="clipping__quote">“{c.quote}”</span> : null}
                <span className="clipping__title">{c.title}</span>
              </Link>
              <button type="button" className="clipping__remove" onClick={() => removeClipping(c.id)} aria-label={`Remove ${c.quote ? "passage from " : ""}${c.subject} from clippings`}>
                ×
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="clippings__empty">
          No clippings yet. Use <strong>✂ Clip this story</strong> at the top of any story to cut it out and keep it here.
        </p>
      )}
      <p className="clippings__foot">Saved in this browser only.</p>
    </div>
  );
}
