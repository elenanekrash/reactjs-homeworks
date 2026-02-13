import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuList from "../components/MenuList";
import { getMeals } from "../services/api";

export default function MenuPage() {
    const [meals, setMeals] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        fetchMeals();
    }, []);

    const fetchMeals = async () => {
        try {
            const data = await getMeals();
            setMeals(data);
        } catch (err) {
            console.error(err);
        }
    };

    const addToCart = (meal) => {
        setCartCount((prev) => prev + 1);
    };

    return (
        <>
            <Navbar cartCount={cartCount} />

            <main className="px-12 py-12 bg-[#f3f8f8] min-h-screen">
                <h1 className="text-center text-4xl text-teal-500 mb-4">
                    Browse our menu
                </h1>

                <p className="text-center text-gray-500 mb-8">
                    Use our menu to place an order online
                </p>

                <MenuList meals={meals} addToCart={addToCart} />
            </main>

            <Footer />
        </>
    );
}
