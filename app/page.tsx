import Link from "next/link";
import { PersonCard, StoryCard } from "@/components/Cards";
import { Figure } from "@/components/Figure";
import { Journey, JourneyLegend } from "@/components/Journey";
import { RandomStoryButton } from "@/components/RandomStory";
import { Serendipity } from "@/components/Serendipity";
import { getDiscoveries, getImage, getPeople, getPrinciples, getSources, getStories, getStory, principleHref, storyHref } from "@/lib/content";

export default function HomePage() {
  const stories = getStories();
  const people = getPeople();
  const principles = getPrinciples();
  const featured = getStory("tactile-paving")!;
  const overlooked = ["tactile-paving", "qr-code", "butterfly-stool"].map((id) => getStory(id)!);
  const more = stories.filter((s) => !overlooked.includes(s));
  const global = stories.filter((s) => s.globalReach);
  const hrefs = stories.map(storyHref);
  const discoveries = getDiscoveries().map((d) => {
    const s = getStory(d.story)!;
    return { fact: d.fact, storyTitle: s.title, subject: s.subject, href: storyHref(s) };
  });

  return (
    <>
      {/* 1 · Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap grid">
          <div className="hero__copy">
            <p className="kicker">Beyond the Ordinary · An independent archive of Japanese design</p>
            <h1 id="hero-title" className="display hero__title">
              The world is full of design stories we&rsquo;ve never <em>stopped to notice.</em>
            </h1>
            <p className="hero__text">
              From the tactile paving beneath our feet to the technology in our pockets, discover the Japanese ideas,
              people, and innovations that have shaped our everyday lives.
            </p>
            <div className="hero__actions">
              <Link href="/archive" className="btn">
                Explore the archive <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <RandomStoryButton hrefs={hrefs} />
            </div>
            <div className="hero__meta">
              <div><strong>{stories.length}</strong><span className="meta">researched stories</span></div>
              <div><strong>{people.length}</strong><span className="meta">people</span></div>
              <div><strong>{getSources().length}</strong><span className="meta">cited sources</span></div>
            </div>
          </div>
          <div className="hero__visual">
            <Figure id="okayama-birthplace-1" bare priority className="hero__main" sizes="(max-width: 900px) 100vw, 50vw" />
            <Figure id="tactile-japan-yellow" bare className="hero__inset" sizes="(max-width: 900px) 40vw, 20vw" />
            <p className="hero__label">
              <span className="kicker kicker--accent">Fig. 1 · Okayama, 1967</span>
              <br />
              The street where tactile paving was first laid.{" "}
              <Link href={storyHref(featured)}>Read the story</Link>
              <br />
              <span className="meta" style={{ fontSize: "0.68rem" }}>{getImage("okayama-birthplace-1").attribution}</span>
            </p>
          </div>
        </div>
      </section>

      {/* 2 · The things we overlook */}
      <section className="section" aria-labelledby="overlooked-title">
        <div className="wrap">
          <header className="section-head">
            <p className="section-head__num">01 — Everyday innovations</p>
            <h2 id="overlooked-title" className="display h2 section-head__title">The things we overlook</h2>
            <div className="section-head__aside">
              <p>You&rsquo;ve seen it a thousand times. Here&rsquo;s the story behind it.</p>
              <Link href="/stories" className="link-arrow">All everyday innovations →</Link>
            </div>
          </header>
          <div className="grid overlooked">
            <StoryCard story={overlooked[0]} size="lg" imageId="okayama-birthplace-2" sizes="(max-width: 900px) 100vw, 55vw" />
            <StoryCard story={overlooked[1]} sizes="(max-width: 900px) 100vw, 30vw" />
            <StoryCard story={overlooked[2]} sizes="(max-width: 900px) 100vw, 25vw" />
          </div>
        </div>
      </section>

      {/* 3 · People behind the ideas */}
      <section className="section section--tint" aria-labelledby="people-title">
        <div className="wrap">
          <header className="section-head">
            <p className="section-head__num">02 — People</p>
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

      {/* 6 · More to discover */}
      <section className="section section--tint" aria-labelledby="more-title">
        <div className="wrap">
          <header className="section-head">
            <p className="section-head__num">05 — More to discover</p>
            <h2 id="more-title" className="display h2 section-head__title">Keep exploring</h2>
            <div className="section-head__aside">
              <p>Graphic systems, everyday products, and the ideas that connect them.</p>
            </div>
          </header>
          <div className="discover">
            <ul className="mini-list">
              {more.map((s) => (
                <li key={s.id} className="mini-item">
                  <Link href={storyHref(s)}>
                    <Figure id={s.cardImage ?? s.heroImage} bare className="mini-item__img" sizes="128px" />
                    <span>
                      <span className="kicker kicker--accent">{s.category} · {s.originDateLabel}</span>
                      <span className="mini-item__title" style={{ display: "block", marginTop: "0.35rem" }}>{s.title}</span>
                      <span className="muted small" style={{ display: "block", marginTop: "0.35rem" }}>{s.subject}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Serendipity items={discoveries} />
          </div>
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
              <Link href="/about#corrections" className="link-arrow">Suggest a story or a correction</Link>
              <Link href="/sources" className="link-arrow">How the research works</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
