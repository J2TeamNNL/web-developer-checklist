import { useState, useEffect } from 'react';
import { useLanguage } from './useLanguage';

export function useI18n() {
  const { currentLanguage } = useLanguage();
  const [, forceUpdate] = useState(0);

  // Force re-render when language changes
  useEffect(() => {
    forceUpdate(prev => prev + 1);
  }, [currentLanguage]);

  const t = (key: string): string => {
    return chrome.i18n.getMessage(key) || key;
  };

  return { t, currentLanguage };
}
