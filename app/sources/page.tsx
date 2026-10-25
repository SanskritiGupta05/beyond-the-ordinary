import type { Metadata } from "next";
import Link from "next/link";
import { ImageCredits, SourceList, VerificationBadge } from "@/components/Article";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { sectionJa } from "@/lib/site";
import { getImages, getSources } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sources & Research Approach",
  description: "How the archive is researched, verified and corrected, with every source and image credit in one place.",
};

export default function SourcesPage() {
  const sources = getSources();
  const counts = {
    verified: sources.filter((s) => s.verification === "verified").length,
    corroborated: sources.filter((s) => s.verification === "corroborated").length,
    "needs-review": sources.filter((s) => s.verification === "needs-review").length,
  };
  return (
    <>
      <header className="wrap page-head">
        <p className="tate page-head__tate" lang="ja">{sectionJa.sources}</p>
        <Breadcrumbs items={[{ label: "Sources & research" }]} />
        <h1 className="display page-head__title">Sources &amp; research approach</h1>
        <p className="lede page-head__lede">
          The archive aims to be trustworthy enough to share with designers and researchers. That means showing our working —
          including where we are unsure.
        </p>
      </header>

      <section className="section">
        <div className="wrap two-col">
          <div><h2>How a story is researched</h2></div>
          <div className="prose">
            <ol>
              <li>Start from primary sources wherever they exist: museum collection records, manufacturer histories, standards bodies, the organisations involved.</li>
              <li>Corroborate important claims with an independent source. Encyclopaedias are used to find primary sources, not as the final word.</li>
              <li>Record each source with the specific claims it supports, its publisher, and the date we accessed it.</li>
              <li>Separate dates carefully: designed, patented, first installed, launched, manufactured and redesigned are different events.</li>
              <li>Separate roles: inventor, designer, manufacturer, collaborator and commissioning organisation.</li>
              <li>Mark uncertainty in the text. If something cannot be verified, we omit it or say so plainly.</li>
              <li>Label editorial interpretation, so analysis is never mistaken for documented history.</li>
              <li>Never invent quotations, motivations or citations. Quotations appear only when we have found them in a source.</li>
            </ol>
          </div>
        </div>

        <div className="wrap two-col">
          <div><h2>Verification levels</h2></div>
          <div className="prose">
            <dl style={{ display: "grid", gap: "1rem" }}>
              <div>
                <dt><VerificationBadge v="verified" /> <span className="meta">{counts.verified} sources</span></dt>
                <dd style={{ margin: "0.4rem 0 0" }}>We read the source in full and confirmed it supports the claims listed.</dd>
              </div>
              <div>
                <dt><VerificationBadge v="corroborated" /> <span className="meta">{counts.corroborated} sources</span></dt>
                <dd style={{ margin: "0.4rem 0 0" }}>
                  The claims were found in this source through search excerpts or catalogue summaries and agree with another
                  independent source, but we have not yet read the full page end to end (for example, paywalled standards or sites
                  that block automated access).
                </dd>
              </div>
              <div>
                <dt><VerificationBadge v="needs-review" /> <span className="meta">{counts["needs-review"]} sources</span></dt>
                <dd style={{ margin: "0.4rem 0 0" }}>Used for a lead or caption context only. Claims relying on it are marked as reported.</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="wrap two-col">
          <div><h2>Images</h2></div>
          <div className="prose">
            <p>
              Every image has a recorded creator, source, licence and attribution. In this first release all photographs come from
              Wikimedia Commons under public-domain or Creative Commons licences. We do not use AI-generated images as historical
              evidence. Explanatory drawings are labelled <em>Editorial diagram</em> and are not reproductions of the original works.
              Where no suitably licensed portrait exists, we show a typographic placeholder.
            </p>
          </div>
        </div>

        <div className="wrap two-col">
          <div><h2>Use of AI</h2></div>
          <div className="prose">
            <p>
              AI tools assisted with searching, drafting and building this site. They are not treated as a source: every factual
              claim is tied to an identifiable external source listed below, and AI-generated summaries are not presented as
              independently verified facts. Human review of every entry is part of publishing it.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="bib">
        <div className="wrap">
          <h2 id="bib" className="display h3" style={{ marginBottom: "2rem" }}>All sources ({sources.length})</h2>
          <SourceList ids={sources.map((s) => s.id)} numbered={false} />
        </div>
      </section>

      <section className="section" id="image-credits" aria-labelledby="img">
        <div className="wrap">
          <h2 id="img" className="display h3" style={{ marginBottom: "2rem" }}>Image credits</h2>
          <ImageCredits ids={getImages().map((i) => i.id)} />
          <p className="muted small" style={{ marginTop: "2rem" }}>
            Found an error in a credit or licence? <Link href="/submit?type=correction">Tell us</Link> and we will fix it or remove the image.
          </p>
        </div>
      </section>
    </>
  );
}
