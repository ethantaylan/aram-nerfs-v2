import { useRef, useEffect } from 'react';
import { Input, SearchIcon, Button } from '../../components/ui';

interface ChampionSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  isDarkMode?: boolean;
}

export function ChampionSearchInput({ value, onChange, isDarkMode = true }: ChampionSearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto animate-fadeIn">
      <Input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a champion..."
        autoFocus
        isDarkMode={isDarkMode}
      />
      <Button
        variant="ghost"
        isDarkMode={isDarkMode}
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
        aria-label="Search"
      >
        <SearchIcon />
      </Button>
    </div>
  );
}
