import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "react-hot-toast";

import "./globals.css";

import { FloatingNav } from "@/components/navbar";
import { navItems } from "@/constant/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Called out of Darkness",
  description: "Called ouf of darkness podcast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <FloatingNav navItems={navItems} />
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
