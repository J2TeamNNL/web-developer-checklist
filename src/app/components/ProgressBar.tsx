import { useI18n } from '../hooks/useI18n';
import './ProgressBar.css';

interface ProgressBarProps {
  passed: number;
  total: number;
}

export function ProgressBar({ passed, total }: ProgressBarProps) {
  const { t } = useI18n();
  const percentage = total > 0 ? (passed / total) * 100 : 0;

  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
      <div className="progress-text">
        {t('progress_checks_passed')} {passed}/{total}
      </div>
    </div>
  );
}
