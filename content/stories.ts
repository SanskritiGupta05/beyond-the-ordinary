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
];
