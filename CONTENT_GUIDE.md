# Content guide

How to research, verify and add entries to Beyond the Ordinary. The dataset is small on purpose: one well-documented story is worth more than ten thin ones.

## Where things live

| File | Holds |
| --- | --- |
| `content/sources.ts` | Every source, with the claims it supports |
| `content/images.ts` | Every image, with its licence and attribution |
| `content/stories.ts` | Journey of an Idea stories |
| `content/people.ts` | Profiles |
| `content/principles.ts` | Design principles |
| `content/relationships.ts` | Typed, sourced links between entries |
| `content/discoveries.ts` | Short facts for the "Did you know?" card |

The shapes are defined in `lib/types.ts`. TypeScript catches structural mistakes, and `npm run validate` catches broken references.

## Workflow for a new story

### 1. Research

1. **Start with primary sources.** Use museum collection records, the manufacturer's or organisation's own history, patents, standards documents, and interviews where the person speaks for themselves. Useful starting points:
   - [Japan Design Resource Database](https://designdesigndesign.jp/en/about/)
   - [DNP Foundation for Cultural Promotion archives](https://www.dnpfcp.jp/foundation_e/archives/)
   - [JIDA Design Museum](https://www.jida.or.jp/home/activity/museum)
   - [JAGDA](https://www.jagda.or.jp/en/)
   - [National Crafts Museum](https://www.artmuseums.go.jp/en/museums/ncm)
   - [Industrial Design Archives Project](https://nakka-art.jp/en/idap-en/)

   Check each site's terms before reusing anything. Do not scrape, and do not get around logins, paywalls or CAPTCHAs.
2. **Corroborate** every important claim with a second, independent source. Use Wikipedia to find primary sources, not as the final word.
3. **Keep event types apart.** Designed, patented, first installed, launched, manufactured and redesigned are different events, and each needs its own date.
4. **Keep roles apart.** Inventor, designer, manufacturer, collaborator and commissioning organisation are not interchangeable.
5. **Don't invent anything.** That includes quotations, motivations and causal links. If a widely repeated anecdote has no primary source, use an `uncertain` block and say so.

### 2. Record sources

Add each source to `content/sources.ts`:

```ts
{
  id: "publisher-short-topic",          // kebab-case, unique
  url: "https://…",
  title: "…",
  publisher: "…",
  published: "2014-06-17",              // if known; "2014" or "2014-06" are fine
  accessed: "2026-10-18",               // YYYY-MM-DD, required
  type: "museum-collection",
  claims: ["One sentence per claim this source supports."],
  reliability: "Optional notes: primary/secondary, bias, paywall…",
  verification: "verified",             // or "corroborated" or "needs-review"
  language: "ja",                       // if not English
}
```

Verification levels:
- **verified**: you read the whole source and it supports every listed claim.
- **corroborated**: you saw the claim in this source (for example in a catalogue summary or search excerpt) and it agrees with another independent source, but you haven't read the full page.
- **needs-review**: a lead only. Anything relying on it must be marked as reported or uncertain.

### 3. Record images

Only use images whose licence you have checked: public domain, CC0, Creative Commons, or explicit permission. Save the file to `public/images/` and add an entry to `content/images.ts` with the creator, the source page URL, the licence, the exact attribution line, meaningful alt text and a caption. **Never use AI-generated images as historical evidence.** If nothing suitable exists, leave the image out: story cards can reuse another image, and profiles fall back to a typographic placeholder automatically.

### 4. Write the story

Add a `Story` to `content/stories.ts`. `heroImage` is optional: leave it out rather than use an image whose licence you have not checked, and the site shows the Japanese subject name (`subjectJa`) as a vertical placeholder. Sections take a `step` from the Journey format and appear in canonical order whatever order you write them in. Leave out steps the evidence can't support. "Explore further" is generated automatically.

Block types:

| Block | Use for |
| --- | --- |
| `{ kind: "p", text, cite: [...] }` | Documented facts. Always cite. The validator warns if you don't. |
| `{ kind: "interpretation", text }` | Your own analysis or lessons. Shown in an "Editorial interpretation" box. |
| `{ kind: "uncertain", text, cite? }` | Disputed, unverified or commonly repeated but unconfirmed claims. |
| `{ kind: "image", image, size }` | `inline` (natural ratio), `wide` or `full`. |
| `{ kind: "diagram", diagram, caption }` | An editorial diagram from `components/Diagrams.tsx`. |
| `{ kind: "facts", items }` | A short fact sheet. Each item can carry its own `cite`. |
| `{ kind: "compare", … }` | A comparison table, for example how countries differ. |

Also fill in `timeline` (with a `phase` of `origin`, `development`, `spread` or `today`), `limitations`, `related`, `principles` and `people`. Set `globalReach: true` only if the story documents adoption outside Japan; that puts it in the "From Japan to the World" section.

Tone: curious, precise and respectful. Avoid "genius" narratives, superlatives and claims of cultural authority, and don't describe Japanese design as a single aesthetic.

### 5. Add relationships

For every link between the story and a person, organisation or later work, add a `Relationship` with its type and an `evidence` level:
- `documented`: a source states the relationship.
- `reported`: widely repeated, but primary confirmation is pending.
- `editorial-inference`: your reading of the context. Use sparingly.

Adoption is not influence, and influence is not origin. If two things may have developed independently, say so.

### 6. Validate and preview

```bash
npm run validate
npm run dev
```

The validator checks for unknown source, image, person, story and principle ids; missing image files; uncited factual paragraphs; relationships without sources; and sources or images that nothing uses.

## Corrections

When something is corrected, update the content and the story's `reviewed` date, and add or adjust the source. If a claim turns out to be wrong and can't be fixed with a source, remove it.

## Future research pipeline

The content model was designed so that an assisted research pipeline can feed it without changes to the site. A sensible design:

1. **Discover** candidate sources from an allowlist of institutions, respecting robots.txt and terms of use.
2. **Collect** candidate entries into a staging store, not into `content/`.
3. **Extract** claims, each stored with its source URL and the supporting passage. This maps directly onto `Source.claims`.
4. **Normalise** names (Japanese script, romanisation, name order), dates (`PartialDate` precision) and categories.
5. **Detect duplicates** by romanised name variants and by artifact alternative names.
6. **Flag uncertainty** where sources conflict, a claim has a single source, or a relationship is causal. These become `uncertain` blocks and `reported` evidence.
7. **Review image rights** before any image moves out of staging.
8. **Approve** entries by human review. This is the only path into the published dataset.
9. **Publish** by writing typed records, or by pointing `lib/content.ts` at a database with the same shapes.
10. **Update** through the corrections process above, keeping each change's source.

Automation should help the editor, never replace them. Never publish facts or citations to grow the archive.
