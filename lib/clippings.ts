import { useSyncExternalStore } from "react";

/**
 * Clippings: stories a reader has cut out of the paper. Stored in this browser
 * only (localStorage); there are no accounts. Components stay in sync through
 * a custom event, and across tabs through the storage event.
 */
export interface Clipping {
  id: string;
  href: string;
  title: string;
  subject: string;
  subjectJa?: string;
  category: string;
  /** A passage the reader selected; absent when the whole story was clipped. */
  quote?: string;
  clippedAt: string;
}

const KEY = "bto-clippings";
const EVENT = "bto-clippings-change";
const EMPTY: Clipping[] = [];

let cacheRaw: string | null = null;
let cacheList: Clipping[] = EMPTY;

function read(): Clipping[] {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(KEY);
  } catch {
    return EMPTY;
  }
  if (raw === cacheRaw) return cacheList;
  cacheRaw = raw;
  try {
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    cacheList = Array.isArray(parsed) ? (parsed as Clipping[]) : EMPTY;
  } catch {
    cacheList = EMPTY;
  }
  return cacheList;
}

function write(list: Clipping[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    /* storage unavailable: clippings won't persist */
  }
  window.dispatchEvent(new Event(EVENT));
}

export function addClipping(c: Omit<Clipping, "clippedAt">) {
  write([{ ...c, clippedAt: new Date().toISOString() }, ...read().filter((x) => x.id !== c.id)]);
}

export function removeClipping(id: string) {
  write(read().filter((x) => x.id !== id));
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/** The reader's clippings, newest first. Empty during server rendering. */
export function useClippings(): Clipping[] {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}
