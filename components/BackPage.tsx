import { getDiscoveries, getSources, getStories } from "@/lib/content";
import { Masthead } from "./Masthead";

/**
 * The back of the newspaper, seen only while it unfolds (components/Unfold.tsx
 * copies these hidden templates onto the paper as it opens). It is printed like
 * the front: one masthead across the full width of the sheet. While the paper is
 * folded only the half on this side of the fold shows, so the nameplate is cut
 * at the crease, as on a real folded paper. Everything on it comes from the
 * archive itself: the edition's stories and its sourced facts.
 *
 * Both templates are sheet-sized. "half" is the back page whose right half shows
 * while the left half of the paper lies folded over the right. "quarter" is the
 * outside of the fully folded paper, whose top-right quarter shows.
 */
export function BackPage() {
  const stories = getStories();
  const facts = getDiscoveries();
  const sources = getSources().length;
  const year = (d: string) => d.slice(0, 4);
  // Facts on the two faces, chosen by the edition number so they change as the archive grows.
  const pick = stories.length % Math.max(1, facts.length - 1);

  return (
    <div className="unfold-templates" hidden aria-hidden="true">
      <div className="sheet backpage" data-unfold="half">
        <Masthead back />
        <div className="wrap backpage__body">
          <div />
          <div className="backpage__col">
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
      </div>
      <div className="sheet backpage" data-unfold="quarter">
        <Masthead back />
        <div className="wrap backpage__body backpage__body--cover">
          <div />
          <div className="backpage__col">
            <p className="backpage__kicker backpage__kicker--big">Did you know?</p>
            {facts.map((f, i) => (
              <p key={i} className="backpage__fact backpage__fact--big" data-fact={i} data-show={i === pick ? "" : undefined}>
                {f.fact}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
