import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cites, SourceList, makeCiteMap } from "@/components/Article";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StoryCard, StoryVisual } from "@/components/Cards";
import { getPerson, getPrincipleBySlug, getPrinciples, getStory, personHref, principleHref, storyHref } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPrinciples().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/thinking/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const p = getPrincipleBySlug(slug);
  if (!p) return {};
  return { title: p.name, description: p.question, alternates: { canonical: principleHref(p) } };
}

export default async function PrinciplePage(props: PageProps<"/thinking/[slug]">) {
  const { slug } = await props.params;
  const p = getPrincipleBySlug(slug);
  if (!p) notFound();

  const ids: string[] = [];
  [...p.examples.flatMap((e) => e.cite ?? []), ...p.sources].forEach((id) => !ids.includes(id) && ids.push(id));
  const cites = makeCiteMap(ids);
  const all = getPrinciples();
  const next = all[(all.indexOf(p) + 1) % all.length];

  return (
    <article>
      <header className="wrap page-head">
        <Breadcrumbs items={[{ href: "/thinking", label: "Thinking" }, { label: p.name }]} />
        <p className="kicker kicker--accent" style={{ marginTop: "2.5rem" }}>Design principle</p>
        <h1 className="display page-head__title" style={{ maxWidth: "20ch" }}>{p.name}</h1>
        <p className="lede page-head__lede">{p.question}</p>
      </header>

      <section className="section">
        <div className="wrap two-col">
          <div><h2>The idea</h2></div>
          <div className="prose">
            <p>{p.explanation}</p>
            {p.context ? <p>{p.context}</p> : null}
            {p.caution ? (
              <aside className="callout callout--uncertain" style={{ marginTop: "1.5rem" }} aria-label="Limits of this principle">
                <p className="callout__label"><span aria-hidden="true">!</span> Limits</p>
                <p>{p.caution}</p>
              </aside>
            ) : null}
          </div>
        </div>

        <div className="wrap two-col">
          <div><h2>Where it appears</h2></div>
          <ol style={{ listStyle: "none", display: "grid", gap: "2.5rem" }}>
            {p.examples.map((e) => {
              const s = getStory(e.story)!;
              return (
                <li key={e.story + e.text} style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)", gap: "1.5rem", alignItems: "start" }}>
                  <StoryVisual story={s} className="mini-item__img" sizes="240px" />
                  <div>
                    <p className="kicker kicker--accent">{s.subject}</p>
                    <p className="display h4" style={{ marginTop: "0.5rem" }}>
                      {e.text}
                      <Cites ids={e.cite} map={cites} />
                    </p>
                    <Link className="link-arrow" href={`${storyHref(s)}#design-decision`} style={{ marginTop: "1rem" }}>
                      Read the story →
                    </Link>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="wrap two-col">
          <div><h2>People</h2></div>
          <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
            {p.people.map((id) => {
              const person = getPerson(id)!;
              return (
                <li key={id}><Link className="link-arrow" href={personHref(person)}>{person.name}</Link></li>
              );
            })}
          </ul>
        </div>

        <div className="wrap two-col" id="sources">
          <div><h2>Sources</h2></div>
          <SourceList ids={ids} />
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <p className="kicker">Next principle</p>
          <Link href={principleHref(next)} className="display h3" style={{ display: "inline-block", marginTop: "0.75rem", textDecoration: "none" }}>
            {next.name} →
          </Link>
          <div className="story-grid" style={{ marginTop: "3rem" }}>
            {p.stories.slice(0, 2).map((id) => (
              <StoryCard key={id} story={getStory(id)!} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
