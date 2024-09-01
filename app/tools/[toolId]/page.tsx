'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Updated hook
import { supabase } from '../../../lib/supabaseClient';
import { Tool } from '../../../types/tool';
import SEO from '../../seo/SEO';

const ToolDetailPage: React.FC = () => {
  const params = useParams(); // Use useParams hook
  const toolId = params?.toolId; // Fetch dynamic toolId from params
  const [tool, setTool] = useState<Tool | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!toolId) return;

    const fetchTool = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('tools').select('*').eq('id', toolId).single();
      if (error) {
        console.error('Error fetching tool:', error.message);
      } else {
        setTool(data);
      }
      setLoading(false);
    };

    fetchTool();
  }, [toolId]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (!tool) {
    return <p className="text-center text-red-500">Tool not found.</p>;
  }

  return (
    <div className="min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
      <SEO
        title={tool.name}
        description={tool.description}
        keywords={`AI tools, content creation, ${tool.name}`}
      />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{tool.name}</h1>
      <p className="mt-4 text-gray-700 dark:text-gray-300">{tool.description}</p>
      <div className="mt-8">
        <a
          href={tool.affiliate_link} // Updated to use the new field
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Tool
        </a>
      </div>
    </div>
  );
};

export default ToolDetailPage;
