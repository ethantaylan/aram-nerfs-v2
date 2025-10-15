import { memo } from 'react';
import { getChampionImageUrl, getFallbackImageUrl } from '../../utils/champion.utils';

interface ChampionAvatarProps {
  championName: string;
  size?: 'sm' | 'md' | 'lg';
  isDarkMode?: boolean;
  animated?: boolean;
}

const sizeClasses = {
  sm: 'w-10 h-10',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
};

export const ChampionAvatar = memo(function ChampionAvatar({
  championName,
  size = 'md',
  isDarkMode = true,
  animated = false,
}: ChampionAvatarProps) {
  const ringStyles = isDarkMode ? 'ring-white/30' : 'ring-gray-400/50';
  const animationStyles = animated ? 'hover:scale-110 transition-all duration-300 animate-glow' : '';

  return (
    <img
      src={getChampionImageUrl(championName)}
      alt={championName}
      className={`${sizeClasses[size]} rounded-full ring-2 ${ringStyles} ${animationStyles} shadow-lg`}
      onError={(e) => {
        e.currentTarget.src = getFallbackImageUrl();
      }}
      loading="lazy"
    />
  );
});
