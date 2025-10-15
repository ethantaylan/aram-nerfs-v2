import { useState, useEffect, useRef } from "react";
import "./App.css";
import championData from "../aram-balance-data.json";
import { Moon, Sun } from "lucide-react";

// SEO Helper function to update page title dynamically
const updatePageTitle = (championName?: string, patch?: string) => {
  if (championName) {
    document.title = `${championName} ARAM Balance - Am I Nerfed? | Patch ${patch}`;
  } else {
    document.title = "Am I Nerfed? - League of Legends ARAM Balance Changes Tracker";
  }
};

interface Champion {
  name: string;
  damageDealt: string;
  damageTaken: string;
  passiveOther: string;
}

interface ChampionData {
  patch: string;
  champions: Champion[];
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredChampions, setFilteredChampions] = useState<Champion[]>([]);
  const [selectedChampion, setSelectedChampion] = useState<Champion | null>(
    null
  );
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Load theme preference from localStorage, default to true (dark mode)
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme !== null ? JSON.parse(savedTheme) : true;
  });
  const [showMobilePopup, setShowMobilePopup] = useState(() => {
    // Show popup only on mobile and if not dismissed before
    const dismissed = localStorage.getItem('mobilePopupDismissed');
    const isMobile = window.innerWidth < 768;
    return isMobile && !dismissed;
  });
  const searchInputRef = useRef<HTMLInputElement>(null);
  const data: ChampionData = championData;

  // Helper function to get text color for stat values
  const getStatTextColor = (value: string, isReversed: boolean = false) => {
    if (value === "100%") {
      return isDarkMode ? "text-white" : "text-gray-900";
    }
    const numValue = parseInt(value);
    const isPositive = isReversed ? numValue < 100 : numValue > 100;
    return isPositive ? "text-green-400" : "text-red-400";
  };

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = data.champions.filter((champion) =>
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
  }, [searchQuery]);

  // Update page title when selected champion changes
  useEffect(() => {
    updatePageTitle(selectedChampion?.name, data.patch);
  }, [selectedChampion, data.patch]);

  useEffect(() => {
    // Auto-focus the search input when component mounts
    searchInputRef.current?.focus();
  }, []);

  useEffect(() => {
    // Save theme preference to localStorage whenever it changes
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const closeMobilePopup = () => {
    setShowMobilePopup(false);
    localStorage.setItem('mobilePopupDismissed', 'true');
  };

  const getChampionImage = (championName: string) => {
    const formattedName = championName.replace(/['\s]/g, "").replace("&", "");
    return `https://ddragon.leagueoflegends.com/cdn/15.20.1/img/champion/${formattedName}.png`;
  };

  const handleChampionClick = (champion: Champion) => {
    setSelectedChampion(champion);
    setSearchQuery(champion.name);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`relative w-screen min-h-screen overflow-x-hidden flex flex-col transition-colors duration-500 ${
      isDarkMode ? "bg-black" : "bg-gray-100"
    }`}>
      {/* Background Image */}
      {/* <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/src/assets/bg.jpg)',
          opacity: 0.3
        }}
      /> */}

      {/* App Description */}
      <div className={`absolute top-6 md:top-10 left-1/2 transform -translate-x-1/2 z-40 w-[90%] max-w-sm sm:max-w-md md:max-w-lg text-center px-3 sm:px-4 transition-colors duration-500 ${
        isDarkMode ? "text-gray-400" : "text-gray-600"
      }`}>
        <p className="text-xs sm:text-sm md:text-base leading-relaxed">
          Check League of Legends ARAM balance changes for champions - damage dealt, damage taken, and special modifications.
        </p>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110 animate-fadeIn backdrop-blur ${
          isDarkMode
            ? "bg-white/10 hover:bg-white/20 text-white"
            : "bg-gray-800/10 hover:bg-gray-800/20 text-gray-800"
        }`}
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Mobile Desktop Optimization Popup */}
      {showMobilePopup && (
        <div className="fixed top-4 left-4 right-4 z-50 md:hidden animate-fadeIn">
          <div className="bg-black/90 backdrop-blur-lg rounded-xl p-4 border border-white/20 shadow-lg">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <p className="text-white text-sm font-medium mb-1">
                  Desktop Optimized
                </p>
                <p className="text-gray-300 text-xs leading-relaxed">
                  This app is optimized for desktop experience for better champion browsing.
                </p>
              </div>
              <button
                onClick={closeMobilePopup}
                className="flex-shrink-0 p-1 text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Close popup"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 flex-1 py-8">
        {/* Hero Section */}
        <div className="w-full max-w-3xl text-center animate-scaleIn mb-6">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 tracking-tight uppercase animate-fadeInUp transition-colors duration-500 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            Am I nerfed?
          </h1>

          <div className="relative max-w-2xl mx-auto animate-fadeIn">
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a champion..."
              autoFocus
              className={`w-full px-6 py-4 text-lg focus:outline-none transition-all focus:scale-[1.02] duration-500 backdrop-blur-xl rounded-lg ${
                isDarkMode
                  ? "bg-neutral-900/80 text-white placeholder-gray-500"
                  : "bg-white/70 text-gray-900 placeholder-gray-400"
              }`}
            />
            <button className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer hover:scale-110 ${
              isDarkMode ? "text-white hover:text-gray-300" : "text-gray-600 hover:text-gray-900"
            }`}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Dropdown Results */}
        {searchQuery && filteredChampions.length > 1 && !selectedChampion && (
          <div className={`w-full max-w-2xl mt-2 max-h-60 overflow-y-auto rounded-lg backdrop-blur-xl border animate-slideDown ${
            isDarkMode
              ? "bg-black/70 border-white/20"
              : "bg-white/90 border-gray-300"
          }`}>
            {filteredChampions.map((champion, index) => (
              <button
                key={champion.name}
                onClick={() => handleChampionClick(champion)}
                className={`w-full px-4 py-3 text-left transition-all duration-200 flex items-center gap-3 border-b last:border-b-0 hover:scale-[1.02] cursor-pointer ${
                  isDarkMode
                    ? "text-white hover:bg-white/10 border-white/10"
                    : "text-gray-900 hover:bg-gray-100 border-gray-200"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={getChampionImage(champion.name)}
                  alt={champion.name}
                  className={`w-10 h-10 rounded-full ring-2 transition-all duration-300 ${
                    isDarkMode ? "ring-white/30" : "ring-gray-400/50"
                  }`}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://ddragon.leagueoflegends.com/cdn/15.20.1/img/champion/Aatrox.png";
                  }}
                />
                <span>{champion.name}</span>
              </button>
            ))}
          </div>
        )}

        {/* Champion Details */}
        {selectedChampion && (
          <div className={`mt-4 w-full max-w-2xl backdrop-blur-xl rounded-xl border p-5 animate-fadeIn shadow-2xl transition-all duration-500 hover:scale-[1.01] ${
            isDarkMode
              ? "bg-black/70 border-white/20 hover:shadow-white/10"
              : "bg-white/90 hover:shadow-gray-400/20"
          }`}>
            <div className="flex items-center gap-4 mb-4 animate-slideInLeft">
              <img
                src={getChampionImage(selectedChampion.name)}
                alt={selectedChampion.name}
                className={`w-16 h-16 rounded-full border-3 shadow-lg hover:scale-110 transition-all duration-300 animate-glow ${
                  isDarkMode ? "border-white" : "border-gray-400"
                }`}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://ddragon.leagueoflegends.com/cdn/15.20.1/img/champion/Aatrox.png";
                }}
              />
              <div>
                <h2 className={`text-2xl font-bold transition-colors duration-500 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}>
                  {selectedChampion.name}
                </h2>
                <p className={`text-sm transition-colors duration-500 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}>ARAM Balance Changes</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className={`rounded-lg p-3 border transition-all duration-500 hover:scale-105 animate-fadeIn ${
                isDarkMode
                  ? "bg-white/5 border-white/10 hover:bg-white/10"
                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
              }`} style={{ animationDelay: '0.1s' }}>
                <p className={`text-xs mb-1 transition-colors duration-500 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}>Damage Dealt</p>
                <p
                  className={`text-xl font-bold transition-all duration-300 ${getStatTextColor(selectedChampion.damageDealt)}`}
                >
                  {selectedChampion.damageDealt}
                </p>
              </div>
              <div className={`rounded-lg p-3 border transition-all duration-500 hover:scale-105 animate-fadeIn ${
                isDarkMode
                  ? "bg-white/5 border-white/10 hover:bg-white/10"
                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
              }`} style={{ animationDelay: '0.2s' }}>
                <p className={`text-xs mb-1 transition-colors duration-500 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}>Damage Taken</p>
                <p
                  className={`text-xl font-bold transition-all duration-300 ${getStatTextColor(selectedChampion.damageTaken, true)}`}
                >
                  {selectedChampion.damageTaken}
                </p>
              </div>
            </div>

            {selectedChampion.passiveOther && (
              <div className={`rounded-lg p-3 border transition-all duration-500 hover:scale-[1.02] animate-fadeIn ${
                isDarkMode
                  ? "bg-white/5 border-white/10 hover:bg-white/10"
                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
              }`} style={{ animationDelay: '0.3s' }}>
                <p className={`text-xs mb-1 transition-colors duration-500 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}>Special Changes</p>
                <p className={`text-sm leading-relaxed transition-colors duration-500 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}>
                  {selectedChampion.passiveOther}
                </p>
              </div>
            )}
          </div>
        )}

        {searchQuery && filteredChampions.length === 0 && (
          <div className="mt-8 text-center animate-fadeIn">
            <p className={`text-lg transition-colors duration-500 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              No champions found matching &ldquo;{searchQuery}&rdquo;
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className={`relative z-10 border-t py-4 mt-auto transition-colors duration-500 backdrop-blur-xl ${
        isDarkMode ? "bg-black/80 border-white/10" : "bg-gray-50/80 border-gray-200"
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <div className="flex items-center gap-3 animate-slideInLeft order-1 sm:order-none">
              <div className="text-center sm:text-left">
                <p className={`font-semibold tracking-wide text-sm transition-colors duration-500 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}>
                  AM I NERFED?
                </p>
                <p className={`text-xs transition-colors duration-500 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}>Patch {data.patch}</p>
              </div>
            </div>

            <div className={`text-xs text-center animate-fadeInUp transition-colors duration-500 order-3 sm:order-none ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              <p className="whitespace-nowrap">&copy; 2025 AM I NERFED?. All rights reserved.</p>
              <p className="mt-1">Data from Riot Games</p>
            </div>

            <div className="flex items-center gap-4 animate-slideInRight order-2 sm:order-none">
              <a
                href="https://github.com/ethantaylan/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 hover:scale-125 hover:rotate-12 cursor-pointer ${
                  isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                }`}
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
