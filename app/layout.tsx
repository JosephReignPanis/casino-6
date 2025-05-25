import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Image from "next/image";

import MobileNav from "@/components/bank1/mobilenav";

import Navbar from "@/components/bank1/navbar";
import Footer from "@/components/bank1/footer";

import BottomSection from "@/components/bottomsection/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SPO888",
  description: "SPOBET",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MobileNav />
        <Navbar />
        <div className="min-h-screen max-w-[1440px] mx-auto">
          <main className="grid grid-cols-5 mx-auto ">
            <div className=" col-span-5 lg:col-span-5 p-2  ">{children}</div>
          </main>
        </div>{" "}
        <Footer />
      </body>
    </html>
  );
}
