import { CategoryResults } from '@/shared/types';
import { useI18n } from '../hooks/useI18n';
import { CheckItem } from './CheckItem';
import './CategorySection.css';

interface CategorySectionProps {
  category: CategoryResults;
}

export function CategorySection({ category }: CategorySectionProps) {
  const { t } = useI18n();

  return (
    <div className="category-section">
      <div className="category-header">
        <span className="category-icon">{category.icon}</span>
        <h2 className="category-name">{t(category.name)}</h2>
        <span className="category-summary">
          {category.summary.passed}/{category.summary.total}
        </span>
      </div>
      <ul className="category-checks">
        {category.checks.map((check) => (
          <CheckItem key={check.id} check={check} />
        ))}
      </ul>
    </div>
  );
}
