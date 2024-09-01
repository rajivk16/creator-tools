import React from 'react';

interface SortDropdownProps {
  onSortChange: (sortBy: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ onSortChange }) => {
  return (
    <div className="relative inline-block text-left">
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-2 rounded-md shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="rating">Sort by Rating</option>
        <option value="name">Sort by Name</option>
        <option value="pricing">Sort by Pricing</option>
      </select>
    </div>
  );
};

export default SortDropdown;
