import Link from "next/link";
import { entityLabel, formatPartialDate, getImage, getSource, relationshipLabels } from "@/lib/content";
import type { Block, Relationship, Source, TimelineEvent } from "@/lib/types";
import { Diagram } from "./Diagrams";
import { Figure } from "./Figure";
import { Ja } from "./Ja";

/** Maps source ids to footnote numbers for one page. */
export type CiteMap = Map<string, number>;
export const makeCiteMap = (ids: string[]): CiteMap => new Map(ids.map((id, i) => [id, i + 1]));

const verificationLabel: Record<Source["verification"], string> = {
  verified: "Verified",
  corroborated: "Corroborated",
  "needs-review": "Needs review",
};

export function Cites({ ids, map }: { ids?: string[]; map: CiteMap }) {
  if (!ids?.length) return null;
  return (
    <span className="cite">
      {ids.map((id) => {
        const n = map.get(id);
        const src = getSource(id);
        if (!n || !src) return null;
        return (
          <span key={id} className="cite__item">
            <a href={`#src-${id}`} aria-label={`Source ${n}: ${src.title}`}>
              [{n}]
            </a>
            {/* Margin note: a clipped slip that slides out on hover or focus. The link's label already names the source. */}
            <span className="cite__note" aria-hidden="true">
              <span className="cite__note-n">Source {n} · {verificationLabel[src.verification]}</span>
              <span className="cite__note-title">{src.title}</span>
              <span className="cite__note-pub">
                {[src.author, src.publisher, src.published?.slice(0, 4)].filter(Boolean).join(" · ")}
              </span>
            </span>
          </span>
        );
      })}
    </span>
  );
}

export function Blocks({ blocks, map }: { blocks: Block[]; map: CiteMap }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.kind) {
          case "p":
            return (
              <p key={i}>
                {b.text}
                <Cites ids={b.cite} map={map} />
              </p>
            );
          case "interpretation":
            return (
              <aside key={i} className="callout callout--interp" aria-label="Editorial interpretation">
                <p className="callout__label">
                  <span aria-hidden="true">◇</span> Editorial interpretation
                </p>
                <p>{b.text}</p>
              </aside>
            );
          case "uncertain":
            return (
              <aside key={i} className="callout callout--uncertain" aria-label="Uncertain or unverified">
                <p className="callout__label">
                  <span aria-hidden="true">?</span> Uncertain · not yet verified
                </p>
                <p>
                  {b.text}
                  <Cites ids={b.cite} map={map} />
                </p>
              </aside>
            );
          case "image":
            return <Figure key={i} id={b.image} className={`figure--${b.size ?? "inline"}`} natural={b.size === "inline" || !b.size} sizes={b.size === "wide" ? "(max-width: 1100px) 100vw, 70vw" : "(max-width: 600px) 100vw, 32rem"} />;
          case "diagram":
            return <Diagram key={i} id={b.diagram} caption={b.caption} />;
          case "facts":
            return (
              <dl key={i} className="facts">
                {b.items.map((f) => (
                  <div key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>
                      {f.value}
                      <Cites ids={f.cite} map={map} />
                    </dd>
                  </div>
                ))}
              </dl>
            );
          case "compare":
            return (
              <div key={i}>
                <div className="compare-wrap" role="region" aria-label={b.title} tabIndex={0}>
                  <table className="compare">
                    <caption>
                      {b.title}
                      <Cites ids={b.cite} map={map} />
                    </caption>
                    <thead>
                      <tr>
                        <td />
                        {b.columns.map((c) => (
                          <th key={c} scope="col">{c}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.rows.map((r) => (
                        <tr key={r.label}>
                          <th scope="row">{r.label}</th>
                          {r.values.map((v, j) => (
                            <td key={j}>{v}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {b.note ? <p className="compare-note">{b.note}</p> : null}
              </div>
            );
        }
      })}
    </>
  );
}

const phaseText = { origin: "origin", development: "development", spread: "adoption", today: "recent" } as const;

export function Timeline({ events, map }: { events: TimelineEvent[]; map: CiteMap }) {
  return (
    <ol className="timeline">
      {events.map((e) => (
        <li key={e.date + e.label} data-phase={e.phase}>
          <span className="timeline__date">{formatPartialDate(e.date)}</span>
          <span className="timeline__phase">{phaseText[e.phase]}</span>
          <span className="timeline__label">
            {e.label}
            {e.place ? <span className="muted"> — {e.place}</span> : null}
            <Cites ids={e.cite} map={map} />
          </span>
        </li>
      ))}
    </ol>
  );
}

const verificationText: Record<Source["verification"], string> = {
  verified: "Verified",
  corroborated: "Corroborated",
  "needs-review": "Needs review",
};
const verificationIcon: Record<Source["verification"], string> = { verified: "✓", corroborated: "≈", "needs-review": "?" };

export function VerificationBadge({ v }: { v: Source["verification"] }) {
  return (
    <span className="badge" data-v={v}>
      <span aria-hidden="true">{verificationIcon[v]}</span> {verificationText[v]}
    </span>
  );
}

export function SourceList({ ids, numbered = true }: { ids: string[]; numbered?: boolean }) {
  return (
    <ol className="sources-list">
      {ids.map((id, i) => {
        const s = getSource(id);
        if (!s) return null;
        return (
          <li key={id}>
            <details className="source" id={`src-${id}`}>
              <summary>
                <span className="source__n">{numbered ? i + 1 : "·"}</span>
                <span className="source__title">
                  <Ja>{s.title}</Ja>
                  <span className="source__pub">
                    <Ja>{s.publisher}</Ja>
                    {s.published ? `, ${formatPartialDate(s.published)}` : ""}
                    {s.language === "ja" ? " · in Japanese" : ""}
                  </span>
                </span>
                <span style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                  <VerificationBadge v={s.verification} />
                  <span className="source__toggle" aria-hidden="true">Details</span>
                </span>
              </summary>
              <div className="source__detail">
                <p>
                  <a href={s.url} rel="noopener">{s.url}</a>
                </p>
                <div>
                  <p className="kicker">Supports these claims</p>
                  <ul>
                    {s.claims.map((c) => (
                      <li key={c}><Ja>{c}</Ja></li>
                    ))}
                  </ul>
                </div>
                <dl>
                  <dt>Type</dt>
                  <dd>{s.type.replace(/-/g, " ")}</dd>
                  {s.author ? (<><dt>Author</dt><dd>{s.author}</dd></>) : null}
                  <dt>Accessed</dt>
                  <dd>{formatPartialDate(s.accessed)}</dd>
                  {s.reliability ? (<><dt>Notes</dt><dd>{s.reliability}</dd></>) : null}
                  {s.license ? (<><dt>Licence</dt><dd>{s.license}</dd></>) : null}
                </dl>
              </div>
            </details>
          </li>
        );
      })}
    </ol>
  );
}

export function ImageCredits({ ids }: { ids: string[] }) {
  return (
    <ul className="credits">
      {ids.map((id) => {
        const img = getImage(id);
        return (
          <li key={id}>
            <strong>{img.caption}</strong>
            <br />
            {img.attribution} ·{" "}
            {img.licenseUrl ? <a href={img.licenseUrl} rel="noopener license">{img.license}</a> : img.license} ·{" "}
            <a href={img.sourceUrl} rel="noopener">Original</a>
            {img.usageNotes ? <span className="muted"> — {img.usageNotes}</span> : null}
          </li>
        );
      })}
    </ul>
  );
}

const evidenceText = { documented: "Documented", reported: "Reported", "editorial-inference": "Our inference" } as const;

export function RelationshipList({ items, map }: { items: Relationship[]; map?: CiteMap }) {
  return (
    <ul className="rel-list">
      {items.map((r) => {
        const from = entityLabel(r.from);
        const to = entityLabel(r.to);
        return (
          <li key={r.id}>
            <span>
              {from.href ? <Link href={from.href}>{from.label}</Link> : from.label}{" "}
              <span className="rel-type">{relationshipLabels[r.type]}</span>{" "}
              {to.href ? <Link href={to.href}>{to.label}</Link> : <strong style={{ fontWeight: 500 }}>{to.label}</strong>}
            </span>
            <span className="muted">
              {r.date ? <span className="meta">{r.date} · </span> : null}
              {r.note}
              {map ? <Cites ids={r.sources} map={map} /> : null}
            </span>
            <span>
              <span className="evidence" data-e={r.evidence}>{evidenceText[r.evidence]}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
