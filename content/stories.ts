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
      "Seiichi Miyake designed tactile blocks in 1965 so that people with visual impairments could feel where a safe path ran and where a hazard began. From one crossing in Okayama the idea spread across Japan's railways and, decades later, into national standards on several continents, each adapting it in its own way.",
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
            text: "Seiichi Miyake, an Okayama inventor, designed a paving block with a raised surface pattern in 1965 and paid for the first blocks himself. The original blocks were cast in cement. In Japan they became known as tenji burokku (braille blocks), after the Japanese word for braille.",
            cite: ["vam-tactile-slab", "wikipedia-miyake"],
          },
          {
            kind: "p",
            text: "The distinctive move was to give the ground itself a vocabulary. Rather than a single warning texture, the system distinguishes two messages: raised bars that say \"follow this way\" and raised dots that say \"stop, something changes here\".",
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
            text: "The system rests on two distinct textures (raised lines that mark a path to follow and raised domes that signal a place to stop) and on colour: the blocks were made yellow so that they would also help people with partial sight.",
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
            text: "Tactile paving reached the United Kingdom in 1990 and the United States in the early 1990s, where the Americans with Disabilities Act created requirements for detectable warning surfaces. Today the international standard ISO 23599 describes the same two families Miyake started with, attention patterns and guiding patterns, while acknowledging that countries use their own designs.",
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
            text: "A small vocabulary goes a long way. Two textures, go and stop, are easy to learn and hard to confuse. Much of the system's portability comes from that restraint.",
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
      { text: "Inconsistent installation (mixed patterns, misplaced warning fields, broken blocks) can mislead the people the system is meant to help.", cite: ["wikipedia-tactile-paving"] },
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
      "A small team at DENSO WAVE led by Masahiro Hara designed the QR Code to hold far more information than a barcode, including kanji and kana, and to be found and read quickly at any angle. Standardisation, camera phones and an open patent policy carried it from kanban labels to menus, tickets and payments.",
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
            text: "Hara led a team of two. Their answer was a two-dimensional matrix: instead of reading information along one line, a scanner reads it across a grid, horizontally and vertically. Two-dimensional codes already existed. The Japan Automotive Hall of Fame notes that QR Code succeeded an earlier 2D code, used alongside it for a while, so the contribution was less the matrix itself than the way this one was engineered to be found and read fast.",
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
            text: "The most recognisable part of a QR Code, the three nested squares in its corners, is also its cleverest. To find a code quickly in a cluttered image, a scanner needs a shape that is unlikely to appear anywhere else. The team surveyed printed material to find the black-and-white sequence that occurred least often. The answer was a ratio of 1:1:3:1:1.",
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
            text: "The first major users were in the automotive industry, where QR Codes were used on electronic kanban: the cards that signal what parts to produce and move in a just-in-time system. Food, pharmaceutical and contact-lens makers then adopted them for traceability.",
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
            text: "Later large-scale uses, such as QR-based mobile payment systems built by companies outside Japan, or contact-tracing check-ins during the COVID-19 pandemic, were developed independently by other organisations using the open standard. They show the code's reach, not DENSO WAVE's design intent, and we have not yet sourced them in detail.",
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
      { text: "Because codes are not human-readable, people cannot see where a code leads before scanning, a known route for fraud.", cite: [] },
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
            text: "The V&A describes the Butterfly Stool as combining a Western stool form with a profile that evokes Japanese architecture and calligraphy: a piece of furniture made to sit between two ways of living.",
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
            text: "Using one part twice halves the number of moulds and makes assembly straightforward, an elegant fit between the form and the economics of making it.",
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
    dek: "A red disc, five gold rings and a set of pictograms that let visitors find their way without a shared language. The first time an Olympic Games was designed as a system.",
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
            text: "Kamekura's emblem places a large red disc above the five Olympic rings and the words TOKYO 1964 in gold. The first poster, issued in 1961, presented the emblem alone on white. Later posters in the series used dramatic action photography, credited to photographer Osamu Hayasaki and photo director Jo Murakoshi, with the emblem as a constant. The series won the Ministry of Education's Grand Prize.",
            cite: ["british-museum-kamekura", "agi-tokyo-1964"],
          },
          { kind: "diagram", diagram: "poster-system", caption: "How the system held together: a fixed emblem block, a consistent typographic band and a changing image or pictogram. Editorial diagram based on surviving programmes; not a reproduction of any poster." },
          {
            kind: "p",
            text: "Yoshiro Yamashita led the design of 59 pictograms: 20 for sports and 39 for services such as telephones, first aid, banks and toilets. Katsumi cited traditional Japanese family crests, kamon, as an inspiration: compact emblems that communicate identity at a glance.",
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
            text: "It is often said that specific later systems, notably the 1972 Munich pictograms, were directly modelled on Tokyo's. We have not yet sourced documentation of that relationship, so we only claim the continuation of the practice.",
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
            text: "Pictogram-based wayfinding is now so normal at airports, stations and stadiums that it is hard to see it as a design choice at all. Tokyo 1964 is one of the landmark moments in how that approach became visible to a global audience, alongside many other contributors to public information design worldwide.",
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
            text: "Design the boring parts too. The 39 service pictograms (telephones, toilets, first aid) mattered to visitors as much as the celebrated posters.",
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
            text: "The player hangs on the wall without a lid, so the disc is visible as it turns, as the blades of a fan would be. Speakers are built into the body. The cord hangs below, inviting a pull to start and stop playback. Volume and track search sit discreetly on top.",
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
            text: "MUJI put the design into production. The V&A's gallery label connects it to MUJI's principles; the company name translates roughly as \"no brand, good quality\".",
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
            text: "The CD player belongs to a format many people no longer use, yet the interaction idea is independent of the technology, which is why it still rewards study.",
          },
          {
            kind: "p",
            text: "In 2006 Fukasawa and Jasper Morrison curated Super Normal, an exhibition of ordinary, often anonymous objects, another expression of attention to everyday use.",
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
      "In the late 1970s a Japanese fire-safety contest looked for an exit sign that anyone could understand, whatever language they read, and through smoke. Yukio Ota's running figure won after testing, and Japan put it forward to ISO, where it became the basis of the international emergency exit sign.",
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
            text: "A text sign such as 非常出口 (emergency exit) works for people who read Japanese and can see clearly. In a fire, smoke cuts visibility, and in buildings used by visitors, not everyone reads the language on the wall. The contest that produced the running figure tested entries for exactly this: legibility in smoke.",
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
            text: "In the late 1970s a Japanese association devoted to fire safety held a contest for a new national exit sign. It drew 3,300 entries. Shortlisted designs were tested to see how readily each could be understood in a smoky environment, and Yukio Ota's figure, a person running towards a doorway in white on green, was chosen.",
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
            text: "Ota drew 58 variations. One committee member objected that the figure looked as if it were sprinting out of the door, so Ota adjusted the angle of the legs. The aim, he said, was to suggest people should run slowly.",
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
            text: "Japan submitted the design to the International Organization for Standardization in 1980. ISO had been close to adopting a Soviet proposal, also a man running through a door. The Soviet side objected that Ota's version had no door; the Japanese side argued that a vertical line in the Soviet design made the figure harder to recognise. ISO agreed to consider Ota's design because of the testing behind it.",
            cite: ["slate-exit-sign"],
          },
          {
            kind: "p",
            text: "Ota later said that two teams independently arriving at such similar ideas convinced him it was \"a fundamentally human exit sign\".",
            cite: ["slate-exit-sign"],
          },
          {
            kind: "uncertain",
            text: "Sources give different years for international adoption (Slate says 1985, other sources 1987), and we have not seen the original ISO publication. We show both.",
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
            text: "Each pictogram was drawn on a grid of just 12 by 12 pixels: 144 squares to convey \"sunny\", \"love\" or \"happy\".",
            cite: ["wikipedia-kurita"],
          },
          { kind: "diagram", diagram: "emoji-grid", caption: "Working at 12×12: every pixel is a decision. A generic heart drawn on the grid for illustration, not one of Kurita's original designs, which remain the property of NTT DOCOMO." },
          {
            kind: "interpretation",
            text: "The grid forced the same discipline as a pictogram set like Tokyo 1964's: reduce each idea to the few marks that carry it. Borrowing from manga conventions, such as sweat drops and sparkles, gave users a visual language many already knew.",
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
            text: "Once emoji were in Unicode, any device could exchange them, and the Japanese word emoji, from e (picture) + moji (character), travelled with them. In 2016 MoMA added DOCOMO's original 176 to its collection and exhibited them as \"Inbox: The Original Emoji\".",
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
    dek: "Momofuku Ando fried noodles like tempura so they would keep, then watched people eat them from paper cups, and redesigned the meal around the container.",
    summary:
      "After developing Chicken Ramen in 1958, Momofuku Ando noticed on a 1966 trip to the United States that people broke the noodles into cups and ate them with forks. Cup Noodles (1971) answered with a single object that is package, cooking vessel and bowl, including a clever way of holding the noodles in the middle of the cup.",
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
            text: "Nearly forty container prototypes were tested before an enlarged paper-cup shape in polystyrene foam, then unusual in Japan, was chosen. The noodle block was made larger than the base of the cup, so it would sit suspended in the middle of the cup rather than resting on the bottom.",
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
            text: "Holding the noodles off the bottom plausibly lets hot water reach the whole block and cushions it in transit, though Nissin's account we have read records the solution, not its reasons.",
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
          { kind: "interpretation", text: "Solve manufacturing as design. Turning the process upside down, literally, made the suspended block possible at scale." },
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
    dek: "Sony took a reporter's tape recorder, removed the recording, added stereo, and created a new way to move through a city.",
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
            text: "These features suggest Sony anticipated a worry about isolation (that personal headphones might cut people off) and designed a social mode into the very first model.",
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
            text: "The V&A describes how, because cassettes do not skip like records, the player started a trend of listening to music on the move, giving commuting and errands a private soundtrack.",
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
            text: "Toshiba's appliance development manager, Shogo Yamada, turned to Yoshitada Minami, who ran a small family factory making electric water heaters for Toshiba, and which was close to bankruptcy. Their working design heated an inner pot of rice indirectly, inside an outer pot holding a measured amount of water.",
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
            text: "The ER-4 went on sale on 10 December 1955 for ¥3,200 (roughly a third of an average monthly salary), and sales started slowly. Within a year Toshiba was selling more than 200,000 cookers a month, many of them made at the Minamis' factory, which was rescued in the process.",
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

  // olfa-cutter
  {
    id: "olfa-cutter",
    slug: "olfa-cutter",
    title: "A blade you break on purpose",
    subject: "The snap-off blade cutter knife",
    subjectJa: "折る刃式カッターナイフ",
    palette: ["#e1944b", "#a7927c", "#d8c7aa", "#b2774f"],
    alternativeNames: ["Snap-off blade knife", "Utility knife", "カッターナイフ", "OLFA cutter", "NT Cutter"],
    dek: "A printing worker in Osaka scored a steel blade so that a dull tip could be snapped away. The proportions he settled on in 1956 are still the ones blade makers work to.",
    summary:
      "Yoshio Okada completed a prototype snap-off cutter in 1956, while working at a printing works. Instead of throwing away a dull razor blade, the user breaks off the worn tip along a pre-scored line. The product reached the market in 1959, with a printing-paper company, now NT, closely involved, and Okada founded the company now called OLFA in 1967. Because the patent covered only Japan, makers abroad adopted the same blade widths and 59-degree score angle.",
    category: "Product design",
    tags: ["tools", "stationery", "industrial design", "patents", "de facto standards"],
    originDate: "1956",
    originDateLabel: "Prototype completed 1956",
    originLocation: "Osaka, Japan",
    people: ["yoshio-okada"],
    collaborators: [
      { name: "Saburo Okada", role: "Younger brother, a printing worker whose request prompted the idea; co-founder of Okada Kogyo", cite: ["olfa-birth-ja"] },
      { name: "Shiro Okada, Hiroshi Okada and Teruko Okada", role: "Co-founders of Okada Kogyo in 1967", cite: ["olfa-birth-ja"] },
      { name: "Nippon Transfer Paper Co., Ltd. (now NT Incorporated)", role: "Printing-paper company that sold an early snap-off knife from 1959 and is reported as the patent applicant", cite: ["olfa-nt-history", "olfa-prtimes-day", "olfa-wikipedia-ja-cutter"] },
    ],
    organisations: [
      { name: "OLFA Corporation (founded 1967 as Okada Kogyo)", role: "Founded by the inventor; manufacturer" },
      { name: "NT Incorporated (formerly Nippon Transfer Paper)", role: "Early seller and later co-holder of the patent; manufacturer" },
    ],
    heroImage: "olfa-snap-off-blades",
    globalReach: true,
    timeline: [
      { date: "1956", label: "Okada completes his snap-off blade prototype", place: "Osaka", phase: "origin", cite: ["olfa-birth-ja", "olfa-history-ja"] },
      { date: "1959", label: "Snap-off cutter goes on sale; NT dates its \"Sharp Knife\" to the same year", place: "Japan", phase: "origin", cite: ["olfa-history-ja", "olfa-nt-history"] },
      { date: "1961", label: "NT CUTTER brand named; shown at a Frankfurt trade fair and exported", place: "Frankfurt", phase: "spread", cite: ["olfa-nt-history"] },
      { date: "1963-04-16", label: "Patent obtained, according to OLFA", place: "Japan", phase: "development", cite: ["olfa-prtimes-day"] },
      { date: "1967-06-08", label: "Okada founds Okada Kogyo; OLFA brand and yellow body introduced", place: "Osaka", phase: "development", cite: ["olfa-birth-ja", "olfa-history-ja"] },
      { date: "1968-06", label: "Okada Kogyo begins exporting", place: "International", phase: "spread", cite: ["olfa-history-ja"] },
      { date: "1984-06", label: "Okada Kogyo renamed OLFA Corporation", place: "Osaka", phase: "development", cite: ["olfa-history-ja"] },
      { date: "2026-04", label: "16 April recognised as Snap-off Blade Cutter Knife Day", place: "Japan", phase: "today", cite: ["olfa-history-ja", "olfa-prtimes-day"] },
    ],
    sections: [
      {
        step: "problem",
        heading: "Razor blades and wasted edges",
        blocks: [
          {
            kind: "p",
            text: "In 1950s Japan, printing works cut paper with razor blades. Held between the fingers they were dangerous, and once the cutting point went dull the whole blade was thrown away. Yoshio Okada, who had grown up in a family paper-cutting business and was then working at a printing works, was asked by his younger brother Saburo, at another printing company, whether there was a better knife for paper.",
            cite: ["olfa-birth-ja", "olfa-70-years"],
          },
        ],
      },
      {
        step: "idea",
        heading: "Break the blade, not the habit",
        blocks: [
          {
            kind: "p",
            text: "OLFA's account gives two images behind the idea. Okada knew that street shoemakers shaved soles with pieces of glass and, when an edge went dull, broke the glass to get a fresh one. He also remembered the chocolate bars eaten by American soldiers after the war. A steel blade scored in advance, like a chocolate bar, could be snapped to give a new sharp tip many times over.",
            cite: ["olfa-birth-ja", "olfa-birth-en"],
          },
          {
            kind: "p",
            text: "According to the company, Okada was encouraged by being told at an industrial research institute that 80% of knife use is with the tip.",
            cite: ["olfa-birth-ja"],
          },
          {
            kind: "uncertain",
            text: "The glass and chocolate story comes from OLFA's own retelling, and versions differ in detail: OLFA's English-language blog speaks only of \"the clean break of glass\", without the shoemakers. We found no record from the 1950s in Okada's own words. Segmented chocolate itself was much older; Core77 notes Menier bars moulded in six segments in the 1830s.",
            cite: ["olfa-70-years", "olfa-impress-watch", "olfa-core77"],
          },
        ],
      },
      {
        step: "design-decision",
        heading: "Pitch, depth and 59 degrees",
        blocks: [
          {
            kind: "p",
            text: "Okada experimented with the spacing and depth of the score lines, the hardening and grinding of the steel, and the angle of the blade. His 1956 prototype was about 13 cm long and 1 cm wide, scored about every 5 mm, with an edge angle of 59 degrees that OLFA says it still uses.",
            cite: ["olfa-birth-ja"],
          },
          { kind: "image", image: "olfa-snap-off-blades", size: "wide" },
          {
            kind: "facts",
            items: [
              { label: "Prototype", value: "1956, about 13 × 1 cm, score lines about 5 mm apart", cite: ["olfa-birth-ja"] },
              { label: "Score-line angle", value: "59 degrees", cite: ["olfa-birth-ja", "olfa-nakagawa-zero"] },
              { label: "Common blade widths today", value: "9 mm and 18 mm", cite: ["olfa-nakagawa-zero"] },
              { label: "Segments per blade", value: "8 on the 18 mm blade; 13 on the 9 mm blade", cite: ["olfa-lb-blades"] },
            ],
          },
          {
            kind: "interpretation",
            text: "The score line turns a weakness of hardened steel, that it breaks, into the feature. Each snap gives a new pointed tip, which suits work done with the tip, such as cutting paper against a rule.",
          },
        ],
      },
      {
        step: "original-application",
        heading: "Three thousand blades, fixed by hand",
        blocks: [
          {
            kind: "p",
            text: "Large manufacturers declined to make it, reportedly saying that a blade must not break. Okada ordered 3,000 from a small press shop; the results were so uneven that some would not slide, and he reworked them by hand with pliers, hammer and file over three months.",
            cite: ["olfa-birth-ja", "olfa-core77"],
          },
          {
            kind: "p",
            text: "OLFA's corporate timeline dates the commercial launch to April 1959. NT, which then traded as Nippon Transfer Paper, a maker of printing transfer paper, also dates its \"Sharp Knife\" to 1959 and calls it the first cutter knife on the market. OLFA's 2026 press release says that a printing company supported Okada when demand outgrew his own small business, that the patent was obtained while he worked there, and that he later left on condition that the patent be shared.",
            cite: ["olfa-history-ja", "olfa-nt-history", "olfa-prtimes-day"],
          },
          {
            kind: "uncertain",
            text: "Japanese Wikipedia states that the patent application named Okada as inventor and Nippon Transfer Paper as applicant, and that Okada served as an officer of that company until 1967. This fits both companies' accounts, but we have not seen the patent or utility model documents. Sources also differ on what was registered when: a utility model in 1956 or later, and a patent that OLFA dates to 16 April 1963. One design essay gives 1960, not 1959, for the launch.",
            cite: ["olfa-wikipedia-ja-cutter", "olfa-impress-watch", "olfa-nakagawa-zero"],
          },
        ],
      },
      {
        step: "turning-point",
        heading: "Okada Kogyo, and the colour yellow",
        blocks: [
          {
            kind: "p",
            text: "On 8 June 1967 Okada founded Okada Kogyo with his brothers Saburo, Shiro and Hiroshi and his wife Teruko. The brand OLFA comes from oru ha (折る刃, \"breaking blade\"); OLFA says the H was changed to F because H is silent in some languages. The A-type and L-type cutters launched that year were the first in yellow, chosen to stand out in a toolbox and to prevent accidental cuts. The company began exporting in 1968 and took the name OLFA Corporation in 1984.",
            cite: ["olfa-birth-ja", "olfa-history-ja"],
          },
        ],
      },
      {
        step: "beyond-origins",
        heading: "A Japanese patent, a world standard",
        blocks: [
          {
            kind: "p",
            text: "NT records exhibiting at a Frankfurt trade fair and starting exports in 1961. OLFA says that because the snap-off blade was patented only in Japan, major tool makers overseas began making knives to the same specification. In OLFA's account, that is how the score-line angle and blade widths became a de facto world standard.",
            cite: ["olfa-nt-history", "olfa-birth-en", "olfa-woodworkers-journal"],
          },
          { kind: "image", image: "olfa-and-nt-cutters", size: "inline" },
          {
            kind: "p",
            text: "The standard is informal. A design essay notes that there is no JIS or other formal standard for the blades; makers in Japan and abroad simply build to the same widths and angle, so blades are broadly interchangeable.",
            cite: ["olfa-nakagawa-zero"],
          },
          {
            kind: "uncertain",
            text: "We have not found an independent survey of which foreign makers adopted the format, or when. In some countries the brand has become a generic name: Wikipedia reports that in Brazil these knives are called \"cortadores Olfa\".",
            cite: ["olfa-wikipedia-utility-knife"],
          },
        ],
      },
      {
        step: "world-today",
        heading: "Seventy years on",
        blocks: [
          {
            kind: "p",
            text: "OLFA says its cutters are exported to more than 100 countries and that it sells more than 100 types. In 2026, the seventieth anniversary of the prototype, the Japan Anniversary Association recognised 16 April, the date OLFA gives for the patent, as Snap-off Blade Cutter Knife Day.",
            cite: ["olfa-birth-ja", "olfa-history-ja", "olfa-prtimes-day"],
          },
        ],
      },
      {
        step: "lessons",
        heading: "What designers can learn",
        blocks: [
          { kind: "interpretation", text: "Design the failure point. Deciding exactly where and how a part breaks can be the whole invention." },
          { kind: "interpretation", text: "A limited patent can spread a format. Because protection stopped at Japan's borders, the blade proportions became a shared standard instead of a single company's product." },
          { kind: "interpretation", text: "Origin stories have more than one author. A small inventor, a paper company and two brands that grew out of them each tell part of this history." },
        ],
      },
    ],
    limitations: [
      { text: "The inspiration story (shoemakers' glass, soldiers' chocolate) is known only through OLFA's later retellings.", cite: ["olfa-birth-ja", "olfa-impress-watch"] },
      { text: "We have not read the utility model or patent documents. Their numbers, filing dates and named applicants are taken from secondary accounts, which differ.", cite: ["olfa-prtimes-day", "olfa-wikipedia-ja-cutter"] },
      { text: "OLFA and NT each describe their 1959 product as the first, and neither company's history names the other.", cite: ["olfa-history-ja", "olfa-nt-history"] },
    ],
    related: ["sharp-pencil", "rice-cooker", "cup-noodles"],
    principles: ["material-and-making", "standards-and-openness", "borrowed-behaviour"],
    sources: [
      "olfa-birth-ja",
      "olfa-birth-en",
      "olfa-history-ja",
      "olfa-prtimes-day",
      "olfa-70-years",
      "olfa-nt-history",
      "olfa-wikipedia-ja-cutter",
      "olfa-nakagawa-zero",
      "olfa-impress-watch",
      "olfa-woodworkers-journal",
      "olfa-core77",
      "olfa-lb-blades",
      "olfa-wikipedia-utility-knife",
    ],
    readingMinutes: 7,
    reviewed: "2026-11-17",
  },

  // sharp-pencil
  {
    id: "sharp-pencil",
    slug: "sharp-pencil",
    title: "The pencil that named an electronics company",
    subject: "The Hayakawa Mechanical Pencil (Ever-Ready Sharp Pencil)",
    subjectJa: "早川式繰出鉛筆",
    palette: ["#ffffff", "#37322f", "#8a8480", "#d7d5d2"],
    alternativeNames: ["Ever-Ready Sharp Pencil", "Sharp Pencil", "シャープペンシル", "シャーペン"],
    dek: "Mechanical pencils already existed. In 1915 a young Tokyo metalworker hired to make parts for a fragile celluloid one rebuilt it in brass and nickel, and its name, Sharp, outlived the pencil business.",
    summary:
      "In 1915 Tokuji Hayakawa was contracted to make metal fittings for an imported-style mechanical pencil with a fragile celluloid body. He redesigned the inside as a single brass tube with a spindle that pushes the lead when the barrel is twisted, and gave it a nickel-plated metal barrel. Sold as the Ever-Ready Sharp Pencil, it made \"sharp pencil\" the everyday Japanese word for a mechanical pencil, and gave the company he later built around radios its name.",
    category: "Product design",
    tags: ["stationery", "writing instruments", "metalwork", "patents", "naming"],
    originDate: "1915",
    originDateLabel: "1915",
    originLocation: "Honjo, Tokyo, Japan",
    people: ["tokuji-hayakawa"],
    collaborators: [
      { name: "Masaharu Hayakawa (早川政治)", role: "Older brother; co-founded Hayakawa Brothers Company and handled sales and accounts", cite: ["sharp-100th-ch1-en"] },
      { name: "Shotaro Fukui, Fukui Shoten (now Lion Office Products)", role: "Kansai sales agent who suggested the name Ever-Ready Sharp Pencil", cite: ["sharp-100th-ch1-en"] },
    ],
    organisations: [
      { name: "Hayakawa Brothers Company (早川兄弟商会)", role: "Maker and seller, about 1915 to 1923" },
      { name: "Ito-ya, Ginza", role: "Stationer whose demands shaped the design before it placed an order" },
      { name: "Nihon Bungu Seizo, Osaka", role: "Took over the pencil business and patents after the 1923 earthquake" },
      { name: "Sharp Corporation", role: "Hayakawa's later company, named after the pencil in 1970" },
    ],
    heroImage: "sharp-pencil-replica",
    globalReach: false,
    timeline: [
      { date: "1912-09-15", label: "Hayakawa opens a three-person metalworking shop", place: "Honjo, Tokyo", phase: "origin", cite: ["sharp-100th-ch1-en"] },
      { date: "1915", label: "Hayakawa Mechanical Pencil completed in brass and nickel", place: "Tokyo", phase: "origin", cite: ["sharp-100th-ch1-en", "sharp-history-1915"] },
      { date: "1915–1916", label: "Yokohama trading house places export orders as German supply dries up", place: "Yokohama", phase: "spread", cite: ["sharp-100th-ch1-en", "sharp-nishimura-two-pencils"] },
      { date: "1916", label: "Fine-lead version made possible with a US-made drill", place: "Tokyo", phase: "development", cite: ["sharp-100th-ch1-en", "sharp-history-1915"] },
      { date: "1922", label: "Gold medal at the Peace Commemoration Tokyo Exposition", place: "Ueno, Tokyo", phase: "development", cite: ["sharp-100th-ch1-en"] },
      { date: "1923", label: "Earthquake destroys the factory; pencil business passes to Nihon Bungu Seizo", place: "Tokyo and Osaka", phase: "development", cite: ["sharp-100th-ch1-en", "sharp-nishimura-two-pencils"] },
      { date: "1926-03-30", label: "US patent 1,578,515 granted for Hayakawa's propelling pencil", place: "United States", phase: "spread", cite: ["sharp-us-patent-1578515"] },
      { date: "1970-01-01", label: "Hayakawa Electric Industry renamed Sharp Corporation, after the pencil", place: "Osaka", phase: "today", cite: ["sharp-100th-ch5-ja"] },
    ],
    sections: [
      {
        step: "problem",
        heading: "A pencil that was little more than a toy",
        blocks: [
          {
            kind: "p",
            text: "In 1915 a major writing-instrument maker ordered a large quantity of metal fittings from Tokuji Hayakawa, then 21, who ran a small metalworking shop in Honjo, Tokyo. The fittings were for a mechanical pencil with a thick celluloid casing. Sharp's company history describes it as fragile, \"little more than an expensive toy\", and says Hayakawa thought it could become a practical business if it worked as reliably as a fountain pen.",
            cite: ["sharp-100th-ch1-en", "sharp-100th-ch1-ja", "sharp-nishimura-two-pencils"],
          },
          {
            kind: "p",
            text: "Mechanical pencils were not new. Sampson Mordan and John Isaac Hawkins had patented a metal pencil with an internal lead-propelling mechanism in Britain in 1822, and many mechanisms followed over the next century. In the United States, Charles Keeran's Eversharp was on sale from late 1913 and patented in 1915.",
            cite: ["sharp-bada-propelling", "sharp-nishimura-two-pencils"],
          },
          { kind: "image", image: "mordan-1822-patent", size: "inline" },
        ],
      },
      {
        step: "idea",
        heading: "Rebuild it from the inside",
        blocks: [
          {
            kind: "p",
            text: "Although he had been hired only to make the internal parts, Hayakawa set about redesigning them. He replaced a combination of many parts with a single piece of brass, shaped into a thin tube that tapered towards the tip, with a fine slot cut inside it. A spindle running in the tube pushed the lead out smoothly as the barrel was turned, and turning it the other way let the lead be reloaded.",
            cite: ["sharp-100th-ch1-en", "sharp-100th-ch1-ja"],
          },
          {
            kind: "interpretation",
            text: "Hayakawa's contribution was a reworking of an existing type, not a new one: fewer parts, one sturdy formed component, and a metal body. The company's own history presents it this way, as an improvement on a pencil he had been hired to supply parts for.",
          },
        ],
      },
      {
        step: "design-decision",
        heading: "Metal instead of celluloid",
        blocks: [
          {
            kind: "p",
            text: "Hayakawa made the outer shell of nickel-plated metal instead of celluloid. Sharp describes the result as durable, easy to use and good-looking, and it was named the Hayakawa Mechanical Pencil (早川式繰出鉛筆, Hayakawa-shiki Kuridashi Enpitsu). In 1916, using a US-made drill to bore a very small hole in a metal tube, he made a version that took much finer lead.",
            cite: ["sharp-100th-ch1-en", "sharp-history-1915"],
          },
          {
            kind: "facts",
            items: [
              { label: "Mechanism", value: "Twist-type: a spindle in a slotted brass tube pushes the lead", cite: ["sharp-100th-ch1-en"] },
              { label: "Barrel", value: "Nickel-plated metal (earlier pencil: celluloid)", cite: ["sharp-100th-ch1-en", "sharp-history-1915"] },
              { label: "Registrations", value: "48 utility model and design registrations in Japan and abroad, per Sharp", cite: ["sharp-100th-ch1-en", "sharp-100th-ch1-ja"] },
              { label: "Japanese patent", value: "No. 54,357 (1920), per Nishimura", cite: ["sharp-nishimura-two-pencils"] },
              { label: "US patent", value: "1,578,515, filed 1923, granted 30 March 1926", cite: ["sharp-us-patent-1578515"] },
            ],
          },
          {
            kind: "p",
            text: "Hayakawa's later US patent describes a pencil in which turning a guide tube with a spiral groove advances a lead carrier, with a magazine for spare leads. What it claims as new is narrow: a removable U-shaped clip that replaces a soldered joint, so that a broken part can be replaced without discarding the rest.",
            cite: ["sharp-us-patent-1578515"],
          },
        ],
      },
      {
        step: "original-application",
        heading: "Cold metal, kimono sleeves and 36 samples",
        blocks: [
          {
            kind: "p",
            text: "Hayakawa and his older brother Masaharu set up Hayakawa Brothers Company to sell the pencil, starting at about 1,440 a month. Wholesalers were unenthusiastic: the pencil was said not to suit Japanese clothing, and the metal felt cold in winter. The Ginza stationer Ito-ya asked for repeated changes, and the brothers made 36 samples before it placed an order.",
            cite: ["sharp-100th-ch1-en"],
          },
        ],
      },
      {
        step: "turning-point",
        heading: "War in Europe, orders from Yokohama",
        blocks: [
          {
            kind: "p",
            text: "About three months after sales began, a trading house in Yokohama that had been sent a sample enquired about export. According to Sharp, the First World War had made German-made metal mechanical pencils, then popular in Europe and the United States, hard to obtain, and the Hayakawa pencil was judged comparable. The factory turned entirely to pencils, and reports of success abroad brought orders from Japanese department stores and stationers.",
            cite: ["sharp-100th-ch1-en", "sharp-100th-ch1-ja"],
          },
          {
            kind: "uncertain",
            text: "Where the exported pencils went is unclear. Sharp's history speaks of exports to the US and Europe, but pen historian David Nishimura notes that the final destination of the Yokohama order is unknown and that he has found no Ever-Ready Sharp in the United States.",
            cite: ["sharp-100th-ch1-en", "sharp-nishimura-two-pencils"],
          },
          {
            kind: "p",
            text: "The brothers wanted to call the pencil the Sharp Pencil. Their Kansai agent, Shotaro Fukui, suggested \"Ever-Ready Sharp Pencil\": to Japanese ears \"ready\" sounds like \"lady\", and the pencils were popular with Western women. That name was registered as a trademark, but people came to call it the Sharp Pencil, which became the general Japanese word for a mechanical pencil.",
            cite: ["sharp-100th-ch1-en", "sharp-100th-ch1-ja", "sharp-platinum-replica"],
          },
        ],
      },
      {
        step: "beyond-origins",
        heading: "An earthquake, and a name carried to Osaka",
        blocks: [
          {
            kind: "p",
            text: "By 1923 the Tokyo factory employed 200 people on assembly lines. The Great Kanto Earthquake of 1 September 1923 destroyed it, and Hayakawa's two children and his wife died. To repay debts, the business, its machinery and free use of the pencil patents passed to Nihon Bungu Seizo of Osaka, where Hayakawa worked for six months as chief engineer. He then started a radio business in Osaka.",
            cite: ["sharp-100th-ch1-en", "sharp-nishimura-two-pencils"],
          },
          {
            kind: "p",
            text: "The company sold its products under the Sharp brand from its radio days, and on 1 January 1970 Hayakawa Electric Industry renamed itself Sharp Corporation, explaining that the brand derived from Hayakawa's pencil.",
            cite: ["sharp-100th-ch5-ja"],
          },
          {
            kind: "uncertain",
            text: "Two different pencils are often confused: Hayakawa's Ever-Ready Sharp and the American Eversharp, which Keeran patented in 1915 and Wahl later made. Some popular accounts claim Hayakawa invented the Eversharp; Nishimura shows that this is wrong. Sharp's own English history page, which calls the later product the \"Ever-Sharp Pencil\", adds to the confusion.",
            cite: ["sharp-nishimura-two-pencils", "sharp-history-1915"],
          },
        ],
      },
      {
        step: "world-today",
        heading: "A word, a museum piece and a replica",
        blocks: [
          {
            kind: "p",
            text: "In Japan, シャープペンシル (sharp pencil, often shortened to シャーペン) is still the everyday word for a mechanical pencil, although it is not an English term. Original Hayakawa pencils are kept at the Sharp Museum in Tenri, Nara, and the pen maker Platinum has issued replicas since 1983, most recently in 2025.",
            cite: ["sharp-platinum-replica", "sharp-100th-ch1-en"],
          },
        ],
      },
      {
        step: "lessons",
        heading: "What designers can learn",
        blocks: [
          { kind: "interpretation", text: "Improvement is a real contribution. Hayakawa did not invent the mechanical pencil; he made one that was sturdy, simple to make and pleasant to hold, and that was enough to build a company." },
          { kind: "interpretation", text: "Manufacturing knowledge shapes design. A metalworker's eye for fewer, stronger parts drove the redesign." },
          { kind: "interpretation", text: "Demanding customers are collaborators. Thirty-six samples for one stationer improved later versions, in the company's own account." },
        ],
      },
    ],
    limitations: [
      { text: "Most of the detail comes from Sharp's own centenary history; independent contemporary records of the 1915 design are scarce.", cite: ["sharp-100th-ch1-en"] },
      { text: "We have not seen Japanese patent No. 54,357 or the 48 registrations Sharp mentions; we cannot say exactly which features they cover.", cite: ["sharp-nishimura-two-pencils", "sharp-100th-ch1-ja"] },
      { text: "The extent of exports to Europe and the United States is disputed, so we have not marked this story as having documented adoption abroad.", cite: ["sharp-nishimura-two-pencils"] },
    ],
    related: ["olfa-cutter", "walkman", "rice-cooker"],
    principles: ["material-and-making"],
    sources: [
      "sharp-100th-ch1-en",
      "sharp-100th-ch1-ja",
      "sharp-100th-ch5-ja",
      "sharp-history-1915",
      "sharp-us-patent-1578515",
      "sharp-nishimura-two-pencils",
      "sharp-platinum-replica",
      "sharp-bada-propelling",
    ],
    readingMinutes: 7,
    reviewed: "2026-11-17",
  },

  // super-cub
  {
    id: "super-cub",
    slug: "super-cub",
    title: "A motorcycle you could ride with one hand",
    subject: "Honda Super Cub C100",
    subjectJa: "スーパーカブ",
    palette: ["#ccd8dd", "#32445a", "#8b9daf", "#7b684f"],
    alternativeNames: ["Honda C100", "Honda 50 (US)", "スーパーカブC100"],
    dek: "Honda set out to build a small motorcycle for people who did not think of themselves as motorcyclists. Its shape has barely changed since 1958, and in 2014 that shape became a trademark.",
    summary:
      "The Super Cub C100 went on sale in Japan in August 1958. Honda's own accounts say Soichiro Honda directed its development to a brief that a soba delivery rider should be able to ride it with one hand, while Takeo Fujisawa pushed for a bike anyone could ride and planned for mass sales. A centrifugal clutch, a step-through frame and a moulded polyethylene leg shield made that possible. Honda reports more than 100 million Super Cub series machines built by 2017.",
    category: "Industrial design",
    tags: ["motorcycles", "mobility", "manufacturing", "trademark", "everyday transport"],
    originDate: "1958-08",
    originDateLabel: "Launched August 1958",
    originLocation: "Honda, Tokyo and Saitama, Japan",
    people: ["soichiro-honda"],
    collaborators: [
      { name: "Takeo Fujisawa", role: "Managing director who asked for a bike anyone could ride, forecast 30,000 a month and led marketing and production scale-up", cite: ["cub-honda-stories-1-1", "cub-honda-stories-1-3", "cub-nippon-2025"] },
      { name: "Jozaburo Kimura", role: "Designer whose recollections underpin Honda's account; proposed the Super Cub name", cite: ["cub-honda-stories-1-1", "cub-honda-stories-1-3"] },
      { name: "Kiyoshi Kawashima and Yoshiro Harada", role: "Engine design and chassis design on the development team", cite: ["cub-honda-stories-1-2"] },
      { name: "Grey Advertising", role: "US agency associated with the 1963 \"Nicest People\" campaign", cite: ["cub-idch-honda"] },
    ],
    organisations: [
      { name: "Honda Motor Co., Ltd.", role: "Designer and manufacturer" },
      { name: "American Honda Motor Co.", role: "US importer and advertiser from 1959" },
      { name: "Japan Patent Office", role: "Registered the shape as a three-dimensional trademark (2014)" },
    ],
    heroImage: "super-cub-c100",
    globalReach: true,
    timeline: [
      { date: "1956-12", label: "Soichiro Honda and Takeo Fujisawa tour Europe looking for their next product", place: "Europe", phase: "origin", cite: ["cub-honda-factbook-1958", "cub-honda-stories-1-1"] },
      { date: "1957-12", label: "Final mock-up shown to Fujisawa, who forecasts 30,000 a month", place: "Japan", phase: "origin", cite: ["cub-honda-stories-1-3"] },
      { date: "1958-08", label: "C100 announced; mass production starts at the Yamato plant; price ¥55,000", place: "Saitama, Japan", phase: "origin", cite: ["cub-honda-100m-2017", "cub-honda-factbook-1958", "cub-honda-stories-1-3"] },
      { date: "1959", label: "Sold in the US as the Honda 50 after American Honda opens in Los Angeles", place: "United States", phase: "spread", cite: ["cub-honda-75-ch1", "cub-honda-stories-3-2"] },
      { date: "1961", label: "1 million built; knock-down production begins in Taiwan", place: "Japan and Taiwan", phase: "spread", cite: ["cub-honda-100m-2017"] },
      { date: "1963", label: "\"You Meet the Nicest People on a Honda\" campaign in US magazines", place: "United States", phase: "spread", cite: ["cub-honda-75-ch1", "cub-hondanews-chronology", "cub-honda-stories-3-2"] },
      { date: "2014-05-26", label: "Honda announces registration of the shape as a three-dimensional trademark in Japan", place: "Japan", phase: "today", cite: ["cub-honda-trademark-2014", "cub-honda-trademark-2014-ja"] },
      { date: "2017-10", label: "Super Cub series passes 100 million built (Honda figure)", place: "International", phase: "today", cite: ["cub-honda-100m-2017"] },
    ],
    sections: [
      {
        step: "problem",
        heading: "A product for people who were not riders",
        blocks: [
          {
            kind: "p",
            text: "In December 1956 Honda's president, Soichiro Honda, and managing director, Takeo Fujisawa, toured Europe, where small mopeds were common. Honda's fact book says they came back convinced they needed a new kind of vehicle, clearly different from those mopeds.",
            cite: ["cub-honda-factbook-1958", "cub-honda-stories-1-1"],
          },
          {
            kind: "p",
            text: "Designer Jozaburo Kimura recalls Fujisawa asking for a bike that anyone could ride, and especially one that would make women feel confident riding it. Honda's corporate history lists the intended riders as a noodle-shop delivery worker carrying a tray in one hand and customers wearing skirts.",
            cite: ["cub-honda-stories-1-1", "cub-honda-75-ch3"],
          },
        ],
      },
      {
        step: "idea",
        heading: "Free one hand",
        blocks: [
          {
            kind: "p",
            text: "According to Honda, Soichiro Honda told the development team that a soba delivery rider should be able to ride it with one hand. The answer was a newly developed automatic centrifugal clutch: with no clutch lever, the left foot changes gear and the right hand works the throttle, leaving the left hand free.",
            cite: ["cub-honda-factbook-1958", "cub-honda-stories-1-1"],
          },
          {
            kind: "uncertain",
            text: "The soba brief is documented, but only in Honda's own histories, which draw on staff recollections. We have not found an independent contemporary record of the instruction, so we present it as Honda's account rather than as a verified quotation.",
            cite: ["cub-honda-factbook-1958", "cub-honda-75-ch3"],
          },
          { kind: "image", image: "super-cub-demae", size: "inline" },
        ],
      },
      {
        step: "design-decision",
        heading: "Step through, stay clean",
        blocks: [
          {
            kind: "p",
            text: "The frame dropped low between the seat and the handlebars, so riders could step through rather than swing a leg over, even with luggage on the back. Honda chose a four-stroke engine over a cheaper two-stroke for economy and durability, and had 2.25 by 17-inch tyres made for the bike because none were produced in Japan; the tyre size then set the bike's proportions.",
            cite: ["cub-honda-factbook-1958", "cub-honda-stories-1-1", "cub-honda-stories-1-2"],
          },
          {
            kind: "p",
            text: "A large leg shield kept mud and wind off the rider's legs, and a chain case stopped oil splashing. Honda's Cub Stories say the leg shields and front fenders were made of a new polyethylene resin, lighter than fibreglass and hard to break. Moulders had never made parts this large and agreed only if Honda supplied the moulds.",
            cite: ["cub-honda-stories-1-2", "cub-honda-75-ch3", "cub-honda-100m-2017", "cub-nippon-2025"],
          },
          {
            kind: "uncertain",
            text: "Some enthusiast sources say not all resin parts were ready at launch and that some early machines used other materials. Honda's own pages say only \"resin\" or \"polyethylene\" and give no such detail, so we have not repeated the claim as fact.",
            cite: ["cub-bikenews-plastic"],
          },
          {
            kind: "facts",
            items: [
              { label: "Engine", value: "49 cc air-cooled four-stroke OHV single, 4.5 PS", cite: ["cub-honda-factbook-1958"] },
              { label: "Clutch", value: "Automatic centrifugal, 3 speeds", cite: ["cub-honda-factbook-1958"] },
              { label: "Frame", value: "Pressed-steel backbone", cite: ["cub-honda-factbook-1958"] },
              { label: "Tyres", value: "2.25-17 front and rear", cite: ["cub-honda-factbook-1958"] },
              { label: "Price", value: "¥55,000", cite: ["cub-honda-factbook-1958", "cub-nippon-2025"] },
            ],
          },
        ],
      },
      {
        step: "original-application",
        heading: "Launch and a bold forecast",
        blocks: [
          {
            kind: "p",
            text: "When Fujisawa saw the final mock-up in late December 1957 he predicted sales of 30,000 a month, at a time when Honda says the whole Japanese motorcycle industry made about 42,000 a month. The C100 was announced in August 1958, and mass production began that month at Honda's Yamato plant in Saitama.",
            cite: ["cub-honda-stories-1-3", "cub-honda-75-ch3", "cub-honda-100m-2017"],
          },
        ],
      },
      {
        step: "turning-point",
        heading: "A factory built for one model",
        blocks: [
          {
            kind: "p",
            text: "Honda's history gives output of about 24,000 in 1958 and 167,000 in 1959. The Suzuka Factory opened in 1960, and by 1961 Super Cub production had passed one million, the year knock-down assembly started in Taiwan.",
            cite: ["cub-honda-75-ch3", "cub-honda-100m-2017"],
          },
          {
            kind: "interpretation",
            text: "Fujisawa's sales target shaped manufacturing as much as the brief shaped the bike. A forecast that large only makes sense if the product, the moulds and the factory are planned together.",
          },
        ],
      },
      {
        step: "beyond-origins",
        heading: "The nicest people",
        blocks: [
          {
            kind: "p",
            text: "American Honda opened in Los Angeles in June 1959, and the Super Cub joined its line-up as the Honda 50. From 1963 the company advertised it in magazines such as Life, Time and Look under the line \"You Meet the Nicest People on a Honda\", followed by television in 1964. Honda reports Honda 50 sales of 84,000 in 1963 and 268,000 in 1965.",
            cite: ["cub-honda-75-ch1", "cub-honda-stories-3-2", "cub-hondanews-chronology"],
          },
          {
            kind: "p",
            text: "The International Directory of Company Histories traces the line to a spring 1963 course assignment by a UCLA advertising student, whose work reached Grey Advertising.",
            cite: ["cub-idch-honda"],
          },
          {
            kind: "uncertain",
            text: "Accounts differ on details of the campaign: the student's name (often given as Mike Curb), the role of Grey creative director Robert Emmenegger, the launch month and how long it ran. Honda's own histories do not name the agency. We have not found Grey's own record.",
            cite: ["cub-wikipedia-supercub", "cub-idch-honda"],
          },
        ],
      },
      {
        step: "world-today",
        heading: "A shape that became a trademark",
        blocks: [
          {
            kind: "p",
            text: "In May 2014 Honda announced that the Japan Patent Office would register the Super Cub's shape as a three-dimensional trademark. Honda called it the first time a motorcycle's shape had been registered in Japan, and said the reason was that most people who see the design recognise it as a Honda.",
            cite: ["cub-honda-trademark-2014", "cub-honda-trademark-2014-ja"],
          },
          {
            kind: "uncertain",
            text: "Honda's Japanese release describes it as a first for any vehicle. J-CAST reported that a Ferrari had already been registered in Japan, making the Super Cub probably the first two-wheeler rather than the first vehicle.",
            cite: ["cub-honda-trademark-2014-ja", "cub-jcast-trademark"],
          },
          {
            kind: "p",
            text: "Honda reports that cumulative Super Cub series production reached 100 million in October 2017, from 16 plants in 15 countries, with sales in more than 160 countries.",
            cite: ["cub-honda-100m-2017"],
          },
        ],
      },
      {
        step: "lessons",
        heading: "What designers can learn",
        blocks: [
          { kind: "interpretation", text: "Write the brief around a real moment of use. \"One hand, carrying soba\" is more useful to an engineer than \"easy to ride\"." },
          { kind: "interpretation", text: "Remove a control instead of explaining it. The centrifugal clutch took away a task that put off new riders." },
          { kind: "interpretation", text: "Consistency can become identity. Keeping the same basic shape for decades is what the trademark registration rewarded." },
        ],
      },
    ],
    limitations: [
      { text: "Most design details come from Honda's own histories and staff recollections. Independent contemporary sources for the development process are scarce in what we could access.", cite: ["cub-honda-stories-1-1", "cub-honda-75-ch3"] },
      { text: "Production totals are Honda's figures for the Super Cub \"series\", which includes many later models, not the C100 alone.", cite: ["cub-honda-100m-2017"] },
      { text: "We found no JSME Mechanical Engineering Heritage listing for the Super Cub; JSME recognises its predecessor, the Cub F engine.", cite: ["cub-jsme-heritage-list"] },
    ],
    related: ["shinkansen", "rice-cooker", "walkman"],
    principles: ["borrowed-behaviour", "material-and-making", "designing-for-recognition"],
    sources: [
      "cub-honda-factbook-1958",
      "cub-honda-stories-1-1",
      "cub-honda-stories-1-2",
      "cub-honda-stories-1-3",
      "cub-honda-75-ch3",
      "cub-honda-75-ch1",
      "cub-honda-stories-3-2",
      "cub-hondanews-chronology",
      "cub-idch-honda",
      "cub-wikipedia-supercub",
      "cub-honda-trademark-2014",
      "cub-honda-trademark-2014-ja",
      "cub-jcast-trademark",
      "cub-honda-100m-2017",
      "cub-nippon-2025",
      "cub-jsme-heritage-list",
      "cub-bikenews-plastic",
    ],
    readingMinutes: 6,
    reviewed: "2026-11-17",
  },

  // shinkansen
  {
    id: "shinkansen",
    slug: "tokaido-shinkansen",
    title: "A railway designed as one system",
    subject: "Tokaido Shinkansen and the 0 Series train",
    subjectJa: "東海道新幹線",
    palette: ["#d3dac8", "#323d4c", "#898b88", "#20252b"],
    alternativeNames: ["Bullet Train", "0 Series", "0系新幹線", "新幹線電車"],
    dek: "Japan's first high-speed line was not a fast train placed on old tracks. Track, signalling, control and trains were designed together, and the whole system was built to stop collisions before they could happen.",
    summary:
      "The Tokaido Shinkansen opened between Tokyo and Shin-Osaka on 1 October 1964, running at up to 210 km/h. JNR president Shinji Sogō backed it and chief engineer Hideo Shima led the engineering, while researchers at the Railway Technical Research Institute, several of them former naval aircraft engineers, shaped the train and studied its ride. A new standard-gauge line with no level crossings, in-cab automatic train control and centralised traffic control made one system. JR Central reports no passenger deaths from train accidents since opening.",
    category: "Industrial design",
    tags: ["railways", "systems design", "transport", "safety", "engineering"],
    originDate: "1964-10-01",
    originDateLabel: "Opened 1 October 1964",
    originLocation: "Tokyo to Shin-Osaka, Japan",
    people: ["hideo-shima"],
    collaborators: [
      { name: "Shinji Sogō (十河信二)", role: "JNR president during construction who backed the project; resigned over cost overruns", cite: ["shink-nippon-history-ja"] },
      { name: "Tadanao Miki (三木忠直)", role: "Former naval aircraft engineer at the Railway Technical Research Institute; front-end shape studied by wind-tunnel tests", cite: ["shink-kaken-sawai", "shink-toyokeizai-miki"] },
      { name: "Tadashi Matsudaira (松平精)", role: "Former naval aircraft engineer who led the institute's vehicle dynamics laboratory", cite: ["shink-kaken-sawai"] },
    ],
    organisations: [
      { name: "Japanese National Railways (JNR)", role: "Builder and original operator" },
      { name: "Railway Technical Research Institute (JNR)", role: "Research on vehicles, track, ride and signalling" },
      { name: "World Bank", role: "Lender of $80 million (1961)" },
      { name: "Central Japan Railway Company (JR Central)", role: "Operator since 1987" },
    ],
    heroImage: "shinkansen-0-kyoto",
    globalReach: true,
    timeline: [
      { date: "1957-05-30", label: "Railway Technical Research Institute lecture on a three-hour Tokyo to Osaka super-express", place: "Tokyo", phase: "origin", cite: ["shink-nippon-history-ja", "shink-toyokeizai-miki"] },
      { date: "1958-12", label: "Cabinet approves construction of the Tokaido Shinkansen", place: "Tokyo", phase: "origin", cite: ["shink-nippon-history-ja"] },
      { date: "1959-04-20", label: "Construction begins", place: "Japan", phase: "origin", cite: ["shink-nippon-history-ja"] },
      { date: "1961", label: "World Bank loan of $80 million signed", place: "Washington and Tokyo", phase: "development", cite: ["shink-nippon-history-ja", "shink-nippon-history-en"] },
      { date: "1964-10-01", label: "Tokyo to Shin-Osaka opens at up to 210 km/h", place: "Japan", phase: "origin", cite: ["shink-nippon-history-ja", "shink-ieee-milestone"] },
      { date: "1965-11-01", label: "Hikari reaches the planned 3 hours 10 minutes once the roadbed settles", place: "Japan", phase: "development", cite: ["shink-toretabi-0"] },
      { date: "2001-07-12", label: "0 Series car 22-141 unveiled at the National Railway Museum, York", place: "York, UK", phase: "spread", cite: ["shink-railwaygazette-2001", "shink-smg-22-141"] },
      { date: "2007", label: "Taiwan High Speed Rail opens with 700T trains based on the 700 Series", place: "Taiwan", phase: "spread", cite: ["shink-jorsa-taiwan"] },
    ],
    sections: [
      {
        step: "problem",
        heading: "A narrow-gauge corridor at capacity",
        blocks: [
          {
            kind: "p",
            text: "Most of Japan's railways were built to a narrow 1,067 mm gauge. A 1939 plan for a separate 1,435 mm line along the Tōkaidō and San'yō corridors, meant to add capacity, was abandoned during the Pacific War.",
            cite: ["shink-nippon-history-en", "shink-nippon-history-ja"],
          },
          {
            kind: "p",
            text: "In May 1957 the Railway Technical Research Institute, JNR's research arm, held a public lecture on the possibility of a super-express linking Tokyo and Osaka in three hours. Speakers covered the vehicle, the track, ride comfort and safety, and signalling. In 1958 the cabinet approved a new line, and construction began in April 1959.",
            cite: ["shink-nippon-history-ja", "shink-toyokeizai-miki"],
          },
        ],
      },
      {
        step: "idea",
        heading: "Build a new railway, not a faster train",
        blocks: [
          {
            kind: "p",
            text: "Shinji Sogō, JNR's president, had worked on prewar gauge-conversion plans. He appointed Hideo Shima, who had worked on the wartime \"bullet train\" plan, as chief engineer. The National Railway Museum dates Shima's appointment to 1955.",
            cite: ["shink-nippon-history-ja", "shink-nrm-page"],
          },
          {
            kind: "p",
            text: "The result was a separate standard-gauge line used only by high-speed trains, with no level crossings. JR Central describes the core principle as \"crash avoidance\": dedicated track plus automatic train control (ATC), which enforces speed limits and keeps trains apart.",
            cite: ["shink-jrc-report-2025", "shink-nippon-history-en"],
          },
        ],
      },
      {
        step: "design-decision",
        heading: "Signals in the cab, control in one room",
        blocks: [
          {
            kind: "p",
            text: "ATC slows the train automatically as it approaches a train ahead or a station where it must stop, leaving the driver to make fine adjustments. Operations were managed centrally from a general control centre using centralised traffic control (CTC).",
            cite: ["shink-nippon-safety-2024", "shink-nippon-history-ja"],
          },
          {
            kind: "uncertain",
            text: "A widely told story says CTC was nearly cut for budget reasons and that Sogō ordered it kept even if other spending had to go. nippon.com presents this as an anecdote, and we have not found a primary record.",
            cite: ["shink-nippon-safety-2024"],
          },
          {
            kind: "p",
            text: "The research institute had absorbed many former army, navy and aviation engineers after 1945. Historian Minoru Sawai records that Tadashi Matsudaira, from the Naval Air Technical Arsenal, led the vehicle dynamics laboratory, and that Tadanao Miki, from the same arsenal, and colleagues determined the train's front-end shape through wind-tunnel tests and pushed for lighter construction.",
            cite: ["shink-kaken-sawai"],
          },
          {
            kind: "p",
            text: "The National Railway Museum in York describes the cone-shaped nose as designed by Shima's team, taking inspiration from aircraft of the time.",
            cite: ["shink-nrm-page"],
          },
          {
            kind: "uncertain",
            text: "Popular accounts often say Miki adapted the shape of the wartime Ginga bomber he had worked on. The aviation background is documented, but we have not found a primary source for a direct link between the Ginga and the 0 Series nose.",
            cite: ["shink-kanaloco-miki", "shink-toyokeizai-miki"],
          },
          { kind: "image", image: "shinkansen-0-himeji", size: "wide" },
        ],
      },
      {
        step: "original-application",
        heading: "Opening day",
        blocks: [
          {
            kind: "p",
            text: "The line opened between Tokyo and Shin-Osaka on 1 October 1964 with a top speed of 210 km/h, which the IEEE Milestone plaque calls a world record for service at the time. Until the new roadbed settled, the fastest Hikari trains took four hours; the planned 3 hours 10 minutes began on 1 November 1965.",
            cite: ["shink-ieee-milestone", "shink-nippon-history-ja", "shink-toretabi-0"],
          },
          {
            kind: "p",
            text: "At first the trains were simply called \"Shinkansen electric trains\". They became the 0 Series only after the 200 Series was built in 1980.",
            cite: ["shink-toretabi-0"],
          },
          {
            kind: "facts",
            items: [
              { label: "Opened", value: "1 October 1964", cite: ["shink-nippon-history-ja"] },
              { label: "Route", value: "Tokyo to Shin-Osaka", cite: ["shink-nippon-history-ja"] },
              { label: "Top speed", value: "210 km/h", cite: ["shink-ieee-milestone", "shink-jrwest-monument"] },
              { label: "Gauge", value: "1,435 mm, on a dedicated line", cite: ["shink-nippon-history-en", "shink-jrc-report-2025"] },
              { label: "Finance", value: "World Bank loan of $80 million (1961)", cite: ["shink-nippon-history-ja"] },
            ],
          },
        ],
      },
      {
        step: "turning-point",
        heading: "Success, and two resignations",
        blocks: [
          {
            kind: "p",
            text: "Construction costs ran well over budget. Sogō was forced to resign, Shima left with him, and neither was invited to the opening ceremony.",
            cite: ["shink-nippon-history-ja"],
          },
          {
            kind: "p",
            text: "The IEEE, which recognised the line as a Milestone in 2000, records that it went on to carry more than 100 million passengers a year. JR Central reports about 7.2 billion passengers in total and no train accidents causing passenger deaths since 1964.",
            cite: ["shink-ieee-milestone", "shink-jrc-report-2025"],
          },
        ],
      },
      {
        step: "beyond-origins",
        heading: "Influence and adoption are different things",
        blocks: [
          {
            kind: "p",
            text: "The IEEE Milestone text says the Shinkansen's success led many countries to look again at railways and build high-speed lines on similar concepts, and nippon.com cites France's TGV (1981) and Germany's ICE (1991) as following. These are claims of influence: those systems were developed by their own industries.",
            cite: ["shink-ieee-milestone", "shink-nippon-history-en"],
          },
          {
            kind: "p",
            text: "Direct adoption of Shinkansen technology is a narrower story. Taiwan High Speed Rail, fully open from March 2007, uses 700T trains based on the 700 Series and was the first system to use exported Shinkansen technology. India's Mumbai to Ahmedabad line, financed by Japanese loans, is being built with Shinkansen technology.",
            cite: ["shink-jorsa-taiwan", "shink-jica-mahsr-2023"],
          },
          {
            kind: "p",
            text: "In 2001 JR West donated 0 Series car 22-141 to the National Railway Museum in York, the first Shinkansen car shown outside Japan and the first rail vehicle built and operated outside Britain to enter the UK's National Collection.",
            cite: ["shink-railwaygazette-2001", "shink-smg-22-141"],
          },
          { kind: "image", image: "shinkansen-0-york", size: "wide" },
        ],
      },
      {
        step: "world-today",
        heading: "Heritage in Kyoto and York",
        blocks: [
          {
            kind: "p",
            text: "The four first-numbered 0 Series cars, 21-1, 16-1, 35-1 and 22-1, are kept at the Kyoto Railway Museum. The Japan Society of Mechanical Engineers listed them as Mechanical Engineering Heritage No. 11 in 2007, and JR West designated them a Railway Monument in 2008.",
            cite: ["shink-jsme-heritage", "shink-jrwest-monument"],
          },
          {
            kind: "p",
            text: "JR Central's current safety reporting still rests on the 1964 principles: dedicated track without level crossings, and ATC, now in updated form, supervised from the Shinkansen General Control Center in Tokyo.",
            cite: ["shink-jrc-report-2025"],
          },
        ],
      },
      {
        step: "lessons",
        heading: "What designers can learn",
        blocks: [
          { kind: "interpretation", text: "Design the system, not only the object. The 0 Series nose is the famous image, but the safety record depends on track, signals and control designed together." },
          { kind: "interpretation", text: "Remove the hazard rather than protect against it. Building a line without level crossings and with enforced spacing made collisions unlikely by design." },
          { kind: "interpretation", text: "Expertise can move between fields. Wind-tunnel and vibration knowledge from aircraft work found a new, civilian use in a train." },
        ],
      },
    ],
    limitations: [
      { text: "\"No fatalities\" depends on definition. JR Central counts train accidents involving passengers on board; in 2015 two people died in an on-board arson fire that the transport ministry classed as a train fire accident.", cite: ["shink-jrc-report-2025", "shink-nippon-safety-2024", "shink-trafficnews-2015"] },
      { text: "Individual credit for the 0 Series nose is unclear. Sources variously credit Shima's team, Miki and wind-tunnel testing at the institute, and the Ginga link is unconfirmed.", cite: ["shink-nrm-page", "shink-kaken-sawai"] },
      { text: "We have not found JR Central's own Japanese history pages in a form we could read, so the construction timeline relies on nippon.com and other secondary sources.", cite: ["shink-nippon-history-ja"] },
    ],
    related: ["tokyo-1964-design", "super-cub", "rice-cooker"],
    principles: ["standards-and-openness", "material-and-making"],
    sources: [
      "shink-ieee-milestone",
      "shink-nrm-page",
      "shink-smg-22-141",
      "shink-railwaygazette-2001",
      "shink-nippon-history-ja",
      "shink-nippon-history-en",
      "shink-nippon-safety-2024",
      "shink-jrc-report-2025",
      "shink-trafficnews-2015",
      "shink-kaken-sawai",
      "shink-toyokeizai-miki",
      "shink-kanaloco-miki",
      "shink-toretabi-0",
      "shink-jsme-heritage",
      "shink-jrwest-monument",
      "shink-jorsa-taiwan",
      "shink-jica-mahsr-2023",
    ],
    readingMinutes: 7,
    reviewed: "2026-11-17",
  },

  // seiko-astron
  {
    id: "seiko-astron",
    slug: "seiko-astron",
    title: "A clock the size of a locker, shrunk to the wrist",
    subject: "Seiko Quartz Astron 35SQ",
    subjectJa: "クオーツアストロン",
    palette: ["#e6e6ea", "#d7b88b", "#5c4b41", "#e9e4d4"],
    alternativeNames: ["Quartz-Astron", "35SQ", "セイコー クオーツアストロン 35SQ"],
    dek: "Seiko's first quartz wristwatch went on sale on Christmas Day 1969. Three small decisions about a crystal, a circuit and a motor made it fit, and a decision about patents helped it spread.",
    summary:
      "The Quartz Astron 35SQ, made by Suwa Seikosha and sold from 25 December 1969 for ¥450,000, was the first quartz wristwatch sold to the public. It kept time to about ±5 seconds a month using a tuning-fork crystal, a hand-built electronic circuit and an open stepping motor. Seiko later made many of its quartz patents available to other makers, which it credits with spreading the technology.",
    category: "Product design",
    tags: ["timekeeping", "miniaturisation", "electronics", "patents", "watches"],
    originDate: "1969-12-25",
    originDateLabel: "On sale 25 December 1969",
    originLocation: "Suwa (development) and Ginza, Tokyo (launch)",
    people: [],
    collaborators: [
      { name: "Tsuneya Nakamura (中村恒也)", role: "Led the Suwa Seikosha quartz development team, according to the IEEE Milestone; as managing director he set the one-year deadline to commercialise", cite: ["astron-ieee-milestone", "astron-epson-book-ja"] },
      { name: "Hideaki Yasukawa (安川英昭)", role: "Deputy engineering manager who led the commercialisation group", cite: ["astron-epson-book-ja"] },
      { name: "Shoji Hattori (服部正次)", role: "Seiko group chairman who set the launch price", cite: ["astron-epson-book-ja"] },
    ],
    organisations: [
      { name: "Suwa Seikosha (now Seiko Epson)", role: "Developer and manufacturer" },
      { name: "K. Hattori & Co. (服部時計店, now Seiko Group)", role: "Seller; launched the watch in Ginza" },
    ],
    heroImage: "seiko-astron-35sq",
    globalReach: true,
    timeline: [
      { date: "1959", label: "Seiko starts an in-house quartz timekeeping project", place: "Japan", phase: "origin", cite: ["astron-seiko-museum-history"] },
      { date: "1964", label: "Seiko's quartz Crystal Chronometer serves as the main clock of the Tokyo Olympics", place: "Tokyo", phase: "origin", cite: ["astron-seiko-museum-quartz"] },
      { date: "1969-12-25", label: "Quartz Astron 35SQ goes on sale for ¥450,000", place: "Ginza, Tokyo", phase: "origin", cite: ["astron-seiko-museum-quartz", "astron-epson-book-ja"] },
      { date: "1970-04-10", label: "Swiss firms launch the Beta 21 quartz movement at the Basel fair", place: "Basel, Switzerland", phase: "development", cite: ["astron-ceh-frei", "astron-epson-book-ja"] },
      { date: "1971-01", label: "35SQC with date follows; about 800 watches of the 35SQ series are made in all", place: "Japan", phase: "development", cite: ["astron-epson-book-ja"] },
      { date: "1973", label: "A 32,768 Hz crystal appears in Seiko's 06LC digital watch, the frequency still standard today", place: "Japan", phase: "development", cite: ["astron-epson-book-ja", "astron-seiko-museum-quartz"] },
      { date: "2004-11-25", label: "IEEE Milestone dedicated in Tokyo", place: "Tokyo", phase: "today", cite: ["astron-ieee-milestone"] },
      { date: "2014", label: "Named Mechanical Engineering Heritage by the Japan Society of Mechanical Engineers", place: "Japan", phase: "today", cite: ["astron-seiko-museum-quartz", "astron-seiko-museum-collection-ja"] },
    ],
    sections: [
      {
        step: "problem",
        heading: "Accurate, but the size of a locker",
        blocks: [
          {
            kind: "p",
            text: "Quartz clocks were already far more accurate than mechanical movements. But the quartz clock Seiko built for a broadcasting station in 1958 was about the size of a large locker. Seiko's museum calculates that a wristwatch would need it reduced to roughly 1/300,000 of that size.",
            cite: ["astron-seiko-museum-quartz"],
          },
          {
            kind: "p",
            text: "Mechanical wristwatches of the time typically gained or lost from a few seconds to a few dozen seconds a day. Electronic rivals already existed: Bulova's Accutron (1960) used a tuning fork vibrating at 360 Hz.",
            cite: ["astron-seiko-museum-quartz"],
          },
        ],
      },
      {
        step: "idea",
        heading: "Shrink the quartz clock in stages",
        blocks: [
          {
            kind: "p",
            text: "Seiko began an in-house quartz project in 1959. Aiming to be official timer of the 1964 Tokyo Olympics, it supplied a quartz Crystal Chronometer as the Games' main clock, then built pocket-watch and wristwatch prototypes in 1966 and 1967.",
            cite: ["astron-seiko-museum-history", "astron-seiko-museum-quartz"],
          },
          {
            kind: "p",
            text: "According to Epson's company history, in December 1968 Suwa Seikosha's managing director told the team to turn the quartz watch into a product within a year. The Christmas launch date was not planned; it was simply when enough watches were ready.",
            cite: ["astron-epson-book-ja"],
          },
        ],
      },
      {
        step: "design-decision",
        heading: "A crystal, a circuit and a motor",
        blocks: [
          {
            kind: "p",
            text: "Three parts did most of the work of making quartz fit a wrist. A small tuning-fork shaped crystal, vibrating 8,192 times a second, used little power and resisted shocks. An electronic circuit divided that frequency down to one pulse a second. An open-type stepping motor then moved the second hand in one-second steps.",
            cite: ["astron-seiko-museum-quartz", "astron-ieee-milestone"],
          },
          {
            kind: "p",
            text: "The motor was \"open\" because its coil, stator and rotor were not boxed together: they were spread into the gaps between the gears, and the gears were thinned to make room. Energising it only briefly at each step, with a magnet holding the hand in between, cut power use; early prototypes had run down their batteries in about three months.",
            cite: ["astron-seiko-museum-quartz", "astron-gendai-oda"],
          },
          {
            kind: "interpretation",
            text: "The ticking second hand that now signals \"quartz\" was a power-saving choice, not a styling one. A continuous sweep would have cost battery life the design could not afford.",
          },
          {
            kind: "p",
            text: "The circuit was assembled by hand. Epson's history records 309 parts, 231 of them electronic, soldered under microscopes into a hybrid circuit built from bipolar transistors. During production the most complex part, the frequency divider, was replaced by a CMOS chip bought from Intersil in the United States.",
            cite: ["astron-epson-book-ja"],
          },
          {
            kind: "uncertain",
            text: "Sources describe the Astron's circuit differently. Seiko's museum lists a CMOS-IC among its key technologies, while Epson's own history says the first watches used a bipolar hybrid circuit, with a CMOS divider substituted during production and Suwa Seikosha's own CMOS chip arriving only in 1971. Both may be true of different production watches.",
            cite: ["astron-seiko-museum-history", "astron-epson-book-ja"],
          },
        ],
      },
      {
        step: "original-application",
        heading: "Christmas Day in Ginza",
        blocks: [
          {
            kind: "p",
            text: "The Quartz Astron 35SQ went on sale on 25 December 1969 in an 18-carat gold case, priced at ¥450,000, which Seiko compares to the price of a popular car. The IEEE gives the price as US$1,250.",
            cite: ["astron-seiko-museum-quartz", "astron-ieee-milestone"],
          },
          {
            kind: "facts",
            items: [
              { label: "Maker", value: "Suwa Seikosha", cite: ["astron-ieee-milestone"] },
              { label: "On sale", value: "25 December 1969", cite: ["astron-seiko-museum-quartz"] },
              { label: "Price", value: "¥450,000 (18 ct gold)", cite: ["astron-seiko-museum-quartz", "astron-epson-book-ja"] },
              { label: "Crystal", value: "Tuning-fork type, 8,192 Hz", cite: ["astron-seiko-museum-quartz", "astron-ieee-milestone"] },
              { label: "Accuracy", value: "±5 seconds a month", cite: ["astron-ieee-milestone", "astron-seiko-museum-collection-ja"] },
              { label: "Parts", value: "309, of which 231 electronic", cite: ["astron-epson-book-ja"] },
            ],
          },
          {
            kind: "p",
            text: "Epson's history says only twenty watches were ready. Three were presented to the Imperial Household, the president of the Horological Institute of Japan and the Supreme Court, and the other seventeen sold on the first day. The night before, the sales side had cut the price to ¥380,000; chairman Shoji Hattori put it back to ¥450,000, and the press conference slipped from 10 am to 2 pm while price tags were changed.",
            cite: ["astron-epson-book-ja"],
          },
          {
            kind: "uncertain",
            text: "Launch sales figures differ: Epson's history gives 17 sold from 20 ready, the IEEE page reports 100 sold in the first week, and a museum caption on Wikimedia Commons says 100 were sold. Epson also states that early production was limited to about 100 watches, with roughly 800 of the 35SQ series made in total.",
            cite: ["astron-epson-book-ja", "astron-ieee-milestone"],
          },
          { kind: "image", image: "seiko-astron-35sq", size: "inline" },
        ],
      },
      {
        step: "turning-point",
        heading: "Making the patents available",
        blocks: [
          {
            kind: "p",
            text: "Seiko says that it learned from Bulova, whose decision to keep its tuning-fork technology to itself, in Seiko's view, held back the Accutron. Seiko's museum states that the company therefore decided to disclose a large part of the patents it had been granted during quartz development, and that competitors in Japan and abroad went on to adopt the Seiko method.",
            cite: ["astron-seiko-museum-history", "astron-seiko-museum-collection-ja"],
          },
          {
            kind: "p",
            text: "\"Disclosed\" did not mean free of charge. The timekeeping historian Ichiro Oda writes that, after other makers asked for licences, the Seiko group decided to make its patents available for a fee, and an independent 2025 essay also describes Seiko as licensing its key quartz patents.",
            cite: ["astron-gendai-oda", "astron-wip-watchmen"],
          },
          {
            kind: "uncertain",
            text: "We have not found which patents were included, when the policy began, or the licence terms. Seiko's English pages say it \"opened the patents to the world\"; treat that as the company's description of a licensing policy, not as a release into the public domain.",
            cite: ["astron-seiko-astron-history", "astron-gendai-oda"],
          },
          {
            kind: "p",
            text: "The Astron was not built in isolation. Switzerland's industry laboratory, the CEH in Neuchâtel, had tested a quartz wristwatch prototype in 1967, and about twenty Swiss firms launched the Beta 21 quartz movement at the Basel fair on 10 April 1970, around four months after the Astron.",
            cite: ["astron-ceh-frei", "astron-epson-book-ja"],
          },
        ],
      },
      {
        step: "beyond-origins",
        heading: "Quartz everywhere, and the \"quartz crisis\"",
        blocks: [
          {
            kind: "p",
            text: "Production moved from hand assembly to mass production. Hattori's management decided in August 1970 to mass-produce quartz watches, and in 1973 Suwa Seikosha introduced a 32,768 Hz crystal, the frequency that remains standard in quartz watches. Seiko's museum notes that ready-made analog quartz movements later let companies enter the market simply as assemblers.",
            cite: ["astron-epson-book-ja", "astron-seiko-museum-quartz", "astron-seiko-museum-history"],
          },
          {
            kind: "p",
            text: "In Switzerland, by one set of estimates, watch-industry employment fell from about 90,000 in 1970 to about 33,000 in 1984, and the number of firms from over 1,600 to fewer than 600. Japan's timepiece output passed Switzerland's in 1980.",
            cite: ["astron-seiko-museum-quartz-crisis", "astron-wip-watchmen"],
          },
          {
            kind: "p",
            text: "Seiko's own museum does not attribute this to quartz alone. It lists a slow response to mass production and quartz alongside a rising Swiss franc, oil-shock and raw-material costs, higher labour costs and a fragmented industry structure, all arriving together. SSIH and ASUAG merged into SMH in 1983, which launched the Swatch that year.",
            cite: ["astron-seiko-museum-quartz-crisis"],
          },
          {
            kind: "interpretation",
            text: "It is tempting to draw a straight line from one watch in 1969 to Swiss job losses a decade later. The evidence supports something narrower: the Astron showed quartz could be sold on the wrist, Swiss laboratories had quartz movements of their own within months, and the industry's difficulties had several causes at once.",
          },
        ],
      },
      {
        step: "world-today",
        heading: "Recognised as engineering heritage",
        blocks: [
          {
            kind: "p",
            text: "An IEEE Milestone for the electronic quartz wristwatch was dedicated in Tokyo on 25 November 2004, crediting a Suwa Seikosha team led by Tsuneya Nakamura with about ten years of development. The Japan Society of Mechanical Engineers named the watch Mechanical Engineering Heritage in 2014, and Japan's National Museum of Nature and Science registered it as an Essential Historical Material for Science and Technology in fiscal 2018.",
            cite: ["astron-ieee-milestone", "astron-seiko-museum-quartz"],
          },
          {
            kind: "p",
            text: "The National Museum of American History holds an Astron 35SQ, given by Seiko Corporation of America; its case and band are reproductions of the originals.",
            cite: ["astron-smithsonian"],
          },
        ],
      },
      {
        step: "lessons",
        heading: "What designers can learn",
        blocks: [
          { kind: "interpretation", text: "Miniaturisation is a series of layout decisions. Opening up the motor and thinning the gears mattered as much as the crystal itself." },
          { kind: "interpretation", text: "A constraint can become a signature. The one-second tick was chosen to save power and became the familiar look of a quartz watch." },
          { kind: "interpretation", text: "Openness has terms. Seiko's patent policy is remembered as generosity; the sources suggest licensing, which still let the method become a shared standard." },
        ],
      },
    ],
    limitations: [
      { text: "Most technical and launch details come from Seiko and Epson's own histories. We could not identify the specific patents Seiko disclosed or licensed, or the terms.", cite: ["astron-seiko-museum-history", "astron-gendai-oda"] },
      { text: "The Smithsonian's record blocked our tools, so its details rest on search excerpts. Seiko describes the watch as on permanent display there; the record we saw did not confirm that." , cite: ["astron-smithsonian"] },
      { text: "Our account of the Swiss decline relies on Seiko's museum and one independent essay; we have not read Swiss business histories directly.", cite: ["astron-seiko-museum-quartz-crisis", "astron-wip-watchmen"] },
    ],
    related: ["tokyo-1964-design", "walkman", "game-and-watch", "rice-cooker"],
    principles: ["material-and-making", "standards-and-openness"],
    sources: [
      "astron-seiko-museum-quartz",
      "astron-seiko-museum-history",
      "astron-seiko-museum-collection-ja",
      "astron-seiko-astron-history",
      "astron-epson-book-ja",
      "astron-ieee-milestone",
      "astron-smithsonian",
      "astron-gendai-oda",
      "astron-ceh-frei",
      "astron-seiko-museum-quartz-crisis",
      "astron-wip-watchmen",
    ],
    readingMinutes: 7,
    reviewed: "2026-11-17",
  },

  // game-and-watch
  {
    id: "game-and-watch",
    slug: "game-and-watch",
    title: "A calculator chip, a clock, and a cross under the thumb",
    subject: "Nintendo Game & Watch and the cross-shaped directional pad",
    subjectJa: "ゲーム＆ウオッチと十字ボタン",
    palette: ["#9b5634", "#babbb8", "#723f2a", "#969a9b"],
    alternativeNames: ["Game & Watch", "D-pad", "十字キー", "十字ボタン", "Directional pad"],
    dek: "Nintendo's first handheld games ran on calculator parts and doubled as clocks. Two years in, a flat cross-shaped button let players steer without looking down, and it became the controller layout most people still know.",
    summary:
      "Game & Watch went on sale in 1980 with the same kind of chip used in pocket calculators, turning display segments into characters. In June 1982 the folding Donkey Kong replaced separate direction buttons with a single cross-shaped key, shaped through many prototypes under development head Gunpei Yokoi. The cross moved to the Famicom controller in 1983 and the NES in 1985, and Nintendo received a Technology & Engineering Emmy for the D-pad in January 2007.",
    category: "Product design",
    tags: ["games", "interaction design", "controllers", "consumer electronics", "patents"],
    originDate: "1980-04",
    originDateLabel: "Game & Watch 1980; cross button 1982",
    originLocation: "Nintendo, Kyoto",
    people: ["gunpei-yokoi"],
    collaborators: [
      { name: "Satoru Okada (岡田智)", role: "Built the first Game & Watch prototypes with Yokoi", cite: ["gw-iwata-asks-ja"] },
      { name: "Kano (加納)", role: "Designer of screens, faceplates, colours and packaging", cite: ["gw-iwata-asks-ja"] },
      { name: "Izushi (出石) and Yamamoto (山本)", role: "Hardware and software developers; Izushi worked on Donkey Kong", cite: ["gw-iwata-asks-ja"] },
      { name: "Ichiro Shirai", role: "Named inventor on Nintendo's US patent for the multi-directional switch", cite: ["gw-us-patent-4687200"] },
    ],
    organisations: [{ name: "Nintendo Co., Ltd.", role: "Developer and manufacturer" }],
    heroImage: "game-and-watch-donkey-kong",
    globalReach: true,
    timeline: [
      { date: "1980-04", label: "Ball, the first Game & Watch, goes on sale", place: "Japan", phase: "origin", cite: ["gw-iwata-asks-ja", "gw-nintendo-history-ja"] },
      { date: "1982-04-19", label: "Japanese utility-model application filed for a cross-shaped directional switch for games", place: "Japan", phase: "development", cite: ["gw-jp-utility-model"] },
      { date: "1982-06", label: "Game & Watch Donkey Kong introduces the cross button", place: "Japan", phase: "origin", cite: ["gw-iwata-asks-ja"] },
      { date: "1983", label: "Famicom launches with cross-button controllers", place: "Japan", phase: "development", cite: ["gw-nintendo-history-ja", "gw-bunshun-famicom"] },
      { date: "1985", label: "D-pad debuts in the United States on the NES controller", place: "United States", phase: "spread", cite: ["gw-nintendo-emmy-pr"] },
      { date: "1987-08-18", label: "US patent 4,687,200 for the multi-directional switch granted to Nintendo", place: "United States", phase: "spread", cite: ["gw-us-patent-4687200"] },
      { date: "2007-01", label: "Technology & Engineering Emmy for the D-pad presented at CES", place: "Las Vegas", phase: "today", cite: ["gw-nintendo-emmy-pr", "gw-gamedeveloper-emmy-2007"] },
    ],
    sections: [
      {
        step: "problem",
        heading: "A game for spare moments",
        blocks: [
          {
            kind: "p",
            text: "Before Game & Watch, Nintendo's electronic games were television consoles built from dedicated hardware rather than programs. The developers interviewed by Nintendo describe a small department where hardware engineers also wrote software, proposed ideas and even helped shoot the adverts.",
            cite: ["gw-iwata-asks-ja"],
          },
          {
            kind: "uncertain",
            text: "A popular story says Gunpei Yokoi had the idea after seeing a commuter on the Shinkansen passing time with a pocket calculator. In Nintendo's own interview, Satoru Iwata introduces it as something he heard second-hand, and the designer Kano says he does not know how the project began. We treat it as reported, not documented.",
            cite: ["gw-iwata-asks-ja", "gw-iwata-asks-en"],
          },
        ],
      },
      {
        step: "idea",
        heading: "Calculator parts, used sideways",
        blocks: [
          {
            kind: "p",
            text: "The developers confirm the calculator link in a different way. Game & Watch used the same chip as calculators, which could switch 72 display segments on and off. In Ball (April 1980), 28 segments formed a four-digit counter for the score and time, and the remaining 44 became the juggler and the balls.",
            cite: ["gw-iwata-asks-ja"],
          },
          {
            kind: "p",
            text: "The clock was a by-product. Because the game already used a quartz crystal, Izushi recalls, adding a clock was easy; Kano suspects it came late, since the display has no colon. Segments were so scarce that later titles showed only a \"1\" in the thousands place, capping scores at 1999.",
            cite: ["gw-iwata-asks-ja"],
          },
          {
            kind: "uncertain",
            text: "This way of working is widely summarised as Yokoi's \"lateral thinking with withered technology\" (枯れた技術の水平思考): putting mature, cheap, well-understood technology to new uses. The phrase is usually traced to his 1997 interview book with Takefumi Makino, reissued as 横井軍平ゲーム館. We have not read the book, so we give the idea in paraphrase and do not quote him.",
            cite: ["gw-chikuma-yokoi-book", "gw-ascii-makino"],
          },
        ],
      },
      {
        step: "original-application",
        heading: "A toy priced for adults",
        blocks: [
          {
            kind: "p",
            text: "Nintendo released the Game & Watch in 1980. Iwata recalls a price of about ¥5,800, high for a toy, and the developers remember an older shopper telling them it was too expensive. About 59 titles followed over roughly six years, including overseas releases.",
            cite: ["gw-nintendo-history-ja", "gw-iwata-asks-ja"],
          },
          {
            kind: "p",
            text: "Ideas came from the whole team, but Yokoi usually had the final word. Kano describes him cutting away additions until only the core of the fun remained.",
            cite: ["gw-iwata-asks-ja"],
          },
        ],
      },
      {
        step: "design-decision",
        heading: "One cross instead of four buttons",
        blocks: [
          {
            kind: "p",
            text: "Donkey Kong (June 1982), the second folding Multi Screen title, was the first to use the cross-shaped button. Yamamoto remembers hardware staff carving prototype after prototype for Yokoi to try, and Izushi says the centre was made slightly concave so the button could be worked precisely without looking at it.",
            cite: ["gw-iwata-asks-ja"],
          },
          { kind: "image", image: "game-and-watch-donkey-kong", size: "inline" },
          {
            kind: "p",
            text: "A Japanese utility-model application filed on 19 April 1982 describes the mechanism: a single cross-shaped key top rocking on a small hemispherical pivot, so that pressing one arm closes one contact, replacing separate movement switches in a thin, compact part. Nintendo's later US patent, granted in 1987 with Ichiro Shirai as inventor, describes a cross-shaped key over conductive rubber contacts for moving characters on a hand-held game's LCD.",
            cite: ["gw-jp-utility-model", "gw-us-patent-4687200"],
          },
          {
            kind: "interpretation",
            text: "The cross shape tells the thumb where the four directions are, and the dip in the middle gives it a resting place. It is a control designed to be read by touch, so the eyes can stay on the screen.",
          },
          {
            kind: "p",
            text: "The folding case had a domestic source too: to study the hinge between the two screens, Kano bought a cosmetic compact, whose mirror half he says is still in a Nintendo drawer.",
            cite: ["gw-iwata-asks-ja"],
          },
        ],
      },
      {
        step: "turning-point",
        heading: "From handheld to home console",
        blocks: [
          {
            kind: "p",
            text: "The Famicom, released in 1983, came with two flat controllers that carried over the cross button from Game & Watch, so players could steer by feel.",
            cite: ["gw-nintendo-history-ja", "gw-bunshun-famicom"],
          },
          { kind: "image", image: "famicom-controller", size: "inline" },
        ],
      },
      {
        step: "beyond-origins",
        heading: "The D-pad abroad",
        blocks: [
          {
            kind: "p",
            text: "Nintendo says the D-pad debuted in the United States in 1985 on the Nintendo Entertainment System controller and became standard on game controllers. Its US patent for the multi-directional switch was granted on 18 August 1987.",
            cite: ["gw-nintendo-emmy-pr", "gw-us-patent-4687200"],
          },
          { kind: "image", image: "nes-controller", size: "inline" },
          {
            kind: "uncertain",
            text: "It is often said that rival makers changed the shape of their pads to avoid Nintendo's rights, and that Japan's utility model expired in 1994. Japanese Wikipedia gives a 1992 registration (no. 1889504) and 1994 expiry, citing a Japan Patent Office guide we could not locate, and notes the right covered a specific structure, not the idea of a cross key. We have not confirmed these details in the patent register.",
            cite: ["gw-ja-wikipedia-cross-key"],
          },
        ],
      },
      {
        step: "world-today",
        heading: "An Emmy for a button",
        blocks: [
          {
            kind: "p",
            text: "The National Academy of Television Arts & Sciences honoured Nintendo's plus-shaped D-pad at the Technology & Engineering Emmy Awards, presented in Las Vegas during CES in January 2007. Sony shared the category for its DualShock controller.",
            cite: ["gw-nintendo-emmy-pr", "gw-gamedeveloper-emmy-2007"],
          },
          {
            kind: "p",
            text: "The D-pad award is sometimes dated 2008. Nintendo's Emmys in January 2008 were for the Wii and Nintendo DS controls, not the D-pad.",
            cite: ["gw-gamedeveloper-emmy-2008"],
          },
        ],
      },
      {
        step: "lessons",
        heading: "What designers can learn",
        blocks: [
          { kind: "interpretation", text: "Count your resources. With 72 segments, every one mattered, and the constraint shaped the games rather than limiting them." },
          { kind: "interpretation", text: "Design controls for the hand, not the eye. A raised cross with a hollow centre lets the player keep looking at the game." },
          { kind: "interpretation", text: "Mature parts in new places can create a new category. A calculator chip and a watch crystal made a pocket game possible at a price people would pay." },
        ],
      },
    ],
    limitations: [
      { text: "The English Iwata Asks pages could not be fetched; we relied on Nintendo's Japanese original, which is the primary text.", cite: ["gw-iwata-asks-ja", "gw-iwata-asks-en"] },
      { text: "Yokoi's own book was not consulted, so the \"withered technology\" idea is paraphrased from secondary accounts.", cite: ["gw-chikuma-yokoi-book", "gw-ascii-makino"] },
      { text: "The Japanese utility model's applicant, registration and expiry are not confirmed from the register; Google Patents does not show the applicant. Who devised the cross shape is also not documented: Yokoi led its development, while the US patent names Ichiro Shirai as inventor.", cite: ["gw-jp-utility-model", "gw-us-patent-4687200"] },
    ],
    related: ["seiko-astron", "walkman", "tamagotchi"],
    principles: ["touch-as-information", "borrowed-behaviour"],
    sources: [
      "gw-iwata-asks-ja",
      "gw-iwata-asks-en",
      "gw-nintendo-history-ja",
      "gw-bunshun-famicom",
      "gw-nintendo-emmy-pr",
      "gw-gamedeveloper-emmy-2007",
      "gw-gamedeveloper-emmy-2008",
      "gw-us-patent-4687200",
      "gw-jp-utility-model",
      "gw-ja-wikipedia-cross-key",
      "gw-chikuma-yokoi-book",
      "gw-ascii-makino",
    ],
    readingMinutes: 7,
    reviewed: "2026-11-17",
  },

  // nakagin-capsule-tower
  {
    id: "nakagin-capsule-tower",
    slug: "nakagin-capsule-tower",
    title: "A building made to be replaced, and never was",
    subject: "Nakagin Capsule Tower",
    subjectJa: "中銀カプセルタワービル",
    palette: ["#dbe1f1", "#989ea8", "#6f655f", "#292320"],
    alternativeNames: ["Nakagin Capsule Tower Building", "中銀カプセルタワー"],
    dek: "Kisho Kurokawa's Ginza tower hung 140 factory-made rooms on two concrete cores and promised to swap them as they aged. None was ever swapped. Fifty years later the rooms were lifted off one by one, and some went to museums.",
    summary:
      "Completed in 1972, the Nakagin Capsule Tower was one of the few buildings of the Metabolism movement to be built. Each of its 140 capsules was fitted out in a factory, lifted by crane and fixed to a concrete core with four high-tensile bolts, so that it could in principle be removed and replaced. The replacement never happened. The building was dismantled in 2022, and restored capsules are now held by MoMA, SFMOMA and M+, among others.",
    category: "Industrial design",
    tags: ["architecture", "prefabrication", "Metabolism", "housing", "preservation", "modular design"],
    originDate: "1972",
    originDateLabel: "Opened 5 April 1972",
    originLocation: "Ginza, Tokyo, Japan",
    people: ["kisho-kurokawa"],
    collaborators: [
      { name: "Nobuo Abe", role: "Led the design and construction of the capsules in Kurokawa's office", cite: ["nakagin-moma-labels"] },
      { name: "Aiko Mogi", role: "Drew many of the architectural drawings, including the facades", cite: ["nakagin-moma-labels"] },
      { name: "Koji Shimosawa", role: "Designed the tower cores", cite: ["nakagin-moma-labels"] },
      { name: "Kenjiro Ueda", role: "Developed the plinth linking the two towers", cite: ["nakagin-moma-labels"] },
      { name: "Tatsuyuki Maeda", role: "Capsule owner who led the preservation project and the rescue of capsules", cite: ["nakagin-sfmoma", "nakagin-sekisan-kurokawa"] },
    ],
    organisations: [
      { name: "Kisho Kurokawa Architect & Associates", role: "Architect; later supervised restoration of the rescued capsules" },
      { name: "Nakagin (中銀)", role: "Developer and marketer of the building" },
      { name: "Taisei Corporation", role: "Constructor" },
      { name: "Nakagin Capsule Tower Building Preservation and Restoration Project", role: "Residents' group that removed and restored capsules" },
    ],
    heroImage: "nakagin-tower-2017",
    globalReach: true,
    timeline: [
      { date: "1969", label: "Kurokawa's Capsule Declaration sets out an architecture of replaceable parts", place: "Tokyo", phase: "origin", cite: ["nakagin-moma-labels"] },
      { date: "1970", label: "A prototype Capsule House is hung in the Theme Pavilion at Expo '70", place: "Osaka", phase: "origin", cite: ["nakagin-moma-labels"] },
      { date: "1972-04-05", label: "The tower opens with 140 capsules", place: "Ginza, Tokyo", phase: "origin", cite: ["nakagin-moma-labels", "nakagin-moma-press"] },
      { date: "2006", label: "Selected by Docomomo Japan as a significant modern building", place: "Japan", phase: "development", cite: ["nakagin-docomomo", "nakagin-kurokawa-office"] },
      { date: "2014", label: "Residents and owners form the preservation and restoration project", place: "Tokyo", phase: "development", cite: ["nakagin-preservation-project", "nakagin-moma-labels"] },
      { date: "2022-04-12", label: "Demolition begins; capsules are lifted off by crane through the year", place: "Ginza, Tokyo", phase: "development", cite: ["nakagin-dezeen-demolition", "nakagin-moma-labels"] },
      { date: "2023", label: "SFMOMA and MoMA each acquire a restored capsule", place: "San Francisco, New York", phase: "spread", cite: ["nakagin-sfmoma", "nakagin-moma-press"] },
      { date: "2025-07-10", label: "MoMA opens The Many Lives of the Nakagin Capsule Tower", place: "New York", phase: "today", cite: ["nakagin-moma-press"] },
    ],
    sections: [
      {
        step: "problem",
        heading: "Buildings that cannot change",
        blocks: [
          {
            kind: "p",
            text: "The Metabolists, a group formed in Japan in 1960, borrowed a word from biology to describe cities and buildings that could grow and adapt over time. Kurokawa, its youngest founding member, wanted architecture that could renew itself through what he called metabolic cycles.",
            cite: ["nakagin-moma-press", "nakagin-moma-labels"],
          },
          {
            kind: "interpretation",
            text: "Behind the biological language sits a practical complaint: an ordinary building ages as a single block. When the kitchens, wiring or plumbing wear out, the whole structure becomes harder to keep. Metabolism proposed separating the parts that last from the parts that wear.",
          },
        ],
      },
      {
        step: "idea",
        heading: "Long-lived cores, short-lived rooms",
        blocks: [
          {
            kind: "p",
            text: "In his 1969 Capsule Declaration, Kurokawa set out eight principles for an architecture of replaceable parts. A first built test was the Capsule House hung from the space frame of the Theme Pavilion at Expo '70 in Osaka, a prototype dwelling of capsule rooms around a circular corridor.",
            cite: ["nakagin-moma-labels"],
          },
          {
            kind: "p",
            text: "At Nakagin the concrete cores, holding lifts, stairs and services, were meant to stay, while the capsules would be replaced every 25 to 35 years as needs changed. Dezeen reports the intended cycle as 25 years.",
            cite: ["nakagin-moma-press", "nakagin-dezeen-demolition"],
          },
        ],
      },
      {
        step: "original-application",
        heading: "A pied-à-terre for commuting businessmen",
        blocks: [
          {
            kind: "p",
            text: "The tower opened on 5 April 1972. It had two interconnected towers holding 140 single-occupancy capsules, marketed by the Nakagin company to businessmen as small city rooms, second homes or offices near work. Each unit was just under six tatami mats in size, in Kurokawa's own description.",
            cite: ["nakagin-moma-labels", "nakagin-moma-press"],
          },
          {
            kind: "p",
            text: "Standard equipment included a 13-inch Sony colour TV, an alarm clock and a Sanyo refrigerator, with options such as a Sony tape recorder and radio. The brochures sold capsules rather like a new car, with a list of features to choose from.",
            cite: ["nakagin-moma-labels"],
          },
          { kind: "image", image: "nakagin-capsule-interior", size: "wide" },
          {
            kind: "facts",
            items: [
              { label: "Opened", value: "5 April 1972", cite: ["nakagin-moma-labels"] },
              { label: "Capsules", value: "140, on two towers", cite: ["nakagin-moma-press", "nakagin-sfmoma"] },
              { label: "Storeys", value: "11 and 13, plus one basement", cite: ["nakagin-kurokawa-office"] },
              { label: "Fixing", value: "Four high-tensile bolts per capsule", cite: ["nakagin-kurokawa-office", "nakagin-sekisan-kurokawa"] },
              { label: "Constructor", value: "Taisei Corporation", cite: ["nakagin-docomomo"] },
            ],
          },
        ],
      },
      {
        step: "design-decision",
        heading: "Finish the room in the factory",
        blocks: [
          {
            kind: "p",
            text: "Docomomo Japan records that the capsules were made in the factory from steel plate and light-gauge steel, fully welded. Appliances, furniture, audio equipment, TV and telephone were fitted before the units left the factory. On site each capsule was lifted by crane and fixed to a concrete core shaft with only four high-tensile bolts, and the service piping was made as a unit so that capsule and core could be separated.",
            cite: ["nakagin-docomomo", "nakagin-kurokawa-office", "nakagin-sekisan-kurokawa"],
          },
          {
            kind: "p",
            text: "MoMA's curators stress that this was a team effort. Nobuo Abe, who had worked on the Expo '70 Capsule House, led the design and construction of the capsules; Aiko Mogi drew many of the drawings; Koji Shimosawa designed the cores; Kenjiro Ueda the plinth that joined the two towers.",
            cite: ["nakagin-moma-labels"],
          },
          { kind: "image", image: "nakagin-capsules-detail", size: "wide" },
          {
            kind: "interpretation",
            text: "This is why we file the tower under industrial design. The capsule was a manufactured product, finished and equipped like an appliance, and the building was the frame that held the products. Four bolts made replacement physically possible.",
          },
        ],
      },
      {
        step: "turning-point",
        heading: "Replaceable in theory, not in practice",
        blocks: [
          {
            kind: "p",
            text: "No capsule was ever replaced. Dezeen attributes this to lack of funding. An account by the Kurokawa office adds that renovation, including asbestos removal, was discussed from about 2000, but any scheme meant removing all 140 capsules at once, and the owners' consent and construction conditions never came together.",
            cite: ["nakagin-dezeen-demolition", "nakagin-sekisan-kurokawa"],
          },
          {
            kind: "p",
            text: "Meanwhile the building changed in another way. Over five decades its capsules became second homes, offices, student rooms, tea rooms, libraries, galleries and DJ booths. In 2014 a small group of residents and owners formed a preservation and restoration project.",
            cite: ["nakagin-moma-press", "nakagin-preservation-project", "nakagin-moma-labels"],
          },
          {
            kind: "p",
            text: "The site was sold in 2021 to a real estate company that planned demolition. Demolition of the exterior began on 12 April 2022, and the capsules were lifted off by crane, just as they had been put on. SFMOMA reports that the last capsule came down in late November 2022.",
            cite: ["nakagin-sfmoma", "nakagin-japantimes-2022", "nakagin-dezeen-demolition", "nakagin-moma-labels"],
          },
        ],
      },
      {
        step: "beyond-origins",
        heading: "Capsules leave the tower",
        blocks: [
          {
            kind: "p",
            text: "The preservation project removed 23 capsules and restored them under the supervision of Kisho Kurokawa Architect & Associates, the architect's former office. They were planned for museums, commercial venues, galleries and lodging in Japan and abroad.",
            cite: ["nakagin-preservation-project", "nakagin-tab-2024", "nakagin-japantimes-2025"],
          },
          {
            kind: "p",
            text: "SFMOMA acquired the capsule that had been Kurokawa's own in 2023. MoMA acquired capsule A1305, once at the top of Tower A, the same year, restored with original fittings salvaged from other capsules. M+ in Hong Kong shows capsule A806. In Japan, capsules have been shown at the Museum of Modern Art, Wakayama, and five were planned as guest rooms in Yokosuka.",
            cite: ["nakagin-sfmoma", "nakagin-moma-press", "nakagin-mplus", "nakagin-tab-2024"],
          },
          {
            kind: "uncertain",
            text: "Counts differ by what they measure. The preservation project and Tokyo Art Beat give 23 capsules removed and restored; MoMA and Dezeen say 14 were restored to their original condition. Press reports give SFMOMA's capsule as A1302, but SFMOMA's own article does not state the number.",
            cite: ["nakagin-preservation-project", "nakagin-moma-press", "nakagin-dezeen-moma", "nakagin-sfmoma"],
          },
          {
            kind: "p",
            text: "MoMA's labels also connect the capsule idea to a more widespread building type: in 1977 Kurokawa's office was commissioned to design a hotel of stacked capsule beds for a sauna in Osaka. It opened in 1979 and, MoMA writes, became the prototype for the capsule hotel.",
            cite: ["nakagin-moma-labels"],
          },
        ],
      },
      {
        step: "world-today",
        heading: "An object in a museum",
        blocks: [
          {
            kind: "p",
            text: "MoMA's exhibition The Many Lives of the Nakagin Capsule Tower ran from 10 July 2025 to 12 July 2026 around capsule A1305. Kurokawa's office spent six months restoring it before it was shipped by boat to New York.",
            cite: ["nakagin-moma-press", "nakagin-dezeen-moma"],
          },
          {
            kind: "interpretation",
            text: "The capsules were removable, so they could be rescued as objects, and that outcome is unusual. Most demolished buildings leave fragments. Nakagin left whole rooms, and they are now collected and displayed the way museums handle chairs and radios.",
          },
        ],
      },
      {
        step: "lessons",
        heading: "What designers can learn",
        blocks: [
          { kind: "interpretation", text: "Replaceability is a promise about the future, and it needs owners, money and a process as much as bolts. The four-bolt detail worked; the arrangements to use it were never made." },
          { kind: "interpretation", text: "Design for the parts that wear. Separating a long-lived structure from short-lived equipment is still a sound idea, even though this building never tested it." },
          { kind: "interpretation", text: "Credit the team. MoMA's research shows that a building often credited to one architect was drawn and engineered by many people." },
        ],
      },
    ],
    limitations: [
      { text: "Where the capsules were manufactured, and by which company, is reported inconsistently in secondary sources (Shiga and Shizuoka factories are both mentioned). We found no primary source naming the maker, so we have left it out.", cite: ["nakagin-docomomo"] },
      { text: "Why the capsules were never replaced is explained differently: Dezeen cites funding, the Kurokawa office describes the difficulty of agreeing a whole-building scheme. Both may be true; we have not seen the owners' association records.", cite: ["nakagin-dezeen-demolition", "nakagin-sekisan-kurokawa"] },
      { text: "The Japan Times coverage could not be fetched (HTTP 403) and is cited only for points confirmed elsewhere.", cite: ["nakagin-japantimes-2022", "nakagin-japantimes-2025"] },
    ],
    related: ["tokyo-1964-design", "walkman", "shinkansen"],
    principles: ["material-and-making"],
    sources: [
      "nakagin-moma-press",
      "nakagin-moma-labels",
      "nakagin-kurokawa-office",
      "nakagin-docomomo",
      "nakagin-sekisan-kurokawa",
      "nakagin-dezeen-demolition",
      "nakagin-dezeen-moma",
      "nakagin-sfmoma",
      "nakagin-mplus",
      "nakagin-preservation-project",
      "nakagin-tab-2024",
      "nakagin-japantimes-2022",
      "nakagin-japantimes-2025",
    ],
    readingMinutes: 7,
    reviewed: "2026-11-17",
  },

  // washlet
  {
    id: "washlet",
    slug: "washlet",
    title: "Washing, measured in degrees",
    subject: "TOTO Washlet warm-water bidet seat",
    subjectJa: "ウォシュレット",
    palette: ["#c6cfd9", "#a7a29e", "#8f7762", "#6d5746"],
    alternativeNames: ["温水洗浄便座", "Washlet G", "Wash Air Seat (predecessor)"],
    dek: "TOTO started by importing an American medical seat. To make its own, it asked about 300 employees for data nobody had collected, then had to fit electronics into a product that sits in water.",
    summary:
      "TOTO sold an imported American washing seat from 1964, mainly to hospitals. In 1978 it began its own design, collected body-position data from about 300 employees, and settled on a 43° spray, 38 °C water and a 36 °C seat, controlled by a resin-sealed IC. The Washlet went on sale in June 1980. Adoption was slow, but by 2026 82.5% of Japanese households of two or more people had a warm-water seat, and TOTO sells the Washlet in more than 100 countries.",
    category: "Product design",
    tags: ["household objects", "bathroom", "electronics", "ergonomics", "hygiene", "advertising"],
    originDate: "1980",
    originDateLabel: "On sale June 1980",
    originLocation: "Kitakyushu, Japan",
    people: [],
    collaborators: [
      { name: "TOTO Washlet development team", role: "In-house team, mostly in their twenties, that developed the product from 1978", cite: ["washlet-toto-history-en"] },
      { name: "About 300 TOTO employees", role: "Volunteers whose measurements set the spray angle and temperatures", cite: ["washlet-toto-70m", "washlet-toto-history-en"] },
      { name: "Katsuji Yamada", role: "TOTO president who ordered faulty early units replaced rather than repaired", cite: ["washlet-toto-history-en"] },
      { name: "Takashi Nakahata", role: "Copywriter of the launch campaign line おしりだって、洗ってほしい。", cite: ["washlet-toto-senryu-2025", "washlet-totousa-blog"] },
    ],
    organisations: [
      { name: "TOTO (formerly Toyo Toki)", role: "Developer, manufacturer and seller" },
      { name: "American Bidet Company", role: "Maker of the imported Wash Air Seat that preceded the Washlet" },
      { name: "Cabinet Office, Government of Japan", role: "Publishes the household ownership statistics" },
    ],
    heroImage: "washlet-tcf8ww88",
    globalReach: true,
    timeline: [
      { date: "1964-12", label: "TOTO begins selling the imported Wash Air Seat, an American medical product", place: "Japan", phase: "origin", cite: ["washlet-toto-40th", "washlet-kadenwatch-2012"] },
      { date: "1969-11", label: "A Japanese-made Wash Air Seat adds a heated seat", place: "Japan", phase: "origin", cite: ["washlet-toto-40th"] },
      { date: "1978-11", label: "TOTO starts developing its own warm-water seat", place: "Japan", phase: "origin", cite: ["washlet-toto-40th", "washlet-nippon-40"] },
      { date: "1980-06", label: "Washlet goes on sale in G (storage) and S (instant) versions", place: "Japan", phase: "origin", cite: ["washlet-toto-40th", "washlet-toto-history-en"] },
      { date: "1982-09", label: "TV commercial おしりだって、洗ってほしい。", place: "Japan", phase: "development", cite: ["washlet-toto-40th"] },
      { date: "1986-11", label: "Overseas sales begin with the Washlet S III in the United States", place: "United States", phase: "spread", cite: ["washlet-toto-40th", "washlet-toto-eu-history"] },
      { date: "2025-11", label: "Cumulative shipments pass 70 million, more than 30% of recent sales abroad", place: "International", phase: "today", cite: ["washlet-toto-70m"] },
      { date: "2026-03", label: "82.5% of Japanese households of two or more people own a warm-water seat", place: "Japan", phase: "today", cite: ["washlet-cao-survey-2026"] },
    ],
    sections: [
      {
        step: "problem",
        heading: "A medical seat that scalded",
        blocks: [
          {
            kind: "p",
            text: "Washing with warm water from a toilet seat did not start in Japan. TOTO's predecessor product was the Wash Air Seat, made in the United States by the American Bidet Company for medical use and sold in Japan mainly to proctology clinics. At the same time Ina Seito (now LIXIL) was importing similar seats from Europe.",
            cite: ["washlet-toto-history-en", "washlet-monoist-2020", "washlet-toto-40th"],
          },
          {
            kind: "p",
            text: "Users complained. The water temperature was unstable and the spray angle wavered. A hot-water tank stuck out behind the seat, it was not comfortable to sit on, and without electronic control, water could suddenly come out hot.",
            cite: ["washlet-toto-history-en", "washlet-monoist-2020"],
          },
          {
            kind: "p",
            text: "Even so, the seat spread from hospitals into homes by word of mouth, selling 7,000 to 8,000 a year, according to TOTO. Bathrooms were changing too: in 1977 shipments of Western-style seated toilets overtook Japanese squat toilets.",
            cite: ["washlet-monoist-2020", "washlet-toto-history-en"],
          },
        ],
      },
      {
        step: "idea",
        heading: "Measure people first",
        blocks: [
          {
            kind: "p",
            text: "TOTO began its own development in November 1978, aiming at households rather than clinics. The development team, mostly in their twenties, had a year and a half instead of the company's usual three years.",
            cite: ["washlet-toto-40th", "washlet-toto-history-en"],
          },
          {
            kind: "p",
            text: "There was no data on where a spray should land. The team stretched a steel wire across the centre of a test seat and asked volunteers to mark their position on paper set along it. TOTO says many employees were reluctant, especially women, but about 300 eventually took part.",
            cite: ["washlet-toto-history-en", "washlet-kadenwatch-2026", "washlet-toto-70m"],
          },
          {
            kind: "facts",
            items: [
              { label: "Spray angle", value: "43°", cite: ["washlet-toto-70m", "washlet-toto-history-en"] },
              { label: "Water", value: "38 °C", cite: ["washlet-toto-70m", "washlet-toto-history-en"] },
              { label: "Seat", value: "36 °C", cite: ["washlet-toto-70m", "washlet-toto-history-en"] },
              { label: "Drying air", value: "50 °C", cite: ["washlet-toto-70m", "washlet-toto-history-en"] },
              { label: "Participants", value: "About 300 employees", cite: ["washlet-toto-70m", "washlet-totousa-blog"] },
            ],
          },
          {
            kind: "p",
            text: "TOTO says the 43° angle has not changed since. It lets the spray reach its target while keeping used water from falling back onto the nozzle.",
            cite: ["washlet-kadenwatch-2026"],
          },
        ],
      },
      {
        step: "design-decision",
        heading: "Electronics that can get wet",
        blocks: [
          {
            kind: "p",
            text: "Holding water, seat and air at those temperatures needed fast, accurate electronic control, and integrated circuits were then considered unusable in anything that might get wet. According to TOTO, a developer noticed that traffic signals kept working in the rain. With help from a signal maker, the team sealed the circuit in resin as a hybrid IC and added a thermistor to sense temperature.",
            cite: ["washlet-toto-history-en", "washlet-monoist-2020"],
          },
          {
            kind: "p",
            text: "As a ceramics company, TOTO also had ceramic-heater technology, which it expected to give stable warm water.",
            cite: ["washlet-monoist-2020"],
          },
          {
            kind: "interpretation",
            text: "The engineering challenge was mainly about the setting. Washing, drying and warming were already known. What had to change was making precise electronics survive in a wet room and setting their targets from measured bodies rather than guesses.",
          },
        ],
      },
      {
        step: "original-application",
        heading: "June 1980",
        blocks: [
          {
            kind: "p",
            text: "The Washlet went on sale in June 1980 in two types: the G series, which kept a tank of hot water, and the S series, which heated water instantly. TOTO USA says the name comes from \"Let's wash\".",
            cite: ["washlet-toto-40th", "washlet-totousa-blog"],
          },
          {
            kind: "p",
            text: "The two types were a trade-off. A storage tank gave plenty of warm water but used electricity and could run out; instant heating was limited by the roughly 1,200 W a household supply could provide.",
            cite: ["washlet-monoist-2020"],
          },
        ],
      },
      {
        step: "turning-point",
        heading: "A recall, a slogan and a slow climb",
        blocks: [
          {
            kind: "p",
            text: "About three months after launch, complaints arrived that the warm water was running cold. TOTO's president, Katsuji Yamada, chose to replace the units rather than repair them, a decision TOTO credits with winning trust.",
            cite: ["washlet-toto-history-en"],
          },
          {
            kind: "p",
            text: "In September 1982 TOTO aired the TV commercial \"おしりだって、洗ってほしい。\" (roughly, \"Your bottom wants washing too\"), written by copywriter Takashi Nakahata. TOTO's own history calls the commercial a hit that drove sales.",
            cite: ["washlet-toto-40th", "washlet-toto-senryu-2025", "washlet-toto-history-en"],
          },
          {
            kind: "p",
            text: "A TOTO spokesperson gave a more cautious view in 2020. The commercial made the product known, but in 1992, when the Cabinet Office survey first covered these seats, only about 14% of households had one, and ownership passed 50% only around 2003. TOTO worked by word of mouth: it installed seats in plumbing contractors' homes so their families could recommend them, and handed out a guide to restaurants that had them.",
            cite: ["washlet-monoist-2020"],
          },
          {
            kind: "uncertain",
            text: "MONOist's interviewer recalls the singer and actor Jun Togawa appearing in the 1982 commercial. We have not confirmed the casting in a TOTO source.",
            cite: ["washlet-monoist-2020"],
          },
        ],
      },
      {
        step: "beyond-origins",
        heading: "From Kitakyushu to the United States",
        blocks: [
          {
            kind: "p",
            text: "Shipments began at an estimated 2,500 a month and reached one million in total by 1987 and ten million by 1998. Later changes included a self-cleaning nozzle and a front-wash (bidet) function in 1983, and in 1999 Wonder Wave washing, which pulses the spray about 70 times a second to use less water.",
            cite: ["washlet-toto-history-en", "washlet-toto-40th", "washlet-monoist-2020"],
          },
          {
            kind: "p",
            text: "Overseas sales began in November 1986 with the Washlet S III in the United States, and in China in 1994. In 2019, about 27% of Washlet sales were outside Japan; in 2024, over 30%. TOTO now sells the product in more than 100 countries.",
            cite: ["washlet-toto-40th", "washlet-toto-eu-history", "washlet-toto-70m", "washlet-nippon-40"],
          },
          { kind: "image", image: "washlet-controls-braille", size: "inline" },
        ],
      },
      {
        step: "world-today",
        heading: "Four in five homes",
        blocks: [
          {
            kind: "p",
            text: "The Cabinet Office's consumer survey found that at the end of March 2026, 82.5% of Japanese households of two or more people owned a warm-water washing seat, about 117 seats per 100 households. The figure covers every brand, not only TOTO.",
            cite: ["washlet-cao-survey-2026"],
          },
          {
            kind: "p",
            text: "TOTO's cumulative Washlet shipments passed 70 million in November 2025. In 2012 the Japan Society of Mechanical Engineers recognised the first Washlet G as Mechanical Engineering Heritage, the first household product to receive the designation.",
            cite: ["washlet-toto-70m", "washlet-kadenwatch-2012", "washlet-toto-40th"],
          },
          {
            kind: "interpretation",
            text: "\"Washlet\" is TOTO's registered trademark, but in everyday Japanese it is often used for the whole category. This shows how strongly one product became linked with a habit that several companies now serve.",
          },
        ],
      },
      {
        step: "lessons",
        heading: "What designers can learn",
        blocks: [
          { kind: "interpretation", text: "Collect the data nobody wants to collect. The key numbers came from asking colleagues to take part in an awkward test, not from a catalogue." },
          { kind: "interpretation", text: "Borrow solutions from other fields. A waterproof traffic signal solved a bathroom problem." },
          { kind: "interpretation", text: "A good launch is not the same as adoption. Even with a well-known slogan, the habit took more than twenty years to reach most households, helped by personal recommendation." },
        ],
      },
    ],
    limitations: [
      { text: "Almost all detail on the 1978 to 1980 development, including the 300 participants and the measured values, comes from TOTO itself. We found no independent study or published test report.", cite: ["washlet-toto-history-en", "washlet-toto-70m"] },
      { text: "TOTO sources differ on who first imported the Wash Air Seat. The Japanese chronology says TOTO began import sales in December 1964; the English history and TOTO USA describe a Japanese trading company importing it, with TOTO taking over production in 1967 and launching a domestic version in 1969.", cite: ["washlet-toto-40th", "washlet-toto-history-en", "washlet-totousa-blog"] },
      { text: "Ownership statistics count all warm-water seats in households of two or more people, not TOTO products alone, and leave out single-person households.", cite: ["washlet-cao-survey-2026"] },
    ],
    related: ["rice-cooker", "walkman", "nakagin-capsule-tower"],
    principles: ["material-and-making"],
    sources: [
      "washlet-toto-40th",
      "washlet-toto-70m",
      "washlet-toto-history-en",
      "washlet-toto-eu-history",
      "washlet-monoist-2020",
      "washlet-totousa-blog",
      "washlet-toto-senryu-2025",
      "washlet-kadenwatch-2012",
      "washlet-kadenwatch-2026",
      "washlet-cao-survey-2026",
      "washlet-nippon-40",
    ],
    readingMinutes: 7,
    reviewed: "2026-11-17",
  },

  // miura-fold
  {
    id: "miura-fold",
    slug: "miura-fold",
    title: "A fold that opens with one pull",
    subject: "Miura-ori (the Miura fold)",
    subjectJa: "ミウラ折り",
    palette: ["#2e2e2e", "#d6d3ce", "#ecebe8", "#96918a"],
    alternativeNames: ["Miura-ori", "Miura fold", "三浦折り", "PCCP shell (related cylindrical form)"],
    dek: "A space engineer noticed that a pattern of failure was also a strong structure. It became a way to pack membranes for orbit, a map that opens with one pull, and the facets on a can of chu-hi.",
    summary:
      "Koryo Miura (三浦公亮), at the University of Tokyo's space institute (later ISAS), developed a crease pattern of repeated parallelograms in which every fold moves together. Pull two corners and the whole sheet opens; push them and it closes. It was tested in orbit on the Space Flyer Unit (launched 1995), sold as folding maps, and, in a related cylindrical form, shapes the diamond-cut can that Kirin has used for Hyoketsu since 2001.",
    category: "Industrial design",
    tags: ["origami", "deployable structures", "space engineering", "maps", "packaging"],
    originDate: "1969",
    originDateLabel: "Shell geometry published 1969; folding map filed 1975",
    originLocation: "Institute of Space and Aeronautical Science, University of Tokyo",
    people: ["koryo-miura"],
    collaborators: [
      { name: "Masamori Sakamaki", role: "ISAS colleague who presented the Miura-ori map with Miura in 1980", cite: ["miura-bain-1980"] },
      { name: "Yoshimaru Yoshimura (吉村慶丸)", role: "Earlier researcher whose 1951 buckling pattern Miura cites as the starting point", cite: ["miura-isas-news-258"] },
    ],
    organisations: [
      { name: "Institute of Space and Aeronautical Science, University of Tokyo (later ISAS, now part of JAXA)", role: "Where the fold was developed and flight-tested" },
      { name: "Toyo Seikan", role: "Can maker that applied the related PCCP shell to the diamond-cut can" },
      { name: "Kirin Brewery", role: "Has used the diamond-cut can for Hyoketsu since 2001" },
      { name: "Miura-ori Lab", role: "Tokyo company that made and sold Miura-ori maps" },
    ],
    heroImage: "miura-ori-tessellations",
    globalReach: false,
    timeline: [
      { date: "1966–1967", label: "Miura studies fuselage failure at NASA Langley and notices that a buckling model is stable", place: "Hampton, Virginia, USA", phase: "development", cite: ["miura-isas-news-258"] },
      { date: "1969-11", label: "Miura's report proposes the PCCP shell as a new structural form", place: "Tokyo", phase: "origin", cite: ["miura-isas-news-258"] },
      { date: "1975-09-07", label: "Utility model application for a folding map filed", place: "Japan", phase: "origin", cite: ["miura-utility-model"] },
      { date: "1980", label: "Miura and Sakamaki present the Miura-ori map to the International Cartographic Association", place: "Tokyo", phase: "development", cite: ["miura-bain-1980"] },
      { date: "1985-12", label: "ISAS Report 618 sets out the fold for packaging large membranes in space", place: "Japan", phase: "development", cite: ["miura-isas-report-618"] },
      { date: "1995-03-18", label: "Space Flyer Unit launched carrying the Miura-folded 2D array experiment", place: "Tanegashima", phase: "development", cite: ["miura-isas-sfu", "miura-isas-2dsa"] },
      { date: "2001", label: "Kirin launches Hyoketsu in Toyo Seikan's diamond-cut can", place: "Japan", phase: "spread", cite: ["miura-ryutsuu-trademark", "miura-kahaku-diamond-can"] },
      { date: "2020-10-16", label: "HIROGARI CubeSat, testing a Miura-ori panel, handed to JAXA", place: "Tsukuba", phase: "today", cite: ["miura-mynavi-hirogari"] },
    ],
    sections: [
      {
        step: "problem",
        heading: "Large and flat, but launched small",
        blocks: [
          {
            kind: "p",
            text: "Solar arrays and antennas for spacecraft need large flat surfaces, but they must travel folded inside a rocket. Miura's 1985 ISAS report frames the task as packaging and deploying large membranes in space, with solar power satellites and antennas among its keywords.",
            cite: ["miura-isas-report-618"],
          },
          {
            kind: "p",
            text: "Paper maps face a smaller version of the same problem. A 1980 New Scientist report on Miura's map lists three faults of ordinary right-angle folds: the movements are complicated, folds turn inside out, and the paper tears where folds cross.",
            cite: ["miura-bain-1980"],
          },
        ],
      },
      {
        step: "idea",
        heading: "A failure pattern, held in the hand",
        blocks: [
          {
            kind: "p",
            text: "In a 2002 essay for ISAS's newsletter, Miura traces the idea to a 1951 paper by Yoshimaru Yoshimura, who showed that thin cylinders such as aircraft fuselages buckle into a particular folded pattern. From 1966 to 1967, studying fuselage failure at NASA's Langley Research Center, Miura made models of variations of that pattern and noticed by touch that one failure model was a very stable structure.",
            cite: ["miura-isas-news-258"],
          },
          {
            kind: "p",
            text: "In November 1969 he published that shape as a structural form, the PCCP (pseudo-cylindrical concave polyhedral) shell, in a report of the University of Tokyo's Institute of Space and Aeronautical Science. His 1985 report extends the geometry to a flat sheet: a concave polyhedral surface built from repeated regions of four identical parallelograms.",
            cite: ["miura-isas-news-258", "miura-isas-report-618"],
          },
          {
            kind: "uncertain",
            text: "Japanese Wikipedia and many popular accounts date the flat Miura-ori to 1970 and say the British Origami Society gave it its English name. We have not found a primary source for either point.",
            cite: ["miura-jawiki"],
          },
        ],
      },
      {
        step: "design-decision",
        heading: "Every crease moves together",
        blocks: [
          { kind: "image", image: "miura-ori-tessellations", size: "wide" },
          {
            kind: "p",
            text: "Because the folds are interdependent, moving one moves all the others. The 1980 report notes that the map can be opened with one pull at a corner; a 2019 newspaper account describes pulling the diagonal corners to open the sheet at once, and pushing them back to close it.",
            cite: ["miura-bain-1980", "miura-newswitch-2019"],
          },
          {
            kind: "p",
            text: "The creases do not stack on top of one another, so the fold resists tearing better than an ordinary accordion fold. In principle the pattern also works with rigid panels joined by hinges, which is why it suits stiff materials such as solar arrays.",
            cite: ["miura-newswitch-2019", "miura-newswitch-2025"],
          },
          {
            kind: "interpretation",
            text: "The design turns a sequence of actions into a single action. Instead of asking the user to remember an order of folds, the geometry stores that order in the sheet itself.",
          },
        ],
      },
      {
        step: "original-application",
        heading: "Maps and membranes",
        blocks: [
          {
            kind: "p",
            text: "A Japanese utility model application for a folding map was filed on 7 September 1975 and published in 1977. Japanese Wikipedia identifies Miura as its deviser; Google Patents confirms the dates but not the name.",
            cite: ["miura-utility-model", "miura-jawiki"],
          },
          {
            kind: "p",
            text: "In 1980 Miura and his ISAS colleague Masamori Sakamaki presented the Miura-ori map at a Tokyo meeting of the International Cartographic Association. They had also built a mechanical folding machine for the difficult first folds, without revealing how it worked.",
            cite: ["miura-bain-1980"],
          },
        ],
      },
      {
        step: "turning-point",
        heading: "Tested in orbit",
        blocks: [
          {
            kind: "p",
            text: "The Space Flyer Unit (SFU) was launched on 18 March 1995 on the third H-II rocket from Tanegashima, and retrieved by the US Space Shuttle on mission STS-72 in January 1996. Among its ISAS experiments was a two-dimensional solar array experiment.",
            cite: ["miura-isas-sfu"],
          },
          {
            kind: "p",
            text: "ISAS's description of that 2D array says it deployed a triangular membrane folded by Miura-ori, so that a large structure could be formed by pulling the ends of the stowed surface. A second aim was an efficient deployable solar cell array.",
            cite: ["miura-isas-2dsa", "miura-newswitch-2025"],
          },
          { kind: "image", image: "miura-sfu-retrieval", size: "inline" },
          {
            kind: "facts",
            items: [
              { label: "Spacecraft", value: "Space Flyer Unit (SFU)", cite: ["miura-isas-sfu"] },
              { label: "Launch", value: "18 March 1995, H-II Test Flight No. 3", cite: ["miura-isas-sfu"] },
              { label: "Retrieval", value: "January 1996, STS-72", cite: ["miura-isas-sfu"] },
              { label: "Experiment", value: "2D array: Miura-folded triangular membrane", cite: ["miura-isas-2dsa"] },
            ],
          },
        ],
      },
      {
        step: "beyond-origins",
        heading: "From shell to drinks can",
        blocks: [
          {
            kind: "p",
            text: "Miura writes that in early spring 1995 he met people from a can maker whose engineers had found his 1969 PCCP shell paper and had quietly developed a can from it. When the can is opened its walls suddenly change shape into the buckled pattern and become stiff. It has 13 diamonds around its circumference and is printed while still a plain cylinder, so the graphics are not distorted.",
            cite: ["miura-isas-news-258"],
          },
          {
            kind: "p",
            text: "Japan's National Museum of Nature and Science records the diamond-cut can as made by Toyo Seikan from 2001: first applied to a steel can to add strength and save material, then to an aluminium can whose pattern appears on opening. Kirin launched its Hyoketsu chu-hi in that can in 2001, made the can lighter in 2004, 2009 and 2020, and registered its shape as a three-dimensional trademark in 2019.",
            cite: ["miura-kahaku-diamond-can", "miura-kirin-hyoketsu-story", "miura-ryutsuu-trademark"],
          },
          {
            kind: "uncertain",
            text: "Kirin and the museum record both call the can's pattern Miura-ori and link it to NASA research. Miura's own account is more specific: the can uses the cylindrical PCCP shell, a relative of the flat map fold, which he developed after his time at NASA and published through his Tokyo institute. The space test of the flat fold was an ISAS experiment, not a NASA one.",
            cite: ["miura-isas-news-258", "miura-kirin-hyoketsu-story", "miura-kahaku-diamond-can"],
          },
          { kind: "image", image: "miura-sfu-museum", size: "inline" },
        ],
      },
      {
        step: "world-today",
        heading: "Maps, satellites and metamaterials",
        blocks: [
          {
            kind: "p",
            text: "Miura-ori maps are still made in Tokyo. In 2019 Miura-ori Lab's Tokyo Marathon route map was distributed at about 100,000 copies a year, and automatic folding machines had raised its output to 300,000 maps a month. The National Diet Library also holds a Miura-ori Tokyo and Kanto rail map sold in 2016.",
            cite: ["miura-newswitch-2019", "miura-ndl-tokyo-map"],
          },
          {
            kind: "p",
            text: "Engineers continue to test the fold in space. HIROGARI, a small satellite built by Osaka Prefecture University and Muroran Institute of Technology, was designed to deploy a Miura-ori panel structure and measure its shape, and was handed to JAXA in October 2020.",
            cite: ["miura-mynavi-hirogari"],
          },
          {
            kind: "p",
            text: "Researchers outside Japan use the pattern as a model for folded materials. A 2013 study from the University of Cambridge showed that Miura-folded sheets and stacks have mechanics set by geometry alone, independent of scale, and expand sideways when stretched (a negative Poisson's ratio).",
            cite: ["miura-schenk-guest-2013"],
          },
        ],
      },
      {
        step: "lessons",
        heading: "What designers can learn",
        blocks: [
          { kind: "interpretation", text: "Look twice at failure. The pattern began as the way a cylinder collapses; Miura's contribution was to treat that shape as a structure." },
          { kind: "interpretation", text: "Put the instructions in the object. A fold that can only move one way removes the need to explain how to use it." },
          { kind: "interpretation", text: "Manufacturing decides adoption. The fold has been public for decades, but maps and cans needed folding machines and forming processes before it reached everyday use." },
        ],
      },
    ],
    limitations: [
      {
        text: "ISAS's 2D array page describes the experiment's aims, not its results. The main SFU solar paddles, a separate system, could not be confirmed as stowed before retrieval, and we have not found an official report of the 2D array's own outcome.",
        cite: ["miura-isas-2dsa", "miura-isas-sfu"],
      },
      {
        text: "The early map history is thin in our sources: we have not identified the first commercial Miura-ori map, its publisher or year, and the utility model's applicant is confirmed only by a secondary source.",
        cite: ["miura-utility-model", "miura-jawiki"],
      },
      {
        text: "Brand and museum texts use 'Miura-ori' loosely for the drinks can. We follow Miura's own distinction between the cylindrical PCCP shell and the flat fold.",
        cite: ["miura-isas-news-258"],
      },
    ],
    related: ["rice-cooker", "olfa-cutter", "butterfly-stool"],
    principles: ["material-and-making", "borrowed-behaviour"],
    sources: [
      "miura-isas-news-258",
      "miura-isas-report-618",
      "miura-isas-2dsa",
      "miura-isas-sfu",
      "miura-bain-1980",
      "miura-utility-model",
      "miura-jawiki",
      "miura-newswitch-2019",
      "miura-ndl-tokyo-map",
      "miura-newswitch-2025",
      "miura-kahaku-diamond-can",
      "miura-kirin-hyoketsu-story",
      "miura-ryutsuu-trademark",
      "miura-schenk-guest-2013",
      "miura-mynavi-hirogari",
    ],
    readingMinutes: 7,
    reviewed: "2026-11-17",
  },

  // tamagotchi
  {
    id: "tamagotchi",
    slug: "tamagotchi",
    title: "A pet that fits on a key ring",
    subject: "Bandai Tamagotchi",
    subjectJa: "たまごっち",
    palette: ["#bcb9b3", "#d2a72d", "#aa7217", "#716c4c"],
    alternativeNames: ["Tamagotchi", "たまごっち", "TAMAGOTCHI"],
    dek: "An egg-shaped case, three buttons and a small screen asked people to feed, clean and keep a creature alive. Bandai sold 10 million in eight months.",
    summary:
      "Tamagotchi went on sale in Japan on 23 November 1996. The idea came from Akihiro Yokoi (横井昭裕) of the toy planning company WiZ, and was developed at Bandai with Aki Maita (真板亜紀); the Ig Nobel committee later called them its father and mother. Its constraints were its design: a palm-sized egg, three buttons and a small monochrome LCD. An English version followed in May 1997, and by August 2025 Bandai had shipped more than 100 million.",
    category: "Product design",
    tags: ["toys", "digital pets", "interaction design", "consumer electronics"],
    originDate: "1996-11-23",
    originDateLabel: "On sale 23 November 1996",
    originLocation: "Tokyo, Japan",
    people: ["akihiro-yokoi", "aki-maita"],
    collaborators: [
      { name: "Takeichi Hongo (本郷武一)", role: "Named by Bandai's current team as developer of the first Tamagotchi; his exact role is not documented in our sources", cite: ["tama-dime-2025"] },
    ],
    organisations: [
      { name: "Bandai", role: "Developer, manufacturer and seller" },
      { name: "WiZ", role: "Toy planning company that proposed the concept" },
    ],
    heroImage: "tamagotchi-rotterdam-1997",
    globalReach: true,
    timeline: [
      { date: "1995", label: "Akihiro Yokoi of WiZ pitches a portable pet toy to Bandai", place: "Tokyo", phase: "origin", cite: ["tama-museumofplay"] },
      { date: "1996-11-23", label: "Tamagotchi goes on sale in Japan, six variants at ¥1,980", place: "Japan", phase: "origin", cite: ["tama-bandai-100m", "tama-official-history"] },
      { date: "1997-05", label: "English-language TAMAGOTCHI launches in the United States; FAO Schwarz in New York sells 10,000 in a day", place: "United States", phase: "spread", cite: ["tama-bandai-100m"] },
      { date: "1997", label: "10 million sold worldwide within eight months of launch", place: "International", phase: "spread", cite: ["tama-bandai-100m"] },
      { date: "1997", label: "Yokoi and Maita receive the Ig Nobel Prize in Economics", place: "Cambridge, Massachusetts", phase: "spread", cite: ["tama-ig-nobel"] },
      { date: "2004-03-20", label: "Relaunched with infrared communication", place: "Japan", phase: "development", cite: ["tama-bandai-100m"] },
      { date: "2025-05", label: "Inducted into the World Video Game Hall of Fame", place: "Rochester, New York", phase: "today", cite: ["tama-museumofplay", "tama-hof-2025-press"] },
      { date: "2025-08", label: "Cumulative shipments pass 100 million", place: "International", phase: "today", cite: ["tama-bandai-100m", "tama-official-history"] },
    ],
    sections: [
      {
        step: "problem",
        heading: "A pet you cannot keep",
        blocks: [
          {
            kind: "p",
            text: "Akihiro Yokoi has described keeping saltwater fish that died within about two weeks however hard he tried. What he took from it was that care feels rewarding precisely because it is hard, and he calls this the original experience behind Tamagotchi.",
            cite: ["tama-cinra-yokoi"],
          },
          {
            kind: "interpretation",
            text: "The design question was not how to make a pet easier to keep, but how to keep the effort and attachment of caring for an animal while removing the cost, the space and the mess.",
          },
        ],
      },
      {
        step: "idea",
        heading: "A creature that needs you, carried everywhere",
        blocks: [
          {
            kind: "p",
            text: "Yokoi, a former Bandai employee who had founded the toy planning company WiZ, pitched the idea of a portable pet toy to Bandai in 1995. At Bandai, Aki Maita developed the care-game design and carried out market research on the streets of Shibuya before the design was finalised.",
            cite: ["tama-museumofplay", "tama-mplus", "tama-cinra-yokoi"],
          },
          {
            kind: "p",
            text: "Yokoi identifies feeding, cleaning up droppings and the possibility of death as the realism behind the toy, and says he refused to drop the rule that a neglected pet dies despite opposition within the company. Bandai itself lists the concept of death, which made the pet a \"living thing\", among the reasons for its success.",
            cite: ["tama-cinra-yokoi", "tama-bandai-100m"],
          },
          {
            kind: "uncertain",
            text: "Accounts differ on who should be credited with the concept. Museums and the Ig Nobel committee name Yokoi and Maita together; Bandai's current team names Takeichi Hongo as developer of the first model; Japanese Wikipedia lists further planners, a character designer and a programmer. A secondary article says Yokoi combined a PC aquarium game with LCD handheld games, but we have not seen the interview it quotes.",
            cite: ["tama-vam", "tama-ig-nobel", "tama-dime-2025", "tama-jawiki", "tama-persol-2015"],
          },
        ],
      },
      {
        step: "design-decision",
        heading: "An egg, three buttons and a small screen",
        blocks: [
          { kind: "image", image: "tamagotchi-rotterdam-1997", size: "inline" },
          {
            kind: "p",
            text: "The finished toy is a palm-sized egg on a key chain, with three input buttons and a small non-backlit monochrome LCD. Every action, from feeding to cleaning, is done with those three buttons, and the first generation could not be paused.",
            cite: ["tama-museumofplay", "tama-mplus", "tama-vam", "tama-dime-2025"],
          },
          {
            kind: "p",
            text: "The name joins the egg (tamago) shape to the English word \"watch\". The Strong National Museum of Play says the egg shape came from manufacturing costs and was meant to resemble a pocket watch.",
            cite: ["tama-bandai-100m", "tama-museumofplay"],
          },
          {
            kind: "uncertain",
            text: "Japanese Wikipedia, citing Yokoi's 1997 book, gives different reasons: a wristwatch with a strap was planned for portability but dropped as too bulky, and the egg was chosen because egg-shaped toys were thought to sell. We have not seen the book.",
            cite: ["tama-jawiki"],
          },
          {
            kind: "interpretation",
            text: "Limits did much of the design work. With so few buttons and pixels, the character had to be simple and slightly unfamiliar, which Bandai now cites as a strength: its creatures did not look like any particular animal.",
          },
        ],
      },
      {
        step: "original-application",
        heading: "Launch in Japan",
        blocks: [
          {
            kind: "p",
            text: "Tamagotchi went on sale on 23 November 1996 in six variants, priced at ¥1,980 before tax. Bandai describes it as a fad mainly among high school girls, and says it received more than 10,000 enquiries a day from people who could not find one.",
            cite: ["tama-bandai-100m", "tama-official-history"],
          },
          {
            kind: "facts",
            items: [
              { label: "On sale", value: "23 November 1996", cite: ["tama-bandai-100m", "tama-official-history"] },
              { label: "Price", value: "¥1,980 (before tax)", cite: ["tama-bandai-100m"] },
              { label: "Controls", value: "Three buttons", cite: ["tama-museumofplay", "tama-mplus"] },
              { label: "Screen", value: "Small monochrome LCD, no backlight", cite: ["tama-museumofplay", "tama-dime-2025"] },
            ],
          },
        ],
      },
      {
        step: "turning-point",
        heading: "Ten million in eight months",
        blocks: [
          {
            kind: "p",
            text: "An English-language TAMAGOTCHI went on sale in the United States in May 1997 and soon reached Canada, Europe and other parts of Asia. Bandai reports that FAO Schwarz's New York flagship sold 10,000 in the first 24 hours, and that worldwide sales reached 10 million within eight months of the Japanese launch.",
            cite: ["tama-bandai-100m"],
          },
          {
            kind: "p",
            text: "In 1997 the Ig Nobel Prize in Economics went to Yokoi and Maita, \"the father and mother of Tamagotchi\", for diverting millions of person-hours of work into the care of virtual pets.",
            cite: ["tama-ig-nobel"],
          },
        ],
      },
      {
        step: "beyond-origins",
        heading: "Fad, pause and return",
        blocks: [
          {
            kind: "p",
            text: "Bandai says the first boom sold 40 million units in about two and a half years, after which it stopped selling Tamagotchi for a time. It returned in 2004 with infrared communication, letting owners connect their pets, and sold about 5 million that year. Later models added colour screens (2008), touch screens (2021) and Wi-Fi (2023).",
            cite: ["tama-bandai-100m", "tama-dime-2025"],
          },
          {
            kind: "p",
            text: "Museums outside Japan have collected it. The V&A holds a 1997 Tamagotchi given by Bandai UK, crediting Yokoi and Maita as designers, and M+ in Hong Kong holds a 1997 collector's edition made to mark the handover.",
            cite: ["tama-vam", "tama-mplus"],
          },
          {
            kind: "p",
            text: "We could find no Tamagotchi in the Museum of Modern Art's published collection data, although MoMA does hold other Bandai-related design objects such as Pac-Man. MoMA's live website could not be checked.",
            cite: ["tama-moma-dataset"],
          },
          { kind: "image", image: "tamagotchi-rupriikki", size: "wide" },
        ],
      },
      {
        step: "world-today",
        heading: "One hundred million eggs",
        blocks: [
          {
            kind: "p",
            text: "Bandai reports that cumulative shipments passed 100 million in August 2025, across 38 main models sold in more than 50 countries and regions. More than half went outside Japan: 33% to the Americas, 16% to Europe and 2% to the rest of Asia.",
            cite: ["tama-bandai-100m", "tama-official-history"],
          },
          {
            kind: "p",
            text: "In 2025 the Strong National Museum of Play inducted Tamagotchi into its World Video Game Hall of Fame, crediting it with spurring the popularity of pet simulation games such as Neopets and Nintendogs.",
            cite: ["tama-museumofplay", "tama-hof-2025-press"],
          },
        ],
      },
      {
        step: "lessons",
        heading: "What designers can learn",
        blocks: [
          { kind: "interpretation", text: "Responsibility can be the product. The toy asks for attention, and the consequence of neglect gives that attention meaning." },
          { kind: "interpretation", text: "Constraints can define character. Three buttons and a small monochrome screen forced a vocabulary of actions small enough to learn in seconds." },
          { kind: "interpretation", text: "Portability changes the relationship. A pet that travels on a key ring is part of the day, not something left at home." },
        ],
      },
    ],
    limitations: [
      {
        text: "Sales figures are Bandai's own shipment counts. Other sources give different early figures (for example, 20 million in Japan in the first year), and we use only Bandai's.",
        cite: ["tama-bandai-100m", "tama-museumofplay"],
      },
      {
        text: "The division of credit between Yokoi, Maita and other Bandai and WiZ staff, and the reasons for the egg shape, rest partly on a 1997 book we have not read.",
        cite: ["tama-jawiki"],
      },
      {
        text: "Bandai calls Tamagotchi an early digital pet, but software pets on computers existed before it. We describe its influence on pet simulation games, not a claim that it was the first.",
        cite: ["tama-bandai-100m", "tama-museumofplay"],
      },
    ],
    related: ["game-and-watch", "walkman", "emoji"],
    principles: ["borrowed-behaviour", "material-and-making"],
    sources: [
      "tama-bandai-100m",
      "tama-official-history",
      "tama-vam",
      "tama-museumofplay",
      "tama-hof-2025-press",
      "tama-mplus",
      "tama-ig-nobel",
      "tama-cinra-yokoi",
      "tama-jawiki",
      "tama-persol-2015",
      "tama-dime-2025",
      "tama-moma-dataset",
    ],
    readingMinutes: 6,
    reviewed: "2026-11-17",
  },
];
