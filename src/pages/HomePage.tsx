import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
    return (
        <>
            <Navbar cartCount={0} />

            <section className="px-12 py-20 bg-gray-100 dark:bg-gray-900 grid md:grid-cols-2 gap-10 items-center transition-colors">
                {/* LEFT */}
                <div>
                    <h1 className="text-5xl font-light leading-tight text-gray-900 dark:text-gray-50">
                        Beautiful food & takeaway,
                        <span className="text-teal-500 font-medium"> delivered</span>
                        <br />
                        to your door.
                    </h1>

                    <p className="text-gray-500 dark:text-gray-300 mt-6 max-w-md">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>

                    {/* DISABLED BUTTON */}
                    <button
                        disabled
                        className="
              mt-8
              bg-teal-400
              text-white
              px-6
              py-3
              rounded
              cursor-not-allowed
              opacity-70
              focus:outline-none
              focus:ring-2
              focus:ring-teal-500
            "
                    >
                        Place an Order
                    </button>

                    {/* TRUSTPILOT HARDCODED */}
                    <div className="mt-8">
                        <div className="flex items-center gap-2">
                            <span className="text-green-500 text-xl">★</span>
                            <span className="font-medium text-gray-900 dark:text-gray-50">
                Trustpilot
              </span>
                        </div>

                        <p className="text-gray-500 dark:text-gray-300 text-sm">
                            <span className="text-teal-500 font-medium">4.8 out of 5</span>{" "}
                            based on 2000+ reviews
                        </p>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1550547660-d9450f859349"
                        className="rounded-3xl shadow-lg"
                        alt="Delicious food"
                    />
                </div>
            </section>

            <Footer />
        </>
    );
};

export default HomePage;
