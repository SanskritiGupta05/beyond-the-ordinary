"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import type { SearchEntry } from "@/lib/content";

const TYPES = ["Story", "Person", "Principle"] as const;
const TYPE_LABELS = { Story: "Stories", Person: "People", Principle: "Principles" } as const;

/** Lowercase and strip diacritics so "sori" matches "Sōri". */
const fold = (s: string) => s.normalize("NFKD").replace(/[̀-ͯ]/g, "").toLowerCase();

function highlight(text: string, q: string) {
  // Only highlight when folding kept character positions aligned.
  if (!q || fold(text).length !== text.length) return text;
  const i = fold(text).indexOf(fold(q));
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark>{text.slice(i, i + q.length)}</mark>
      {text.slice(i + q.length)}
    </>
  );
}

export function ArchiveSearch({ entries }: { entries: SearchEntry[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [q, setQ] = useState(params.get("q") ?? "");
  const [types, setTypes] = useState<string[]>(params.get("type")?.split(",").filter(Boolean) ?? []);
  const [cats, setCats] = useState<string[]>(params.get("category")?.split(",").filter(Boolean) ?? []);
  const input = useRef<HTMLInputElement>(null);
  const lastQs = useRef(params.toString());

  // Pick up searches submitted from the header while already on this page.
  useEffect(() => {
    const qs = params.toString();
    if (qs === lastQs.current) return;
    lastQs.current = qs;
    setQ(params.get("q") ?? "");
    setTypes(params.get("type")?.split(",").filter(Boolean) ?? []);
    setCats(params.get("category")?.split(",").filter(Boolean) ?? []);
  }, [params]);

  const categories = useMemo(() => Array.from(new Set(entries.map((e) => e.category))).sort(), [entries]);

  // Keep the URL in sync so filtered views can be shared and survive reloads.
  useEffect(() => {
    const sp = new URLSearchParams();
    if (q) sp.set("q", q);
    if (types.length) sp.set("type", types.join(","));
    if (cats.length) sp.set("category", cats.join(","));
    const qs = sp.toString();
    if (qs === lastQs.current) return;
    const t = setTimeout(() => {
      lastQs.current = qs;
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    }, 250);
    return () => clearTimeout(t);
  }, [q, types, cats, pathname, router]);

  const terms = fold(q).split(/\s+/).filter(Boolean);
  const matchesText = (e: SearchEntry) => terms.every((t) => fold(e.text).includes(t));
  const results = entries.filter((e) => matchesText(e) && (!types.length || types.includes(e.type)) && (!cats.length || cats.includes(e.category)));

  const count = (pred: (e: SearchEntry) => boolean) => entries.filter((e) => matchesText(e) && pred(e)).length;
  const toggle = (list: string[], set: (v: string[]) => void, v: string) => set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);
  const clear = () => {
    setQ("");
    setTypes([]);
    setCats([]);
    input.current?.focus();
  };

  return (
    <>
      <div className="archive-controls">
        <form role="search" className="search-field" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="archive-q" className="visually-hidden">
            Search stories, people and principles
          </label>
          <input
            ref={input}
            id="archive-q"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try “plywood”, “Okayama” or “柳”"
            autoComplete="off"
          />
          {q ? (
            <button type="button" onClick={() => { setQ(""); input.current?.focus(); }}>
              Clear
            </button>
          ) : null}
        </form>
        <div className="filters">
          <fieldset className="filter-group">
            <legend>Type</legend>
            <div className="chips">
              {TYPES.map((t) => (
                <button key={t} type="button" className="chip" aria-pressed={types.includes(t)} onClick={() => toggle(types, setTypes, t)}>
                  {TYPE_LABELS[t]} <span className="chip__count">{count((e) => e.type === t)}</span>
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset className="filter-group">
            <legend>Category</legend>
            <div className="chips">
              {categories.map((c) => (
                <button key={c} type="button" className="chip" aria-pressed={cats.includes(c)} onClick={() => toggle(cats, setCats, c)}>
                  {c} <span className="chip__count">{count((e) => e.category === c)}</span>
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      <div className="results-meta">
        <p className="meta" role="status" aria-live="polite">
          {results.length} {results.length === 1 ? "result" : "results"}
          {q ? <> for &ldquo;{q}&rdquo;</> : null}
        </p>
        {q || types.length || cats.length ? (
          <button type="button" className="link-arrow" style={{ background: "none", border: 0, borderBottom: "1px solid", cursor: "pointer" }} onClick={clear}>
            Reset filters
          </button>
        ) : null}
      </div>

      {results.length ? (
        <ul className="results">
          {results.map((e) => (
            <li key={e.type + e.id} className="result">
              <Link href={e.href}>
                <span className="result__img">
                  {e.image ? <Image src={e.image} alt="" width={160} height={160} /> : <span className="meta" aria-hidden="true">{e.type === "Principle" ? "◇" : "—"}</span>}
                </span>
                <span className="result__type">{e.type} · {e.category}</span>
                <span>
                  <span className="result__title" style={{ display: "block" }}>{highlight(e.title, q)}</span>
                  <span className="result__sub" style={{ display: "block" }}>{highlight(e.subtitle, q)}</span>
                </span>
                <span className="result__year">{e.year}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p className="display h3">Nothing here yet.</p>
          <p className="muted" style={{ maxWidth: "32rem" }}>
            The archive is small and growing, so many subjects simply haven&rsquo;t been researched yet. Try a broader term, or
            suggest the story you were looking for.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
            <button type="button" className="btn" onClick={clear}>Show everything</button>
            <Link href={`/submit${q ? `?subject=${encodeURIComponent(q)}` : ""}`} className="btn btn--ghost">Suggest a subject</Link>
          </div>
        </div>
      )}
    </>
  );
}
