"use client";

import { useEffect, useState } from "react";

/**
 * Readers counter in the dateline: an eye and the number of browsers that have
 * opened the archive. The total is kept by Abacus (abacus.jasoncameron.dev), a
 * free counter service: no cookies, nothing personal is sent. Each browser is
 * counted once (remembered in localStorage), and only on the live site, so
 * local and preview builds read the total without adding to it.
 */
const API = "https://abacus.jasoncameron.dev";
const COUNTER = "bto-archive/visitors";
const SEEN = "bto-visitor";

// One request per page load, shared by every masthead on the page.
let request: Promise<number | null> | null = null;

function load(): Promise<number | null> {
  if (request) return request;
  let seen = true;
  try {
    seen = localStorage.getItem(SEEN) !== null;
  } catch {}
  const live = process.env.NEXT_PUBLIC_SITE_URL && new URL(process.env.NEXT_PUBLIC_SITE_URL).origin === location.origin;
  const hit = live && !seen;
  const url = `${API}/${hit ? "hit" : "get"}/${COUNTER}`;
  const get = () => fetch(url, { cache: "no-store" }).then((r) => (r.ok ? r.json() : Promise.reject(r.status)));
  // The free service sometimes refuses a request; try once more before giving up.
  request = get()
    .catch(() => new Promise((r) => setTimeout(r, 1500)).then(get))
    .then((d: { value?: unknown } | null) => {
      if (typeof d?.value !== "number") return null;
      if (hit) {
        try {
          localStorage.setItem(SEEN, "1");
        } catch {}
      }
      return d.value;
    })
    .catch(() => null);
  return request;
}

export function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    let on = true;
    void load().then((n) => on && setCount(n));
    return () => {
      on = false;
    };
  }, []);

  if (count === null) return null;
  const n = count.toLocaleString("en-GB");
  return (
    <span className="readers" title={count === 1 ? "1 reader has opened this archive" : `${n} readers have opened this archive`}>
      <svg viewBox="0 0 24 14" width="17" height="10" aria-hidden="true" focusable="false">
        <path d="M1 7C4 2.5 7.8 1 12 1s8 1.5 11 6c-3 4.5-6.8 6-11 6S4 11.5 1 7Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="7" r="3.2" fill="currentColor" />
      </svg>
      {n} <span className="readers__label">{count === 1 ? "reader" : "readers"}</span>
    </span>
  );
}
