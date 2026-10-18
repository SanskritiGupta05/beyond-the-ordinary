import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap not-found">
      <p className="not-found__code">404 · Not in the archive</p>
      <h1 className="display h1" style={{ maxWidth: "16ch" }}>This story hasn&rsquo;t been written yet.</h1>
      <p className="lede" style={{ maxWidth: "36rem" }}>
        The page may have moved, or it may be a subject we haven&rsquo;t researched. Either way, there&rsquo;s plenty to discover.
      </p>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Link href="/archive" className="btn">Search the archive <span className="arrow" aria-hidden="true">→</span></Link>
        <Link href="/" className="btn btn--ghost">Back to the start</Link>
      </div>
    </div>
  );
}
