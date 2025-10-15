import { memo } from 'react';
import type { Champion } from '../../types/champion.types';
import { Card, StatCard, ChampionAvatar } from '../../components/ui';
import { getStatTextColor } from '../../utils/stat.utils';

interface ChampionDetailsProps {
  champion: Champion;
  isDarkMode?: boolean;
}

export const ChampionDetails = memo(function ChampionDetails({
  champion,
  isDarkMode = true,
}: ChampionDetailsProps) {
  const subtitleStyles = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const titleStyles = isDarkMode ? 'text-white' : 'text-gray-900';
  const textStyles = isDarkMode ? 'text-white' : 'text-gray-900';

  return (
    <Card isDarkMode={isDarkMode} className="mt-4 w-full max-w-2xl">
      <div className="flex items-center gap-4 mb-4 animate-slideInLeft">
        <ChampionAvatar
          championName={champion.name}
          size="lg"
          isDarkMode={isDarkMode}
          animated
        />
        <div>
          <h2 className={`text-2xl font-bold transition-colors duration-500 ${titleStyles}`}>
            {champion.name}
          </h2>
          <p className={`text-sm transition-colors duration-500 ${subtitleStyles}`}>
            ARAM Balance Changes
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <StatCard
          label="Damage Dealt"
          value={
            <span className={getStatTextColor(champion.damageDealt, false, isDarkMode)}>
              {champion.damageDealt}
            </span>
          }
          isDarkMode={isDarkMode}
          delay="0.1s"
        />
        <StatCard
          label="Damage Taken"
          value={
            <span className={getStatTextColor(champion.damageTaken, true, isDarkMode)}>
              {champion.damageTaken}
            </span>
          }
          isDarkMode={isDarkMode}
          delay="0.2s"
        />
      </div>

      {champion.passiveOther && (
        <StatCard
          label="Special Changes"
          value={
            <p className={`text-sm leading-relaxed transition-colors duration-500 ${textStyles}`}>
              {champion.passiveOther}
            </p>
          }
          isDarkMode={isDarkMode}
          delay="0.3s"
        />
      )}
    </Card>
  );
});
