import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark' | 'auto';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('auto');

  useEffect(() => {
    // Load theme from storage
    chrome.storage.sync.get(['theme'], (result) => {
      const savedTheme = result.theme || 'auto';
      setTheme(savedTheme);
      applyTheme(savedTheme);
    });

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'auto') {
        applyTheme('auto');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const applyTheme = (newTheme: Theme) => {
    if (newTheme === 'auto') {
      // Detect system preference
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  };

  const toggleTheme = () => {
    // Toggle between light and dark only
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    
    setTheme(newTheme);
    applyTheme(newTheme);
    chrome.storage.sync.set({ theme: newTheme });
  };

  return { theme, toggleTheme };
}
