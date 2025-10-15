import { Moon, Sun } from 'lucide-react';
import { Button } from './ui';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDarkMode, onToggle }: ThemeToggleProps) {
  return (
    <Button
      onClick={onToggle}
      variant="primary"
      isDarkMode={isDarkMode}
      className="fixed top-6 right-6 z-50 p-3 rounded-full animate-fadeIn"
      aria-label="Toggle theme"
    >
      {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </Button>
  );
}
