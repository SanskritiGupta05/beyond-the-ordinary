"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

function SearchForm({ className, id }: { className: string; id: string }) {
  return (
    <form action="/archive" method="get" role="search" className={className}>
      <label htmlFor={id} className="visually-hidden">
        Search the archive
      </label>
      <input id={id} name="q" type="search" placeholder="Search the archive" autoComplete="off" />
      <button type="submit" aria-label="Search">
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
    </form>
  );
}

export function Header() {
  const pathname = usePathname();
  // The menu is open only for the page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (next: boolean | ((o: boolean) => boolean)) =>
    setOpenOn((typeof next === "function" ? next(open) : next) ? pathname : null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link href="/" className="wordmark" aria-label={`${site.name}, home`}>
          <span className="wordmark__name">{site.name}</span>
          <span className="wordmark__sub">{site.subtitle}</span>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className="site-nav" aria-label="Main" data-open={open}>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
                  <span>{item.label}</span>
                  <span className="nav-ja" lang="ja" aria-hidden="true">
                    {item.ja}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <SearchForm className="header-search mobile-search" id="search-mobile" />
        </nav>
        <SearchForm className="header-search" id="search-desktop" />
      </div>
    </header>
  );
}
