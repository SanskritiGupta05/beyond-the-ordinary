import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.subtitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social preview: a typographic card in the site's palette. */
export default function OpengraphImage() {
  const dots = Array.from({ length: 25 }, (_, i) => i);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#f5f1e9", color: "#1b1a17", padding: 72, fontFamily: "serif" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#a3301c", fontFamily: "monospace" }}>{site.subtitle}</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 96, lineHeight: 1, letterSpacing: -2 }}>{site.name}</div>
            <div style={{ fontSize: 34, lineHeight: 1.3, marginTop: 28, color: "#4a463f", maxWidth: 760 }}>
              The world is full of design stories we&rsquo;ve never stopped to notice.
            </div>
          </div>
        </div>
        <div style={{ width: 230, height: 230, background: "#d9a521", display: "flex", flexWrap: "wrap", padding: 18, alignSelf: "flex-end" }}>
          {dots.map((d) => (
            <div key={d} style={{ width: 38.8, height: 38.8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 22, height: 22, borderRadius: 11, background: "#1b1a17", opacity: 0.85 }} />
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
