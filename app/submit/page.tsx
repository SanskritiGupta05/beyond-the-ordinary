import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SubmitForm } from "@/components/SubmitForm";
import { sectionJa, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Suggest a Story",
  description: "Suggest a case study, a person, a source or a correction for the archive.",
};

export default function SubmitPage() {
  return (
    <>
      <header className="wrap page-head">
        <p className="tate page-head__tate" lang="ja">{sectionJa.submit}</p>
        <Breadcrumbs items={[{ label: "Suggest a story" }]} />
        <h1 className="display page-head__title">Know a story we should tell?</h1>
        <p className="lede page-head__lede">
          Suggest a case study, a person, a source or a correction. Every suggestion is read, researched and checked against
          sources before anything is published.
        </p>
      </header>
      <section className="section" style={{ paddingTop: "3rem" }}>
        <div className="wrap two-col">
          <div className="prose">
            <h2>What helps most</h2>
            <ul>
              <li>A specific object, system, person or decision — not just a theme.</li>
              <li>Where you learned about it, ideally with a link or reference.</li>
              <li>For corrections, the page and the exact sentence.</li>
            </ul>
            <h3>What happens next</h3>
            <p>
              Suggestions go into a research queue. A story is published only once its key claims are supported by identifiable
              sources — see <Link href="/sources">how the research works</Link>. We may not be able to cover everything, and we
              never publish your name without asking.
            </p>
          </div>
          <Suspense fallback={<p className="meta">Loading form…</p>}>
            <SubmitForm contactEmail={site.contactEmail} repo={site.repo} siteName={site.name} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
