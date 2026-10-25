import Link from "next/link";
import { site } from "@/lib/site";

export function CorrectionCta({ subject }: { subject: string }) {
  const mail = site.contactEmail
    ? `mailto:${site.contactEmail}?subject=${encodeURIComponent(`Correction: ${subject}`)}`
    : null;
  return (
    <div className="correction-cta bracket">
      <div>
        <p className="kicker">Spotted something?</p>
        <p className="display h4" style={{ marginTop: "0.5rem", maxWidth: "28ch" }}>
          Help us get the story of {subject} right.
        </p>
      </div>
      {mail ? (
        <a className="btn" href={mail}>
          Suggest a correction <span className="arrow" aria-hidden="true">→</span>
        </a>
      ) : (
        <Link className="btn btn--ghost" href="/about#corrections">
          How to suggest a correction <span className="arrow" aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}
