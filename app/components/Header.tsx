'use client';

import React from 'react';
import ThemeToggle from './ThemeToggle';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const Header: React.FC = () => {
  return (
    <header className="p-4 bg-gray-100 dark:bg-gray-800 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
        Content Creator Tools
      </h1>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
