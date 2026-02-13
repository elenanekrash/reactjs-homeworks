import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    cartCount?: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount = 0 }) => {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();

    const linkStyle = (path: string): string =>
        location.pathname === path
            ? "text-teal-500"
            : "text-gray-600 hover:text-teal-500";

    return (
        <nav className="flex justify-between items-center px-12 py-6 bg-white dark:bg-gray-900 shadow-sm transition-colors">
            <div className="text-teal-500 font-bold text-xl">{t("navbar.brand")}</div>

            <div className="flex gap-8 font-medium items-center">
                <Link to="/" className={linkStyle("/")}>
                    {t("navbar.home")}
                </Link>
                <Link to="/menu" className={linkStyle("/menu")}>
                    {t("navbar.menu")}
                </Link>
                <Link to="/order" className={linkStyle("/order")}>
                    {t("navbar.order")}
                </Link>
                <Link to="/login" className={linkStyle("/login")}>
                    {t("navbar.login")}
                </Link>

                <button
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors dark:text-white"
                >
                    {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                </button>

                <LanguageDropdown />
            </div>
        </nav>
    );
};

export default Navbar;
