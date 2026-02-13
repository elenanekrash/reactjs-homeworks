import React from "react";
import { useTranslation } from "react-i18next";

const LanguageDropdown: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="border px-2 py-1 rounded focus:outline-none"
            aria-label="Select Language"
        >
            <option value="en">English</option>
            <option value="lt">Lietuviškai</option>
            <option value="es">Español</option>
        </select>
    );
};

export default LanguageDropdown;
