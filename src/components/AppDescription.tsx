interface AppDescriptionProps {
  isDarkMode?: boolean;
}

export function AppDescription({ isDarkMode = true }: AppDescriptionProps) {
  const textStyles = isDarkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <div
      className={`absolute top-6 md:top-10 left-1/2 transform -translate-x-1/2 z-40 w-[90%] max-w-sm sm:max-w-md md:max-w-lg text-center px-3 sm:px-4 transition-colors duration-500 ${textStyles}`}
    >
      <p className="text-xs sm:text-sm md:text-base leading-relaxed">
        Check League of Legends ARAM balance changes for champions - damage dealt, damage taken, and special modifications.
      </p>
    </div>
  );
}
