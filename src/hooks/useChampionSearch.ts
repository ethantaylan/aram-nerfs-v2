import { useState, useEffect } from 'react';
import type { Champion } from '../types/champion.types';

interface UseChampionSearchResult {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredChampions: Champion[];
  selectedChampion: Champion | null;
  setSelectedChampion: (champion: Champion | null) => void;
}

export function useChampionSearch(champions: Champion[]): UseChampionSearchResult {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredChampions, setFilteredChampions] = useState<Champion[]>([]);
  const [selectedChampion, setSelectedChampion] = useState<Champion | null>(null);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = champions.filter((champion) =>
        champion.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredChampions(filtered);

      if (filtered.length === 1) {
        setSelectedChampion(filtered[0]);
      } else {
        setSelectedChampion(null);
      }
    } else {
      setFilteredChampions([]);
      setSelectedChampion(null);
    }
  }, [searchQuery, champions]);

  return {
    searchQuery,
    setSearchQuery,
    filteredChampions,
    selectedChampion,
    setSelectedChampion,
  };
}
