import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

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
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />  
      </body>
    </html>
  );
}
