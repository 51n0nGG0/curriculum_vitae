import React, { createContext, useContext, useState } from 'react';
import i18n from '../i18n';

import spainIcon from "../assets/icons/es.png";
import englishIcon from "../assets/icons/en.png";
import frenchIcon from "../assets/icons/fr.png";
import germanIcon from "../assets/icons/de.png";
import italianIcon from "../assets/icons/it.png";

// Lista de idiomas con iconos
const availableLanguages = [
    { code: "en", name: "English", icon: englishIcon },
    { code: "es", name: "Español", icon: spainIcon },
    { code: "fr", name: "Français", icon: frenchIcon },
    { code: "de", name: "Deutsch", icon: germanIcon },
    { code: "it", name: "Italiano", icon: italianIcon },
];

type LanguageContextType = {
    language: string;
    setLanguage: (lng: string) => void;
    languages: { code: string; name: string; icon: string }[];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<string>(i18n.language);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, languages: availableLanguages }}>
        {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};