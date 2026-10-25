"use client";

import Link from "next/link";
import { useState } from "react";

export interface Discovery {
  fact: string;
  storyTitle: string;
  subject: string;
  href: string;
}

/**
 * "Discover an unexpected story": deals one sourced fact at a time from the
 * archive, each linking to the story it comes from. Starts on a fixed card so
 * server and client render the same thing.
 */
export function Serendipity({ items }: { items: Discovery[] }) {
  const [index, setIndex] = useState(0);
  const item = items[index];
  const pad = (n: number) => String(n).padStart(2, "0");

  const shuffle = () => {
    if (items.length < 2) return;
    let next = index;
    while (next === index) next = Math.floor(Math.random() * items.length);
    setIndex(next);
  };

  return (
    <aside className="serendipity bracket" aria-labelledby="serendipity-title">
      <span className="ghost-num" aria-hidden="true">
        {pad(index + 1)}
      </span>
      <div className="serendipity__head">
        <p className="kicker" id="serendipity-title">
          Did you
          <br />
          know?
        </p>
        <p className="serendipity__count" aria-label={`Fact ${index + 1} of ${items.length}`}>
          <span>{pad(index + 1)}</span>
          <span>{pad(items.length)}</span>
        </p>
      </div>
      <div aria-live="polite" style={{ display: "grid", gap: "1.25rem" }}>
        <p className="serendipity__fact">{item.fact}</p>
        <p className="serendipity__from">
          <span className="chip-label">From</span> {item.subject}
        </p>
      </div>
      <div className="serendipity__actions">
        <Link className="btn" href={item.href}>
          Read the story <span className="arrow" aria-hidden="true">→</span>
        </Link>
        <button type="button" className="btn btn--ghost" onClick={shuffle}>
          Another one <span className="arrow" aria-hidden="true">↻</span>
        </button>
      </div>
    </aside>
  );
}
