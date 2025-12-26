"use client";

import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [dark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed w-full backdrop-blur-lg bg-white/10 dark:bg-black/20 py-4 px-6 flex justify-between items-center z-50 transition-colors duration-500">
      <div className="font-bold text-xl">MyPortfolio</div>
      <ul className="flex gap-6">
        {['about', 'portfolio', 'blog', 'skills', 'contact'].map((link) => (
          <li key={link}>
            <Link href={`#${link}`} className="hover:text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gradientStart to-gradientEnd transition-all">{link}</Link>
          </li>
        ))}
        <li className="cursor-pointer" onClick={toggleDark}>
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </li>
      </ul>
    </nav>
  );
};
