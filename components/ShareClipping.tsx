"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const MIN_CHARS = 12;
const MAX_CHARS = 320;
const W = 1080;
const H = 1350;

interface Props {
  /** Element id of the text readers can clip from. */
  containerId: string;
  title: string;
  path: string;
}

/**
 * Share a clipping: select a passage in the story and a small "Share as
 * clipping" button appears beside it. It renders the passage as a newsprint
 * image (canvas, 1080 × 1350) with the story title and link, ready to save,
 * share or copy. Nothing is uploaded; the image is made in the browser.
 */
export function ShareClipping({ containerId, title, path }: Props) {
  const [anchor, setAnchor] = useState<{ x: number; y: number; text: string } | null>(null);
  const [image, setImage] = useState<{ url: string; blob: Blob; text: string } | null>(null);
  const [status, setStatus] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);

  // Show the button beside a selection made inside the story text.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const sel = document.getSelection();
        const container = document.getElementById(containerId);
        const text = sel?.toString().replace(/\s+/g, " ").trim() ?? "";
        if (!sel || sel.isCollapsed || !container || text.length < MIN_CHARS || !container.contains(sel.anchorNode) || !container.contains(sel.focusNode)) {
          setAnchor(null);
          return;
        }
        const rect = sel.getRangeAt(0).getBoundingClientRect();
        setAnchor({ x: rect.left + rect.width / 2, y: rect.top, text });
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

  // Free the previous image when it is replaced or the component unmounts.
  useEffect(() => () => void (image && URL.revokeObjectURL(image.url)), [image]);

  const make = async () => {
    if (!anchor) return;
    const text = anchor.text.length > MAX_CHARS ? `${anchor.text.slice(0, MAX_CHARS).replace(/\s+\S*$/, "")}…` : anchor.text;
    const blob = await renderClipping({ text, title, url: `${location.host}${path}` });
    if (!blob) return;
    setImage({ url: URL.createObjectURL(blob), blob, text });
    setStatus("");
    dialog.current?.showModal();
  };

  const fileName = `clipping-${path.split("/").pop() || "story"}.png`;
  const canShareFile = () => {
    if (!image || typeof navigator.canShare !== "function") return false;
    return navigator.canShare({ files: [new File([image.blob], fileName, { type: "image/png" })] });
  };

  const share = async () => {
    if (!image) return;
    try {
      await navigator.share({ files: [new File([image.blob], fileName, { type: "image/png" })], title, text: `${title} — Beyond the Ordinary` });
    } catch {
      /* the reader cancelled */
    }
  };

  const copy = async () => {
    if (!image) return;
    try {
      await navigator.clipboard.writeText(`“${image.text}” — ${title}, Beyond the Ordinary ${location.origin}${path}`);
      setStatus("Quote and link copied.");
    } catch {
      setStatus("Couldn't copy here. Select and copy the text instead.");
    }
  };

  return (
    <>
      {anchor
        ? createPortal(
            <button
              type="button"
              className="share-chip"
              style={{ left: anchor.x, top: anchor.y }}
              // Keep the selection when the button is pressed.
              onMouseDown={(e) => e.preventDefault()}
              onClick={make}
            >
              ✂ Share as clipping
            </button>,
            document.body,
          )
        : null}
      <dialog ref={dialog} className="share-dialog" aria-labelledby="share-title" onClose={() => setStatus("")}>
        <div className="share-dialog__head">
          <h2 id="share-title">Your clipping</h2>
          <button type="button" className="clippings__close" onClick={() => dialog.current?.close()} aria-label="Close">
            ×
          </button>
        </div>
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element -- a local blob URL, not an optimisable asset
          <img className="share-dialog__img" src={image.url} alt={`Newsprint clipping of the passage: “${image.text}” from ${title}`} />
        ) : null}
        <div className="share-dialog__actions">
          {image ? (
            <a className="btn" href={image.url} download={fileName}>
              Download image
            </a>
          ) : null}
          {image && canShareFile() ? (
            <button type="button" className="btn btn--ghost" onClick={share}>
              Share…
            </button>
          ) : null}
          <button type="button" className="btn btn--ghost" onClick={copy}>
            Copy quote &amp; link
          </button>
        </div>
        <p className="share-dialog__status" role="status">
          {status}
        </p>
      </dialog>
    </>
  );
}

/* ---------- Drawing the clipping ---------- */

/** Reads a next/font family list from its CSS variable, e.g. --font-pt-serif. */
function family(variable: string, fallback: string) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  return v || fallback;
}

function wrap(ctx: CanvasRenderingContext2D, text: string, maxWidth: number) {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(" ")) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else line = test;
  }
  if (line) lines.push(line);
  return lines;
}

async function renderClipping({ text, title, url }: { text: string; title: string; url: string }) {
  const serif = family("--font-pt-serif", "Georgia, serif");
  const display = family("--font-zen-old-mincho", "Georgia, serif");
  const plate = family("--font-playfair", "Georgia, serif");
  const mono = family("--font-plex-mono", "monospace");
  const brush = family("--font-yuji", "serif");
  await Promise.all([
    document.fonts.load(`italic 52px ${serif}`, text),
    document.fonts.load(`900 44px ${display}`, `${title}“日常`),
    document.fonts.load(`900 64px ${plate}`, "BEYOND THE ORDINARY"),
    document.fonts.load(`22px ${mono}`, url),
    document.fonts.load(`30px ${brush}`, "日常の向こう側"),
  ]).catch(() => undefined);

  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  // Newsprint with a little grain
  ctx.fillStyle = "#ecebe3";
  ctx.fillRect(0, 0, W, H);
  const noise = document.createElement("canvas");
  noise.width = noise.height = 160;
  const nctx = noise.getContext("2d")!;
  const img = nctx.createImageData(160, 160);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = Math.random() * 255;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
    img.data[i + 3] = 18;
  }
  nctx.putImageData(img, 0, 0);
  ctx.fillStyle = ctx.createPattern(noise, "repeat")!;
  ctx.fillRect(0, 0, W, H);

  // Dashed cut line around the clipping
  ctx.strokeStyle = "#161513";
  ctx.lineWidth = 2;
  ctx.setLineDash([14, 10]);
  ctx.strokeRect(36, 36, W - 72, H - 72);
  ctx.setLineDash([]);
  ctx.font = `34px ${serif}`;
  ctx.fillStyle = "#161513";
  ctx.fillText("✂", 60, 50);

  // Masthead
  ctx.textAlign = "center";
  ctx.font = `900 60px ${plate}`;
  ctx.fillText("BEYOND THE ORDINARY", W / 2, 160);
  ctx.font = `30px ${brush}`;
  ctx.fillText("日常の向こう側", W / 2, 208);
  ctx.fillRect(100, 236, W - 200, 3);
  ctx.fillRect(100, 244, W - 200, 1);

  // The passage
  ctx.textAlign = "left";
  const x = 120;
  const maxW = W - 240;
  let size = 52;
  let lines: string[] = [];
  for (; size >= 34; size -= 2) {
    ctx.font = `italic ${size}px ${serif}`;
    lines = wrap(ctx, text, maxW);
    if (lines.length * size * 1.42 <= 600) break;
  }
  // Centre the passage between the masthead and the story title
  const blockH = lines.length * size * 1.42;
  let y = 330 + Math.max(0, (640 - blockH) / 2) + size;
  ctx.fillStyle = "#b5402a";
  ctx.font = `900 140px ${display}`;
  ctx.fillText("“", x - 18, y - size * 0.35);
  ctx.fillStyle = "#161513";
  ctx.font = `italic ${size}px ${serif}`;
  for (const line of lines) {
    ctx.fillText(line, x, y);
    y += size * 1.42;
  }

  // Story title and link
  y = 1020;
  ctx.fillRect(x, y, maxW, 1);
  ctx.font = `22px ${mono}`;
  ctx.fillStyle = "#5c5a53";
  ctx.fillText("FROM THE STORY", x, y + 46);
  ctx.fillStyle = "#161513";
  ctx.font = `900 44px ${display}`;
  const titleLines = wrap(ctx, title, maxW - 150).slice(0, 2);
  titleLines.forEach((l, i) => ctx.fillText(l, x, y + 104 + i * 52));
  ctx.font = `22px ${mono}`;
  ctx.fillStyle = "#5c5a53";
  ctx.fillText(url.toUpperCase(), x, H - 96);

  // Vermilion seal: 日常, from the site's name 日常の向こう側, set vertically
  ctx.save();
  ctx.translate(W - 170, H - 190);
  ctx.rotate(-0.12);
  ctx.strokeStyle = "#b5402a";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(0, 0, 62, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = "#b5402a";
  ctx.textAlign = "center";
  ctx.font = `900 40px ${display}`;
  ctx.fillText("日", 0, -6);
  ctx.fillText("常", 0, 38);
  ctx.restore();

  return new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
}
