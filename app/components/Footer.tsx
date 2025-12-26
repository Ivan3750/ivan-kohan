'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import noRender from "../noRender.json";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import avatar from "../public/avatar.png";

const Footer = () => {
  if (noRender.includes(usePathname())) return null;
  return (
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
                <li><Link href="/" className="hover:text-[#edcb4c]">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#edcb4c]">About</Link></li>
                <li><Link href="/projects" className="hover:text-[#edcb4c]">Projects</Link></li>
{/*                 <li><Link href="/blog" className="hover:text-[#edcb4c]">Blog</Link></li>
 */}                <li><Link href="/skills" className="hover:text-[#edcb4c]">Skills</Link></li>
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
  );
};
export default Footer;
