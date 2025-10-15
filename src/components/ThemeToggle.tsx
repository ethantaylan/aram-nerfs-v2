import { Moon, Sun } from 'lucide-react';
import { Button } from './ui';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDarkMode, onToggle }: ThemeToggleProps) {
  return (
    <>
      {/* Desktop: Icon Button */}
      <Button
        onClick={onToggle}
        variant="primary"
        isDarkMode={isDarkMode}
        className="hidden md:flex fixed top-6 right-6 z-50 p-3 rounded-full animate-fadeIn"
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </Button>

      {/* Mobile: Text Toggle in Top Right */}
      <button
        onClick={onToggle}
        className={`md:hidden fixed top-6 right-6 z-50 text-[10px] font-semibold tracking-wider transition-all duration-500 animate-fadeIn ${
          isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
        }`}
        aria-label="Toggle theme"
      >
        {isDarkMode ? 'LIGHT' : 'DARK'}
      </button>
    </>
  );
}
