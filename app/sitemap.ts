import type { MetadataRoute } from "next";
import { getPeople, getPrinciples, getStories, personHref, principleHref, storyHref } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (p: string) => new URL(p, site.url).toString();
  const fixed = ["/", "/stories", "/people", "/influence", "/thinking", "/archive", "/sources", "/about"];
  return [
    ...fixed.map((p) => ({ url: url(p) })),
    ...getStories().map((s) => ({ url: url(storyHref(s)), lastModified: s.reviewed })),
    ...getPeople().map((p) => ({ url: url(personHref(p)) })),
    ...getPrinciples().map((p) => ({ url: url(principleHref(p)) })),
  ];
}
