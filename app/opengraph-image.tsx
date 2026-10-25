import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.subtitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social preview: a typographic card in the site's palette. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", padding: 72, color: "#121212",
          backgroundColor: "#f7f7f5",
          backgroundImage: "linear-gradient(to right, rgba(18,18,18,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(18,18,18,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", gap: 64, fontSize: 20, letterSpacing: 1, textTransform: "uppercase" }}>
            <span>An independent archive</span>
            <span>{site.subtitle}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 104, lineHeight: 0.95, letterSpacing: -6, fontWeight: 600 }}>{site.name}</div>
            <div style={{ fontSize: 32, lineHeight: 1.35, marginTop: 32, color: "#474747", maxWidth: 760 }}>
              The world is full of design stories we&rsquo;ve never stopped to notice.
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignSelf: "flex-end", background: "#1f4d36", color: "#fff", fontSize: 26, padding: "6px 16px" }}>1967 → today</div>
      </div>
    ),
    size,
  );
}
