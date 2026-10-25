import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site, sectionJa } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the Project",
  description: "Why this archive exists, who is behind it, what it does not claim to be, and how to suggest corrections or new stories.",
};

export default function AboutPage() {
  return (
    <>
      <header className="wrap page-head">
        <p className="tate page-head__tate" lang="ja">{sectionJa.about}</p>
        <Breadcrumbs items={[{ label: "About" }]} />
        <h1 className="display page-head__title">About the project</h1>
        <p className="lede page-head__lede">{site.tagline}</p>
      </header>

      <section className="section">
        <div className="wrap two-col">
          <div><h2>What this is</h2></div>
          <div className="prose">
            <p>
              {site.name} is an independent editorial archive about Japanese design, the people behind it, and ideas that have
              travelled far beyond where they began. It is built around three things: <strong>discovery</strong> — finding the
              stories behind familiar objects; <strong>understanding</strong> — the problems, decisions and context behind them;
              and <strong>influence</strong> — how ideas developed in Japan were adopted or adapted elsewhere.
            </p>
            <p>
              Not every entry is about global impact. Some simply document work that is worth understanding. Not everyone featured
              is a professional designer: inventors, engineers and craftspeople appear too, because design is the lens rather than
              the job title.
            </p>
          </div>
        </div>

        <div className="wrap two-col">
          <div><h2>What this isn&rsquo;t</h2></div>
          <div className="prose">
            <p>
              It is not a comprehensive or authoritative account of Japanese design, and it does not present Japanese design as one
              aesthetic. It is a growing collection, researched by a product designer who is learning and sharing along the way.
              Japanese designers and researchers know this field far better, and their corrections are the most valuable thing
              this project can receive.
            </p>
          </div>
        </div>

        <div className="wrap two-col">
          <div><h2>A note from the creator</h2></div>
          <div className="prose">
            <p>I&rsquo;m a product designer fascinated by the decisions that shape the things we interact with every day.</p>
            <p>
              The more I learned about Japanese design, the more I wanted to understand the people behind these ideas, the problems
              they were solving, and the ways their work has influenced the world.
            </p>
            <p>This archive is my attempt to explore those stories, document what I learn, and share the insights with other designers.</p>
            <p>It&rsquo;s a growing project, and I&rsquo;m always looking for stories, perspectives, and people I should know about.</p>
          </div>
        </div>

        <div className="wrap two-col" id="corrections">
          <div><h2>Suggestions &amp; corrections</h2></div>
          <div className="prose">
            <p>Especially welcome:</p>
            <ul>
              <li>Corrections to names, dates, roles or attributions — with a source if you have one.</li>
              <li>Primary sources, archives or Japanese-language material we should read.</li>
              <li>People and stories that belong here, especially from disciplines and regions we haven&rsquo;t covered.</li>
              <li>Licensed images, or rights holders willing to share them.</li>
            </ul>
            <p style={{ marginTop: "1.5rem" }}>
              <Link className="btn" href="/submit">
                Open the suggestion form <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </p>
            <p className="small muted" style={{ marginTop: "1rem" }}>
              Every story page has its own &ldquo;Suggest a correction&rdquo; link. We note significant corrections on the affected
              page by updating its review date.
            </p>
          </div>
        </div>

        <div className="wrap two-col">
          <div><h2>What&rsquo;s next</h2></div>
          <div className="prose">
            <p>
              The first release is deliberately small: five stories, five profiles and five principles. Next come more subjects
              across craft, architecture, packaging and digital interaction, and a careful treatment of concepts like ma and
              wabi-sabi. Read <Link href="/sources">how the research works</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
