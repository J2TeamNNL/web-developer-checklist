import { useState, useMemo } from 'react';
import { CheckResults } from '@/shared/types';

export function useFilter(results: CheckResults | null) {
  const [showIncompleteOnly, setShowIncompleteOnly] = useState(false);

  const filteredResults = useMemo(() => {
    if (!results || !showIncompleteOnly) return results;
    
    const filtered: CheckResults = { 
      ...results, 
      categories: {} 
    };
    
    Object.entries(results.categories).forEach(([key, category]) => {
      filtered.categories[key] = {
        ...category,
        checks: category.checks.filter(check => check.status !== 'pass'),
        summary: {
          ...category.summary,
          passed: 0,
          total: category.checks.filter(check => check.status !== 'pass').length,
        },
      };
    });
    
    return filtered;
  }, [results, showIncompleteOnly]);

  return { showIncompleteOnly, setShowIncompleteOnly, filteredResults };
}
