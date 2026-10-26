import type { Metadata, Viewport } from "next";
import { Anton, IBM_Plex_Mono, PT_Serif, Playfair_Display, Shippori_Mincho_B1, Yuji_Syuku } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Dock } from "@/components/Dock";
import { Masthead } from "@/components/Masthead";
import { Sheet } from "@/components/Sheet";
import { site } from "@/lib/site";
import "./globals.css";

// Newspaper type: Anton for condensed headlines, PT Serif for text,
// Playfair Display only for the nameplate in the masthead.
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: "900",
  display: "swap",
});

// Typewriter layer: IBM Plex Mono for labels, dates, captions, citations and sources.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

// Japanese: Shippori Mincho B1, a mincho by the Japanese foundry FONTDASU, used
// for every Japanese word on the site. Its glyph files are large, so it is not
// preloaded; the browser fetches only the character ranges a page uses.
const shippori = Shippori_Mincho_B1({
  variable: "--font-shippori",
  weight: ["400", "500", "700"],
  preload: false,
  display: "swap",
});

// Yuji Syuku, a brush-script face, used only for the brushed wordmark 日常の向こう側 in the dock.
const yuji = Yuji_Syuku({
  variable: "--font-yuji",
  weight: "400",
  preload: false,
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.subtitle}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.subtitle}`,
    description: site.description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#262624",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${anton.variable} ${ptSerif.variable} ${playfair.variable} ${plexMono.variable} ${shippori.variable} ${yuji.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Sheet>
          <Masthead />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </Sheet>
        <Dock />
      </body>
    </html>
  );
}
