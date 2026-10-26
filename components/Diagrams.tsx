import type { DiagramId } from "@/lib/types";

/*
 * Editorial diagrams. These explain design decisions; they are not
 * reproductions of the original works and are labelled as such wherever shown.
 */

const INK = "var(--ink)";
const PAPER = "var(--paper)";
const ACC = "var(--accent)";
const MUTE = "var(--ink-3)";
const YEL = "var(--ochre)";
const label = { fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.06em", fill: MUTE } as const;
const big = { fontFamily: "var(--font-display)", fontSize: 18, fill: INK } as const;

function TactileBlocks() {
  const dots = [];
  for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) dots.push(<circle key={`${r}-${c}`} cx={300 + 22 + c * 29} cy={42 + r * 29} r={8} fill={INK} opacity={0.85} />);
  return (
    <svg viewBox="0 0 520 260" role="img" aria-labelledby="dg-t-title">
      <title id="dg-t-title">Two square blocks: one with four long parallel bars for guiding, one with a five by five grid of dots for warning.</title>
      <rect x="40" y="20" width="160" height="160" fill={YEL} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={56 + i * 38} y="32" width="14" height="136" rx="7" fill={INK} opacity={0.85} />
      ))}
      <rect x="300" y="20" width="160" height="160" fill={YEL} />
      {dots}
      <path d="M120 230 V195 M112 203 L120 193 L128 203" stroke={ACC} strokeWidth="2" fill="none" />
      <text x="40" y="215" style={big}>Guide</text>
      <text x="40" y="250" style={label}>BARS · FOLLOW THIS WAY</text>
      <text x="300" y="215" style={big}>Warn</text>
      <text x="300" y="250" style={label}>DOTS · STOP, HAZARD AHEAD</text>
    </svg>
  );
}

function QrFinder() {
  const m = 20; // module size
  const ox = 40, oy = 30;
  return (
    <svg viewBox="0 0 520 270" role="img" aria-labelledby="dg-q-title">
      <title id="dg-q-title">A seven-by-seven finder pattern: a dark outer ring, a light ring, and a dark three-by-three centre. A line through the middle crosses dark, light, dark, light, dark in the ratio 1 to 1 to 3 to 1 to 1.</title>
      <rect x={ox} y={oy} width={7 * m} height={7 * m} fill={INK} />
      <rect x={ox + m} y={oy + m} width={5 * m} height={5 * m} fill={PAPER} />
      <rect x={ox + 2 * m} y={oy + 2 * m} width={3 * m} height={3 * m} fill={INK} />
      <line x1={ox - 20} y1={oy + 3.5 * m} x2={ox + 7 * m + 20} y2={oy + 3.5 * m} stroke={ACC} strokeWidth="2" strokeDasharray="5 4" />
      <line x1={ox - 10} y1={oy - 10} x2={ox + 7 * m + 10} y2={oy + 7 * m + 10} stroke={ACC} strokeWidth="1.5" strokeDasharray="2 4" opacity={0.7} />
      {[
        [0, 1, "1"],
        [1, 1, "1"],
        [2, 3, "3"],
        [5, 1, "1"],
        [6, 1, "1"],
      ].map(([start, w, t]) => (
        <g key={String(start)}>
          <line x1={ox + Number(start) * m + 2} y1={oy + 7 * m + 18} x2={ox + (Number(start) + Number(w)) * m - 2} y2={oy + 7 * m + 18} stroke={INK} strokeWidth="1" />
          <text x={ox + (Number(start) + Number(w) / 2) * m} y={oy + 7 * m + 36} textAnchor="middle" style={{ ...label, fill: INK, fontSize: 13 }}>
            {t}
          </text>
        </g>
      ))}
      {/* whole-code sketch */}
      <g transform="translate(300 30)">
        <rect width="170" height="170" fill="none" stroke={MUTE} strokeDasharray="3 3" />
        {[
          [0, 0],
          [119, 0],
          [0, 119],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`} transform={`translate(${x + 6} ${y + 6})`}>
            <rect width="39" height="39" fill={INK} />
            <rect x="5.6" y="5.6" width="27.8" height="27.8" fill={PAPER} />
            <rect x="11.1" y="11.1" width="16.8" height="16.8" fill={INK} />
          </g>
        ))}
        <text x="85" y="95" textAnchor="middle" style={label}>DATA</text>
        <text x="0" y="200" style={label}>THREE FINDERS FIX</text>
        <text x="0" y="216" style={label}>POSITION AND ROTATION</text>
      </g>
      <text x={ox} y="262" style={label}>SAME RATIO FROM ANY DIRECTION</text>
    </svg>
  );
}

function ButterflyHalves() {
  // Front view of one moulded half: seat sweeping up into a wing, leg flaring down to the floor.
  const half = "M0 0 C 50 0, 110 -10, 155 -55 C 140 -20, 90 10, 14 16 C 30 60, 60 120, 92 180 L 76 182 C 50 125, 20 70, 0 26 Z";
  return (
    <svg viewBox="0 0 520 290" role="img" aria-labelledby="dg-b-title">
      <title id="dg-b-title">Front view: two identical curved plywood pieces, one the mirror of the other, meet at the centre. Each forms half the seat, rising into a wing, and one leg. A brass rod joins the legs beneath the seat. Each foot touches the floor at two points.</title>
      <g transform="translate(260 80)">
        <path d={half} fill="var(--paper-3)" stroke={INK} strokeWidth="1.5" />
        <path d={half} transform="scale(-1 1)" fill={PAPER} stroke={INK} strokeWidth="1.5" strokeDasharray="5 3" />
        <line x1="-44" y1="95" x2="44" y2="95" stroke={YEL} strokeWidth="5" strokeLinecap="round" />
        {[76, 92, -76, -92].map((x) => (
          <circle key={x} cx={x} cy={181} r="3.5" fill={ACC} />
        ))}
      </g>
      <line x1="40" y1="263" x2="480" y2="263" stroke={MUTE} />
      <text x="430" y="70" style={label}>PART A</text>
      <text x="22" y="70" style={label}>PART A, MIRRORED</text>
      <line x1="306" y1="175" x2="345" y2="175" stroke={MUTE} />
      <text x="350" y="179" style={label}>BRASS CROSS-BAR</text>
      <text x="40" y="284" style={label}>RED: FEET MEET THE FLOOR AT TWO POINTS EACH</text>
    </svg>
  );
}

function PullCord() {
  const box = (x: number, title: string, sub: string, inner: React.ReactNode) => (
    <g transform={`translate(${x} 20)`}>
      <rect width="150" height="150" fill="var(--paper-2)" stroke={INK} strokeWidth="1.5" />
      {inner}
      <line x1="120" y1="150" x2="120" y2="205" stroke={INK} strokeWidth="1.5" />
      <circle cx="120" cy="210" r="5" fill={ACC} />
      <path d="M135 180 v25 m-5 -6 l5 7 l5 -7" stroke={ACC} strokeWidth="1.5" fill="none" />
      <text x="0" y="238" style={big}>{title}</text>
      <text x="0" y="256" style={label}>{sub}</text>
    </g>
  );
  const blades = [0, 72, 144, 216, 288].map((a) => (
    <path key={a} d="M75 75 Q 95 45, 75 32 Q 68 55, 75 75" fill={INK} opacity={0.75} transform={`rotate(${a} 75 75)`} />
  ));
  return (
    <svg viewBox="0 0 520 270" role="img" aria-labelledby="dg-p-title">
      <title id="dg-p-title">Left, a square extractor fan with blades and a hanging pull cord. Right, a square CD player with a visible disc and the same hanging cord. Pulling the cord starts both.</title>
      {box(30, "Extractor fan", "PULL TO SPIN THE BLADES", <>{blades}</>)}
      <text x="260" y="112" textAnchor="middle" style={{ ...big, fontSize: 44, fill: ACC }}>=</text>
      <text x="260" y="140" textAnchor="middle" style={label}>SAME GESTURE</text>
      {box(340, "CD player", "PULL TO SPIN THE DISC", (
        <>
          <circle cx="75" cy="75" r="52" fill={PAPER} stroke={INK} strokeWidth="1.2" />
          <circle cx="75" cy="75" r="8" fill="var(--paper-2)" stroke={INK} />
        </>
      ))}
    </svg>
  );
}

function PosterSystem() {
  const poster = (x: number, variant: number) => (
    <g transform={`translate(${x} 15)`} key={x}>
      <rect width="130" height="200" fill={PAPER} stroke={INK} />
      <rect x="15" y="15" width="40" height="40" fill="var(--paper-3)" stroke={MUTE} strokeDasharray="3 2" />
      <text x="35" y="39" textAnchor="middle" style={{ ...label, fontSize: 8 }}>EMBLEM</text>
      {variant === 0 ? (
        <rect x="15" y="65" width="100" height="95" fill="var(--paper-2)" />
      ) : variant === 1 ? (
        <rect x="15" y="65" width="100" height="95" fill={INK} opacity={0.75} />
      ) : (
        <g>
          <rect x="15" y="65" width="100" height="95" fill={YEL} opacity={0.5} />
          <rect x="50" y="90" width="30" height="45" fill={INK} opacity={0.6} />
        </g>
      )}
      <rect x="15" y="170" width="100" height="16" fill={ACC} opacity={0.8} />
    </g>
  );
  return (
    <svg viewBox="0 0 520 270" role="img" aria-labelledby="dg-s-title">
      <title id="dg-s-title">Three schematic posters. Each keeps the emblem in the same corner and a type band at the bottom, while the central image changes: empty field, photograph, pictogram.</title>
      {poster(30, 0)}
      {poster(195, 1)}
      {poster(360, 2)}
      <text x="30" y="240" style={label}>FIXED: EMBLEM POSITION, TYPE BAND</text>
      <text x="30" y="258" style={label}>VARIES: FIELD · PHOTOGRAPH · PICTOGRAM</text>
    </svg>
  );
}

function EmojiGrid() {
  // A generic heart on a 12×12 grid, for illustration only.
  const heart = [
    "............",
    "..XX....XX..",
    ".XXXX..XXXX.",
    "XXXXXXXXXXXX",
    "XXXXXXXXXXXX",
    "XXXXXXXXXXXX",
    ".XXXXXXXXXX.",
    "..XXXXXXXX..",
    "...XXXXXX...",
    "....XXXX....",
    ".....XX.....",
    "............",
  ];
  const c = 16, ox = 40, oy = 22;
  return (
    <svg viewBox="0 0 520 260" role="img" aria-labelledby="dg-e-title">
      <title id="dg-e-title">A 12 by 12 grid of square pixels with a simple heart shape filled in, beside the same heart shown at actual small size.</title>
      {heart.map((row, y) =>
        row.split("").map((ch, x) => (
          <rect key={`${x}-${y}`} x={ox + x * c} y={oy + y * c} width={c} height={c} fill={ch === "X" ? ACC : PAPER} stroke="var(--rule)" strokeWidth="1" />
        )),
      )}
      <text x={ox} y={oy + 12 * c + 22} style={label}>12 × 12 = 144 PIXELS</text>
      <g transform="translate(330 70)">
        {heart.map((row, y) => row.split("").map((ch, x) => (ch === "X" ? <rect key={`s${x}-${y}`} x={x * 2} y={y * 2} width={2} height={2} fill={INK} /> : null)))}
        <text x="0" y="50" style={label}>ACTUAL SIZE (APPROX.)</text>
        <text x="0" y="90" style={big}>One symbol,</text>
        <text x="0" y="112" style={big}>144 decisions</text>
      </g>
    </svg>
  );
}

function RiceCooker() {
  return (
    <svg viewBox="0 0 520 280" role="img" aria-labelledby="dg-r-title">
      <title id="dg-r-title">Cross-section of a cooker: an inner pot of rice sits inside an outer pot containing a little water, above a heater. A bimetallic switch under the outer pot cuts the power when the water has boiled away and the temperature rises above 100 degrees.</title>
      {/* outer pot */}
      <path d="M90 60 V200 H330 V60" fill="none" stroke={INK} strokeWidth="2" />
      <rect x="92" y="170" width="236" height="28" fill="#cfe3ea" />
      {/* inner pot */}
      <path d="M130 40 V160 H290 V40" fill={PAPER} stroke={INK} strokeWidth="2" />
      {Array.from({ length: 60 }).map((_, i) => (
        <ellipse key={i} cx={140 + (i % 15) * 10} cy={110 + Math.floor(i / 15) * 11} rx="4" ry="2.4" fill="var(--paper-3)" stroke={MUTE} strokeWidth="0.6" />
      ))}
      {/* heater */}
      <path d="M100 214 h220" stroke={ACC} strokeWidth="4" strokeDasharray="10 6" />
      {/* switch */}
      <rect x="200" y="224" width="22" height="10" fill={YEL} />
      <text x="350" y="186" style={label}>WATER IN OUTER POT</text>
      <text x="350" y="200" style={label}>HOLDS 100 °C</text>
      <text x="350" y="120" style={label}>RICE, HEATED</text>
      <text x="350" y="134" style={label}>INDIRECTLY</text>
      <text x="350" y="218" style={label}>HEATER</text>
      <text x="236" y="252" style={label}>BIMETALLIC SWITCH</text>
      <text x="236" y="266" style={label}>WATER GONE → HOTTER → OFF</text>
      <line x1="232" y1="248" x2="216" y2="236" stroke={MUTE} />
    </svg>
  );
}

function CupSuspension() {
  return (
    <svg viewBox="0 0 520 270" role="img" aria-labelledby="dg-c-title">
      <title id="dg-c-title">Two cross-sections. Left: a tapering cup with a noodle block wedged in the middle, leaving empty space below. Right: the filling method, with the block upside down and the cup being lowered over it.</title>
      <g transform="translate(40 20)">
        <path d="M0 0 L160 0 L135 200 L25 200 Z" fill="none" stroke={INK} strokeWidth="2" />
        <path d="M10 60 L150 60 L141 130 L19 130 Z" fill={YEL} opacity="0.75" />
        {Array.from({ length: 6 }).map((_, i) => (
          <path key={i} d={`M${22 + i * 2} ${70 + i * 10} q 30 -8 60 0 t 60 0`} fill="none" stroke={INK} strokeWidth="1" opacity="0.5" />
        ))}
        <text x="0" y="230" style={label}>BLOCK WEDGED MID-CUP</text>
        <text x="40" y="172" style={label}>SPACE</text>
      </g>
      <g transform="translate(300 20)">
        <path d="M10 130 L150 130 L141 60 L19 60 Z" fill={YEL} opacity="0.75" />
        <path d="M0 140 L160 140 L135 -40 L25 -40 Z" transform="translate(0 -10)" fill="none" stroke={INK} strokeWidth="2" strokeDasharray="6 4" />
        <path d="M80 -10 v30 m-7 -8 l7 9 l7 -9" stroke={ACC} strokeWidth="2" fill="none" />
        <line x1="-10" y1="132" x2="170" y2="132" stroke={MUTE} />
        <text x="0" y="230" style={label}>FLIP THE BLOCK, LOWER THE CUP</text>
      </g>
    </svg>
  );
}

const diagrams: Record<DiagramId, () => React.ReactElement> = {
  "tactile-blocks": TactileBlocks,
  "qr-finder": QrFinder,
  "butterfly-halves": ButterflyHalves,
  "pull-cord": PullCord,
  "poster-system": PosterSystem,
  "emoji-grid": EmojiGrid,
  "rice-cooker": RiceCooker,
  "cup-suspension": CupSuspension,
};

export function Diagram({ id, caption }: { id: DiagramId; caption: string }) {
  const D = diagrams[id];
  return (
    <figure className="diagram">
      <D />
      <figcaption>
        <span className="diagram__label">Editorial diagram</span>
        {caption}
      </figcaption>
    </figure>
  );
}
