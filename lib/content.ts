/**
 * Content access layer. Pages import from here, never from `content/` directly,
 * so swapping the typed files for a database later only touches this module.
 */
import { discoveries } from "@/content/discoveries";
import { images } from "@/content/images";
import { people } from "@/content/people";
import { principles } from "@/content/principles";
import { relationships } from "@/content/relationships";
import { sources } from "@/content/sources";
import { stories } from "@/content/stories";
import type { Block, EntityRef, ImageAsset, Person, Principle, Relationship, Source, Story } from "@/lib/types";

const byId = <T extends { id: string }>(list: T[]) => new Map(list.map((x) => [x.id, x]));

const storyMap = byId(stories);
const personMap = byId(people);
const principleMap = byId(principles);
const sourceMap = byId(sources);
const imageMap = byId(images);

export const getStories = () => stories;
export const getPeople = () => people;
export const getPrinciples = () => principles;
export const getSources = () => sources;
export const getImages = () => images;
export const getRelationships = () => relationships;
export const getDiscoveries = () => discoveries;

export const getStory = (id: string) => storyMap.get(id);
export const getStoryBySlug = (slug: string) => stories.find((s) => s.slug === slug);
export const getPerson = (id: string) => personMap.get(id);
export const getPersonBySlug = (slug: string) => people.find((p) => p.slug === slug);
export const getPrinciple = (id: string) => principleMap.get(id);
export const getPrincipleBySlug = (slug: string) => principles.find((p) => p.slug === slug);
export const getSource = (id: string) => sourceMap.get(id);

export function getImage(id: string): ImageAsset {
  const img = imageMap.get(id);
  if (!img) throw new Error(`Unknown image id: ${id}`);
  return img;
}

export const storyHref = (s: Story) => `/stories/${s.slug}`;
export const personHref = (p: Person) => `/people/${p.slug}`;
export const principleHref = (p: Principle) => `/thinking/${p.slug}`;

/** Every source id cited anywhere in a story, in first-cited order, plus its declared list. */
export function storySourceIds(story: Story): string[] {
  const ids: string[] = [];
  const add = (list?: string[]) => list?.forEach((id) => !ids.includes(id) && ids.push(id));
  const fromBlock = (b: Block) => {
    if ("cite" in b) add(b.cite);
    if (b.kind === "facts") b.items.forEach((i) => add(i.cite));
  };
  story.sections.forEach((s) => s.blocks.forEach(fromBlock));
  story.timeline.forEach((t) => add(t.cite));
  story.collaborators?.forEach((c) => add(c.cite));
  story.limitations?.forEach((l) => add(l.cite));
  add(story.sources);
  return ids;
}

export function personSourceIds(person: Person): string[] {
  const ids: string[] = [];
  const add = (list?: string[]) => list?.forEach((id) => !ids.includes(id) && ids.push(id));
  person.biography.forEach((b) => add(b.cite));
  person.keyWorks.forEach((w) => add(w.cite));
  person.organisations.forEach((o) => add(o.cite));
  add(person.philosophy?.cite);
  add(person.legacy?.cite);
  add(person.sources);
  return ids;
}

/** Images used by a story, for credits. */
export function storyImageIds(story: Story): string[] {
  const ids = [story.heroImage];
  if (story.cardImage) ids.push(story.cardImage);
  story.sections.forEach((s) => s.blocks.forEach((b) => b.kind === "image" && !ids.includes(b.image) && ids.push(b.image)));
  return ids;
}

export function relationshipsFor(ref: { kind: "story" | "person"; id: string }): Relationship[] {
  const match = (e: EntityRef) => e.kind === ref.kind && "id" in e && e.id === ref.id;
  return relationships.filter((r) => match(r.from) || match(r.to));
}

export function entityLabel(e: EntityRef): { label: string; href?: string } {
  if (e.kind === "story") {
    const s = getStory(e.id);
    return { label: s?.subject ?? e.id, href: s ? storyHref(s) : undefined };
  }
  if (e.kind === "person") {
    const p = getPerson(e.id);
    return { label: p?.name ?? e.id, href: p ? personHref(p) : undefined };
  }
  if (e.kind === "principle") {
    const p = getPrinciple(e.id);
    return { label: p?.name ?? e.id, href: p ? principleHref(p) : undefined };
  }
  return { label: "name" in e ? e.name : "" };
}

export const relationshipLabels: Record<Relationship["type"], string> = {
  "designed-by": "Designed by",
  "invented-by": "Invented by",
  "co-created-by": "Co-created with",
  "manufactured-by": "Made by",
  "commissioned-by": "Commissioned by",
  inspired: "Inspired by",
  influenced: "Influenced",
  "adapted-from": "Adapted from",
  "adopted-by": "Adopted by",
  "standardised-by": "Standardised by",
  "related-to": "Related to",
};

/** Search index shared by the archive and the header search. */
export interface SearchEntry {
  id: string;
  type: "Story" | "Person" | "Principle";
  title: string;
  subtitle: string;
  href: string;
  category: string;
  year?: string;
  text: string;
  image?: string;
}

export function buildSearchIndex(): SearchEntry[] {
  const storyEntries: SearchEntry[] = stories.map((s) => ({
    id: s.id,
    type: "Story",
    title: s.title,
    subtitle: s.subject,
    href: storyHref(s),
    category: s.category,
    year: s.originDate.slice(0, 4),
    image: getImage(s.cardImage ?? s.heroImage).src,
    text: [s.title, s.subject, s.dek, s.summary, s.category, ...s.tags, ...(s.alternativeNames ?? []), s.originLocation, ...s.people.map((id) => getPerson(id)?.name ?? ""), ...(s.collaborators ?? []).map((c) => c.name)].join(" "),
  }));
  const personEntries: SearchEntry[] = people.map((p) => ({
    id: p.id,
    type: "Person",
    title: p.name,
    subtitle: p.role,
    href: personHref(p),
    category: p.disciplines[0],
    year: p.born?.date.slice(0, 4),
    image: p.portrait ? getImage(p.portrait).src : undefined,
    text: [p.name, p.nameJa, ...(p.romanised ?? []), p.role, p.intro, ...p.disciplines, ...p.keyWorks.map((w) => w.title)].join(" "),
  }));
  const principleEntries: SearchEntry[] = principles.map((p) => ({
    id: p.id,
    type: "Principle",
    title: p.name,
    subtitle: p.question,
    href: principleHref(p),
    category: "Design thinking",
    text: [p.name, p.question, p.explanation].join(" "),
  }));
  return [...storyEntries, ...personEntries, ...principleEntries];
}

export const formatPartialDate = (d: string) => {
  const m = d.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (m) {
    return new Date(Date.UTC(+m[1], +m[2] - 1, +m[3])).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  }
  const ym = d.match(/^(\d{4})-(\d{2})$/);
  if (ym) return new Date(Date.UTC(+ym[1], +ym[2] - 1, 1)).toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
  return d;
};

export type { Source };
