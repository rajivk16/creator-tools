'use client';

import React from 'react';
import SEO from './seo/SEO';
import ToolList from './components/ToolList'; // Add any necessary imports

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <SEO
        title="Welcome to Content Creator Tools"
        description="Discover a variety of AI tools to enhance your content creation process and increase productivity."
        keywords="AI tools, content creation, productivity tools"
      />
      <div className="text-center p-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Welcome to Content Creator Tools
        </h1>
        <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">
          Explore our comprehensive list of AI tools to elevate your content creation process.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
