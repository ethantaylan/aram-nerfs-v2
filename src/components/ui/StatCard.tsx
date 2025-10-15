import { ReactNode } from 'react';

interface StatCardProps {
  label: string;
  value: ReactNode;
  isDarkMode?: boolean;
  delay?: string;
}

export function StatCard({ label, value, isDarkMode = true, delay = '0s' }: StatCardProps) {
  const themeStyles = isDarkMode
    ? 'bg-white/5 border-white/10 hover:bg-white/10'
    : 'bg-gray-50 border-gray-200 hover:bg-gray-100';

  const labelStyles = isDarkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <div
      className={`rounded-lg p-3 border transition-all duration-500 hover:scale-105 animate-fadeIn ${themeStyles}`}
      style={{ animationDelay: delay }}
    >
      <p className={`text-xs mb-1 transition-colors duration-500 ${labelStyles}`}>
        {label}
      </p>
      <div className="text-xl font-bold transition-all duration-300">
        {value}
      </div>
    </div>
  );
}
