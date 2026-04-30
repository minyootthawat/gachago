import type { Metadata } from "next";
import { Prompt, IBM_Plex_Sans_Thai } from "next/font/google";
import "@/app/globals.css";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Gachago",
  description: "Anime card and blind box reveal MVP"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${prompt.variable} ${ibmPlexSansThai.variable}`}>
      <body>{children}</body>
    </html>
  );
}

