import { Fragment } from "react";

/*
 * Japanese text inside English content.
 *
 * Chinese, Japanese and Korean share Unicode code points for many characters
 * (Han unification) but draw them differently. Marking Japanese runs with
 * lang="ja" makes the browser use Japanese glyph forms and our Japanese font,
 * instead of whichever CJK fallback the system happens to pick.
 */

// Hiragana, katakana (incl. half-width), CJK ideographs, CJK punctuation and full-width forms.
const JA_RUN = /([　-〿぀-ゟ゠-ヿㇰ-ㇿ㐀-䶿一-鿿豈-﫿＀-￯]+)/;

export const hasJapanese = (text: string) => JA_RUN.test(text);

/** Renders a string, wrapping every Japanese run in <span lang="ja">. */
export function Ja({ children }: { children: string }) {
  if (!hasJapanese(children)) return <>{children}</>;
  return (
    <>
      {children.split(JA_RUN).map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} lang="ja" className="ja">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
