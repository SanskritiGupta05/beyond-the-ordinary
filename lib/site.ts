/**
 * Site-wide configuration. Branding lives here so the provisional name can be
 * changed in one place.
 */
export const site = {
  name: "Beyond the Ordinary",
  subtitle: "Japanese Design, Ideas & Global Influence",
  /** Japanese rendering of the name: "the other side of the everyday". Have a native speaker confirm before launch. */
  nameJa: "日常の向こう側",
  tagline: "Discover the Japanese people, ideas, and innovations that have shaped the way the world works, looks, and feels.",
  description:
    "An independent editorial archive exploring Japanese design, the people behind it, and the ideas that have travelled far beyond their original context.",
  /** Set NEXT_PUBLIC_SITE_URL in production so social previews resolve absolute URLs. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /**
   * Contact for corrections and suggestions. Leave empty until a real inbox
   * exists: the site then explains that submissions are not open yet instead
   * of showing a form that goes nowhere.
   */
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  /** Optional social links. Only rendered when set. */
  social: [] as { label: string; href: string }[],
  /** Last time the whole dataset was reviewed. */
  datasetReviewed: "2026-10-18",
} as const;

export const nav = [
  { href: "/stories", label: "Everyday Innovations", ja: "日常の発明" },
  { href: "/people", label: "People", ja: "人物" },
  { href: "/influence", label: "Japan to the World", ja: "日本から世界へ" },
  { href: "/thinking", label: "Thinking", ja: "考え方" },
  { href: "/archive", label: "Archive", ja: "アーカイブ" },
] as const;

/** Japanese section labels, set vertically beside English headings. */
export const sectionJa = {
  overlooked: "日常の発明",
  people: "人物",
  world: "日本から世界へ",
  thinking: "考え方",
  more: "もっと見る",
  note: "制作者より",
  about: "このサイトについて",
  sources: "出典",
  archive: "アーカイブ",
} as const;
