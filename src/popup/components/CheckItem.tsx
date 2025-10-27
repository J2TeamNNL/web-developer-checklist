import { useState } from 'react';
import { CheckResult } from '@/shared/types';
import { useI18n } from '../hooks/useI18n';
import './CheckItem.css';

interface CheckItemProps {
  check: CheckResult;
}

export function CheckItem({ check }: CheckItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useI18n();

  const getStatusIcon = () => {
    switch (check.status) {
      case 'pass':
        return '✓';
      case 'fail':
        return '✗';
      case 'na':
        return '?';
      case 'loading':
        return '...';
    }
  };

  return (
    <li className={`check-item check-item--${check.status}`}>
      <div className="check-item-wrapper" onClick={() => setIsOpen(!isOpen)}>
        <span className="check-icon">{getStatusIcon()}</span>
        <span className="check-name">{check.name ? t(check.name) : t(`check_${check.id}`)}</span>
        <span className={`arrow ${isOpen ? 'arrow--open' : ''}`}>▶</span>
      </div>
      {isOpen && (
        <div className="check-details">
          {check.message && <p className="check-message">{check.message}</p>}
          {check.details && <pre className="check-details-text">{JSON.stringify(check.details, null, 2)}</pre>}
          {check.link && (
            <a href={check.link} target="_blank" rel="noopener noreferrer" className="check-link">
              {t('learn_more')} →
            </a>
          )}
        </div>
      )}
    </li>
  );
}
