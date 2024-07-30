import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PolyLingua",
  description: "AI Based Language Translator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Script src="./node_modules/preline/dist/preline.js"></Script> */}
      <body className={`${inter.className} text-white`}>{children}</body>
    </html>
  );
}
