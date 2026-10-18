import type { Person } from "@/lib/types";

export const people: Person[] = [
  {
    id: "seiichi-miyake",
    slug: "seiichi-miyake",
    name: "Seiichi Miyake",
    nameJa: "三宅精一",
    romanised: ["Miyake Seiichi"],
    born: { date: "1926-02-05", place: "Kurashiki, Okayama Prefecture" },
    died: { date: "1982-07-10", place: "Okayama" },
    disciplines: ["Invention", "Accessibility"],
    role: "Inventor of tactile paving",
    intro:
      "An inventor from Okayama who designed the first tactile paving blocks in 1965 — an innovation now built into streets and stations in many countries.",
    biography: [
      { text: "Seiichi Miyake was born in Kurashiki, in Okayama Prefecture, in 1926.", cite: ["wikipedia-miyake"] },
      {
        text: "In 1965 he designed and paid for the first tactile blocks, cast in cement, with raised patterns that could be felt underfoot. They were first laid on 18 March 1967 near the Okayama Prefectural School for the Blind.",
        cite: ["vam-tactile-slab", "wikipedia-miyake", "ossk-tenji-block"],
      },
      { text: "In 1974 he founded a company to produce the blocks; the V&A's contemporary example was made by that company.", cite: ["vam-tactile-slab"] },
      { text: "He died in Okayama in 1982, before the international standardisation of the system he began.", cite: ["wikipedia-miyake", "iso-23599"] },
    ],
    keyWorks: [
      { title: "Tactile paving blocks (tenji burokku)", date: "1965", note: "Guiding and warning patterns; first laid 1967.", cite: ["vam-tactile-slab"] },
    ],
    organisations: [{ name: "Company founded to manufacture tactile blocks", role: "Founder", date: "1974", cite: ["vam-tactile-slab"] }],
    context:
      "Miyake was not a professional designer, and his story is a reminder that some of the most consequential design work comes from people solving a problem in front of them.",
    legacy: {
      text: "18 March is observed in Japan as Tactile Paving Day, and Google marked the anniversary with a Doodle in 2019. The V&A collects a tactile tile as an object of design history.",
      cite: ["ossk-tenji-block", "wikipedia-miyake", "vam-tactile-slab"],
    },
    stories: ["tactile-paving"],
    related: ["masahiro-hara"],
    sources: ["wikipedia-miyake", "vam-tactile-slab", "ossk-tenji-block"],
  },
  {
    id: "masahiro-hara",
    slug: "masahiro-hara",
    name: "Masahiro Hara",
    nameJa: "原昌宏",
    romanised: ["Hara Masahiro"],
    born: { date: "1957" },
    disciplines: ["Engineering", "Information design"],
    role: "Engineer who led development of the QR Code",
    intro:
      "A DENSO WAVE engineer who led the two-person team behind the QR Code in 1994 — a factory tool that became everyday infrastructure.",
    biography: [
      { text: "Masahiro Hara was born in 1957.", cite: ["jahfa-hara"] },
      {
        text: "As an engineer at DENSO WAVE, then a division of DENSO CORPORATION, he led development of the QR Code, released in 1994 after about a year and a half of work by a team of two.",
        cite: ["denso-qr-history"],
      },
      {
        text: "He has described the project as a response to requests from manufacturing sites, which needed codes that held more information, including kanji and kana, and could be read faster.",
        cite: ["denso-qr-story"],
      },
      {
        text: "In 2014 he and colleagues from DENSO WAVE and Toyota Central R&D Labs received the European Inventor Award Popular Prize.",
        cite: ["denso-qr-story", "denso-epo-2014"],
      },
    ],
    keyWorks: [
      { title: "QR Code", date: "1994", note: "Developed at DENSO WAVE; standardised by AIM (1997), JIS (1999) and ISO (2000).", cite: ["denso-qr-history"] },
    ],
    philosophy: {
      text: "Hara describes the QR Code as having \"originated from requests from our manufacturing sites\" — a design shaped by the people who would use it daily.",
      cite: ["denso-qr-story"],
    },
    organisations: [{ name: "DENSO WAVE", role: "Engineer; development lead for QR Code", cite: ["denso-qr-history"] }],
    legacy: {
      text: "Inducted into the Japan Automotive Hall of Fame, which describes the QR Code as a global standard originating in Japan.",
      cite: ["jahfa-hara"],
    },
    stories: ["qr-code"],
    related: ["seiichi-miyake"],
    sources: ["jahfa-hara", "denso-qr-history", "denso-qr-story", "denso-epo-2014"],
  },
  {
    id: "sori-yanagi",
    slug: "sori-yanagi",
    name: "Sori Yanagi",
    nameJa: "柳宗理",
    romanised: ["Yanagi Sōri"],
    born: { date: "1915", place: "Tokyo" },
    died: { date: "2011" },
    disciplines: ["Industrial design", "Furniture", "Public design"],
    role: "Industrial designer",
    intro:
      "An industrial designer who worked between craft and mass production, best known for the 1954 Butterfly Stool, and who later directed the folk crafts museum his father founded.",
    biography: [
      { text: "Sori Yanagi (1915–2011) was the son of Soetsu Yanagi, a leading figure of the Mingei folk craft movement.", cite: ["vam-butterfly-stool"] },
      {
        text: "In 1954 he designed the Butterfly Stool, developed with the Sendai Research Institute's plywood-moulding equipment and produced by Tendo Mokko from 1956.",
        cite: ["vam-butterfly-stool"],
      },
      { text: "He was a member of the design team for the 1964 Tokyo Olympic Games, led by Masaru Katsumi.", cite: ["japanhouse-1964"] },
      { text: "From 1977 he served for nearly thirty years as director of the Japan Folk Crafts Museum in Tokyo.", cite: ["pen-fukasawa-mingei"] },
    ],
    keyWorks: [
      { title: "Butterfly Stool", date: "1954", note: "Moulded plywood; manufactured by Tendo Mokko.", cite: ["vam-butterfly-stool"] },
      { title: "Tokyo 1964 Olympic design team", date: "1964", cite: ["japanhouse-1964"] },
      { title: "Subway bench, Yokohama", date: "1973", note: "Attribution reported by photographer; needs review.", cite: ["commons-yanagi-bench"] },
    ],
    organisations: [
      { name: "Tendo Mokko", role: "Manufacturer of the Butterfly Stool", date: "from 1956", cite: ["vam-butterfly-stool"] },
      { name: "Japan Folk Crafts Museum", role: "Director", date: "from 1977", cite: ["pen-fukasawa-mingei"] },
    ],
    context:
      "Yanagi's career runs alongside Japan's postwar industrialisation. The V&A reads his work as connected both to Mingei and to international modernist furniture.",
    legacy: {
      text: "The Butterfly Stool has been in production for decades and is held by major museums including the V&A.",
      cite: ["vam-butterfly-stool"],
    },
    portrait: "portrait-yanagi",
    stories: ["butterfly-stool", "tokyo-1964-design"],
    related: ["naoto-fukasawa", "yusaku-kamekura"],
    sources: ["vam-butterfly-stool", "japanhouse-1964", "pen-fukasawa-mingei", "commons-yanagi-bench"],
  },
  {
    id: "yusaku-kamekura",
    slug: "yusaku-kamekura",
    name: "Yusaku Kamekura",
    nameJa: "亀倉雄策",
    romanised: ["Kamekura Yūsaku"],
    born: { date: "1915-04-06", place: "Niigata Prefecture" },
    died: { date: "1997-05-11" },
    disciplines: ["Graphic design", "Identity design", "Posters"],
    role: "Graphic designer",
    intro:
      "A graphic designer who shaped how postwar Japan presented itself, from the Tokyo 1964 emblem and posters to the founding of Japan's national graphic design association.",
    biography: [
      { text: "Yusaku Kamekura was born in Niigata Prefecture in 1915.", cite: ["jagda-kamekura"] },
      { text: "In 1957 he designed the G Mark for Japan's Good Design product selection system, still used by the Good Design Award.", cite: ["gmark-overview"] },
      { text: "In 1960 he co-founded Nippon Design Center.", cite: ["jagda-kamekura"] },
      {
        text: "He was design director for the 1964 Tokyo Olympics, designing the emblem and a celebrated poster series between 1961 and 1964.",
        cite: ["agi-tokyo-1964", "jagda-kamekura"],
      },
      {
        text: "In 1978 he helped establish the Japan Graphic Designers Association (JAGDA) and served as its first president until 1994. He died in 1997; JAGDA's annual Kamekura Yusaku Award has honoured his legacy since 1999.",
        cite: ["jagda-kamekura"],
      },
    ],
    keyWorks: [
      { title: "G Mark (Good Design mark)", date: "1957", cite: ["gmark-overview"] },
      { title: "Tokyo 1964 emblem and posters", date: "1961–1964", cite: ["jagda-kamekura", "agi-tokyo-1964"] },
    ],
    organisations: [
      { name: "Nippon Design Center", role: "Co-founder", date: "1960", cite: ["jagda-kamekura"] },
      { name: "JAGDA", role: "First president", date: "1978–1994", cite: ["jagda-kamekura"] },
      { name: "Tokyo 1964 Organising Committee", role: "Design director", date: "1960s", cite: ["agi-tokyo-1964"] },
    ],
    legacy: {
      text: "The Kamekura Yusaku Award, funded by his family and run by JAGDA, recognises graphic design that expresses universality and innovation.",
      cite: ["jagda-kamekura"],
    },
    portrait: "portrait-kamekura",
    stories: ["tokyo-1964-design"],
    related: ["sori-yanagi"],
    sources: ["jagda-kamekura", "agi-tokyo-1964", "gmark-overview"],
  },
  {
    id: "naoto-fukasawa",
    slug: "naoto-fukasawa",
    name: "Naoto Fukasawa",
    nameJa: "深澤直人",
    romanised: ["Fukasawa Naoto"],
    born: { date: "1956", place: "Kōfu, Yamanashi Prefecture" },
    disciplines: ["Product design", "Interaction design"],
    role: "Product designer",
    intro:
      "A product designer whose work starts from the things people already do — most famously a CD player that switches on like a kitchen fan.",
    biography: [
      { text: "Naoto Fukasawa was born in 1956 in Yamanashi Prefecture and graduated in product design from Tama Art University in 1980.", cite: ["wikipedia-fukasawa"] },
      {
        text: "After working at Seiko Epson, he joined ID Two, a predecessor of IDEO, in San Francisco, and in 1996 set up IDEO's Tokyo office.",
        cite: ["wikipedia-fukasawa"],
      },
      { text: "In 1999 he created the wall-mounted CD player for the \"Without Thought\" workshop; MUJI produced it.", cite: ["vam-cd-player"] },
      {
        text: "In 2003 he founded Naoto Fukasawa Design and the household brand ±0, and designed the first INFOBAR phone for au. He co-curated Super Normal with Jasper Morrison in 2006.",
        cite: ["wikipedia-fukasawa", "mynavi-infobar"],
      },
      { text: "In July 2012 he became director of the Japan Folk Crafts Museum — a post Sori Yanagi had held from 1977.", cite: ["pen-fukasawa-mingei"] },
    ],
    keyWorks: [
      { title: "Wall-mounted CD player (MUJI)", date: "1999", cite: ["vam-cd-player", "moma-cd-player"] },
      { title: "INFOBAR (au / KDDI)", date: "2003", cite: ["mynavi-infobar", "moma-infobar"] },
    ],
    philosophy: {
      text: "\"Without Thought\": the V&A records Fukasawa's view that a product should trigger an instinctive response and should not need an instruction manual.",
      cite: ["vam-cd-player"],
    },
    organisations: [
      { name: "IDEO Tokyo", role: "Founded the office", date: "1996", cite: ["wikipedia-fukasawa"] },
      { name: "MUJI", role: "Advisory board member", date: "from 2002", cite: ["wikipedia-fukasawa"] },
      { name: "Naoto Fukasawa Design", role: "Founder", date: "2003", cite: ["wikipedia-fukasawa"] },
      { name: "Japan Folk Crafts Museum", role: "Director", date: "from 2012", cite: ["pen-fukasawa-mingei"] },
    ],
    legacy: {
      text: "His work is held by MoMA and the V&A, among other museums.",
      cite: ["moma-cd-player", "vam-cd-player", "moma-infobar"],
    },
    portrait: "portrait-fukasawa",
    stories: ["naoto-fukasawa-cd-player"],
    related: ["sori-yanagi"],
    sources: ["wikipedia-fukasawa", "vam-cd-player", "moma-cd-player", "moma-infobar", "mynavi-infobar", "pen-fukasawa-mingei"],
  },
];
