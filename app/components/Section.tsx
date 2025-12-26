import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export const Section = ({ id, title, children }: SectionProps) => (
  <section id={id} className="relative z-10 w-full max-w-8xl rounded-[28px] bg-white/[0.05] backdrop-blur-xl border border-white/10">
    <h2 className="text-3xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gradientStart to-gradientEnd">{title}</h2>
    {children}
  </section>
);
 