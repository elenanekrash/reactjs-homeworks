import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuList from "../components/MenuList";
import { getMeals } from "../services/api";
import FilterButton from "../components/FilterButton";

export default function MenuPage() {
    const [meals, setMeals] = useState([]);
    const [filteredMeals, setFilteredMeals] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [activeCategory, setActiveCategory] = useState("Dessert");

    useEffect(() => {
        fetchMeals();
    }, []);

    const fetchMeals = async () => {
        const data = await getMeals();
        setMeals(data);

        // default category
        const filtered = data.filter(
            (meal) => meal.category === "Dessert"
        );

        setFilteredMeals(filtered);
    };

    const filterMeals = (category) => {
        setActiveCategory(category);

        const filtered = meals.filter(
            (meal) => meal.category === category
        );

        setFilteredMeals(filtered);
    };

    const addToCart = () => {
        setCartCount((prev) => prev + 1);
    };

    return (
        <>
            <Navbar cartCount={cartCount} />

            <main className="px-12 py-12 bg-[#f3f8f8] min-h-screen">

                {/* TITLE */}
                <h1 className="text-center text-4xl text-teal-500 mb-4">
                    Browse our menu
                </h1>

                <p className="text-center text-gray-500 mb-8">
                    Use our menu to place an order online
                </p>

                {/* FILTER BUTTONS */}
                <div className="flex justify-center gap-4 mb-10">

                    <FilterButton
                        title="Dessert"
                        active={activeCategory === "Dessert"}
                        onClick={filterMeals}
                    />

                    <FilterButton
                        title="Dinner"
                        active={activeCategory === "Dinner"}
                        onClick={filterMeals}
                    />

                    <FilterButton
                        title="Breakfast"
                        active={activeCategory === "Breakfast"}
                        onClick={filterMeals}
                    />

                </div>

                {/* MENU */}
                <MenuList meals={filteredMeals} addToCart={addToCart} />

            </main>

            <Footer />
        </>
    );
}
