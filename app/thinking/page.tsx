import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { sectionJa } from "@/lib/site";
import { getPrinciples, getStory, principleHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Thinking Behind the Work",
  description: "Design principles drawn from documented decisions in real objects and systems.",
};

export default function ThinkingPage() {
  const principles = getPrinciples();
  return (
    <>
      <header className="wrap page-head">
        <p className="tate page-head__tate" lang="ja">{sectionJa.thinking}</p>
        <Breadcrumbs items={[{ label: "Thinking" }]} />
        <h1 className="display page-head__title">The thinking behind the work</h1>
        <p className="lede page-head__lede">
          Principles you can see in real decisions — a texture, a ratio, a pull cord. Each is grounded in the stories where it
          appears, and each comes with its limits.
        </p>
      </header>
      <section className="section">
        <div className="wrap">
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
      <section className="section section--tint" aria-labelledby="concepts-title">
        <div className="wrap two-col">
          <div>
            <h2 id="concepts-title">On ma, wabi-sabi and kanso</h2>
          </div>
          <div className="prose">
            <p>
              These are distinct ideas with their own histories in Japanese aesthetics, religion and everyday language. They are
              often flattened into a single word — &ldquo;minimalism&rdquo; — and attributed to every Japanese designer at once.
            </p>
            <p>
              We have not written about them yet because we would rather do it properly: with sources on their origins, on how
              their meanings have changed, and on which designers have actually discussed them in their own words. If you can
              recommend scholarship or primary sources, <Link href="/submit?type=source">we would like to hear from you</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
