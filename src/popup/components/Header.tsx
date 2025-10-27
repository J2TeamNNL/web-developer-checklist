import { useI18n } from '../hooks/useI18n';
import { useTheme } from '../hooks/useTheme';
import './Header.css';

export function Header() {
  const { t } = useI18n();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">{t('header_title')}</h1>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          title={theme === 'dark' ? t('theme_light') : t('theme_dark')}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}
