import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PersonCard } from "@/components/Cards";
import { getPeople } from "@/lib/content";

export const metadata: Metadata = {
  title: "People Behind the Design",
  description: "Inventors, engineers and designers whose work has shaped everyday life — profiled with sources.",
};

export default function PeoplePage() {
  const people = getPeople();
  return (
    <>
      <header className="wrap page-head">
        <Breadcrumbs items={[{ label: "People" }]} />
        <h1 className="display page-head__title">People behind the design</h1>
        <p className="lede page-head__lede">
          An inventor in Okayama, an engineer at a parts supplier, a furniture designer, a graphic designer, a product designer.
          Their disciplines and periods differ; what connects them here is that their work rewards a closer look.
        </p>
        <p className="muted small" style={{ marginTop: "1.5rem", maxWidth: "40rem" }}>
          Names are given in Western order (given name first), with Japanese script and romanisations on each profile. Where we
          have no appropriately licensed portrait, we show a typographic placeholder rather than an uncredited image.
        </p>
      </header>
      <section className="section">
        <div className="wrap people-row">
          {people.map((p) => (
            <PersonCard key={p.id} person={p} />
          ))}
        </div>
      </section>
    </>
  );
}
