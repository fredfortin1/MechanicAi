import type { Metadata } from "next";
import { Archivo_Black, Inter, Caveat } from "next/font/google";
import "./globals.css";

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const script = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fred Fortin — AI made simple, no bullshit",
  description:
    "Fred Fortin helps companies go from AI-curious to AI-operational. Discovery, roadmap, MVP, launch.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${script.variable}`}
    >
      <body className="font-sans bg-cream text-ink">{children}</body>
    </html>
  );
}
