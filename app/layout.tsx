import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import avatar from "../public/avatar.png";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 
export const metadata: Metadata = {
  metadataBase: new URL("https://ivankohan.com"), // заміниш на фінальний домен

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
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C1014] via-[#0E1318] to-black" />

          <div className="absolute top-[-35%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-[#edcb4c]/10 blur-[180px]" />
        </div>

        <header>
          <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
 <div className="w-15 h-15 rounded-full overflow-hidden border border-white/15 bg-[#0C1014] z-10">
              <Image src={avatar} alt="Avatar" className="object-cover w-15 h-15" />
            </div>            </Link>

            <nav className="hidden md:flex gap-6 rounded-[28px] bg-white/[0.05] backdrop-blur-xl border border-white/10 px-6 py-3">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/projects">Projects</NavLink>
{/*               <NavLink href="/blog">Blog</NavLink>
 */}              <NavLink href="/skills">Skills</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>

            <div className="text-xs text-neutral-400"></div>
          </div>
        </header>

        <main className="relative z-10">{children}</main>

        <footer className="relative mt-32 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-medium text-white">Ivan Kohan</h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                Web developer focused on modern interfaces, clean architecture
                and meaningful digital products.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-white">Navigation</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                <li><Link href="/about" className="hover:text-[#edcb4c]">About</Link></li>
                <li><Link href="/projects" className="hover:text-[#edcb4c]">Projects</Link></li>
                <li><Link href="/blog" className="hover:text-[#edcb4c]">Blog</Link></li>
                <li><Link href="/skills" className="hover:text-[#edcb4c]">Skills</Link></li>
                <li><Link href="/contact" className="hover:text-[#edcb4c]">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-white">Contact</h3>
              <div className="mt-3 flex gap-4 text-neutral-400">
                <a href="mailto:kohan3750@gmail.com" className="hover:text-[#edcb4c]">
                  <Mail size={16} />
                </a>
                <a href="https://www.instagram.com/ivan.kohan.ua/" className="hover:text-[#edcb4c]">
                  <Instagram size={16} />
                </a>
                <a href="https://github.com/Ivan3750" target="_blank" className="hover:text-[#edcb4c]">
                  <Github size={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" className="hover:text-[#edcb4c]">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-neutral-500 py-4 border-t border-white/5">
            © {new Date().getFullYear()} Ivan Kohan. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}


function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-neutral-300 hover:text-white transition"
    >
      {children}
    </Link>
  );
}
