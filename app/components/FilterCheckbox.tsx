import React from 'react';

interface FilterCheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const FilterCheckbox: React.FC<FilterCheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox text-blue-600"
      />
      <span className="text-gray-900 dark:text-gray-100">{label}</span>
    </label>
  );
};

export default FilterCheckbox;
