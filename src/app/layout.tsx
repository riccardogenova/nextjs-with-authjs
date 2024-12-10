import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "../components/Navbar";
import { FaCode } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NextJS authentication example with Auth.JS",
  description: "Example of authentication methods with NextJS v15 + Auth.JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <a
          href="https://riccardogenova.dev"
          className="flex items-center fixed bottom-4 left-4 text-sm bg-[#a6e22e] py-1 px-4 font-bold rounded-lg transition-transform transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCode className="inline-block mr-2" />
          <p>source code on riccardogenova.dev</p>
        </a>
        <Analytics />
      </body>
    </html>
  );
}
