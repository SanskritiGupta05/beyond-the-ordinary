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

  const shuffle = () => {
    if (items.length < 2) return;
    let next = index;
    while (next === index) next = Math.floor(Math.random() * items.length);
    setIndex(next);
  };

  return (
    <aside className="serendipity" aria-labelledby="serendipity-title">
      <p className="kicker" id="serendipity-title">
        Did you know? · {index + 1} of {items.length}
      </p>
      <div aria-live="polite">
        <p className="serendipity__fact">{item.fact}</p>
        <p className="serendipity__from" style={{ marginTop: "1rem" }}>
          From: {item.subject}
        </p>
      </div>
      <div className="serendipity__actions">
        <Link className="btn" href={item.href}>
          Read the story <span className="arrow" aria-hidden="true">→</span>
        </Link>
        <button type="button" className="btn btn--ghost" onClick={shuffle}>
          Another one ↻
        </button>
      </div>
    </aside>
  );
}
