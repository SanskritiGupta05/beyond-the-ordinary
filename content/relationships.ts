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

  // Emergency exit sign
  { id: "r-exit-ota", from: { kind: "story", id: "exit-sign" }, type: "designed-by", to: { kind: "person", id: "yukio-ota" }, note: "Ota's running figure won a Japanese fire-safety contest after smoke testing.", evidence: "documented", sources: ["slate-exit-sign"] },
  { id: "r-exit-iso", from: { kind: "story", id: "exit-sign" }, type: "standardised-by", to: { kind: "organisation", name: "ISO 7010 (E001)" }, date: "1985 or 1987", note: "Submitted by Japan in 1980; adopted for international use (sources differ on the year).", evidence: "documented", sources: ["slate-exit-sign", "iso-7010"] },
  { id: "r-exit-nyc", from: { kind: "story", id: "exit-sign" }, type: "adopted-by", to: { kind: "place", name: "New York City" }, date: "2006", note: "Required on fire doors in high-rise buildings.", evidence: "documented", sources: ["slate-exit-sign"] },
  { id: "r-exit-soviet", from: { kind: "story", id: "exit-sign" }, type: "related-to", to: { kind: "work", name: "Soviet exit-sign proposal to ISO" }, note: "A similar design developed independently; ISO considered both.", evidence: "documented", sources: ["slate-exit-sign"] },

  // Emoji
  { id: "r-emoji-kurita", from: { kind: "story", id: "emoji" }, type: "designed-by", to: { kind: "person", id: "shigetaka-kurita" }, date: "1998–1999", note: "176 pictograms for DOCOMO's i-mode service.", evidence: "documented", sources: ["wikipedia-kurita"] },
  { id: "r-emoji-docomo", from: { kind: "story", id: "emoji" }, type: "commissioned-by", to: { kind: "organisation", name: "NTT DOCOMO" }, note: "Created for the i-mode mobile internet service.", evidence: "documented", sources: ["wikipedia-kurita"] },
  { id: "r-emoji-manga", from: { kind: "story", id: "emoji" }, type: "adapted-from", to: { kind: "work", name: "Manga symbols and weather pictograms" }, note: "Kurita drew on manga conventions, weather icons, kanji and street signs.", evidence: "documented", sources: ["wikipedia-kurita"] },
  { id: "r-emoji-unicode", from: { kind: "story", id: "emoji" }, type: "standardised-by", to: { kind: "organisation", name: "Unicode 6.0" }, date: "2010", note: "Japanese carrier emoji unified into the international text standard.", evidence: "documented", sources: ["unicode-emoji-history"] },
  { id: "r-emoji-moma", from: { kind: "story", id: "emoji" }, type: "related-to", to: { kind: "organisation", name: "MoMA collection" }, date: "2016", note: "The original 176 were acquired and exhibited.", evidence: "documented", sources: ["wikipedia-kurita"] },

  // Cup Noodles
  { id: "r-cup-ando", from: { kind: "story", id: "cup-noodles" }, type: "invented-by", to: { kind: "person", id: "momofuku-ando" }, date: "1971", note: "Developed after a 1966 trip to the US.", evidence: "documented", sources: ["nissin-founder"] },
  { id: "r-cup-nissin", from: { kind: "story", id: "cup-noodles" }, type: "manufactured-by", to: { kind: "organisation", name: "Nissin Foods" }, note: "Launched in Japan in 1971 and the US in 1973.", evidence: "documented", sources: ["nissin-founder"] },
  { id: "r-cup-papercups", from: { kind: "story", id: "cup-noodles" }, type: "inspired", to: { kind: "work", name: "Noodles eaten from paper cups in a US supermarket" }, date: "1966", note: "Nissin records this observation as the origin of the idea.", evidence: "documented", sources: ["nissin-founder"] },
  { id: "r-cup-tempura", from: { kind: "story", id: "cup-noodles" }, type: "adapted-from", to: { kind: "work", name: "Tempura frying" }, note: "Frying dried the noodles for storage; Ando applied the tempura principle.", evidence: "documented", sources: ["nissin-founder"] },
  { id: "r-cup-us", from: { kind: "story", id: "cup-noodles" }, type: "adopted-by", to: { kind: "place", name: "United States" }, date: "1973", note: "Sold as Cup O'Noodles.", evidence: "documented", sources: ["nissin-founder"] },

  // Walkman
  { id: "r-walk-sony", from: { kind: "story", id: "walkman" }, type: "manufactured-by", to: { kind: "organisation", name: "Sony" }, date: "1979", note: "Developed by the tape recorder division at co-founder Masaru Ibuka's request.", evidence: "documented", sources: ["vam-walkman"] },
  { id: "r-walk-pressman", from: { kind: "story", id: "walkman" }, type: "adapted-from", to: { kind: "work", name: "Sony Pressman TCM-5000" }, note: "Recording removed, stereo playback added.", evidence: "documented", sources: ["vam-walkman"] },
  { id: "r-walk-markets", from: { kind: "story", id: "walkman" }, type: "adopted-by", to: { kind: "place", name: "US, UK and Sweden" }, date: "1979–1980", note: "Sold as Soundabout, Stowaway and Freestyle before the Walkman name was unified.", evidence: "documented", sources: ["vam-walkman"] },

  // Rice cooker
  { id: "r-rice-toshiba", from: { kind: "story", id: "rice-cooker" }, type: "manufactured-by", to: { kind: "organisation", name: "Toshiba" }, date: "1955", note: "Sold as the ER-4 from 10 December 1955.", evidence: "documented", sources: ["ieee-spectrum-rice-cooker"] },
  { id: "r-rice-minami", from: { kind: "story", id: "rice-cooker" }, type: "co-created-by", to: { kind: "work", name: "Yoshitada and Fumiko Minami" }, note: "Working design from the Minamis' factory; Fumiko's testing role is credited in recent accounts.", evidence: "reported", sources: ["ieee-spectrum-rice-cooker"] },

  // People
  { id: "r-ota-kamekura", from: { kind: "person", id: "yukio-ota" }, type: "related-to", to: { kind: "story", id: "tokyo-1964-design" }, note: "Both pictogram systems aimed to communicate without words; we have not documented a direct link between them.", evidence: "editorial-inference", sources: ["slate-exit-sign", "japanhouse-1964"] },
];
