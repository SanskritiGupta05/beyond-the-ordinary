import { getDiscoveries, getSources, getStories } from "@/lib/content";
import { site } from "@/lib/site";

/**
 * The back of the newspaper, seen only while it unfolds (components/Unfold.tsx
 * copies these hidden templates onto the paper as it opens). Everything on it
 * comes from the archive itself: the edition's stories and its sourced facts.
 *
 * Both templates are sheet-sized. "half" fills the right half: the back of the
 * left half of the paper, which lies over the right half while it is folded.
 * "quarter" fills the top-right quarter: the outside of the fully folded paper.
 */
export function BackPage() {
  const stories = getStories();
  const facts = getDiscoveries();
  const sources = getSources().length;
  const year = (d: string) => d.slice(0, 4);
  const reviewed = new Date(site.datasetReviewed).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  // The masthead, as on the front page (components/Masthead.tsx), set to fit a half or quarter of the sheet.
  const mast = (
    <header className="backpage__mast">
      <div className="backpage__mast-top">
        <p className="backpage__ear">
          Vol. 01 · No. {String(stories.length).padStart(2, "0")}
          <br />
          {stories.length} stories, {sources} sources
        </p>
        <p className="backpage__nameplate">
          <span className="backpage__en">{site.name}</span>
          <span className="backpage__ja" lang="ja">{site.nameJa}</span>
        </p>
        <p className="backpage__ear backpage__ear--right">
          An independent archive
          <br />
          of Japanese design
        </p>
      </div>
      <p className="backpage__dateline">
        <span>Reviewed {reviewed}</span>
        <span>Back page · 裏面</span>
        <span>Free · corrections welcome</span>
      </p>
    </header>
  );
  // Facts on the two faces, chosen by the edition number so they change as the archive grows.
  const pick = stories.length % Math.max(1, facts.length - 1);

  return (
    <div className="unfold-templates" hidden aria-hidden="true">
      <div className="sheet backpage" data-unfold="half">
        <div className="backpage__half">
          {mast}
          <h2 className="backpage__hed">In this edition</h2>
          <ol className="backpage__index">
            {stories.map((s) => (
              <li key={s.id}>
                <span>{s.subject}</span>
                <span className="backpage__year">{year(s.originDate)}</span>
              </li>
            ))}
          </ol>
          <div className="backpage__box">
            <p className="backpage__kicker">Did you know?</p>
            {facts.map((f, i) => (
              <p key={i} className="backpage__fact" data-fact={i} data-show={i === pick + 1 ? "" : undefined}>
                {f.fact}
              </p>
            ))}
          </div>
          <p className="backpage__colophon">
            {stories.length} stories · {sources} sources · every claim cited. An independent archive of Japanese design. Corrections welcome.
          </p>
        </div>
      </div>
      <div className="sheet backpage" data-unfold="quarter">
        <div className="backpage__quarter">
          {mast}
          <p className="backpage__kicker backpage__kicker--big">Did you know?</p>
          {facts.map((f, i) => (
            <p key={i} className="backpage__fact backpage__fact--big" data-fact={i} data-show={i === pick ? "" : undefined}>
              {f.fact}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
