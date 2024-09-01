import React from 'react';
import FilterCheckbox from './FilterCheckbox';
import SortDropdown from './SortDropdown';

interface FilterBarProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  onSortChange: (sortBy: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  selectedCategories,
  onCategoryChange,
  onSortChange,
}) => {
  return (
    <div className="flex flex-wrap justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg mb-4">
      <div className="flex space-x-4">
        {categories.map((category) => (
          <FilterCheckbox
            key={category}
            label={category}
            checked={selectedCategories.includes(category)}
            onChange={() => onCategoryChange(category)}
          />
        ))}
      </div>
      <SortDropdown onSortChange={onSortChange} />
    </div>
  );
};

export default FilterBar;
