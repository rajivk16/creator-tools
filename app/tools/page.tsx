'use client';

import React, { useState } from 'react';
import { useFetchTools } from '../hooks/useFetchTools';
import ToolList from '../components/ToolList';
import FilterBar from '../components/FilterBar';
import { categories as staticCategories } from '../data/categories';
import SEO from '../seo/SEO';

const ToolsPage: React.FC = () => {
  const { tools, loading } = useFetchTools();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('rating');

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleSortChange = (sortBy: string) => {
    setSortBy(sortBy);
  };

  const sortedTools = tools.slice().sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.average_rating - a.average_rating;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'pricing':
        return a.pricing.localeCompare(b.pricing);
      default:
        return 0;
    }
  });

  const filteredTools = selectedCategories.length
    ? sortedTools.filter((tool) => selectedCategories.includes(tool.category_id.toString()))
    : sortedTools;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <SEO
        title="Best AI Tools for Content Creation"
        description="Discover the best AI tools to enhance your content creation and increase productivity. Find top-rated tools with detailed descriptions, features, and pricing."
        keywords="AI tools, content creation, make money online, productivity tools"
      />
      <FilterBar
        categories={staticCategories.map((cat) => cat.name)}
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
        onSortChange={handleSortChange}
      />
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-gray-500">Loading tools...</p>
        </div>
      ) : (
        <ToolList tools={filteredTools} />
      )}
    </div>
  );
};

export default ToolsPage;
