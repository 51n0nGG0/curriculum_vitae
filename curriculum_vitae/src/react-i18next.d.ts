import 'react-i18next';
import translation from '../public/locales/en/translation.json';

type TranslationKeys = typeof translation;

// Extend the i18next module with the shape of your resources
declare module 'i18next' {
    interface CustomTypeOptions {
        resources: TranslationKeys;
    }
}