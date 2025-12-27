import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import VisitNotifier from "./components/VisitNotifier";

import Header from "./components/Header";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 
export const metadata: Metadata = {
  metadataBase: new URL("https://ivankohan.com"),  

  title: {
    default: "Ivan Kohan — Web Developer",
    template: "%s | Ivan Kohan",
  },

  description:
    "Ivan Kohan is a web developer focused on modern UI, clean architecture and meaningful digital products. Portfolio, projects and thoughts.",

  keywords: [
    "Ivan Kohan",
    "Web Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "UI Developer",
    "Portfolio",
    "Modern Web Design",
    "Tailwind CSS",
    "TypeScript",
  ],

  authors: [{ name: "Ivan Kohan", url: "https://ivankohan.com" }],
  creator: "Ivan Kohan",
  publisher: "Ivan Kohan",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://ivankohan.com",
  },

  openGraph: {
    title: "Ivan Kohan — Web Developer",
    description:
      "Portfolio, projects and thoughts about modern web development, clean architecture and digital products.",
    url: "https://ivankohan.com",
    siteName: "Ivan Kohan",
    images: [
      {
        url: "/avatar.png", 
        width: 1200,
        height: 630,
        alt: "Ivan Kohan — Web Developer",
      },
    ],
    locale: "da_DK",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ivan Kohan — Web Developer",
    description:
      "Portfolio, projects and thoughts about modern web development.",
    images: ["/og-image.png"],
    creator: "@ivankohan",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0C1014] text-white`}
      >
        <VisitNotifier />
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C1014] via-[#0E1318] to-black" />

          <div className="absolute top-[-35%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-[#edcb4c]/10 blur-[180px]" />
        </div>

<Header></Header>
        <main className="relative z-10">{children}</main>
<Footer></Footer>
       
      </body>
    </html>
  );
}


