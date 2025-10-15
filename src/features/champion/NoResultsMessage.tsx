interface NoResultsMessageProps {
  searchQuery: string;
  isDarkMode?: boolean;
}

export function NoResultsMessage({ searchQuery, isDarkMode = true }: NoResultsMessageProps) {
  const textStyles = isDarkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className="mt-8 text-center animate-fadeIn">
      <p className={`text-lg transition-colors duration-500 ${textStyles}`}>
        No champions found matching &ldquo;{searchQuery}&rdquo;
      </p>
    </div>
  );
}
