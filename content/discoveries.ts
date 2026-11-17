/**
 * Short, sourced facts for the "Discover an unexpected story" interaction.
 * Each must be supported by the cited source and link to an existing story.
 */
export const discoveries: { story: string; fact: string; cite: string[] }[] = [
  { story: "tactile-paving", fact: "The world's first tactile paving was laid on a single street in Okayama on 18 March 1967, and the date is now Tactile Paving Day in Japan.", cite: ["ossk-tenji-block"] },
  { story: "qr-code", fact: "The corner squares of a QR Code use a 1:1:3:1:1 pattern because it was the least common sequence the team found in printed material.", cite: ["denso-qr-history"] },
  { story: "butterfly-stool", fact: "Sori Yanagi's Butterfly Stool was moulded on equipment originally used to make wooden aeroplane fuselages.", cite: ["vam-butterfly-stool"] },
  { story: "naoto-fukasawa-cd-player", fact: "MUJI's wall-mounted CD player switches on with a pull cord, borrowed from a kitchen extractor fan.", cite: ["vam-cd-player"] },
  { story: "tokyo-1964-design", fact: "Tokyo 1964 had 59 pictograms: 20 for sports and 39 for things like telephones, first aid and toilets.", cite: ["japanhouse-1964"] },
  { story: "butterfly-stool", fact: "Early Butterfly Stool prototypes had flat feet that would have damaged tatami. The final design touches the floor at just two points per leg.", cite: ["vam-butterfly-stool"] },
  { story: "qr-code", fact: "DENSO WAVE holds patents on the QR Code but declared from the start that it would not exercise them.", cite: ["denso-qr-history"] },
  { story: "tactile-paving", fact: "Tactile blocks speak two words: raised bars mean \"follow this way\", raised dots mean \"stop\".", cite: ["vam-tactile-slab"] },
  { story: "exit-sign", fact: "The running man on exit signs exists in 58 drafts; its legs were adjusted so it would not look like it was sprinting.", cite: ["slate-exit-sign"] },
  { story: "emoji", fact: "Each of DOCOMO's original 176 emoji was drawn on a grid of just 12 by 12 pixels.", cite: ["wikipedia-kurita"] },
  { story: "cup-noodles", fact: "Cup Noodles are loaded upside down: the noodle block is flipped and the cup lowered over it, so the block wedges in the middle of the cup.", cite: ["nissin-founder"] },
  { story: "walkman", fact: "The first Walkman had two headphone sockets and a \"hotline\" button so two listeners could talk over the music.", cite: ["vam-walkman"] },
  { story: "rice-cooker", fact: "Toshiba's 1955 automatic rice cooker used boiling water as its timer: when the outer pot ran dry, a bimetallic switch cut the power.", cite: ["ieee-spectrum-rice-cooker"] },

  // olfa-cutter
  {
    story: "olfa-cutter",
    fact: "Okada's first 3,000 snap-off knives came back from the press shop so uneven that he reworked every one by hand over three months.",
    cite: ["olfa-birth-ja"],
  },

  // sharp-pencil
  {
    story: "sharp-pencil",
    fact: "\"Ever-Ready\" was chosen partly because, to Japanese ears, \"ready\" sounds like \"lady\", and the pencils were popular with Western women.",
    cite: ["sharp-100th-ch1-en"],
  },

  // super-cub
  { story: "super-cub", fact: "In 2014 the Super Cub's shape itself was registered as a trademark in Japan, because, Honda said, most people who see the design recognise it as a Honda.", cite: ["cub-honda-trademark-2014"] },

  // shinkansen
  { story: "shinkansen", fact: "The first Shinkansen trains had no series name. They were only called the \"0 Series\" after the 200 Series arrived in 1980.", cite: ["shink-toretabi-0"] },

  // seiko-astron
  { story: "seiko-astron", fact: "On the eve of the 1969 launch, Seiko's sales team cut the Quartz Astron's price to ¥380,000; the chairman put it back to ¥450,000, and the press conference was delayed four hours while the tags were changed.", cite: ["astron-epson-book-ja"] },

  // game-and-watch
  { story: "game-and-watch", fact: "The first Game & Watch ran on a calculator chip with 72 display segments: 28 drew the score and clock digits, and the other 44 were the whole game.", cite: ["gw-iwata-asks-ja"] },

  // nakagin-capsule-tower
  { story: "nakagin-capsule-tower", fact: "Each of the Nakagin Capsule Tower's 140 rooms was held to its concrete core by just four high-tensile bolts, so that it could be unbolted and replaced. None ever was, until the whole building came down in 2022.", cite: ["nakagin-kurokawa-office", "nakagin-dezeen-demolition"] },

  // washlet
  { story: "washlet", fact: "The Washlet's 43° spray angle and 38 °C water came from about 300 TOTO employees, who marked where they sat on paper along a wire stretched across a test seat.", cite: ["washlet-toto-history-en", "washlet-toto-70m"] },

  // miura-fold
  {
    story: "miura-fold",
    fact: "Koryo Miura says the Miura fold family began as a failure pattern: at NASA in 1966–67 he noticed by hand that a model of a buckled fuselage was a very stable structure.",
    cite: ["miura-isas-news-258"],
  },

  // tamagotchi
  {
    story: "tamagotchi",
    fact: "On the US launch of Tamagotchi in 1997, FAO Schwarz's New York flagship sold 10,000 of them in the first 24 hours, according to Bandai.",
    cite: ["tama-bandai-100m"],
  },
];
