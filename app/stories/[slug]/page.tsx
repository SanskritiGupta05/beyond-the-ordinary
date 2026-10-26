import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Blocks, ImageCredits, RelationshipList, SourceList, Timeline, makeCiteMap } from "@/components/Article";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StoryCard, StoryVisual } from "@/components/Cards";
import { ClipButton } from "@/components/ClipButton";
import { ShareClipping } from "@/components/ShareClipping";
import { CorrectionCta } from "@/components/CorrectionCta";
import { Figure } from "@/components/Figure";
import { Ja } from "@/components/Ja";
import { RandomStoryButton } from "@/components/RandomStory";
import { StoryRail } from "@/components/StoryRail";
import {
  formatPartialDate,
  getImage,
  getPerson,
  getPrinciple,
  getSource,
  getStories,
  getStory,
  getStoryBySlug,
  personHref,
  principleHref,
  relationshipsFor,
  storyHref,
  storyImageIds,
  storySourceIds,
} from "@/lib/content";
import { journeySteps, orderedSections } from "@/lib/journey";

export const dynamicParams = false;

export function generateStaticParams() {
  return getStories().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/stories/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const story = getStoryBySlug(slug);
  if (!story) return {};
  const hero = story.heroImage ? getImage(story.heroImage) : undefined;
  return {
    title: story.title,
    description: story.dek,
    alternates: { canonical: storyHref(story) },
    openGraph: {
      type: "article",
      title: story.title,
      description: story.dek,
      images: hero ? [{ url: hero.src, width: hero.width, height: hero.height, alt: hero.alt }] : undefined,
    },
  };
}

export default async function StoryPage(props: PageProps<"/stories/[slug]">) {
  const { slug } = await props.params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  const sourceIds = storySourceIds(story);
  const cites = makeCiteMap(sourceIds);
  const sections = orderedSections(story);
  const explore = journeySteps.find((s) => s.step === "explore-further")!;
  const railItems = [
    ...sections.map(({ meta }) => ({ id: meta.step, num: meta.num, label: meta.label })),
    { id: "timeline", num: "—", label: "Timeline" },
    { id: explore.step, num: explore.num, label: explore.label },
    { id: "sources", num: "—", label: "Sources & credits" },
  ];
  const people = story.people.map((id) => getPerson(id)!);
  const related = story.related.map((id) => getStory(id)!);
  const principles = story.principles.map((id) => getPrinciple(id)!);
  const rels = relationshipsFor({ kind: "story", id: story.id });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.dek,
    about: story.subject,
    dateModified: story.reviewed,
    image: story.heroImage ? getImage(story.heroImage).src : undefined,
    citation: sourceIds.map((id) => ({ "@type": "CreativeWork", name: getSource(id)?.title, url: getSource(id)?.url })),
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <header className="wrap story-head">
        <span className="ghost-num" aria-hidden="true">{story.originDate.slice(0, 4)}</span>
        {story.subjectJa ? (
          <p className="tate story-head__tate" lang="ja">
            {story.subjectJa}
          </p>
        ) : null}
        <Breadcrumbs items={[{ href: "/stories", label: "Everyday Innovations" }, { label: story.subject }]} />
        <p className="kicker kicker--accent" style={{ marginTop: "2.5rem" }}>
          {story.category} · The journey of an idea
        </p>
        <h1 className="display story-head__title">{story.title}</h1>
        <p className="lede story-head__dek">{story.dek}</p>
        <dl className="story-meta">
          <div>
            <dt>Subject</dt>
            <dd>
              {story.subject}
              {story.alternativeNames?.length ? <span className="muted"> · also <Ja>{story.alternativeNames.join(", ")}</Ja></span> : null}
            </dd>
          </div>
          <div>
            <dt>Origin</dt>
            <dd>{story.originDateLabel} · {story.originLocation}</dd>
          </div>
          <div>
            <dt>People</dt>
            <dd>
              {people.map((p, i) => (
                <span key={p.id}>
                  {i > 0 ? ", " : ""}
                  <Link href={personHref(p)}>{p.name}</Link>
                </span>
              ))}
              {story.collaborators?.length ? <span className="muted"> and collaborators</span> : null}
            </dd>
          </div>
          <div>
            <dt>Reading · Reviewed</dt>
            <dd>{story.readingMinutes} min · {formatPartialDate(story.reviewed)}</dd>
          </div>
          {story.palette ? (
            <div aria-hidden="true">
              <div className="palette">
                {story.palette.map((c) => (
                  <i key={c} style={{ background: c }} />
                ))}
              </div>
              <p className="palette-label">Colour
                <br />
                picture</p>
            </div>
          ) : null}
        </dl>
        <ClipButton clip={{ id: story.id, href: storyHref(story), title: story.title, subject: story.subject, subjectJa: story.subjectJa, category: story.category }} />
      </header>
      <ShareClipping containerId="story-body" title={story.title} path={storyHref(story)} />

      <div className="wrap story-hero">
        {story.heroImage ? <Figure id={story.heroImage} priority sizes="100vw" /> : <StoryVisual story={story} className="story-hero__placeholder" />}
      </div>

      <div className="wrap story-layout">
        <div className="story-rail">
          <StoryRail items={railItems} />
        </div>

        <div className="story-body" id="story-body">
          <div className="summary-block bracket">
            <p className="kicker" style={{ marginBottom: "0.75rem" }}>In short</p>
            <p>{story.summary}</p>
          </div>

          {sections.map(({ meta, section }) => (
            <section key={meta.step} id={meta.step} className="step" aria-labelledby={`h-${meta.step}`}>
              <p className="step__label">
                <span className="step__num">{meta.num}</span>
                <span className="kicker">{meta.label}</span>
              </p>
              <h2 id={`h-${meta.step}`} className="step__heading">{section.heading}</h2>
              <div className="step__content">
                <Blocks blocks={section.blocks} map={cites} />
                {meta.step === "world-today" && story.limitations?.length ? (
                  <div>
                    <h3 className="kicker" style={{ marginBottom: "1rem" }}>Limitations and criticisms</h3>
                    <ul className="limits">
                      {story.limitations.map((l) => (
                        <li key={l.text}>
                          {l.text}
                          {l.cite?.length ? (
                            <span className="cite">
                              {l.cite.map((id) => (
                                <a key={id} href={`#src-${id}`}>[{cites.get(id)}]</a>
                              ))}
                            </span>
                          ) : (
                            <span className="meta"> (editorial note)</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </section>
          ))}

          <section id="timeline" className="step" aria-labelledby="h-timeline">
            <p className="step__label"><span className="kicker">Timeline</span></p>
            <h2 id="h-timeline" className="step__heading">Key dates</h2>
            <Timeline events={story.timeline} map={cites} />
          </section>

          <section id={explore.step} className="step" aria-labelledby="h-explore">
            <p className="step__label">
              <span className="step__num">{explore.num}</span>
              <span className="kicker">{explore.label}</span>
            </p>
            <h2 id="h-explore" className="step__heading">Connections</h2>
            <div className="explore">
              <div>
                <h3>People</h3>
                <ul>
                  {people.map((p) => (
                    <li key={p.id}><Link href={personHref(p)}>{p.name}</Link></li>
                  ))}
                </ul>
                {story.collaborators?.length ? (
                  <>
                    <h3 style={{ marginTop: "1.5rem" }}>Also credited</h3>
                    <ul className="small">
                      {story.collaborators.map((c) => (
                        <li key={c.name}><strong style={{ fontWeight: 500 }}>{c.name}</strong> — <span className="muted">{c.role}</span></li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </div>
              <div>
                <h3>Principles</h3>
                <ul>
                  {principles.map((p) => (
                    <li key={p.id}><Link href={principleHref(p)}>{p.name}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Related stories</h3>
                <ul>
                  {related.map((r) => (
                    <li key={r.id}><Link href={storyHref(r)}>{r.subject}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
            {rels.length ? (
              <div style={{ marginTop: "3rem" }}>
                <h3 className="kicker" style={{ marginBottom: "1rem" }}>Documented relationships</h3>
                <RelationshipList items={rels} map={cites} />
              </div>
            ) : null}
          </section>

          <section id="sources" className="step" aria-labelledby="h-sources">
            <p className="step__label"><span className="kicker">Sources &amp; credits</span></p>
            <h2 id="h-sources" className="step__heading">Where this comes from</h2>
            <p className="muted small" style={{ maxWidth: "38rem", marginBottom: "1.5rem" }}>
              Numbers in the text link here. Open a source to see exactly which claims it supports and how carefully we have
              checked it. Passages marked <em>Editorial interpretation</em> are our analysis, not documented history.
            </p>
            <SourceList ids={sourceIds} />
            <h3 className="kicker" style={{ margin: "2.5rem 0 1rem" }}>Image credits</h3>
            <ImageCredits ids={storyImageIds(story)} />
          </section>

          <CorrectionCta subject={story.subject} />
        </div>

        <aside className="story-aside" aria-label="Reading notes">
          <div style={{ position: "sticky", top: "calc(var(--header-h) + 1.5rem)" }}>
            <p className="kicker" style={{ marginBottom: "0.75rem" }}>How to read</p>
            <p><span aria-hidden="true">◇</span> Editorial interpretation</p>
            <p style={{ marginTop: "0.4rem" }}><span aria-hidden="true">?</span> Uncertain or unverified</p>
            <p style={{ marginTop: "0.4rem" }}>[1] Numbered source</p>
          </div>
        </aside>
      </div>

      <section className="section section--tint" aria-labelledby="next-title">
        <div className="wrap">
          <header className="section-head">
            <p className="section-head__num">Continue</p>
            <h2 id="next-title" className="display h3 section-head__title">Related stories</h2>
            <div className="section-head__aside">
              <RandomStoryButton hrefs={getStories().map(storyHref)} label="Surprise me" />
            </div>
          </header>
          <div className="story-grid">
            {related.map((r) => (
              <StoryCard key={r.id} story={r} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
