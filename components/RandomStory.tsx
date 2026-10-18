"use client";

import { usePathname, useRouter } from "next/navigation";

/**
 * Navigates to a random story, never the one currently open.
 * Receives hrefs from the server so the client bundle stays small.
 */
export function RandomStoryButton({ hrefs, className = "btn btn--ghost", label = "Discover an unexpected story" }: { hrefs: string[]; className?: string; label?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        const pool = hrefs.filter((h) => h !== pathname);
        const next = pool[Math.floor(Math.random() * pool.length)] ?? hrefs[0];
        router.push(next);
      }}
    >
      {label} <span className="arrow" aria-hidden="true">↗</span>
    </button>
  );
}
