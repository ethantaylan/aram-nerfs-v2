import { useEffect } from 'react';
import './App.css';
import championData from '../aram-balance-data.json';

import type { ChampionData } from './types/champion.types';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useChampionSearch } from './hooks/useChampionSearch';
import { useMobilePopup } from './hooks/useMobilePopup';
import { updatePageTitle } from './utils/seo.utils';
import { LOCAL_STORAGE_KEYS } from './constants';

import { ThemeToggle } from './components/ThemeToggle';
import { MobilePopup } from './components/MobilePopup';
import { AppDescription } from './components/AppDescription';
import { Footer } from './components/Footer';
import {
  ChampionSearchInput,
  ChampionDropdown,
  ChampionDetails,
  NoResultsMessage,
} from './features/champion';

export default function App() {
  const data: ChampionData = championData;
  const [isDarkMode, setIsDarkMode] = useLocalStorage(LOCAL_STORAGE_KEYS.THEME, true);
  const [showMobilePopup, dismissMobilePopup] = useMobilePopup();

  const {
    searchQuery,
    setSearchQuery,
    filteredChampions,
    selectedChampion,
    setSelectedChampion,
  } = useChampionSearch(data.champions);

  useEffect(() => {
    updatePageTitle(selectedChampion?.name, data.patch);
  }, [selectedChampion, data.patch]);

  const handleChampionSelect = (champion: typeof data.champions[0]) => {
    setSelectedChampion(champion);
    setSearchQuery(champion.name);
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const bgStyles = isDarkMode ? 'bg-black' : 'bg-gray-100';
  const titleStyles = isDarkMode ? 'text-white' : 'text-gray-900';

  return (
    <div
      className={`relative w-screen min-h-screen overflow-x-hidden flex flex-col transition-colors duration-500 ${bgStyles}`}
    >
      <AppDescription isDarkMode={isDarkMode} />

      <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />

      {showMobilePopup && <MobilePopup onClose={dismissMobilePopup} />}

      <div className="relative z-10 flex flex-col items-center justify-center px-6 flex-1 py-8">
        <div className="w-full max-w-3xl text-center animate-scaleIn mb-6">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-6 tracking-tight uppercase animate-fadeInUp transition-colors duration-500 ${titleStyles}`}
          >
            Am I nerfed?
          </h1>

          <ChampionSearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            isDarkMode={isDarkMode}
          />
        </div>

        {searchQuery && filteredChampions.length > 1 && !selectedChampion && (
          <ChampionDropdown
            champions={filteredChampions}
            onSelect={handleChampionSelect}
            isDarkMode={isDarkMode}
          />
        )}

        {selectedChampion && (
          <ChampionDetails champion={selectedChampion} isDarkMode={isDarkMode} />
        )}

        {searchQuery && filteredChampions.length === 0 && (
          <NoResultsMessage searchQuery={searchQuery} isDarkMode={isDarkMode} />
        )}
      </div>

      <Footer patch={data.patch} isDarkMode={isDarkMode} />
    </div>
  );
}
