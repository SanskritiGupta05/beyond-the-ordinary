import type { Metadata } from "next";
import { Suspense } from "react";
import { ArchiveSearch } from "@/components/ArchiveSearch";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildSearchIndex } from "@/lib/content";

export const metadata: Metadata = {
  title: "Archive",
  description: "Search and filter every story, person and principle in the archive.",
};

export default function ArchivePage() {
  const entries = buildSearchIndex();
  return (
    <>
      <header className="wrap page-head" style={{ paddingBottom: "2rem" }}>
        <Breadcrumbs items={[{ label: "Archive" }]} />
        <h1 className="display page-head__title">The archive</h1>
        <p className="lede page-head__lede">
          Every story, person and principle so far. Small on purpose: each entry is researched and sourced before it appears here.
        </p>
      </header>
      <div className="wrap">
        <Suspense fallback={<p className="meta" style={{ padding: "2rem 0" }}>Loading the archive…</p>}>
          <ArchiveSearch entries={entries} />
        </Suspense>
      </div>
      <div style={{ height: "5rem" }} />
    </>
  );
}
