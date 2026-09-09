import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, TranslationDictionary } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationDictionary;
}

const STORAGE_KEY = 'dx_studio_lang';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'fr') {
        return saved;
      }
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore storage errors
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

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
