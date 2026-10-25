import type { Metadata } from "next";
import Link from "next/link";
import { RelationshipList } from "@/components/Article";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { sectionJa } from "@/lib/site";
import { Journey, JourneyLegend } from "@/components/Journey";
import { getRelationships, getStories, storyHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "From Japan to the World",
  description: "How selected ideas developed in Japan were adopted, adapted and standardised elsewhere — mapped as sourced relationships, not scores.",
};

const kinds = [
  { term: "Adopted by", text: "Another organisation or country started using the same idea. Adoption alone does not prove the idea came from a particular source." },
  { term: "Adapted from", text: "A documented case of an existing thing being reworked for a new purpose." },
  { term: "Influenced", text: "A source states that one work shaped another. We only use this when the relationship itself is documented." },
  { term: "Standardised by", text: "A standards body codified the idea, which often marks the point where it can travel at scale." },
  { term: "Independent development", text: "Similar solutions that arose separately. We say so where we know it, and mark uncertainty where we don't." },
];

export default function InfluencePage() {
  const stories = getStories();
  const rels = getRelationships();
  const global = stories.filter((s) => s.globalReach);

  return (
    <>
      <header className="wrap page-head">
        <p className="tate page-head__tate" lang="ja">{sectionJa.world}</p>
        <Breadcrumbs items={[{ label: "From Japan to the World" }]} />
        <h1 className="display page-head__title">From Japan to the world</h1>
        <p className="lede page-head__lede">
          Some ideas leave home. This section traces how a few of them travelled — who adopted them, who adapted them, and who
          wrote them into standards — using documented events rather than assumed influence.
        </p>
      </header>

      <section className="section section--ink" aria-labelledby="journeys-title">
        <div className="wrap">
          <h2 id="journeys-title" className="kicker" style={{ marginBottom: "2rem" }}>Three journeys</h2>
          <div className="journeys">
            {global.map((s) => (
              <Journey key={s.id} story={s} />
            ))}
          </div>
          <JourneyLegend />
        </div>
      </section>

      <section className="section" aria-labelledby="method-title">
        <div className="wrap two-col">
          <div>
            <h2 id="method-title">How we describe influence</h2>
          </div>
          <div className="prose">
            <p>
              International use does not automatically mean direct influence. A country may adopt a Japanese invention, adapt it
              heavily, or arrive at something similar on its own. We record each connection as a typed, sourced relationship and
              label how strong the evidence is.
            </p>
            <dl style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }}>
              {kinds.map((k) => (
                <div key={k.term}>
                  <dt style={{ fontWeight: 500 }}>{k.term}</dt>
                  <dd style={{ margin: "0.2rem 0 0" }} className="muted">{k.text}</dd>
                </div>
              ))}
            </dl>
            <p style={{ marginTop: "1.5rem" }}>
              Evidence labels: <span className="evidence" data-e="documented">Documented</span> — a source states it;{" "}
              <span className="evidence" data-e="reported">Reported</span> — widely repeated, primary confirmation pending;{" "}
              <span className="evidence" data-e="editorial-inference">Our inference</span> — our reading of the context.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="all-title">
        <div className="wrap">
          <h2 id="all-title" className="display h3" style={{ marginBottom: "2rem" }}>Every documented connection</h2>
          {stories.map((s) => {
            const items = rels.filter((r) => r.from.kind === "story" && "id" in r.from && r.from.id === s.id);
            if (!items.length) return null;
            return (
              <div key={s.id} style={{ marginBottom: "3rem" }}>
                <h3 className="h4 display" style={{ marginBottom: "1rem" }}>
                  <Link href={storyHref(s)}>{s.subject}</Link>
                </h3>
                <RelationshipList items={items} />
              </div>
            );
          })}
          <p className="muted small">Each relationship lists its sources on the related story page.</p>
        </div>
      </section>
    </>
  );
}
