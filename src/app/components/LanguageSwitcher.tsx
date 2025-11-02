import { useLanguage } from '../hooks/useLanguage';
import './LanguageSwitcher.css';

interface LanguageSwitcherProps {
  onLanguageChange: (lang: string) => void;
}

export function LanguageSwitcher({ onLanguageChange }: LanguageSwitcherProps) {
  const { language, changeLanguage } = useLanguage();

  const handleChange = (lang: 'en' | 'vi' | 'auto') => {
    changeLanguage(lang);
    onLanguageChange(lang);
  };

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${language === 'vi' || language === 'auto' ? 'active' : ''}`}
        onClick={() => handleChange('vi')}
        title="Tiếng Việt"
      >
        🇻🇳 VI
      </button>
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => handleChange('en')}
        title="English"
      >
        🇬🇧 EN
      </button>
    </div>
  );
}
