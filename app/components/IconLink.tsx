import { LucideIcon } from 'lucide-react';

interface IconLinkProps {
  icon: LucideIcon;
  text: string;
  href: string;
}

export const IconLink = ({ icon: Icon, text, href }: IconLinkProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-xl bg-white/10 backdrop-blur-md hover:scale-105 transition-transform">
    <Icon />
    {text}
  </a>
);
