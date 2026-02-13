import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const HomePage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navbar cartCount={0} />

            <section className="px-12 py-20 bg-gray-100 dark:bg-gray-900 grid md:grid-cols-2 gap-10 items-center transition-colors">
                {/* LEFT */}
                <div>
                    <h1 className="text-5xl font-light leading-tight text-gray-900 dark:text-gray-50">
                        {t("home.title")}
                    </h1>

                    <p className="text-gray-500 dark:text-gray-300 mt-6 max-w-md">
                        {t("home.description")}
                    </p>

                    <button
                        disabled
                        className="mt-8 bg-teal-400 text-white px-6 py-3 rounded cursor-not-allowed opacity-70"
                    >
                        {t("home.button")}
                    </button>

                    <div className="mt-8">
                        <div className="flex items-center gap-2">
                            <span className="text-green-500 text-xl">★</span>
                            <span className="font-medium text-gray-900 dark:text-gray-50">
                {t("home.trustpilot")}
              </span>
                        </div>

                        <p className="text-gray-500 dark:text-gray-300 text-sm">
                            {t("home.trustpilotScore")}
                        </p>
                    </div>
                </div>

                {/* RIGHT */}
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1550547660-d9450f859349"
                        className="rounded-3xl shadow-lg"
                        alt={t("home.imageAlt", "Delicious food")}
                    />
                </div>
            </section>

            <Footer />
        </>
    );
};

export default HomePage;
