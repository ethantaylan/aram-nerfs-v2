export const getStatTextColor = (
  value: string,
  isReversed: boolean = false,
  isDarkMode: boolean = true
): string => {
  if (value === '100%') {
    return isDarkMode ? 'text-white' : 'text-gray-900';
  }

  const numValue = parseInt(value);
  const isPositive = isReversed ? numValue < 100 : numValue > 100;

  return isPositive ? 'text-green-400' : 'text-red-400';
};
