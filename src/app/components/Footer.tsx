import { useI18n } from '../hooks/useI18n';
import './Footer.css';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <p className="footer-text">
        <span className="footer-credit">
          Vibe code with love by{' '}
          <a
            href="https://github.com/j2teamnnl"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link footer-link-highlight"
          >
            J2TeamNNL
          </a>
        </span>
      </p>
      <p className="footer-text footer-text-secondary">
        {t('footer_more_info')}{' '}
        <a
          href="https://www.toptal.com/developers/webdevchecklist"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Toptal
        </a>
      </p>
    </footer>
  );
}
