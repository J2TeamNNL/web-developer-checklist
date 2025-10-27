import { useI18n } from '../hooks/useI18n';
import './Footer.css';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <p className="footer-text">
        {t('footer_more_info')}{' '}
        <a
          href="https://www.toptal.com/developers/webdevchecklist"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          toptal.com
        </a>
      </p>
    </footer>
  );
}
