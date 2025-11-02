import { useI18n } from '../hooks/useI18n';
import './FilterDropdown.css';

interface FilterDropdownProps {
  showIncompleteOnly: boolean;
  onToggle: (incomplete: boolean) => void;
}

export function FilterDropdown({ showIncompleteOnly, onToggle }: FilterDropdownProps) {
  const { t } = useI18n();
  
  return (
    <div className="filter-dropdown">
      <button
        className={`filter-option ${!showIncompleteOnly ? 'active' : ''}`}
        onClick={() => onToggle(false)}
        title={t('filter_all')}
      >
        📋 {t('filter_all')}
      </button>
      <button
        className={`filter-option ${showIncompleteOnly ? 'active' : ''}`}
        onClick={() => onToggle(true)}
        title={t('filter_incomplete')}
      >
        🔍 {t('filter_incomplete')}
      </button>
    </div>
  );
}
