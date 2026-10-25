# Beyond the Ordinary

**Japanese Design, Ideas & Global Influence** — an independent editorial archive about Japanese design, the people behind it, and ideas that travelled far beyond where they began.

The archive is deliberately small: ten researched stories, eight profiles and five design principles. Every factual claim is tied to a recorded source.

## Running it

Requires Node 20.9+ (developed on Node 26).

```bash
npm install
npm run dev          # http://localhost:3000
npm run validate     # check content integrity
npm run build        # validates content, then builds a static site
npm start            # serve the production build
```

Other scripts: `npm run lint`, `npm run typecheck`.

### Environment variables

Both are optional. Copy them into `.env.local`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Absolute site URL, for social preview images, canonical links and the sitemap. Defaults to `http://localhost:3000`. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Inbox for corrections and suggestions. While it is empty, the site says submissions aren't open yet rather than showing a form that goes nowhere. |

Branding (name, subtitle, navigation) lives in [`lib/site.ts`](lib/site.ts), so the provisional name can be changed in one place.

## Architecture

- **Next.js 16 (App Router) + TypeScript + plain CSS.** Every page is statically generated. There is no database, CMS, auth or API.
- **Content lives apart from presentation.** Typed records in `content/` are read only through `lib/content.ts`. To move to a database or CMS later, replace that module; pages and components don't change.
- **Design tokens** (colour, type scale, spacing) are CSS custom properties at the top of `app/globals.css`.
- **Visual language:** grid-paper ground, monochrome ink with one deep green for labels, thin rules, corner brackets, oversized ghost numerals, and vertical Japanese labels (tategaki) beside English headings. Photos are greyscale in cards and turn to colour on hover. Story pages show colour in full.
- **Fonts:** Inter Tight (headlines), Inter (text and labels) and Shippori Mincho B1 (all Japanese, by the Japanese foundry FONTDASU, loaded on demand). All are self-hosted through `next/font` and licensed under the SIL Open Font License. Japanese runs inside English text are wrapped in `lang="ja"` (see `components/Ja.tsx`) so browsers draw Japanese glyph forms rather than Chinese ones.
- **Japanese labels** (section names, and the brand rendered as 日常の向こう側) live in `lib/site.ts` and `subjectJa` on each story. They are plain, standard terms, but should be checked by a native speaker before launch.

```
app/
  page.tsx                  Homepage (8 editorial sections)
  stories/[slug]/           "Journey of an Idea" story template
  people/[slug]/            Profile template
  thinking/[slug]/          Design principle template
  influence/                From Japan to the World
  archive/                  Search + filters (client side, URL-synced)
  sources/                  Research method, bibliography, image credits
  about/                    Project, creator's note, corrections
  submit/                   Suggestion form (email or GitHub issue, no backend)
  opengraph-image.tsx       Default social preview
  sitemap.ts, robots.ts, not-found.tsx, error.tsx
components/                 Editorial components (cards, figures, diagrams, timeline, sources…)
content/                    The dataset — see CONTENT_GUIDE.md
lib/types.ts                Content model
lib/content.ts              Content access layer and search index
scripts/validate-content.mts  Referential-integrity checks, run before every build
public/images/              Openly licensed images (credited in content/images.ts)
```

### Content model

Defined in [`lib/types.ts`](lib/types.ts):

- **Story**: one artifact or innovation, told as a Journey of an Idea. It has typed sections (problem → idea → original application → design decision → turning point → beyond its origins → world today → lessons), a timeline, limitations, related entries and sources. Body blocks separate documented facts (`p`, cited), `interpretation` (editorial analysis) and `uncertain` (unverified or disputed).
- **Person**: names in Japanese script and romanised forms, dates, disciplines, a cited biography, key works, documented philosophy (only when a source records it), organisations and legacy.
- **Principle**: an explanation, examples tied to stories, and its limits.
- **Source**: URL, publisher, dates, the specific claims it supports, reliability notes and a verification level (`verified`, `corroborated` or `needs-review`).
- **ImageAsset**: file, creator, licence, attribution, alt text, caption and usage notes.
- **Relationship**: a typed, sourced link (`designed-by`, `adopted-by`, `influenced`, `standardised-by` and so on), labelled `documented`, `reported` or `editorial-inference`. Influence is shown as these individual links, never as a score.

### Interactions

- Header search, which works without JavaScript (it submits to `/archive?q=`).
- Archive search with type and category filters, diacritic-insensitive matching, Japanese-script matching, and filter state kept in the URL.
- "Discover an unexpected story": a random-story button, plus a card that deals one sourced fact at a time.
- Story pages: a journey index that tracks the active section, a reading progress bar, numbered citations linking to expandable source records, and related-story navigation.
- A suggestion form at `/submit`. Submitting opens the visitor's own mail app (when `NEXT_PUBLIC_CONTACT_EMAIL` is set) or a pre-filled GitHub issue on the repo set in `lib/site.ts`. The site stores nothing. Links like `/submit?type=correction&subject=…` pre-fill the form.
- Respects `prefers-reduced-motion`. Every control is a real button or link with a visible focus state.

## Known limitations (first release)

- **Some sources are "corroborated", not "verified".** A few sites (MoMA, the British Museum, the Japan Times and some standards bodies) block automated reading or are paywalled. For those, claims were confirmed through catalogue summaries or search excerpts plus a second independent source, and they are labelled that way on the site. An editor should read them in full before wide publication.
- **Images:** all photographs are from Wikimedia Commons under public-domain or Creative Commons licences. The emoji and rice cooker stories have no licensed photograph, so they show a typographic placeholder and editorial diagrams. There are no licensed portraits of Seiichi Miyake, Masahiro Hara, Yukio Ota, Shigetaka Kurita or Momofuku Ando, so their profiles use typographic placeholders. A Commons file described as a portrait of Miyake was left out because its provenance is unclear. Museum images (V&A, MoMA) were deliberately not reproduced, because their terms restrict reuse.
- **No posters reproduced.** Kamekura's Tokyo 1964 posters are still under copyright. The story uses a documentary photograph of event programmes and an editorial diagram instead.
- **Corrections inbox:** no contact address is configured yet (see `NEXT_PUBLIC_CONTACT_EMAIL`).
- **Not yet covered:** ma, wabi-sabi and kanso. The Thinking page explains why.
- **English only.** The Japanese-script font is in place, but there are no translated pages yet.

See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for how to research and add entries, and how a future research pipeline would plug in.
