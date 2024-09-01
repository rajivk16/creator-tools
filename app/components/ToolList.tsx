import React from 'react';
import { Tool } from '../../types/tool';
import Card from './Card';

interface ToolListProps {
  tools: Tool[];
}

const ToolList: React.FC<ToolListProps> = ({ tools }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {tools.map((tool) => (
        <Card key={tool.id} tool={tool} />
      ))}
    </div>
  );
};

export default ToolList;
