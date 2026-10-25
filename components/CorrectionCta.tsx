import Link from "next/link";

export function CorrectionCta({ subject }: { subject: string }) {
  const href = `/submit?type=correction&subject=${encodeURIComponent(subject)}`;
  return (
    <div className="correction-cta bracket">
      <div>
        <p className="kicker">Spotted something?</p>
        <p className="display h4" style={{ marginTop: "0.5rem", maxWidth: "28ch" }}>
          Help us get the story of {subject} right.
        </p>
      </div>
      <Link className="btn" href={href}>
        Suggest a correction <span className="arrow" aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
