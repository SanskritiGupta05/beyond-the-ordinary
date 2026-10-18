import Link from "next/link";
import { getPerson, personHref, storyHref } from "@/lib/content";
import type { Person, Story } from "@/lib/types";
import { Figure } from "./Figure";

export function StoryCard({ story, size, imageId, sizes }: { story: Story; size?: "lg"; imageId?: string; sizes?: string }) {
  const names = story.people.map((id) => getPerson(id)?.name).filter(Boolean).join(", ");
  return (
    <Link href={storyHref(story)} className={`card ${size === "lg" ? "card--lg" : ""}`}>
      <Figure id={imageId ?? story.cardImage ?? story.heroImage} bare className="card__img" sizes={sizes ?? "(max-width: 900px) 100vw, 40vw"} />
      <div className="card__body">
        <div className="card__meta">
          <span className="kicker kicker--accent">{story.category}</span>
          <span className="meta">{story.originDateLabel}</span>
        </div>
        <h3 className="card__title">{story.title}</h3>
        <p className="card__dek">{story.dek}</p>
        <p className="meta">
          {story.subject}
          {names && !story.subject.includes(names.split(",")[0]) ? ` · ${names}` : ""}
        </p>
      </div>
    </Link>
  );
}

/** Portrait, or a typographic placeholder when no appropriately licensed portrait exists. */
export function Portrait({ person, className = "", sizes }: { person: Person; className?: string; sizes?: string }) {
  if (person.portrait) return <Figure id={person.portrait} bare className={className} sizes={sizes ?? "(max-width: 1000px) 50vw, 20vw"} />;
  return (
    <div className={`figure__img placeholder ${className}`} role="img" aria-label={`No licensed portrait of ${person.name} yet`}>
      <div>
        {person.nameJa ? (
          <span className="placeholder__ja" lang="ja" aria-hidden="true">
            {person.nameJa}
          </span>
        ) : null}
        <p className="placeholder__note">Portrait not yet licensed</p>
      </div>
    </div>
  );
}

export function PersonCard({ person }: { person: Person }) {
  return (
    <Link href={personHref(person)} className="person-card">
      <Portrait person={person} className="person-card__img" />
      <div>
        <p className="person-card__name">{person.name}</p>
        {person.nameJa ? (
          <p className="meta ja" lang="ja">
            {person.nameJa}
          </p>
        ) : null}
      </div>
      <p className="person-card__role">{person.intro}</p>
    </Link>
  );
}
