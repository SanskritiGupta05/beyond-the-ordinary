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
const L_START = B_START + B_DUR, L_DUR = 1250; // the left half turns over to the left
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

type Face = { el: HTMLElement; shade: HTMLElement };
type Strip = { el: HTMLElement; inner: Face; outer: Face; band: [number, number] };
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
      const shade = document.createElement("div");
      shade.className = "unfold-face__shade";
      el.append(page, shade);
      return { el, shade };
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
        let inner: Face, outer: Face, band: [number, number];
        if (axis === "Y") {
          // The left half, from the centre fold outwards; each strip overlaps the
          // next by a pixel so no seam shows at a bend. Open: the front page.
          // Folded over to the right: the back page's right half.
          const w = W / 2 / STRIPS, sw = w + 1;
          const x0 = W / 2 - 1 - (k + 1) * w;
          band = [x0, x0 + sw];
          Object.assign(el.style, { left: `${k === 0 ? x0 : -w}px`, top: "0px", width: `${sw}px`, height: `${H}px`, transformOrigin: "100% 50%" });
          inner = face(front, x0, 0);
          outer = face(back, W - (x0 + sw), 0, "rotateY(180deg)");
          outer.el.style.height = `${H / 2}px`; // the bottom of this side is folded under until the bottom half comes down
        } else {
          // The bottom-right quarter, from the horizontal fold downwards. Open: the
          // bottom of the back page's right half. Folded up: the outside cover.
          const h = H / 2 / STRIPS, sh = h + 1;
          const y0 = H / 2 + k * h;
          band = [y0, y0 + sh];
          Object.assign(el.style, { left: `${k === 0 ? W / 2 : 0}px`, top: `${k === 0 ? H / 2 : h}px`, width: `${W / 2}px`, height: `${sh}px`, transformOrigin: "50% 0%" });
          inner = face(back, W / 2, y0);
          outer = face(cover, W / 2, H - (y0 + sh), "rotateX(180deg)");
        }
        el.append(inner.el, outer.el);
        if (k === 0) {
          el.setAttribute("aria-hidden", "true");
          el.inert = true;
        }
        parent.append(el);
        parent = el;
        strips.push({ el, inner, outer, band });
      }
      return { axis, strips, root: strips[0].el };
    };

    // A cast shadow: drawn once at full length, then only stretched and faded.
    const cast = (cls: string) => {
      const el = document.createElement("div");
      el.className = `unfold-cast ${cls}`;
      el.setAttribute("aria-hidden", "true");
      Object.assign(el.style, cls === "unfold-cast--left"
        ? { left: `${W / 2}px`, top: "0px", width: `${W / 2}px`, height: `${H}px` }
        : { left: `${W / 2}px`, top: "0px", width: `${W / 2}px`, height: `${H / 2}px` });
      stack.append(el);
      return el;
    };

    // Painted in order: the front page, the left half's shadow on it, the left
    // half lying over it, the bottom half's shadow on that, the folded bottom on top.
    const castL = cast("unfold-cast--left");
    const left = buildFlap("Y");
    const castB = cast("unfold-cast--bottom");
    const bottom = buildFlap("X");
    const under = [...document.querySelectorAll<HTMLElement>(".stack__under")];
    const dock = document.querySelector<HTMLElement>(".dock");

    /** Pose a half. Returns how far open it looks (0 folded, 1 flat). */
    const pose = (flap: Flap, t: number, start: number, dur: number) => {
      const u = smoother((t - start) / dur);
      const base = 180 * (1 - u);
      // The paper lags behind the fold: the outer strips curl most mid-turn.
      const curl = Math.pow(Math.sin(Math.PI * u), 1.4) * BEND;
      // Landing: a small damped flutter of the outer edge.
      const since = t - (start + dur);
      const flutter = since > 0 ? 1.8 * Math.exp(-since / 120) * Math.sin(since / 45) : 0;
      let cum = 0;
      flap.strips.forEach((s, k) => {
        const reach = k / (STRIPS - 1);
        const rel = k === 0 ? base : (curl + flutter) * reach;
        cum += rel;
        const a = Math.abs(cum);
        s.el.style.transform = `rotate${flap.axis}(${(flap.axis === "X" ? -rel : rel).toFixed(3)}deg)`;
        // Past edge-on we see the other printed side. Hidden faces stay drawn,
        // only transparent, so nothing new has to be painted mid-turn.
        const outerUp = a > 90;
        s.inner.el.style.opacity = outerUp ? "0" : "1";
        s.outer.el.style.opacity = outerUp ? "1" : "0";
        // Light grazes a face as it tilts towards edge-on.
        const tilt = outerUp ? (180 - a) / 90 : a / 90;
        (outerUp ? s.outer : s.inner).shade.style.opacity = (0.72 * Math.pow(Math.min(1, tilt), 1.2)).toFixed(3);
      });
      // While the half leans over the paper (past upright), it throws a shadow on
      // it: longest and darkest as it stands up, gone once it lies flat.
      const first = Math.abs(base);
      const lean = first > 90 ? Math.sin((first * Math.PI) / 180) : 0;
      const shadowEl = flap === left ? castL : castB;
      const length = 0.18 + 0.82 * Math.pow(lean, 0.7);
      shadowEl.style.transform = flap === left ? `scaleX(${length.toFixed(4)})` : `scaleY(${length.toFixed(4)})`;
      shadowEl.style.opacity = (Math.min(1, lean * 1.25) * (u > 0 && u < 1 ? 1 : 0)).toFixed(3);
      return first >= 90 ? 0 : Math.cos((first * Math.PI) / 180);
    };

    // ?unfold=slow plays it in slow motion, for looking at it closely.
    const speed = /[?&]unfold=slow([&]|$)/.test(location.search) ? 0.15 : 1;
    let raf = 0;
    let t0 = 0;
    let warm = 2; // let the first frames draw the strips before the clock starts
    let rustled = 0;
    let bottomDown = false;
    const frame = (now: number) => {
      if (warm > 0) {
        warm--;
        raf = requestAnimationFrame(frame);
        return;
      }
      if (!t0) t0 = now;
      const t = (now - t0) * speed;
      const openB = pose(bottom, t, B_START, B_DUR);
      const openL = pose(left, t, L_START, L_DUR);
      // Once the bottom half is down (just before the left half lifts), the left
      // half is whole again: its folded back covers the full height, and the front
      // page's right half lies under it.
      if (!bottomDown && t >= B_START + B_DUR) {
        bottomDown = true;
        bottom.root.remove();
        castB.remove();
        sheet.style.clipPath = "inset(0 0 0 50%)";
        left.strips.forEach(({ outer }) => (outer.el.style.height = `${H}px`));
      }
      // The paper re-centres itself in one even glide over each unfold (not in a
      // lurch once a half passes upright), and settles onto the desk at the start.
      const glideB = smoother((t - B_START - 0.2 * B_DUR) / (0.8 * B_DUR));
      const glideL = smoother((t - L_START - 0.2 * L_DUR) / (0.8 * L_DUR));
      const drop = 1 - easeOut(t / DROP);
      const scale = (0.9 + 0.05 * glideB + 0.05 * glideL) * (1 + 0.035 * drop);
      stack.style.transform = `translate(${(-25 * (1 - glideL)).toFixed(3)}%, ${(25 * (1 - glideB) - 2.5 * drop).toFixed(3)}%) scale(${scale.toFixed(4)})`;
      shadow.style.transform = `scale(${(0.5 + 0.5 * openL).toFixed(4)}, ${(0.5 + 0.5 * openB).toFixed(4)})`;
      shadow.style.opacity = (0.85 + 0.15 * (1 - drop)).toFixed(3);
      if (rustled === 0 && t >= B_START) { rustled = 1; playRustle(); }
      if (rustled === 1 && t >= L_START) { rustled = 2; playRustle(); }
      if (t >= END) end();
      else raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    let done = false;
    const events = ["pointerdown", "keydown", "wheel", "touchstart"] as const;
    // Undo everything this run set up. The paper stays folded unless it has
    // finished opening, so React's development re-run can start it again cleanly.
    const teardown = () => {
      cancelAnimationFrame(raf);
      events.forEach((e) => window.removeEventListener(e, end));
      bottom.root.remove();
      left.root.remove();
      castL.remove();
      castB.remove();
      shadow.remove();
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
    // Any click, key or scroll opens the paper at once.
    events.forEach((e) => window.addEventListener(e, end, { passive: true }));

    return () => {
      if (!done) teardown();
    };
  }, []);

  return null;
}
