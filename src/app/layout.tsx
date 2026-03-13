import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { ResponsiveProvider } from "../providers/ResponsiveProvider";
import { Header, Footer, ViewCanvas } from "../components";

import "./globals.css";

const mulish = Mulish({
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Awwwards-Adidas",
  description:
    "3D-Tutorial FootLocker & Adidas Originals' collection breaks new ground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className} antialiased`}>
        <ResponsiveProvider>
          <ViewCanvas />
          <Header />
          {children}
          <Footer />
        </ResponsiveProvider>
      </body>
    </html>
  );
}
