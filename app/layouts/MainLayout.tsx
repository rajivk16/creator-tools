'use client';

import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const MainLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <ThemeProvider>
      <motion.div
        className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </motion.div>
    </ThemeProvider>
  );
};

export default MainLayout;
