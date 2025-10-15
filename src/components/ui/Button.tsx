import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  children: ReactNode;
  isDarkMode?: boolean;
}

export function Button({
  variant = 'primary',
  children,
  isDarkMode = true,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'transition-all duration-300 hover:scale-110';

  const variantStyles = {
    primary: isDarkMode
      ? 'bg-white/10 hover:bg-white/20 text-white backdrop-blur'
      : 'bg-gray-800/10 hover:bg-gray-800/20 text-gray-800',
    ghost: isDarkMode
      ? 'text-white hover:text-gray-300'
      : 'text-gray-600 hover:text-gray-900',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
