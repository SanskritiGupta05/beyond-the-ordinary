"use client";

import Link from "next/link";

export default function ErrorPage({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <div className="wrap not-found">
      <p className="not-found__code">Something went wrong</p>
      <h1 className="display h2" style={{ maxWidth: "18ch" }}>This page couldn&rsquo;t be displayed.</h1>
      <p className="lede" style={{ maxWidth: "36rem" }}>It&rsquo;s a problem on our side, not yours. You can try again, or head back to the archive.</p>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <button type="button" className="btn" onClick={() => retry()}>Try again</button>
        <Link href="/archive" className="btn btn--ghost">Go to the archive</Link>
      </div>
    </div>
  );
}
