import { supabase } from '../../lib/supabaseClient';
import { Tool } from '../../types/tool';

export const fetchTools = async (): Promise<Tool[]> => {
  const { data, error } = await supabase.from('tools').select('*');
  if (error) {
    console.error('Error fetching tools:', error.message);
    return [];
  }
  return data as Tool[];
};
