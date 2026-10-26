"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

export interface DatedEvent {
  /** Full date, YYYY-MM-DD. */
  date: string;
  label: string;
  story: string;
  storyJa?: string;
  href: string;
}

const noop = () => () => {};
/** Today's month and day in the reader's time zone, e.g. "10-27". Null while server rendering. */
const todayKey = () => {
  const d = new Date();
  return `${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

function daysUntil(mmdd: string, today: string) {
  const year = 2001; // any non-leap year: only month and day matter
  const a = Date.UTC(year, +today.slice(0, 2) - 1, +today.slice(3));
  let b = Date.UTC(year, +mmdd.slice(0, 2) - 1, +mmdd.slice(3));
  if (b < a) b = Date.UTC(year + 1, +mmdd.slice(0, 2) - 1, +mmdd.slice(3));
  return Math.round((b - a) / 86_400_000);
}

const dayMonth = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", timeZone: "UTC" });

/**
 * "Today in Japanese design": an event from the archive's timelines that
 * happened on today's date, or, when there isn't one, the next anniversary.
 * Computed in the browser so the static page always shows the reader's today.
 */
export function TodayInDesign({ events }: { events: DatedEvent[] }) {
  const today = useSyncExternalStore(noop, todayKey, () => null);
  if (!today || !events.length) return <div className="today today--empty" aria-hidden="true" />;

  const onDay = events.filter((e) => e.date.slice(5) === today);
  const next = onDay.length
    ? []
    : [...events].sort((a, b) => daysUntil(a.date.slice(5), today) - daysUntil(b.date.slice(5), today)).slice(0, 1);
  const shown = onDay.length ? onDay : next;
  const days = next.length ? daysUntil(next[0].date.slice(5), today) : 0;

  return (
    <aside className="today" aria-label="Today in Japanese design">
      <p className="today__label">
        <span className="today__seal" lang="ja">{onDay.length ? "本日" : "近日"}</span>
        <span>{onDay.length ? "On this day in Japanese design" : `Coming up · in ${days} day${days === 1 ? "" : "s"}`}</span>
      </p>
      <ul className="today__list">
        {shown.map((e) => (
          <li key={e.date + e.label}>
            <span className="today__date">
              {dayMonth(e.date)} {e.date.slice(0, 4)}
            </span>
            <span className="today__text">{e.label}</span>
            <Link href={e.href} className="today__link">
              {e.storyJa ? <span lang="ja">{e.storyJa}</span> : null} {e.story} →
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
