import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cites, ImageCredits, RelationshipList, SourceList, makeCiteMap } from "@/components/Article";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Portrait, StoryCard } from "@/components/Cards";
import { CorrectionCta } from "@/components/CorrectionCta";
import { formatPartialDate, getImage, getPeople, getPerson, getPersonBySlug, getStory, personHref, personSourceIds, relationshipsFor } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPeople().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/people/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const p = getPersonBySlug(slug);
  if (!p) return {};
  const portrait = p.portrait ? getImage(p.portrait) : undefined;
  return {
    title: p.name,
    description: p.intro,
    alternates: { canonical: personHref(p) },
    openGraph: { type: "profile", title: p.name, description: p.intro, images: portrait ? [{ url: portrait.src, alt: portrait.alt }] : undefined },
  };
}

export default async function PersonPage(props: PageProps<"/people/[slug]">) {
  const { slug } = await props.params;
  const p = getPersonBySlug(slug);
  if (!p) notFound();

  const sourceIds = personSourceIds(p);
  const cites = makeCiteMap(sourceIds);
  const stories = p.stories.map((id) => getStory(id)!);
  const related = p.related.map((id) => getPerson(id)!);
  const rels = relationshipsFor({ kind: "person", id: p.id });
  const lifespan = [p.born ? formatPartialDate(p.born.date) : null, p.died ? formatPartialDate(p.died.date) : null];

  return (
    <article>
      <header className="wrap profile-head">
        <div>
          <Breadcrumbs items={[{ href: "/people", label: "People" }, { label: p.name }]} />
          <p className="kicker kicker--accent" style={{ marginTop: "2.5rem" }}>{p.role}</p>
          <h1 className="display h1" style={{ marginTop: "1rem" }}>{p.name}</h1>
          {p.romanised?.length ? <p className="meta profile-head__romaji">{p.romanised.join(" · ")}</p> : null}
          <p className="lede" style={{ marginTop: "1.5rem", maxWidth: "36rem" }}>{p.intro}</p>
        </div>
        {p.nameJa ? (
          <p className="tate profile-head__ja" lang="ja">
            {p.nameJa}
          </p>
        ) : <span />}
        <div>
          <Portrait person={p} className="profile-portrait" sizes="(max-width: 1000px) 80vw, 30vw" />
          {p.portrait ? <p className="meta" style={{ marginTop: "0.5rem", fontSize: "0.7rem" }}>{getImage(p.portrait).attribution}</p> : null}
        </div>
      </header>

      <div className="wrap profile-body">
        <dl className="profile-facts">
          {p.born ? (<div><dt>Born</dt><dd>{lifespan[0]}{p.born.place ? `, ${p.born.place}` : ""}</dd></div>) : null}
          {p.died ? (<div><dt>Died</dt><dd>{lifespan[1]}{p.died.place ? `, ${p.died.place}` : ""}</dd></div>) : null}
          <div><dt>Disciplines</dt><dd>{p.disciplines.join(", ")}</dd></div>
          <div>
            <dt>Organisations</dt>
            <dd>
              <ul style={{ listStyle: "none", display: "grid", gap: "0.4rem" }}>
                {p.organisations.map((o) => (
                  <li key={o.name + o.role}>
                    {o.name} <span className="muted">— {o.role}{o.date ? `, ${o.date}` : ""}</span>
                    <Cites ids={o.cite} map={cites} />
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        <div>
          <section className="profile-section" aria-labelledby="bio">
            <h2 id="bio">Biography</h2>
            {p.biography.map((b) => (
              <p key={b.text}>
                {b.text}
                <Cites ids={b.cite} map={cites} />
              </p>
            ))}
            {p.context ? (
              <aside className="callout callout--interp" style={{ marginTop: "1.5rem" }} aria-label="Editorial context">
                <p className="callout__label"><span aria-hidden="true">◇</span> Context</p>
                <p>{p.context}</p>
              </aside>
            ) : null}
          </section>

          {p.philosophy ? (
            <section className="profile-section" aria-labelledby="phil">
              <h2 id="phil">In their own terms</h2>
              <p className="philosophy">
                {p.philosophy.text}
                <Cites ids={p.philosophy.cite} map={cites} />
              </p>
            </section>
          ) : null}

          <section className="profile-section" aria-labelledby="works">
            <h2 id="works">Selected work</h2>
            <ul className="works">
              {p.keyWorks.map((w) => (
                <li key={w.title}>
                  <span className="meta">{w.date}</span>
                  <span>
                    <strong style={{ fontWeight: 500 }}>{w.title}</strong>
                    {w.note ? <span className="muted"> — {w.note}</span> : null}
                    <Cites ids={w.cite} map={cites} />
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {p.legacy ? (
            <section className="profile-section" aria-labelledby="legacy">
              <h2 id="legacy">Influence and legacy</h2>
              <p>
                {p.legacy.text}
                <Cites ids={p.legacy.cite} map={cites} />
              </p>
            </section>
          ) : null}

          {rels.length ? (
            <section className="profile-section" aria-labelledby="rels">
              <h2 id="rels">Documented connections</h2>
              <RelationshipList items={rels} map={cites} />
            </section>
          ) : null}

          {related.length ? (
            <section className="profile-section" aria-labelledby="related">
              <h2 id="related">Related people</h2>
              <ul style={{ listStyle: "none", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                {related.map((r) => (
                  <li key={r.id}><Link className="link-arrow" href={personHref(r)}>{r.name}</Link></li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="profile-section" id="sources" aria-labelledby="src">
            <h2 id="src">Sources</h2>
            <SourceList ids={sourceIds} />
            {p.portrait ? (
              <>
                <h3 className="kicker" style={{ margin: "2rem 0 1rem" }}>Image credits</h3>
                <ImageCredits ids={[p.portrait]} />
              </>
            ) : null}
          </section>

          <div style={{ marginTop: "3rem" }}>
            <CorrectionCta subject={p.name} />
          </div>
        </div>
      </div>

      <section className="section section--tint" aria-labelledby="stories-title">
        <div className="wrap">
          <h2 id="stories-title" className="display h3" style={{ marginBottom: "2.5rem" }}>
            Stories featuring {p.name}
          </h2>
          <div className="story-grid">
            {stories.map((s) => (
              <StoryCard key={s.id} story={s} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
