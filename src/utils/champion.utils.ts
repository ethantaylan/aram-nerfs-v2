import { DDRAGON_CHAMPION_IMAGE_URL, FALLBACK_CHAMPION } from '../constants';

export const formatChampionName = (championName: string): string => {
  return championName.replace(/['\s]/g, '').replace('&', '');
};

export const getChampionImageUrl = (championName: string): string => {
  const formattedName = formatChampionName(championName);
  return `${DDRAGON_CHAMPION_IMAGE_URL}/${formattedName}.png`;
};

export const getFallbackImageUrl = (): string => {
  return `${DDRAGON_CHAMPION_IMAGE_URL}/${FALLBACK_CHAMPION}.png`;
};
