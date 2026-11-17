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
      "An inventor from Okayama who designed the first tactile paving blocks in 1965, an innovation now built into streets and stations in many countries.",
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
      "A DENSO WAVE engineer who led the two-person team behind the QR Code in 1994: a factory tool that became everyday infrastructure.",
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
      text: "Hara describes the QR Code as having \"originated from requests from our manufacturing sites\", a design shaped by the people who would use it daily.",
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
      "A product designer whose work starts from the things people already do, most famously a CD player that switches on like a kitchen fan.",
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
      { text: "In July 2012 he became director of the Japan Folk Crafts Museum, a post Sori Yanagi had held from 1977.", cite: ["pen-fukasawa-mingei"] },
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
  {
    id: "yukio-ota",
    slug: "yukio-ota",
    name: "Yukio Ota",
    nameJa: "太田幸夫",
    romanised: ["Ota Yukio", "Ōta Yukio"],
    born: { date: "1939" },
    died: { date: "2026-08-18" },
    disciplines: ["Graphic design", "Pictograms", "Information design"],
    role: "Designer of the running-man exit sign",
    intro:
      "A graphic designer who spent decades on pictorial communication, and whose running figure now marks emergency exits in many countries.",
    biography: [
      { text: "Yukio Ota was born in 1939 and graduated from Tama Art University in 1962.", cite: ["wikipedia-ota"] },
      { text: "From 1964 he developed LoCoS, a pictorial language intended to be understood without words.", cite: ["wikipedia-ota"] },
      {
        text: "In the late 1970s his running figure won a Japanese fire-safety contest for a national exit sign, after testing for legibility in smoke. Japan put it forward to ISO in 1980.",
        cite: ["slate-exit-sign"],
      },
      { text: "He later taught at Tama Art University as a professor.", cite: ["wikipedia-ota"] },
      { text: "Japanese press reports cited by Wikipedia state that he died in August 2026, aged 86.", cite: ["wikipedia-ota"] },
    ],
    keyWorks: [
      { title: "LoCoS pictorial language", date: "from 1964", cite: ["wikipedia-ota"] },
      { title: "Emergency exit sign (running man)", date: "late 1970s", note: "Registered internationally as ISO 7010 E001.", cite: ["slate-exit-sign", "iso-7010"] },
    ],
    philosophy: {
      text: "Ota told Slate that the independent arrival of a similar Soviet design convinced him the running figure was \"a fundamentally human exit sign\".",
      cite: ["slate-exit-sign"],
    },
    organisations: [{ name: "Tama Art University", role: "Graduate; later professor", cite: ["wikipedia-ota"] }],
    legacy: {
      text: "His running figure is registered as ISO 7010 E001, the international emergency exit sign.",
      cite: ["iso-7010", "slate-exit-sign"],
    },
    stories: ["exit-sign"],
    related: ["yusaku-kamekura", "shigetaka-kurita"],
    sources: ["wikipedia-ota", "slate-exit-sign", "iso-7010"],
  },
  {
    id: "shigetaka-kurita",
    slug: "shigetaka-kurita",
    name: "Shigetaka Kurita",
    nameJa: "栗田穣崇",
    romanised: ["Kurita Shigetaka"],
    born: { date: "1972", place: "Gifu Prefecture" },
    disciplines: ["Interaction design", "Digital product"],
    role: "Designer of DOCOMO's original emoji set",
    intro:
      "A member of NTT DOCOMO's i-mode team who drew a set of 176 tiny pictograms in 1998–99, one of the sets that led to the emoji used worldwide.",
    biography: [
      { text: "Shigetaka Kurita was born in 1972 in Gifu Prefecture.", cite: ["wikipedia-kurita"] },
      {
        text: "Working on NTT DOCOMO's i-mode mobile internet service, he designed 176 pictograms, each on a 12×12 pixel grid.",
        cite: ["wikipedia-kurita"],
      },
      { text: "In 2016 MoMA added the set to its collection and exhibited it as \"Inbox: The Original Emoji\".", cite: ["wikipedia-kurita"] },
    ],
    keyWorks: [{ title: "Emoji for NTT DOCOMO i-mode", date: "1998–1999", note: "176 pictograms, 12×12 pixels; MoMA collection.", cite: ["wikipedia-kurita"] }],
    organisations: [{ name: "NTT DOCOMO", role: "i-mode development team", cite: ["wikipedia-kurita"] }],
    legacy: {
      text: "Many general-purpose emoji can be traced to his set, though it was not the first Japanese pictogram set on a phone.",
      cite: ["wikipedia-kurita", "emojipedia-first-set"],
    },
    stories: ["emoji"],
    related: ["yukio-ota", "masahiro-hara"],
    sources: ["wikipedia-kurita", "emojipedia-first-set"],
  },
  {
    id: "momofuku-ando",
    slug: "momofuku-ando",
    name: "Momofuku Ando",
    nameJa: "安藤百福",
    romanised: ["Andō Momofuku"],
    born: { date: "1910" },
    died: { date: "2007-01-05" },
    disciplines: ["Food innovation", "Entrepreneurship", "Packaging"],
    role: "Inventor of instant ramen and Cup Noodles",
    intro:
      "An entrepreneur who, after losing almost everything at 47, developed instant ramen in a backyard shed, and later turned its package into the bowl.",
    biography: [
      { text: "Momofuku Ando was born in 1910.", cite: ["nissin-founder"] },
      {
        text: "In 1957 a credit union he directed failed and he lost nearly all his property. He resolved to make ramen that could be prepared at home with only hot water.",
        cite: ["nissin-founder"],
      },
      { text: "Working alone for about a year, he developed Chicken Ramen, launched on 25 August 1958.", cite: ["nissin-founder"] },
      { text: "After a 1966 trip to the United States he developed Cup Noodles, launched on 18 September 1971.", cite: ["nissin-founder"] },
      { text: "He died on 5 January 2007.", cite: ["nissin-founder"] },
    ],
    keyWorks: [
      { title: "Chicken Ramen", date: "1958", note: "Flash-fried instant noodles.", cite: ["nissin-founder"] },
      { title: "Cup Noodles", date: "1971", note: "Container that is package, cooking vessel and bowl.", cite: ["nissin-founder"] },
    ],
    philosophy: {
      text: "Nissin records his five goals for instant ramen: it had to taste good, keep, be quick to prepare, be cheap and be safe.",
      cite: ["nissin-founder"],
    },
    organisations: [{ name: "Nissin Foods", role: "Founder", cite: ["nissin-founder"] }],
    context:
      "Ando was not trained as a designer. His work is included here because the product's form (the dried block, the cup, the way the two fit) is a sequence of design decisions.",
    stories: ["cup-noodles"],
    related: ["seiichi-miyake"],
    sources: ["nissin-founder"],
  },

  // yoshio-okada
  {
    id: "yoshio-okada",
    slug: "yoshio-okada",
    name: "Yoshio Okada",
    nameJa: "岡田良男",
    romanised: ["Okada Yoshio"],
    born: { date: "1931-04-14", place: "Osaka" },
    died: { date: "1990" },
    disciplines: ["Invention", "Product design", "Tools"],
    role: "Inventor of the snap-off blade cutter; founder of OLFA",
    intro:
      "An Osaka printing-works employee who in 1956 made a prototype knife with a pre-scored blade, so that a dull tip could be snapped off, and in 1967 founded the company now called OLFA.",
    biography: [
      {
        text: "Yoshio Okada was born on 14 April 1931 in Osaka, into a family that ran a paper-cutting business.",
        cite: ["olfa-birth-ja", "olfa-70-years"],
      },
      {
        text: "According to OLFA, he worked in electrical work, machine repair and other jobs to support his family, and devised the snap-off blade while employed at a printing works, after his younger brother Saburo asked him for a better knife for cutting paper. He completed a prototype in 1956.",
        cite: ["olfa-birth-ja", "olfa-history-ja"],
      },
      {
        text: "When large manufacturers declined to make it, he ordered 3,000 knives from a small press shop and reworked the uneven results by hand. OLFA dates the commercial launch to April 1959, and says a printing company supported him as demand grew, the patent was obtained while he worked there, and he later left on condition that the patent be shared.",
        cite: ["olfa-birth-ja", "olfa-history-ja", "olfa-prtimes-day"],
      },
      {
        text: "On 8 June 1967 he founded Okada Kogyo with three of his brothers and his wife Teruko. The company introduced the OLFA brand, from oru ha (折る刃, \"breaking blade\"), and the yellow body that Okada chose so that the knife would stand out in a toolbox. It was renamed OLFA Corporation in 1984.",
        cite: ["olfa-birth-ja", "olfa-history-ja", "okada-olfa-about-en"],
      },
      {
        text: "OLFA also credits him with the rotary cutter of 1979, developed from the company's earlier round-blade cutter for cloth.",
        cite: ["olfa-birth-ja", "olfa-history-ja", "okada-olfa-about-en"],
      },
      {
        text: "He received the Medal with Yellow Ribbon in 1986. OLFA lists him as its first president and gives 1990 as the year of his death.",
        cite: ["olfa-birth-ja", "olfa-birth-en", "okada-olfa-productguide-2024"],
      },
    ],
    keyWorks: [
      {
        title: "Snap-off blade cutter knife (折る刃式カッターナイフ)",
        date: "1956",
        note: "Prototype about 13 × 1 cm, score lines about 5 mm apart, 59-degree edge angle; on sale from 1959.",
        cite: ["olfa-birth-ja", "olfa-history-ja"],
      },
      {
        title: "OLFA A-type and L-type cutters",
        date: "1967",
        note: "The first OLFA cutters in the yellow body colour.",
        cite: ["olfa-birth-ja"],
      },
      {
        title: "Rotary cutter",
        date: "1979",
        note: "A round blade rolled along the cutting line; on sale from February 1980.",
        cite: ["olfa-birth-ja", "olfa-history-ja", "okada-olfa-about-en"],
      },
    ],
    philosophy: {
      text: "OLFA records that Okada later said making blades and hand tools was his calling (「刃物・手道具づくりが自らの天職だ」). The remark is known only through the company's retelling.",
      cite: ["olfa-birth-ja"],
    },
    organisations: [
      {
        name: "Okada Kogyo Co., Ltd. (OLFA Corporation from 1984)",
        role: "Founder and first president",
        date: "from 1967",
        cite: ["olfa-birth-ja", "olfa-history-ja", "okada-olfa-productguide-2024"],
      },
    ],
    context:
      "Almost everything known about Okada's life comes from OLFA's own histories. The printing company that supported the early knife is not named by OLFA; Japanese Wikipedia identifies it as Nippon Transfer Paper (now NT), which sold a snap-off knife from 1959, but we have not seen the patent record that would confirm this.",
    legacy: {
      text: "Because his patent covered only Japan, makers abroad built knives to the same blade proportions, and OLFA describes his score-line angle and blade widths as a de facto world standard. In 2026 the Japan Anniversary Association recognised 16 April, the date OLFA gives for the patent, as Snap-off Blade Cutter Knife Day.",
      cite: ["olfa-birth-en", "olfa-woodworkers-journal", "olfa-prtimes-day"],
    },
    stories: ["olfa-cutter"],
    related: ["tokuji-hayakawa", "momofuku-ando"],
    sources: [
      "olfa-birth-ja",
      "olfa-birth-en",
      "olfa-history-ja",
      "olfa-prtimes-day",
      "olfa-70-years",
      "olfa-woodworkers-journal",
      "olfa-nt-history",
      "olfa-wikipedia-ja-cutter",
      "okada-olfa-productguide-2024",
      "okada-olfa-about-en",
    ],
  },

  // tokuji-hayakawa
  {
    id: "tokuji-hayakawa",
    slug: "tokuji-hayakawa",
    name: "Tokuji Hayakawa",
    nameJa: "早川徳次",
    romanised: ["Hayakawa Tokuji"],
    born: { date: "1893-11-03", place: "Tokyo" },
    died: { date: "1980-06-24", place: "Osaka" },
    disciplines: ["Metalworking", "Product design", "Invention"],
    role: "Metalworker who redesigned the mechanical pencil; founder of Sharp",
    intro:
      "A Tokyo metalworker who in 1915 rebuilt a fragile mechanical pencil in brass and nickel. After the 1923 earthquake he started again in Osaka making radios, and the company he founded took the pencil's name, Sharp.",
    biography: [
      {
        text: "Tokuji Hayakawa was born in Tokyo on 3 November 1893. Placed with a foster family as an infant, he was apprenticed before the age of eight to a Tokyo shop that made decorative metalwork.",
        cite: ["hayakawa-sharp-founder-1893", "hayakawa-kotobank"],
      },
      {
        text: "On 15 September 1912 he opened his own metalworking shop in Honjo. His first product was the Tokubijo, a belt buckle that needed no holes, which earned him his first utility model registration.",
        cite: ["sharp-100th-ch1-en"],
      },
      {
        text: "In 1915, hired to make fittings for a celluloid mechanical pencil, he redesigned its mechanism as a single slotted brass tube with a lead-pushing spindle inside a nickel-plated metal barrel. With his older brother Masaharu he sold it as the Hayakawa Mechanical Pencil, later the Ever-Ready Sharp Pencil.",
        cite: ["sharp-100th-ch1-en", "sharp-nishimura-two-pencils"],
      },
      {
        text: "The Great Kanto Earthquake of 1 September 1923 destroyed his factory and killed his wife and two children. To settle debts, the pencil business and the use of its patents passed to Nihon Bungu Seizo in Osaka.",
        cite: ["sharp-100th-ch1-en", "sharp-nishimura-two-pencils"],
      },
      {
        text: "On 1 September 1924 he opened the Hayakawa Metal Works Research Institute in Osaka. In 1925, after taking apart an imported crystal radio, his staff assembled their own set in time for the start of broadcasting in Osaka, sold under the Sharp name.",
        cite: ["hayakawa-sharp-founder-1924-ja", "hayakawa-sharp-founder-radio-ja", "hayakawa-kotobank"],
      },
      {
        text: "The company completed a television prototype in 1951 and began mass production in 1953. It took the name Sharp Corporation on 1 January 1970, when Hayakawa stepped down as president to become chairman. He died in Osaka on 24 June 1980, aged 86.",
        cite: ["hayakawa-sharp-founder-tv-ja", "hayakawa-kotobank", "sharp-100th-ch5-ja", "hayakawa-sharp-founder-1980"],
      },
    ],
    keyWorks: [
      {
        title: "Tokubijo belt buckle (徳尾錠)",
        date: "1912",
        note: "A buckle that needed no holes in the belt; his first utility model registration.",
        cite: ["sharp-100th-ch1-en"],
      },
      {
        title: "Hayakawa Mechanical Pencil (早川式繰出鉛筆), sold as the Ever-Ready Sharp Pencil",
        date: "1915",
        note: "Twist mechanism in a single brass tube, nickel-plated metal barrel; finer-lead version 1916; US patent 1,578,515 (1926).",
        cite: ["sharp-100th-ch1-en", "sharp-us-patent-1578515"],
      },
      {
        title: "Sharp crystal radio",
        date: "1925",
        note: "Assembled by Hayakawa's workshop after studying an imported set; Sharp calls it the first crystal radio made in Japan.",
        cite: ["hayakawa-sharp-founder-radio-ja", "hayakawa-kotobank"],
      },
      {
        title: "Television receiver",
        date: "1951–1953",
        note: "A company project he directed: prototype 1951, technical agreement with RCA 1952, mass production from 1953. Sharp describes it as the first television made in Japan.",
        cite: ["hayakawa-sharp-founder-tv-ja", "hayakawa-kotobank"],
      },
    ],
    philosophy: {
      text: "His best-known maxim, recorded by Sharp and in Japanese reference works, is \"make products that others want to imitate\" (「他社がまねしてくれる商品をつくれ」). He argued that imitation creates competition, raises the level of technology and in the end helps society develop.",
      cite: ["hayakawa-sharp-founder-imitate-ja", "hayakawa-kotobank"],
    },
    organisations: [
      { name: "Hayakawa Brothers Company (早川兄弟商会)", role: "Co-founder with his brother Masaharu; maker of the pencil", date: "about 1915 to 1923", cite: ["sharp-100th-ch1-en"] },
      { name: "Nihon Bungu Seizo, Osaka", role: "Chief engineer after the pencil business passed to it", date: "1923 to 1924", cite: ["sharp-100th-ch1-en", "hayakawa-sharp-founder-1924-ja"] },
      {
        name: "Hayakawa Metal Works Research Institute, later Hayakawa Electric Industry, Sharp Corporation from 1970",
        role: "Founder; president until 1970, then chairman",
        date: "from 1924",
        cite: ["hayakawa-sharp-founder-1924-ja", "sharp-100th-ch5-ja", "hayakawa-kotobank"],
      },
    ],
    context:
      "Hayakawa did not invent the mechanical pencil, and popular accounts that credit him with the American Eversharp are wrong. Most detail about his life comes from Sharp's own histories. He should not be confused with Hayakawa Noritsugu (1881–1942), founder of the Tokyo Underground Railway, whose name is written with the same characters.",
    legacy: {
      text: "\"Sharp pencil\" (シャープペンシル) remains the everyday Japanese word for a mechanical pencil, and his company has used the pencil's name since its first radios. Original Hayakawa pencils are kept at the Sharp Museum in Tenri, Nara.",
      cite: ["sharp-100th-ch1-en", "sharp-100th-ch5-ja", "sharp-platinum-replica"],
    },
    portrait: "portrait-tokuji-hayakawa",
    stories: ["sharp-pencil"],
    related: ["yoshio-okada", "soichiro-honda"],
    sources: [
      "sharp-100th-ch1-en",
      "sharp-100th-ch5-ja",
      "sharp-nishimura-two-pencils",
      "sharp-us-patent-1578515",
      "sharp-platinum-replica",
      "hayakawa-sharp-founder-1893",
      "hayakawa-sharp-founder-1924-ja",
      "hayakawa-sharp-founder-radio-ja",
      "hayakawa-sharp-founder-tv-ja",
      "hayakawa-sharp-founder-imitate-ja",
      "hayakawa-sharp-founder-1980",
      "hayakawa-kotobank",
    ],
  },

  // soichiro-honda
  {
    id: "soichiro-honda",
    slug: "soichiro-honda",
    name: "Soichiro Honda",
    nameJa: "本田宗一郎",
    romanised: ["Honda Sōichirō", "Sōichirō Honda"],
    born: { date: "1906-11-17", place: "Kōmyō village, Iwata district, Shizuoka Prefecture (now part of Hamamatsu)" },
    died: { date: "1991-08-05", place: "Tokyo" },
    disciplines: ["Engineering", "Industrial design", "Manufacturing"],
    role: "Engineer and founder of Honda Motor Co.",
    intro:
      "A mechanic and engineer from rural Shizuoka who built Honda from a workshop fitting small engines to bicycles. He directed the development of the 1958 Super Cub, while his partner Takeo Fujisawa shaped how it was sold and produced at scale.",
    biography: [
      {
        text: "Soichiro Honda was born on 17 November 1906 in Kōmyō village, Shizuoka Prefecture, into a family of blacksmiths who later sold bicycles.",
        cite: ["honda-75-founding", "honda-kotobank", "honda-ewb"],
      },
      {
        text: "At 15 he became a live-in apprentice at Art Shokai, a car repair shop in Tokyo, and in 1928 he opened its Hamamatsu branch as his own business. In 1936 he set up Tokai Seiki to make piston rings, and after repeated failures he audited classes in metallurgy at Hamamatsu Technical High School.",
        cite: ["honda-75-founding", "honda-kotobank"],
      },
      {
        text: "After selling his company at the end of the war, he founded the Honda Technical Research Institute in Hamamatsu on 1 September 1946, fitting small surplus engines to bicycles. Its own A-Type engine of 1947 used die-cast parts, a costly choice Honda's history says he made with mass production in mind.",
        cite: ["honda-75-founding"],
      },
      {
        text: "He founded Honda Motor Co. on 24 September 1948 and launched the Dream D-Type, the company's first complete motorcycle, in 1949. That year Takeo Fujisawa joined as managing director; Honda kept charge of technology and design, and entrusted sales, finance and organisation to Fujisawa.",
        cite: ["honda-75-founding", "honda-fujisawa-ahof-2023"],
      },
      {
        text: "Honda's accounts say he directed development of the Super Cub C100, launched in 1958, and told the team it should be rideable with one hand by a soba delivery rider. Fujisawa had asked for a bike anyone could ride, forecast sales of 30,000 a month and led its marketing and the scale-up of production.",
        cite: ["cub-honda-factbook-1958", "cub-honda-stories-1-1", "cub-honda-stories-1-3", "cub-nippon-2025"],
      },
      {
        text: "In 1973 he and Fujisawa retired together, and Honda became supreme adviser to the company. He died on 5 August 1991, aged 84.",
        cite: ["honda-fujisawa-ahof-2023", "honda-kotobank", "honda-orei-no-kai-1991", "honda-ewb", "honda-britannica"],
      },
    ],
    keyWorks: [
      {
        title: "Honda A-Type auxiliary bicycle engine",
        date: "1947",
        note: "The first product to carry the Honda name; mostly die-cast parts.",
        cite: ["honda-75-founding"],
      },
      {
        title: "Dream D-Type motorcycle",
        date: "1949",
        note: "Honda's first motorcycle with its own frame, a stamped-steel channel type.",
        cite: ["honda-75-founding"],
      },
      {
        title: "Cub F-Type auxiliary engine",
        date: "1952",
        note: "White tank and red engine, mounted on an ordinary bicycle; the engine is JSME Mechanical Engineering Heritage No. 14.",
        cite: ["honda-75-cub-f", "cub-jsme-heritage-list"],
      },
      {
        title: "Super Cub C100",
        date: "1958",
        note: "Developed under his direction: centrifugal clutch, step-through frame, resin leg shield. The C100 is listed as receiving the 1960 Mainichi Industrial Design Award, credited to Honda Motor.",
        cite: ["cub-honda-factbook-1958", "cub-honda-75-ch3", "honda-kotobank", "honda-jawiki-mainichi-award"],
      },
    ],
    philosophy: {
      text: "In the Three Joys, published under his name in Honda Monthly in December 1951, he wrote that \"the joy of producing\" is \"a joy known only to the engineer\", and that the buyer's joy is \"the fairest determiner of the products value\". The magazine's editor later said he wrote the text down from what Honda said every day.",
      cite: ["honda-three-joys-1951"],
    },
    organisations: [
      { name: "Art Shokai, Tokyo", role: "Apprentice mechanic", date: "from 1922", cite: ["honda-75-founding", "honda-kotobank"] },
      { name: "Art Shokai, Hamamatsu branch", role: "Founder", date: "1928", cite: ["honda-75-founding", "honda-kotobank"] },
      { name: "Tokai Seiki Heavy Industries", role: "Founder and president; piston rings", date: "1936 to 1945", cite: ["honda-75-founding"] },
      { name: "Honda Technical Research Institute", role: "Founder", date: "1946", cite: ["honda-75-founding"] },
      {
        name: "Honda Motor Co., Ltd.",
        role: "Founder and president; supreme adviser from 1973",
        date: "from 1948",
        cite: ["honda-75-founding", "honda-kotobank", "honda-fujisawa-ahof-2023"],
      },
    ],
    context:
      "Honda's own histories present the company as a partnership: Soichiro Honda on technology and product, Takeo Fujisawa on sales, finance and organisation. For the Super Cub, the one-hand brief is attributed to Honda and the bike-for-anyone request and sales forecast to Fujisawa, all through company histories and staff recollections.",
    legacy: {
      text: "In 1989 he was inducted into the Automotive Hall of Fame in the United States, the first Japanese automotive executive so honoured.",
      cite: ["honda-fujisawa-ahof-2023", "honda-kotobank"],
    },
    portrait: "portrait-soichiro-honda",
    stories: ["super-cub"],
    related: ["tokuji-hayakawa", "hideo-shima"],
    sources: [
      "cub-honda-factbook-1958",
      "cub-honda-stories-1-1",
      "cub-honda-stories-1-3",
      "cub-honda-75-ch3",
      "cub-nippon-2025",
      "cub-jsme-heritage-list",
      "honda-75-founding",
      "honda-75-cub-f",
      "honda-fujisawa-ahof-2023",
      "honda-three-joys-1951",
      "honda-orei-no-kai-1991",
      "honda-kotobank",
      "honda-britannica",
      "honda-ewb",
      "honda-jawiki-mainichi-award",
    ],
  },

  // hideo-shima
  {
    id: "hideo-shima",
    slug: "hideo-shima",
    name: "Hideo Shima",
    nameJa: "島秀雄",
    romanised: ["Shima Hideo"],
    born: { date: "1901-05-20", place: "Osaka" },
    died: { date: "1998-03-18" },
    disciplines: ["Railway engineering", "Mechanical engineering", "Systems engineering"],
    role: "JNR chief engineer for the Tokaido Shinkansen",
    intro:
      "A mechanical engineer who began by designing steam locomotives, oversaw the engineering of the Tokaido Shinkansen as JNR's chief engineer, and later became the first head of Japan's national space development agency.",
    biography: [
      {
        text: "Hideo Shima was born in Osaka in 1901 and grew up in Tokyo. His father, Yasujirō Shima, was also a railway engineer.",
        cite: ["shima-kotobank", "shima-bunshun-2024"],
      },
      {
        text: "He graduated in mechanical engineering from Tokyo Imperial University in 1925, joined the Ministry of Railways and worked on steam locomotive design, including the C53 and D51 classes.",
        cite: ["shima-kotobank", "shima-bunshun-2024", "shink-nrm-page"],
      },
      {
        text: "After the war he headed JNR's rolling-stock bureau, then left the railway. Reference works disagree on the details: one says he resigned in 1951, taking responsibility for the Sakuragichō train fire, another that he left in 1949; both record that he went to Sumitomo Metal Industries.",
        cite: ["shima-kotobank"],
      },
      {
        text: "In 1955 JNR president Shinji Sogō brought him back as chief engineer. He led the engineering of the Tokaido Shinkansen, with overall charge of civil engineering, buildings, electrical systems, communications and operations, and the National Railway Museum in York credits his team with the 0 Series' cone-shaped nose.",
        cite: ["shink-nrm-page", "shink-nippon-history-ja", "shima-bunshun-2024"],
      },
      {
        text: "Construction costs ran over budget. Shima left JNR with Sogō in 1963, and neither was invited to the opening ceremony on 1 October 1964.",
        cite: ["shink-nippon-history-ja", "shima-kotobank"],
      },
      {
        text: "From 1969 to 1977 he was the first president of the National Space Development Agency of Japan (NASDA). He died in 1998, aged 96.",
        cite: ["shima-kotobank", "shima-bunshun-2024"],
      },
    ],
    keyWorks: [
      { title: "D51 steam locomotive (Ministry of Railways design)", date: "1930s", note: "One of several steam locomotive classes he worked on; designed by the ministry's engineering staff, not by one person.", cite: ["shima-kotobank", "shima-bunshun-2024"] },
      { title: "Tokaido Shinkansen", date: "1955–1963", note: "Chief engineer during planning and construction; the line opened on 1 October 1964.", cite: ["shink-nrm-page", "shink-nippon-history-ja"] },
    ],
    organisations: [
      { name: "Ministry of Railways / Japanese National Railways (JNR)", role: "Locomotive designer; head of the rolling-stock bureau", date: "1925 to c. 1950", cite: ["shima-kotobank"] },
      { name: "Sumitomo Metal Industries", role: "Adviser or employee (sources differ)", date: "early 1950s", cite: ["shima-kotobank"] },
      { name: "Japanese National Railways (JNR)", role: "Chief engineer (技師長)", date: "1955–1963", cite: ["shima-kotobank", "shink-nrm-page"] },
      { name: "National Space Development Agency of Japan (NASDA)", role: "First president", date: "1969–1977", cite: ["shima-kotobank", "shima-bunshun-2024"] },
    ],
    context:
      "A Japanese biographical dictionary calls Shima the \"father of the Shinkansen\" (新幹線生みの親), a title nippon.com gives to Sogō. The line was the work of many people: Sogō, who backed it, and researchers at JNR's Railway Technical Research Institute, several of them former naval aircraft engineers, who shaped the train and studied its ride.",
    legacy: {
      text: "He received the James Watt International Gold Medal in 1969 and the Order of Culture in 1994, the first person from the railway field to do so.",
      cite: ["shima-kotobank", "shima-bunshun-2024"],
    },
    stories: ["shinkansen"],
    related: ["yusaku-kamekura", "kisho-kurokawa"],
    sources: ["shima-kotobank", "shima-bunshun-2024", "shink-nrm-page", "shink-nippon-history-ja"],
  },

  // gunpei-yokoi
  {
    id: "gunpei-yokoi",
    slug: "gunpei-yokoi",
    name: "Gunpei Yokoi",
    nameJa: "横井軍平",
    romanised: ["Yokoi Gunpei", "Gumpei Yokoi"],
    born: { date: "1941-09-10" },
    died: { date: "1997-10-04" },
    disciplines: ["Product development", "Toy design", "Electronics engineering"],
    role: "Nintendo engineer and head of development behind Game & Watch and Game Boy",
    intro:
      "An electrical engineering graduate who joined Nintendo to maintain card-making machines, turned a spare-time toy into the Ultra Hand, and went on to lead the department that made Game & Watch and Game Boy.",
    biography: [
      {
        text: "Gunpei Yokoi was born in 1941 and grew up in Kyoto. He graduated in electrical engineering from Doshisha University and joined Nintendo in 1965, first to maintain the machines that made playing cards and hanafuda.",
        cite: ["yokoi-bunshun-1996", "yokoi-ijinden"],
      },
      {
        text: "By his own account, within his first year president Hiroshi Yamauchi saw an extending-arm toy Yokoi had built in his spare time and asked to sell it. Released as the Ultra Hand, it sold 1.4 million units, and a development section was set up for him.",
        cite: ["yokoi-bunshun-1996", "yokoi-gamewatch-ultrahand-2009"],
      },
      {
        text: "He proposed Game & Watch, released in 1980, and headed Nintendo's development department (R&D1). Team members recall that ideas came from everyone but Yokoi usually had the final word, cutting away extras until the core of the game remained.",
        cite: ["gw-iwata-asks-ja", "yokoi-bunshun-1996", "gw-nintendo-history-ja"],
      },
      {
        text: "His department developed the cross-shaped button, first used on the Game & Watch Donkey Kong in 1982 and later on the Famicom controller; Yokoi tried each prototype. Nintendo's US patent for the switch names Ichiro Shirai as inventor, so who devised the cross shape is not documented.",
        cite: ["gw-iwata-asks-ja", "yokoi-bunshun-1996", "gw-us-patent-4687200"],
      },
      {
        text: "His department also made Game Boy (1989). He left Nintendo on 15 August 1996 and in September founded KOTO, a planning and research company in Kyoto.",
        cite: ["gw-nintendo-history-ja", "gw-iwata-asks-ja", "yokoi-nyt-1997", "yokoi-bunshun-1996"],
      },
      {
        text: "He died in a road accident on 4 October 1997, aged 56.",
        cite: ["yokoi-ijinden", "yokoi-nyt-1997", "yokoi-bunshun-1996"],
      },
    ],
    keyWorks: [
      { title: "Ultra Hand", date: "1966", note: "Some sources give 1967; Yokoi says it came within his first year at Nintendo.", cite: ["yokoi-gamewatch-ultrahand-2009", "yokoi-bunshun-1996"] },
      { title: "Game & Watch", date: "1980", cite: ["gw-nintendo-history-ja", "gw-iwata-asks-ja"] },
      { title: "Game Boy", date: "1989", cite: ["gw-nintendo-history-ja", "yokoi-nyt-1997"] },
    ],
    philosophy: {
      text: "In a 1996 essay Yokoi wrote that developers should not chase cutting-edge technology but wait until its price had fallen far enough to use in entertainment, telling people to use \"枯れた技術\" (withered technology). He called this \"枯れた技術の水平思考\", lateral thinking with withered technology, and gave carbon fibre's move from space programmes to fishing rods and golf clubs as an example.",
      cite: ["yokoi-bunshun-1996"],
    },
    organisations: [
      { name: "Nintendo", role: "Engineer; head of development department (R&D1)", date: "1965–1996", cite: ["yokoi-bunshun-1996", "gw-iwata-asks-ja"] },
      { name: "KOTO", role: "Founder", date: "1996", cite: ["yokoi-bunshun-1996", "yokoi-ijinden"] },
    ],
    context:
      "Yokoi's essay credits Yamauchi's direct, one-man decision making for letting products such as Game & Watch reach the market despite doubts inside the company. His own account is the main source for his early years at Nintendo.",
    legacy: {
      text: "In 2003 the Game Developers Choice Awards gave him a posthumous Lifetime Achievement Award.",
      cite: ["yokoi-gdca-2003"],
    },
    stories: ["game-and-watch"],
    related: ["aki-maita", "shigetaka-kurita"],
    sources: [
      "yokoi-bunshun-1996",
      "yokoi-gamewatch-ultrahand-2009",
      "yokoi-gdca-2003",
      "yokoi-ijinden",
      "yokoi-nyt-1997",
      "gw-iwata-asks-ja",
      "gw-nintendo-history-ja",
      "gw-us-patent-4687200",
    ],
  },

  // kisho-kurokawa
  {
    id: "kisho-kurokawa",
    slug: "kisho-kurokawa",
    name: "Kisho Kurokawa",
    nameJa: "黒川紀章",
    romanised: ["Kurokawa Kishō", "Kishō Kurokawa"],
    born: { date: "1934-04-08", place: "Aichi Prefecture" },
    died: { date: "2007-10-12" },
    disciplines: ["Architecture", "Urban design"],
    role: "Architect; founding member of Metabolism",
    intro:
      "An architect who joined the Metabolist group at 26, argued for buildings made of replaceable parts, and put the idea into practice in the Nakagin Capsule Tower before going on to museums, an airport and urban plans in Japan and abroad.",
    biography: [
      {
        text: "Kisho Kurokawa was born in Aichi Prefecture in 1934. His office gives his birthplace as the town of Kanie; Japanese encyclopedias give Nagoya.",
        cite: ["kurokawa-office-founder", "kurokawa-kotobank"],
      },
      {
        text: "He graduated in architecture from Kyoto University in 1957 and went on to graduate study under Kenzō Tange at the University of Tokyo.",
        cite: ["kurokawa-kotobank", "kurokawa-office-founder", "kurokawa-archrecord-2007"],
      },
      {
        text: "Around the 1960 World Design Conference in Tokyo he was one of the founders of Metabolism, its youngest member, and in 1962 he set up his own office.",
        cite: ["kurokawa-kotobank", "kurokawa-office-founder", "kurokawa-archrecord-2007", "nakagin-moma-press"],
      },
      {
        text: "In his 1969 Capsule Declaration he set out eight principles for an architecture of replaceable parts. A Capsule House hung in the Theme Pavilion at Expo '70 in Osaka was a direct precursor of the Nakagin Capsule Tower in Ginza, completed by his office in 1972 with a team that included Nobuo Abe, Aiko Mogi, Koji Shimosawa and Kenjiro Ueda.",
        cite: ["nakagin-moma-labels", "nakagin-kurokawa-office"],
      },
      {
        text: "Later works include the National Museum of Ethnology in Osaka (1977), Hiroshima City Museum of Contemporary Art (1988), Kuala Lumpur International Airport (1998), the new wing of the Van Gogh Museum in Amsterdam and the National Art Center, Tokyo (2006).",
        cite: ["kurokawa-kotobank", "kurokawa-office-founder", "kurokawa-archrecord-2007"],
      },
      {
        text: "He was named a Person of Cultural Merit in 2006 and died on 12 October 2007, aged 73.",
        cite: ["kurokawa-kotobank", "kurokawa-archrecord-2007"],
      },
    ],
    keyWorks: [
      { title: "Nakagin Capsule Tower, Tokyo", date: "1972", note: "Demolished in 2022; restored capsules are held by MoMA, SFMOMA and M+.", cite: ["nakagin-kurokawa-office", "nakagin-moma-press", "nakagin-sfmoma"] },
      { title: "National Museum of Ethnology, Osaka", date: "1977", cite: ["kurokawa-kotobank", "kurokawa-office-founder"] },
      { title: "Capsule Inn Osaka", date: "1979", note: "Commissioned from his office in 1977; MoMA calls it the prototype of the capsule hotel.", cite: ["nakagin-moma-labels"] },
      { title: "Kuala Lumpur International Airport", date: "1998", cite: ["kurokawa-kotobank", "kurokawa-archrecord-2007"] },
      { title: "National Art Center, Tokyo", date: "2006", cite: ["kurokawa-kotobank", "kurokawa-archrecord-2007"] },
    ],
    philosophy: {
      text: "Kurokawa set out his ideas in his own writing: the 1969 Capsule Declaration, eight principles for an architecture of replaceable parts, and the book Philosophy of Symbiosis (共生の思想), first published in 1987 and revised in 1991.",
      cite: ["nakagin-moma-labels", "kurokawa-office-founder"],
    },
    organisations: [
      { name: "Metabolism group", role: "Founding member", date: "1960", cite: ["kurokawa-kotobank", "kurokawa-office-founder"] },
      { name: "Kisho Kurokawa Architect & Associates", role: "Founder", date: "1962", cite: ["kurokawa-kotobank", "kurokawa-office-founder"] },
      { name: "Japan Art Academy", role: "Member", date: "from 1998", cite: ["kurokawa-kotobank"] },
    ],
    context:
      "The Nakagin capsules were designed to be replaced, but none ever was. The office he founded still exists and supervised the restoration of capsules saved when the tower was demolished in 2022.",
    legacy: {
      text: "Restored Nakagin capsules, including the one that was Kurokawa's own, are now in museum collections in New York, San Francisco and Hong Kong.",
      cite: ["nakagin-moma-press", "nakagin-sfmoma", "nakagin-mplus"],
    },
    stories: ["nakagin-capsule-tower"],
    related: ["hideo-shima", "yusaku-kamekura"],
    sources: [
      "kurokawa-office-founder",
      "kurokawa-kotobank",
      "kurokawa-archrecord-2007",
      "nakagin-moma-press",
      "nakagin-moma-labels",
      "nakagin-kurokawa-office",
      "nakagin-sfmoma",
      "nakagin-mplus",
      "nakagin-preservation-project",
    ],
  },

  // koryo-miura
  {
    id: "koryo-miura",
    slug: "koryo-miura",
    name: "Koryo Miura",
    nameJa: "三浦公亮",
    romanised: ["Miura Kōryō", "Kōryō Miura", "Koryo Miura"],
    born: { date: "1930" },
    disciplines: ["Space structures", "Structural engineering", "Deployable structures"],
    role: "Space structures engineer who developed the Miura fold",
    intro:
      "A structural engineer at Japan's space science institute who turned a pattern of buckling into a way of folding things: maps that open with one pull, membranes for orbit and, in a related form, a drinks can.",
    biography: [
      {
        text: "Koryo Miura was born in 1930. He is professor emeritus of the University of Tokyo and of the Institute of Space and Astronautical Science (ISAS), where his field is the design of space structures.",
        cite: ["miura-ndl-authority", "miura-tsukuba-lecture-2012"],
      },
      {
        text: "From 1966 to 1967 he studied the failure of hypersonic aircraft fuselages at NASA's Langley Research Center. Making models of variations on Yoshimaru Yoshimura's 1951 buckling pattern, he noticed by hand that one failure model was a very stable structure.",
        cite: ["miura-isas-news-258"],
      },
      {
        text: "In November 1969 he published that shape as a structural form, the PCCP shell, in a report of the University of Tokyo's Institute of Space and Aeronautical Science. Engineers at a can maker later found the paper, and he writes that he first saw their can in early spring 1995.",
        cite: ["miura-isas-news-258"],
      },
      {
        text: "In 1980 he and his colleague Masamori Sakamaki presented a map folded in the Miura pattern at a Tokyo meeting of the International Cartographic Association. His 1985 ISAS report set out the same geometry for packaging and deploying large membranes in space.",
        cite: ["miura-bain-1980", "miura-isas-report-618"],
      },
      {
        text: "The fold was tested in orbit as the 2D array experiment on the Space Flyer Unit, launched in March 1995. For the radio astronomy satellite HALCA, launched in 1997, he proposed the tension truss concept used in its large deployable antenna.",
        cite: ["miura-isas-2dsa", "miura-isas-sfu", "miura-isas-news-453"],
      },
      {
        text: "In 2013 he and Tomohiro Tachi received the IASS Tsuboi Award for their 2012 paper on rigid-foldable cylinders and cells.",
        cite: ["miura-tachi-profile"],
      },
    ],
    keyWorks: [
      { title: "PCCP shell", date: "1969", note: "Cylindrical folded form; the basis of Toyo Seikan's diamond-cut can, by Miura's account.", cite: ["miura-isas-news-258"] },
      { title: "Miura-ori folding map", date: "1980", note: "Presented with Masamori Sakamaki; a related utility model was filed in 1975.", cite: ["miura-bain-1980", "miura-utility-model"] },
      { title: "Miura-ori for large space membranes (ISAS Report No. 618)", date: "1985-12", note: "Flown as the SFU 2D array experiment, 1995.", cite: ["miura-isas-report-618", "miura-isas-2dsa"] },
      { title: "Tension truss concept for HALCA's deployable antenna", date: "1997", note: "Antenna later named among the first IEICE Milestones.", cite: ["miura-isas-news-453"] },
      { title: "\"Rigid-Foldable Cylinders and Cells\" (with Tomohiro Tachi)", date: "2012", note: "IASS Tsuboi Award, 2013.", cite: ["miura-tachi-profile"] },
    ],
    philosophy: {
      text: "Miura writes that he had long been drawn to the geometric beauty (幾何学的美しさ) of this family of developable surfaces, which is why he took seriously the moment he felt that a model of failure was a stable structure.",
      cite: ["miura-isas-news-258"],
    },
    organisations: [
      { name: "NASA Langley Research Center", role: "Researcher on fuselage failure", date: "1966–1967", cite: ["miura-isas-news-258"] },
      { name: "Institute of Space and Aeronautical Science, University of Tokyo", role: "Researcher; published the PCCP shell", date: "1969", cite: ["miura-isas-news-258", "miura-bain-1980"] },
      { name: "Institute of Space and Astronautical Science (ISAS, now part of JAXA)", role: "Professor emeritus", cite: ["miura-isas-news-453", "miura-ndl-authority"] },
      { name: "University of Tokyo", role: "Professor emeritus", cite: ["miura-ndl-authority", "miura-tsukuba-lecture-2012"] },
    ],
    context:
      "Miura's own account separates two related shapes: the cylindrical PCCP shell, which the drinks can uses, and the flat Miura-ori used for maps and space membranes. Popular and brand accounts often merge them, and some link the work to NASA rather than to his Tokyo institute. The often-quoted 1970 date for the flat fold, and the story that the British Origami Society named it, are not confirmed in a primary source.",
    legacy: {
      text: "The pattern is still used to test deployable panels in space, as on the HIROGARI CubeSat handed to JAXA in 2020, and researchers abroad use it to model folded materials.",
      cite: ["miura-mynavi-hirogari", "miura-schenk-guest-2013"],
    },
    stories: ["miura-fold"],
    related: ["yoshio-okada", "sori-yanagi"],
    sources: [
      "miura-ndl-authority",
      "miura-tsukuba-lecture-2012",
      "miura-isas-news-258",
      "miura-isas-report-618",
      "miura-bain-1980",
      "miura-utility-model",
      "miura-isas-2dsa",
      "miura-isas-sfu",
      "miura-isas-news-453",
      "miura-tachi-profile",
      "miura-mynavi-hirogari",
      "miura-schenk-guest-2013",
    ],
  },

  // akihiro-yokoi
  {
    id: "akihiro-yokoi",
    slug: "akihiro-yokoi",
    name: "Akihiro Yokoi",
    nameJa: "横井昭裕",
    romanised: ["Yokoi Akihiro"],
    born: { date: "1955", place: "Tokyo" },
    disciplines: ["Toy planning", "Product development"],
    role: "Toy planner and founder of WiZ, who proposed the Tamagotchi concept",
    intro:
      "A former Bandai product developer who founded the toy planning company WiZ and in 1995 proposed the portable pet that Bandai launched as the Tamagotchi. He shares credit for it with Bandai's Aki Maita.",
    biography: [
      {
        text: "Akihiro Yokoi was born in Tokyo in 1955. He joined Bandai in 1977 and worked on product development for character toys, computer games and fancy goods.",
        cite: ["tama-cinra-yokoi", "yokoi-ndl-tanjoki"],
      },
      {
        text: "In September 1986 he founded the toy planning company WiZ, which he went on to lead as president.",
        cite: ["yokoi-bandainamco-tob-2016", "yokoi-animationbusiness-2016"],
      },
      {
        text: "In 1995 he pitched the idea of a portable pet toy to Bandai. He has said that keeping saltwater fish, which died however hard he tried, showed him that care feels rewarding because it is hard, and that he refused to drop the rule that a neglected pet dies.",
        cite: ["tama-museumofplay", "tama-cinra-yokoi"],
      },
      {
        text: "WiZ and Bandai planned and developed the Tamagotchi together; WiZ produced it and Bandai sold it from November 1996. WiZ went on to co-develop further Bandai lines, including Digital Monster.",
        cite: ["yokoi-bandainamco-tob-2016", "yokoi-animationbusiness-2016"],
      },
      {
        text: "In 1997 he and Aki Maita received the Ig Nobel Prize in Economics as the Tamagotchi's \"father and mother\", and he published a book on its making.",
        cite: ["tama-ig-nobel", "yokoi-ndl-tanjoki"],
      },
      {
        text: "After Bandai Namco Holdings made WiZ a subsidiary in 2016, he stepped down as its president that August.",
        cite: ["yokoi-bandainamco-tob-2016", "yokoi-animationbusiness-2016"],
      },
    ],
    keyWorks: [
      { title: "Tamagotchi (concept proposal; with Bandai)", date: "1995", note: "On sale 23 November 1996.", cite: ["tama-museumofplay", "yokoi-bandainamco-tob-2016"] },
      { title: "『たまごっち誕生記』 (book)", date: "1997-11", cite: ["yokoi-ndl-tanjoki"] },
    ],
    philosophy: {
      text: "Asked where his ideas begin, Yokoi told CINRA in 2019 that major hits come out of strange ideas (「変なことからこそメジャーなものは生まれる」).",
      cite: ["tama-cinra-yokoi"],
    },
    organisations: [
      { name: "Bandai", role: "Product developer", date: "from 1977", cite: ["tama-cinra-yokoi"] },
      { name: "WiZ", role: "Founder; representative director and president", date: "1986–2016", cite: ["yokoi-bandainamco-tob-2016", "yokoi-animationbusiness-2016"] },
    ],
    context:
      "Yokoi proposed the concept, but the Tamagotchi was developed at Bandai with others. The Strong credits Aki Maita with its raising-simulation design, and Bandai's Takeichi Hongo (本郷武一) worked on its planning and development; Hongo recalls the idea as one of many proposals Bandai received. Japanese Wikipedia, citing Yokoi's own 1997 book, says the proposal went to Hongo in June 1995; we have not seen the book. He is not to be confused with Gunpei Yokoi (横井軍平), the Nintendo engineer behind Game & Watch.",
    legacy: {
      text: "The V&A records him with Aki Maita as the Tamagotchi's designers, and M+ describes the toy as a collaboration between the two.",
      cite: ["tama-vam", "tama-mplus"],
    },
    stories: ["tamagotchi"],
    related: ["aki-maita"],
    sources: [
      "tama-cinra-yokoi",
      "yokoi-ndl-tanjoki",
      "yokoi-bandainamco-tob-2016",
      "yokoi-animationbusiness-2016",
      "tama-museumofplay",
      "tama-ig-nobel",
      "tama-vam",
      "tama-mplus",
      "yokoi-mezamashi-hongo-2025",
      "tama-jawiki",
    ],
  },

  // aki-maita
  {
    id: "aki-maita",
    slug: "aki-maita",
    name: "Aki Maita",
    nameJa: "真板亜紀",
    romanised: ["Maita Aki"],
    disciplines: ["Product planning", "Marketing", "Toy design"],
    role: "Bandai staff member credited as co-creator of the Tamagotchi",
    intro:
      "A member of Bandai's sales and marketing staff who developed the Tamagotchi's care-game concept and tested it on the streets of Shibuya. Museums and the Ig Nobel committee credit her alongside Akihiro Yokoi of WiZ.",
    biography: [
      {
        text: "Aki Maita joined Bandai's sales and marketing department in 1990, after working in the computer section of another Tokyo company. She spent her first two years tracking sales data.",
        cite: ["maita-asiaweek-1997"],
      },
      {
        text: "After Akihiro Yokoi of the planning company WiZ pitched a portable pet toy to Bandai in 1995, Maita developed its raising-simulation design. In 1997 she described her part as coming up with the idea, developing the concept and running the marketing, and credited a technician and a public relations colleague with making the product.",
        cite: ["tama-museumofplay", "tama-mplus", "maita-asiaweek-1997"],
      },
      {
        text: "In October 1996 she gave prototypes to about 200 high-school girls in Shibuya, followed their reactions for several weeks and used their questionnaires to settle the colour, chain and packaging before the November launch.",
        cite: ["maita-asiaweek-1997", "tama-mplus"],
      },
      {
        text: "In 1997 she was interviewed in the Japanese business press about how the product was made.",
        cite: ["maita-ndl-jitsugyo-1997"],
      },
      {
        text: "The V&A records her and Yokoi as the Tamagotchi's designers, and in 1997 the two received the Ig Nobel Prize in Economics as its \"father and mother\".",
        cite: ["tama-vam", "tama-ig-nobel"],
      },
    ],
    keyWorks: [
      { title: "Tamagotchi (with Akihiro Yokoi and Bandai colleagues)", date: "1996", note: "Care-game design, consumer testing and marketing.", cite: ["tama-museumofplay", "maita-asiaweek-1997", "tama-vam"] },
    ],
    philosophy: {
      text: "Explaining the toy's appeal, Maita told Asiaweek in 1997 that \"it is dependent on you\", and that it is important for people to find joy in caring for something.",
      cite: ["maita-asiaweek-1997"],
    },
    organisations: [{ name: "Bandai", role: "Sales and marketing department", date: "from 1990", cite: ["maita-asiaweek-1997", "tama-ig-nobel"] }],
    context:
      "Credit for the Tamagotchi is shared, and accounts differ. The Strong National Museum of Play says Yokoi pitched the idea in 1995 and Maita conceptualised the raising-simulation design. In her 1997 interview Maita said she came up with the idea, which does not match the 1995 date of Yokoi's pitch. Bandai's current team also names Takeichi Hongo (本郷武一) as a developer of the first model. We have found no reliable information on her career after 1997.",
    legacy: {
      text: "The Tamagotchi she helped develop is held by the V&A and M+, and was inducted into the World Video Game Hall of Fame in 2025.",
      cite: ["tama-vam", "tama-mplus", "tama-museumofplay"],
    },
    stories: ["tamagotchi"],
    related: ["akihiro-yokoi", "gunpei-yokoi"],
    sources: [
      "maita-asiaweek-1997",
      "maita-ndl-jitsugyo-1997",
      "tama-museumofplay",
      "tama-mplus",
      "tama-vam",
      "tama-ig-nobel",
      "tama-dime-2025",
    ],
  },
];
