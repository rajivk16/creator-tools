'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ToolsLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gray-100 dark:bg-gray-900"
    >
      {children}
    </motion.div>
  );
};

export default ToolsLayout;
