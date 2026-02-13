import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Order() {
    return (
        <>
            <Navbar />

            <section className="min-h-screen bg-[#f3f8f8] flex items-center justify-center">

                <div className="bg-white shadow-lg rounded-2xl p-12 text-center">

                    <h1 className="text-4xl font-light mb-4 text-teal-500">
                        Order Page
                    </h1>

                    <p className="text-gray-500">
                        This page is protected. Only logged-in users can see it.
                    </p>

                </div>

            </section>

            <Footer />
        </>
    );
}

export default Order;
