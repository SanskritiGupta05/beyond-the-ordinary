"use client";

import { useEffect, useRef, useState } from "react";
import { sheetScroll } from "@/lib/sheet";

/** Journey index with active-section tracking, plus a reading progress bar. */
export function StoryRail({ items }: { items: { id: string; num: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    els.forEach((el) => io.observe(el));

    const sheet = sheetScroll();
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const article = document.getElementById("story-body");
        if (!article || !bar.current) return;
        const rect = article.getBoundingClientRect();
        const total = rect.height - sheet.viewport() * 0.6;
        const p = Math.min(1, Math.max(0, (sheet.edge() - rect.top) / Math.max(total, 1)));
        bar.current.style.transform = `scaleX(${p})`;
      });
    };
    onScroll();
    sheet.target.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      sheet.target.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [items]);

  return (
    <>
      <div className="progress" aria-hidden="true">
        <div className="progress__bar" ref={bar} />
      </div>
      <nav className="story-rail__inner" aria-label="The journey of an idea">
        <h2>The journey of an idea</h2>
        <ol className="toc" style={{ listStyle: "none" }}>
          {items.map((i) => (
            <li key={i.id}>
              <a href={`#${i.id}`} aria-current={active === i.id ? "true" : undefined}>
                <span>{i.num}</span>
                <span>{i.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
