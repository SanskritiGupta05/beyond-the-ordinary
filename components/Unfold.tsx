"use client";

import { useEffect } from "react";
import { playRustle } from "@/lib/paperSound";

/** Session key: the paper unfolds once per visit, not on every reload or page turn. */
export const UNFOLD_KEY = "bto-unfolded";

/**
 * Runs before first paint (inlined in <head>), so the page never flashes open
 * and then folds. It marks <html> as folded unless this visit has already seen
 * the intro or the reader prefers reduced motion (add ?unfold to a URL to see
 * it again). A timer unfolds the page anyway if the animation below has not
 * started within six seconds.
 */
export const unfoldBootScript = `try{if((/[?&]unfold([=&]|$)/.test(location.search)||!sessionStorage.getItem("${UNFOLD_KEY}"))&&!matchMedia("(prefers-reduced-motion: reduce)").matches){var d=document.documentElement;d.classList.add("unfolding");setTimeout(function(){if(!d.dataset.unfoldStarted)d.classList.remove("unfolding")},6000)}}catch(e){}`;

/**
 * The boot script, as the Next.js docs recommend for inline scripts: a real
 * script in the server HTML, inert text when React renders it in the browser
 * (React warns about rendering script tags on the client).
 */
export function UnfoldBootScript() {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: unfoldBootScript }}
    />
  );
}

/* Timeline, in milliseconds. The left half starts lifting as the bottom half lands. */
const DROP = 420; // the folded paper settles onto the desk
const B_START = 280, B_DUR = 900; // the bottom half turns down
const B_END = B_START + B_DUR;
const L_START = B_END + 60, L_DUR = 1250; // the left half turns over to the left
const FLUTTER = 380; // the edge settles as the paper lands
const END = L_START + L_DUR + FLUTTER;

const STRIPS = 4; // each half bends through this many strips
const BEND = 6; // extra degrees of curl per strip at mid-turn

/** Smooth start and stop: a lift, a fast turn, a soft landing. */
const smoother = (t: number) => {
  const x = Math.min(1, Math.max(0, t));
  return x * x * x * (x * (6 * x - 15) + 10);
};
const easeOut = (t: number) => 1 - Math.pow(1 - Math.min(1, Math.max(0, t)), 3);

type Face = { el: HTMLElement };
type Strip = { el: HTMLElement; inner: Face; outer: Face[]; shade: HTMLElement };
type Flap = { axis: "X" | "Y"; strips: Strip[]; root: HTMLElement };

/**
 * The opening animation. The newspaper lies on the desk folded in quarters,
 * front page inside, so what shows is the back page. It settles onto the desk;
 * the bottom half turns down, showing more of the back page; then the left half
 * lifts and turns over to the left, its underside the left of the front page,
 * uncovering the right of the front page beneath. Each half bends as it turns
 * (a chain of thin two-sided strips), light falls across it by angle, and its
 * edge flutters as it lands.
 */
export function Unfold() {
  useEffect(() => {
    let cancelled = false;
    let cleanup = () => {};
    const root = document.documentElement;
    if (!root.classList.contains("unfolding")) return;
    try {
      sessionStorage.setItem(UNFOLD_KEY, "1");
    } catch {
      /* storage unavailable: the intro may simply play again next time */
    }

    root.dataset.unfoldStarted = "true";
    const stack = document.querySelector<HTMLElement>(".stack");
    const sheet = stack?.querySelector<HTMLElement>(":scope > .sheet");
    const halfTpl = document.querySelector<HTMLElement>('.unfold-templates [data-unfold="half"]');
    const quarterTpl = document.querySelector<HTMLElement>('.unfold-templates [data-unfold="quarter"]');
    if (!stack || !sheet || !halfTpl || !quarterTpl) {
      root.classList.remove("unfolding");
      return;
    }

    // The front page, trimmed to what is on screen so each copy is light to
    // build and draw (the homepage runs far below the fold).
    const front = sheet.cloneNode(true) as HTMLElement;
    const box = sheet.getBoundingClientRect();
    const limit = box.top + box.height * 1.05;
    const prune = (orig: Element, copy: Element, depth: number) => {
      const oc = [...orig.children], cc = [...copy.children];
      for (let i = oc.length - 1; i >= 0; i--) {
        const r = oc[i].getBoundingClientRect();
        if (r.top > limit) cc[i]?.remove();
        else if (depth < 5 && r.bottom > limit && cc[i]) prune(oc[i], cc[i], depth + 1);
      }
    };
    prune(sheet, front, 0);
    front.querySelectorAll("[id]").forEach((n) => n.removeAttribute("id"));
    front.style.viewTransitionName = "none";

    const back = halfTpl;
    const cover = quarterTpl;

    // The paper's shadow on the desk: drawn once, then only stretched.
    const shadow = document.createElement("div");
    shadow.className = "unfold-shadow";
    shadow.setAttribute("aria-hidden", "true");
    stack.prepend(shadow);

    // Sheet size in layout pixels (unaffected by the stack's scale).
    const W = sheet.offsetWidth, H = sheet.offsetHeight;

    // One printed face of a strip: a strip-sized window onto a full-size page,
    // positioned so the right part of the page shows through. Keeping every layer
    // the size of its strip (not the whole sheet) is what keeps this smooth on
    // large, high-density screens.
    const face = (tpl: HTMLElement, offX: number, offY: number, flip?: string): Face => {
      const el = document.createElement("div");
      el.className = "unfold-face";
      if (flip) el.style.transform = flip; // printed on the other side, so turned over
      const page = tpl.cloneNode(true) as HTMLElement;
      page.removeAttribute("hidden");
      Object.assign(page.style, { inset: "auto", left: `${-offX}px`, top: `${-offY}px`, width: `${W}px`, height: `${H}px` });
      el.append(page);
      return { el };
    };

    // A half of the paper: a nested chain of strips running out from the fold.
    // Each strip turns about its hinge edge inside the turned space of the strip
    // before it, so the chain bends like paper. Every strip has two printed
    // faces: "inner" is up when the half lies open, "outer" while it is folded.
    const buildFlap = (axis: "X" | "Y"): Flap => {
      const strips: Strip[] = [];
      let parent: HTMLElement = stack;
      for (let k = 0; k < STRIPS; k++) {
        const el = document.createElement("div");
        el.className = "unfold-strip";
        let inner: Face, outer: Face[];
        if (axis === "Y") {
          // The left half, from the centre fold outwards; each strip overlaps the
          // next by a pixel so no seam shows at a bend. Open: the front page.
          // Folded over to the right: the back page's right half, in two parts,
          // because its lower part is folded under until the bottom half comes down.
          const w = W / 2 / STRIPS, sw = w + 1;
          const x0 = W / 2 - 1 - (k + 1) * w;
          Object.assign(el.style, { left: `${k === 0 ? x0 : -w}px`, top: "0px", width: `${sw}px`, height: `${H}px`, transformOrigin: "100% 50%" });
          inner = face(front, x0, 0);
          const top = face(back, W - (x0 + sw), 0, "rotateY(180deg)");
          const low = face(back, W - (x0 + sw), H / 2, "rotateY(180deg)");
          top.el.style.height = `${H / 2}px`;
          Object.assign(low.el.style, { top: `${H / 2}px`, height: `${H / 2}px` });
          outer = [top, low];
        } else {
          // The bottom-right quarter, from the horizontal fold downwards. Open: the
          // bottom of the back page's right half. Folded up: the outside cover.
          const h = H / 2 / STRIPS, sh = h + 1;
          const y0 = H / 2 + k * h;
          Object.assign(el.style, { left: `${k === 0 ? W / 2 : 0}px`, top: `${k === 0 ? H / 2 : h}px`, width: `${W / 2}px`, height: `${sh}px`, transformOrigin: "50% 0%" });
          inner = face(back, W / 2, y0);
          outer = [face(cover, W / 2, H - (y0 + sh), "rotateX(180deg)")];
        }
        // One light layer per strip, over whichever face is up: fewer layers for the GPU to blend.
        const shade = document.createElement("div");
        shade.className = "unfold-face__shade";
        el.append(inner.el, ...outer.map((o) => o.el), shade);
        if (k === 0) {
          el.setAttribute("aria-hidden", "true");
          el.inert = true;
        }
        parent.append(el);
        parent = el;
        strips.push({ el, inner, outer, shade });
      }
      return { axis, strips, root: strips[0].el };
    };

    const layer = (cls: string, box: { left: number; top: number; width: number; height: number }) => {
      const el = document.createElement("div");
      el.className = cls;
      el.setAttribute("aria-hidden", "true");
      Object.assign(el.style, { left: `${box.left}px`, top: `${box.top}px`, width: `${box.width}px`, height: `${box.height}px` });
      stack.append(el);
      return el;
    };

    // Painted in order: the front page (its lower right quarter shown through a
    // window once the bottom half is down), the left half's shadow on it, the
    // left half lying over it, the bottom half's shadow on that, the folded bottom.
    const win = face(front, W / 2, H / 2);
    win.el.classList.add("unfold-window");
    Object.assign(win.el.style, { left: `${W / 2}px`, top: `${H / 2}px`, width: `${W / 2}px`, height: `${H / 2}px` });
    stack.append(win.el);
    const castL = layer("unfold-cast unfold-cast--left", { left: W / 2, top: 0, width: W / 2, height: H });
    const left = buildFlap("Y");
    const castB = layer("unfold-cast unfold-cast--bottom", { left: W / 2, top: 0, width: W / 2, height: H / 2 });
    const bottom = buildFlap("X");
    const under = [...document.querySelectorAll<HTMLElement>(".stack__under")];
    const dock = document.querySelector<HTMLElement>(".dock");

    // The whole movement is worked out in advance, frame by frame, and handed to
    // the browser as native animations of transform and opacity. Those run on the
    // compositor, so the paper keeps moving smoothly even while the page is still
    // busy loading scripts, fonts and images.
    const SAMPLES = Math.ceil(END / 12);
    const tracks = new Map<HTMLElement, Keyframe[]>();
    const put = (el: HTMLElement, i: number, frame: Keyframe) => {
      let list = tracks.get(el);
      if (!list) tracks.set(el, (list = []));
      list[i] = { ...list[i], ...frame };
    };
    const lit = (tilt: number) => (0.72 * Math.pow(Math.min(1, Math.max(0, tilt)), 1.2)).toFixed(3);

    /** Pose a half at time t (ms) into sample i. Returns how far open it looks (0 folded, 1 flat). */
    const pose = (flap: Flap, i: number, t: number, start: number, dur: number) => {
      const u = smoother((t - start) / dur);
      const base = 180 * (1 - u);
      // The paper lags behind the fold: the outer strips curl most mid-turn.
      const curl = Math.pow(Math.sin(Math.PI * u), 1.4) * BEND;
      // Landing: a small damped flutter of the outer edge (only the left half,
      // which is the last to land; the bottom half hands over at once).
      const since = t - (start + dur);
      const flutter = flap === left && since > 0 ? 1.8 * Math.exp(-since / 120) * Math.sin(since / 45) : 0;
      // The bottom half and the left half's lower back are one bundle: when the
      // bottom comes down, the left half's lower back takes over from it.
      const down = t >= B_END;
      const shown = flap === bottom ? (down ? 0 : 1) : 1;
      let cum = 0;
      flap.strips.forEach((s, k) => {
        const reach = k / (STRIPS - 1);
        const rel = k === 0 ? base : (curl + flutter) * reach;
        cum += rel;
        const a = Math.abs(cum);
        put(s.el, i, { transform: `rotate${flap.axis}(${(flap.axis === "X" ? -rel : rel).toFixed(3)}deg)` });
        // Past edge-on we see the other printed side; light grazes a face as it tilts.
        const outerUp = a > 90;
        put(s.inner.el, i, { opacity: outerUp ? 0 : shown });
        s.outer.forEach((o, n) => put(o.el, i, { opacity: outerUp && (n === 0 || down) ? shown : 0 }));
        put(s.shade, i, { opacity: Number(lit(outerUp ? (180 - a) / 90 : a / 90)) * shown });
      });
      // While the half leans over the paper (past upright), it throws a shadow on
      // it: longest and darkest as it stands up, gone once it lies flat.
      const first = Math.abs(base);
      const lean = first > 90 ? Math.sin((first * Math.PI) / 180) : 0;
      const length = 0.18 + 0.82 * Math.pow(lean, 0.7);
      put(flap === left ? castL : castB, i, {
        transform: flap === left ? `scaleX(${length.toFixed(4)})` : `scaleY(${length.toFixed(4)})`,
        opacity: Math.min(1, lean * 1.25) * (u > 0 && u < 1 ? shown : 0),
      });
      return first >= 90 ? 0 : Math.cos((first * Math.PI) / 180);
    };

    for (let i = 0; i <= SAMPLES; i++) {
      const t = (END * i) / SAMPLES;
      const openB = pose(bottom, i, t, B_START, B_DUR);
      const openL = pose(left, i, t, L_START, L_DUR);
      put(win.el, i, { opacity: t >= B_END ? 1 : 0 });
      // The paper re-centres itself in one even glide over each unfold, and
      // settles onto the desk at the start.
      const glideB = smoother((t - B_START - 0.2 * B_DUR) / (0.8 * B_DUR));
      const glideL = smoother((t - L_START - 0.2 * L_DUR) / (0.8 * L_DUR));
      const drop = 1 - easeOut(t / DROP);
      const scale = (0.9 + 0.05 * glideB + 0.05 * glideL) * (1 + 0.035 * drop);
      put(stack, i, { transform: `translate(${(-25 * (1 - glideL)).toFixed(3)}%, ${(25 * (1 - glideB) - 2.5 * drop).toFixed(3)}%) scale(${scale.toFixed(4)})` });
      put(shadow, i, { transform: `scale(${(0.5 + 0.5 * openL).toFixed(4)}, ${(0.5 + 0.5 * openB).toFixed(4)})`, opacity: 0.85 + 0.15 * (1 - drop) });
    }
    // Show the first frame now, while fonts settle and the copies are drawn.
    for (const [el, frames] of tracks) Object.assign(el.style, frames[0]);

    // ?unfold=slow plays it in slow motion, for looking at it closely.
    const speed = /[?&]unfold=slow([&]|$)/.test(location.search) ? 0.15 : 1;
    const running: Animation[] = [];
    const timers: number[] = [];
    let done = false;
    const events = ["pointerdown", "keydown", "wheel", "touchstart"] as const;

    // Undo everything this run set up. The paper stays folded unless it has
    // finished opening, so React's development re-run can start it again cleanly.
    const teardown = () => {
      timers.forEach(clearTimeout);
      events.forEach((e) => window.removeEventListener(e, end));
      running.forEach((a) => a.cancel());
      for (const el of [bottom.root, left.root, castL, castB, shadow, win.el]) el.remove();
      stack.style.removeProperty("transform");
      sheet.style.removeProperty("clip-path");
    };
    function end() {
      if (done) return;
      done = true;
      teardown();
      root.classList.remove("unfolding");
      // Once the paper is open, the loose sheets beneath fan out from behind it,
      // alternately to the left and right, overshoot a little and settle into
      // the pile. They start squared up under the front page, so they are hidden.
      under
        .slice()
        .reverse() // nearest sheet first
        .forEach((el, i) => {
          const rest = getComputedStyle(el).transform;
          const dir = i % 2 === 0 ? -1 : 1;
          el.animate(
            [
              { transform: "translate(0, 0) rotate(0deg)", easing: "cubic-bezier(0.2, 0.7, 0.3, 1)" },
              { transform: `translate(${dir * 46}px, 8px) rotate(${dir * 4.5}deg)`, offset: 0.55, easing: "cubic-bezier(0.4, 0, 0.2, 1)" },
              { transform: rest === "none" ? "none" : rest },
            ],
            { duration: 820 / speed, delay: (120 + i * 140) / speed, fill: "backwards" },
          );
        });
      dock?.animate(
        [{ opacity: 0, translate: "0 16px" }, { opacity: 1, translate: "0 0" }],
        { duration: 500 / speed, delay: (120 + under.length * 140) / speed, easing: "cubic-bezier(0.2, 0.7, 0.2, 1)", fill: "backwards" },
      );
    }
    cleanup = () => {
      if (!done) teardown();
    };

    // Start once the fonts are in (so no text re-flows mid-unfold, capped so a
    // slow font never holds the paper shut) and two frames have drawn the copies.
    const nextFrame = () => new Promise<void>((r) => requestAnimationFrame(() => r()));
    const fontsIn = Promise.race([document.fonts?.ready, new Promise((r) => setTimeout(r, 1200))]);
    void fontsIn
      .then(nextFrame)
      .then(nextFrame)
      .then(() => {
        if (cancelled || done) return;
        for (const [el, frames] of tracks) {
          const a = el.animate(
            frames.map((f, i) => ({ ...f, offset: i / SAMPLES })),
            { duration: END / speed, easing: "linear", fill: "both" },
          );
          running.push(a);
        }
        // Open fully when the timeline completes (a cancelled timeline rejects: ignore it).
        running[0]?.finished.then(end, () => {});
        timers.push(window.setTimeout(playRustle, B_START / speed), window.setTimeout(playRustle, L_START / speed));
      });
    // Any click, key or scroll opens the paper at once.
    events.forEach((e) => window.addEventListener(e, end, { passive: true }));

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return null;
}
