import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "🤙 TamoTam. HangOut. Offline.",
  description: "Limit online time spent on digital applications in favor of offline social life outside the screen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <SpeedInsights />
      <GoogleTagManager gtmId={String(process.env.GTM_ID)} />
    </html>
  );
}
