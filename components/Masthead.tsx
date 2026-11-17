import Link from "next/link";
import { getSources, getStories } from "@/lib/content";
import { site } from "@/lib/site";
import { VisitorCount } from "./VisitorCount";

/** Newspaper nameplate and dateline at the top of every sheet; full size on the front page. `back` sets it for the back page shown while the paper unfolds. */
export function Masthead({ back = false }: { back?: boolean } = {}) {
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
          <span>{back ? <>Back page · <span lang="ja">裏面</span></> : site.subtitle}</span>
          <span className="masthead__right">
            <VisitorCount />
            <span>Free · corrections welcome</span>
          </span>
        </p>
      </div>
    </header>
  );
}
