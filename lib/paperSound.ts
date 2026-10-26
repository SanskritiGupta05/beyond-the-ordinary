/**
 * Optional paper-rustle sound for page turns. Off by default; the dock toggle
 * stores the choice in localStorage. The rustle is synthesised with the Web
 * Audio API (filtered noise), so there is no audio file to load or license.
 */
const KEY = "bto-paper-sound";

export function soundEnabled(): boolean {
  try {
    return localStorage.getItem(KEY) === "on";
  } catch {
    return false;
  }
}

export function setSoundEnabled(on: boolean) {
  try {
    localStorage.setItem(KEY, on ? "on" : "off");
  } catch {
    /* storage unavailable: the toggle simply won't persist */
  }
}

let ctx: AudioContext | null = null;

/** A short sheet-of-newsprint sound: a quick swish followed by a soft flap. */
export function playRustle() {
  if (!soundEnabled()) return;
  try {
    ctx ??= new AudioContext();
    if (ctx.state === "suspended") void ctx.resume();
    const now = ctx.currentTime;
    burst(ctx, now, 0.32, 2800, 0.16);
    burst(ctx, now + 0.18, 0.22, 1500, 0.1);
  } catch {
    /* audio unavailable: stay silent */
  }
}

function burst(ac: AudioContext, start: number, length: number, freq: number, peak: number) {
  const frames = Math.floor(ac.sampleRate * length);
  const buffer = ac.createBuffer(1, frames, ac.sampleRate);
  const data = buffer.getChannelData(0);
  // Crackly noise: white noise with random grain-like amplitude jumps.
  let grain = 1;
  for (let i = 0; i < frames; i++) {
    if (i % 220 === 0) grain = 0.35 + Math.random() * 0.65;
    data[i] = (Math.random() * 2 - 1) * grain;
  }
  const src = ac.createBufferSource();
  src.buffer = buffer;
  const band = ac.createBiquadFilter();
  band.type = "bandpass";
  band.frequency.setValueAtTime(freq, start);
  band.frequency.exponentialRampToValueAtTime(freq * 0.55, start + length);
  band.Q.value = 0.7;
  const gain = ac.createGain();
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(peak, start + length * 0.18);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + length);
  src.connect(band).connect(gain).connect(ac.destination);
  src.start(start);
  src.stop(start + length);
}
