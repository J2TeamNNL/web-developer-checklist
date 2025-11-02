import './FilterButton.css';

interface FilterButtonProps {
  showIncompleteOnly: boolean;
  onToggle: () => void;
}

export function FilterButton({ showIncompleteOnly, onToggle }: FilterButtonProps) {
  return (
    <button className="filter-btn" onClick={onToggle} title={showIncompleteOnly ? 'Show all checks' : 'Show incomplete only'}>
      {showIncompleteOnly ? '🔍 Incomplete' : '📋 All'}
    </button>
  );
}
