import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, Shippori_Mincho_B1, Yuji_Syuku } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Dock } from "@/components/Dock";
import { site } from "@/lib/site";
import "./globals.css";

// Latin: a tight neo-grotesk for headlines, a neutral grotesk for text.
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
  themeColor: "#f7f7f5",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${interTight.variable} ${inter.variable} ${shippori.variable} ${yuji.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Dock />
      </body>
    </html>
  );
}
