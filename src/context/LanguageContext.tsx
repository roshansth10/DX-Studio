import React, { createContext, useContext } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, TranslationDictionary } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationDictionary;
}

const STORAGE_KEY = 'dx_studio_lang';

// Ensure any stale saved language preference is cleared
if (typeof window !== 'undefined') {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore storage errors
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const language: Language = 'en';
  const t = TRANSLATIONS.en;

  const setLanguage = () => {};
  const toggleLanguage = () => {};

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const defaultLanguageContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: TRANSLATIONS.en,
};

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  return context || defaultLanguageContext;
}
