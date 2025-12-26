interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => (
  <button className="bg-gradient-to-r from-gradientStart to-gradientEnd text-black font-semibold py-3 px-6 rounded-xl hover:scale-105 transition-transform">
    {children}
  </button>
);
