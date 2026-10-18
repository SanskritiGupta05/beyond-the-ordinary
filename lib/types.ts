/**
 * Content model for Beyond the Ordinary.
 *
 * Everything the site renders comes from typed records that follow these
 * interfaces. The shapes are deliberately close to what a database row or a
 * research-pipeline output would look like, so the content files in
 * `content/` can later be replaced by a CMS or database without touching the
 * presentation layer. See CONTENT_GUIDE.md for how to add entries.
 */

/** ISO-like date string. Use "1967", "1967-03" or "1967-03-18" depending on known precision. */
export type PartialDate = string;

/* ------------------------------------------------------------------ */
/* Sources                                                             */
/* ------------------------------------------------------------------ */

export type SourceType =
  | "museum-collection"
  | "manufacturer"
  | "official-organisation"
  | "standard"
  | "government"
  | "press"
  | "design-publication"
  | "reference-work"
  | "interview"
  | "book";

/**
 * How carefully a source has been checked.
 * - verified: the page was read in full by the editor and supports the claims listed.
 * - corroborated: the claims were found in this source via search excerpts and are
 *   consistent with at least one other independent source, but the full page has
 *   not been read end to end.
 * - needs-review: cited for a lead or context only; do not rely on it for facts.
 */
export type VerificationStatus = "verified" | "corroborated" | "needs-review";

export interface Source {
  id: string;
  url: string;
  title: string;
  author?: string;
  publisher: string;
  /** Publication date, if the source gives one. */
  published?: PartialDate;
  /** Date the editor accessed the source. */
  accessed: PartialDate;
  type: SourceType;
  /** Plain-language list of the claims this source supports on the site. */
  claims: string[];
  reliability?: string;
  license?: string;
  verification: VerificationStatus;
  language?: "en" | "ja";
}

/* ------------------------------------------------------------------ */
/* Images                                                              */
/* ------------------------------------------------------------------ */

export interface ImageAsset {
  id: string;
  /** Path under /public, or an absolute URL. */
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  creator: string;
  /** Where the file was obtained (a page, not a direct file link). */
  sourceUrl: string;
  license: "Public domain" | "CC0" | "CC BY 2.0" | "CC BY 2.5" | "CC BY 4.0" | "CC BY-SA 3.0" | "Editorial diagram";
  licenseUrl?: string;
  /** Exact attribution line required by the licence. */
  attribution: string;
  /** Notes on permissions, provenance or caveats. */
  usageNotes?: string;
  /** Optional focal point for object-position, e.g. "50% 30%". */
  focus?: string;
}

/* ------------------------------------------------------------------ */
/* Relationships                                                       */
/* ------------------------------------------------------------------ */

export type RelationshipType =
  | "designed-by"
  | "invented-by"
  | "co-created-by"
  | "manufactured-by"
  | "commissioned-by"
  | "inspired"
  | "influenced"
  | "adapted-from"
  | "adopted-by"
  | "standardised-by"
  | "related-to";

/** An entity reference: either an internal record or a named external party. */
export type EntityRef =
  | { kind: "story" | "person" | "principle"; id: string }
  | { kind: "organisation" | "place" | "work"; name: string };

/** Read relationships as "<from> <type> <to>", e.g. "Butterfly Stool designed-by Sori Yanagi". `inspired` reads as "inspired by". */
export interface Relationship {
  id: string;
  from: EntityRef;
  type: RelationshipType;
  to: EntityRef;
  date?: PartialDate;
  /** One-sentence description of what the relationship means in this case. */
  note: string;
  /** Distinguishes documented facts from inference. */
  evidence: "documented" | "reported" | "editorial-inference";
  sources: string[];
}

/* ------------------------------------------------------------------ */
/* Stories ("The Journey of an Idea")                                  */
/* ------------------------------------------------------------------ */

export type StoryCategory =
  | "Accessibility"
  | "Information design"
  | "Industrial design"
  | "Graphic design"
  | "Product design";

export type JourneyStep =
  | "problem"
  | "idea"
  | "original-application"
  | "design-decision"
  | "turning-point"
  | "beyond-origins"
  | "world-today"
  | "lessons"
  | "explore-further";

/** A block of article body. `kind: "interpretation"` marks editorial analysis. */
export type Block =
  | { kind: "p"; text: string; cite?: string[] }
  | { kind: "interpretation"; text: string }
  | { kind: "uncertain"; text: string; cite?: string[] }
  | { kind: "image"; image: string; size?: "inline" | "wide" | "full" }
  | { kind: "diagram"; diagram: DiagramId; caption: string }
  | { kind: "facts"; items: { label: string; value: string; cite?: string[] }[] }
  | { kind: "compare"; title: string; columns: string[]; rows: { label: string; values: string[] }[]; cite?: string[]; note?: string };

export type DiagramId = "tactile-blocks" | "qr-finder" | "butterfly-halves" | "pull-cord" | "poster-system";

export interface StorySection {
  step: JourneyStep;
  heading: string;
  blocks: Block[];
}

export interface TimelineEvent {
  date: PartialDate;
  label: string;
  place?: string;
  /** "origin" events happened in Japan; "spread" events are adoption elsewhere. */
  phase: "origin" | "development" | "spread" | "today";
  cite: string[];
}

export interface Story {
  id: string;
  slug: string;
  /** Short editorial headline. */
  title: string;
  /** The subject in plain words, e.g. "Tactile paving". */
  subject: string;
  alternativeNames?: string[];
  dek: string;
  summary: string;
  category: StoryCategory;
  tags: string[];
  originDate: PartialDate;
  originDateLabel: string;
  originLocation: string;
  /** People with profiles on the site. */
  people: string[];
  /** Collaborators without profiles, credited by name. */
  collaborators?: { name: string; role: string; cite?: string[] }[];
  organisations?: { name: string; role: string }[];
  heroImage: string;
  cardImage?: string;
  /** Whether the story has documented international adoption worth showing in From Japan to the World. */
  globalReach: boolean;
  timeline: TimelineEvent[];
  sections: StorySection[];
  limitations?: { text: string; cite?: string[] }[];
  related: string[];
  principles: string[];
  sources: string[];
  readingMinutes: number;
  /** Last editorial review date. */
  reviewed: PartialDate;
}

/* ------------------------------------------------------------------ */
/* People                                                              */
/* ------------------------------------------------------------------ */

export interface Person {
  id: string;
  slug: string;
  name: string;
  /** Name in Japanese script, as used in Japanese sources. */
  nameJa?: string;
  /** Romanised variants, including macrons and Japanese name order. */
  romanised?: string[];
  born?: { date: PartialDate; place?: string };
  died?: { date: PartialDate; place?: string };
  disciplines: string[];
  role: string;
  intro: string;
  biography: { text: string; cite?: string[] }[];
  keyWorks: { title: string; date: PartialDate; note?: string; cite?: string[] }[];
  /** Ideas the person has documented in their own words or work. Never invented. */
  philosophy?: { text: string; cite: string[] };
  organisations: { name: string; role: string; date?: string; cite?: string[] }[];
  context?: string;
  legacy?: { text: string; cite?: string[] };
  portrait?: string;
  stories: string[];
  related: string[];
  sources: string[];
}

/* ------------------------------------------------------------------ */
/* Principles                                                          */
/* ------------------------------------------------------------------ */

export interface Principle {
  id: string;
  slug: string;
  name: string;
  question: string;
  explanation: string;
  context?: string;
  examples: { story: string; text: string; cite?: string[] }[];
  people: string[];
  stories: string[];
  caution?: string;
  sources: string[];
}
