"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { sheetScroll } from "@/lib/sheet";
import { nav, navAction, site } from "@/lib/site";

/**
 * Floating bottom navigation.
 *
 * The wordmark shows the name in brushed Japanese (日常の向こう側) and dissolves
 * into English on hover or keyboard focus. The dock hides while scrolling down
 * and returns on scroll up, or whenever focus moves into it. On narrow screens
 * the links collapse into a sheet that opens upward.
 */
export function Dock() {
  const pathname = usePathname();
  // The menu is open only for the page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const [hidden, setHidden] = useState(false);
  const dockRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sheet = sheetScroll();
    let last = sheet.top();
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = sheet.top();
        const nearBottom = sheet.viewport() + y >= sheet.height() - 40;
        setHidden(y > last && y > 160 && !nearBottom);
        last = y;
      });
    };
    sheet.target.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      sheet.target.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const ja = [...site.nameJa];
  const en = [...site.name];

  return (
    <nav
      ref={dockRef}
      className="dock"
      aria-label="Main"
      data-hidden={hidden && !open}
      data-open={open}
      onFocus={() => setHidden(false)}
    >
      {/* Ink texture for the brushed wordmark */}
      <svg width="0" height="0" className="dock__defs" aria-hidden="true" focusable="false">
        <filter id="dock-ink" x="-5%" y="-20%" width="110%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="1.6" result="d" />
          <feGaussianBlur in="d" stdDeviation="0.25" />
        </filter>
      </svg>

      <Link href="/" className="dock__mark" aria-label={`${site.name}, home`}>
        <span className="dock__ja" lang="ja" aria-hidden="true">
          {ja.map((c, i) => (
            <span key={i} style={{ "--i": i } as React.CSSProperties}>
              {c}
            </span>
          ))}
        </span>
        <span className="dock__en" aria-hidden="true">
          {en.map((c, i) =>
            c === " " ? (
              <span key={i} className="sp" style={{ "--i": i } as React.CSSProperties} />
            ) : (
              <span key={i} style={{ "--i": i } as React.CSSProperties}>
                {c}
              </span>
            ),
          )}
        </span>
      </Link>

      <ul className="dock__links" id="dock-links">
        {nav.map((item) => (
          <li key={item.href}>
            <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
              <span className="dock__label">{item.short}</span>
              <span className="dock__label-ja" lang="ja">
                {item.ja}
              </span>
            </Link>
          </li>
        ))}
        <li>
          <Link href={navAction.href} className="dock__action" aria-current={isCurrent(navAction.href) ? "page" : undefined}>
            <span className="dock__label">{navAction.label}</span>
            <span className="dock__label-ja" lang="ja">
              {navAction.ja}
            </span>
          </Link>
        </li>
      </ul>

      <Link href="/archive" className="dock__icon" aria-label="Search the archive" aria-current={isCurrent("/archive") ? "page" : undefined}>
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </Link>

      <button
        type="button"
        className="dock__menu"
        aria-expanded={open}
        aria-controls="dock-links"
        onClick={() => setOpenOn(open ? null : pathname)}
      >
        {open ? "Close" : "Menu"}
      </button>
    </nav>
  );
}
