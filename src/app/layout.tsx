import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inside Job",
  description: "Inside Job is a collective that operates in the field of providing website creation services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Inside Job</title>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
