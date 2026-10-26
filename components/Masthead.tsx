import Link from "next/link";
import { getSources, getStories } from "@/lib/content";
import { site } from "@/lib/site";

/** Newspaper nameplate and dateline at the top of every sheet; full size on the front page. */
export function Masthead() {
  const stories = getStories().length;
  const reviewed = new Date(site.datasetReviewed).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  return (
    <header className="masthead">
      <div className="wrap">
        <div className="masthead__top">
          <p className="masthead__ear">
            Vol. 01 · No. {String(stories).padStart(2, "0")}
            <br />
            {stories} stories, {getSources().length} sources
          </p>
          <Link href="/" className="masthead__name">
            <span className="masthead__en">{site.name}</span>
            <span className="masthead__ja" lang="ja">
              {site.nameJa}
            </span>
          </Link>
          <p className="masthead__ear masthead__ear--right">
            An independent archive
            <br />
            of Japanese design
          </p>
        </div>
        <p className="masthead__dateline">
          <span>Reviewed {reviewed}</span>
          <span>{site.subtitle}</span>
          <span>Free · corrections welcome</span>
        </p>
      </div>
    </header>
  );
}
