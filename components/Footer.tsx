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
              An independent, growing archive of Japanese design stories, researched with care, sourced in the open, and
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
              <li><Link href="/submit">Suggest a story</Link></li>
              <li><Link href="/submit?type=correction">Report a correction</Link></li>
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
        <div className="footer-maker">
          <p>
            Made by <strong>{site.maker.name}</strong>, with much curiosity and her love for Japanese design.
          </p>
          {site.maker.x || site.maker.linkedin ? (
            <ul className="footer-maker__links">
              {site.maker.x ? (
                <li>
                  <a href={`https://x.com/${site.maker.x}`} rel="me noopener" target="_blank">
                    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
                      <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>@{site.maker.x}</span>
                    <span className="visually-hidden"> on X (opens in a new tab)</span>
                  </a>
                </li>
              ) : null}
              {site.maker.linkedin ? (
                <li>
                  <a href={site.maker.linkedin} rel="me noopener" target="_blank">
                    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
                      <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                    </svg>
                    <span>LinkedIn</span>
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                </li>
              ) : null}
            </ul>
          ) : null}
        </div>
        <div className="footer-bottom">
          <span>Text © {new Date().getFullYear()} {site.name}. Images are credited individually under their own licences.</span>
          <span>Dataset last reviewed {site.datasetReviewed}</span>
        </div>
      </div>
    </footer>
  );
}
