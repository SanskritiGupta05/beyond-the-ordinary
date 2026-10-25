import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <p className="footer-brand">{site.name}</p>
            <p className="footer-brand-ja" lang="ja">{site.nameJa}</p>
            <p style={{ marginTop: "1rem", maxWidth: "26rem" }}>
              An independent, growing archive of Japanese design stories — researched with care, sourced in the open, and
              always open to correction.
            </p>
          </div>
          <div>
            <h2>Archive</h2>
            <ul>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Project</h2>
            <ul>
              <li><Link href="/about">About the project</Link></li>
              <li><Link href="/sources">Sources &amp; research approach</Link></li>
              <li><Link href="/about#corrections">Suggestions &amp; corrections</Link></li>
              <li><Link href="/sources#image-credits">Image credits</Link></li>
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              {site.contactEmail ? (
                <li><a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></li>
              ) : (
                <li>Contact details coming soon. <Link href="/about#corrections">How to help</Link></li>
              )}
              {site.social.map((s) => (
                <li key={s.href}><a href={s.href} rel="me noopener">{s.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Text © {new Date().getFullYear()} {site.name}. Images are credited individually under their own licences.</span>
          <span>Dataset last reviewed {site.datasetReviewed}</span>
        </div>
      </div>
    </footer>
  );
}
