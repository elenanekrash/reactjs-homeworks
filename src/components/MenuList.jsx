import { useState, useEffect } from "react";
import MealCard from "./MealCard";

export default function MenuList({ meals, addToCart }) {

    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        setVisibleCount(6);
    }, [meals]);

    const visibleMeals = meals.slice(0, visibleCount);

    const handleSeeMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    return (
        <>
            <div className="grid grid-cols-2 gap-6">

                {visibleMeals.map((meal) => (
                    <MealCard
                        key={meal.id}
                        meal={meal}
                        onAdd={() => addToCart(meal)}
                    />
                ))}

            </div>

            {visibleCount < meals.length && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleSeeMore}
                        className="bg-teal-500 text-white px-6 py-2 rounded"
                    >
                        See more
                    </button>
                </div>
            )}
        </>
    );
}
