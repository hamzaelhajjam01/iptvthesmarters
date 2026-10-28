export interface Locale {
  code: string;
  name: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

export const LOCALES: Record<string, Locale> = {
  en: { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr' },
  fr: { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' },
  de: { code: 'de', name: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  es: { code: 'es', name: 'Español', flag: '🇪🇸', dir: 'ltr' },
  ar: { code: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  it: { code: 'it', name: 'Italiano', flag: '🇮🇹', dir: 'ltr' },
  nl: { code: 'nl', name: 'Nederlands', flag: '🇳🇱', dir: 'ltr' },
  pt: { code: 'pt', name: 'Português', flag: '🇵🇹', dir: 'ltr' },
  'pt-br': { code: 'pt-br', name: 'Português (BR)', flag: '🇧🇷', dir: 'ltr' },
  pl: { code: 'pl', name: 'Polski', flag: '🇵🇱', dir: 'ltr' },
  ko: { code: 'ko', name: '한국어', flag: '🇰🇷', dir: 'ltr' },
};

export const ALL_LOCALES = Object.values(LOCALES);
export const SUPPORTED_LANG_CODES = Object.keys(LOCALES);
export const DEFAULT_LOCALE = LOCALES.en;
