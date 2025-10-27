import { useState, useEffect } from 'react';

export type Language = 'en' | 'vi' | 'auto';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('auto');

  useEffect(() => {
    // Load language from storage
    chrome.storage.sync.get(['language'], (result) => {
      const savedLanguage = result.language || 'auto';
      setLanguage(savedLanguage);
    });
  }, []);

  const detectBrowserLanguage = (): 'en' | 'vi' => {
    const browserLang = navigator.language.toLowerCase();
    
    // Check if Vietnamese
    if (browserLang.startsWith('vi')) {
      return 'vi';
    }
    
    // Default to English for all other languages
    return 'en';
  };

  const getCurrentLanguage = (): 'en' | 'vi' => {
    if (language === 'auto') {
      return detectBrowserLanguage();
    }
    return language;
  };

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    chrome.storage.sync.set({ language: newLanguage });
  };

  return { 
    language, 
    currentLanguage: getCurrentLanguage(),
    changeLanguage 
  };
}
