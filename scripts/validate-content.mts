/**
 * Content validator. Run with `npm run validate`.
 *
 * Checks referential integrity across the typed content files so that a
 * broken link, a missing source or an uncredited image fails loudly before it
 * reaches readers. Uses Node's built-in TypeScript type stripping.
 */
import { existsSync } from "node:fs";
import { join } from "node:path";
import { discoveries } from "../content/discoveries.ts";
import { images } from "../content/images.ts";
import { people } from "../content/people.ts";
import { principles } from "../content/principles.ts";
import { relationships } from "../content/relationships.ts";
import { sources } from "../content/sources.ts";
import { stories } from "../content/stories.ts";

const errors: string[] = [];
const warnings: string[] = [];
const ids = (l: { id: string }[]) => new Set(l.map((x) => x.id));
const S = ids(sources), I = ids(images), P = ids(people), ST = ids(stories), PR = ids(principles);

function unique(name: string, list: { id: string; slug?: string }[]) {
  const seen = new Set<string>();
  for (const x of list) {
    const key = x.slug ?? x.id;
    if (seen.has(key)) errors.push(`${name}: duplicate id/slug "${key}"`);
    seen.add(key);
  }
}
[["sources", sources], ["images", images], ["people", people], ["stories", stories], ["principles", principles], ["relationships", relationships]].forEach(([n, l]) => unique(n as string, l as { id: string }[]));

const cite = (where: string, list?: string[]) => list?.forEach((id) => S.has(id) || errors.push(`${where}: unknown source "${id}"`));
const img = (where: string, id?: string) => id && !I.has(id) && errors.push(`${where}: unknown image "${id}"`);
const ref = (where: string, set: Set<string>, kind: string, list: string[]) => list.forEach((id) => set.has(id) || errors.push(`${where}: unknown ${kind} "${id}"`));

for (const s of sources) {
  try { new URL(s.url); } catch { errors.push(`source ${s.id}: invalid URL`); }
  if (!s.claims.length) errors.push(`source ${s.id}: lists no claims`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s.accessed)) errors.push(`source ${s.id}: accessed date must be YYYY-MM-DD`);
}

for (const im of images) {
  if (!im.src.startsWith("http") && !existsSync(join("public", im.src))) errors.push(`image ${im.id}: file not found at public${im.src}`);
  if (im.alt.trim().length < 15) warnings.push(`image ${im.id}: alt text looks too short`);
  if (!im.attribution) errors.push(`image ${im.id}: missing attribution`);
}

for (const st of stories) {
  const w = `story ${st.id}`;
  img(w, st.heroImage); img(w, st.cardImage);
  if (!st.heroImage) warnings.push(`${w}: no hero image (placeholder will be shown)`);
  ref(w, P, "person", st.people);
  ref(w, ST, "related story", st.related);
  ref(w, PR, "principle", st.principles);
  cite(w, st.sources);
  st.timeline.forEach((t) => cite(`${w} timeline`, t.cite));
  st.collaborators?.forEach((c) => cite(`${w} collaborators`, c.cite));
  st.limitations?.forEach((l) => cite(`${w} limitations`, l.cite));
  if (!st.sections.some((s) => s.step === "lessons")) warnings.push(`${w}: has no "lessons" section`);
  for (const sec of st.sections) for (const b of sec.blocks) {
    if (b.kind === "p" && !b.cite?.length) warnings.push(`${w} / ${sec.heading}: factual paragraph without citation`);
    if ("cite" in b) cite(`${w} / ${sec.heading}`, b.cite);
    if (b.kind === "facts") b.items.forEach((i) => cite(`${w} facts`, i.cite));
    if (b.kind === "image") img(`${w} / ${sec.heading}`, b.image);
  }
}

for (const p of people) {
  const w = `person ${p.id}`;
  img(w, p.portrait);
  ref(w, ST, "story", p.stories);
  ref(w, P, "related person", p.related);
  cite(w, p.sources);
  p.biography.forEach((b) => cite(w, b.cite));
  p.keyWorks.forEach((k) => cite(w, k.cite));
  p.organisations.forEach((o) => cite(w, o.cite));
  cite(w, p.philosophy?.cite); cite(w, p.legacy?.cite);
  if (p.philosophy && !p.philosophy.cite.length) errors.push(`${w}: philosophy must be cited`);
}

for (const pr of principles) {
  const w = `principle ${pr.id}`;
  ref(w, ST, "story", pr.stories); ref(w, P, "person", pr.people); cite(w, pr.sources);
  pr.examples.forEach((e) => { ref(w, ST, "story", [e.story]); cite(w, e.cite); });
}

discoveries.forEach((d, i) => { ref(`discovery ${i}`, ST, "story", [d.story]); if (!d.cite.length) errors.push(`discovery ${i}: must cite a source`); cite(`discovery ${i}`, d.cite); });

for (const r of relationships) {
  const w = `relationship ${r.id}`;
  for (const e of [r.from, r.to]) {
    if ("id" in e) ref(w, e.kind === "story" ? ST : e.kind === "person" ? P : PR, e.kind, [e.id]);
  }
  if (!r.sources.length) errors.push(`${w}: has no sources`);
  cite(w, r.sources);
}

const used = new Set<string>();
const collect = (o: unknown) => JSON.stringify(o).match(/"[a-z0-9-]+"/g)?.forEach((m) => used.add(m.slice(1, -1)));
[stories, people, principles, relationships, discoveries].forEach(collect);
sources.forEach((s) => used.has(s.id) || warnings.push(`source ${s.id}: not cited anywhere`));
images.forEach((i) => used.has(i.id) || warnings.push(`image ${i.id}: not used anywhere`));

warnings.forEach((m) => console.warn("warn  " + m));
errors.forEach((m) => console.error("error " + m));
console.log(`\n${stories.length} stories · ${people.length} people · ${principles.length} principles · ${sources.length} sources · ${images.length} images · ${relationships.length} relationships`);
if (errors.length) { console.error(`\n✗ ${errors.length} error(s)`); process.exit(1); }
console.log(`✓ content valid (${warnings.length} warning(s))`);
