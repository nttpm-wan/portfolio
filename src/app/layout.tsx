import type { Metadata } from "next";
import { Barlow_Condensed, Inter, IBM_Plex_Mono } from "next/font/google";
import MotionReady from "@/components/MotionReady";
import PageLoader from "@/components/PageLoader";
import { site } from "@/lib/data";
import "@designcodeio/threeui/style.css";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const deploymentDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? (deploymentDomain ? `https://${deploymentDomain}` : "http://localhost:3000")),
  title: site.title,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){if(location.pathname==="/"&&!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.setAttribute("data-site-loader",String(performance.now()))})();` }} />
      </head>
      <body className="bg-paper text-ink antialiased">
        <MotionReady />
        <PageLoader durationMs={4000} transitionMs={450} />
        <div id="site-content">{children}</div>
      </body>
    </html>
  );
}
