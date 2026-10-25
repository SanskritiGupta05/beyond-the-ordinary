import type { Principle } from "@/lib/types";

export const principles: Principle[] = [
  {
    id: "touch-as-information",
    slug: "touch-as-information",
    name: "Communicating through physical form",
    question: "What can an object tell you before you read anything?",
    explanation:
      "Some designs carry their message in shape and texture rather than in words or screens. A surface can say \"stop\"; a foot can be shaped to respect a floor; a hanging cord can say \"pull me\". When it works, the information is available to people regardless of language, literacy or sight.",
    examples: [
      { story: "tactile-paving", text: "Raised bars mean follow; raised dots mean stop. The message is in the ground itself.", cite: ["vam-tactile-slab"] },
      { story: "butterfly-stool", text: "Feet that touch the floor at two points per leg let a Western-style stool sit on tatami without damaging it.", cite: ["vam-butterfly-stool"] },
      { story: "naoto-fukasawa-cd-player", text: "A dangling cord signals how to start the music before anyone explains it.", cite: ["vam-cd-player"] },
    ],
    people: ["seiichi-miyake", "sori-yanagi", "naoto-fukasawa"],
    stories: ["tactile-paving", "butterfly-stool", "naoto-fukasawa-cd-player"],
    caution: "Physical cues are not universally legible. A texture has to be learned, and a gesture depends on habits that vary between people and places.",
    sources: ["vam-tactile-slab", "vam-butterfly-stool", "vam-cd-player"],
  },
  {
    id: "borrowed-behaviour",
    slug: "borrowed-behaviour",
    name: "Designing from existing behaviour",
    question: "What does the user already know how to do?",
    explanation:
      "Rather than teaching people a new interaction, a design can reuse one they already perform. Fukasawa described the goal as a product that triggers an instinctive response — no manual required. The skill lies in noticing which behaviours are shared widely enough to build on.",
    examples: [
      { story: "naoto-fukasawa-cd-player", text: "The CD player borrows the pull-cord switch of a kitchen extractor fan.", cite: ["vam-cd-player"] },
      { story: "qr-code", text: "Codes readable from any angle mean users never have to learn how to align a scanner.", cite: ["denso-qr-story"] },
      { story: "cup-noodles", text: "Ando built the product around something customers were already doing: eating noodles from cups.", cite: ["nissin-founder"] },
    ],
    people: ["naoto-fukasawa", "masahiro-hara", "momofuku-ando"],
    stories: ["naoto-fukasawa-cd-player", "qr-code", "cup-noodles"],
    caution: "\"Intuitive\" always means intuitive to someone. Behaviour learned in one culture or generation may not transfer.",
    sources: ["vam-cd-player", "denso-qr-story"],
  },
  {
    id: "designing-for-recognition",
    slug: "designing-for-recognition",
    name: "Designing for recognition",
    question: "How do you make something unmistakable at a glance — for a person, a foot or a machine?",
    explanation:
      "Each of these designs had to be recognised quickly in a noisy environment: a pictogram among crowds, a finder pattern among printed clutter, a warning texture among paving stones. Distinctiveness was engineered, often by studying what was common in order to choose what was rare.",
    examples: [
      { story: "qr-code", text: "The 1:1:3:1:1 finder pattern was chosen because it was the least common sequence in printed material.", cite: ["denso-qr-history"] },
      { story: "tokyo-1964-design", text: "Pictograms for sports and services let visitors find their way without reading Japanese.", cite: ["japanhouse-1964"] },
      { story: "tactile-paving", text: "Two textures that are easy to tell apart, in a colour that contrasts with the pavement.", cite: ["vam-tactile-slab"] },
      { story: "exit-sign", text: "Candidate exit signs were tested for legibility in smoke before one was chosen.", cite: ["slate-exit-sign"] },
      { story: "emoji", text: "Each pictogram had to read clearly within 12×12 pixels.", cite: ["wikipedia-kurita"] },
    ],
    people: ["masahiro-hara", "yusaku-kamekura", "seiichi-miyake", "yukio-ota", "shigetaka-kurita"],
    stories: ["qr-code", "tokyo-1964-design", "tactile-paving", "exit-sign", "emoji"],
    sources: ["denso-qr-history", "japanhouse-1964", "vam-tactile-slab"],
  },
  {
    id: "material-and-making",
    slug: "material-and-making",
    name: "Material and manufacturing as design partners",
    question: "How does the way something is made shape what it can be?",
    explanation:
      "Form often follows from the machinery and material available. Designers who understand production can turn its constraints into the design's character.",
    examples: [
      { story: "butterfly-stool", text: "Wartime plywood-moulding equipment made the stool possible; one part used twice simplified production.", cite: ["vam-butterfly-stool"] },
      { story: "cup-noodles", text: "Turning the noodle block upside down and lowering the cup over it made the suspended-noodle design manufacturable.", cite: ["nissin-founder"] },
      { story: "rice-cooker", text: "Boiling water itself became the timer: when it was gone, a bimetallic switch tripped.", cite: ["ieee-spectrum-rice-cooker"] },
      { story: "walkman", text: "Sony adapted an existing reporter's recorder, removing recording and adding stereo.", cite: ["vam-walkman"] },
      { story: "tactile-paving", text: "The first blocks were cast cement — modular units that compose into guiding lines and warning fields.", cite: ["vam-tactile-slab"] },
    ],
    people: ["sori-yanagi", "seiichi-miyake", "momofuku-ando"],
    stories: ["butterfly-stool", "tactile-paving", "cup-noodles", "rice-cooker", "walkman"],
    sources: ["vam-butterfly-stool", "vam-tactile-slab"],
  },
  {
    id: "standards-and-openness",
    slug: "standards-and-openness",
    name: "Standards, openness and scale",
    question: "What lets an idea travel beyond the people who made it?",
    explanation:
      "Many ideas spread not because of their form alone but because of decisions about who may use them and how they are specified. Standards bodies, open specifications and repeatable systems turn a single solution into shared infrastructure — and also fix it in place, for better and worse.",
    examples: [
      { story: "qr-code", text: "DENSO WAVE published the specification and declared it would not exercise its patents; AIM, JIS and ISO standards followed.", cite: ["denso-qr-history"] },
      { story: "tactile-paving", text: "JIS T 9251 in Japan and ISO 23599 internationally codified the guiding and warning patterns.", cite: ["jis-t9251", "iso-23599"] },
      { story: "tokyo-1964-design", text: "A pictogram system became an expected part of every Olympic Games after 1964.", cite: ["japanhouse-1964"] },
      { story: "exit-sign", text: "Registration as ISO 7010 E001 carried a Japanese contest winner into safety codes worldwide.", cite: ["iso-7010"] },
      { story: "emoji", text: "Incompatible carrier sets became global only when Unicode 6.0 standardised emoji in 2010.", cite: ["unicode-emoji-history"] },
    ],
    people: ["masahiro-hara", "seiichi-miyake", "yusaku-kamekura", "yukio-ota"],
    stories: ["qr-code", "tactile-paving", "tokyo-1964-design", "exit-sign", "emoji"],
    caution: "Standardisation can lock in early decisions. Differences between national tactile-paving standards show that the same idea can harden into incompatible forms.",
    sources: ["denso-qr-history", "jis-t9251", "iso-23599", "japanhouse-1964"],
  },
];
