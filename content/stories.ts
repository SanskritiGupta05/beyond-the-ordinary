import type { Story } from "@/lib/types";

export const stories: Story[] = [
  /* ================================================================ */
  /* 1. Tactile paving                                                 */
  /* ================================================================ */
  {
    id: "tactile-paving",
    slug: "tactile-paving",
    title: "The pavement that changed how we navigate public spaces",
    subject: "Tactile paving",
    subjectJa: "点字ブロック",
    palette: ["#d9a521", "#a9a39a", "#4a4a48", "#5b6e3a"],
    alternativeNames: ["Tenji blocks (点字ブロック)", "Braille blocks", "Tactile walking surface indicators", "Detectable warnings"],
    dek: "A grid of raised dots and bars, first laid on one street in Okayama in 1967, became a language that millions of feet and canes now read every day.",
    summary:
      "Seiichi Miyake designed tactile blocks in 1965 so that people with visual impairments could feel where a safe path ran and where a hazard began. From one crossing in Okayama the idea spread across Japan's railways and, decades later, into national standards on several continents — each adapting it in its own way.",
    category: "Accessibility",
    tags: ["accessibility", "public space", "wayfinding", "standards", "urban design"],
    originDate: "1965",
    originDateLabel: "Designed 1965 · first laid 1967",
    originLocation: "Okayama, Japan",
    people: ["seiichi-miyake"],
    heroImage: "okayama-birthplace-1",
    cardImage: "tactile-japan-yellow",
    globalReach: true,
    timeline: [
      { date: "1965", label: "Miyake designs and funds the first tactile blocks, cast in cement", place: "Okayama", phase: "origin", cite: ["vam-tactile-slab", "wikipedia-miyake"] },
      { date: "1967-03-18", label: "First installation, near the Okayama Prefectural School for the Blind", place: "Okayama", phase: "origin", cite: ["ossk-tenji-block", "vam-tactile-slab"] },
      { date: "1974", label: "Miyake founds a company to produce the blocks", place: "Japan", phase: "development", cite: ["vam-tactile-slab"] },
      { date: "1975", label: "Tactile surfaces fitted on Japan's national railway platforms (per the V&A)", place: "Japan", phase: "development", cite: ["vam-tactile-slab"] },
      { date: "1990", label: "Tactile paving introduced in the United Kingdom", place: "United Kingdom", phase: "spread", cite: ["vam-tactile-slab"] },
      { date: "early 1990s", label: "Adopted in the United States following the Americans with Disabilities Act", place: "United States", phase: "spread", cite: ["vam-tactile-slab"] },
      { date: "2001", label: "Japan standardises block dimensions as JIS T 9251", place: "Japan", phase: "development", cite: ["jis-t9251"] },
      { date: "2019", label: "Second edition of the international standard ISO 23599", place: "International", phase: "today", cite: ["iso-23599"] },
    ],
    sections: [
      {
        step: "problem",
        heading: "A street you cannot see",
        blocks: [
          {
            kind: "interpretation",
            text: "For a pedestrian who is blind or has low vision, a pavement gives very little away. A white cane can find a kerb or a pole, but it cannot say where a crossing begins, where a platform drops to the track, or which way a safe route continues.",
          },
          {
            kind: "uncertain",
            text: "Accounts of Miyake's motivation say he wanted to help a friend who was losing their sight. This is widely repeated but we have not yet found it in a primary source, so we report it rather than state it as fact.",
            cite: ["wikipedia-miyake"],
          },
        ],
      },
      {
        step: "idea",
        heading: "Information you can feel through a shoe",
        blocks: [
          {
            kind: "p",
            text: "Seiichi Miyake, an Okayama inventor, designed a paving block with a raised surface pattern in 1965 and paid for the first blocks himself. The original blocks were cast in cement. In Japan they became known as tenji burokku — braille blocks — after the Japanese word for braille.",
            cite: ["vam-tactile-slab", "wikipedia-miyake"],
          },
          {
            kind: "p",
            text: "The distinctive move was to give the ground itself a vocabulary. Rather than a single warning texture, the system distinguishes two messages: raised bars that say \"follow this way\" and raised dots that say \"stop — something changes here\".",
            cite: ["vam-tactile-slab"],
          },
          { kind: "diagram", diagram: "tactile-blocks", caption: "The two basic messages. Guiding blocks (left) carry parallel bars aligned with the direction of travel. Warning blocks (right) carry a grid of dots. Editorial diagram, not to scale." },
        ],
      },
      {
        step: "original-application",
        heading: "One crossing in Okayama",
        blocks: [
          {
            kind: "p",
            text: "The first blocks were laid on 18 March 1967 near the Haraojima intersection on what was then National Route 2 (now Route 250) in Okayama, close to the Okayama Prefectural School for the Blind. A memorial now stands at the spot, and 18 March is observed in Japan as Tactile Paving Day.",
            cite: ["ossk-tenji-block", "vam-tactile-slab"],
          },
          { kind: "image", image: "okayama-birthplace-2", size: "wide" },
          {
            kind: "uncertain",
            text: "Some popular accounts give 1965 as the first installation, or a figure of 230 blocks for the first laying. We have not been able to confirm either from a primary source; the Okayama association of visually impaired people gives 18 March 1967.",
            cite: ["ossk-tenji-block"],
          },
        ],
      },
      {
        step: "design-decision",
        heading: "Why dots, bars and yellow",
        blocks: [
          {
            kind: "p",
            text: "The system rests on two distinct textures — raised lines that mark a path to follow and raised domes that signal a place to stop — and on colour: the blocks were made yellow so that they would also help people with partial sight.",
            cite: ["vam-tactile-slab"],
          },
          {
            kind: "interpretation",
            text: "Two further qualities seem to us to explain why the idea travelled. The textures are different enough to tell apart underfoot or with a cane tip, and the block is modular: the same unit can be laid in lines to guide and in fields to warn, so a handful of parts compose into routes of any shape.",
          },
          { kind: "image", image: "tactile-japan-yellow", size: "inline" },
          {
            kind: "facts",
            items: [
              { label: "Original material", value: "Cast cement (1965)", cite: ["vam-tactile-slab"] },
              { label: "Messages", value: "Guide (bars) · Warn (dots)", cite: ["vam-tactile-slab"] },
              { label: "Colour", value: "Yellow, for contrast", cite: ["vam-tactile-slab"] },
              { label: "Japanese standard", value: "JIS T 9251 (2001)", cite: ["jis-t9251"] },
            ],
          },
        ],
      },
      {
        step: "turning-point",
        heading: "The railways take it up",
        blocks: [
          {
            kind: "p",
            text: "What turned a local experiment into national infrastructure was adoption by Japan's national railways. Platforms are among the most dangerous places for a blind traveller, and the V&A records that all of the national railway platforms were fitted with tactile surfaces by 1975. From there, use spread to city streets and government buildings across Japan.",
            cite: ["vam-tactile-slab", "wikipedia-tactile-paving"],
          },
          {
            kind: "p",
            text: "In 2001 Japan standardised the shape and spacing of the raised parts as JIS T 9251. That first standard was written around detection by the sole of the foot, and did not specifically consider how a cane reads the surface.",
            cite: ["jis-t9251"],
          },
        ],
      },
      {
        step: "beyond-origins",
        heading: "Adopted, then adapted",
        blocks: [
          {
            kind: "p",
            text: "Tactile paving reached the United Kingdom in 1990 and the United States in the early 1990s, where the Americans with Disabilities Act created requirements for detectable warning surfaces. Today the international standard ISO 23599 describes the same two families Miyake started with — attention patterns and guiding patterns — while acknowledging that countries use their own designs.",
            cite: ["vam-tactile-slab", "wikipedia-tactile-paving", "iso-23599"],
          },
          {
            kind: "compare",
            title: "Same idea, different dialects",
            columns: ["Japan", "United Kingdom", "Australia"],
            rows: [
              { label: "Typical colour", values: ["Mostly yellow", "Red at controlled crossings, buff at uncontrolled; contrast emphasised elsewhere", "Not summarised here"] },
              { label: "Warning texture", values: ["Raised dots", "Blister (dots), plus several other coded surfaces", "Truncated cones"] },
              { label: "Governing guidance", values: ["JIS T 9251", "Department for Transport guidance", "AS/NZS 1428.4"] },
            ],
            cite: ["wikipedia-tactile-paving", "dft-tactile-guidance", "jis-t9251"],
            note: "Summary for orientation only. Standards are revised over time; consult the current national document before specifying paving.",
          },
          {
            kind: "uncertain",
            text: "We describe these as adoptions of the same basic concept. We have not yet documented whether each country's standard was developed directly from Japanese practice or partly in parallel, so we do not claim a direct line of influence for any single country.",
          },
        ],
      },
      {
        step: "world-today",
        heading: "Where you will find it now",
        blocks: [
          {
            kind: "p",
            text: "Tactile surfaces now appear at kerbs, crossings, stairs and platform edges in many countries.",
            cite: ["vam-tactile-slab", "wikipedia-tactile-paving"],
          },
          { kind: "image", image: "tactile-china-platform", size: "wide" },
        ],
      },
      {
        step: "lessons",
        heading: "What designers can learn",
        blocks: [
          {
            kind: "interpretation",
            text: "A small vocabulary goes a long way. Two textures — go, and stop — are easy to learn and hard to confuse. Much of the system's portability comes from that restraint.",
          },
          {
            kind: "interpretation",
            text: "Designing for one group changes the space for everyone. The same strip that warns a cane user also warns a distracted commuter, but it can be an obstacle for someone using a wheelchair or a walking frame. Good accessibility work weighs those needs openly rather than treating any single solution as universally good.",
          },
          {
            kind: "interpretation",
            text: "Infrastructure is only as good as its installation. A guiding line that ends abruptly, or warning tiles laid where there is no hazard, teaches people to distrust the whole system. The design does not end at the block; it continues in standards, training and maintenance.",
          },
        ],
      },
    ],
    limitations: [
      { text: "Some wheelchair users and older pedestrians report that raised blocks can be uncomfortable or a trip risk.", cite: ["wikipedia-tactile-paving"] },
      { text: "Inconsistent installation — mixed patterns, misplaced warning fields, broken blocks — can mislead the people the system is meant to help.", cite: ["wikipedia-tactile-paving"] },
      { text: "National standards differ in colour, texture and layout, so a traveller's learned expectations may not transfer between countries.", cite: ["iso-23599", "wikipedia-tactile-paving"] },
    ],
    related: ["qr-code", "tokyo-1964-design"],
    principles: ["touch-as-information", "standards-and-openness", "designing-for-recognition"],
    sources: ["vam-tactile-slab", "ossk-tenji-block", "wikipedia-miyake", "wikipedia-tactile-paving", "jis-t9251", "iso-23599", "dft-tactile-guidance"],
    readingMinutes: 7,
    reviewed: "2026-10-18",
  },

  /* ================================================================ */
  /* 2. QR code                                                        */
  /* ================================================================ */
  {
    id: "qr-code",
    slug: "qr-code",
    title: "The code you scan without thinking",
    subject: "QR Code",
    subjectJa: "QRコード",
    palette: ["#111111", "#e9e6df", "#3f4a63", "#a88a64"],
    alternativeNames: ["Quick Response code", "QRコード"],
    dek: "Built in 1994 to speed up a car-parts factory floor, the QR Code became public infrastructure partly because its makers chose not to enforce their patent.",
    summary:
      "A small team at DENSO WAVE led by Masahiro Hara designed the QR Code to hold far more information than a barcode — including kanji and kana — and to be found and read quickly at any angle. Standardisation, camera phones and an open patent policy carried it from kanban labels to menus, tickets and payments.",
    category: "Information design",
    tags: ["information design", "manufacturing", "standards", "mobile", "open technology"],
    originDate: "1994",
    originDateLabel: "Released 1994",
    originLocation: "DENSO WAVE, Japan",
    people: ["masahiro-hara"],
    collaborators: [
      { name: "One other DENSO WAVE engineer", role: "The original development team had two members", cite: ["denso-qr-history"] },
      { name: "Motoaki Watabe, Tadao Nojiri (DENSO WAVE); Takayuki Nagaya, Yuji Uchiyama (Toyota Central R&D Labs)", role: "Named with Hara for the 2014 European Inventor Award", cite: ["denso-epo-2014"] },
    ],
    organisations: [
      { name: "DENSO WAVE (then a division of DENSO CORPORATION)", role: "Developer and patent holder" },
      { name: "AIM, JIS and ISO", role: "Standardisation bodies (1997, 1999, 2000)" },
    ],
    heroImage: "qr-poster-japan",
    globalReach: true,
    timeline: [
      { date: "1992", label: "Factory sites ask DENSO WAVE for faster code reading", place: "Japan", phase: "origin", cite: ["denso-qr-story"] },
      { date: "1994", label: "QR Code released after about 18 months of development", place: "Japan", phase: "origin", cite: ["denso-qr-history"] },
      { date: "1997", label: "Approved as an AIM standard", place: "International", phase: "development", cite: ["denso-qr-history"] },
      { date: "1999", label: "Approved as a JIS standard; adopted on Japanese automotive EDI forms", place: "Japan", phase: "development", cite: ["denso-qr-history"] },
      { date: "2000", label: "Approved as an ISO international standard", place: "International", phase: "spread", cite: ["denso-qr-history"] },
      { date: "2002", label: "Camera phones with QR readers bring it into everyday life in Japan", place: "Japan", phase: "spread", cite: ["denso-qr-history"] },
      { date: "2014", label: "Development team wins European Inventor Award Popular Prize", place: "Berlin", phase: "today", cite: ["denso-qr-story", "denso-epo-2014"] },
    ],
    sections: [
      {
        step: "problem",
        heading: "Ten barcodes on one box",
        blocks: [
          {
            kind: "p",
            text: "By the early 1990s, barcodes were everywhere in Japanese manufacturing, and they were running out of room. A barcode holds only around 20 alphanumeric characters, so a single item could need several codes, and DENSO WAVE reports that factory workers were scanning around a thousand barcodes a day. Components were also getting smaller, leaving less space to print on. And a barcode cannot carry kanji or kana, which users wanted.",
            cite: ["denso-qr-history", "denso-qr-story"],
          },
          {
            kind: "p",
            text: "In 1992, requests from manufacturing sites reached DENSO WAVE, a maker of barcode scanners within the DENSO group. Masahiro Hara later summarised the starting point plainly: the system \"originated from requests from our manufacturing sites.\"",
            cite: ["denso-qr-story"],
          },
        ],
      },
      {
        step: "idea",
        heading: "Use both directions",
        blocks: [
          {
            kind: "p",
            text: "Hara led a team of two. Their answer was a two-dimensional matrix: instead of reading information along one line, a scanner reads it across a grid, horizontally and vertically. Two-dimensional codes already existed — the Japan Automotive Hall of Fame notes that QR Code succeeded an earlier 2D code, used alongside it for a while — so the contribution was less the matrix itself than the way this one was engineered to be found and read fast.",
            cite: ["denso-qr-history", "jahfa-hara"],
          },
          {
            kind: "p",
            text: "Hara has said the grid of a Go board helped him picture the layout, and the Japan Automotive Hall of Fame describes the finder-pattern design as inspired by it.",
            cite: ["jahfa-hara"],
          },
        ],
      },
      {
        step: "design-decision",
        heading: "A pattern that almost never occurs by accident",
        blocks: [
          {
            kind: "p",
            text: "The most recognisable part of a QR Code — the three nested squares in its corners — is also its cleverest. To find a code quickly in a cluttered image, a scanner needs a shape that is unlikely to appear anywhere else. The team surveyed printed material to find the black-and-white sequence that occurred least often. The answer was a ratio of 1:1:3:1:1.",
            cite: ["denso-qr-history", "denso-qr-story"],
          },
          { kind: "diagram", diagram: "qr-finder", caption: "A finder pattern crossed by a scan line in any direction yields the same 1:1:3:1:1 sequence of dark and light. Three of them fix the code's position and rotation. Editorial diagram." },
          {
            kind: "p",
            text: "Because a line through the centre of the pattern produces the same ratio at any angle, the reader can locate the code and work out its orientation without the user lining anything up. Error correction lets codes be read even when partly stained or damaged.",
            cite: ["denso-qr-story"],
          },
          {
            kind: "facts",
            items: [
              { label: "Name", value: "\"Quick Response\"", cite: ["denso-qr-history"] },
              { label: "First capacity", value: "~7,000 numerals, plus kanji", cite: ["denso-qr-history"] },
              { label: "Reading speed", value: ">10× faster than other codes (DENSO WAVE claim)", cite: ["denso-qr-history"] },
              { label: "Development", value: "~1.5 years, two people", cite: ["denso-qr-history"] },
            ],
          },
        ],
      },
      {
        step: "original-application",
        heading: "Kanban, then traceability",
        blocks: [
          {
            kind: "p",
            text: "The first major users were in the automotive industry, where QR Codes were used on electronic kanban — the cards that signal what parts to produce and move in a just-in-time system. Food, pharmaceutical and contact-lens makers then adopted them for traceability.",
            cite: ["denso-qr-history"],
          },
        ],
      },
      {
        step: "turning-point",
        heading: "Standards and an unenforced patent",
        blocks: [
          {
            kind: "p",
            text: "Two decisions made the QR Code available to people far beyond DENSO's customers. The first was standardisation: it became an AIM standard in 1997, a Japanese Industrial Standard in 1999 and an ISO international standard in 2000. The second was a patent policy. DENSO WAVE holds patents on the QR Code but declared from the start of development that it would not exercise them, and published the specification so anyone could use it.",
            cite: ["denso-qr-history"],
          },
          {
            kind: "p",
            text: "In 2002, mobile phones with built-in QR readers appeared in Japan, and the code moved from factory labels into advertising, magazines and everyday life.",
            cite: ["denso-qr-history"],
          },
        ],
      },
      {
        step: "beyond-origins",
        heading: "From Japan to everywhere",
        blocks: [
          {
            kind: "p",
            text: "International standardisation meant manufacturers worldwide could build compatible readers and generators. DENSO WAVE's 2012 Good Design Award and the team's 2014 European Inventor Award both cited how widely the code had come to be used by the public.",
            cite: ["denso-qr-history", "denso-qr-story"],
          },
          {
            kind: "uncertain",
            text: "Later large-scale uses — such as QR-based mobile payment systems built by companies outside Japan, or contact-tracing check-ins during the COVID-19 pandemic — were developed independently by other organisations using the open standard. They show the code's reach, not DENSO WAVE's design intent, and we have not yet sourced them in detail.",
          },
        ],
      },
      {
        step: "world-today",
        heading: "Hidden in plain sight",
        blocks: [
          {
            kind: "p",
            text: "QR Codes remain in industrial use for tracking parts and products, the context they were made for, while also appearing on posters, tickets, packaging and menus. DENSO WAVE has continued to develop variants including Micro QR Code (a JIS standard from 2004) and iQR Code (2008).",
            cite: ["denso-qr-history"],
          },
        ],
      },
      {
        step: "lessons",
        heading: "What designers can learn",
        blocks: [
          {
            kind: "interpretation",
            text: "Research the environment, not just the object. The finder pattern came from studying what already existed in printed material. Designing something distinctive meant first understanding what was ordinary.",
          },
          {
            kind: "interpretation",
            text: "Remove a step from the user. Scanning from any angle means no one has to learn how to hold the reader. Much of the code's later success with the public rests on a decision made for factory workers.",
          },
          {
            kind: "interpretation",
            text: "Openness can be a design decision. Choosing not to enforce a patent shaped who could build with the QR Code as much as any visual or technical choice.",
          },
        ],
      },
    ],
    limitations: [
      { text: "A QR Code is unreadable to people without a compatible device, which matters when it replaces printed information such as menus.", cite: [] },
      { text: "Because codes are not human-readable, people cannot see where a code leads before scanning — a known route for fraud.", cite: [] },
    ],
    related: ["tactile-paving", "tokyo-1964-design"],
    principles: ["designing-for-recognition", "standards-and-openness"],
    sources: ["denso-qr-history", "denso-qr-story", "jahfa-hara", "denso-epo-2014"],
    readingMinutes: 6,
    reviewed: "2026-10-18",
  },

  /* ================================================================ */
  /* 3. Sori Yanagi                                                    */
  /* ================================================================ */
  {
    id: "butterfly-stool",
    slug: "sori-yanagi-butterfly-stool",
    title: "When design becomes part of everyday life",
    subject: "Sori Yanagi and the Butterfly Stool",
    subjectJa: "バタフライスツール",
    palette: ["#4a2a1c", "#b8963e", "#8a817a", "#ece8e1"],
    alternativeNames: ["バタフライスツール"],
    dek: "Two identical pieces of plywood, a brass rod, and machinery left over from building wartime aircraft: how one stool brought industrial technique and domestic life together.",
    summary:
      "Sori Yanagi designed the Butterfly Stool in 1954 with a regional research institute that had learned to mould plywood for aeroplane fuselages. Its two mirrored halves, its feet shaped not to mark tatami, and its long life in production show how material, manufacturing and the home shaped the design together.",
    category: "Industrial design",
    tags: ["industrial design", "furniture", "materials", "manufacturing", "mingei"],
    originDate: "1954",
    originDateLabel: "Designed 1954 · launched 1956",
    originLocation: "Tokyo and Sendai, Japan",
    people: ["sori-yanagi"],
    organisations: [
      { name: "Sendai Research Institute (Miyagi-ken Sangyo Kogei Shikenjo)", role: "Development partner with plywood-moulding equipment" },
      { name: "Tendo Mokko", role: "Manufacturer from 1956" },
      { name: "Matsuya Department Store, Tokyo", role: "Venue of the 1956 launch" },
    ],
    heroImage: "butterfly-stool",
    globalReach: false,
    timeline: [
      { date: "1954", label: "Butterfly Stool designed", place: "Japan", phase: "origin", cite: ["vam-butterfly-stool"] },
      { date: "1956", label: "Prototype launched at Matsuya Department Store; Tendo Mokko takes up manufacture", place: "Tokyo", phase: "origin", cite: ["vam-butterfly-stool"] },
      { date: "1950s–1990s", label: "Made in small numbers, around 20–30 a year", place: "Tendo", phase: "development", cite: ["vam-butterfly-stool"] },
      { date: "1977", label: "Yanagi becomes director of the Japan Folk Crafts Museum", place: "Tokyo", phase: "development", cite: ["pen-fukasawa-mingei"] },
      { date: "1990s", label: "Tendo Mokko moves to a steel press; output later rises to 3,000–4,000 a year", place: "Tendo", phase: "today", cite: ["vam-butterfly-stool"] },
      { date: "2017", label: "An early example enters the V&A collection", place: "London", phase: "today", cite: ["vam-butterfly-stool"] },
    ],
    sections: [
      {
        step: "problem",
        heading: "Seating for a changing home",
        blocks: [
          {
            kind: "p",
            text: "The V&A describes the Butterfly Stool as combining a Western stool form with a profile that evokes Japanese architecture and calligraphy — a piece of furniture made to sit between two ways of living.",
            cite: ["vam-butterfly-stool"],
          },
          {
            kind: "interpretation",
            text: "We read the stool less as a statement of national style than as an answer to a practical question: how to make a modern stool that belongs in a room with tatami floors, using industrial methods that had only recently become available.",
          },
        ],
      },
      {
        step: "idea",
        heading: "One shape, used twice",
        blocks: [
          {
            kind: "p",
            text: "The stool is made from two identical pieces of moulded plywood. Each forms half of the seat and one leg; set back to back and joined by a brass cross-bar and screws, they become a complete, stable object.",
            cite: ["vam-butterfly-stool"],
          },
          { kind: "diagram", diagram: "butterfly-halves", caption: "Two identical moulded parts, mirrored and joined under the seat by a single brass rod. Editorial diagram." },
          {
            kind: "interpretation",
            text: "Using one part twice halves the number of moulds and makes assembly straightforward — an elegant fit between the form and the economics of making it.",
          },
        ],
      },
      {
        step: "original-application",
        heading: "Aircraft technique, domestic object",
        blocks: [
          {
            kind: "p",
            text: "Yanagi developed the design with the Sendai Research Institute (Miyagi-ken Sangyo Kogei Shikenjo), which had plywood-moulding equipment from its wartime work building wooden aeroplane fuselages. A prototype was launched in 1956 at Matsuya Department Store in Tokyo, after which the furniture maker Tendo Mokko began commercial production.",
            cite: ["vam-butterfly-stool"],
          },
          {
            kind: "p",
            text: "Production was modest for decades: the V&A records roughly 20 to 30 stools a year from the 1950s to the 1990s. After Tendo Mokko changed to a steel press in the 1990s, output rose to several thousand a year.",
            cite: ["vam-butterfly-stool"],
          },
        ],
      },
      {
        step: "design-decision",
        heading: "Feet that respect the floor",
        blocks: [
          {
            kind: "p",
            text: "A small detail shows how closely the stool was fitted to its setting. Early prototypes had flat feet, which would have damaged tatami. The production version touches the floor at only two points on each leg.",
            cite: ["vam-butterfly-stool"],
          },
          {
            kind: "facts",
            items: [
              { label: "Material", value: "Moulded plywood (rosewood face), brass rod", cite: ["vam-butterfly-stool"] },
              { label: "Size (V&A example)", value: "W 44.2 × H 39.4 × D 30.8 cm", cite: ["vam-butterfly-stool"] },
              { label: "Parts", value: "Two identical shells + one cross-bar", cite: ["vam-butterfly-stool"] },
              { label: "Maker", value: "Tendo Mokko", cite: ["vam-butterfly-stool"] },
            ],
          },
        ],
      },
      {
        step: "turning-point",
        heading: "Between Mingei and moulded plywood",
        blocks: [
          {
            kind: "p",
            text: "Sori Yanagi was the son of Soetsu Yanagi, a leading figure of the Mingei (folk craft) movement, and the V&A links the stool's simplicity to that inheritance. The same record connects its moulded plywood to work by Charles and Ray Eames, whose own plywood furniture also grew out of wartime moulding technology.",
            cite: ["vam-butterfly-stool"],
          },
          {
            kind: "uncertain",
            text: "The V&A frames the Eames connection as engagement with American and European design. We have not found documentation that Yanagi set out to respond to a specific Eames piece, so we treat it as shared technical context rather than direct influence.",
            cite: ["vam-butterfly-stool"],
          },
        ],
      },
      {
        step: "world-today",
        heading: "Beyond the stool",
        blocks: [
          {
            kind: "p",
            text: "Yanagi's work reached into public life too. He was part of the design team for the Tokyo 1964 Olympic Games, led by Masaru Katsumi. From 1977 he directed the Japan Folk Crafts Museum that his father had founded, serving for nearly thirty years.",
            cite: ["japanhouse-1964", "pen-fukasawa-mingei"],
          },
          { kind: "image", image: "yanagi-bench", size: "inline" },
          { kind: "image", image: "yanagi-armchair", size: "inline" },
        ],
      },
      {
        step: "lessons",
        heading: "What designers can learn",
        blocks: [
          {
            kind: "interpretation",
            text: "Look for capability nearby. The stool's form depended on equipment and know-how that already existed for a completely different purpose.",
          },
          {
            kind: "interpretation",
            text: "Fit the object to the life around it. The two-point feet are invisible in most photographs, yet they decide whether the stool belongs in a tatami room at all.",
          },
          {
            kind: "interpretation",
            text: "Production shapes form. Designing one part to be used twice is a manufacturing decision expressed as an aesthetic one.",
          },
        ],
      },
    ],
    related: ["naoto-fukasawa-cd-player", "tokyo-1964-design"],
    principles: ["material-and-making", "touch-as-information"],
    sources: ["vam-butterfly-stool", "japanhouse-1964", "pen-fukasawa-mingei", "commons-yanagi-bench"],
    readingMinutes: 6,
    reviewed: "2026-10-18",
  },

  /* ================================================================ */
  /* 4. Tokyo 1964 visual identity                                     */
  /* ================================================================ */
  {
    id: "tokyo-1964-design",
    slug: "tokyo-1964-visual-identity",
    title: "The art of communicating visually",
    subject: "Yusaku Kamekura and the Tokyo 1964 design programme",
    subjectJa: "東京オリンピック",
    palette: ["#c8322b", "#23315a", "#e07a2e", "#efebe3"],
    alternativeNames: ["Tokyo Olympics 1964 posters", "1964 Olympic pictograms"],
    dek: "A red disc, five gold rings and a set of pictograms that let visitors find their way without a shared language — the first time an Olympic Games was designed as a system.",
    summary:
      "For the 1964 Tokyo Olympics, a team led by design critic Masaru Katsumi treated the Games as one communication problem. Yusaku Kamekura's emblem and posters gave it a voice; Yoshiro Yamashita's pictograms gave it a vocabulary. Every later host city has followed with a pictogram set of its own.",
    category: "Graphic design",
    tags: ["graphic design", "posters", "pictograms", "identity", "wayfinding", "Olympics"],
    originDate: "1961",
    originDateLabel: "1961–1964",
    originLocation: "Tokyo, Japan",
    people: ["yusaku-kamekura", "sori-yanagi"],
    collaborators: [
      { name: "Masaru Katsumi", role: "Design critic who led the Games' design programme", cite: ["japanhouse-1964"] },
      { name: "Yoshiro Yamashita", role: "Lead designer of the 59 pictograms", cite: ["japanhouse-1964"] },
      { name: "Hiromu Hara, Takashi Kono", role: "Members of the design team", cite: ["japanhouse-1964"] },
      { name: "Osamu Hayasaki (photographer), Jo Murakoshi (photo director)", role: "Photography for the poster series", cite: ["agi-tokyo-1964"] },
    ],
    organisations: [{ name: "Organising Committee of the Tokyo 1964 Games", role: "Commissioning body" }],
    heroImage: "tokyo1964-programmes",
    globalReach: true,
    timeline: [
      { date: "1957", label: "Kamekura designs the G Mark for Japan's Good Design selection system", place: "Japan", phase: "origin", cite: ["gmark-overview"] },
      { date: "1960", label: "Kamekura co-founds Nippon Design Center", place: "Tokyo", phase: "origin", cite: ["jagda-kamekura"] },
      { date: "1961", label: "First Tokyo 1964 poster: the emblem on a white ground", place: "Tokyo", phase: "origin", cite: ["british-museum-kamekura", "jagda-kamekura"] },
      { date: "1964-10", label: "Games open with 59 pictograms for sports and services", place: "Tokyo", phase: "development", cite: ["japanhouse-1964"] },
      { date: "after 1964", label: "Pictograms become standard Olympic practice; each host creates its own set", place: "International", phase: "spread", cite: ["japanhouse-1964"] },
      { date: "2019-03-12", label: "Tokyo 2020 unveils pictograms that acknowledge the 1964 set", place: "Tokyo", phase: "today", cite: ["olympics-2020-pictograms", "japanhouse-1964"] },
    ],
    sections: [
      {
        step: "problem",
        heading: "A city of visitors without a shared language",
        blocks: [
          {
            kind: "p",
            text: "The 1964 Games were the first Olympics held in Asia. Athletes, officials and spectators would arrive from around the world into a city whose signs were mostly in Japanese. The organisers needed a visual identity that would represent Japan to the world, and an information system that people could use without reading Japanese or English.",
            cite: ["japanhouse-1964"],
          },
        ],
      },
      {
        step: "idea",
        heading: "Treating the Games as one design problem",
        blocks: [
          {
            kind: "p",
            text: "The organising committee appointed the design critic Masaru Katsumi to lead the work. He assembled a team that included Yusaku Kamekura, Yoshiro Yamashita, Hiromu Hara, Takashi Kono and Sori Yanagi. Kamekura served as design director.",
            cite: ["japanhouse-1964", "agi-tokyo-1964"],
          },
          {
            kind: "interpretation",
            text: "The significant idea was organisational as much as visual: one team, one set of rules, applied to everything from posters to tickets to toilets.",
          },
        ],
      },
      {
        step: "design-decision",
        heading: "Emblem, posters and pictograms",
        blocks: [
          {
            kind: "p",
            text: "Kamekura's emblem places a large red disc above the five Olympic rings and the words TOKYO 1964 in gold. The first poster, issued in 1961, presented the emblem alone on white. Later posters in the series used dramatic action photography — credited to photographer Osamu Hayasaki and photo director Jo Murakoshi — with the emblem as a constant. The series won the Ministry of Education's Grand Prize.",
            cite: ["british-museum-kamekura", "agi-tokyo-1964"],
          },
          { kind: "diagram", diagram: "poster-system", caption: "How the system held together: a fixed emblem block, a consistent typographic band and a changing image or pictogram. Editorial diagram based on surviving programmes; not a reproduction of any poster." },
          {
            kind: "p",
            text: "Yoshiro Yamashita led the design of 59 pictograms: 20 for sports and 39 for services such as telephones, first aid, banks and toilets. Katsumi cited traditional Japanese family crests, kamon, as an inspiration — compact emblems that communicate identity at a glance.",
            cite: ["japanhouse-1964"],
          },
          { kind: "image", image: "tokyo1964-programmes", size: "wide" },
        ],
      },
      {
        step: "turning-point",
        heading: "Becoming a tradition",
        blocks: [
          {
            kind: "p",
            text: "Olympic histories describe Tokyo's as the first pictogram set systematically designed for both sports and services. After 1964, designing a pictogram set became an expected part of every Olympic Games.",
            cite: ["olympic-museum-pictograms", "japanhouse-1964"],
          },
        ],
      },
      {
        step: "beyond-origins",
        heading: "A model other host cities followed",
        blocks: [
          {
            kind: "p",
            text: "Each subsequent host city has created its own pictograms, so the influence is visible as a practice rather than a style: later sets look very different, but they inherit the idea that an Olympics needs its own visual language.",
            cite: ["japanhouse-1964"],
          },
          {
            kind: "uncertain",
            text: "It is often said that specific later systems — notably the 1972 Munich pictograms — were directly modelled on Tokyo's. We have not yet sourced documentation of that relationship, so we only claim the continuation of the practice.",
          },
          {
            kind: "p",
            text: "When Tokyo hosted again, its 2020 pictograms, designed by a team led by Masaaki Hiromura and unveiled in 2019, explicitly acknowledged the 1964 set as their starting point.",
            cite: ["olympics-2020-pictograms", "japanhouse-1964"],
          },
        ],
      },
      {
        step: "world-today",
        heading: "Signs that need no translation",
        blocks: [
          {
            kind: "interpretation",
            text: "Pictogram-based wayfinding is now so normal at airports, stations and stadiums that it is hard to see it as a design choice at all. Tokyo 1964 is one of the landmark moments in how that approach became visible to a global audience — alongside many other contributors to public information design worldwide.",
          },
        ],
      },
      {
        step: "lessons",
        heading: "What designers can learn",
        blocks: [
          {
            kind: "interpretation",
            text: "Constraints make systems. Fixing the emblem and type let everything else change while staying recognisable.",
          },
          {
            kind: "interpretation",
            text: "Design the boring parts too. The 39 service pictograms — telephones, toilets, first aid — mattered to visitors as much as the celebrated posters.",
          },
          {
            kind: "interpretation",
            text: "Draw on local visual traditions without making them the message. The kamon reference informed the pictograms' compactness, yet the result was legible to people who had never seen a family crest.",
          },
        ],
      },
    ],
    related: ["tactile-paving", "qr-code", "butterfly-stool"],
    principles: ["designing-for-recognition", "standards-and-openness"],
    sources: ["japanhouse-1964", "agi-tokyo-1964", "jagda-kamekura", "british-museum-kamekura", "gmark-overview", "olympics-2020-pictograms"],
    readingMinutes: 6,
    reviewed: "2026-10-18",
  },

  /* ================================================================ */
  /* 5. Naoto Fukasawa                                                  */
  /* ================================================================ */
  {
    id: "naoto-fukasawa-cd-player",
    slug: "naoto-fukasawa-wall-mounted-cd-player",
    title: "Designing for the things we do without thinking",
    subject: "Naoto Fukasawa's wall-mounted CD player",
    subjectJa: "壁掛式CDプレーヤー",
    palette: ["#1a1a1a", "#b07a4a", "#8c8c8a", "#f2f2f0"],
    alternativeNames: ["MUJI wall-mounted CD player", "壁掛式CDプレーヤー"],
    dek: "You already know how to switch it on. Fukasawa's CD player borrows its whole interaction from a kitchen extractor fan.",
    summary:
      "Created for a 1999 workshop called \"Without Thought\" and produced by MUJI, Naoto Fukasawa's wall-mounted CD player asks nothing new of its user. It looks like a ventilation fan and works like one: pull the cord, and the disc spins. It is a compact case study in designing from behaviour people already have.",
    category: "Product design",
    tags: ["product design", "interaction design", "behaviour", "electronics", "MUJI"],
    originDate: "1999",
    originDateLabel: "1999",
    originLocation: "Tokyo, Japan",
    people: ["naoto-fukasawa"],
    organisations: [
      { name: "MUJI (Ryohin Keikaku)", role: "Manufacturer and retailer" },
      { name: "Diamond Design Management Network and IDEO Japan", role: "Organisers of the \"Without Thought\" workshop" },
    ],
    heroImage: "muji-cd-players",
    globalReach: false,
    timeline: [
      { date: "1996", label: "Fukasawa sets up IDEO's Tokyo office", place: "Tokyo", phase: "origin", cite: ["wikipedia-fukasawa"] },
      { date: "1999", label: "CD player shown at the \"Without Thought\" workshop; produced by MUJI", place: "Tokyo", phase: "origin", cite: ["vam-cd-player"] },
      { date: "2003", label: "Fukasawa founds his own studio and the ±0 brand; first INFOBAR phone goes on sale", place: "Tokyo", phase: "development", cite: ["wikipedia-fukasawa", "mynavi-infobar"] },
      { date: "2005", label: "CD player enters MoMA's collection (object no. 149.2005)", place: "New York", phase: "spread", cite: ["moma-cd-player"] },
      { date: "2006", label: "Super Normal exhibition with Jasper Morrison", place: "Tokyo", phase: "development", cite: ["wikipedia-fukasawa"] },
      { date: "2011", label: "V&A acquires an example (W.3-2011)", place: "London", phase: "spread", cite: ["vam-cd-player"] },
    ],
    sections: [
      {
        step: "problem",
        heading: "Products that need a manual",
        blocks: [
          {
            kind: "p",
            text: "Fukasawa's argument, as the V&A records it, was that products should not need an instruction manual: a well-designed object should trigger an instinctive response in its user. He called this idea \"Without Thought\".",
            cite: ["vam-cd-player"],
          },
        ],
      },
      {
        step: "idea",
        heading: "A disc that spins like a fan",
        blocks: [
          {
            kind: "p",
            text: "The CD player was Fukasawa's contribution to the 1999 edition of an annual workshop, also called \"Without Thought\", run by the Diamond Design Management Network and IDEO Japan, where Japanese designers were invited to explore intuition in product design.",
            cite: ["vam-cd-player"],
          },
          {
            kind: "p",
            text: "He noticed that a spinning CD resembles the rotating blades of a domestic extractor fan, and borrowed the fan's simplest feature: the pull-cord switch.",
            cite: ["vam-cd-player"],
          },
          { kind: "diagram", diagram: "pull-cord", caption: "Borrowed behaviour: the extractor fan and the CD player share one interaction. Editorial diagram." },
        ],
      },
      {
        step: "design-decision",
        heading: "Showing the disc, hiding the rest",
        blocks: [
          {
            kind: "p",
            text: "The player hangs on the wall without a lid, so the disc is visible as it turns — as the blades of a fan would be. Speakers are built into the body. The cord hangs below, inviting a pull to start and stop playback. Volume and track search sit discreetly on top.",
            cite: ["vam-cd-player"],
          },
          {
            kind: "facts",
            items: [
              { label: "Designer", value: "Naoto Fukasawa", cite: ["vam-cd-player"] },
              { label: "Manufacturer", value: "MUJI, 1999", cite: ["vam-cd-player"] },
              { label: "Material", value: "ABS plastic, electronic components", cite: ["moma-cd-player"] },
              { label: "Collections", value: "MoMA (149.2005), V&A (W.3-2011)", cite: ["moma-cd-player", "vam-cd-player"] },
            ],
          },
        ],
      },
      {
        step: "original-application",
        heading: "From workshop to shop shelf",
        blocks: [
          {
            kind: "p",
            text: "MUJI put the design into production. The V&A's gallery label connects it to MUJI's principles — the company name translates roughly as \"no brand, good quality\".",
            cite: ["vam-cd-player"],
          },
          { kind: "image", image: "muji-cd-players", size: "wide" },
        ],
      },
      {
        step: "turning-point",
        heading: "Recognition by museums",
        blocks: [
          {
            kind: "p",
            text: "The Museum of Modern Art in New York acquired the CD player as a gift from MUJI (object number 149.2005), and the V&A in London acquired an example in 2011. Fukasawa went on to found his own studio and the household brand ±0 in 2003, and that year designed the first INFOBAR mobile phone for au, also now in MoMA's collection.",
            cite: ["moma-cd-player", "vam-cd-player", "wikipedia-fukasawa", "mynavi-infobar", "moma-infobar"],
          },
          { kind: "image", image: "infobar2", size: "inline" },
        ],
      },
      {
        step: "world-today",
        heading: "An idea that outlasted its medium",
        blocks: [
          {
            kind: "interpretation",
            text: "The CD player belongs to a format many people no longer use, yet the interaction idea is independent of the technology — which is why it still rewards study.",
          },
          {
            kind: "p",
            text: "In 2006 Fukasawa and Jasper Morrison curated Super Normal, an exhibition of ordinary, often anonymous objects — another expression of attention to everyday use.",
            cite: ["wikipedia-fukasawa"],
          },
          {
            kind: "uncertain",
            text: "We have not attributed specific later products to the CD player's influence. Many designers work with familiar gestures and \"affordances\"; we have not found documentation tying particular products to this design.",
          },
        ],
      },
      {
        step: "lessons",
        heading: "What designers can learn",
        blocks: [
          {
            kind: "interpretation",
            text: "Borrow behaviour, not just appearance. The CD player resembles a fan, but the deeper move is reusing an action people already know.",
          },
          {
            kind: "interpretation",
            text: "Reduce controls to the essential gesture. Starting music is the main thing; it gets the most obvious control. Everything else is secondary and placed out of the way.",
          },
          {
            kind: "interpretation",
            text: "Familiarity is cultural. A pull-cord fan is a common household object in Japan; the metaphor may land differently where such fans are rare. Intuitive design always depends on whose habits you are designing from.",
          },
        ],
      },
    ],
    related: ["butterfly-stool", "qr-code"],
    principles: ["borrowed-behaviour", "touch-as-information"],
    sources: ["vam-cd-player", "moma-cd-player", "moma-infobar", "mynavi-infobar", "wikipedia-fukasawa"],
    readingMinutes: 5,
    reviewed: "2026-10-18",
  },
  /* ================================================================ */
  /* 6. Emergency exit pictogram                                       */
  /* ================================================================ */
  {
    id: "exit-sign",
    slug: "emergency-exit-running-man",
    title: "The figure who shows you the way out",
    subject: "The running-man exit sign",
    subjectJa: "非常口",
    palette: ["#1f8a4c", "#f2f2ef", "#2b2b2b", "#9aa39c"],
    alternativeNames: ["ISO 7010 E001", "非常口マーク"],
    dek: "A Japanese design competition, smoke-filled test rooms and a quiet argument at ISO produced the green sign above exit doors around the world.",
    summary:
      "In the late 1970s a Japanese fire-safety contest looked for an exit sign that anyone could understand — whatever language they read, and through smoke. Yukio Ota's running figure won after testing, and Japan put it forward to ISO, where it became the basis of the international emergency exit sign.",
    category: "Information design",
    tags: ["pictograms", "wayfinding", "safety", "standards", "public signage"],
    originDate: "1979",
    originDateLabel: "Late 1970s · ISO from the mid-1980s",
    originLocation: "Japan",
    people: ["yukio-ota"],
    heroImage: "exit-sign-running-man",
    globalReach: true,
    timeline: [
      { date: "1964", label: "Ota begins LoCoS, a pictorial language", place: "Japan", phase: "origin", cite: ["wikipedia-ota"] },
      { date: "late 1970s", label: "Japanese fire-safety contest for a national exit sign draws 3,300 entries", place: "Japan", phase: "origin", cite: ["slate-exit-sign"] },
      { date: "1980", label: "Japan submits Ota's design to ISO, alongside a similar Soviet proposal", place: "International", phase: "development", cite: ["slate-exit-sign"] },
      { date: "1985 or 1987", label: "Adopted for international use (sources differ on the year)", place: "International", phase: "spread", cite: ["slate-exit-sign", "wikipedia-ota"] },
      { date: "2006", label: "New York City requires the pictogram on high-rise fire doors", place: "New York", phase: "spread", cite: ["slate-exit-sign"] },
      { date: "today", label: "Registered as ISO 7010 E001", place: "International", phase: "today", cite: ["iso-7010"] },
    ],
    sections: [
      {
        step: "problem",
        heading: "A word nobody can read in smoke",
        blocks: [
          {
            kind: "interpretation",
            text: "A text sign such as 非常出口 — emergency exit — works for people who read Japanese and can see clearly. In a fire, smoke cuts visibility, and in buildings used by visitors, not everyone reads the language on the wall. The contest that produced the running figure tested entries for exactly this: legibility in smoke.",
          },
          { kind: "image", image: "exit-sign-text-sapporo", size: "inline" },
        ],
      },
      {
        step: "idea",
        heading: "A person, a door, a direction",
        blocks: [
          {
            kind: "p",
            text: "In the late 1970s a Japanese association devoted to fire safety held a contest for a new national exit sign. It drew 3,300 entries. Shortlisted designs were tested to see how readily each could be understood in a smoky environment, and Yukio Ota's figure — a person running towards a doorway, white on green — was chosen.",
            cite: ["slate-exit-sign"],
          },
          {
            kind: "p",
            text: "Ota had been working on pictorial communication for years: from 1964 he developed LoCoS, a language of pictures meant to work without words.",
            cite: ["wikipedia-ota"],
          },
          {
            kind: "uncertain",
            text: "Some accounts name Japan's Fire and Disaster Management Agency as the contest organiser and give 1979 as the year; Slate describes it only as a fire-safety association in the late 1970s. We have not yet confirmed the organiser from a Japanese primary source.",
            cite: ["slate-exit-sign"],
          },
        ],
      },
      {
        step: "design-decision",
        heading: "Fifty-eight versions of one running man",
        blocks: [
          {
            kind: "p",
            text: "Ota drew 58 variations. One committee member objected that the figure looked as if it were sprinting out of the door, so Ota adjusted the angle of the legs — the aim, he said, was to suggest people should run slowly.",
            cite: ["slate-exit-sign"],
          },
          {
            kind: "interpretation",
            text: "That small adjustment shows how a safety sign is also a behavioural instruction. A figure that looks panicked could encourage panic; a figure moving purposefully suggests the pace you want in a crowded stairwell.",
          },
          {
            kind: "facts",
            items: [
              { label: "Entries to contest", value: "3,300", cite: ["slate-exit-sign"] },
              { label: "Variations drawn", value: "58", cite: ["slate-exit-sign"] },
              { label: "Colour", value: "White figure on green", cite: ["slate-exit-sign"] },
              { label: "International code", value: "ISO 7010 E001", cite: ["iso-7010"] },
            ],
          },
        ],
      },
      {
        step: "turning-point",
        heading: "Two similar ideas at ISO",
        blocks: [
          {
            kind: "p",
            text: "Japan submitted the design to the International Organization for Standardization in 1980. ISO had been close to adopting a Soviet proposal — also a man running through a door. The Soviet side objected that Ota's version had no door; the Japanese side argued that a vertical line in the Soviet design made the figure harder to recognise. ISO agreed to consider Ota's design because of the testing behind it.",
            cite: ["slate-exit-sign"],
          },
          {
            kind: "p",
            text: "Ota later said that two teams independently arriving at such similar ideas convinced him it was \"a fundamentally human exit sign\".",
            cite: ["slate-exit-sign"],
          },
          {
            kind: "uncertain",
            text: "Sources give different years for international adoption — Slate says 1985, other sources 1987 — and we have not seen the original ISO publication. We show both.",
            cite: ["slate-exit-sign", "wikipedia-ota"],
          },
        ],
      },
      {
        step: "beyond-origins",
        heading: "Green running man, red EXIT",
        blocks: [
          {
            kind: "p",
            text: "The figure is registered today as ISO 7010 E001, part of the international set of safety signs. Adoption is not universal: in the United States the red text sign EXIT remains standard, although the National Fire Protection Association lists the ISO pictogram among auxiliary symbols, and New York City required it on high-rise fire doors from 2006.",
            cite: ["iso-7010", "slate-exit-sign"],
          },
        ],
      },
      {
        step: "world-today",
        heading: "Above the door",
        blocks: [
          { kind: "image", image: "exit-sign-running-man", size: "wide" },
          {
            kind: "interpretation",
            text: "Because the sign is everywhere, it is easy to forget it was ever designed. Its quiet success is that most people understand it without having been taught.",
          },
        ],
      },
      {
        step: "lessons",
        heading: "What designers can learn",
        blocks: [
          { kind: "interpretation", text: "Test in the real conditions of use. The smoke tests, not aesthetic preference, decided both the Japanese contest and the argument at ISO." },
          { kind: "interpretation", text: "Pose communicates behaviour. A few degrees in the legs change the message from \"flee\" to \"leave\"." },
          { kind: "interpretation", text: "Evidence persuades standards bodies. Documented testing gave a late proposal a hearing against one that was nearly adopted." },
        ],
      },
    ],
    limitations: [
      { text: "Pictograms still have to be learned; their meaning is not universal by nature.", cite: [] },
      { text: "Countries continue to use different exit signs, including text-based ones, so travellers meet more than one system.", cite: ["slate-exit-sign"] },
    ],
    related: ["tokyo-1964-design", "tactile-paving", "emoji"],
    principles: ["designing-for-recognition", "standards-and-openness"],
    sources: ["slate-exit-sign", "wikipedia-ota", "iso-7010"],
    readingMinutes: 5,
    reviewed: "2026-10-26",
  },

  /* ================================================================ */
  /* 7. Emoji                                                          */
  /* ================================================================ */
  {
    id: "emoji",
    slug: "emoji",
    title: "Feelings in twelve by twelve pixels",
    subject: "Emoji",
    subjectJa: "絵文字",
    palette: ["#111111", "#e94b4b", "#f2c94c", "#f2f2ef"],
    alternativeNames: ["絵文字 (e-moji, picture character)"],
    dek: "Before smartphones, a team at NTT DOCOMO squeezed weather, hearts and faces onto tiny mobile screens. The set became one of the ancestors of the emoji everyone now types.",
    summary:
      "In 1998–99 Shigetaka Kurita, working on DOCOMO's i-mode mobile internet service, designed 176 pictograms on a 12×12 pixel grid. They were not the first pictograms on a Japanese phone, but they are among the best-documented early sets, and Japanese carrier emoji were later unified into the Unicode standard that made them global.",
    category: "Information design",
    tags: ["digital interaction", "pictograms", "mobile", "communication", "standards"],
    originDate: "1999",
    originDateLabel: "1998–1999",
    originLocation: "NTT DOCOMO, Tokyo",
    people: ["shigetaka-kurita"],
    organisations: [
      { name: "NTT DOCOMO", role: "Mobile carrier; i-mode service" },
      { name: "Unicode Consortium", role: "Standardised emoji internationally" },
    ],
    globalReach: true,
    timeline: [
      { date: "1990s", label: "A heart symbol on a DOCOMO pager proves popular with young users", place: "Japan", phase: "origin", cite: ["wikipedia-kurita"] },
      { date: "1998–1999", label: "Kurita designs 176 pictograms for i-mode on a 12×12 grid", place: "Tokyo", phase: "origin", cite: ["wikipedia-kurita"] },
      { date: "2000s", label: "Japanese carriers run incompatible emoji sets", place: "Japan", phase: "development", cite: ["unicode-emoji-history"] },
      { date: "2010-10", label: "Unicode 6.0 incorporates emoji, making them interoperable worldwide", place: "International", phase: "spread", cite: ["unicode-emoji-history"] },
      { date: "2016", label: "MoMA adds the original DOCOMO set to its collection", place: "New York", phase: "today", cite: ["wikipedia-kurita"] },
    ],
    sections: [
      {
        step: "problem",
        heading: "Small screens, short messages, lost tone",
        blocks: [
          {
            kind: "p",
            text: "Early mobile messages were short and plain. A heart pictogram on a DOCOMO pager aimed at young users became popular; when a later, business-oriented pager dropped it, users protested and it was brought back. The demand for pictures alongside text was already visible.",
            cite: ["wikipedia-kurita"],
          },
        ],
      },
      {
        step: "idea",
        heading: "A vocabulary of tiny pictures",
        blocks: [
          {
            kind: "p",
            text: "When DOCOMO prepared i-mode, its mobile internet service, Shigetaka Kurita was assigned to design a set of pictograms. He produced 176, including weather symbols, hearts and faces, and drew on manga symbols, weather forecast icons, Chinese characters and street signs.",
            cite: ["wikipedia-kurita"],
          },
          {
            kind: "uncertain",
            text: "DOCOMO's set is often called the first emoji. Emojipedia has documented earlier Japanese phones with pictogram sets, so we describe DOCOMO's as one of the earliest and most influential sets, not the first.",
            cite: ["emojipedia-first-set"],
          },
        ],
      },
      {
        step: "design-decision",
        heading: "Designing on a 12×12 grid",
        blocks: [
          {
            kind: "p",
            text: "Each pictogram was drawn on a grid of just 12 by 12 pixels — 144 squares to convey \"sunny\", \"love\" or \"happy\".",
            cite: ["wikipedia-kurita"],
          },
          { kind: "diagram", diagram: "emoji-grid", caption: "Working at 12×12: every pixel is a decision. A generic heart drawn on the grid for illustration — not one of Kurita's original designs, which remain the property of NTT DOCOMO." },
          {
            kind: "interpretation",
            text: "The grid forced the same discipline as a pictogram set like Tokyo 1964's: reduce each idea to the few marks that carry it. Borrowing from manga conventions — sweat drops, sparkles — gave users a visual language many already knew.",
          },
        ],
      },
      {
        step: "turning-point",
        heading: "From rival sets to one standard",
        blocks: [
          {
            kind: "p",
            text: "Other Japanese carriers developed their own sets, and they were incompatible: an emoji sent from one network could arrive as a different symbol or nothing at all. Engineers at Google and Apple worked to map the carrier sets onto a shared encoding, and Unicode 6.0, released in October 2010, incorporated emoji into the international text standard.",
            cite: ["unicode-emoji-history"],
          },
        ],
      },
      {
        step: "beyond-origins",
        heading: "A Japanese word in every language",
        blocks: [
          {
            kind: "p",
            text: "Once emoji were in Unicode, any device could exchange them, and the Japanese word — e (picture) + moji (character) — travelled with them. In 2016 MoMA added DOCOMO's original 176 to its collection and exhibited them as \"Inbox: The Original Emoji\".",
            cite: ["unicode-emoji-history", "wikipedia-kurita"],
          },
          {
            kind: "uncertain",
            text: "Today's emoji are designed separately by each platform and have expanded far beyond the original sets. We have not traced which specific modern emoji descend directly from Kurita's designs.",
          },
        ],
      },
      {
        step: "lessons",
        heading: "What designers can learn",
        blocks: [
          { kind: "interpretation", text: "Constraints clarify. A 12×12 grid leaves no room for decoration, only meaning." },
          { kind: "interpretation", text: "Notice what users fight to keep. The protest over a missing heart symbol was a design brief in disguise." },
          { kind: "interpretation", text: "Interoperability decides reach. Emoji became global not when they were invented, but when they were standardised." },
        ],
      },
    ],
    related: ["exit-sign", "tokyo-1964-design", "qr-code"],
    principles: ["designing-for-recognition", "standards-and-openness"],
    sources: ["wikipedia-kurita", "emojipedia-first-set", "unicode-emoji-history", "guardian-kurita-2016"],
    readingMinutes: 5,
    reviewed: "2026-10-26",
  },

  /* ================================================================ */
  /* 8. Cup Noodles                                                    */
  /* ================================================================ */
  {
    id: "cup-noodles",
    slug: "cup-noodles",
    title: "The package that became the bowl",
    subject: "Cup Noodles",
    subjectJa: "カップヌードル",
    palette: ["#c8102e", "#f4f1ea", "#d4a640", "#3a3a3a"],
    alternativeNames: ["カップヌードル", "Cup O'Noodles (US, 1973)"],
    dek: "Momofuku Ando fried noodles like tempura so they would keep, then watched people eat them from paper cups — and redesigned the meal around the container.",
    summary:
      "After developing Chicken Ramen in 1958, Momofuku Ando noticed on a 1966 trip to the United States that people broke the noodles into cups and ate them with forks. Cup Noodles (1971) answered with a single object that is package, cooking vessel and bowl — including a clever way of holding the noodles in the middle of the cup.",
    category: "Product design",
    tags: ["packaging", "food", "everyday products", "manufacturing"],
    originDate: "1971",
    originDateLabel: "Chicken Ramen 1958 · Cup Noodles 1971",
    originLocation: "Ikeda, Osaka, Japan",
    people: ["momofuku-ando"],
    organisations: [{ name: "Nissin Foods", role: "Manufacturer, founded by Ando" }],
    heroImage: "cup-noodle",
    globalReach: true,
    timeline: [
      { date: "1957", label: "Ando loses almost everything when a credit union he directs fails", place: "Osaka", phase: "origin", cite: ["nissin-founder"] },
      { date: "1958-08-25", label: "Chicken Ramen goes on sale at ¥35", place: "Japan", phase: "origin", cite: ["nissin-founder"] },
      { date: "1966", label: "On a US trip Ando sees noodles eaten from paper cups with forks", place: "United States", phase: "development", cite: ["nissin-founder"] },
      { date: "1971-09-18", label: "Cup Noodles launches at ¥100", place: "Japan", phase: "origin", cite: ["nissin-founder"] },
      { date: "1973", label: "Launched in the US as Cup O'Noodles", place: "United States", phase: "spread", cite: ["nissin-founder"] },
    ],
    sections: [
      {
        step: "problem",
        heading: "Ramen that waits for you",
        blocks: [
          {
            kind: "p",
            text: "In 1957 Momofuku Ando lost nearly everything when a credit union he directed failed. He resolved to make ramen people could prepare at home with nothing but hot water, and set five conditions: it had to taste good, keep for a long time, be quick to prepare, be cheap and be safe.",
            cite: ["nissin-founder"],
          },
        ],
      },
      {
        step: "idea",
        heading: "Tempura, applied to noodles",
        blocks: [
          {
            kind: "p",
            text: "Working alone for about a year in a shed behind his house in Ikeda, Ando found his answer in tempura: frying drove the moisture out of the noodles so they would keep, and left tiny holes that let hot water soften them again. Chicken Ramen went on sale on 25 August 1958.",
            cite: ["nissin-founder"],
          },
          { kind: "image", image: "ando-workshop", size: "inline" },
        ],
      },
      {
        step: "turning-point",
        heading: "Paper cups in an American supermarket",
        blocks: [
          {
            kind: "p",
            text: "On a 1966 trip to Europe and the United States, Ando watched supermarket staff break Chicken Ramen into paper cups, add hot water and eat with forks. Nissin records this as the origin of the idea of noodles in a cup.",
            cite: ["nissin-founder"],
          },
        ],
      },
      {
        step: "design-decision",
        heading: "Suspended in the middle",
        blocks: [
          {
            kind: "p",
            text: "Nearly forty container prototypes were tested before an enlarged paper-cup shape in polystyrene foam — then unusual in Japan — was chosen. The noodle block was made larger than the base of the cup, so it would sit suspended in the middle of the cup rather than resting on the bottom.",
            cite: ["nissin-founder"],
          },
          {
            kind: "p",
            text: "Dropping the block into the cup made it tip. The solution was to reverse the process: turn the block upside down and lower the cup over it.",
            cite: ["nissin-founder"],
          },
          { kind: "diagram", diagram: "cup-suspension", caption: "The block is larger than the cup's base, so it wedges mid-cup with space beneath. To fill reliably, the cup is lowered over an upturned block. Editorial diagram." },
          {
            kind: "interpretation",
            text: "Holding the noodles off the bottom plausibly lets hot water reach the whole block and cushions it in transit — though Nissin's account we have read records the solution, not its reasons.",
          },
          {
            kind: "facts",
            items: [
              { label: "Launch", value: "18 September 1971", cite: ["nissin-founder"] },
              { label: "Price", value: "¥100 (bag noodles ¥25)", cite: ["nissin-founder"] },
              { label: "Container prototypes", value: "Nearly 40", cite: ["nissin-founder"] },
              { label: "Material", value: "Polystyrene foam", cite: ["nissin-founder"] },
            ],
          },
        ],
      },
      {
        step: "beyond-origins",
        heading: "Hot water anywhere",
        blocks: [
          {
            kind: "p",
            text: "At four times the price of bag noodles, Cup Noodles needed new routes to customers. Nissin installed hot-water vending machines and handed out samples in Ginza. The product launched in the United States as Cup O'Noodles in 1973, and Nissin later opened bases across Asia, the Americas and Europe with locally adapted flavours.",
            cite: ["nissin-founder"],
          },
          { kind: "image", image: "cup-noodle", size: "inline" },
        ],
      },
      {
        step: "lessons",
        heading: "What designers can learn",
        blocks: [
          { kind: "interpretation", text: "Watch how people misuse your product. Ando's breakthrough came from seeing customers improvise with paper cups." },
          { kind: "interpretation", text: "Collapse steps into one object. Package, pot and bowl became a single thing, removing equipment from the meal entirely." },
          { kind: "interpretation", text: "Solve manufacturing as design. Turning the process upside down — literally — made the suspended block possible at scale." },
        ],
      },
    ],
    limitations: [
      { text: "Single-use containers raise environmental questions, which apply to any disposable food packaging.", cite: [] },
    ],
    related: ["naoto-fukasawa-cd-player", "butterfly-stool", "rice-cooker"],
    principles: ["material-and-making", "borrowed-behaviour"],
    sources: ["nissin-founder"],
    readingMinutes: 5,
    reviewed: "2026-10-26",
  },

  /* ================================================================ */
  /* 9. Walkman                                                        */
  /* ================================================================ */
  {
    id: "walkman",
    slug: "sony-walkman",
    title: "Music you could carry, and share",
    subject: "Sony Walkman TPS-L2",
    subjectJa: "ウォークマン",
    palette: ["#2d4a7a", "#c9ccd1", "#e8892a", "#111111"],
    alternativeNames: ["Soundabout (US)", "Stowaway (UK)", "Freestyle (Sweden)"],
    dek: "Sony took a reporter's tape recorder, removed the recording, added stereo — and created a new way to move through a city.",
    summary:
      "Sony's TPS-L2 (1979) began with co-founder Masaru Ibuka wanting stereo music he could carry. The tape recorder division adapted its Pressman interview recorder into a playback-only stereo player. Two headphone sockets and a \"hotline\" button show that it was designed to be shared, not only listened to alone.",
    category: "Product design",
    tags: ["consumer electronics", "industrial design", "music", "miniaturisation"],
    originDate: "1979",
    originDateLabel: "1979",
    originLocation: "Sony, Tokyo",
    people: [],
    collaborators: [
      { name: "Masaru Ibuka", role: "Sony co-founder whose request started the project", cite: ["vam-walkman"] },
      { name: "Sony tape recorder division", role: "Adapted the Pressman recorder into the TPS-L2", cite: ["vam-walkman"] },
    ],
    organisations: [{ name: "Sony Corporation", role: "Developer and manufacturer" }],
    heroImage: "walkman-tps-l2",
    globalReach: true,
    timeline: [
      { date: "1970s", label: "Ibuka finds the TC-D5 recorder he takes on flights too bulky", place: "Tokyo", phase: "origin", cite: ["vam-walkman"] },
      { date: "1979-07-01", label: "TPS-L2 goes on sale in Japan at ¥33,000", place: "Japan", phase: "origin", cite: ["networkworld-walkman-30"] },
      { date: "1979–1980", label: "Sold abroad as Soundabout, Stowaway and Freestyle", place: "US, UK, Sweden", phase: "spread", cite: ["vam-walkman"] },
      { date: "later", label: "Renamed Walkman in every market", place: "International", phase: "spread", cite: ["vam-walkman"] },
    ],
    sections: [
      {
        step: "problem",
        heading: "Stereo sound, too big to carry",
        blocks: [
          {
            kind: "p",
            text: "Sony co-founder Masaru Ibuka wanted to listen to stereo music while travelling. The TC-D5 cassette recorder he carried on long flights was too bulky, and he asked the tape recorder division for something smaller.",
            cite: ["vam-walkman"],
          },
        ],
      },
      {
        step: "idea",
        heading: "Take away a feature",
        blocks: [
          {
            kind: "p",
            text: "The division started from the Pressman TCM-5000, a compact recorder for press interviews. It added stereo playback and removed the recording function, and lower-cost components kept the price down.",
            cite: ["vam-walkman"],
          },
          {
            kind: "interpretation",
            text: "Removing recording was a bold subtraction at a time when a cassette machine was expected to record. It turned a tool for capturing sound into an object for experiencing it.",
          },
        ],
      },
      {
        step: "design-decision",
        heading: "Built for two",
        blocks: [
          {
            kind: "p",
            text: "The TPS-L2 had two headphone sockets so that two people could listen at once, and a \"hotline\" button that switched on a small built-in microphone, letting listeners talk to each other over the music.",
            cite: ["vam-walkman"],
          },
          { kind: "image", image: "walkman-teardown", size: "wide" },
          {
            kind: "interpretation",
            text: "These features suggest Sony anticipated a worry about isolation — that personal headphones might cut people off — and designed a social mode into the very first model.",
          },
        ],
      },
      {
        step: "original-application",
        heading: "Launch in Japan",
        blocks: [
          {
            kind: "p",
            text: "The TPS-L2 went on sale in Japan on 1 July 1979, priced at ¥33,000.",
            cite: ["networkworld-walkman-30"],
          },
          {
            kind: "facts",
            items: [
              { label: "Based on", value: "Pressman TCM-5000", cite: ["vam-walkman"] },
              { label: "Japan launch", value: "1 July 1979", cite: ["networkworld-walkman-30"] },
              { label: "Price", value: "¥33,000", cite: ["networkworld-walkman-30"] },
              { label: "Size (V&A example)", value: "15 × 9 × 3.5 cm", cite: ["vam-walkman"] },
            ],
          },
        ],
      },
      {
        step: "beyond-origins",
        heading: "Three names, then one",
        blocks: [
          {
            kind: "p",
            text: "Abroad it was first sold as the Soundabout in the United States, the Stowaway in the United Kingdom and the Freestyle in Sweden, before the Walkman name was adopted everywhere.",
            cite: ["vam-walkman"],
          },
          {
            kind: "p",
            text: "The V&A describes how, because cassettes do not skip like records, the player started a trend of listening to music on the move — giving commuting and errands a private soundtrack.",
            cite: ["vam-walkman"],
          },
          {
            kind: "uncertain",
            text: "Popular accounts differ on who conceived the product (Ibuka, Akio Morita or engineers such as Nobutoshi Kihara), how quickly the prototype was built, and early sales figures. We have relied on the V&A's record and not yet on Sony's own corporate history, which our tools could not access.",
          },
        ],
      },
      {
        step: "lessons",
        heading: "What designers can learn",
        blocks: [
          { kind: "interpretation", text: "Subtraction can create a category. Removing a feature everyone expected made a new kind of product." },
          { kind: "interpretation", text: "Design for the social side effects. Two sockets and a talk button addressed a cost of personal listening before anyone complained about it." },
          { kind: "interpretation", text: "Recombine what you already make. The Walkman reused an existing mechanism; the innovation was in the brief." },
        ],
      },
    ],
    related: ["naoto-fukasawa-cd-player", "cup-noodles", "qr-code"],
    principles: ["borrowed-behaviour", "material-and-making"],
    sources: ["vam-walkman", "networkworld-walkman-30"],
    readingMinutes: 5,
    reviewed: "2026-10-26",
  },

  /* ================================================================ */
  /* 10. Automatic rice cooker                                         */
  /* ================================================================ */
  {
    id: "rice-cooker",
    slug: "automatic-rice-cooker",
    title: "The appliance that learned when rice is done",
    subject: "The automatic electric rice cooker",
    subjectJa: "自動式電気釜",
    palette: ["#e9e4d8", "#8f8a80", "#2b2b2b", "#c9b48a"],
    alternativeNames: ["Toshiba ER-4", "電気釜"],
    dek: "Rice used to need constant watching. A small factory family and Toshiba turned boiling water into a timer, and gave Japanese kitchens back their mornings.",
    summary:
      "Toshiba's ER-4, on sale from December 1955, switched itself off when rice was done. The working design came from Yoshitada Minami, whose small factory made water heaters for Toshiba, with years of testing credited to his wife, Fumiko. Its clever trick: let water in an outer pot boil away, and use the jump in temperature to trip a bimetallic switch.",
    category: "Industrial design",
    tags: ["household objects", "appliances", "engineering", "domestic labour"],
    originDate: "1955",
    originDateLabel: "On sale 10 December 1955",
    originLocation: "Tokyo, Japan",
    people: [],
    collaborators: [
      { name: "Yoshitada Minami", role: "Ran the small family factory that developed the working design", cite: ["ieee-spectrum-rice-cooker"] },
      { name: "Fumiko Minami", role: "Credited with years of testing that set the cooking method; documentation of her role is recent", cite: ["ieee-spectrum-rice-cooker"] },
      { name: "Shogo Yamada (Toshiba)", role: "Appliance development manager who commissioned the work", cite: ["ieee-spectrum-rice-cooker"] },
    ],
    organisations: [{ name: "Toshiba", role: "Manufacturer and seller" }],
    globalReach: false,
    timeline: [
      { date: "early 1950s", label: "Toshiba turns to the Minamis' water-heater factory to develop a cooker", place: "Tokyo", phase: "origin", cite: ["ieee-spectrum-rice-cooker"] },
      { date: "1955-12-10", label: "ER-4 goes on sale for ¥3,200", place: "Japan", phase: "origin", cite: ["ieee-spectrum-rice-cooker"] },
      { date: "1956–57", label: "Sales reach more than 200,000 a month within a year", place: "Japan", phase: "development", cite: ["ieee-spectrum-rice-cooker"] },
      { date: "2026", label: "An IEEE Milestone recognising the cooker is under review", place: "International", phase: "today", cite: ["ieee-milestone-rice-cooker"] },
    ],
    sections: [
      {
        step: "problem",
        heading: "Someone had to watch the pot",
        blocks: [
          {
            kind: "interpretation",
            text: "Cooking rice well over a flame meant judging heat and timing by experience, and staying near the stove. In most households that work fell to women, often early in the morning. An appliance that could judge \"done\" by itself promised to give that time back.",
          },
        ],
      },
      {
        step: "idea",
        heading: "Let the water keep time",
        blocks: [
          {
            kind: "p",
            text: "Toshiba's appliance development manager, Shogo Yamada, turned to Yoshitada Minami, who ran a small family factory making electric water heaters for Toshiba — and which was close to bankruptcy. Their working design heated an inner pot of rice indirectly, inside an outer pot holding a measured amount of water.",
            cite: ["ieee-spectrum-rice-cooker"],
          },
          {
            kind: "p",
            text: "While water remained in the outer pot, the temperature stayed at boiling point. Once it had boiled away, the temperature rose above 100 °C, a bimetallic switch bent, and the power was cut. One cup of water took about twenty minutes to evaporate.",
            cite: ["ieee-spectrum-rice-cooker"],
          },
          { kind: "diagram", diagram: "rice-cooker", caption: "Indirect heating: water in the outer pot holds the temperature at 100 °C. When it has boiled away, the temperature jumps and the bimetallic switch cuts the power. Editorial diagram, simplified." },
        ],
      },
      {
        step: "design-decision",
        heading: "Physics instead of a clock",
        blocks: [
          {
            kind: "interpretation",
            text: "The design uses the physics of boiling as its sensor. Rather than adding a timer that the user must set, it measures a change that happens only when the job is done. IEEE Spectrum notes that the same basic principle is still used in rice cookers today.",
          },
          {
            kind: "p",
            text: "Toshiba describes its 1955 cooker as using a patented indirect, triple-layered structure.",
            cite: ["toshiba-museum-cooker"],
          },
        ],
      },
      {
        step: "turning-point",
        heading: "Slow start, then 200,000 a month",
        blocks: [
          {
            kind: "p",
            text: "The ER-4 went on sale on 10 December 1955 for ¥3,200 — roughly a third of an average monthly salary — and sales started slowly. Within a year Toshiba was selling more than 200,000 cookers a month, many of them made at the Minamis' factory, which was rescued in the process.",
            cite: ["ieee-spectrum-rice-cooker"],
          },
          {
            kind: "facts",
            items: [
              { label: "Model", value: "Toshiba ER-4", cite: ["ieee-spectrum-rice-cooker"] },
              { label: "On sale", value: "10 December 1955", cite: ["ieee-spectrum-rice-cooker"] },
              { label: "Price", value: "¥3,200", cite: ["ieee-spectrum-rice-cooker"] },
              { label: "Switch", value: "Bimetallic, trips above 100 °C", cite: ["ieee-spectrum-rice-cooker"] },
            ],
          },
        ],
      },
      {
        step: "world-today",
        heading: "Credit, revisited",
        blocks: [
          {
            kind: "p",
            text: "Popular accounts increasingly credit Fumiko Minami, a mother of six, with years of research and testing that established a reliable method and toughened the design. Historian Allison Marsh notes, however, finding no mention of her role before a 2012 book chapter.",
            cite: ["ieee-spectrum-rice-cooker"],
          },
          {
            kind: "uncertain",
            text: "How credit should be shared between Toshiba, Yoshitada Minami and Fumiko Minami is still being discussed, including in the draft IEEE Milestone citation. We name all three and mark the evidence for each.",
            cite: ["ieee-milestone-rice-cooker"],
          },
        ],
      },
      {
        step: "lessons",
        heading: "What designers can learn",
        blocks: [
          { kind: "interpretation", text: "Sense the outcome, not the input. The cooker measures \"done\" rather than asking the user to predict time." },
          { kind: "interpretation", text: "Testing is design work. Much of the product's reliability came from patient, unglamorous experiments." },
          { kind: "interpretation", text: "Look again at who gets credit. Histories of invention often leave out the people who did the testing and the domestic work." },
        ],
      },
    ],
    related: ["cup-noodles", "walkman", "naoto-fukasawa-cd-player"],
    principles: ["material-and-making"],
    sources: ["ieee-spectrum-rice-cooker", "toshiba-museum-cooker", "ieee-milestone-rice-cooker"],
    readingMinutes: 5,
    reviewed: "2026-10-26",
  },
];
