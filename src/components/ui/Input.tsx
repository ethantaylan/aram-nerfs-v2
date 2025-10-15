import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isDarkMode?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isDarkMode = true, className = '', ...props }, ref) => {
    const themeStyles = isDarkMode
      ? 'bg-neutral-900/80 text-white placeholder-gray-500'
      : 'bg-white/70 text-gray-900 placeholder-gray-400';

    return (
      <input
        ref={ref}
        className={`w-full px-6 py-4 text-lg focus:outline-none transition-all focus:scale-[1.02] duration-500 backdrop-blur-xl rounded-lg ${themeStyles} ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
