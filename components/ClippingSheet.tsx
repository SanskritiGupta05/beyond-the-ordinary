"use client";

import { useEffect, useRef, useState } from "react";

/** Fired when a closed clipping lands in the dock, so the Clippings badge can bump. */
export const CLIP_LANDED = "bto-clip-landed";

interface Props {
  open: boolean;
  /** The rendered clipping image; null while it is being drawn. */
  image: { url: string; blob: Blob } | null;
  /** Story headline, used for share text and file names. */
  title: string;
  /** Text for share links and copying (the passage, or the story dek). */
  shareText: string;
  /** Path of the story, e.g. /stories/qr-code. */
  path: string;
  /** Where on screen the clipping was cut from; the card pops out of here. */
  origin: DOMRect | null;
  onClose: () => void;
}

const reduceMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * The cut-out clipping: it comes out of the page as a card, shows the clipping
 * image with ways to share it, and on close shrinks and drops into the
 * Clippings button in the dock (where it is already saved).
 */
export function ClippingSheet({ open, image, title, shareText, path, origin, onClose }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState("");
  const closing = useRef(false);

  // Open: show the dialog and pop it out from where it was cut.
  useEffect(() => {
    const d = dialog.current;
    if (!open || !d || d.open) return;
    closing.current = false;
    d.showModal();
    if (!origin || reduceMotion()) return;
    const end = d.getBoundingClientRect();
    const dx = origin.left + origin.width / 2 - (end.left + end.width / 2);
    const dy = origin.top + origin.height / 2 - (end.top + end.height / 2);
    const s = Math.min(1, Math.max(0.25, origin.width / end.width));
    d.animate(
      [
        { transform: `translate(${dx}px, ${dy}px) scale(${s}) rotate(-1.5deg)`, opacity: 0.4 },
        { transform: "translate(0, -18px) scale(1.02) rotate(1.2deg)", opacity: 1, offset: 0.7 },
        { transform: "none", opacity: 1 },
      ],
      { duration: 700, easing: "cubic-bezier(0.2, 0.8, 0.25, 1)" },
    );
  }, [open, origin]);

  // Close: shrink and drop into the dock's Clippings button.
  const close = async () => {
    const d = dialog.current;
    if (!d || closing.current) return;
    closing.current = true;
    const target = document.querySelector(".dock__clips")?.getBoundingClientRect();
    if (target && !reduceMotion()) {
      const start = d.getBoundingClientRect();
      const dx = target.left + target.width / 2 - (start.left + start.width / 2);
      const dy = target.top + target.height / 2 - (start.top + start.height / 2);
      await d.animate(
        [
          { transform: "none", opacity: 1 },
          { transform: "translate(0, -14px) rotate(-2deg) scale(0.96)", opacity: 1, offset: 0.25 },
          { transform: `translate(${dx}px, ${dy}px) rotate(8deg) scale(0.05)`, opacity: 0.3 },
        ],
        { duration: 650, easing: "cubic-bezier(0.55, 0, 0.75, 0.3)", fill: "forwards" },
      ).finished.catch(() => undefined);
    }
    d.getAnimations().forEach((a) => a.cancel());
    d.close();
    setStatus("");
    window.dispatchEvent(new Event(CLIP_LANDED));
    onClose();
  };

  const file = () => (image ? new File([image.blob], `clipping-${path.split("/").pop() || "story"}.png`, { type: "image/png" }) : null);
  const link = () => `${location.origin}${path}`;
  const canShareFile = () => {
    const f = file();
    return !!f && typeof navigator.canShare === "function" && navigator.canShare({ files: [f] });
  };
  const canCopyImage = () => typeof ClipboardItem !== "undefined" && !!navigator.clipboard?.write;

  const share = async () => {
    const f = file();
    if (!f) return;
    try {
      await navigator.share({ files: [f], title, text: `${title} — Beyond the Ordinary` });
    } catch {
      /* the reader cancelled */
    }
  };
  const copyImage = async () => {
    if (!image) return;
    try {
      await navigator.clipboard.write([new ClipboardItem({ "image/png": image.blob })]);
      setStatus("Image copied. Paste it into a post or message.");
    } catch {
      setStatus("Couldn't copy the image here. Try Download instead.");
    }
  };
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(`“${shareText}” — ${title}, Beyond the Ordinary ${link()}`);
      setStatus("Quote and link copied.");
    } catch {
      setStatus("Couldn't copy here.");
    }
  };

  const enc = encodeURIComponent;
  const blurb = shareText.length > 200 ? `${shareText.slice(0, 200).replace(/\s+\S*$/, "")}…` : shareText;
  const links = () => {
    const url = link();
    const text = `“${blurb}” — ${title}`;
    return [
      { label: "X", href: `https://twitter.com/intent/tweet?text=${enc(text)}&url=${enc(url)}` },
      { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}` },
      { label: "WhatsApp", href: `https://wa.me/?text=${enc(`${text} ${url}`)}` },
      { label: "Email", href: `mailto:?subject=${enc(`${title} — Beyond the Ordinary`)}&body=${enc(`${text}\n\n${url}`)}` },
    ];
  };

  return (
    <dialog
      ref={dialog}
      className="clip-sheet"
      aria-labelledby="clip-sheet-title"
      onCancel={(e) => {
        e.preventDefault();
        void close();
      }}
    >
      <div className="clip-sheet__head">
        <h2 id="clip-sheet-title">
          Your clipping <span lang="ja">切り抜き</span>
        </h2>
        <button type="button" className="clippings__close" onClick={close} aria-label="Close and keep in Clippings">
          ×
        </button>
      </div>
      <div className="clip-sheet__card">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element -- a local blob URL, not an optimisable asset
          <img src={image.url} alt={`Newsprint clipping: ${title}`} />
        ) : (
          <p className="clip-sheet__wait">Cutting…</p>
        )}
      </div>
      {open && image ? (
        <>
          <div className="clip-sheet__actions">
            {canShareFile() ? (
              <button type="button" className="btn" onClick={share}>
                Share…
              </button>
            ) : null}
            {canCopyImage() ? (
              <button type="button" className={canShareFile() ? "btn btn--ghost" : "btn"} onClick={copyImage}>
                Copy image
              </button>
            ) : null}
            <a className="btn btn--ghost" href={image.url} download={file()?.name}>
              Download
            </a>
          </div>
          <p className="clip-sheet__to">
            <span>Share to</span>
            {links().map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ))}
            <button type="button" onClick={copyLink}>
              Copy link
            </button>
          </p>
        </>
      ) : null}
      <p className="clip-sheet__status" role="status">
        {status}
      </p>
      <button type="button" className="clip-sheet__keep" onClick={close}>
        Keep in Clippings ↓
      </button>
    </dialog>
  );
}
