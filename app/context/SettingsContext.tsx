'use client';

import React, { createContext, useContext, useState } from 'react';

interface SettingsContextType {
  language: string;
  setLanguage: (lang: string) => void;
  notificationsEnabled: boolean;
  toggleNotifications: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [language, setLanguage] = useState<string>('en');
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true);

  const toggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  return (
    <SettingsContext.Provider value={{ language, setLanguage, notificationsEnabled, toggleNotifications }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
