import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Subalakshmi V — Senior Software Engineer",
  description:
    "Senior Software Engineer with 4.5+ years building async backend systems in Python & FastAPI, transitioning into AI & Data Science.",
  keywords: [
    "Subalakshmi V",
    "Software Engineer",
    "FastAPI Developer",
    "Python Backend Engineer",
    "Data Science",
    "AI Engineer",
  ],
  openGraph: {
    title: "Subalakshmi V — Senior Software Engineer",
    description:
      "4.5+ years building async, event-driven backend systems in Python & FastAPI — now moving into AI & Data Science.",
    url: SITE_URL,
    siteName: "Subalakshmi V",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subalakshmi V — Senior Software Engineer",
    description:
      "4.5+ years building async, event-driven backend systems in Python & FastAPI — now moving into AI & Data Science.",
  },
  robots: { index: true, follow: true },
};

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", dark);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable}`}
        suppressHydrationWarning
      >
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        {children}
      </body>
    </html>
  );
}
