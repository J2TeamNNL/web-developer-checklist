import { CheckResults } from '@/shared/types';
import { useI18n } from '../hooks/useI18n';
import './ExportPanel.css';

interface ExportPanelProps {
  results: CheckResults | null;
  onCopy: () => void;
  onClose: () => void;
}

export function ExportPanel({ results, onCopy, onClose }: ExportPanelProps) {
  const { t } = useI18n();
  
  if (!results) return null;

  const exportText = Object.values(results.categories)
    .flatMap(cat => cat.checks)
    .filter(check => check.status === 'fail')
    .map(check => {
      const name = check.name || check.id || 'Unknown check';
      const message = check.message || 'No details';
      return `- ${name}: ${message}`;
    })
    .join('\n') || 'No failed checks found!';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(exportText);
    onCopy();
  };

  return (
    <>
      <div className="export-overlay" onClick={onClose} />
      <div className="export-panel">
        <div className="export-header">
          <h3>{t('export_button')}</h3>
          <button className="export-close" onClick={onClose}>×</button>
        </div>
        <textarea 
          readOnly 
          value={exportText} 
          className="export-textarea"
          placeholder="No incomplete checks"
        />
        <button onClick={handleCopy} className="export-copy-btn">
          📋 {t('copy_button')}
        </button>
      </div>
    </>
  );
}
