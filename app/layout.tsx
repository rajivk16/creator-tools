import React from 'react';
import MainLayout from './layouts/MainLayout';
import './styles/globals.css';

const RootLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
};

export default RootLayout;
