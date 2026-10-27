/**
 * Draws a clipping as a 1080 × 1350 newsprint image on a canvas, in the
 * browser. Two layouts: a whole story (headline and dek) or a passage the
 * reader selected (a quote with the story title). Nothing is uploaded.
 */
export interface ClippingArt {
  kind: "story" | "passage";
  /** Story headline. */
  title: string;
  /** Story dek, or the selected passage. */
  text: string;
  /** Small label above a story headline, e.g. "Product design · 1971". */
  kicker?: string;
  /** Link shown on the clipping, e.g. "example.com/stories/qr-code". */
  url: string;
}

const W = 1080;
const H = 1350;
const INK = "#161513";
const MUTED = "#5c5a53";
const ACCENT = "#b5402a";

/** Reads a next/font family list from its CSS variable, e.g. --font-pt-serif. */
function family(variable: string, fallback: string) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  return v || fallback;
}

function wrap(ctx: CanvasRenderingContext2D, text: string, maxWidth: number) {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(/\s+/)) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else line = test;
  }
  if (line) lines.push(line);
  return lines;
}

/** Shrinks the font until the wrapped text fits in maxHeight; if it still doesn't fit at the smallest size, ends on "…". */
function fit(ctx: CanvasRenderingContext2D, text: string, font: (size: number) => string, maxW: number, maxH: number, from: number, to: number, leading: number) {
  let size = from;
  let lines: string[] = [];
  for (; size >= to; size -= 2) {
    ctx.font = font(size);
    lines = wrap(ctx, text, maxW);
    if (lines.length * size * leading <= maxH) return { size, lines };
  }
  size = to;
  ctx.font = font(size);
  const max = Math.max(1, Math.floor(maxH / (size * leading)));
  if (lines.length > max) {
    lines = lines.slice(0, max);
    lines[max - 1] = `${lines[max - 1].replace(/[\s,.;:—-]*\S*$/, "")}…`;
  }
  return { size, lines };
}

export async function renderClippingImage(art: ClippingArt): Promise<Blob | null> {
  const serif = family("--font-pt-serif", "Georgia, serif");
  const display = family("--font-zen-old-mincho", "Georgia, serif");
  const plate = family("--font-playfair", "Georgia, serif");
  const mono = family("--font-plex-mono", "monospace");
  const brush = family("--font-yuji", "serif");
  await Promise.all([
    document.fonts.load(`italic 52px ${serif}`, art.text),
    document.fonts.load(`900 44px ${display}`, `${art.title}“日常`),
    document.fonts.load(`900 64px ${plate}`, "BEYOND THE ORDINARY"),
    document.fonts.load(`22px ${mono}`, `${art.url}${art.kicker ?? ""}`),
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
  const nctx = noise.getContext("2d");
  if (nctx) {
    const img = nctx.createImageData(160, 160);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = Math.random() * 255;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = 18;
    }
    nctx.putImageData(img, 0, 0);
    const pattern = ctx.createPattern(noise, "repeat");
    if (pattern) {
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, W, H);
    }
  }

  // Dashed cut line, with scissors at the corner
  ctx.strokeStyle = INK;
  ctx.lineWidth = 2;
  ctx.setLineDash([14, 10]);
  ctx.strokeRect(36, 36, W - 72, H - 72);
  ctx.setLineDash([]);
  ctx.fillStyle = INK;
  ctx.font = `34px ${serif}`;
  ctx.fillText("✂", 60, 50);

  // Masthead
  ctx.textAlign = "center";
  ctx.font = `900 60px ${plate}`;
  ctx.fillText("BEYOND THE ORDINARY", W / 2, 160);
  ctx.font = `30px ${brush}`;
  ctx.fillText("日常の向こう側", W / 2, 208);
  ctx.fillRect(100, 236, W - 200, 3);
  ctx.fillRect(100, 244, W - 200, 1);
  ctx.textAlign = "left";

  const x = 120;
  const maxW = W - 240;

  if (art.kind === "story") {
    let y = 330;
    if (art.kicker) {
      ctx.font = `24px ${mono}`;
      ctx.fillStyle = MUTED;
      ctx.fillText(art.kicker.toUpperCase(), x, y);
      y += 70;
    }
    ctx.fillStyle = INK;
    const head = fit(ctx, art.title, (s) => `900 ${s}px ${display}`, maxW, 360, 88, 52, 1.08);
    for (const line of head.lines) {
      y += head.size;
      ctx.fillText(line, x, y);
      y += head.size * 0.08;
    }
    y += 50;
    ctx.fillStyle = "#3d3b36";
    const dek = fit(ctx, art.text, (s) => `italic ${s}px ${serif}`, maxW, 990 - y, 40, 26, 1.42);
    for (const line of dek.lines) {
      y += dek.size;
      ctx.fillText(line, x, y);
      y += dek.size * 0.42;
    }
  } else {
    const q = fit(ctx, art.text, (s) => `italic ${s}px ${serif}`, maxW, 660, 52, 25, 1.42);
    const blockH = q.lines.length * q.size * 1.42;
    let y = 320 + Math.max(0, (670 - blockH) / 2) + q.size;
    ctx.fillStyle = ACCENT;
    ctx.font = `900 140px ${display}`;
    ctx.fillText("“", x - 18, y - q.size * 0.35);
    ctx.fillStyle = INK;
    ctx.font = `italic ${q.size}px ${serif}`;
    for (const line of q.lines) {
      ctx.fillText(line, x, y);
      y += q.size * 1.42;
    }
  }

  // Footer: where it was clipped from, and the link
  const y = 1020;
  ctx.fillStyle = INK;
  ctx.fillRect(x, y, maxW, 1);
  ctx.font = `22px ${mono}`;
  ctx.fillStyle = MUTED;
  ctx.fillText(art.kind === "story" ? "CLIPPED FROM BEYOND THE ORDINARY" : "FROM THE STORY", x, y + 46);
  if (art.kind === "passage") {
    ctx.fillStyle = INK;
    ctx.font = `900 44px ${display}`;
    wrap(ctx, art.title, maxW - 150)
      .slice(0, 2)
      .forEach((l, i) => ctx.fillText(l, x, y + 104 + i * 52));
  }
  ctx.font = `22px ${mono}`;
  ctx.fillStyle = MUTED;
  ctx.fillText(art.url.toUpperCase(), x, H - 96);

  // Vermilion seal: 日常, from the site's name 日常の向こう側, set vertically
  ctx.save();
  ctx.translate(W - 170, H - 190);
  ctx.rotate(-0.12);
  ctx.strokeStyle = ACCENT;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(0, 0, 62, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = ACCENT;
  ctx.textAlign = "center";
  ctx.font = `900 40px ${display}`;
  ctx.fillText("日", 0, -6);
  ctx.fillText("常", 0, 38);
  ctx.restore();

  return new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
}
