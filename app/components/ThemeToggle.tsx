'use client';

import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? (
        <MoonIcon className="h-6 w-6 text-gray-800" />
      ) : (
        <SunIcon className="h-6 w-6 text-yellow-500" />
      )}
    </button>
  );
};

export default ThemeToggle;