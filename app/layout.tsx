import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

export const inter = Inter({ subsets: ["latin"] });
export const lora = Lora({ subsets: ["latin"] });

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
        {children}
        <Toaster position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
