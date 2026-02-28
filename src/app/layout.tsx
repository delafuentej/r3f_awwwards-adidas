import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import ViewCanvas from "../components/ViewCanvas";
import { ResponsiveProvider } from "../providers/ResponsiveProvider";

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
          {children}
        </ResponsiveProvider>
      </body>
    </html>
  );
}
