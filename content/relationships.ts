import type { Relationship } from "@/lib/types";

/**
 * Explicit, sourced relationships. Influence is represented as individual
 * documented links, never as a score. `evidence` separates what a source states
 * from what we infer.
 */
export const relationships: Relationship[] = [
  // Tactile paving
  { id: "r-tactile-miyake", from: { kind: "story", id: "tactile-paving" }, type: "invented-by", to: { kind: "person", id: "seiichi-miyake" }, date: "1965", note: "Miyake designed and funded the first blocks.", evidence: "documented", sources: ["vam-tactile-slab"] },
  { id: "r-tactile-jnr", from: { kind: "story", id: "tactile-paving" }, type: "adopted-by", to: { kind: "organisation", name: "Japan's national railways" }, date: "by 1975", note: "Platforms fitted with tactile surfaces; use then spread across Japanese cities.", evidence: "documented", sources: ["vam-tactile-slab"] },
  { id: "r-tactile-jis", from: { kind: "story", id: "tactile-paving" }, type: "standardised-by", to: { kind: "organisation", name: "Japanese Industrial Standards (JIS T 9251)" }, date: "2001", note: "Dimensions and patterns of raised parts standardised in Japan.", evidence: "documented", sources: ["jis-t9251"] },
  { id: "r-tactile-uk", from: { kind: "story", id: "tactile-paving" }, type: "adopted-by", to: { kind: "place", name: "United Kingdom" }, date: "1990", note: "Introduced in the UK; now laid under Department for Transport guidance with its own colour and texture codes.", evidence: "documented", sources: ["vam-tactile-slab", "dft-tactile-guidance"] },
  { id: "r-tactile-us", from: { kind: "story", id: "tactile-paving" }, type: "adopted-by", to: { kind: "place", name: "United States" }, date: "early 1990s", note: "Adopted following the Americans with Disabilities Act, as detectable warning surfaces.", evidence: "documented", sources: ["vam-tactile-slab"] },
  { id: "r-tactile-iso", from: { kind: "story", id: "tactile-paving" }, type: "standardised-by", to: { kind: "organisation", name: "ISO 23599" }, date: "2019 (2nd ed.)", note: "International standard for attention and guiding patterns, alongside national variants.", evidence: "documented", sources: ["iso-23599"] },

  // QR Code
  { id: "r-qr-hara", from: { kind: "story", id: "qr-code" }, type: "invented-by", to: { kind: "person", id: "masahiro-hara" }, date: "1994", note: "Hara led the two-person development team at DENSO WAVE.", evidence: "documented", sources: ["denso-qr-history"] },
  { id: "r-qr-denso", from: { kind: "story", id: "qr-code" }, type: "manufactured-by", to: { kind: "organisation", name: "DENSO WAVE" }, date: "1994", note: "Developer and patent holder, which chose not to exercise its patents.", evidence: "documented", sources: ["denso-qr-history"] },
  { id: "r-qr-auto", from: { kind: "story", id: "qr-code" }, type: "adopted-by", to: { kind: "organisation", name: "Japanese automotive industry" }, date: "1990s", note: "First major use, on electronic kanban.", evidence: "documented", sources: ["denso-qr-history"] },
  { id: "r-qr-iso", from: { kind: "story", id: "qr-code" }, type: "standardised-by", to: { kind: "organisation", name: "ISO" }, date: "2000", note: "International standard, following AIM (1997) and JIS (1999).", evidence: "documented", sources: ["denso-qr-history"] },
  { id: "r-qr-phones", from: { kind: "story", id: "qr-code" }, type: "adopted-by", to: { kind: "organisation", name: "Japanese mobile phone makers" }, date: "2002", note: "Phones with QR readers brought the code into everyday public use.", evidence: "documented", sources: ["denso-qr-history"] },
  { id: "r-qr-go", from: { kind: "story", id: "qr-code" }, type: "inspired", to: { kind: "work", name: "The Go board" }, note: "The finder-pattern layout is described as inspired by a Go board.", evidence: "reported", sources: ["jahfa-hara"] },

  // Butterfly stool
  { id: "r-bs-yanagi", from: { kind: "story", id: "butterfly-stool" }, type: "designed-by", to: { kind: "person", id: "sori-yanagi" }, date: "1954", note: "Designed by Sori Yanagi.", evidence: "documented", sources: ["vam-butterfly-stool"] },
  { id: "r-bs-sendai", from: { kind: "story", id: "butterfly-stool" }, type: "co-created-by", to: { kind: "organisation", name: "Sendai Research Institute" }, note: "Developed with the institute's plywood-moulding equipment.", evidence: "documented", sources: ["vam-butterfly-stool"] },
  { id: "r-bs-tendo", from: { kind: "story", id: "butterfly-stool" }, type: "manufactured-by", to: { kind: "organisation", name: "Tendo Mokko" }, date: "from 1956", note: "Commercial manufacture after the Matsuya launch.", evidence: "documented", sources: ["vam-butterfly-stool"] },
  { id: "r-bs-mingei", from: { kind: "story", id: "butterfly-stool" }, type: "related-to", to: { kind: "work", name: "Mingei movement" }, note: "The V&A relates the stool's simplicity to Mingei, led in part by Yanagi's father.", evidence: "documented", sources: ["vam-butterfly-stool"] },
  { id: "r-bs-eames", from: { kind: "story", id: "butterfly-stool" }, type: "related-to", to: { kind: "work", name: "Moulded plywood furniture by Charles and Ray Eames" }, note: "Shared technical context; no documented direct influence.", evidence: "editorial-inference", sources: ["vam-butterfly-stool"] },

  // Tokyo 1964
  { id: "r-t64-kamekura", from: { kind: "story", id: "tokyo-1964-design" }, type: "designed-by", to: { kind: "person", id: "yusaku-kamekura" }, date: "1961–1964", note: "Emblem and poster series; design director.", evidence: "documented", sources: ["agi-tokyo-1964", "jagda-kamekura"] },
  { id: "r-t64-committee", from: { kind: "story", id: "tokyo-1964-design" }, type: "commissioned-by", to: { kind: "organisation", name: "Tokyo 1964 Organising Committee" }, note: "Appointed Masaru Katsumi to lead the design programme.", evidence: "documented", sources: ["japanhouse-1964"] },
  { id: "r-t64-kamon", from: { kind: "story", id: "tokyo-1964-design" }, type: "adapted-from", to: { kind: "work", name: "Kamon (Japanese family crests)" }, note: "Katsumi cited kamon as an inspiration for the pictograms.", evidence: "reported", sources: ["japanhouse-1964"] },
  { id: "r-t64-olympics", from: { kind: "story", id: "tokyo-1964-design" }, type: "influenced", to: { kind: "organisation", name: "Later Olympic host cities" }, date: "after 1964", note: "Every host city now creates its own pictogram set.", evidence: "documented", sources: ["japanhouse-1964"] },
  { id: "r-t64-2020", from: { kind: "story", id: "tokyo-1964-design" }, type: "influenced", to: { kind: "work", name: "Tokyo 2020 pictograms (Masaaki Hiromura)" }, date: "2019", note: "Designed with explicit reference to the 1964 set.", evidence: "documented", sources: ["olympics-2020-pictograms", "japanhouse-1964"] },

  // Fukasawa
  { id: "r-cd-fukasawa", from: { kind: "story", id: "naoto-fukasawa-cd-player" }, type: "designed-by", to: { kind: "person", id: "naoto-fukasawa" }, date: "1999", note: "Designed for the Without Thought workshop.", evidence: "documented", sources: ["vam-cd-player"] },
  { id: "r-cd-muji", from: { kind: "story", id: "naoto-fukasawa-cd-player" }, type: "manufactured-by", to: { kind: "organisation", name: "MUJI" }, date: "1999", note: "Produced and sold by MUJI.", evidence: "documented", sources: ["vam-cd-player"] },
  { id: "r-cd-fan", from: { kind: "story", id: "naoto-fukasawa-cd-player" }, type: "adapted-from", to: { kind: "work", name: "Domestic extractor fan" }, note: "Borrowed the pull-cord switch and visible rotation.", evidence: "documented", sources: ["vam-cd-player"] },

  // People
  { id: "r-yanagi-fukasawa", from: { kind: "person", id: "naoto-fukasawa" }, type: "related-to", to: { kind: "person", id: "sori-yanagi" }, note: "Both directed the Japan Folk Crafts Museum: Yanagi from 1977, Fukasawa from 2012.", evidence: "documented", sources: ["pen-fukasawa-mingei"] },
  { id: "r-yanagi-kamekura", from: { kind: "person", id: "sori-yanagi" }, type: "related-to", to: { kind: "person", id: "yusaku-kamekura" }, date: "1964", note: "Both members of Masaru Katsumi's Tokyo 1964 design team.", evidence: "documented", sources: ["japanhouse-1964"] },
];
