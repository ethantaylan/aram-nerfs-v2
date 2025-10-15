import { memo } from 'react';
import type { Champion } from '../../types/champion.types';
import { ChampionAvatar } from '../../components/ui';

interface ChampionDropdownProps {
  champions: Champion[];
  onSelect: (champion: Champion) => void;
  isDarkMode?: boolean;
}

export const ChampionDropdown = memo(function ChampionDropdown({
  champions,
  onSelect,
  isDarkMode = true,
}: ChampionDropdownProps) {
  const containerStyles = isDarkMode
    ? 'bg-black/70 border-white/20'
    : 'bg-white/90 border-gray-300';

  const itemStyles = isDarkMode
    ? 'text-white hover:bg-white/10 border-white/10'
    : 'text-gray-900 hover:bg-gray-100 border-gray-200';

  return (
    <div
      className={`w-full max-w-2xl mt-2 max-h-60 overflow-y-auto rounded-lg backdrop-blur-xl border animate-slideDown ${containerStyles}`}
    >
      {champions.map((champion, index) => (
        <button
          key={champion.name}
          onClick={() => onSelect(champion)}
          className={`w-full px-4 py-3 text-left transition-all duration-200 flex items-center gap-3 border-b last:border-b-0 hover:scale-[1.02] cursor-pointer ${itemStyles}`}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <ChampionAvatar
            championName={champion.name}
            size="sm"
            isDarkMode={isDarkMode}
          />
          <span>{champion.name}</span>
        </button>
      ))}
    </div>
  );
});
