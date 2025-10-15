import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  isDarkMode?: boolean;
  className?: string;
  hover?: boolean;
}

export function Card({ children, isDarkMode = true, className = '', hover = true }: CardProps) {
  const baseStyles = 'backdrop-blur-xl rounded-xl border p-5 animate-fadeIn transition-all duration-500';

  const themeStyles = isDarkMode
    ? 'bg-black/70 border-white/20 hover:shadow-white/10'
    : 'bg-white/90 hover:shadow-gray-400/20';

  const hoverStyles = hover ? 'hover:scale-[1.01] shadow-2xl' : '';

  return (
    <div className={`${baseStyles} ${themeStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
