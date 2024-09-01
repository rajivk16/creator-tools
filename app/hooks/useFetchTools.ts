'use client';

import { useState, useEffect } from 'react';
import { fetchTools } from '../utils/fetchTools';
import { Tool } from '../../types/tool';

export const useFetchTools = () => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchTools();
      setTools(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { tools, loading };
};
