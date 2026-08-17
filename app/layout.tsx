import type { Metadata } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, Instrument_Sans, Space_Mono } from "next/font/google";
import { ThemeProvider, themeInitScript } from "@/components/ThemeProvider";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Unaib ur Rehman — Full-Stack Developer & Designer",
  description:
    "Portfolio of Unaib ur Rehman, a full-stack developer and designer building React front ends, Node.js APIs, and the interfaces that hold them together.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        {/* Runs before hydration so the correct theme paints immediately —
            no flash of the wrong theme. */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
