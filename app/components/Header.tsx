"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import avatar from "../../public/avatar.png";


import noRender from "../noRender.json";

export default function Header() {
 
 
  
  if (noRender.includes(usePathname())) return null;
  return (
 
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
