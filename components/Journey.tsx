import Link from "next/link";
import { formatPartialDate, storyHref } from "@/lib/content";
import type { Story } from "@/lib/types";

const phaseLabel = { origin: "Origin in Japan", development: "Development", spread: "Adoption beyond Japan", today: "Recent" } as const;

export function JourneyLegend() {
  return (
    <div className="legend" aria-hidden="true">
      <span><i className="l-origin" /> Origin in Japan</span>
      <span><i className="l-dev" /> Development</span>
      <span><i className="l-spread" /> Adoption &amp; legacy</span>
    </div>
  );
}

export function Journey({ story }: { story: Story }) {
  return (
    <article className="journey">
      <div>
        <p className="kicker">{story.category}</p>
        <h3 className="journey__title">
          <Link href={storyHref(story)}>{story.subject}</Link>
        </h3>
      </div>
      <ol className="journey__track" aria-label={`Timeline: ${story.subject}`}>
        {story.timeline.map((t) => (
          <li key={t.date + t.label} className="journey__stop" data-phase={t.phase}>
            <span className="journey__date">{formatPartialDate(t.date)}</span>
            <span className="visually-hidden">{phaseLabel[t.phase]}: </span>
            {t.label}
            {t.place ? <span className="journey__place">{t.place}</span> : null}
          </li>
        ))}
      </ol>
    </article>
  );
}
