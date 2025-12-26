import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => (
  <div className="bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
    {children}
  </div>
);
