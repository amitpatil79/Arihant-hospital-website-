'use client';

import { useLanguage } from '@/lib/language-context';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
        aria-label={`Switch to ${language === 'en' ? 'Marathi' : 'English'}`}
      >
        <span className="text-xs">
          {language === 'en' ? '🇮🇳' : '🇺🇸'}
        </span>
        <span>
          {language === 'en' ? 'मराठी' : 'English'}
        </span>
      </button>
    </div>
  );
}