import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { sectionJa } from "@/lib/site";
import { StoryCard } from "@/components/Cards";
import { RandomStoryButton } from "@/components/RandomStory";
import { getStories, storyHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "Everyday Innovations",
  description: "You've seen it a thousand times. Here's the story behind it — objects, systems and inventions from Japan, researched and sourced.",
};

export default function StoriesPage() {
  const stories = getStories();
  return (
    <>
      <header className="wrap page-head">
        <p className="tate page-head__tate" lang="ja">{sectionJa.overlooked}</p>
        <Breadcrumbs items={[{ label: "Everyday Innovations" }]} />
        <h1 className="display page-head__title">You&rsquo;ve seen it a thousand times.</h1>
        <p className="lede page-head__lede">
          Here&rsquo;s the story behind it. Each entry follows the journey of an idea — the problem, the people, the decisions,
          and where it went next.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "2rem" }}>
          <Link href="/archive" className="btn">Search &amp; filter <span className="arrow" aria-hidden="true">→</span></Link>
          <RandomStoryButton hrefs={stories.map(storyHref)} />
        </div>
      </header>
      <section className="section">
        <div className="wrap story-grid">
          {stories.map((s, i) => (
            <StoryCard key={s.id} story={s} size={i === 0 ? "lg" : undefined} />
          ))}
        </div>
      </section>
    </>
  );
}
