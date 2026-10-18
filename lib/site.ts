/**
 * Site-wide configuration. Branding lives here so the provisional name can be
 * changed in one place.
 */
export const site = {
  name: "Beyond the Ordinary",
  subtitle: "Japanese Design, Ideas & Global Influence",
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
  { href: "/stories", label: "Everyday Innovations" },
  { href: "/people", label: "People" },
  { href: "/influence", label: "Japan to the World" },
  { href: "/thinking", label: "Thinking" },
  { href: "/archive", label: "Archive" },
] as const;
