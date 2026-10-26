import Link from "next/link";
import { PersonCard, StoryVisual } from "@/components/Cards";
import { Figure } from "@/components/Figure";
import { Journey, JourneyLegend } from "@/components/Journey";
import { RandomStoryButton } from "@/components/RandomStory";
import { Serendipity } from "@/components/Serendipity";
import { TodayInDesign, type DatedEvent } from "@/components/TodayInDesign";
import { sectionJa } from "@/lib/site";
import { getDiscoveries, getPeople, getPerson, getPrinciples, getSources, getStories, getStory, principleHref, storyHref } from "@/lib/content";
import type { Story } from "@/lib/types";

/** The first documented paragraphs of a story, for front-page columns. */
function opening(story: Story, count: number) {
  return story.sections
    .flatMap((section) => section.blocks)
    .flatMap((block) => (block.kind === "p" ? [block.text] : []))
    .slice(0, count);
}

/** A short story item: kicker, headline and dek. */
function Brief({ story }: { story: Story }) {
  return (
    <div className="brief">
      <p className="kicker">{story.category} · {story.originDateLabel}</p>
      {story.subjectJa ? <p className="ja-hed brief__ja" lang="ja">{story.subjectJa}</p> : null}
      <h3 className="hed hed--m"><Link href={storyHref(story)}>{story.title}</Link></h3>
      <p>{story.dek}</p>
    </div>
  );
}

export default function HomePage() {
  const stories = getStories();
  const people = getPeople();
  const principles = getPrinciples();
  const lead = getStory("tactile-paving")!;
  const second = getStory("exit-sign")!;
  const briefs = ["qr-code", "cup-noodles", "walkman"].map((id) => getStory(id)!);
  const global = stories.filter((s) => s.globalReach);
  const hrefs = stories.map(storyHref);
  const discoveries = getDiscoveries().map((d) => {
    const s = getStory(d.story)!;
    return { fact: d.fact, storyTitle: s.title, subject: s.subject, href: storyHref(s) };
  });
  // Timeline events with a full date, for "Today in Japanese design"
  const dated: DatedEvent[] = stories.flatMap((s) =>
    s.timeline
      .filter((e) => /^\d{4}-\d{2}-\d{2}$/.test(e.date))
      .map((e) => ({ date: e.date, label: e.label, story: s.subject, storyJa: s.subjectJa, href: storyHref(s) })),
  );
  const byline = (s: Story) =>
    [s.subject, s.people.map((id) => getPerson(id)?.name).filter(Boolean).join(" & "), `${s.readingMinutes} min read`, `Reviewed ${s.reviewed}`]
      .filter(Boolean)
      .join(" · ");

  return (
    <>
      {/* 1 · Front page */}
      <section className="front" aria-labelledby="front-title">
        <div className="wrap">
          <div className="front__promise">
            <div>
              <h1 id="front-title" className="front__promise-title">
                The world is full of design stories we&rsquo;ve never stopped to notice.
              </h1>
              <p className="front__promise-text">
                From the tactile paving beneath our feet to the technology in our pockets, discover the Japanese ideas,
                people, and innovations that have shaped our everyday lives.
              </p>
            </div>
            <div className="front__actions">
              <Link href="/archive" className="btn">
                Explore the archive <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <RandomStoryButton hrefs={hrefs} />
            </div>
          </div>

          <TodayInDesign events={dated} />

          <div className="spread">
            {/* Left page: the lead story */}
            <article className="spread__page" aria-labelledby="lead-title">
              <p className="kicker">{lead.category} · {lead.originLocation}, {lead.originDateLabel}</p>
              <div className="front__head">
                <p className="ja-hed ja-hed--tate" lang="ja">{lead.subjectJa}</p>
                <div>
                  <h2 id="lead-title" className="hed hed--xl"><Link href={storyHref(lead)}>{lead.title}</Link></h2>
                  <p className="dek">{lead.dek}</p>
                </div>
              </div>
              <p className="byline">{byline(lead)}</p>
              <div className="front__lead">
                <div className="columns columns--2">
                  {opening(lead, 4).map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                  <p className="continued"><Link href={storyHref(lead)}>Continued: read the full story →</Link></p>
                </div>
                <Figure id="okayama-birthplace-2" className="front__photo" sizes="(max-width: 900px) 100vw, 18vw" />
              </div>
              <div className="front__row">
                <Brief story={briefs[0]} />
                <Serendipity items={discoveries} />
              </div>
            </article>

            {/* Right page: second story and briefs */}
            <article className="spread__page" aria-labelledby="second-title">
              <p className="kicker">{second.category} · {second.originDateLabel}</p>
              <div className="front__head">
                <p className="ja-hed ja-hed--tate is-small" lang="ja">{second.subjectJa}</p>
                <div>
                  <h2 id="second-title" className="hed hed--l"><Link href={storyHref(second)}>{second.title}</Link></h2>
                  <p className="dek">{second.dek}</p>
                </div>
              </div>
              <Figure id="exit-sign-running-man" className="front__wide" sizes="(max-width: 900px) 100vw, 40vw" />
              <div className="columns columns--3">
                {opening(second, 3).map((t) => (
                  <p key={t}>{t}</p>
                ))}
                <p className="continued"><Link href={storyHref(second)}>Continued →</Link></p>
              </div>
              <div className="front__row">
                <Brief story={briefs[1]} />
                <Brief story={briefs[2]} />
              </div>
              <dl className="front__stats">
                <div><dt>Stories</dt><dd>{String(stories.length).padStart(2, "0")}</dd></div>
                <div><dt>People</dt><dd>{String(people.length).padStart(2, "0")}</dd></div>
                <div><dt>Cited sources</dt><dd>{getSources().length}</dd></div>
              </dl>
            </article>
          </div>
        </div>
      </section>

      {/* 2 · Inside this edition */}
      <section className="section" aria-labelledby="index-title">
        <div className="wrap">
          <header className="section-head">
            <p className="section-head__num">01 — Index</p>
            <p className="tate section-head__ja" lang="ja">{sectionJa.index}</p>
            <h2 id="index-title" className="display h2 section-head__title">Inside this edition</h2>
            <div className="section-head__aside">
              <p>Every story in the archive, from the pavement under your feet to the cooker on the counter.</p>
              <Link href="/stories" className="link-arrow">All everyday innovations →</Link>
            </div>
          </header>
          <ol className="edition-index">
            {stories.map((s, i) => (
              <li key={s.id}>
                <Link href={storyHref(s)}>
                  <StoryVisual story={s} className="edition-index__img mono" sizes="(max-width: 900px) 50vw, 18vw" />
                  <span className="edition-index__pg">A{i + 1} · {s.category}</span>
                  {s.subjectJa ? <span className="ja-hed edition-index__ja" lang="ja">{s.subjectJa}</span> : null}
                  <span className="hed hed--s">{s.title}</span>
                  <span className="edition-index__sub">{s.subject} · {s.originDateLabel}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3 · People behind the ideas */}
      <section className="section section--tint" aria-labelledby="people-title">
        <div className="wrap">
          <header className="section-head">
            <p className="section-head__num">02 — People</p>
            <p className="tate section-head__ja" lang="ja">{sectionJa.people}</p>
            <h2 id="people-title" className="display h2 section-head__title">People behind the ideas</h2>
            <div className="section-head__aside">
              <p>Inventors, engineers and designers. Not everyone here would call themselves a designer — design is simply the lens we use to look at their work.</p>
              <Link href="/people" className="link-arrow">Meet everyone →</Link>
            </div>
          </header>
          <div className="people-row">
            {people.map((p) => (
              <PersonCard key={p.id} person={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 4 · From Japan to the world */}
      <section className="section section--ink" aria-labelledby="world-title">
        <div className="wrap">
          <header className="section-head">
            <p className="section-head__num">03 — Influence</p>
            <p className="tate section-head__ja" lang="ja">{sectionJa.world}</p>
            <h2 id="world-title" className="display h2 section-head__title">From Japan to the world</h2>
            <div className="section-head__aside">
              <p>How ideas that began in Japan were adopted and adapted elsewhere — traced through documented events, not assumptions.</p>
              <Link href="/influence" className="link-arrow">See every documented connection →</Link>
            </div>
          </header>
          <div className="journeys">
            {global.map((s) => (
              <Journey key={s.id} story={s} />
            ))}
          </div>
          <JourneyLegend />
        </div>
      </section>

      {/* 5 · Thinking behind the work */}
      <section className="section" aria-labelledby="thinking-title">
        <div className="wrap">
          <header className="section-head">
            <p className="section-head__num">04 — Design thinking</p>
            <p className="tate section-head__ja" lang="ja">{sectionJa.thinking}</p>
            <h2 id="thinking-title" className="display h2 section-head__title">The thinking behind the work</h2>
            <div className="section-head__aside">
              <p>Principles drawn from real decisions in real objects — each one traced back to the stories where it appears.</p>
            </div>
          </header>
          <ol className="principle-list">
            {principles.map((p, i) => (
              <li key={p.id} className="principle-item">
                <Link href={principleHref(p)}>
                  <span className="principle-item__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="principle-item__name">{p.name}</span>
                  <span className="principle-item__q">
                    {p.question}
                    <span className="meta" style={{ display: "block", marginTop: "0.4rem" }}>
                      Seen in: {p.stories.map((id) => getStory(id)!.subject).join(" · ")}
                    </span>
                  </span>
                  <span className="principle-item__arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7 · Note from the creator */}
      <section className="section" aria-labelledby="note-title">
        <div className="wrap grid">
          <div className="note">
            <p className="kicker" id="note-title">A note from the creator</p>
            <div className="note__body" style={{ marginTop: "1.5rem" }}>
              <p>I&rsquo;m a product designer fascinated by the decisions that shape the things we interact with every day.</p>
              <p>
                The more I learned about Japanese design, the more I wanted to understand the people behind these ideas, the
                problems they were solving, and the ways their work has influenced the world.
              </p>
              <p>This archive is my attempt to explore those stories, document what I learn, and share the insights with other designers.</p>
              <p>It&rsquo;s a growing project, and I&rsquo;m always looking for stories, perspectives, and people I should know about.</p>
            </div>
            <div className="note__sign">
              <Link href="/submit" className="link-arrow">Suggest a story or a correction</Link>
              <Link href="/sources" className="link-arrow">How the research works</Link>
            </div>
          </div>
          <p className="tate note-tate" lang="ja">
            {sectionJa.note}
          </p>
        </div>
      </section>
    </>
  );
}
