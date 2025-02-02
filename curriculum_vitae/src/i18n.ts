import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(HttpApi) // Load translations via HTTP
    .use(LanguageDetector) // Detect the user's language
    .use(initReactI18next) // Pass i18n instance to react-i18next
    .init({
        fallbackLng: 'en', // Fallback language
        debug: true, // Enable debug mode
        interpolation: {
        escapeValue: false, // React already escapes by default
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
    },
});

export default i18n;