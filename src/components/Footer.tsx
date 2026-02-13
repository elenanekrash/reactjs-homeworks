import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-100 dark:bg-gray-800 dark:text-white px-12 py-12 transition-colors">
            <div className="grid grid-cols-4 gap-6">
                <div>
                    <h4 className="font-bold">{t("footer.company")}</h4>
                    <p>{t("footer.home")}</p>
                    <p>{t("footer.order")}</p>
                    <p>{t("footer.faq")}</p>
                    <p>{t("footer.contact")}</p>
                </div>

                <div>
                    <h4 className="font-bold">{t("footer.template")}</h4>
                    <a href="https://google.com">{t("footer.styleGuide")}</a>
                    <br />
                    <a href="https://google.com">{t("footer.changelog")}</a>
                    <br />
                    <a href="https://google.com">{t("footer.licence")}</a>
                    <br />
                    <a href="https://google.com">{t("footer.webflowUniversity")}</a>
                </div>

                <div>
                    <h4 className="font-bold">{t("footer.flowbase")}</h4>
                    <p>{t("footer.moreCloneables")}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
